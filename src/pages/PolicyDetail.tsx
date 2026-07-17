import { useEffect, useMemo, useState } from "react";
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
import { cn } from "@/lib/utils";

const chapterId = (index: number) => `capitulo-${index + 1}`;

const getChapterNumber = (heading: string, fallback: number) => {
  const match = heading.match(/^(\d+)\./);
  return match?.[1].padStart(2, "0") ?? String(fallback).padStart(2, "0");
};

const cleanChapterTitle = (heading: string) => heading.replace(/^\d+\.\s*/, "");

const renderPolicyText = (text: string) => {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);
  return parts.map((part, index) => {
    if (!/^https?:\/\//.test(part)) return part;
    const href = part.replace(/[.,;]+$/, "");
    const suffix = part.slice(href.length);
    return (
      <span key={`${href}-${index}`}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground"
        >
          {href}
        </a>
        {suffix}
      </span>
    );
  });
};

const PolicyDetail = () => {
  const { language } = useTheme();
  const { sectionId } = useParams<{ sectionId: string }>();
  const lang = language as "pt" | "en";
  const basePath = lang === "en" ? "/en-us/policies" : "/politicas";
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  const sectionIndex = policySections.findIndex((item) => item.id === sectionId);
  const section = policySections[sectionIndex];
  const safeSection = section ?? policySections[0];

  const prev = sectionIndex > 0 ? policySections[sectionIndex - 1] : null;
  const next = sectionIndex < policySections.length - 1 ? policySections[sectionIndex + 1] : null;
  const chapterItems = useMemo(
    () =>
      safeSection.paragraphs
        .map((paragraph, index) => {
          const heading = paragraph.heading?.[lang];
          if (!heading) return null;
          return {
            id: chapterId(index),
            number: getChapterNumber(heading, index + 1),
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

  if (!section) {
    return <Navigate to={basePath} replace />;
  }

  return (
    <Layout withPadding={false}>
      <SEO
        title={`${section.title[lang]} | ${getText(language, "Políticas", "Policies")}`}
        description={section.paragraphs[0][lang].slice(0, 155)}
        canonical={`${basePath}/${section.id}`}
        keywords={lang === "pt" ? ["políticas", "termos de uso", section.title.pt.toLowerCase()] : ["policies", "terms of use", section.title.en.toLowerCase()]}
      />

      <PageHero
        compact
        eyebrow={getText(language, "Políticas", "Policies")}
        title={section.title[lang]}
        subtitle={section.paragraphs[0][lang]}
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
            to={basePath}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {getText(language, "Voltar à central", "Back to hub")}
          </Link>
        }
      />


      <section id="documento" className="relative scroll-mt-28 overflow-hidden py-12 lg:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground/60">
              <Link to={basePath} className="transition-colors hover:text-foreground">
                {getText(language, "Políticas", "Policies")}
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{section.title[lang]}</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <ScrollReveal>
                  <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                    {getText(language, "Leitura", "Reading")}
                  </span>
                  <h2 className="break-words font-serif text-3xl leading-tight text-foreground [overflow-wrap:anywhere] lg:text-5xl">
                    {getText(language, "Um documento, sem ruído.", "One document, no noise.")}
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
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
                    <nav className="mt-8 hidden max-h-[232px] space-y-1 overflow-y-auto pr-2 [scrollbar-width:thin] lg:block">
                      {chapterItems.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={cn(
                            "group grid grid-cols-[42px_1fr] gap-3 rounded-lg px-1 py-2 text-left transition-colors hover:bg-foreground/[0.03]",
                            activeChapter === item.id && "bg-foreground/[0.04]"
                          )}
                        >
                          <span className={cn(
                            "font-serif text-lg leading-none text-foreground/20 transition-colors group-hover:text-foreground/45",
                            activeChapter === item.id && "text-foreground/70"
                          )}>
                            {item.number}
                          </span>
                          <span className={cn(
                            "line-clamp-2 text-xs leading-relaxed text-muted-foreground/60 transition-colors group-hover:text-foreground/80",
                            activeChapter === item.id && "text-foreground/85"
                          )}>
                            {item.title}
                          </span>
                        </a>
                      ))}
                    </nav>
                  )}
              </aside>

              <article className="relative">
                <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-border/30 to-transparent lg:block" />
                <div className="space-y-7 lg:pl-10">
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
                          index === 0 && !paragraph.heading ? "border-l border-foreground/25 pl-5 font-serif text-2xl leading-[1.45] text-foreground" : ""
                        )}
                      >
                        {paragraph.heading && (
                          <h2 className="mb-4 break-words font-serif text-2xl leading-tight text-foreground [overflow-wrap:anywhere] lg:text-3xl">
                            {paragraph.heading[lang]}
                          </h2>
                        )}
                        <p className={paragraph.heading ? "text-[16px] leading-[1.92] text-muted-foreground" : ""}>
                          {renderPolicyText(paragraph[lang])}
                        </p>
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
                <Link to={`${basePath}/${prev.id}`} className="group flex flex-1 items-center gap-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground/50">{getText(language, "Anterior", "Previous")}</span>
                    <span className="mt-1 block font-medium text-foreground">{prev.title[lang]}</span>
                  </span>
                </Link>
              ) : (
                <span className="hidden flex-1 sm:block" />
              )}

              <Link to={basePath} className="inline-flex items-center justify-center gap-2 rounded-full border border-border/30 bg-background/30 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10">
                <FileText className="h-4 w-4" />
                {getText(language, "Central", "Hub")}
              </Link>

              {next ? (
                <Link to={`${basePath}/${next.id}`} className="group flex flex-1 items-center justify-end gap-3 py-3 text-right text-sm text-muted-foreground transition-colors hover:text-foreground">
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
