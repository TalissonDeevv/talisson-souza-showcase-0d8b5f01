import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { policySections } from "@/data/policies-content";
import { professionalPolicySummaries } from "@/data/professional-policies";
import { cn } from "@/lib/utils";

const chapterId = (index: number) => `capitulo-${index + 1}`;

const getChapterNumber = (heading: string) => {
  const match = heading.match(/^(\d+)\./);
  return match?.[1].padStart(2, "0") ?? "";
};

const cleanChapterTitle = (heading: string) => heading.replace(/^\d+\.\s*/, "");

const professionalPolicyIds = new Set(["o-que-faco", "o-que-nao-faco", "como-trabalho"]);

const splitLongPolicyText = (text: string) => {
  const sentences = text
    .replace(/([.!?]["”’]?)\s+(?=[A-ZÀ-ÖØ-Þ0-9“"'])/g, "$1\n")
    .split("\n")
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  if (sentences.length <= 2) return [text.trim()];

  const paragraphs: string[] = [];
  let current: string[] = [];
  let currentLength = 0;

  sentences.forEach((sentence) => {
    const shouldStartNextParagraph =
      current.length >= 2 || (current.length > 0 && currentLength + sentence.length > 520);

    if (shouldStartNextParagraph) {
      paragraphs.push(current.join(" "));
      current = [];
      currentLength = 0;
    }

    current.push(sentence);
    currentLength += sentence.length;
  });

  if (current.length > 0) paragraphs.push(current.join(" "));
  return paragraphs;
};

const getOfficialChannelGroup = (label: string) => {
  if (label.startsWith("E-mail")) return "emails";
  if (label.startsWith("Domínio") || label === "Discord") return "identity";
  if (["WhatsApp profissional", "Servidor Discord", "Newsletter no LinkedIn"].includes(label)) return "main";
  return "social";
};

const renderPolicyText = (text: string) => {
  const parts = text.split(/(https?:\/\/[^\s)]+|[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,})/g);
  return parts.map((part, index) => {
    const isUrl = /^https?:\/\//.test(part);
    const isEmail = /^[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(part);
    if (!isUrl && !isEmail) return part;

    const href = part.replace(/[.,;]+$/, "");
    const suffix = part.slice(href.length);
    const linkHref = isEmail ? `mailto:${href}` : href;

    return (
      <span key={`${href}-${index}`}>
        <a
          href={linkHref}
          target={isUrl ? "_blank" : undefined}
          rel={isUrl ? "noopener noreferrer" : undefined}
          className="break-words text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors [overflow-wrap:anywhere] hover:decoration-foreground"
        >
          {href}
        </a>
        {suffix}
      </span>
    );
  });
};

const renderPolicyContent = (text: string, separateLongParagraphs = false) => {
  const blocks: ReactNode[] = [];
  const codeFenceRegex = /```(\w+)?\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let blockIndex = 0;
  let match: RegExpExecArray | null;

  const renderTextLines = (value: string, keyPrefix: string) => {
    const explicitParagraphs = value
      .split(/\n+/)
      .filter((line) => line.trim().length > 0);
    const paragraphs = separateLongParagraphs
      ? explicitParagraphs.flatMap(splitLongPolicyText)
      : explicitParagraphs;

    return paragraphs.map((line, index) => (
      <p
        key={`${keyPrefix}-line-${index}`}
        className={blocks.length > 0 || index > 0 ? "mt-6 sm:mt-7" : ""}
      >
        {renderPolicyText(line)}
      </p>
    ));
  };

  while ((match = codeFenceRegex.exec(text)) !== null) {
    const before = text.slice(lastIndex, match.index);
    blocks.push(...renderTextLines(before, `text-${blockIndex}`));

    const language = match[1] || "text";
    const code = match[2].trim();
    blocks.push(
      <pre
        key={`code-${blockIndex}`}
        className="my-6 max-w-full overflow-x-auto rounded-2xl border border-border/25 bg-foreground/[0.045] p-4 text-sm leading-relaxed text-foreground shadow-inner"
      >
        <code data-language={language} className="block whitespace-pre font-mono">
          {code}
        </code>
      </pre>
    );

    lastIndex = codeFenceRegex.lastIndex;
    blockIndex += 1;
  }

  blocks.push(...renderTextLines(text.slice(lastIndex), `text-${blockIndex}`));
  return blocks;
};

const renderPolicyParagraph = (
  text: string,
  lang: "pt" | "en",
  heading?: string,
  separateLongParagraphs = false
) => {
  const lines = text.split("\n").filter((line) => line.trim().length > 0);
  const shouldRenderAsOfficialList = Boolean(
    heading?.toLowerCase().includes("canais e identificações oficiais") && lines.length > 2
  );

  if (shouldRenderAsOfficialList) {
    const [intro, ...items] = lines;
    const parsedItems = items.map((line) => {
      const [label, ...valueParts] = line.split(" - ");
      return {
        line,
        label,
        value: valueParts.join(" - "),
        group: getOfficialChannelGroup(label),
      };
    });
    const groups = [
      {
        key: "main",
        title: getText(lang, "Canais principais", "Main channels"),
        description: getText(lang, "Meios usados com mais frequência para acesso, comunidade e publicação.", "Frequently used channels for access, community and publishing."),
      },
      {
        key: "social",
        title: getText(lang, "Redes sociais", "Social networks"),
        description: getText(lang, "Perfis públicos reconhecidos como oficiais.", "Public profiles recognized as official."),
      },
      {
        key: "emails",
        title: getText(lang, "Emails por finalidade", "Emails by purpose"),
        description: getText(lang, "Cada endereço existe para um tipo específico de demanda.", "Each address exists for a specific type of request."),
      },
      {
        key: "identity",
        title: getText(lang, "Domínios e identificação", "Domains and identity"),
        description: getText(lang, "Referências usadas para confirmar autenticidade.", "References used to confirm authenticity."),
      },
    ];

    return (
      <>
        <span className="block">{renderPolicyText(intro)}</span>
        <div className="mt-7 space-y-5">
          {groups.map((group) => {
            const groupItems = parsedItems.filter((item) => item.group === group.key);
            if (groupItems.length === 0) return null;

            return (
              <section key={group.key} className="overflow-hidden rounded-2xl border border-border/25 bg-foreground/[0.018]">
                <div className="border-b border-border/15 px-4 py-4 sm:px-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground">
                        {group.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground/75 sm:text-base">
                        {group.description}
                      </p>
                    </div>
                    <span className="w-fit rounded-full border border-border/25 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                      {groupItems.length} {groupItems.length === 1 ? getText(lang, "canal", "channel") : getText(lang, "canais", "channels")}
                    </span>
                  </div>
                </div>

                <dl className="divide-y divide-border/15">
                  {groupItems.map(({ line, label, value }) => {
                    if (!value) {
                      return (
                        <div key={line} className="px-4 py-3.5 sm:px-5">
                          <dd className="min-w-0 break-words text-[15px] leading-relaxed text-muted-foreground [overflow-wrap:anywhere] sm:text-base">
                            {renderPolicyText(line)}
                          </dd>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={line}
                        className="grid gap-1.5 px-4 py-3.5 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6 sm:px-5"
                      >
                        <dt className="text-[15px] font-medium leading-relaxed text-foreground sm:text-base">{label}</dt>
                        <dd className="min-w-0 break-words text-[15px] leading-relaxed text-muted-foreground [overflow-wrap:anywhere] sm:text-base">
                          {renderPolicyText(value)}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </section>
            );
          })}
        </div>
      </>
    );
  }

  return renderPolicyContent(text, separateLongParagraphs);
};

const PolicyDetail = () => {
  const { language } = useTheme();
  const { sectionId } = useParams<{ sectionId: string }>();
  const lang = language as "pt" | "en";
  const hubPath = lang === "en" ? "/en-us/policies" : "/politicas";
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [showReadingPanel, setShowReadingPanel] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("policy-reading-panel") === "visible";
  });

  const sectionIndex = policySections.findIndex((item) => item.id === sectionId);
  const section = policySections[sectionIndex];
  const safeSection = section ?? policySections[0];
  const isProfessionalPolicy = professionalPolicyIds.has(safeSection.id);
  const sectionSummary = professionalPolicySummaries[safeSection.id]?.[lang] ?? safeSection.paragraphs[0][lang];

  const prev = sectionIndex > 0 ? policySections[sectionIndex - 1] : null;
  const next = sectionIndex < policySections.length - 1 ? policySections[sectionIndex + 1] : null;
  const chapterItems = useMemo(
    () =>
      safeSection.paragraphs
        .map((paragraph, index) => {
          const heading = paragraph.heading?.[lang];
          if (!heading) return null;
          const number = getChapterNumber(heading);
          if (!number) return null;
          return {
            id: chapterId(index),
            number,
            title: cleanChapterTitle(heading),
          };
        })
        .filter((item): item is { id: string; number: string; title: string } => Boolean(item)),
    [safeSection.paragraphs, lang]
  );

  useEffect(() => {
    if (typeof window === "undefined" || chapterItems.length === 0) return;

    const elements = chapterItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    setActiveChapter(chapterItems[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActiveChapter(visible.target.id);
      },
      { rootMargin: "-30% 0px -58% 0px", threshold: [0, 0.2, 0.6] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [chapterItems]);

  useEffect(() => {
    window.localStorage.setItem("policy-reading-panel", showReadingPanel ? "visible" : "hidden");
  }, [showReadingPanel]);

  if (!section) {
    return <Navigate to={hubPath} replace />;
  }

  const detailBasePath = hubPath;

  return (
    <Layout withPadding={false}>
      <SEO
        title={`${section.title[lang]} | ${getText(language, "Políticas", "Policies")}`}
        description={sectionSummary.slice(0, 155)}
        canonical={`${detailBasePath}/${section.id}`}
        keywords={lang === "pt" ? ["políticas", "termos de uso", section.title.pt.toLowerCase()] : ["policies", "terms of use", section.title.en.toLowerCase()]}
      />

      <button
        type="button"
        aria-pressed={showReadingPanel}
        aria-label={
          showReadingPanel
            ? getText(language, "Esconder painel de leitura", "Hide reading panel")
            : getText(language, "Mostrar painel de leitura", "Show reading panel")
        }
        onClick={() => setShowReadingPanel((value) => !value)}
        className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom))] right-4 z-[60] inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-border/40 bg-background/90 px-3 py-3 text-xs font-semibold text-foreground shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors hover:border-foreground/35 hover:bg-background min-[341px]:px-4 sm:right-6 sm:px-5 lg:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]"
      >
        <FileText className="h-4 w-4" />
        <span className="hidden min-[341px]:inline sm:hidden">
          {showReadingPanel ? getText(language, "Esconder", "Hide") : getText(language, "Leitura", "Reading")}
        </span>
        <span className="hidden sm:inline">
          {showReadingPanel
            ? getText(language, "Esconder painel de leitura", "Hide reading panel")
            : getText(language, "Mostrar painel de leitura", "Show reading panel")}
        </span>
      </button>

      <PageHero
        compact
        eyebrow={getText(language, "Políticas", "Policies")}
        title={section.title[lang]}
        titleClassName="text-[clamp(2.15rem,12vw,5.2rem)]"
        subtitle={sectionSummary}
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: String(sectionIndex + 1).padStart(2, "0"), label: getText(language, "documento", "document") },
              { value: policySections.length, label: getText(language, "total", "total") },
              { value: "2026", label: getText(language, "revisão", "review") },
            ]}
          />
        }
        actions={
          <Link
            to={hubPath}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {getText(language, "Voltar à central", "Back to hub")}
          </Link>
        }
      />


      <section id="documento" className="relative scroll-mt-28 overflow-visible py-12 lg:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className={cn("mx-auto", showReadingPanel ? "max-w-5xl" : "max-w-6xl")}>
            <div className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground/60">
              <Link to={hubPath} className="transition-colors hover:text-foreground">
                {getText(language, "Políticas", "Policies")}
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{section.title[lang]}</span>
            </div>

            <div className={cn("grid gap-10 lg:items-start", showReadingPanel && "lg:grid-cols-[minmax(0,1.38fr)_minmax(260px,0.62fr)]")}>
              {showReadingPanel && (
                <aside className="relative order-first lg:order-2 lg:sticky lg:top-24 lg:self-start lg:pl-8">
                  <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-border/30 to-transparent lg:block" />
                  <ScrollReveal>
                    <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                      {getText(language, "Leitura", "Reading")}
                    </span>
                    <h2 className="break-words font-serif text-3xl leading-tight text-foreground [overflow-wrap:anywhere] lg:text-5xl">
                      {getText(language, "Um documento, sem ruído.", "One document, no noise.")}
                    </h2>
                    <p className="mt-5 text-base leading-[1.75] text-muted-foreground">
                      {getText(
                        language,
                        "A intenção aqui é deixar responsabilidades visíveis antes de qualquer contratação, compra ou uso de conteúdo.",
                        "The goal here is to make responsibilities visible before any engagement, purchase or use of content."
                      )}
                    </p>
                    <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-border/35">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((sectionIndex + 1) / policySections.length) * 100}%` }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-foreground/60"
                      />
                    </div>
                  </ScrollReveal>
                  {chapterItems.length > 0 && (
                    <nav
                      data-lenis-prevent=""
                      data-lenis-prevent-wheel=""
                      data-lenis-prevent-vertical=""
                      className="policy-reading-scrollbar mt-8 hidden max-h-[min(52vh,520px)] space-y-1 overflow-y-auto pr-2 lg:block"
                    >
                      {chapterItems.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={cn(
                            "group grid min-h-14 grid-cols-[42px_1fr] gap-3 rounded-lg px-1 py-2.5 text-left transition-colors hover:bg-foreground/[0.03]",
                            activeChapter === item.id && "bg-foreground/[0.04]"
                          )}
                        >
                          <span className={cn(
                            "font-serif text-lg leading-none text-foreground/20 transition-colors group-hover:text-foreground/45",
                            activeChapter === item.id && "text-foreground/70"
                          )}>
                            {item.number || "•"}
                          </span>
                          <span className={cn(
                            "line-clamp-2 text-[13px] leading-[1.55] text-muted-foreground/60 transition-colors group-hover:text-foreground/80",
                            activeChapter === item.id && "text-foreground/85"
                          )}>
                            {item.title}
                          </span>
                        </a>
                      ))}
                    </nav>
                  )}
                </aside>
              )}

              <article
                className={cn(
                  "relative order-last w-full lg:order-1",
                  !showReadingPanel && "mx-auto max-w-3xl"
                )}
              >
                <div className="space-y-14 lg:space-y-16">
                  {section.paragraphs.map((paragraph, index) => (
                    <ScrollReveal key={index} delay={Math.min(index * 0.025, 0.18)}>
                      <motion.div
                        id={paragraph.heading ? chapterId(index) : undefined}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-70px" }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className={cn(
                          "scroll-mt-28",
                          index === 0 && !paragraph.heading
                            ? "border-l border-foreground/25 pl-5 font-serif text-[1.65rem] leading-[1.5] text-foreground sm:pl-7 sm:text-[1.8rem] lg:text-[2rem]"
                            : ""
                        )}
                      >
                        {paragraph.heading && (
                          <h2 className="mb-6 break-words font-serif text-[2rem] leading-[1.14] text-foreground [overflow-wrap:anywhere] sm:text-[2.25rem] lg:text-[2.5rem]">
                            {paragraph.heading[lang]}
                          </h2>
                        )}
                        <div className={paragraph.heading ? "text-lg leading-[1.85] text-muted-foreground sm:text-[20px] sm:leading-[1.9]" : ""}>
                          {renderPolicyParagraph(
                            paragraph[lang],
                            lang,
                            paragraph.heading?.[lang],
                            isProfessionalPolicy
                          )}
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl border-y border-border/20 py-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-between">
              {prev ? (
                <Link to={`${hubPath}/${prev.id}`} className="group flex flex-1 items-center gap-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground/50">{getText(language, "Anterior", "Previous")}</span>
                    <span className="mt-1 block font-medium text-foreground">{prev.title[lang]}</span>
                  </span>
                </Link>
              ) : (
                <span className="hidden flex-1 sm:block" />
              )}

              <Link to={hubPath} className="inline-flex items-center justify-center gap-2 rounded-full border border-border/30 bg-background/30 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10">
                <FileText className="h-4 w-4" />
                {getText(language, "Central", "Hub")}
              </Link>

              {next ? (
                <Link to={`${hubPath}/${next.id}`} className="group flex flex-1 items-center justify-end gap-3 py-3 text-right text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground/50">{getText(language, "Próximo", "Next")}</span>
                    <span className="mt-1 block font-medium text-foreground">{next.title[lang]}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <span className="hidden flex-1 sm:block" />
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolicyDetail;
