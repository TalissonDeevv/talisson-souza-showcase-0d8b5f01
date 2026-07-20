import { motion } from "framer-motion";
import {
  ArrowRight,
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
import { MotionRail, PageBackdrop } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdUM_KRTJfGm8zw7Z4VWBA0845PBQZomFypiJhNOEaWd5ORGw/viewform?embedded=true";
const FORM_SECTION_ID = "formulario-sugestoes";
const ease = [0.16, 1, 0.3, 1] as const;

const topicSignals = [
  {
    icon: Lightbulb,
    pt: "Uma dúvida que aparece várias vezes",
    en: "A question that keeps appearing",
    textPt:
      "Alguns temas não nascem de planejamento editorial. Nascem porque muita gente trava no mesmo ponto e ninguém explica com calma.",
    textEn:
      "Some topics are not born from editorial planning. They appear because many people get stuck at the same point and nobody explains it calmly.",
  },
  {
    icon: SearchCheck,
    pt: "Um assunto que merece profundidade",
    en: "A subject that deserves depth",
    textPt:
      "Pode ser uma decisão técnica, uma dúvida de carreira, um tema de arquitetura, comunidade, segurança ou negócio digital.",
    textEn:
      "It can be a technical decision, a career question, architecture, community, security or digital business subject.",
  },
  {
    icon: MessageSquare,
    pt: "Um problema que ajudaria outras pessoas",
    en: "A problem that would help other people",
    textPt:
      "Quando uma sugestão vem com contexto, ela deixa de ser apenas um pedido e começa a virar uma pauta possível.",
    textEn:
      "When a suggestion comes with context, it stops being only a request and starts becoming a possible editorial agenda.",
  },
];

const editorialFlow = [
  {
    titlePt: "Recebo a sugestão em um lugar organizado",
    titleEn: "I receive the suggestion in one organized place",
    textPt:
      "O formulário evita que boas ideias se percam em mensagens soltas, comentários antigos ou conversas espalhadas por redes sociais.",
    textEn:
      "The form prevents good ideas from getting lost in scattered messages, old comments or conversations spread across social networks.",
  },
  {
    titlePt: "Leio com critério editorial",
    titleEn: "I read it with editorial criteria",
    textPt:
      "Nem toda sugestão precisa virar artigo. Algumas viram referência para uma análise futura, outras ajudam a melhorar uma trilha já existente.",
    textEn:
      "Not every suggestion needs to become an article. Some become references for future analysis, others help improve an existing trail.",
  },
  {
    titlePt: "Transformo apenas quando existe valor real",
    titleEn: "I only transform it when there is real value",
    textPt:
      "A prioridade é publicar algo útil, claro e aplicável. Volume sem profundidade não ajuda quem está tentando aprender de verdade.",
    textEn:
      "The priority is to publish something useful, clear and practical. Volume without depth does not help people who are truly trying to learn.",
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
      "A sugestão precisa conversar com tecnologia, carreira, comunidades, segurança, negócios digitais ou desenvolvimento profissional.",
    textEn:
      "The suggestion needs to connect with technology, career, communities, security, digital business or professional growth.",
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
    textPt: "Quanto melhor a sugestão explicar o problema, melhor será a leitura editorial do tema.",
    textEn: "The better the suggestion explains the problem, the better the editorial review will be.",
  },
];

const sendGuidelines = [
  {
    pt: "Explique o problema ou a dúvida com suas próprias palavras.",
    en: "Explain the problem or question in your own words.",
  },
  {
    pt: "Mostre onde esse assunto aparece na prática.",
    en: "Show where this subject appears in practice.",
  },
  {
    pt: "Evite enviar informações sigilosas, dados pessoais sensíveis ou detalhes internos de empresas.",
    en: "Avoid sending confidential information, sensitive personal data or internal company details.",
  },
  {
    pt: "Se o tema conversa com outro artigo do site, mencione essa conexão no formulário.",
    en: "If the topic connects with another article on the site, mention that connection in the form.",
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
            <div className="grid min-w-0 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center xl:gap-16">
              <div className="min-w-0 w-full lg:max-w-4xl" style={{ width: "min(100%, calc(100vw - 3rem))" }}>
                <motion.span
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease }}
                  className="mb-6 inline-block text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/70"
                >
                  {getText(language, "leitura em construção", "reading in progress")}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.05, ease }}
                  className="max-w-full break-words font-serif text-[clamp(2.75rem,7.2vw,5.35rem)] font-semibold uppercase leading-[0.92] tracking-normal text-foreground [overflow-wrap:anywhere]"
                >
                  {getText(language, "Sugestões de artigos", "Article suggestions")}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.12, ease }}
                  className="mt-7 max-w-full text-base leading-relaxed text-muted-foreground sm:max-w-2xl sm:text-lg"
                >
                  {getText(
                    language,
                    "Este espaço existe para receber temas que merecem virar conteúdo com calma, critério e utilidade real. Se uma dúvida sua pode ajudar outras pessoas, ela merece ser organizada do jeito certo.",
                    "This space exists to receive topics that deserve to become content with care, criteria and real usefulness. If your question can help other people, it deserves to be organized the right way."
                  )}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.18, ease }}
                  className="mt-8"
                >
                  <MotionRail
                    className="w-full max-w-full sm:max-w-2xl"
                    items={[
                      { value: "01", label: getText(language, "envio claro", "clear submission") },
                      { value: "02", label: getText(language, "leitura editorial", "editorial review") },
                      { value: "03", label: getText(language, "conteúdo aplicável", "useful content") },
                    ]}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.24, ease }}
                  className="mt-9 flex flex-col gap-3 sm:flex-row"
                >
                  <a
                    href={`#${FORM_SECTION_ID}`}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/20 bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground/90 sm:w-auto"
                  >
                    {getText(language, "Enviar sugestão", "Send suggestion")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href={language === "en" ? "/en-us/articles" : "/artigos"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/35 bg-background/35 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10 sm:w-auto"
                  >
                    {getText(language, "Ver artigos", "View articles")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.14, ease }}
                className="min-w-0 w-full lg:max-w-none"
                style={{ width: "min(100%, calc(100vw - 3rem))" }}
              >
                <div className="relative overflow-hidden border-y border-border/25 py-8 sm:px-8 lg:ml-auto lg:max-w-[560px] lg:px-0 lg:py-10">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,hsl(var(--foreground)/0.045),transparent_64%)] opacity-70" />
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/35 bg-background/45 text-foreground/75 shadow-[0_0_34px_hsl(var(--foreground)/0.08)]">
                        <Send className="h-4 w-4" />
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
                        {getText(language, "mensagem editorial", "editorial note")}
                      </span>
                    </div>
                    <h2 className="max-w-[12ch] font-serif text-3xl leading-tight text-foreground sm:max-w-none lg:text-4xl">
                      {getText(language, "Uma pauta boa começa com contexto.", "A good agenda starts with context.")}
                    </h2>
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {getText(
                        language,
                        "Não preciso apenas de um tema solto. Preciso entender qual dúvida existe por trás dele, onde ela aparece e por que valeria a pena transformar isso em leitura pública.",
                        "I do not only need a loose topic. I need to understand what question exists behind it, where it appears and why it would be worth turning into public reading."
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/20 py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <ScrollReveal>
              <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                    {getText(language, "por que existe", "why it exists")}
                  </span>
                  <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                    {getText(language, "Conteúdo melhor nasce de dúvida real.", "Better content starts from real questions.")}
                  </h2>
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    "A proposta não é acumular pedidos. É entender quais assuntos estão travando estudantes, profissionais, comunidades e empresas, para transformar essas dúvidas em publicações com clareza técnica e leitura útil.",
                    "The proposal is not to accumulate requests. It is to understand which subjects are blocking students, professionals, communities and companies, then turn those questions into publications with technical clarity and useful reading."
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-14 divide-y divide-border/20 border-y border-border/20">
              {topicSignals.map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.pt} delay={index * 0.05}>
                    <div className="grid gap-5 py-8 md:grid-cols-[80px_0.75fr_1.25fr] md:items-start">
                      <div className="flex items-center gap-4 text-foreground/45">
                        <span className="font-serif text-3xl">{String(index + 1).padStart(2, "0")}</span>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="max-w-sm text-xl font-semibold leading-tight text-foreground">
                        {getText(language, item.pt, item.en)}
                      </h3>
                      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {getText(language, item.textPt, item.textEn)}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <ScrollReveal>
                <div className="lg:sticky lg:top-28">
                  <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                    {getText(language, "como acontece", "how it happens")}
                  </span>
                  <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                    {getText(language, "A sugestão entra como mensagem. Se fizer sentido, vira pauta.", "The suggestion starts as a message. If it makes sense, it becomes an agenda.")}
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {getText(
                      language,
                      "O formulário existe para dar ordem ao processo. Não é promessa de publicação automática. É um jeito melhor de ouvir, filtrar e construir conteúdo com mais responsabilidade.",
                      "The form exists to bring order to the process. It is not a promise of automatic publication. It is a better way to listen, filter and build content with more responsibility."
                    )}
                  </p>
                </div>
              </ScrollReveal>

              <div className="relative border-l border-border/25 pl-7 md:pl-10">
                {editorialFlow.map((item, index) => (
                  <ScrollReveal key={item.titlePt} delay={index * 0.06}>
                    <div className="relative pb-10 last:pb-0">
                      <span className="absolute -left-[2.45rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border/30 bg-background font-serif text-sm text-foreground/60 md:-left-[3.05rem]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="max-w-2xl text-2xl font-semibold leading-tight text-foreground">
                        {getText(language, item.titlePt, item.titleEn)}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {getText(language, item.textPt, item.textEn)}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/20 py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-4xl text-center">
                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "critério editorial", "editorial criteria")}
                </span>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                  {getText(language, "Nem todo tema vira artigo. E isso é parte do cuidado.", "Not every topic becomes an article. That is part of the care.")}
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {getText(
                    language,
                    "A linha editorial precisa continuar limpa. Um bom conteúdo não nasce só porque alguém pediu. Ele nasce quando existe relevância, contexto e possibilidade de entregar algo realmente útil.",
                    "The editorial line needs to stay clean. Good content is not born only because someone asked. It appears when there is relevance, context and a chance to deliver something truly useful."
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {qualityCriteria.map((item, index) => (
                <ScrollReveal key={item.labelPt} delay={index * 0.04}>
                  <div className="border-t border-border/25 pt-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {getText(language, item.labelPt, item.labelEn)}
                      </h3>
                      <span className="font-serif text-2xl text-foreground/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {getText(language, item.textPt, item.textEn)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-start">
              <ScrollReveal>
                <div className="relative overflow-hidden border-y border-border/25 py-9 sm:px-8 lg:px-0 lg:py-12">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,hsl(var(--foreground)/0.055),transparent_34%)]" />
                  <div className="relative z-10 grid gap-7 md:grid-cols-[110px_1fr] md:items-start">
                    <div className="flex items-center gap-3 text-muted-foreground md:block">
                      <FileText className="h-5 w-5 text-foreground/70" />
                      <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55 md:mt-5 md:block">
                        {getText(language, "critério", "criteria")}
                      </span>
                    </div>
                    <div className="max-w-3xl">
                      <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                        {getText(language, "O foco é valor real, não volume.", "The focus is real value, not volume.")}
                      </h2>
                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {getText(
                          language,
                          "As sugestões ajudam a aproximar o conteúdo publicado das demandas reais do público, sem transformar o site em uma lista de respostas rápidas. A prioridade continua sendo clareza, profundidade e responsabilidade.",
                          "Suggestions help bring published content closer to real audience demands, without turning the site into a list of quick answers. The priority remains clarity, depth and responsibility."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <div className="lg:pt-10">
                  <div className="mb-7 flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-foreground/70" />
                    <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
                      {getText(language, "antes de enviar", "before sending")}
                    </span>
                  </div>
                  <div className="space-y-5">
                    {sendGuidelines.map((item, index) => (
                      <div key={item.pt} className="flex gap-4 border-b border-border/15 pb-5 last:border-b-0 last:pb-0">
                        <span className="font-serif text-xl text-foreground/35">{String(index + 1).padStart(2, "0")}</span>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {getText(language, item.pt, item.en)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id={FORM_SECTION_ID} className="scroll-mt-24 border-t border-border/20 py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <ScrollReveal>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <Route className="mb-6 h-6 w-6 text-foreground/70" />
                  <h2 className="max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                    {getText(language, "Agora você pode enviar por aqui.", "Now you can submit it here.")}
                  </h2>
                </div>
                <div>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {getText(
                      language,
                      "O formulário continua sendo analisado com o mesmo critério editorial, mas agora a pessoa não precisa sair do site para contribuir. Preencha com calma, descreva o contexto e evite qualquer informação sigilosa.",
                      "The form is still reviewed with the same editorial criteria, but now people do not need to leave the site to contribute. Fill it in calmly, describe the context and avoid any confidential information."
                    )}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="mt-12 overflow-hidden rounded-[28px] border border-border/25 bg-background/70 shadow-[0_28px_90px_hsl(var(--background)/0.55)] backdrop-blur">
                <div className="flex flex-col gap-4 border-b border-border/20 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/60">
                      {getText(language, "formulário oficial", "official form")}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {getText(language, "Sugestões de Artigos - Talisson Souza", "Article Suggestions - Talisson Souza")}
                    </h3>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full border border-border/30 px-4 py-2 text-xs font-medium text-muted-foreground">
                    {getText(language, "resposta pelo site", "on-site response")}
                  </span>
                </div>
                <div className="relative bg-[#f1f3f4]">
                  <iframe
                    src={FORM_EMBED_URL}
                    title={getText(
                      language,
                      "Formulário de sugestões de artigos de Talisson Souza",
                      "Talisson Souza article suggestions form"
                    )}
                    className="block h-[1280px] w-full border-0 bg-[#f1f3f4] sm:h-[1240px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                    {getText(language, "Carregando formulário...", "Loading form...")}
                  </iframe>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ArticleSuggestions;
