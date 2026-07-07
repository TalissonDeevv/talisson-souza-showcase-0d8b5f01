import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { ptBR, enUS } from "date-fns/locale";
import { MoreHorizontal, Pencil, Trash2, X, Loader2, MessageSquare } from "lucide-react";
import { supabaseComments as supabase } from "@/integrations/supabase-comments/client";
import { useDiscordAuth } from "@/hooks/useDiscordAuth";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import DiscordLoginPrompt from "./DiscordLoginPrompt";

const MAX = 2000;

interface CommentRow {
  id: string;
  article_slug: string;
  user_id: string;
  parent_id: string | null;
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
  variant?: "inline" | "sidebar";
}

const cleanHandle = (u?: string | null) => (u ?? "").replace(/#0+$/, "");

const CommentsSection = ({ articleSlug, variant = "inline" }: Props) => {
  const { language } = useTheme();
  const { toast } = useToast();
  const { userId, profile, signIn, signOut, loading: authLoading } = useDiscordAuth();
  const locale = language === "en" ? enUS : ptBR;

  const [comments, setComments] = useState<CommentRow[]>([]);
  const [loading, setLoading]   = useState(true);
  const [draft, setDraft]       = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId]   = useState<string | null>(null);
  const [editDraft, setEditDraft]   = useState("");
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [replyToId, setReplyToId]   = useState<string | null>(null);
  const [replyDraft, setReplyDraft] = useState("");
  const [replySubmitting, setReplySubmitting] = useState(false);

  // -- fetch --
  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("comments")
      .select("id, article_slug, user_id, parent_id, content, created_at, updated_at")
      .eq("article_slug", articleSlug)
      .order("created_at", { ascending: true })
      .limit(500);
    if (error) {
      setLoading(false);
      return;
    }
    const rows = ((data as unknown) as CommentRow[]) ?? [];
    const ids = Array.from(new Set(rows.map((r) => r.user_id)));
    const authors: Record<string, CommentRow["author"]> = {};
    if (ids.length) {
      const { data: profs } = await supabase
        .from("discord_profiles")
        .select("id, username, global_name, avatar_url")
        .in("id", ids);
      for (const p of profs ?? []) {
        authors[p.id] = { username: p.username, global_name: p.global_name, avatar_url: p.avatar_url };
      }
    }
    setComments(rows.map((r) => ({ ...r, author: authors[r.user_id] ?? null })));
    setLoading(false);
  }, [articleSlug]);

  useEffect(() => { load(); }, [load]);

  // -- realtime (silent if unavailable) --
  useEffect(() => {
    const ch = supabase
      .channel(`comments:${articleSlug}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "comments", filter: `article_slug=eq.${articleSlug}` },
        () => load())
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [articleSlug, load]);

  // -- helpers --
  const rateLimitToast = (msg: string) => {
    if (/rate_limit_short/.test(msg)) return getText(language, "Aguarde alguns segundos antes de comentar novamente.", "Please wait a few seconds before commenting again.");
    if (/rate_limit_hour/.test(msg)) return getText(language, "Limite de comentários por hora atingido.", "Hourly comment limit reached.");
    if (/reply_depth_exceeded/.test(msg)) return getText(language, "Respostas de resposta não são permitidas.", "Nested replies are not allowed.");
    if (/reply_article_mismatch|reply_parent_not_found|reply_parent_deleted/.test(msg)) {
      return getText(
        language,
        "Este comentário não pode mais receber respostas. Atualize a página.",
        "This comment can no longer receive replies. Refresh the page.",
      );
    }
    return getText(language, "Não foi possível publicar o comentário.", "Could not publish your comment.");
  };

  // -- create top-level --
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;
    const content = draft.trim();
    if (!content || content.length > MAX) return;
    setSubmitting(true);
    const { error } = await supabase
      .from("comments")
      .insert({ article_slug: articleSlug, user_id: userId, content, parent_id: null });
    setSubmitting(false);
    if (error) {
      toast({ title: rateLimitToast(error.message), variant: "destructive" });
      return;
    }
    setDraft("");
    load();
  };

  // -- create reply --
  const submitReply = async (parentId: string) => {
    if (!userId) return;
    const content = replyDraft.trim();
    if (!content || content.length > MAX) return;
    setReplySubmitting(true);
    const { error } = await supabase
      .from("comments")
      .insert({ article_slug: articleSlug, user_id: userId, content, parent_id: parentId });
    setReplySubmitting(false);
    if (error) {
      toast({ title: rateLimitToast(error.message), variant: "destructive" });
      return;
    }
    setReplyToId(null);
    setReplyDraft("");
    load();
  };

  // -- edit --
  const startEdit = (c: CommentRow) => { setEditingId(c.id); setEditDraft(c.content); setMenuOpenId(null); };
  const saveEdit  = async (id: string) => {
    const content = editDraft.trim();
    if (!content || content.length > MAX) return;
    const { error } = await supabase.from("comments").update({ content }).eq("id", id);
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
    const { error } = await supabase.from("comments").delete().eq("id", id);
    if (error) {
      toast({ title: getText(language, "Erro ao excluir", "Delete failed"), variant: "destructive" });
      return;
    }
    load();
  };

  // -- tree structure (1 level deep) --
  const { roots, childrenOf, total } = useMemo(() => {
    const roots: CommentRow[] = [];
    const childrenOf: Record<string, CommentRow[]> = {};
    for (const c of comments) {
      if (c.parent_id) {
        (childrenOf[c.parent_id] ||= []).push(c);
      } else {
        roots.push(c);
      }
    }
    // newest roots first, replies chronological
    roots.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));
    for (const k of Object.keys(childrenOf)) {
      childrenOf[k].sort((a, b) => +new Date(a.created_at) - +new Date(b.created_at));
    }
    return { roots, childrenOf, total: comments.length };
  }, [comments]);

  // Nome sempre: "Nome @username" (username com fallback se global_name faltar)
  const renderAuthorLabel = (c: CommentRow) => {
    const handle = cleanHandle(c.author?.username);
    const display = c.author?.global_name?.trim() || handle || getText(language, "leitor", "reader");
    return (
      <span className="text-sm font-medium text-foreground">
        {display}
        {handle && (
          <span className="ml-1 font-normal text-muted-foreground">
            @{handle} {getText(language, "no discord", "on discord")}
          </span>
        )}
      </span>
    );
  };

  const renderComment = (c: CommentRow, isReply = false) => {
    const mine = userId === c.user_id;
    const edited = c.updated_at !== c.created_at;
    return (
      <motion.li
        key={c.id}
        layout
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "group flex items-start gap-4 rounded-2xl border border-border/35 bg-card/25 p-4 shadow-[0_14px_45px_hsl(var(--background)/0.18)] backdrop-blur-sm transition-colors hover:border-border/55 md:p-5",
          isReply && "rounded-xl bg-background/25 p-3 shadow-none md:p-4",
        )}
      >
        <img
          src={c.author?.avatar_url ?? `https://cdn.discordapp.com/embed/avatars/0.png`}
          alt=""
          className={`${isReply ? "w-8 h-8" : "w-11 h-11"} rounded-full border border-border/50 object-cover flex-shrink-0 shadow-[0_0_0_3px_hsl(var(--background)/0.55)]`}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {renderAuthorLabel(c)}
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
            <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap break-words">
              {c.content}
            </p>
          )}

          {/* Reply action — apenas em comentários raiz (1 nível de profundidade) */}
          {!isReply && userId && editingId !== c.id && (
            <div className="mt-2">
              {replyToId === c.id ? (
                <div className="mt-2">
                  <textarea
                    value={replyDraft}
                    onChange={(e) => setReplyDraft(e.target.value.slice(0, MAX))}
                    rows={2}
                    placeholder={getText(language, "Escreva sua resposta…", "Write your reply…")}
                    className="w-full rounded-lg border border-border/40 bg-card/40 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground/30 resize-y"
                    maxLength={MAX}
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => submitReply(c.id)}
                      disabled={replySubmitting || !replyDraft.trim()}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium bg-foreground text-background hover:opacity-90 disabled:opacity-50"
                    >
                      {replySubmitting && <Loader2 className="w-3 h-3 animate-spin" />}
                      {getText(language, "Responder", "Reply")}
                    </button>
                    <button
                      type="button"
                      onClick={() => { setReplyToId(null); setReplyDraft(""); }}
                      className="px-3 py-1.5 rounded-md text-xs text-muted-foreground hover:text-foreground"
                    >
                      {getText(language, "Cancelar", "Cancel")}
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => { setReplyToId(c.id); setReplyDraft(""); }}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  {getText(language, "Responder", "Reply")}
                </button>
              )}
            </div>
          )}

          {/* Replies */}
          {!isReply && childrenOf[c.id]?.length > 0 && (
            <ul className="mt-4 space-y-4 pl-4 border-l border-border/40">
              <AnimatePresence initial={false}>
                {childrenOf[c.id].map((r) => renderComment(r, true))}
              </AnimatePresence>
            </ul>
          )}
        </div>
      </motion.li>
    );
  };

  return (
    <section
      className={cn(
        variant === "inline"
          ? "mt-20 border-t border-border/50 pt-12"
          : "rounded-2xl border border-border/40 bg-card/30 p-5 shadow-[0_18px_60px_hsl(var(--background)/0.35)] backdrop-blur-md md:p-6",
      )}
      aria-label={getText(language, "Comentários", "Comments")}
    >
      <div className="flex items-baseline justify-between mb-8">
        <h2
          className={cn(
            "font-serif text-foreground",
            variant === "sidebar" ? "text-xl md:text-2xl" : "text-2xl md:text-3xl",
          )}
        >
          {getText(language, "Comentários", "Comments")}
        </h2>
        <span className="text-sm text-muted-foreground tabular-nums">
          {total} {getText(language, total === 1 ? "comentário" : "comentários", total === 1 ? "comment" : "comments")}
        </span>
      </div>

      {!userId && !authLoading && (
        <div className="mb-12 md:mb-14">
          <DiscordLoginPrompt onSignIn={signIn} loading={authLoading} />
        </div>
      )}

      {userId && (
        <form onSubmit={handleSubmit} className="mb-10">
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

      <div className={cn(!userId && !authLoading && "border-t border-border/30 pt-10")}>
      {loading ? (
        <div className="py-10 flex justify-center"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>
      ) : roots.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border/35 bg-card/20 px-5 py-6 text-sm text-muted-foreground">
          {getText(language, "Ainda não há comentários. Seja o primeiro.", "No comments yet. Be the first.")}
        </p>
      ) : (
        <ul className="space-y-5 md:space-y-6">
          <AnimatePresence initial={false}>
            {roots.map((c) => renderComment(c, false))}
          </AnimatePresence>
        </ul>
      )}
      </div>
    </section>
  );
};

export default CommentsSection;
