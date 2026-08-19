import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Route } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
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

      <PageHero
        compact
        eyebrow={getText(language, 'Trilha de conteúdo', 'Content trail')}
        title={trail.title[language]}
        subtitle={trail.description[language]}
        actions={
          <Link
            to={articlesPath}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {getText(language, 'Voltar aos artigos', 'Back to articles')}
          </Link>
        }
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: trailArticles.length, label: getText(language, 'artigos', 'articles') },
              { value: String(Math.max(1, Math.ceil(trailArticles.length / 4))), label: getText(language, 'etapas', 'stages') },
              { value: '01', label: getText(language, 'sequência', 'sequence') },
            ]}
          />
        }
      >
        <IdentityPanel hover={false} className="hidden p-6 lg:block">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/35">
              <Route className="h-5 w-5 text-foreground/70" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
              {getText(language, 'rota guiada', 'guided route')}
            </span>
          </div>
          <div className="space-y-3">
            {trailArticles.slice(0, 4).map((article, index) => (
              <div key={article.id} className="flex items-center gap-3 rounded-xl border border-border/20 bg-background/25 px-3 py-2">
                <span className="font-serif text-lg text-foreground/30">{String(index + 1).padStart(2, '0')}</span>
                <span className="line-clamp-1 text-xs text-muted-foreground">{article.title[language]}</span>
              </div>
            ))}
          </div>
        </IdentityPanel>
      </PageHero>

      <ParallaxSection
        className="py-16 lg:py-20"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
            <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/60">
                  {getText(language, 'ordem de leitura', 'reading order')}
                </span>
                <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
                  {getText(language, 'Comece pelo que sustenta o próximo passo', 'Start with what supports the next step')}
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {trailArticles.map((article, index) => (
                <ScrollReveal key={article.id} delay={index * 0.035}>
                  <Link to={article.path[language]} className="group block">
                    <IdentityPanel className="p-5 sm:p-6" hover>
                      <div className="grid gap-5 sm:grid-cols-[72px_minmax(0,1fr)_auto] sm:items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border/25 bg-background/35">
                          <span className="font-serif text-2xl text-foreground/35">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="min-w-0">
                          <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground/55">
                            <span>{article.date[language]}</span>
                            <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                            <span>{article.readTime} {getText(language, 'de leitura', 'read')}</span>
                          </div>
                          <h3 className="font-serif text-xl leading-tight text-foreground transition-colors duration-300 group-hover:text-foreground/85">
                            {article.title[language]}
                          </h3>
                          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                            {article.excerpt[language]}
                          </p>
                        </div>
                        <div className="hidden items-center gap-2 text-sm font-medium text-foreground/80 sm:flex">
                          <BookOpen className="h-4 w-4" />
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </IdentityPanel>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default TrailPage;
