import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import {
  CHANGELOG_SEARCH_MIN_ITEMS,
  changelogCategories,
  changelogEntries,
  formatChangelogDate,
  formatChangelogTime,
  getChangelogCategory,
  getChangelogsByCategory,
  getChangelogTypeLabel,
  getLatestChangelogForCategory,
  sortChangelogsByDate,
  type ChangelogEntry,
  type ChangelogLocale,
} from "@/data/changelogs";
import { cn } from "@/lib/utils";
import { getText } from "@/utils/translations";
import { ptToEnRoutes } from "@/utils/routeMapping";
import NotFound from "./NotFound";

const BASE_URL = "https://www.talissonsouza.com.br";

const normalizeSearch = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const entrySearchText = (entry: ChangelogEntry, locale: ChangelogLocale) =>
  normalizeSearch(
    [
      entry.title[locale],
      getChangelogTypeLabel(entry.type, locale),
      ...entry.description.map((paragraph) => paragraph[locale]),
      entry.impact?.[locale],
      entry.status?.[locale],
      entry.relatedDocument?.[locale],
    ]
      .filter(Boolean)
      .join(" ")
  );

const localizedPath = (href: string, locale: ChangelogLocale) => {
  if (/^https?:\/\//.test(href)) return href;
  if (locale === "en") return ptToEnRoutes[href] ?? href;
  return href;
};

const routeUrl = (path: string) => `${BASE_URL}${path === "/" ? "" : path}`;

const ChangelogMetaLine = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="border-l border-border/40 pl-4">
    <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/60">
      {label}
    </dt>
    <dd className="mt-1 text-sm leading-relaxed text-foreground/85">{value}</dd>
  </div>
);

