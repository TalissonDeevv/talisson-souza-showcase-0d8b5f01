import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { generateSlug, calculateReadingTime } from '@/lib/article-utils';
import { Save, Send, Eye, ArrowLeft, X, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

export default function ArticleEditor() {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loadingArticle, setLoadingArticle] = useState(isEditing);

  const slug = useMemo(() => generateSlug(title), [title]);
  const readingTime = useMemo(() => calculateReadingTime(content), [content]);

  useEffect(() => {
    if (!isEditing) return;
    supabase
      .from('admin_articles')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => {
        if (data) {
          setTitle(data.title);
          setDescription(data.description);
          setContent(data.content_markdown);
          setTags(data.tags || []);
        }
        setLoadingArticle(false);
      });
  }, [id, isEditing]);

  const addTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
    setTagInput('');
  };

  const removeTag = (tag: string) => setTags(tags.filter((t) => t !== tag));

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  const save = async (publish: boolean) => {
    if (!title.trim() || !content.trim()) return;
    setSaving(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const payload = {
      title: title.trim(),
      slug,
      description: description.trim(),
      content_markdown: content,
      tags,
      reading_time: readingTime,
      is_published: publish,
      author_id: user.id,
    };

    let error;
    if (isEditing) {
      ({ error } = await supabase.from('admin_articles').update(payload).eq('id', id));
    } else {
      ({ error } = await supabase.from('admin_articles').insert(payload));
    }

    setSaving(false);
    if (!error) navigate('/paineladmin');
  };

  if (loadingArticle) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => navigate('/paineladmin')} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowPreview(!showPreview)} className="gap-2">
            <Eye className="w-4 h-4" /> {showPreview ? 'Editor' : 'Preview'}
          </Button>
          <Button variant="secondary" size="sm" onClick={() => save(false)} disabled={saving} className="gap-2">
            <Save className="w-4 h-4" /> Rascunho
          </Button>
          <Button size="sm" onClick={() => save(true)} disabled={saving} className="gap-2">
            <Send className="w-4 h-4" /> Publicar
          </Button>
        </div>
      </div>

      {showPreview ? (
        /* Preview mode */
        <article className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary prose-strong:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-muted prose-pre:border prose-pre:border-border">
          <h1>{title || 'Sem título'}</h1>
          <p className="text-muted-foreground text-sm">{readingTime} min de leitura · {tags.join(', ')}</p>
          {description && <p className="lead text-foreground/60">{description}</p>}
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
            {content}
          </ReactMarkdown>
        </article>
      ) : (
        /* Editor mode */
        <div className="space-y-5">
          {/* Title */}
          <div className="space-y-2">
            <Label>Título</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título do artigo"
              className="text-lg font-medium"
            />
            <p className="text-xs text-muted-foreground">Slug: <code className="bg-muted px-1.5 py-0.5 rounded">{slug || '...'}</code></p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>Descrição</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Breve descrição do artigo"
              rows={2}
            />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex items-center gap-2">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder="Adicionar tag e pressionar Enter"
                className="flex-1"
              />
              <Button variant="secondary" size="sm" onClick={addTag} type="button">
                Adicionar
              </Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1 pr-1">
                    {tag}
                    <button onClick={() => removeTag(tag)} className="hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Reading time info */}
          <div className="text-xs text-muted-foreground">
            Tempo de leitura estimado: <strong className="text-foreground">{readingTime} min</strong>
          </div>

          {/* Markdown content */}
          <div className="space-y-2">
            <Label>Conteúdo (Markdown)</Label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={"## Seção principal\n\nTexto do artigo...\n\n### Subseção\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('exemplo')\n```"}
              className="min-h-[500px] font-mono text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}
