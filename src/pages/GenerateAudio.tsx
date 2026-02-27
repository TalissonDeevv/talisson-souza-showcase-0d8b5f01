import { useState, useCallback } from "react";
import Layout from "@/components/layout/Layout";
import { marketTrailArticles } from "@/data/market-trail-articles";
import { Button } from "@/components/ui/button";
import { Loader2, Check, AlertCircle, Play, Download } from "lucide-react";

interface GenerationStatus {
  slug: string;
  title: string;
  status: "pending" | "generating" | "done" | "error";
  error?: string;
}

const GenerateAudio = () => {
  const [statuses, setStatuses] = useState<GenerationStatus[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  const buildArticleText = useCallback((article: typeof marketTrailArticles[0], lang: "pt" | "en") => {
    const title = article.title[lang];
    const sections = article.sections
      .map(s => `${s.title[lang]}\n\n${s.content[lang]}`)
      .join("\n\n");
    return `${title}\n\n${sections}`;
  }, []);

  const generateAll = useCallback(async () => {
    setIsRunning(true);
    
    const items: GenerationStatus[] = marketTrailArticles.map(a => ({
      slug: language === "pt" ? a.slugPt : a.slugEn,
      title: a.title[language],
      status: "pending",
    }));
    setStatuses(items);

    for (let i = 0; i < marketTrailArticles.length; i++) {
      const article = marketTrailArticles[i];
      const slug = language === "pt" ? article.slugPt : article.slugEn;

      setStatuses(prev => prev.map((s, idx) => idx === i ? { ...s, status: "generating" } : s));

      try {
        const text = buildArticleText(article, language);
        
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-article-audio`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({
              slug,
              title: article.title[language],
              text,
            }),
          }
        );

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error || `HTTP ${response.status}`);
        }

        // Download the audio file
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${slug}.mp3`;
        a.click();
        URL.revokeObjectURL(url);

        setStatuses(prev => prev.map((s, idx) => idx === i ? { ...s, status: "done" } : s));
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        setStatuses(prev => prev.map((s, idx) => idx === i ? { ...s, status: "error", error: message } : s));
      }
    }

    setIsRunning(false);
  }, [language, buildArticleText]);

  const generateSingle = useCallback(async (index: number) => {
    const article = marketTrailArticles[index];
    const slug = language === "pt" ? article.slugPt : article.slugEn;

    setStatuses(prev => {
      const updated = [...prev];
      updated[index] = { slug, title: article.title[language], status: "generating" };
      return updated;
    });

    try {
      const text = buildArticleText(article, language);
      
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-article-audio`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ slug, title: article.title[language], text }),
        }
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || `HTTP ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${slug}.mp3`;
      a.click();
      URL.revokeObjectURL(url);

      setStatuses(prev => prev.map((s, idx) => idx === index ? { ...s, status: "done" } : s));
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setStatuses(prev => prev.map((s, idx) => idx === index ? { ...s, status: "error", error: message } : s));
    }
  }, [language, buildArticleText]);

  return (
    <Layout>
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-bold text-foreground mb-2">Gerador de Áudio</h1>
          <p className="text-muted-foreground mb-6">
            Gera áudio via ElevenLabs para todos os {marketTrailArticles.length} artigos da trilha de mercado.
            Os arquivos MP3 serão baixados automaticamente — coloque-os em <code className="text-xs bg-muted px-1.5 py-0.5 rounded">public/audio/</code>.
          </p>

          <div className="flex items-center gap-3 mb-8">
            <select
              value={language}
              onChange={e => setLanguage(e.target.value as "pt" | "en")}
              className="px-3 py-2 rounded-lg border border-border bg-card text-sm text-foreground"
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>

            <Button onClick={generateAll} disabled={isRunning}>
              {isRunning ? <><Loader2 className="w-4 h-4 animate-spin" /> Gerando...</> : <><Play className="w-4 h-4" /> Gerar Todos</>}
            </Button>
          </div>

          <div className="space-y-2">
            {marketTrailArticles.map((article, i) => {
              const status = statuses[i];
              const slug = language === "pt" ? article.slugPt : article.slugEn;
              return (
                <div key={article.id} className="flex items-center gap-3 p-3 rounded-lg border border-border/30 bg-card/50">
                  <div className="shrink-0 w-6">
                    {status?.status === "generating" && <Loader2 className="w-4 h-4 animate-spin text-primary" />}
                    {status?.status === "done" && <Check className="w-4 h-4 text-primary" />}
                    {status?.status === "error" && <AlertCircle className="w-4 h-4 text-destructive" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{article.title[language]}</p>
                    <p className="text-xs text-muted-foreground truncate">{slug}.mp3</p>
                    {status?.error && <p className="text-xs text-destructive mt-1">{status.error}</p>}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => generateSingle(i)}
                    disabled={isRunning || status?.status === "generating"}
                  >
                    <Download className="w-3.5 h-3.5" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GenerateAudio;
