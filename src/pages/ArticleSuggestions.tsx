import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  FileText,
  Lightbulb,
  MessageSquare,
  Route,
  SearchCheck,
  Send,
  ShieldCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel, MotionRail, PageBackdrop } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const FORM_URL = "https://forms.gle/uRrhhtfXFcoNFU1F6";
const ease = [0.16, 1, 0.3, 1] as const;

const suggestionTypes = [
  {
    icon: Lightbulb,
    pt: "Dúvidas que aparecem na prática",
    en: "Questions that appear in practice",
    textPt:
      "Temas que nasceram de um problema real costumam render os melhores artigos, porque partem de uma necessidade concreta.",
    textEn:
      "Topics born from a real problem usually become the best articles, because they start from a concrete need.",
  },
  {
    icon: SearchCheck,
    pt: "Assuntos que merecem profundidade",
    en: "Subjects that deserve depth",
    textPt:
      "Pode ser uma decisão técnica, uma dúvida de carreira, um tema de segurança, arquitetura, mercado ou comunidade.",
    textEn:
      "It can be a technical decision, career question, security topic, architecture, market or community subject.",
  },
  {
    icon: MessageSquare,
    pt: "Problemas que muitas pessoas enfrentam",
    en: "Problems many people face",
    textPt:
      "Quanto mais claro for o contexto da sugestão, maior a chance de ela virar um conteúdo útil para outras pessoas.",
    textEn:
      "The clearer the context behind the suggestion, the more likely it is to become useful content for other people.",
  },
];

const editorialFlow = [
  {
    titlePt: "Recebimento organizado",
    titleEn: "Organized intake",
    textPt:
      "O formulário concentra as sugestões em um único lugar, evitando mensagens perdidas em redes sociais, conversas soltas ou comentários fora de contexto.",
    textEn:
      "The form keeps suggestions in one place, avoiding lost messages across social networks, scattered conversations or comments without context.",
  },
  {
    titlePt: "Leitura editorial",
    titleEn: "Editorial review",
    textPt:
      "Cada tema é avaliado considerando relevância, aderência à linha editorial, utilidade prática e possibilidade de aprofundamento.",
    textEn:
      "Each topic is evaluated considering relevance, editorial fit, practical usefulness and room for deeper analysis.",
  },
  {
    titlePt: "Transformação em pauta",
    titleEn: "Turning it into an agenda",
    textPt:
      "Quando fizer sentido, a sugestão pode se tornar artigo, guia, análise, material informativo ou ponto de partida para uma trilha maior.",
    textEn:
      "When it makes sense, the suggestion may become an article, guide, analysis, informative material or starting point for a larger trail.",
  },
];

const qualityCriteria = [
  {
    labelPt: "Relevância",
    labelEn: "Relevance",
    textPt: "O tema precisa responder uma dúvida real ou ajudar alguém a tomar uma decisão melhor.",
    textEn: "The topic needs to answer a real question or help someone make a better decision.",
  },
  {
    labelPt: "Pertinência",
    labelEn: "Fit",
    textPt:
      "A sugestão deve conversar com tecnologia, carreira, comunidades, segurança, negócios digitais ou desenvolvimento profissional.",
    textEn:
      "The suggestion should connect with technology, career, communities, security, digital business or professional growth.",
  },
  {
    labelPt: "Aplicabilidade",
    labelEn: "Usefulness",
    textPt: "O conteúdo precisa sair do campo abstrato e entregar orientação que possa ser usada na prática.",
    textEn: "The content needs to leave the abstract field and deliver guidance that can be used in practice.",
  },
  {
    labelPt: "Clareza",
    labelEn: "Clarity",
    textPt: "Quanto melhor a sugestão explicar o problema, melhor será a análise editorial do tema.",
    textEn: "The better the suggestion explains the problem, the better the editorial review will be.",
  },
];

const sendGuidelines = [
  {
    pt: "Explique o problema ou dúvida com suas próprias palavras.",
    en: "Explain the problem or question in your own words.",
  },
  {
    pt: "Conte onde esse assunto aparece na prática.",
    en: "Tell where this subject appears in practice.",
  },
  {
    pt: "Evite enviar informações sigilosas, dados pessoais sensíveis ou detalhes internos de empresas.",
    en: "Avoid sending confidential information, sensitive personal data or internal company details.",
  },
  {
    pt: "Se o tema tiver relação com outro artigo do site, mencione essa conexão no formulário.",
    en: "If the topic relates to another article on the site, mention that connection in the form.",
  },
];

