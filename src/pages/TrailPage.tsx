import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { motion } from "framer-motion";
import { trails, getTrailArticles } from "@/data/articles";

const TrailPage = () => {
  const { language } = useTheme();
  const { trailId } = useParams<{ trailId: string }>();

  const trail = trails.find((t) => {
    const ptSlug = t.path.pt.split('/').pop();
    const enSlug = t.path.en.split('/').pop();
    return trailId === ptSlug || trailId === enSlug || trailId === t.id;
  });

  if (!trail) {
    return <Navigate to={language === 'en' ? '/en-us/articles' : '/artigos'} replace />;
  }

  const trailArticles = getTrailArticles(trail.id);
  const articlesPath = language === 'en' ? '/en-us/articles' : '/artigos';

  return (
    <Layout withPadding={false}>
      <SEO
        title={`${trail.title[language]} | Talisson Souza`}
        description={trail.description[language]}
        canonical={trail.path[language]}
        keywords={[trail.title.pt.toLowerCase(), 'trilha', 'artigos']}
      />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)' }}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <ScrollReveal>
            <Link
              to={articlesPath}
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-3 h-3" />
              {getText(language, 'Voltar aos artigos', 'Back to articles')}
            </Link>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              {getText(language, 'Trilha de Conteúdo', 'Content Trail')}
            </motion.span>
            <AnimatedTitle variant="hero" as="h1" className="mb-6">
              {trail.title[language]}
            </AnimatedTitle>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {trail.description[language]}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="space-y-4">
            {trailArticles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 0.05}>
                <Link to={article.path[language]} className="block">
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                    <GlassCard className="p-6 lg:p-8 group hover:border-foreground/20 transition-all duration-500">
                      <div className="flex items-start gap-5">
                        <div className="w-10 h-10 rounded-lg border border-border/30 bg-card/50 flex items-center justify-center shrink-0 mt-1">
                          <span className="text-sm font-medium text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <span>{article.date[language]}</span>
                            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                            <span>{article.readTime} {getText(language, 'de leitura', 'read')}</span>
                          </div>
                          <h2 className="font-serif text-lg lg:text-xl text-foreground mb-2 group-hover:text-gradient transition-all duration-500 leading-tight">
                            {article.title[language]}
                          </h2>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {article.excerpt[language]}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground shrink-0 mt-2 transition-all duration-300 group-hover:translate-x-1" />
                      </div>
                    </GlassCard>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default TrailPage;