const ChangelogIndex = ({ locale }: { locale: ChangelogLocale }) => {
  const latest = sortChangelogsByDate(changelogEntries)[0];
  const indexPath = locale === "en" ? "/en-us/changelogs" : "/changelogs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: getText(locale, "Changelogs", "Changelogs"),
    description: getText(
      locale,
      "Histórico público de mudanças relevantes no site, serviços, políticas e infraestrutura de Talisson Souza.",
      "Public history of relevant changes to Talisson Souza's website, services, policies and infrastructure."
    ),
    url: routeUrl(indexPath),
    hasPart: changelogCategories.map((category) => ({
      "@type": "CollectionPage",
      name: category.title[locale],
      url: routeUrl(category.path[locale]),
    })),
  };

  return (
    <Layout withPadding={false}>
      <SEO
        title="Changelogs"
        description={getText(
          locale,
          "Histórico público de mudanças relevantes no site, serviços, políticas e infraestrutura de Talisson Souza.",
          "Public history of relevant changes to Talisson Souza's website, services, policies and infrastructure."
        )}
        canonical={indexPath}
        jsonLd={jsonLd}
      />

      <PageHero
        compact
        uppercase={false}
        eyebrow={getText(locale, "Histórico oficial", "Official history")}
        title="Changelogs"
        subtitle={getText(
          locale,
          "Tudo o que mudou, registrado por área para ficar fácil de consultar depois.",
          "Everything that changed, organized by area so it is easy to check later."
        )}
      />

      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8 flex flex-col gap-3 border-b border-border/25 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground/65">
                  {getText(locale, "Áreas disponíveis", "Available areas")}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {getText(
                    locale,
                    "Escolha uma área para ver apenas as atualizações daquele contexto.",
                    "Choose an area to see only the updates for that context."
                  )}
                </p>
              </div>
              {latest && (
                <p className="text-xs text-muted-foreground/65">
                  {getText(locale, "Última atualização", "Latest update")}{" "}
                  <span className="text-foreground/80">
                    {formatChangelogDate(latest.date, locale)} {getText(locale, "às", "at")} {latest.time}
                  </span>
                </p>
              )}
            </div>
          </ScrollReveal>

          <div className="divide-y divide-border/25 border-y border-border/25">
            {changelogCategories.map((category, index) => {
              const entries = getChangelogsByCategory(category.slug);
              const categoryLatest = getLatestChangelogForCategory(category.slug);

              return (
                <ScrollReveal key={category.slug} delay={index * 0.05}>
                  <Link
                    to={category.path[locale]}
                    className="group grid gap-5 py-7 transition-colors hover:bg-foreground/[0.025] sm:grid-cols-[88px_1fr_auto] sm:items-center sm:px-4 lg:px-5"
                  >
                    <span className="font-serif text-3xl leading-none text-foreground/20 transition-colors group-hover:text-foreground/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-serif text-2xl leading-tight text-foreground">
                        {category.title[locale]}
                      </span>
                      <span className="mt-3 block max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {category.description[locale]}
                      </span>
                      <span className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground/60">
                        <span>
                          {entries.length}{" "}
                          {entries.length === 1
                            ? getText(locale, "registro", "record")
                            : getText(locale, "registros", "records")}
                        </span>
                        <span>
                          {categoryLatest
                            ? `${getText(locale, "Mais recente", "Latest")} ${formatChangelogDate(categoryLatest.date, locale)}`
                            : getText(locale, "Sem registros publicados", "No published records")}
                        </span>
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80">
                      {getText(locale, "Ver histórico", "View history")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ChangelogCategoryPage = ({
  categorySlug,
  locale,
}: {
  categorySlug: string;
  locale: ChangelogLocale;
}) => {
  const [query, setQuery] = useState("");
  const category = getChangelogCategory(categorySlug);
  const indexPath = locale === "en" ? "/en-us/changelogs" : "/changelogs";
  const entries = useMemo(() => getChangelogsByCategory(categorySlug), [categorySlug]);
  const showSearch = entries.length >= CHANGELOG_SEARCH_MIN_ITEMS;
  const normalizedQuery = normalizeSearch(query.trim());

  const filteredEntries = useMemo(() => {
    if (!normalizedQuery) return entries;
    return entries.filter((entry) => entrySearchText(entry, locale).includes(normalizedQuery));
  }, [entries, locale, normalizedQuery]);

  if (!category) return <NotFound />;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${category.title[locale]} | Changelogs`,
      description: category.seoDescription[locale],
      url: routeUrl(category.path[locale]),
      mainEntity: {
        "@type": "ItemList",
        itemListElement: entries.map((entry, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: entry.title[locale],
          url: `${routeUrl(category.path[locale])}#${entry.slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Changelogs",
          item: routeUrl(indexPath),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: category.title[locale],
          item: routeUrl(category.path[locale]),
        },
      ],
    },
  ];

  return (
    <Layout withPadding={false}>
      <SEO
        title={`${category.title[locale]} | Changelogs`}
        description={category.seoDescription[locale]}
        canonical={category.path[locale]}
        jsonLd={jsonLd}
      />

      <PageHero
        compact
        uppercase={false}
        eyebrow="Changelogs"
        title={category.title[locale]}
        subtitle={category.description[locale]}
      />

      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-5 border-b border-border/25 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Link
                to={indexPath}
                className="mb-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                {getText(locale, "Voltar para todos os changelogs", "Back to all changelogs")}
              </Link>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {entries.length > 0
                  ? getText(
                      locale,
                      "Histórico em ordem cronológica, com as mudanças mais recentes primeiro.",
                      "History in chronological order, with the newest changes first."
                    )
                  : getText(
                      locale,
                      "Esta área já existe na estrutura, mas ainda não possui registros publicados.",
                      "This area already exists in the structure, but it does not have published records yet."
                    )}
              </p>
            </div>

            {showSearch && (
              <div className="w-full max-w-sm">
                <label htmlFor="changelog-search" className="sr-only">
                  {getText(locale, "Buscar atualização", "Search update")}
                </label>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70" />
                  <Input
                    id="changelog-search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={getText(locale, "Buscar neste histórico", "Search this history")}
                    className="h-11 rounded-full border-border/35 bg-background/70 pl-10 text-sm"
                  />
                </div>
              </div>
            )}
          </div>

          {entries.length === 0 ? (
            <ScrollReveal>
              <div className="border-y border-border/25 py-14">
                <h2 className="font-serif text-2xl leading-tight text-foreground">
                  {getText(locale, "Nenhuma atualização publicada ainda.", "No updates published yet.")}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {getText(
                    locale,
                    "Quando houver uma mudança real nessa área, ela entra aqui com data, horário, tipo, impacto e links relacionados quando fizer sentido.",
                    "When there is a real change in this area, it will appear here with date, time, type, impact and related links when relevant."
                  )}
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <>
              <div className="divide-y divide-border/25 border-y border-border/25">
                {filteredEntries.map((entry, index) => (
                  <ScrollReveal key={entry.id} delay={Math.min(index * 0.04, 0.18)}>
                    <article
                      id={entry.slug}
                      className="scroll-mt-28 grid gap-5 py-8 lg:grid-cols-[190px_1fr] lg:py-9"
                    >
                      <aside className="space-y-3">
                        <time
                          dateTime={`${entry.date}T${entry.time}:00-03:00`}
                          className="block text-sm font-medium text-foreground"
                        >
                          {formatChangelogDate(entry.date, locale)}
                        </time>
                        <p className="text-xs text-muted-foreground/65">
                          {formatChangelogTime(entry.time, locale)}
                        </p>
                        <div className="flex flex-wrap gap-2 lg:block lg:space-y-2">
                          <span className="inline-flex rounded-full border border-border/35 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                            {getChangelogTypeLabel(entry.type, locale)}
                          </span>
                          {entry.important && (
                            <span className="inline-flex rounded-full border border-foreground/25 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-foreground">
                              {getText(locale, "Importante", "Important")}
                            </span>
                          )}
                        </div>
                      </aside>

                      <div className="min-w-0">
                        <h2 className="font-serif text-2xl leading-tight text-foreground lg:text-3xl">
                          {entry.title[locale]}
                        </h2>

                        <div className="mt-5 space-y-4">
                          {entry.description.map((paragraph, paragraphIndex) => (
                            <p
                              key={paragraphIndex}
                              className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base"
                            >
                              {paragraph[locale]}
                            </p>
                          ))}
                        </div>

                        {(entry.impact || entry.status || entry.effectiveDate || entry.relatedDocument) && (
                          <dl className="mt-7 grid gap-4 md:grid-cols-2">
                            {entry.impact && (
                              <ChangelogMetaLine
                                label={getText(locale, "Impacto", "Impact")}
                                value={entry.impact[locale]}
                              />
                            )}
                            {entry.status && (
                              <ChangelogMetaLine
                                label={getText(locale, "Status", "Status")}
                                value={entry.status[locale]}
                              />
                            )}
                            {entry.effectiveDate && (
                              <ChangelogMetaLine
                                label={getText(locale, "Vigente desde", "Effective since")}
                                value={formatChangelogDate(entry.effectiveDate, locale)}
                              />
                            )}
                            {entry.relatedDocument && (
                              <ChangelogMetaLine
                                label={getText(locale, "Documento", "Document")}
                                value={entry.relatedDocument[locale]}
                              />
                            )}
                          </dl>
                        )}

                        <div
                          className={cn(
                            "mt-7 flex flex-wrap items-center gap-4",
                            !entry.relatedLinks?.length && "text-muted-foreground/60"
                          )}
                        >
                          {entry.relatedLinks?.map((link) => {
                            const href = localizedPath(link.href, locale);
                            const external = link.external || /^https?:\/\//.test(href);

                            if (external) {
                              return (
                                <a
                                  key={`${entry.id}-${link.href}`}
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                                >
                                  {link.label[locale]}
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                              );
                            }

                            return (
                              <Link
                                key={`${entry.id}-${link.href}`}
                                to={href}
                                className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                              >
                                {link.label[locale]}
                                <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            );
                          })}
                          <a
                            href={`#${entry.slug}`}
                            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                            aria-label={getText(locale, "Abrir referência desta atualização", "Open this update reference")}
                          >
                            #{entry.slug}
                          </a>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>

              {filteredEntries.length === 0 && (
                <div className="py-14 text-center">
                  <p className="text-sm text-muted-foreground">
                    {getText(locale, "Nenhuma atualização encontrada com essa busca.", "No updates found for this search.")}
                  </p>
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="mt-3 text-sm text-foreground underline underline-offset-4"
                  >
                    {getText(locale, "Limpar busca", "Clear search")}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

const Changelogs = () => {
  const { language } = useTheme();
  const { categorySlug } = useParams();
  const locale = language as ChangelogLocale;

  if (!categorySlug) return <ChangelogIndex locale={locale} />;
  if (categorySlug === "servico-bots") {
    return <Navigate to={locale === "en" ? "/en-us/changelogs/servicos" : "/changelogs/servicos"} replace />;
  }

  return <ChangelogCategoryPage categorySlug={categorySlug} locale={locale} />;
};

export default Changelogs;
