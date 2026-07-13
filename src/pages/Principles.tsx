import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Fingerprint, Layers, Quote, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const Principles = () => {
  const { language } = useTheme();

  const sections = language === "pt" ? [
    {
      title: "Segurança Digital como Responsabilidade",
      short: "Proteção é requisito, não enfeite.",
      paragraphs: [
        "Segurança não é paranoia. É postura profissional diante de um cenário onde vulnerabilidades são exploradas diariamente.",
        "Quem lidera projetos digitais tem a obrigação de proteger dados, contas e infraestrutura. Não como diferencial, mas como requisito mínimo de operação.",
      ],
    },
    {
      title: "Infraestrutura como Parte da Arquitetura",
      short: "Hospedagem também é decisão de produto.",
      paragraphs: [
        "Hospedagem não é detalhe operacional. É uma decisão arquitetural que impacta desempenho, segurança e reputação.",
        "Decisões técnicas mal fundamentadas geram custos invisíveis. Cada escolha de infraestrutura reflete o nível de seriedade do projeto.",
      ],
    },
    {
      title: "Gestão de Comunidades com Estrutura",
      short: "Comunidade viva precisa de cultura e rotina.",
      paragraphs: [
        "Comunidade não é improviso. Requer cultura definida, organização clara e responsabilidade sobre o ambiente criado.",
        "Moderação, estrutura de equipe e crescimento orgânico são pilares que separam comunidades amadoras de projetos sustentáveis.",
      ],
    },
    {
      title: "Responsabilidade Técnica e Ética",
      short: "Conteúdo técnico precisa ter consequência.",
      paragraphs: [
        "Este projeto não incentiva práticas nocivas, não divulga métodos de exploração e não promove atalhos que comprometam a integridade técnica.",
        "O foco é maturidade digital. Cada conteúdo publicado passa por um filtro de responsabilidade antes de ser disponibilizado.",
      ],
    },
    {
      title: "Profundidade acima de Volume",
      short: "Menos publicação por impulso, mais referência útil.",
      paragraphs: [
        "Qualidade acima de quantidade. Cada artigo é desenvolvido com intenção estratégica, não para alimentar métricas.",
        "O objetivo é que cada conteúdo seja uma referência consultável, não um texto descartável.",
      ],
    },
  ] : [
    {
      title: "Digital Security as Responsibility",
      short: "Protection is a requirement, not decoration.",
      paragraphs: [
        "Security is not paranoia. It is a professional posture in a landscape where vulnerabilities are exploited daily.",
        "Those who lead digital projects have the obligation to protect data, accounts, and infrastructure. Not as a differentiator, but as a minimum operational requirement.",
      ],
    },
    {
      title: "Infrastructure as Part of Architecture",
      short: "Hosting is also a product decision.",
      paragraphs: [
        "Hosting is not an operational detail. It is an architectural decision that impacts performance, security, and reputation.",
        "Poorly grounded technical decisions generate invisible costs. Every infrastructure choice reflects the seriousness of the project.",
      ],
    },
    {
      title: "Community Management with Structure",
      short: "A living community needs culture and routine.",
      paragraphs: [
        "Community is not improvisation. It requires defined culture, clear organization, and responsibility for the environment created.",
        "Moderation, team structure, and organic growth are pillars that separate amateur communities from sustainable projects.",
      ],
    },
    {
      title: "Technical and Ethical Responsibility",
      short: "Technical content needs consequence.",
      paragraphs: [
        "This project does not encourage harmful practices, does not disclose exploitation methods, and does not promote shortcuts that compromise technical integrity.",
        "The focus is digital maturity. Every piece of content goes through a responsibility filter before being published.",
      ],
    },
    {
      title: "Depth over Volume",
      short: "Less impulsive publishing, more useful reference.",
      paragraphs: [
        "Quality over quantity. Each article is developed with strategic intent, not to feed metrics.",
        "The goal is for each piece of content to be a consultable reference, not disposable text.",
      ],
    },
  ];

  const finalReflection =
    "O mundo jamais conheceu uma marca tão poderosa quanto a deles. Ele abriu mão do luxo dos palácios, da opulência do trono, acima de todos, da glória, que não precisava de aprovação. Ele escolheu descer. Sua marca não nasceu entre mármores e coroas. Foi construída no chão mais simples dessa terra, na forma mais humilde nasceu. Entre gente comum cresceu, serviu sem exigir aplauso. Foi tratado como o mais vil dos homens, traído, moído, humilhado publicamente por aqueles que não eram dignos sequer de sustentar o seu olhar. Separado do pai, exposto, silenciado pela violência de um mundo pequeno demais para compreendê-lo. A morte mais cruel: a cruz, símbolo de vergonha, transformada em estandarte eterno. E então veio o silêncio, um silêncio pesado, quase definitivo, até que uma voz ecoou através da eternidade. Está consumado, sem marketing, sem estratégia de expansão, sem investimento publicitário. Ainda assim dois mil anos depois, esse nome atravessa culturas, impérios, idiomas e gerações. Sua marca não vende produto. Entrega esperança. Não oferece status. Oferece salvação. Não promete poder terreno. Promete vida eterna. Impérios caíram. Reinos desapareceram. Nomes outrora temidos viraram pó mas esse permanece. Jesus Cristo de Nazaré";

  const finalReflectionParagraphs = finalReflection
    .replace("A morte mais cruel:", "A morte mais cruel,")
    .split(/(?=Foi tratado|E então|Ainda assim|Sua marca|Impérios caíram)/);

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Princípios | Talisson Souza", "Principles | Talisson Souza")}
        description={getText(
          language,
          "Os princípios que fundamentam este projeto. Segurança digital, infraestrutura profissional, gestão de comunidades e responsabilidade técnica.",
          "The principles that ground this project. Digital security, professional infrastructure, community management, and technical responsibility."
        )}
        keywords={["segurança digital", "infraestrutura", "gestão de comunidades", "responsabilidade técnica", "princípios"]}
        canonical={getText(language, "/principios", "/en-us/principles")}
      />

      <PageHero
        compact
        eyebrow={getText(language, "Fundamentos", "Foundations")}
        title={getText(language, "Princípios", "Principles")}
        subtitle={getText(
          language,
          "Uma base de decisão para publicar, construir e orientar tecnologia com responsabilidade. Menos ruído, mais critério.",
          "A decision base for publishing, building and guiding technology responsibly. Less noise, more criteria."
        )}
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: "05", label: getText(language, "eixos", "pillars") },
              { value: "01", label: getText(language, "postura", "posture") },
              { value: "100%", label: getText(language, "responsável", "responsible") },
            ]}
          />
        }
      >
        <IdentityPanel hover={false} className="p-6">
          <div className="mb-8 flex items-center justify-between">
            <Fingerprint className="h-6 w-6 text-foreground/70" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/55">
              {getText(language, "critério", "criteria")}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {getText(
              language,
              "A identidade do site não está só na estética: está no que eu escolho publicar, no que recuso simplificar e no nível de cuidado com cada recomendação.",
              "The site's identity is not only aesthetic: it is in what I choose to publish, what I refuse to oversimplify, and the care behind each recommendation."
            )}
          </p>
        </IdentityPanel>
      </PageHero>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <ScrollReveal>
              <IdentityPanel hover={false} className="sticky top-28 p-7 lg:p-8">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/40">
                  <ShieldCheck className="h-5 w-5 text-foreground/70" />
                </div>
                <h2 className="font-serif text-2xl leading-tight text-foreground">
                  {getText(language, "Não é um conjunto de frases bonitas.", "Not a set of pretty phrases.")}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    "É um filtro operacional. Se algo compromete segurança, clareza ou responsabilidade, não entra como recomendação.",
                    "It is an operational filter. If something compromises security, clarity or responsibility, it does not become a recommendation."
                  )}
                </p>
                <Link
                  to={language === "en" ? "/en-us/articles" : "/artigos"}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <span className="relative">
                    {getText(language, "Ver artigos", "View articles")}
                    <span className="absolute bottom-0 left-0 h-px w-full bg-foreground/20" />
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </IdentityPanel>
            </ScrollReveal>

            <div className="space-y-4">
              {sections.map((section, index) => (
                <ScrollReveal key={section.title} delay={index * 0.06}>
                  <IdentityPanel className="p-6 lg:p-7">
                    <div className="grid gap-6 md:grid-cols-[88px_1fr]">
                      <div className="flex items-start gap-4 md:block">
                        <span className="block font-serif text-4xl leading-none text-foreground/18">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                          className="mt-4 hidden h-px origin-left bg-foreground/12 md:block"
                        />
                      </div>
                      <div>
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <h2 className="font-serif text-xl leading-tight text-foreground lg:text-2xl">
                              {section.title}
                            </h2>
                            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/55">
                              {section.short}
                            </p>
                          </div>
                          <Layers className="mt-1 h-5 w-5 shrink-0 text-foreground/20" />
                        </div>
                        <div className="space-y-3">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </IdentityPanel>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/20 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <IdentityPanel hover={false} className="mx-auto max-w-3xl p-8 text-center">
              <BookOpen className="mx-auto mb-5 h-5 w-5 text-foreground/60" />
              <p className="font-serif text-2xl leading-tight text-foreground">
                {getText(
                  language,
                  "Técnica sem responsabilidade vira risco. Responsabilidade sem técnica vira discurso. Meu trabalho fica no encontro dos dois.",
                  "Technique without responsibility becomes risk. Responsibility without technique becomes discourse. My work lives where both meet."
                )}
              </p>
            </IdentityPanel>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border/20 pb-24 pt-14">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative mx-auto max-w-6xl overflow-hidden border-y border-border/25 py-12 sm:py-14">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.018]"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                  backgroundSize: "52px 52px",
                }}
              />
              <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-foreground/[0.035] blur-3xl" />
              <div className="relative grid gap-10 px-2 sm:px-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
                <div>
                  <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-muted-foreground/60">
                    {getText(language, "Reflexão final", "Final reflection")}
                  </p>
                  <h2 className="max-w-sm font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                    {getText(language, "Uma marca que atravessa gerações.", "A mark that crosses generations.")}
                  </h2>
                  <div className="mt-8 flex items-center gap-4">
                    <span className="h-px w-12 bg-foreground/20" />
                    <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground/65">
                      Monica Rayol
                    </p>
                  </div>
                </div>

                <blockquote className="relative border-l border-foreground/12 pl-6 sm:pl-8">
                  <Quote className="mb-6 h-6 w-6 text-foreground/45" />
                  <div className="space-y-5">
                    {finalReflectionParagraphs.map((paragraph, index) => (
                      <p key={paragraph} className="text-base leading-[1.85] text-foreground/82 sm:text-lg">
                        {index === 0 ? "“" : ""}
                        {paragraph}
                        {index === finalReflectionParagraphs.length - 1 ? "”" : ""}
                      </p>
                    ))}
                  </div>
                </blockquote>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Principles;
