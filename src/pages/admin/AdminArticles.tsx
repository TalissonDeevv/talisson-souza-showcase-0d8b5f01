import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Pencil, Trash2, Eye, EyeOff } from 'lucide-react';
import { format } from 'date-fns';

interface Article {
  id: string;
  title: string;
  slug: string;
  is_published: boolean;
  tags: string[];
  reading_time: number;
  created_at: string;
  updated_at: string;
}

export default function AdminArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    const { data } = await supabase
      .from('admin_articles')
      .select('id, title, slug, is_published, tags, reading_time, created_at, updated_at')
      .order('updated_at', { ascending: false });
    setArticles(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchArticles(); }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Excluir "${title}"?`)) return;
    await supabase.from('admin_articles').delete().eq('id', id);
    fetchArticles();
  };

  const togglePublish = async (id: string, current: boolean) => {
    await supabase.from('admin_articles').update({ is_published: !current }).eq('id', id);
    fetchArticles();
  };

  if (loading) return <p className="text-muted-foreground">Carregando...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Artigos</h1>
        <Link to="/paineladmin/criar-artigo">
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" /> Novo artigo
          </Button>
        </Link>
      </div>

      {articles.length === 0 ? (
        <p className="text-muted-foreground text-sm">Nenhum artigo ainda.</p>
      ) : (
        <div className="space-y-2">
          {articles.map((a) => (
            <div
              key={a.id}
              className="flex items-center justify-between gap-4 p-4 rounded-lg border border-border bg-card hover:bg-secondary/30 transition-colors"
            >
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-foreground truncate">{a.title}</h3>
                  {a.is_published ? (
                    <Badge variant="secondary" className="text-xs bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Publicado</Badge>
                  ) : (
                    <Badge variant="secondary" className="text-xs">Rascunho</Badge>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{a.reading_time} min</span>
                  <span>·</span>
                  <span>{format(new Date(a.updated_at), 'dd/MM/yyyy HH:mm')}</span>
                  {a.tags.length > 0 && (
                    <>
                      <span>·</span>
                      <span>{a.tags.slice(0, 3).join(', ')}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <Button variant="ghost" size="icon" onClick={() => togglePublish(a.id, a.is_published)} title={a.is_published ? 'Despublicar' : 'Publicar'}>
                  {a.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Link to={`/paineladmin/editar/${a.id}`}>
                  <Button variant="ghost" size="icon"><Pencil className="w-4 h-4" /></Button>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(a.id, a.title)} className="text-destructive hover:text-destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
