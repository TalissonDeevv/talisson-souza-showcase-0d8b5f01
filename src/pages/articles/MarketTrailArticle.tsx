import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, MessageSquare, Share2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ShareButtons from "@/components/ui/ShareButtons";
import ArticleSEOFooter from "@/components/ui/ArticleSEOFooter";
import TrailNavigation from "@/components/ui/TrailNavigation";
import DisclaimerBanner from "@/components/ui/DisclaimerBanner";
import ArticleAuthorHeader from "@/components/ui/ArticleAuthorHeader";
import { PageBackdrop } from "@/components/ui/PageIdentity";
import { articles, tagToSlug, type ArticleData } from "@/data/articles";
import type { MarketTrailArticle as FullArticle } from "@/data/market-trail/types";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import NotFound from "@/pages/NotFound";

type CommentsSectionComponent = typeof import("@/components/comments/CommentsSection").default;

const getSlug = (path: string) => path.split("/").filter(Boolean).pop() ?? "";

const getReadingMinutes = (readTime: string) => {
  const parsed = Number.parseInt(readTime, 10);
  return Number.isFinite(parsed) ? parsed : 5;
};

const displayArticleTitle = (title: string) => title.replace(/\s*:\s*/g, ". ");

const legacyArticleSlugAliases: Record<string, { pt: string; en: string }> = {
  "o-que-o-monitoramento-da-discord-pelo-stf-significa-para-quem-cria-comunidades": {
    pt: "eca-digital-anpd-monitoramento",
    en: "eca-digital-anpd-monitoring",
  },
};

const resolveArticleSlug = (slug: string | undefined, language: string) => {
  if (!slug) return slug;
  const alias = legacyArticleSlugAliases[slug];
  return alias ? (language === "en" ? alias.en : alias.pt) : slug;
};

const commentsEnvironmentReady = () => {
  const env = import.meta.env as Record<string, string | undefined>;

  return Boolean(
    env.VITE_COMMENTS_SUPABASE_URL?.trim() &&
      env.VITE_COMMENTS_SUPABASE_PUBLISHABLE_KEY?.trim() &&
      env.VITE_COMMENTS_SUPABASE_PROJECT_ID?.trim()
  );
};

const ArticleComments = ({ articleSlug }: { articleSlug: string }) => {
  const { language } = useTheme();
  const [CommentsComponent, setCommentsComponent] = useState<CommentsSectionComponent | null>(null);
  const [available, setAvailable] = useState(() => commentsEnvironmentReady());

  useEffect(() => {
    if (!available) return;

    let active = true;
    import("@/components/comments/CommentsSection")
      .then((module) => {
        if (active) setCommentsComponent(() => module.default);
      })
      .catch(() => {
        if (active) setAvailable(false);
      });

    return () => {
      active = false;
    };
  }, [available]);

  if (!available) {
    return (
      <div className="rounded-3xl border border-border/25 bg-background/35 p-6 text-sm leading-relaxed text-muted-foreground">
        {getText(
          language,
          "Os comentários por Discord ficam ativos no site publicado.",
          "Discord comments are available on the published site."
        )}
      </div>
    );
  }

  if (!CommentsComponent) {
    return (
      <div className="rounded-3xl border border-border/25 bg-background/35 p-6 text-sm text-muted-foreground">
        {getText(language, "Carregando comentarios", "Loading comments")}
      </div>
    );
  }

  return <CommentsComponent articleSlug={articleSlug} variant="inline" />;
};

const MarketTrailArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useTheme();
  const [fullArticle, setFullArticle] = useState<FullArticle | null>(null);
  const [loaded, setLoaded] = useState(false);
  const resolvedSlug = useMemo(() => resolveArticleSlug(slug, language), [slug, language]);

  const metaArticle = useMemo(() => {
    if (!resolvedSlug) return undefined;
    return articles.find((item) => getSlug(language === "en" ? item.path.en : item.path.pt) === resolvedSlug);
  }, [language, resolvedSlug]);

  useEffect(() => {
    let active = true;
    setLoaded(false);
    setFullArticle(null);

    import("@/data/market-trail-articles")
      .then(({ marketTrailArticles }) => {
        if (!active) return;
        const found = marketTrailArticles.find((item) =>
          language === "en" ? item.slugEn === resolvedSlug : item.slugPt === resolvedSlug
        );
        setFullArticle(found ?? null);
      })
      .finally(() => {
        if (active) setLoaded(true);
      });

    return () => {
      active = false;
    };
  }, [language, resolvedSlug]);

  if (!metaArticle && loaded && !fullArticle) return <NotFound />;

  const article = fullArticle ?? metaArticle;

  if (!article) {
    return (
      <Layout withPadding={false}>
        <section className="grid min-h-screen place-items-center px-6">
          <div className="text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60">
              {getText(language, "Artigo", "Article")}
            </span>
            <p className="mt-4 font-serif text-3xl text-foreground">
              {getText(language, "Preparando leitura", "Preparing reading")}
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  const articleTitle = displayArticleTitle(article.title[language]);
  const articleTags = article.tags[language];
  const sections = fullArticle?.sections ?? [];
  const articleSlugPt = fullArticle?.slugPt ?? getSlug((article as ArticleData).path.pt);
  const articleSlugEn = fullArticle?.slugEn ?? getSlug((article as ArticleData).path.en);
  const canonical =
    language === "en" ? `/en-us/articles/${articleSlugEn}` : `/artigos/${articleSlugPt}`;
  const tagBasePath = language === "en" ? "/en-us/articles/tag" : "/artigos/tag";

  return (
    <Layout withPadding={false}>
      <SEO
        title={`${articleTitle} | Talisson Souza`}
        description={article.excerpt[language]}
        canonical={canonical}
        type="article"
        publishedTime={article.publishedDate}
        keywords={fullArticle ? fullArticle.keywords[language] : article.tags[language]}
      />

      <section className="relative overflow-hidden pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="absolute inset-x-0 top-0 h-px bg-border/35" />
        <PageBackdrop />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <Link
                to={language === "en" ? "/en-us/articles" : "/artigos"}
                className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                {getText(language, "Voltar aos artigos", "Back to articles")}
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <div className="mb-5 flex flex-wrap gap-2">
                {articleTags.map((tag) => (
                  <Link
                    key={tag}
                    to={`${tagBasePath}/${tagToSlug(tag)}`}
                    className="rounded-full border border-border/25 bg-background/35 px-3 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl text-balance font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl"
              >
                {articleTitle}
              </motion.h1>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {article.excerpt[language]}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.22}>
              <div className="mt-8 flex flex-col gap-5 border-y border-border/25 py-6 sm:flex-row sm:items-center sm:justify-between">
                <ArticleAuthorHeader date={article.publishedDate} readingTime={getReadingMinutes(article.readTime)} />
                <ShareButtons title={articleTitle} className="sm:justify-end" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <article className="mx-auto max-w-3xl">
            {fullArticle?.showDisclaimer && (
              <ScrollReveal>
                <DisclaimerBanner customText={fullArticle.disclaimerText} />
              </ScrollReveal>
            )}

            <div className="space-y-14">
              {!fullArticle && (
                <ScrollReveal>
                  <p className="text-base leading-[1.95] text-muted-foreground sm:text-lg">
                    {article.excerpt[language]}
                  </p>
                </ScrollReveal>
              )}

              {sections.map((section, index) => (
                <ScrollReveal key={`${section.title[language]}-${index}`} delay={Math.min(index * 0.04, 0.2)}>
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="group"
                  >
                    <div className="mb-6">
                      <h2 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
                        {section.title[language]}
                      </h2>
                    </div>
                    <div className="space-y-5">
                      {section.content[language].split("\n\n").map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-base leading-[1.95] text-muted-foreground sm:text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.section>
                </ScrollReveal>
              ))}
            </div>

            {fullArticle?.sourceUrl && (
              <ScrollReveal delay={0.18}>
                <div className="mt-12 border-t border-border/25 pt-8">
                  <a
                    href={fullArticle.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-background/35 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {fullArticle.sourceLabel?.[language] || getText(language, "Fonte oficial", "Official source")}
                  </a>
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal delay={0.22}>
              <div className="mt-12 flex flex-col gap-4 border-y border-border/25 py-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Share2 className="h-4 w-4" />
                  {getText(language, "Compartilhar", "Share")}
                </div>
                <ShareButtons title={articleTitle} className="sm:justify-end" />
              </div>
            </ScrollReveal>

            {fullArticle && (
              <TrailNavigation currentSlugPt={fullArticle.slugPt} currentSlugEn={fullArticle.slugEn} />
            )}

            <ArticleSEOFooter />
          </article>

          <section className="mx-auto mt-14 max-w-3xl">
            <ScrollReveal>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border/30 bg-background/35">
                  <MessageSquare className="h-5 w-5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-muted-foreground/60">
                    {getText(language, "Comentários", "Comments")}
                  </p>
                  <h2 className="font-serif text-2xl text-foreground">
                    {getText(language, "Conversa aberta", "Open conversation")}
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <ArticleComments articleSlug={articleSlugPt} />
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default MarketTrailArticle;
