import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText, Share2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ShareButtons from "@/components/ui/ShareButtons";
import ArticleSEOFooter from "@/components/ui/ArticleSEOFooter";
import CommentsSection from "@/components/comments/CommentsSection";
import TrailNavigation from "@/components/ui/TrailNavigation";
import DisclaimerBanner from "@/components/ui/DisclaimerBanner";
import ArticleAuthorHeader from "@/components/ui/ArticleAuthorHeader";
import { IdentityPanel, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { tagToSlug } from "@/data/articles";
import { marketTrailArticles } from "@/data/market-trail-articles";
import NotFound from "@/pages/NotFound";

const MarketTrailArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useTheme();

  const article = marketTrailArticles.find((a) =>
    language === 'en' ? a.slugEn === slug : a.slugPt === slug
  );

  if (!article) return <NotFound />;

  const tags = article.tags[language];
  const tagBasePath = language === 'en' ? '/en-us/articles/tag' : '/artigos/tag';
  const sections = article.sections;
  const articleTitle = article.title[language];

  return (
    <Layout withPadding={false}>
      <SEO
        title={`${articleTitle} | Talisson Souza`}
        description={article.excerpt[language]}
        canonical={language === 'en' ? `/en-us/articles/${article.slugEn}` : `/artigos/${article.slugPt}`}
        type="article"
        publishedTime={article.publishedDate}
        keywords={article.keywords[language]}
      />

      <PageHero
        compact
        eyebrow={getText(language, 'Artigo', 'Article')}
        title={articleTitle}
        subtitle={article.excerpt[language]}
        actions={
          <Link
            to={language === 'en' ? '/en-us/articles' : '/artigos'}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {getText(language, 'Voltar aos artigos', 'Back to articles')}
          </Link>
        }
        meta={
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                to={`${tagBasePath}/${tagToSlug(tag)}`}
                className="rounded-full border border-border/25 bg-background/35 px-3 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                {tag}
              </Link>
            ))}
          </div>
        }
      >
        <IdentityPanel hover={false} className="hidden p-6 lg:block">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/35">
              <FileText className="h-5 w-5 text-foreground/70" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
              {article.readTime}
            </span>
          </div>
          <ArticleAuthorHeader date={article.publishedDate} readingTime={parseInt(article.readTime) || 5} />
        </IdentityPanel>
      </PageHero>

      <section className="pb-16 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,820px)_260px] lg:items-start">
            <article className="min-w-0">
              {article.showDisclaimer && (
                <ScrollReveal>
                  <DisclaimerBanner customText={article.disclaimerText} />
                </ScrollReveal>
              )}

              <IdentityPanel hover={false} className="p-6 sm:p-8 lg:p-10">
                <div className="space-y-11">
                  {sections.map((section, index) => (
                    <ScrollReveal key={index} delay={0.06 * index}>
                      <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.55, delay: Math.min(0.06 * index, 0.24), ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="mb-4 flex items-start gap-4">
                          <span className="mt-1 font-serif text-3xl leading-none text-foreground/15">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <h2 className="font-serif text-2xl leading-tight text-foreground lg:text-3xl">
                            {section.title[language]}
                          </h2>
                        </div>
                        <div className="space-y-4">
                          {section.content[language].split('\n\n').map((paragraph, pIdx) => (
                            <p key={pIdx} className="text-base leading-[1.9] text-muted-foreground">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.section>
                    </ScrollReveal>
                  ))}
                </div>

                {article.sourceUrl && (
                  <ScrollReveal delay={0.2}>
                    <div className="mt-12 border-t border-border/30 pt-6">
                      <a
                        href={article.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-border/30 bg-background/35 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-card"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {article.sourceLabel?.[language] || getText(language, 'Fonte oficial', 'Official source')}
                      </a>
                    </div>
                  </ScrollReveal>
                )}

                <ScrollReveal delay={0.3}>
                  <div className="mt-12 border-t border-border/30 pt-8">
                    <ShareButtons title={articleTitle} />
                  </div>
                </ScrollReveal>
              </IdentityPanel>

              <TrailNavigation currentSlugPt={article.slugPt} currentSlugEn={article.slugEn} />
              <ArticleSEOFooter />
              <CommentsSection articleSlug={article.slugPt} variant="inline" />
            </article>

            <aside className="hidden lg:sticky lg:top-28 lg:block">
              <IdentityPanel hover={false} className="p-5">
                <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-muted-foreground/60">
                  <Share2 className="h-4 w-4" />
                  {getText(language, 'leitura', 'reading')}
                </div>
                <div className="space-y-2">
                  {sections.slice(0, 6).map((section, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="block rounded-xl border border-border/20 bg-background/25 px-3 py-2 text-xs leading-relaxed text-muted-foreground"
                    >
                      {String(index + 1).padStart(2, '0')} · {section.title[language]}
                    </a>
                  ))}
                </div>
              </IdentityPanel>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketTrailArticle;