const ArticleSuggestions = () => {
  const { language } = useTheme();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: getText(language, "Sugestões de Artigos", "Article Suggestions"),
    description: getText(
      language,
      "Canal editorial para envio organizado de sugestões de temas para novos artigos, guias e materiais informativos de Talisson Souza.",
      "Editorial channel for organized topic suggestions for new articles, guides and informative materials by Talisson Souza."
    ),
    url:
      language === "en"
        ? "https://www.talissonsouza.com.br/en-us/article-suggestions"
        : "https://www.talissonsouza.com.br/sugestoes-artigos",
    publisher: {
      "@type": "Person",
      name: "Talisson Souza",
    },
  };

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Sugestões de Artigos | Talisson Souza", "Article Suggestions | Talisson Souza")}
        description={getText(
          language,
          "Envie sugestões de temas para artigos, guias e análises que possam ajudar a comunidade com clareza, profundidade e aplicação prática.",
          "Send topic suggestions for articles, guides and analyses that can help the community with clarity, depth and practical value."
        )}
        canonical={language === "en" ? "/en-us/article-suggestions" : "/sugestoes-artigos"}
        image="/og/artigos.png"
        keywords={
          language === "pt"
            ? ["sugestões de artigos", "conteúdo técnico", "Talisson Souza", "guias de programação", "carreira em tecnologia"]
            : ["article suggestions", "technical content", "Talisson Souza", "programming guides", "tech career"]
        }
        jsonLd={jsonLd}
      />

      <main className="relative overflow-hidden">
        <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
          <PageBackdrop />
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center xl:gap-16">
              <div
                className="min-w-0 w-full lg:max-w-4xl"
                style={{ width: "min(100%, calc(100vw - 3rem))" }}
              >
                <span className="mb-6 inline-block text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/70">
                  {getText(language, "Leitura em construção", "Reading in progress")}
                </span>
                <h1 className="max-w-full break-words font-serif text-[clamp(2.75rem,7.2vw,5.35rem)] font-semibold uppercase leading-[0.92] tracking-normal text-foreground [overflow-wrap:anywhere]">
                  {getText(language, "Sugestões de artigos", "Article suggestions")}
                </h1>
                <p className="mt-7 max-w-full text-base leading-relaxed text-muted-foreground sm:max-w-2xl sm:text-lg">
                  {getText(
                    language,
                    "Este espaço existe para receber temas que merecem virar conteúdo com calma, critério e utilidade real. Se uma dúvida sua pode ajudar outras pessoas, ela merece ser organizada do jeito certo.",
                    "This space exists to receive topics that deserve to become content with care, criteria and real usefulness. If your question can help other people, it deserves to be organized the right way."
                  )}
                </p>

                <div className="mt-8">
                  <MotionRail
                    className="w-full max-w-full sm:max-w-2xl"
                    items={[
                      { value: "01", label: getText(language, "envio claro", "clear submission") },
                      { value: "02", label: getText(language, "análise editorial", "editorial review") },
                      { value: "03", label: getText(language, "conteúdo aplicável", "useful content") },
                    ]}
                  />
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/20 bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground/90 sm:w-auto"
                  >
                    {getText(language, "Enviar sugestão", "Send suggestion")}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={language === "en" ? "/en-us/articles" : "/artigos"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/35 bg-background/35 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10 sm:w-auto"
                  >
                    {getText(language, "Ver artigos", "View articles")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.12, ease }}
                className="min-w-0 w-full lg:max-w-none"
                style={{ width: "min(100%, calc(100vw - 3rem))" }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-border/25 bg-card/35 p-6 shadow-[0_24px_80px_-56px_hsl(var(--foreground)/0.35)] backdrop-blur-sm lg:p-8">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.018]"
                    style={{
                      backgroundImage:
                        "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                      backgroundSize: "38px 38px",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-foreground/[0.04] to-transparent opacity-80" />
                  <div className="pointer-events-none absolute left-0 top-0 h-14 w-14 border-l border-t border-foreground/10" />
                  <div className="pointer-events-none absolute bottom-0 right-0 h-14 w-14 border-b border-r border-foreground/10" />

                  <div className="relative z-10">
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
                          {getText(language, "formulário oficial", "official form")}
                        </span>
                        <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground">
                          {getText(language, "Uma pauta boa começa com contexto.", "A good agenda starts with context.")}
                        </h2>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border/30 bg-foreground text-background">
                        <Send className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {editorialFlow.map((item, index) => (
                        <div key={item.titlePt} className="rounded-2xl border border-border/20 bg-background/30 p-4">
                          <div className="flex items-center gap-4">
                            <span className="font-serif text-2xl text-foreground/35">{String(index + 1).padStart(2, "0")}</span>
                            <h3 className="text-sm font-semibold text-foreground">
                              {getText(language, item.titlePt, item.titleEn)}
                            </h3>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {getText(language, item.textPt, item.textEn)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/20 py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "por que existe", "why it exists")}
                </span>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                  {getText(language, "Conteúdo melhor nasce de dúvidas reais.", "Better content starts from real questions.")}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    "A proposta não é acumular pedidos. É entender quais temas estão travando estudantes, profissionais, comunidades e empresas, para transformar essas dúvidas em publicações com clareza técnica e leitura útil.",
                    "The proposal is not to accumulate requests. It is to understand which topics are blocking students, professionals, communities and companies, then turn those questions into publications with technical clarity and useful reading."
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {suggestionTypes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.pt} delay={index * 0.06}>
                    <IdentityPanel className="h-full p-6">
                      <div className="mb-8 flex items-center justify-between">
                        <Icon className="h-5 w-5 text-foreground/70" />
                        <span className="font-serif text-2xl text-foreground/25">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{getText(language, item.pt, item.en)}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {getText(language, item.textPt, item.textEn)}
                      </p>
                    </IdentityPanel>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <ScrollReveal>
                <div className="lg:sticky lg:top-28">
                  <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                    {getText(language, "critério editorial", "editorial criteria")}
                  </span>
                  <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                    {getText(language, "Nem todo tema vira artigo. E isso é parte do cuidado.", "Not every topic becomes an article. That is part of the care.")}
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {getText(
                      language,
                      "Cada sugestão passa por uma leitura criteriosa. O objetivo é preservar a linha editorial do site, evitar conteúdo raso e manter publicações que continuem fazendo sentido depois da primeira leitura.",
                      "Each suggestion goes through careful review. The goal is to preserve the site's editorial line, avoid shallow content and keep publications that still make sense after the first read."
                    )}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {qualityCriteria.map((item, index) => (
                  <ScrollReveal key={item.labelPt} delay={index * 0.05}>
                    <IdentityPanel className="h-full p-6">
                      <div className="mb-7 flex items-center justify-between border-b border-border/20 pb-5">
                        <ClipboardCheck className="h-5 w-5 text-foreground/70" />
                        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/50">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {getText(language, item.labelPt, item.labelEn)}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {getText(language, item.textPt, item.textEn)}
                      </p>
                    </IdentityPanel>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/20 py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <ScrollReveal>
                <IdentityPanel hover={false} className="h-full p-7 lg:p-9">
                  <div className="mb-8 flex items-center justify-between">
                    <FileText className="h-5 w-5 text-foreground/70" />
                    <span className="rounded-full border border-border/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/55">
                      {getText(language, "linha editorial", "editorial line")}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl leading-tight text-foreground">
                    {getText(language, "O foco é valor real, não volume.", "The focus is real value, not volume.")}
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {getText(
                      language,
                      "As sugestões ajudam a aproximar o conteúdo publicado das demandas reais do público, sem transformar o site em uma lista de respostas rápidas. A prioridade continua sendo clareza, profundidade e responsabilidade.",
                      "Suggestions help bring published content closer to real audience demands, without turning the site into a list of quick answers. The priority remains clarity, depth and responsibility."
                    )}
                  </p>
                </IdentityPanel>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <IdentityPanel hover={false} className="h-full p-7 lg:p-9">
                  <div className="mb-7 flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-foreground/70" />
                    <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
                      {getText(language, "antes de enviar", "before sending")}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {sendGuidelines.map((item, index) => (
                      <div key={item.pt} className="flex gap-4 border-b border-border/15 pb-4 last:border-b-0 last:pb-0">
                        <span className="font-serif text-xl text-foreground/35">{String(index + 1).padStart(2, "0")}</span>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {getText(language, item.pt, item.en)}
                        </p>
                      </div>
                    ))}
                  </div>
                </IdentityPanel>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <ScrollReveal>
              <IdentityPanel hover={false} className="mx-auto max-w-4xl p-8 text-center lg:p-12">
                <Route className="mx-auto h-6 w-6 text-foreground/70" />
                <h2 className="mx-auto mt-6 max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                  {getText(language, "Se a sua dúvida pode virar direção para outras pessoas, envie.", "If your question can become direction for other people, send it.")}
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {getText(
                    language,
                    "O formulário é o caminho adequado para encaminhar contribuições com organização. As sugestões aprovadas poderão orientar artigos, guias práticos, análises técnicas ou materiais informativos publicados nos canais oficiais.",
                    "The form is the proper path to send contributions with organization. Approved suggestions may guide articles, practical guides, technical analyses or informative materials published through official channels."
                  )}
                </p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground/90"
                >
                  {getText(language, "Mandar sugestão pelo formulário", "Send suggestion through the form")}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </IdentityPanel>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ArticleSuggestions;
