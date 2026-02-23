import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { marketTrailArticles } from "@/data/market-trail-articles";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface TrailNavigationProps {
  currentSlugPt: string;
  currentSlugEn: string;
}

const TrailNavigation = ({ currentSlugPt, currentSlugEn }: TrailNavigationProps) => {
  const { language } = useTheme();

  const currentIndex = marketTrailArticles.findIndex((a) =>
    language === 'en' ? a.slugEn === currentSlugEn : a.slugPt === currentSlugPt
  );

  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? marketTrailArticles[currentIndex - 1] : null;
  const next = currentIndex < marketTrailArticles.length - 1 ? marketTrailArticles[currentIndex + 1] : null;

  const basePath = language === 'en' ? '/en-us/articles' : '/artigos';

  if (!prev && !next) return null;

  return (
    <ScrollReveal delay={0.2}>
      <div className="mt-12 pt-8 border-t border-border/30">
        <div className={`grid gap-4 ${prev && next ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
          {prev && (
            <Link
              to={`${basePath}/${language === 'en' ? prev.slugEn : prev.slugPt}`}
              className="group flex items-start gap-4 p-5 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-foreground/10 hover:-translate-y-1"
              style={{ boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)' }}
            >
              <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0 group-hover:border-foreground/20 transition-colors duration-300">
                <ArrowLeft className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 font-medium">
                  {getText(language, 'Artigo anterior', 'Previous article')}
                </span>
                <p className="text-sm font-medium text-foreground mt-1 line-clamp-2 leading-snug">
                  {prev.title[language]}
                </p>
              </div>
            </Link>
          )}

          {next && (
            <Link
              to={`${basePath}/${language === 'en' ? next.slugEn : next.slugPt}`}
              className={`group flex items-start gap-4 p-5 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-foreground/10 hover:-translate-y-1 ${!prev ? 'sm:col-start-2' : ''}`}
              style={{ boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)' }}
            >
              <div className="flex-1 min-w-0 text-right">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 font-medium">
                  {getText(language, 'Próximo artigo', 'Next article')}
                </span>
                <p className="text-sm font-medium text-foreground mt-1 line-clamp-2 leading-snug">
                  {next.title[language]}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0 group-hover:border-foreground/20 transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default TrailNavigation;
