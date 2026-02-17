import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import ArticleSearch from "@/components/ui/ArticleSearch";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, ExternalLink } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { motion } from "framer-motion";
import { articles, getAllTags, trails } from "@/data/articles";
import { useState } from "react";

const SUGGEST_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdUM_KRTJfGm8zw7Z4VWBA0845PBQZomFypiJhNOEaWd5ORGw/viewform?usp=dialog";

const Articles = () => {
  const { language } = useTheme();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'trails' | 'all'>('trails');

  const allTags = getAllTags(language);

  const filteredArticles = selectedTag
    ? articles.filter((a) => a.tags[language].some((t) => t === selectedTag))
    : articles;

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
      <section className="min-h-[60vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
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
            <div className="flex items-start justify-between gap-4">
              <div>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
                >
                  {getText(language, 'Publicações', 'Publications')}
                </motion.span>
                <AnimatedTitle variant="hero" as="h1" className="mb-6">
                  {getText(language, 'Artigos e Guias Técnicos', 'Articles & Technical Guides')}
                </AnimatedTitle>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {getText(language,
                    'Publico artigos e guias técnicos sobre tecnologia, gestão, segurança, projetos digitais e boas práticas profissionais, com foco em maturidade, responsabilidade e crescimento sustentável.',
                    'I publish articles and technical guides on technology, management, security, digital projects and professional best practices, with a focus on maturity, responsibility and sustainable growth.'
                  )}
                </p>
              </div>
              <div className="shrink-0 mt-8">
                <ArticleSearch />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* View mode toggle */}
      <section className="py-4">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => setViewMode('trails')}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                viewMode === 'trails'
                  ? 'border-foreground/30 bg-foreground/10 text-foreground'
                  : 'border-border/20 bg-card/30 text-muted-foreground/60 hover:text-foreground hover:border-border/40'
              }`}
            >
              {getText(language, 'Ver por Trilhas', 'View by Trails')}
            </button>
            <button
              onClick={() => setViewMode('all')}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                viewMode === 'all'
                  ? 'border-foreground/30 bg-foreground/10 text-foreground'
                  : 'border-border/20 bg-card/30 text-muted-foreground/60 hover:text-foreground hover:border-border/40'
              }`}
            >
              {getText(language, 'Ver todos os artigos', 'View all articles')}
            </button>
          </div>

          {/* Tags filter — only in "all" mode */}
          {viewMode === 'all' && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                  !selectedTag
                    ? 'border-foreground/30 bg-foreground/10 text-foreground'
                    : 'border-border/20 bg-card/30 text-muted-foreground/60 hover:text-foreground hover:border-border/40'
                }`}
              >
                {getText(language, 'Todos', 'All')}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                    tag === selectedTag
                      ? 'border-foreground/30 bg-foreground/10 text-foreground'
                      : 'border-border/20 bg-card/30 text-muted-foreground/60 hover:text-foreground hover:border-border/40'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trails view */}
      {viewMode === 'trails' && (
        <ParallaxSection
          className="py-16 lg:py-20"
          speed={0.1}
          backgroundElement={
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            </>
          }
        >
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trails.map((trail, index) => (
                <ScrollReveal key={trail.id} delay={index * 0.08}>
                  <Link to={trail.path[language]} className="block h-full">
                    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="h-full">
                      <GlassCard className="p-6 lg:p-8 group hover:border-foreground/20 transition-all duration-500 h-full flex flex-col">
                        <div className="mb-4">
                          <h2 className="font-serif text-xl lg:text-2xl text-foreground group-hover:text-gradient transition-all duration-500">
                            {trail.title[language]}
                          </h2>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                          {trail.description[language]}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground/50">
                            {trail.articleIds.length} {getText(language, 'artigos', 'articles')}
                          </span>
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                            <span className="relative">
                              {getText(language, 'Explorar trilha', 'Explore trail')}
                              <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                            </span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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

      {/* Articles Grid — "all" mode */}
      {viewMode === 'all' && (
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <ScrollReveal key={article.id} delay={index * 0.05}>
                  <Link to={article.path[language]} className="block h-full">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <GlassCard className="p-6 lg:p-8 group hover:border-foreground/20 transition-all duration-500 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-9 h-9 rounded-lg border border-border/30 bg-card/50 flex items-center justify-center shrink-0">
                            <FileText className="w-4 h-4 text-foreground/50" />
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{article.date[language]}</span>
                            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                            <span>{article.readTime} {getText(language, 'de leitura', 'read')}</span>
                          </div>
                        </div>

                        <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-gradient transition-all duration-500 leading-tight">
                          {article.title[language]}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                          {article.excerpt[language]}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {article.tags[language].map((tag) => (
                            <span key={tag} className="text-[11px] px-2 py-1 rounded-full border border-border/20 bg-background/50 text-muted-foreground/70">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground mt-auto">
                          <span className="relative">
                            {getText(language, 'Ler artigo', 'Read article')}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                          </span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </GlassCard>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* Empty state for filtered results */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-2">
                  {getText(language, 'Nenhum artigo encontrado.', 'No articles found.')}
                </p>
                <p className="text-sm text-muted-foreground/60 mb-6">
                  {getText(language, 'Quer sugerir esse tema?', 'Want to suggest this topic?')}
                </p>
                <a
                  href={SUGGEST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg border border-foreground/20 bg-foreground/5 text-foreground hover:bg-foreground/10 transition-all duration-200"
                >
                  {getText(language, 'Sugerir um artigo', 'Suggest an article')}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </ParallaxSection>
      )}

      {/* Suggestion CTA section */}
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
