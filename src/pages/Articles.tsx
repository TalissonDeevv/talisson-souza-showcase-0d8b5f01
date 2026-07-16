import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, ExternalLink, FileText, FolderOpen, Route } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ArticleSearch from "@/components/ui/ArticleSearch";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { articles, getAllTags, trails } from "@/data/articles";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const SUGGEST_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdUM_KRTJfGm8zw7Z4VWBA0845PBQZomFypiJhNOEaWd5ORGw/viewform?usp=dialog";
const displayArticleTitle = (title: string) => title.replace(/\s*:\s*/g, ". ");

const PRIMARY_CATEGORIES: Record<string, { pt: string; en: string }> = {
  Carreira: { pt: "Carreira", en: "Career" },
  Fundamentos: { pt: "Fundamentos", en: "Fundamentals" },
  Segurança: { pt: "Segurança", en: "Security" },
  Discord: { pt: "Discord", en: "Discord" },
  Arquitetura: { pt: "Arquitetura", en: "Architecture" },
  Estratégia: { pt: "Estratégia", en: "Strategy" },
};

const PRIMARY_CATEGORY_KEYS = Object.keys(PRIMARY_CATEGORIES);

const Articles = () => {
  const { language } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"trails" | "all">("trails");
  const [showMoreTags, setShowMoreTags] = useState(false);

  const allTags = getAllTags(language);

  const { primaryTags, secondaryTags } = useMemo(() => {
    const primary: string[] = [];
    const secondary: string[] = [];

    allTags.forEach((tag) => {
      const isPrimary = PRIMARY_CATEGORY_KEYS.some((key) => {
        const label = PRIMARY_CATEGORIES[key];
        return tag === label.pt || tag === label.en;
      });

      if (isPrimary) primary.push(tag);
      else secondary.push(tag);
    });

    return { primaryTags: primary, secondaryTags: secondary };
  }, [allTags]);

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.tags[language].some((tag) => tag === selectedCategory))
    : articles;

  const featuredTrail = trails.find((trail) => trail.id === "market-programming") ?? trails[0];

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Artigos e Guias Técnicos | Talisson Souza", "Articles & Technical Guides | Talisson Souza")}
        description={getText(
          language,
          "Artigos e guias técnicos sobre tecnologia, gestão, segurança, projetos digitais e boas práticas profissionais.",
          "Articles and technical guides on technology, management, security, digital projects and professional best practices."
        )}
        canonical={language === "en" ? "/en-us/articles" : "/artigos"}
        keywords={["artigos tecnicos", "guias", "tecnologia", "gestao", "seguranca", "bots discord"]}
      />

      <PageHero
        compact
        eyebrow={getText(language, "Publicações", "Publications")}
        title={getText(language, "Artigos & Guias", "Articles & Guides")}
        subtitle={getText(
          language,
          "Conteúdo técnico organizado por trilhas, com foco em fundamentos, arquitetura, segurança, comunidades e estratégia profissional.",
          "Technical content organized by trails, focused on fundamentals, architecture, security, communities and professional strategy."
        )}
        meta={
          <div className="space-y-5">
            <MotionRail
              className="max-w-2xl"
              items={[
                { value: trails.length, label: getText(language, "trilhas", "trails") },
                { value: articles.length, label: getText(language, "artigos", "articles") },
                { value: "SEO", label: getText(language, "guias técnicos", "technical guides") },
              ]}
            />
            <ArticleSearch variant="hero" />
          </div>
        }
      >
        <IdentityPanel hover={false} className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <FileText className="h-5 w-5 text-foreground/70" />
            <span className="rounded-full border border-border/30 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/55">
              {getText(language, "biblioteca", "library")}
            </span>
          </div>
          <div className="space-y-3">
            {trails.slice(0, 4).map((trail, index) => (
              <motion.div
                key={trail.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.18 + index * 0.07 }}
                className="flex items-center justify-between gap-4 rounded-xl border border-border/20 bg-background/35 px-4 py-3"
              >
                <span className="truncate text-sm text-foreground/80">{trail.title[language]}</span>
                <span className="text-xs text-muted-foreground/55">{String(trail.articleIds.length).padStart(2, "0")}</span>
              </motion.div>
            ))}
          </div>
        </IdentityPanel>
      </PageHero>

      <section className="pb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <Link to={featuredTrail.path[language]} className="group block">
              <IdentityPanel className="p-6 lg:p-8">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr]">
                  <div>
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-border/25 bg-background/35 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">
                        {getText(language, "trilha em destaque", "featured trail")}
                      </span>
                      <span className="text-xs text-muted-foreground/50">
                        {featuredTrail.articleIds.length} {getText(language, "artigos", "articles")}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/35" />
                      <span className="text-xs text-muted-foreground/50">
                        {getText(language, "programação e carreira", "programming and career")}
                      </span>
                    </div>
                    <h2 className="max-w-4xl font-serif text-2xl leading-tight text-foreground lg:text-4xl">
                      {featuredTrail.title[language]}
                    </h2>
                    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                      {featuredTrail.description[language]}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between gap-8 border-t border-border/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <div className="flex flex-wrap gap-2">
                      {[
                        getText(language, "Fundamentos", "Fundamentals"),
                        getText(language, "Engenharia", "Engineering"),
                        getText(language, "Carreira", "Career"),
                        getText(language, "Mercado", "Market"),
                        getText(language, "Negócios", "Business"),
                      ].map((tag) => (
                        <span key={tag} className="rounded-full border border-border/20 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground/55">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      <span className="relative">
                        {getText(language, "Explorar trilha", "Explore trail")}
                        <span className="absolute bottom-0 left-0 h-px w-full bg-foreground/20" />
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </IdentityPanel>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            {[
              { id: "trails" as const, label: getText(language, "Trilhas", "Trails"), icon: Route },
              { id: "all" as const, label: getText(language, "Todos os artigos", "All articles"), icon: FolderOpen },
            ].map((item) => {
              const Icon = item.icon;
              const active = viewMode === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setViewMode(item.id);
                    if (item.id === "trails") setSelectedCategory(null);
                  }}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs transition-all duration-300 ${
                    active
                      ? "border-foreground/25 bg-foreground/10 text-foreground"
                      : "border-border/20 bg-background/20 text-muted-foreground/70 hover:border-border/40 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {viewMode === "all" && (
              <motion.div
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      !selectedCategory
                        ? "border-foreground/25 bg-foreground/10 text-foreground"
                        : "border-border/15 text-muted-foreground/55 hover:text-foreground"
                    }`}
                  >
                    {getText(language, "Todos", "All")}
                    <span className="ml-2 text-[10px] text-muted-foreground/45">{articles.length}</span>
                  </button>
                  {primaryTags.map((tag) => {
                    const count = articles.filter((article) => article.tags[language].includes(tag)).length;
                    return (
                      <button
                        key={tag}
                        onClick={() => setSelectedCategory(tag === selectedCategory ? null : tag)}
                        className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                          tag === selectedCategory
                            ? "border-foreground/25 bg-foreground/10 text-foreground"
                            : "border-border/15 text-muted-foreground/55 hover:text-foreground"
                        }`}
                      >
                        {tag}
                        <span className="ml-2 text-[10px] text-muted-foreground/45">{count}</span>
                      </button>
                    );
                  })}
                  {secondaryTags.length > 0 && (
                    <button
                      onClick={() => setShowMoreTags(!showMoreTags)}
                      className="inline-flex items-center gap-1 rounded-full border border-border/15 px-3 py-1.5 text-xs text-muted-foreground/55 transition-colors hover:text-foreground"
                    >
                      {showMoreTags ? getText(language, "Menos", "Less") : `+${secondaryTags.length}`}
                      <ChevronDown className={`h-3 w-3 transition-transform ${showMoreTags ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>

                <AnimatePresence>
                  {showMoreTags && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 flex flex-wrap gap-2">
                        {secondaryTags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSelectedCategory(tag === selectedCategory ? null : tag)}
                            className={`rounded-full border px-3 py-1 text-[11px] transition-colors ${
                              tag === selectedCategory
                                ? "border-foreground/25 bg-foreground/10 text-foreground"
                                : "border-border/10 text-muted-foreground/45 hover:text-muted-foreground"
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {viewMode === "trails" ? (
        <section className="pb-20 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {trails.map((trail, index) => (
                <ScrollReveal key={trail.id} delay={index * 0.06}>
                  <Link to={trail.path[language]} className="group block h-full">
                    <IdentityPanel className="flex h-full flex-col p-6 lg:p-7">
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <span className="font-serif text-4xl leading-none text-foreground/18">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="rounded-full border border-border/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/55">
                          {trail.articleIds.length} {getText(language, "artigos", "articles")}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl leading-tight text-foreground">{trail.title[language]}</h2>
                      <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {trail.description[language]}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        <span className="relative">
                          {getText(language, "Explorar trilha", "Explore trail")}
                          <span className="absolute bottom-0 left-0 h-px w-full bg-foreground/20" />
                          <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </IdentityPanel>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="pb-20 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="space-y-3">
              {filteredArticles.map((article, index) => (
                <ScrollReveal key={article.id} delay={index * 0.02}>
                  <Link to={article.path[language]} className="group block">
                    <IdentityPanel className="p-5">
                      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div className="min-w-0">
                          <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground/50">
                            <span>{article.date[language]}</span>
                            <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                            <span>{article.readTime} {getText(language, "de leitura", "read")}</span>
                          </div>
                          <h2 className="font-serif text-lg leading-tight text-foreground lg:text-xl">{displayArticleTitle(article.title[language])}</h2>
                          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground/70">
                            {article.excerpt[language]}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground" />
                      </div>
                    </IdentityPanel>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-sm text-muted-foreground">
                  {getText(language, "Nenhum artigo encontrado para esta categoria.", "No articles found for this category.")}
                </p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-3 text-xs text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {getText(language, "Ver todos os artigos", "View all articles")}
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="border-t border-border/20 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <IdentityPanel hover={false} className="mx-auto max-w-3xl p-8 text-center lg:p-10">
              <h3 className="font-serif text-2xl leading-tight text-foreground">
                {getText(language, "Não encontrou o tema que estava procurando?", "Didn't find the topic you were looking for?")}
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {getText(
                  language,
                  "Os artigos nascem de problemas reais da comunidade. Se existe um tema que merece clareza, ele pode virar pauta.",
                  "Articles come from real community problems. If a topic deserves clarity, it can become an agenda."
                )}
              </p>
              <a
                href={SUGGEST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/30 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
              >
                {getText(language, "Sugerir um artigo", "Suggest an article")}
                <ExternalLink className="h-4 w-4" />
              </a>
            </IdentityPanel>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
