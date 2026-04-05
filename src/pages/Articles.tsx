import Layout from "@/components/layout/Layout";

import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import ArticleSearch from "@/components/ui/ArticleSearch";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, ExternalLink, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { motion, AnimatePresence } from "framer-motion";
import { articles, getAllTags, trails } from "@/data/articles";
import { useState, useMemo } from "react";

const SUGGEST_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdUM_KRTJfGm8zw7Z4VWBA0845PBQZomFypiJhNOEaWd5ORGw/viewform?usp=dialog";

// Primary categories (high-level grouping shown prominently)
const PRIMARY_CATEGORIES: Record<string, { pt: string; en: string }> = {
  'Carreira': { pt: 'Carreira', en: 'Career' },
  'Fundamentos': { pt: 'Fundamentos', en: 'Fundamentals' },
  'Segurança': { pt: 'Segurança', en: 'Security' },
  'Discord': { pt: 'Discord', en: 'Discord' },
  'Arquitetura': { pt: 'Arquitetura', en: 'Architecture' },
  'Estratégia': { pt: 'Estratégia', en: 'Strategy' },
};

const PRIMARY_CATEGORY_KEYS = Object.keys(PRIMARY_CATEGORIES);

const Articles = () => {
  const { language } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'trails' | 'all'>('trails');
  const [showMoreTags, setShowMoreTags] = useState(false);

  const allTags = getAllTags(language);

  // Split tags into primary categories and secondary
  const { primaryTags, secondaryTags } = useMemo(() => {
    const primary: string[] = [];
    const secondary: string[] = [];

    allTags.forEach(tag => {
      const isPrimary = PRIMARY_CATEGORY_KEYS.some(key => {
        const label = PRIMARY_CATEGORIES[key];
        return tag === label.pt || tag === label.en;
      });
      if (isPrimary) primary.push(tag);
      else secondary.push(tag);
    });

    return { primaryTags: primary, secondaryTags: secondary };
  }, [allTags, language]);

  const filteredArticles = selectedCategory
    ? articles.filter((a) => a.tags[language].some((t) => t === selectedCategory))
    : articles;

  const articleCount = filteredArticles.length;

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language,
          'Artigos e Guias Técnicos | Talisson Souza',
          'Articles & Technical Guides | Talisson Souza'
        )}
        description={getText(language,
          'Artigos e guias técnicos sobre tecnologia, gestão, segurança, projetos digitais e boas práticas profissionais.',
          'Articles and technical guides on technology, management, security, digital projects and professional best practices.'
        )}
        canonical={language === 'en' ? '/en-us/articles' : '/artigos'}
        keywords={['artigos tecnicos', 'guias', 'tecnologia', 'gestao', 'seguranca', 'bots discord']}
      />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center relative overflow-visible pt-24 pb-12">
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
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              {getText(language, 'Publicações', 'Publications')}
            </motion.span>
            <AnimatedTitle variant="hero" as="h1" className="mb-5">
              {getText(language, 'Artigos e Guias Técnicos', 'Articles & Technical Guides')}
            </AnimatedTitle>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {getText(language,
                'Conteúdo técnico sobre fundamentos, arquitetura, segurança, gestão e estratégia de carreira para desenvolvedores.',
                'Technical content on fundamentals, architecture, security, management, and career strategy for developers.'
              )}
            </p>
            {/* Prominent search */}
            <ArticleSearch variant="hero" />
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            {(() => {
              const featured = articles.find(a => a.id === 'eca-digital-anpd');
              if (!featured) return null;
              return (
                <Link to={featured.path[language]} className="block group">
                  <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
                    <GlassCard className="p-6 lg:p-10 relative overflow-hidden hover:border-foreground/15 transition-all duration-500">
                      <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-primary/80 font-medium px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                          {getText(language, 'Destaque', 'Featured')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground/50 mb-3">
                        <span>{featured.date[language]}</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-muted-foreground/30" />
                        <span>{featured.readTime} {getText(language, 'de leitura', 'read')}</span>
                      </div>
                      <h2 className="font-serif text-xl lg:text-2xl xl:text-3xl text-foreground leading-snug mb-3 group-hover:text-gradient transition-all duration-500 max-w-3xl">
                        {featured.title[language]}
                      </h2>
                      <p className="text-sm lg:text-base text-muted-foreground/60 leading-relaxed max-w-2xl mb-5">
                        {featured.excerpt[language]}
                      </p>
                      <div className="flex items-center gap-3 flex-wrap">
                        {featured.tags[language].slice(0, 4).map(tag => (
                          <span key={tag} className="text-[10px] px-2.5 py-1 rounded-md border border-border/20 text-muted-foreground/50">
                            {tag}
                          </span>
                        ))}
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300 ml-auto">
                          <span className="relative">
                            {getText(language, 'Ler artigo', 'Read article')}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </GlassCard>
                  </motion.div>
                </Link>
              );
            })()}
          </ScrollReveal>
        </div>
      </section>

      {/* View mode toggle + Category filters */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => { setViewMode('trails'); setSelectedCategory(null); }}
              className={`text-xs px-4 py-2 rounded-lg border transition-all duration-200 ${
                viewMode === 'trails'
                  ? 'border-foreground/20 bg-foreground/[0.08] text-foreground font-medium'
                  : 'border-border/20 bg-transparent text-muted-foreground/50 hover:text-foreground hover:border-border/30'
              }`}
            >
              {getText(language, 'Trilhas', 'Trails')}
            </button>
            <button
              onClick={() => setViewMode('all')}
              className={`text-xs px-4 py-2 rounded-lg border transition-all duration-200 ${
                viewMode === 'all'
                  ? 'border-foreground/20 bg-foreground/[0.08] text-foreground font-medium'
                  : 'border-border/20 bg-transparent text-muted-foreground/50 hover:text-foreground hover:border-border/30'
              }`}
            >
              {getText(language, 'Todos os artigos', 'All articles')}
            </button>
          </div>

          {/* Category filters - only in "all" mode */}
          <AnimatePresence>
            {viewMode === 'all' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Primary categories */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                      !selectedCategory
                        ? 'border-foreground/20 bg-foreground/[0.08] text-foreground font-medium'
                        : 'border-border/15 bg-transparent text-muted-foreground/50 hover:text-foreground hover:border-border/30'
                    }`}
                  >
                    {getText(language, 'Todos', 'All')}
                    <span className="ml-1.5 text-[10px] text-muted-foreground/40">{articles.length}</span>
                  </button>
                  {primaryTags.map((tag) => {
                    const count = articles.filter(a => a.tags[language].includes(tag)).length;
                    return (
                      <button
                        key={tag}
                        onClick={() => setSelectedCategory(tag === selectedCategory ? null : tag)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                          tag === selectedCategory
                            ? 'border-foreground/20 bg-foreground/[0.08] text-foreground font-medium'
                            : 'border-border/15 bg-transparent text-muted-foreground/50 hover:text-foreground hover:border-border/30'
                        }`}
                      >
                        {tag}
                        <span className="ml-1.5 text-[10px] text-muted-foreground/40">{count}</span>
                      </button>
                    );
                  })}

                  {/* Show more toggle */}
                  {secondaryTags.length > 0 && (
                    <button
                      onClick={() => setShowMoreTags(!showMoreTags)}
                      className="text-xs px-3 py-1.5 rounded-lg border border-border/15 bg-transparent text-muted-foreground/40 hover:text-muted-foreground hover:border-border/30 transition-all duration-200 inline-flex items-center gap-1"
                    >
                      {showMoreTags
                        ? getText(language, 'Menos', 'Less')
                        : `+${secondaryTags.length}`
                      }
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showMoreTags ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Secondary tags (expandable) */}
                <AnimatePresence>
                  {showMoreTags && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-1.5 pt-1 pb-2">
                        {secondaryTags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSelectedCategory(tag === selectedCategory ? null : tag)}
                            className={`text-[11px] px-2.5 py-1 rounded-md border transition-all duration-200 ${
                              tag === selectedCategory
                                ? 'border-foreground/20 bg-foreground/[0.08] text-foreground'
                                : 'border-border/10 bg-transparent text-muted-foreground/40 hover:text-muted-foreground hover:border-border/20'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active filter indicator */}
                {selectedCategory && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 mt-2 text-xs text-muted-foreground/50"
                  >
                    <span>{articleCount} {getText(language, 'artigos em', 'articles in')}</span>
                    <span className="text-foreground/80 font-medium">{selectedCategory}</span>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Trails view */}
      {viewMode === 'trails' && (
        <ParallaxSection
          className="py-12 lg:py-16"
          speed={0.1}
          backgroundElement={
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            </>
          }
        >
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {trails.map((trail, index) => (
                <ScrollReveal key={trail.id} delay={index * 0.06}>
                  <Link to={trail.path[language]} className="block h-full">
                    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }} className="h-full">
                      <GlassCard className="p-6 lg:p-8 group hover:border-foreground/15 transition-all duration-500 h-full flex flex-col">
                        <h2 className="font-serif text-lg lg:text-xl text-foreground group-hover:text-gradient transition-all duration-500 mb-3 leading-tight">
                          {trail.title[language]}
                        </h2>
                        <p className="text-sm text-muted-foreground/70 leading-relaxed mb-5 flex-1 line-clamp-3">
                          {trail.description[language]}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-muted-foreground/40 tabular-nums">
                            {trail.articleIds.length} {getText(language, 'artigos', 'articles')}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                            <span className="relative">
                              {getText(language, 'Explorar', 'Explore')}
                              <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </GlassCard>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ParallaxSection>
      )}

      {/* Articles list - "all" mode */}
      {viewMode === 'all' && (
        <ParallaxSection
          className="py-12 lg:py-16"
          speed={0.1}
          backgroundElement={
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            </>
          }
        >
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="space-y-3">
              {filteredArticles.map((article, index) => (
                <ScrollReveal key={article.id} delay={index * 0.03}>
                  <Link to={article.path[language]} className="block">
                    <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.25 }}>
                      <GlassCard className="p-5 lg:p-6 group hover:border-foreground/15 transition-all duration-400">
                        <div className="flex items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 text-[11px] text-muted-foreground/50 mb-2">
                              <span>{article.date[language]}</span>
                              <span className="w-0.5 h-0.5 rounded-full bg-muted-foreground/30" />
                              <span>{article.readTime} {getText(language, 'de leitura', 'read')}</span>
                            </div>
                            <h2 className="font-serif text-base lg:text-lg text-foreground leading-snug mb-2 group-hover:text-gradient transition-all duration-500">
                              {article.title[language]}
                            </h2>
                            <p className="text-sm text-muted-foreground/60 leading-relaxed line-clamp-2">
                              {article.excerpt[language]}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-foreground/60 shrink-0 mt-6 transition-all duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </GlassCard>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* Empty state */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-20">
                <p className="text-sm text-muted-foreground mb-2">
                  {getText(language, 'Nenhum artigo encontrado para esta categoria.', 'No articles found for this category.')}
                </p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-xs text-foreground/60 hover:text-foreground underline underline-offset-4 transition-colors"
                >
                  {getText(language, 'Ver todos os artigos', 'View all articles')}
                </button>
              </div>
            )}
          </div>
        </ParallaxSection>
      )}




      {/* Suggestion CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <GlassCard className="p-8 lg:p-10 text-center">
                <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
                  {getText(language,
                    'Não encontrou o tema que estava procurando?',
                    "Didn't find the topic you were looking for?"
                  )}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto">
                  {getText(language,
                    'Os artigos são desenvolvidos com base nas demandas reais da comunidade. Se existe um tema que você gostaria de ver abordado, sua sugestão é bem-vinda.',
                    'Articles are developed based on real community demands. If there is a topic you would like to see covered, your suggestion is welcome.'
                  )}
                </p>
                <a
                  href={SUGGEST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-lg border border-foreground/20 bg-foreground/5 text-foreground hover:bg-foreground/10 transition-all duration-200"
                >
                  {getText(language, 'Sugerir um artigo', 'Suggest an article')}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
