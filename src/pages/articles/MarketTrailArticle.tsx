import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ShareButtons from "@/components/ui/ShareButtons";
import ArticleSEOFooter from "@/components/ui/ArticleSEOFooter";
import TrailNavigation from "@/components/ui/TrailNavigation";
import WhatsAppNewsletter from "@/components/ui/WhatsAppNewsletter";
import DisclaimerBanner from "@/components/ui/DisclaimerBanner";
import ArticleAuthorHeader from "@/components/ui/ArticleAuthorHeader";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
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
    <Layout>
      <SEO
        title={`${articleTitle} | Talisson Souza`}
        description={article.excerpt[language]}
        canonical={language === 'en' ? `/en-us/articles/${article.slugEn}` : `/artigos/${article.slugPt}`}
        type="article"
        publishedTime={article.publishedDate}
        keywords={article.keywords[language]}
      />

      <section className="pt-20 pb-8 lg:pt-24 lg:pb-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link to={language === 'en' ? '/en-us/articles' : '/artigos'} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" />
              {getText(language, 'Voltar aos artigos', 'Back to articles')}
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              {articleTitle}
            </motion.h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Link key={tag} to={`${tagBasePath}/${tagToSlug(tag)}`} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <ArticleAuthorHeader date={article.publishedDate} readingTime={parseInt(article.readTime) || 5} />
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {article.showDisclaimer && (
              <ScrollReveal>
                <DisclaimerBanner customText={article.disclaimerText} />
              </ScrollReveal>
            )}
            {sections.map((section, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * index }} className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">{section.title[language]}</h2>
                  {section.content[language].split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-muted-foreground leading-relaxed mb-4 text-base">{paragraph}</p>
                  ))}
                </motion.div>
              </ScrollReveal>
            ))}

            {article.sourceUrl && (
              <ScrollReveal delay={0.2}>
                <div className="mb-10">
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-lg border border-border/30 bg-card/50 text-foreground hover:bg-card hover:border-foreground/20 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {article.sourceLabel?.[language] || getText(language, 'Fonte oficial', 'Official source')}
                  </a>
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal delay={0.3}>
              <div className="mt-12 pt-8 border-t border-border/50">
                <ShareButtons title={articleTitle} />
              </div>
            </ScrollReveal>

            <TrailNavigation currentSlugPt={article.slugPt} currentSlugEn={article.slugEn} />




            <ArticleSEOFooter />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketTrailArticle;
