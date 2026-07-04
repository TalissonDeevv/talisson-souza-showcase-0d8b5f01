import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { ptBR, enUS } from "date-fns/locale";
import { MoreHorizontal, Pencil, Trash2, X, Loader2 } from "lucide-react";
import { supabaseComments as supabase } from "@/integrations/supabase-comments/client";
import { useDiscordAuth } from "@/hooks/useDiscordAuth";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { useToast } from "@/hooks/use-toast";
import DiscordLoginPrompt from "./DiscordLoginPrompt";

const MAX = 2000;

interface CommentRow {
  id: string;
  article_slug: string;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
  author?: {
    username: string;
    global_name: string | null;
    avatar_url: string | null;
  } | null;
}

interface Props {
  articleSlug: string;
}

// --- text sanitization (XSS defense at the presentation layer) ------
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

const CommentsSection = ({ articleSlug }: Props) => {
  const { language } = useTheme();
  const { toast } = useToast();
  const { user, profile, signIn, signOut, loading: authLoading } = useDiscordAuth();
  const locale = language === "en" ? enUS : ptBR;

  const [comments, setComments] = useState<CommentRow[]>([]);
  const [loading, setLoading]   = useState(true);
  const [draft, setDraft]       = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId]   = useState<string | null>(null);
  const [editDraft, setEditDraft]   = useState("");
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);

  // -- fetch --
  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("comments" as any)
      .select("id, article_slug, user_id, content, created_at, updated_at")
      .eq("article_slug", articleSlug)
      .order("created_at", { ascending: false })
      .limit(200);
    if (error) {
      setLoading(false);
      return;
    }
    const rows = ((data as unknown) as CommentRow[]) ?? [];
    const ids = Array.from(new Set(rows.map((r) => r.user_id)));
    let authors: Record<string, CommentRow["author"]> = {};
    if (ids.length) {
      const { data: profs } = await supabase
        .from("discord_profiles" as any)
        .select("id, username, global_name, avatar_url")
        .in("id", ids);
      for (const p of (profs as any[]) ?? []) {
        authors[p.id] = { username: p.username, global_name: p.global_name, avatar_url: p.avatar_url };
      }
    }
    setComments(rows.map((r) => ({ ...r, author: authors[r.user_id] ?? null })));
    setLoading(false);
  }, [articleSlug]);

  useEffect(() => { load(); }, [load]);

  // -- realtime (optional, silent if table not exposed) --
  useEffect(() => {
    const ch = supabase
      .channel(`comments:${articleSlug}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "comments", filter: `article_slug=eq.${articleSlug}` },
        () => load())
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [articleSlug, load]);

  // -- create --
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const content = draft.trim();
    if (!content) return;
    if (content.length > MAX) return;
    setSubmitting(true);
    const { error } = await supabase
      .from("comments" as any)
      .insert({ article_slug: articleSlug, user_id: user.id, content });
    setSubmitting(false);
    if (error) {
      const msg = /rate_limit_short/.test(error.message)
        ? getText(language, "Aguarde alguns segundos antes de comentar novamente.", "Please wait a few seconds before commenting again.")
        : /rate_limit_hour/.test(error.message)
        ? getText(language, "Limite de comentários por hora atingido.", "Hourly comment limit reached.")
        : getText(language, "Não foi possível publicar o comentário.", "Could not publish your comment.");
      toast({ title: msg, variant: "destructive" });
      return;
    }
    setDraft("");
    load();
  };

  // -- edit --
  const startEdit = (c: CommentRow) => { setEditingId(c.id); setEditDraft(c.content); setMenuOpenId(null); };
  const saveEdit  = async (id: string) => {
    const content = editDraft.trim();
    if (!content) return;
    const { error } = await supabase.from("comments" as any).update({ content }).eq("id", id);
    if (error) {
      toast({ title: getText(language, "Erro ao editar", "Edit failed"), variant: "destructive" });
      return;
    }
    setEditingId(null); setEditDraft("");
    load();
  };

  // -- delete --
  const del = async (id: string) => {
    setMenuOpenId(null);
    const { error } = await supabase.from("comments" as any).delete().eq("id", id);
    if (error) {
      toast({ title: getText(language, "Erro ao excluir", "Delete failed"), variant: "destructive" });
      return;
    }
    load();
  };

  const total = comments.length;
  const displayName = (c: CommentRow) => c.author?.global_name || c.author?.username || getText(language, "leitor", "reader");

  return (
    <section className="mt-16 pt-10 border-t border-border/40" aria-label={getText(language, "Comentários", "Comments")}>
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground">
          {getText(language, "Comentários", "Comments")}
        </h2>
        <span className="text-sm text-muted-foreground tabular-nums">
          {total} {getText(language, total === 1 ? "comentário" : "comentários", total === 1 ? "comment" : "comments")}
        </span>
      </div>

      {!user && !authLoading && (
        <DiscordLoginPrompt onSignIn={signIn} loading={authLoading} />
      )}

      {user && (
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex items-start gap-3">
            <img
              src={profile?.avatar_url ?? `https://cdn.discordapp.com/embed/avatars/0.png`}
              alt=""
              className="w-10 h-10 rounded-full border border-border/40 object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value.slice(0, MAX))}
                rows={3}
                placeholder={getText(language, "Escreva seu comentário…", "Write your comment…")}
                className="w-full rounded-xl border border-border/40 bg-card/40 backdrop-blur px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-foreground/30 resize-y"
                maxLength={MAX}
              />
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-muted-foreground">
                  <span className="tabular-nums">{draft.length}</span> / {MAX}
                  <button type="button" onClick={signOut}
                    className="ml-4 text-xs text-muted-foreground hover:text-foreground underline underline-offset-2">
                    {getText(language, "Sair", "Sign out")}
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={submitting || !draft.trim()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-foreground text-background hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {submitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  {getText(language, "Publicar", "Post")}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {loading ? (
        <div className="py-10 flex justify-center"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>
      ) : comments.length === 0 ? (
        <p className="text-sm text-muted-foreground py-6">
          {getText(language, "Ainda não há comentários. Seja o primeiro.", "No comments yet. Be the first.")}
        </p>
      ) : (
        <ul className="space-y-6">
          <AnimatePresence initial={false}>
            {comments.map((c) => {
              const mine = user?.id === c.user_id;
              const edited = c.updated_at !== c.created_at;
              return (
                <motion.li
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-3"
                >
                  <img
                    src={c.author?.avatar_url ?? `https://cdn.discordapp.com/embed/avatars/0.png`}
                    alt=""
                    className="w-10 h-10 rounded-full border border-border/40 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-sm font-medium text-foreground">{displayName(c)}</span>
                      <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(c.created_at), { addSuffix: true, locale })}
                        {edited && ` · ${getText(language, "editado", "edited")}`}
                      </span>
                      {mine && (
                        <div className="relative ml-auto">
                          <button
                            type="button"
                            onClick={() => setMenuOpenId(menuOpenId === c.id ? null : c.id)}
                            className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                            aria-label={getText(language, "Opções", "Options")}
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                          {menuOpenId === c.id && (
                            <div className="absolute right-0 mt-1 w-32 rounded-lg border border-border/50 bg-popover shadow-lg z-10 overflow-hidden">
                              <button onClick={() => startEdit(c)}
                                className="w-full flex items-center gap-2 px-3 py-2 text-xs text-foreground hover:bg-foreground/5">
                                <Pencil className="w-3.5 h-3.5" /> {getText(language, "Editar", "Edit")}
                              </button>
                              <button onClick={() => del(c.id)}
                                className="w-full flex items-center gap-2 px-3 py-2 text-xs text-destructive hover:bg-destructive/10">
                                <Trash2 className="w-3.5 h-3.5" /> {getText(language, "Excluir", "Delete")}
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    {editingId === c.id ? (
                      <div>
                        <textarea
                          value={editDraft}
                          onChange={(e) => setEditDraft(e.target.value.slice(0, MAX))}
                          rows={3}
                          className="w-full rounded-lg border border-border/40 bg-card/40 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground/30 resize-y"
                          maxLength={MAX}
                        />
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => saveEdit(c.id)}
                            className="px-3 py-1.5 rounded-md text-xs font-medium bg-foreground text-background hover:opacity-90">
                            {getText(language, "Salvar", "Save")}
                          </button>
                          <button onClick={() => { setEditingId(null); setEditDraft(""); }}
                            className="px-3 py-1.5 rounded-md text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                            <X className="w-3.5 h-3.5" /> {getText(language, "Cancelar", "Cancel")}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p
                        className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap break-words"
                        // Escaped upstream — set as text to prevent any HTML rendering.
                        dangerouslySetInnerHTML={{ __html: escapeHtml(c.content).replace(/\n/g, "<br/>") }}
                      />
                    )}
                  </div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      )}
    </section>
  );
};

export default CommentsSection;
