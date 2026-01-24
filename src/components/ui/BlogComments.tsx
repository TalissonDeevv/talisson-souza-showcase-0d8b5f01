import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Comment {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  profiles: {
    github_username: string;
    avatar_url: string;
    full_name: string;
  };
}

interface BlogCommentsProps {
  blogId: string;
}

const BlogComments = ({ blogId }: BlogCommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
    
    // Subscribe to realtime updates
    const channel = supabase
      .channel(`comments-${blogId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'blog_comments',
          filter: `blog_id=eq.${blogId}`,
        },
        () => {
          fetchComments();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [blogId]);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_comments')
        .select(`
          *,
          profiles (
            github_username,
            avatar_url,
            full_name
          )
        `)
        .eq('blog_id', blogId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error: any) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Comentários ({comments.length})
      </h3>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8">
        <p className="text-gray-700 dark:text-gray-300">
          Sistema de comentários temporariamente desabilitado.
        </p>
      </div>

      <div className="space-y-6">
        {loading ? (
          <p className="text-gray-600 dark:text-gray-400">Carregando comentários...</p>
        ) : comments.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">
            Nenhum comentário ainda.
          </p>
        ) : (
          comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <div className="flex items-start gap-4">
                <img
                  src={comment.profiles.avatar_url || '/placeholder.svg'}
                  alt={comment.profiles.github_username}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {comment.profiles.full_name || comment.profiles.github_username}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        @{comment.profiles.github_username} •{' '}
                        {formatDistanceToNow(new Date(comment.created_at), {
                          addSuffix: true,
                          locale: ptBR,
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {comment.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogComments;