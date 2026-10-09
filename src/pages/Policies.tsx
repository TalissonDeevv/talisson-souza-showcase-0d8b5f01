import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Bot, FileText, Scale, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { policySections, policiesPageMeta } from "@/data/policies-content";
import { professionalPolicySummaries } from "@/data/professional-policies";
import { cn } from "@/lib/utils";

const groupIds = {
  base: ["visao-geral", "termos-de-uso", "inspiracao-visual", "politica-de-privacidade", "disclaimer", "canais-oficiais-comunicacao-institucional"],
  discord: ["servidor-discord"],
  work: ["como-trabalho", "o-que-faco", "o-que-nao-faco"],
  book: [
    "disclaimer-livro",
    "livro-direitos-autorais",
    "livro-licenca-de-uso",
    "livro-termos-de-compra",
    "livro-politica-de-reembolso",
    "livro-limitacao-de-responsabilidade",
    "livro-uso-de-marca",
    "livro-canais-oficiais",
    "livro-jurisdicao",
  ],
};

const discordPolicyAssets = {
  banner: "/images/discord/escritorio-talisson-banner.png",
  icon: "/images/discord/escritorio-talisson-icon.png",
};

const Policies = () => {
  const { language } = useTheme();
  const lang = language as "pt" | "en";
  const basePath = lang === "en" ? "/en-us/policies" : "/politicas";
  const [activeGroup, setActiveGroup] = useState("base");

  const groups = useMemo(() => [
    {
      id: "base",
      icon: Scale,
      title: getText(language, "Base do site", "Site basis"),
      description: getText(language, "Uso, privacidade, comunidade e responsabilidades gerais.", "Usage, privacy, community and general responsibilities."),
      sections: policySections.filter((section) => groupIds.base.includes(section.id)),
    },
    {
      id: "discord",
      icon: Bot,
      title: getText(language, "Escritório do Talisson", "Escritório do Talisson"),
      description: getText(
        language,
        "Regras oficiais do servidor Discord, com diretrizes de convivência, segurança, divulgação, moderação e uso da minha Bot Bella.",
        "Official Discord server rules covering conduct, safety, promotion, moderation and use of my Bella bot."
      ),
      sections: policySections.filter((section) => groupIds.discord.includes(section.id)),
    },
    {
      id: "work",
      icon: ShieldCheck,
      title: getText(language, "Relação profissional", "Professional relationship"),
      description: getText(language, "Como trabalho, o que faço e o que não faz parte da minha atuação.", "How I work, what I do and what is outside my scope."),
      sections: policySections.filter((section) => groupIds.work.includes(section.id)),
    },
    {
      id: "book",
      icon: BookOpen,
      title: getText(language, "Livro Superando Limites", "Superando Limites book"),
      description: getText(language, "Compra, uso, direitos, reembolso, marca, canais oficiais e jurisdição.", "Purchase, use, rights, refund, brand, official channels and jurisdiction."),
      sections: policySections.filter((section) => groupIds.book.includes(section.id)),
    },
  ], [language]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = groups
      .map((group) => document.getElementById(group.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const syncHash = (id: string) => {
      setActiveGroup(id);
      const nextUrl = `${window.location.pathname}#${id}`;
      if (window.location.hash !== `#${id}`) {
        window.history.replaceState(null, "", nextUrl);
      }
    };

    if (!window.location.hash) {
      syncHash("base");
    } else {
      const hashId = window.location.hash.replace("#", "");
      if (groups.some((group) => group.id === hashId)) setActiveGroup(hashId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) syncHash(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.6] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [groups]);

  return (
    <Layout withPadding={false}>
      <SEO
        title={policiesPageMeta.title[lang]}
        description={policiesPageMeta.description[lang]}
        canonical={lang === "en" ? "/en-us/policies" : "/politicas"}
        keywords={lang === "pt" ? ["políticas", "termos de uso", "privacidade", "diretrizes", "LGPD"] : ["policies", "terms of use", "privacy", "guidelines", "LGPD"]}
      />

      <PageHero
        compact
        eyebrow={getText(language, "Documentação", "Documentation")}
        title={getText(language, "Políticas e acordos", "Policies and agreements")}
        subtitle={getText(
          language,
          "Uma central para entender direitos, limites, responsabilidades e como cada relação profissional é conduzida.",
          "A hub to understand rights, limits, responsibilities and how each professional relationship is conducted."
        )}
        meta={
          <MotionRail
            items={[
              { value: policySections.length, label: getText(language, "documentos", "documents") },
              { value: "04", label: getText(language, "grupos", "groups") },
              { value: "LGPD", label: getText(language, "privacidade", "privacy") },
            ]}
            className="max-w-2xl"
          />
        }
      />


      <section className="relative overflow-visible py-12 lg:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <ScrollReveal>
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Leitura guiada", "Guided reading")}
                </span>
                <h2 className="break-words font-serif text-3xl leading-tight text-foreground [overflow-wrap:anywhere] lg:text-5xl">
                  {getText(language, "Sem letras miúdas escondidas.", "No hidden fine print.")}
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    "A organização é intencional e começa pelo uso do site, separa o servidor Discord, passa pela relação profissional e termina nas regras específicas do livro.",
                    "The organization is intentional and starts with first site usage, separates the Discord server, then covers the professional relationship, and finally the book-specific rules."
                  )}
                </p>
              </ScrollReveal>
                <div
                  data-lenis-prevent=""
                  data-lenis-prevent-wheel=""
                  data-lenis-prevent-vertical=""
                  className="policy-reading-scrollbar mt-8 max-h-[204px] divide-y divide-border/20 overflow-y-auto border-y border-border/20 pr-2"
                >
                  {groups.map((group, index) => (
                    <a
                      key={group.id}
                      href={`#${group.id}`}
                      className={cn(
                        "group grid grid-cols-[48px_1fr] gap-4 py-4 transition-colors",
                        activeGroup === group.id && "text-foreground"
                      )}
                    >
                      <span className={cn(
                        "font-serif text-2xl leading-none text-foreground/18 transition-colors group-hover:text-foreground/35",
                        activeGroup === group.id && "text-foreground/60"
                      )}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className={cn(
                          "block text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground",
                          activeGroup === group.id && "text-foreground"
                        )}>{group.title}</span>
                        <span className="mt-1 block text-xs text-muted-foreground/55">{group.sections.length} {getText(language, "documentos", "documents")}</span>
                      </span>
                    </a>
                  ))}
                </div>
            </aside>

            <div className="space-y-12">
              {groups.map((group, groupIndex) => (
                <ScrollReveal key={group.id} delay={groupIndex * 0.06}>
                  <section id={group.id} className="scroll-mt-28">
                    {group.id === "discord" && (
                      <div className="mb-7 overflow-hidden border border-border/20 bg-foreground/[0.018]">
                        <div className="relative h-[160px] overflow-hidden bg-black sm:h-[220px] lg:h-[260px]">
                          <img
                            src={discordPolicyAssets.banner}
                            alt={getText(language, "Banner do servidor Escritório do Talisson", "Escritório do Talisson server banner")}
                            className="h-full w-full object-cover object-center"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-background/45" />
                        </div>

                        <div className="px-5 pb-6 sm:px-7">
                          <img
                            src={discordPolicyAssets.icon}
                            alt={getText(language, "Ícone do servidor Escritório do Talisson", "Escritório do Talisson server icon")}
                            className="-mt-12 h-24 w-24 rounded-[8px] border-4 border-background bg-background object-cover shadow-[0_18px_55px_rgba(0,0,0,0.35)] sm:-mt-14 sm:h-28 sm:w-28"
                            loading="lazy"
                            decoding="async"
                          />
                          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                            {getText(
                              language,
                              "Esta seção fica separada das políticas gerais porque regula um ambiente próprio, com convivência, automações, canais, segurança, divulgação e moderação do servidor.",
                              "This section is separated from the general policies because it governs its own environment, including conduct, automations, channels, safety, promotion and server moderation."
                            )}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mb-5 flex items-start gap-5 border-b border-border/20 pb-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/30 bg-background/35">
                        <group.icon className="h-5 w-5 text-foreground/65" />
                      </span>
                      <div>
                        <h2 className="font-serif text-2xl leading-tight text-foreground lg:text-3xl">{group.title}</h2>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{group.description}</p>
                      </div>
                    </div>

                    <div className="divide-y divide-border/20 border-y border-border/20">
                      {group.sections.map((section) => {
                        const sectionIndex = policySections.findIndex((item) => item.id === section.id);
                        const sectionPath = `${basePath}/${section.id}`;
                        return (
                          <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-70px" }}
                            transition={{ duration: 0.5, delay: Math.min(sectionIndex * 0.025, 0.2), ease: [0.16, 1, 0.3, 1] }}
                          >
                            <Link to={sectionPath} className="group grid gap-4 py-5 sm:grid-cols-[72px_1fr_auto] sm:items-center">
                              <span className="font-serif text-3xl leading-none text-foreground/14 transition-colors group-hover:text-foreground/28">
                                {String(sectionIndex + 1).padStart(2, "0")}
                              </span>
                              <span>
                                <span className="block font-serif text-xl leading-tight text-foreground">{section.title[lang]}</span>
                                <span className="mt-2 line-clamp-2 block max-w-2xl text-sm leading-relaxed text-muted-foreground">
                                  {professionalPolicySummaries[section.id]?.[lang] ?? section.paragraphs[0][lang]}
                                </span>
                              </span>
                              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80">
                                {getText(language, "Ler", "Read")}
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                              </span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </section>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col gap-6 border-y border-border/20 py-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Clareza antes do acordo", "Clarity before agreement")}
                </span>
                <h2 className="font-serif text-3xl leading-tight text-foreground">
                  {getText(language, "Profissionalismo começa antes do primeiro commit.", "Professionalism starts before the first commit.")}
                </h2>
              </div>
              <FileText className="h-8 w-8 text-foreground/25" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Policies;
