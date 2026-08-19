import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import GlassCard from "@/components/ui/GlassCard";
import ArticleSearch from "@/components/ui/ArticleSearch";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft, FileText, Tag } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { motion } from "framer-motion";
import { slugToTag, getArticlesByTag, getAllTags, tagToSlug } from "@/data/articles";

const TagPage = () => {
  const { language } = useTheme();
  const { tag: tagSlug } = useParams<{ tag: string }>();

  const tag = tagSlug ? slugToTag(tagSlug, language) : undefined;
  const articles = tag ? getArticlesByTag(tag, language) : [];
  const allTags = getAllTags(language);

  const tagBasePath = language === 'en' ? '/en-us/articles/tag' : '/artigos/tag';
  const articlesPath = language === 'en' ? '/en-us/articles' : '/artigos';

  return (
    <Layout withPadding={false}>
      <SEO
        title={tag
          ? getText(language, `Artigos sobre ${tag} | Talisson Souza`, `Articles about ${tag} | Talisson Souza`)
          : getText(language, 'Tag não encontrada | Talisson Souza', 'Tag not found | Talisson Souza')
        }
        description={tag
          ? getText(language, `Artigos e guias técnicos sobre ${tag}.`, `Articles and technical guides about ${tag}.`)
          : ''
        }
        canonical={tagSlug ? `${language === 'en' ? '/en-us/articles/tag' : '/artigos/tag'}/${tagSlug}` : articlesPath}
      />

      <section className="min-h-[40vh] flex items-center relative overflow-hidden pt-24 pb-12">
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
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <ScrollReveal>
            <Link to={articlesPath} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" />
              {getText(language, 'Todos os artigos', 'All articles')}
            </Link>

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Tag className="w-5 h-5 text-muted-foreground" />
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 font-medium"
                  >
                    Tag
                  </motion.span>
                </div>
                <AnimatedTitle variant="hero" as="h1" className="mb-4">
                  {tag || getText(language, 'Tag não encontrada', 'Tag not found')}
                </AnimatedTitle>
                <p className="text-base text-muted-foreground">
                  {tag
                    ? getText(language,
                        `${articles.length} ${articles.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}`,
                        `${articles.length} ${articles.length === 1 ? 'article found' : 'articles found'}`
                      )
                    : getText(language, 'Nenhum artigo encontrado para esta tag.', 'No articles found for this tag.')
                  }
                </p>
              </div>
              <div className="hidden sm:block">
                <ArticleSearch />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tags cloud */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {allTags.map((t) => (
              <Link
                key={t}
                to={`${tagBasePath}/${tagToSlug(t)}`}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                  t === tag
                    ? 'border-foreground/30 bg-foreground/10 text-foreground'
                    : 'border-border/20 bg-card/30 text-muted-foreground/60 hover:text-foreground hover:border-border/40'
                }`}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      {articles.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <ScrollReveal key={article.id} delay={index * 0.05}>
                  <Link to={article.path[language]} className="block h-full">
                    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="h-full">
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
                          {article.tags[language].map((t) => (
                            <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-border/20 bg-background/50 text-muted-foreground/70">
                              {t}
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
          </div>
        </section>
      )}
    </Layout>
  );
};

export default TagPage;
