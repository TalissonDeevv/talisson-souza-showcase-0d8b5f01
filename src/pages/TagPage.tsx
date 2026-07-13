import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Search, Tag } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ArticleSearch from "@/components/ui/ArticleSearch";
import { PageBackdrop } from "@/components/ui/PageIdentity";
import { getAllTags, getArticlesByTag, slugToTag, tagToSlug } from "@/data/articles";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const displayArticleTitle = (title: string) => title.replace(/\s*:\s*/g, ". ");

const TagPage = () => {
  const { language } = useTheme();
  const { tag: tagSlug } = useParams<{ tag: string }>();

  const tag = tagSlug ? slugToTag(tagSlug, language) : undefined;
  const articles = tag ? getArticlesByTag(tag, language) : [];
  const allTags = getAllTags(language);
  const suggestedTags = allTags.filter((item) => item !== tag).slice(0, 8);

  const tagBasePath = language === "en" ? "/en-us/articles/tag" : "/artigos/tag";
  const articlesPath = language === "en" ? "/en-us/articles" : "/artigos";

  return (
    <Layout withPadding={false}>
      <SEO
        title={
          tag
            ? getText(language, `${tag} | Artigos de Talisson Souza`, `${tag} | Talisson Souza Articles`)
            : getText(language, "Tema não encontrado | Talisson Souza", "Topic not found | Talisson Souza")
        }
        description={
          tag
            ? getText(
                language,
                `Artigos escritos por Talisson Souza sobre ${tag}.`,
                `Articles written by Talisson Souza about ${tag}.`
              )
            : ""
        }
        canonical={tagSlug ? `${tagBasePath}/${tagSlug}` : articlesPath}
      />

      <section className="relative overflow-hidden pt-28 pb-10 lg:pt-32 lg:pb-12">
        <PageBackdrop />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <Link
              to={articlesPath}
              className="mb-9 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {getText(language, "Todos os artigos", "All articles")}
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                  <Tag className="h-4 w-4" />
                  {getText(language, "Tema", "Topic")}
                </div>
                <h1 className="max-w-4xl text-balance font-serif text-4xl font-semibold leading-[0.98] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
                  {tag || getText(language, "Tema não encontrado", "Topic not found")}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {tag
                    ? getText(
                        language,
                        `${articles.length} ${articles.length === 1 ? "artigo encontrado" : "artigos encontrados"}`,
                        `${articles.length} ${articles.length === 1 ? "article found" : "articles found"}`
                      )
                    : getText(language, "Nenhum artigo encontrado para esse tema.", "No articles found for this topic.")}
                </p>
              </div>

              <div className="rounded-2xl border border-border/25 bg-background/35 p-3 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2 px-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/55">
                  <Search className="h-3.5 w-3.5" />
                  {getText(language, "buscar", "search")}
                </div>
                <ArticleSearch />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {suggestedTags.length > 0 && (
        <section className="pb-8">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {suggestedTags.map((item) => (
                <Link
                  key={item}
                  to={`${tagBasePath}/${tagToSlug(item)}`}
                  className="rounded-full border border-border/20 bg-background/25 px-3 py-1.5 text-xs text-muted-foreground/65 transition-colors duration-300 hover:border-foreground/20 hover:text-foreground"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          {articles.length > 0 ? (
            <div className="mx-auto max-w-5xl divide-y divide-border/20 border-y border-border/20">
              {articles.map((article, index) => (
                <ScrollReveal key={article.id} delay={Math.min(index * 0.03, 0.18)}>
                  <Link to={article.path[language]} className="group block">
                    <motion.article
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="grid gap-5 py-7 sm:grid-cols-[1fr_auto] sm:items-center"
                    >
                      <div className="min-w-0">
                        <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground/50">
                          <span>{article.date[language]}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                          <span>{article.readTime} {getText(language, "de leitura", "read")}</span>
                        </div>
                        <h2 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
                          {displayArticleTitle(article.title[language])}
                        </h2>
                        <p className="mt-3 line-clamp-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                          {article.excerpt[language]}
                        </p>
                      </div>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/25 text-muted-foreground transition-colors duration-300 group-hover:border-foreground/30 group-hover:text-foreground">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-xl rounded-3xl border border-border/25 bg-background/30 p-8 text-center">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {getText(language, "Esse tema ainda não tem artigos publicados.", "This topic does not have published articles yet.")}
              </p>
              <Link
                to={articlesPath}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4"
              >
                {getText(language, "Voltar para artigos", "Back to articles")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TagPage;
