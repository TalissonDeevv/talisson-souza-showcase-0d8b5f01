import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/contexts/ThemeContext';
import { getText } from '@/utils/translations';
import { lovable } from '@/integrations/lovable/index';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Loader2, Trash2, Send } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { toast } from 'sonner';

interface Comment {
  id: string;
  article_slug: string;
  user_id: string;
  content: string;
  created_at: string;
}

interface UserMeta {
  avatar_url?: string;
  full_name?: string;
  user_name?: string;
}

interface ArticleCommentsProps {
  articleSlug: string;
}

const ArticleComments = ({ articleSlug }: ArticleCommentsProps) => {
  const { user } = useAuth();
  const { language } = useTheme();
  const [comments, setComments] = useState<Comment[]>([]);
  const [userMetas, setUserMetas] = useState<Record<string, UserMeta>>({});
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [lastSubmit, setLastSubmit] = useState(0);
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const fetchComments = useCallback(async () => {
    const { data, error } = await supabase
      .from('article_comments')
      .select('*')
      .eq('article_slug', articleSlug)
      .order('created_at', { ascending: true });

    if (!error && data) {
      setComments(data);
      // Fetch user profiles for comments
      const userIds = [...new Set(data.map(c => c.user_id))];
      if (userIds.length > 0) {
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id, full_name, avatar_url, github_username')
          .in('id', userIds);
        if (profiles) {
          const map: Record<string, UserMeta> = {};
          profiles.forEach(p => {
            map[p.id] = {
              avatar_url: p.avatar_url || undefined,
              full_name: p.full_name || undefined,
              user_name: p.github_username || undefined,
            };
          });
          setUserMetas(map);
        }
      }
    }
    setLoading(false);
  }, [articleSlug]);

  useEffect(() => {
    fetchComments();

    const channel = supabase
      .channel(`article-comments-${articleSlug}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'article_comments',
        filter: `article_slug=eq.${articleSlug}`,
      }, () => {
        fetchComments();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [articleSlug, fetchComments]);

  const handleSubmit = async () => {
    if (!user || !content.trim()) return;

    // Rate limit: 10s between comments
    const now = Date.now();
    if (now - lastSubmit < 10000) {
      toast.error(getText(language, 'Aguarde alguns segundos antes de comentar novamente.', 'Please wait a few seconds before commenting again.'));
      return;
    }

    // Max length
    if (content.trim().length > 2000) {
      toast.error(getText(language, 'Comentário muito longo (máximo 2000 caracteres).', 'Comment too long (max 2000 characters).'));
      return;
    }

    setSubmitting(true);
    const sanitized = content.trim().replace(/<[^>]*>/g, '');

    const { error } = await supabase
      .from('article_comments')
      .insert({
        article_slug: articleSlug,
        user_id: user.id,
        content: sanitized,
      });

    if (error) {
      toast.error(getText(language, 'Erro ao publicar comentário.', 'Error posting comment.'));
    } else {
      setContent('');
      setLastSubmit(now);
      toast.success(getText(language, 'Comentário publicado!', 'Comment posted!'));
    }
    setSubmitting(false);
  };

  const handleDelete = async (commentId: string) => {
    setDeletingId(commentId);
    const { error } = await supabase
      .from('article_comments')
      .delete()
      .eq('id', commentId);

    if (error) {
      toast.error(getText(language, 'Erro ao excluir comentário.', 'Error deleting comment.'));
    }
    setDeletingId(null);
  };

  const handleSignIn = async (provider: 'google' | 'apple') => {
    setLoadingProvider(provider);
    try {
      await lovable.auth.signInWithOAuth(provider, {
        redirect_uri: window.location.origin,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingProvider(null);
    }
  };

  const getUserDisplay = (userId: string) => {
    const meta = userMetas[userId];
    return {
      name: meta?.full_name || meta?.user_name || 'Usuário',
      avatar: meta?.avatar_url,
      initials: (meta?.full_name || meta?.user_name || 'U').charAt(0).toUpperCase(),
    };
  };

  return (
    <div className="mt-16 pt-10 border-t border-border/20">
      <h3 className="text-xl font-serif text-foreground mb-8">
        {getText(language, 'Comentários', 'Comments')}
        {comments.length > 0 && ` (${comments.length})`}
      </h3>

      {/* Comment input or login prompt */}
      {user ? (
        <div className="mb-10">
          <div className="flex items-start gap-3">
            {user.avatar_url ? (
              <img src={user.avatar_url} alt="" className="w-9 h-9 rounded-full flex-shrink-0 mt-1" />
            ) : (
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1 text-sm font-medium text-foreground">
                {(user.full_name || user.user_name || 'U').charAt(0).toUpperCase()}
              </div>
            )}
            <div className="flex-1">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={getText(language, 'Escreva um comentário...', 'Write a comment...')}
                className="w-full min-h-[100px] p-4 rounded-xl bg-background border border-border/40 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-border resize-none transition-colors"
                maxLength={2000}
              />
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-muted-foreground/50">{content.length}/2000</span>
                <button
                  onClick={handleSubmit}
                  disabled={submitting || !content.trim()}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {getText(language, 'Publicar', 'Post')}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-10 p-6 rounded-xl border border-border/30 bg-card/50 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            {getText(language, 'Para comentar, faça login com sua conta', 'To comment, sign in with your account')}
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => handleSignIn('google')}
              disabled={!!loadingProvider}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border/50 bg-background hover:bg-secondary/50 transition-colors text-sm font-medium text-foreground disabled:opacity-50"
            >
              {loadingProvider === 'google' ? <Loader2 className="h-4 w-4 animate-spin" /> : <FcGoogle className="h-4 w-4" />}
              Google
            </button>
            <button
              onClick={() => handleSignIn('apple')}
              disabled={!!loadingProvider}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border/50 bg-background hover:bg-secondary/50 transition-colors text-sm font-medium text-foreground disabled:opacity-50"
            >
              {loadingProvider === 'apple' ? <Loader2 className="h-4 w-4 animate-spin" /> : <FaApple className="h-4 w-4" />}
              Apple
            </button>
          </div>
        </div>
      )}

      {/* Comments list */}
      {loading ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          {getText(language, 'Carregando...', 'Loading...')}
        </div>
      ) : comments.length === 0 ? (
        <p className="text-sm text-muted-foreground/60">
          {getText(language, 'Nenhum comentário ainda. Seja o primeiro!', 'No comments yet. Be the first!')}
        </p>
      ) : (
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {comments.map((comment) => {
              const display = getUserDisplay(comment.user_id);
              return (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  {display.avatar ? (
                    <img src={display.avatar} alt="" className="w-8 h-8 rounded-full flex-shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium text-foreground">
                      {display.initials}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-foreground">{display.name}</span>
                      <span className="text-xs text-muted-foreground/50">
                        {formatDistanceToNow(new Date(comment.created_at), {
                          addSuffix: true,
                          locale: language === 'pt' ? ptBR : undefined,
                        })}
                      </span>
                      {user?.id === comment.user_id && (
                        <button
                          onClick={() => handleDelete(comment.id)}
                          disabled={deletingId === comment.id}
                          className="ml-auto text-muted-foreground/40 hover:text-destructive transition-colors p-1"
                          title={getText(language, 'Excluir', 'Delete')}
                        >
                          {deletingId === comment.id ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <Trash2 className="h-3.5 w-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                    <p className="text-sm text-foreground/80 whitespace-pre-wrap break-words leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default ArticleComments;
