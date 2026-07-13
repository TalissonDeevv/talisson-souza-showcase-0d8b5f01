import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import {
  ArrowRight,
  Eye,
  FileCheck,
  FolderLock,
  Lock,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import organizingImage from "@/assets/organizing-projects.png";
import signatureProjetos from "@/assets/signature-projetos.png";
import ClientPortalDialog from "@/components/projects/ClientPortalDialog";

const premiumEase = [0.16, 1, 0.3, 1] as const;

type ReviewStep = {
  label: string;
  title: string;
  description: string;
};

type AccessOption = {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  path?: string;
  onClick?: () => void;
};

const Projects = () => {
  const { language } = useTheme();
  const [portalOpen, setPortalOpen] = useState(false);

  const contactPath = language === "en" ? "/en-us/contact" : "/contato";
  const servicesPath = language === "en" ? "/en-us/services" : "/servicos";

  const reviewSteps: ReviewStep[] = [
    {
      label: "01",
      title: getText(language, "Triagem", "Screening"),
      description: getText(
        language,
        "Separo o que pode ser mostrado sem expor bastidores, dados sensíveis ou operação do cliente.",
        "I separate what can be shown without exposing backstage context, sensitive data or client operations."
      ),
    },
    {
      label: "02",
      title: getText(language, "Permissão", "Permission"),
      description: getText(
        language,
        "Nenhum case entra como vitrine pública antes da autorização formal de quem confiou o projeto.",
        "No case becomes a public showcase before formal authorization from the client who trusted the project."
      ),
    },
    {
      label: "03",
      title: getText(language, "Contexto", "Context"),
      description: getText(
        language,
        "Quando aprovado, o projeto aparece com problema, decisões técnicas, stack e resultado real.",
        "Once approved, the project appears with the problem, technical decisions, stack and real outcome."
      ),
    },
  ];

  const accessOptions: AccessOption[] = [
    {
      icon: MessageSquare,
      title: getText(language, "Conversa guiada", "Guided conversation"),
      description: getText(
        language,
        "Para empresas avaliando uma parceria, apresento projetos e decisões técnicas em contexto privado.",
        "For companies evaluating a partnership, I present projects and technical decisions in a private context."
      ),
      action: getText(language, "Solicitar conversa", "Request conversation"),
      path: contactPath,
    },
    {
      icon: ShieldCheck,
      title: getText(language, "Autorização do cliente", "Client authorization"),
      description: getText(
        language,
        "Clientes podem liberar imagens, métricas e narrativa pelo portal, com controle sobre o que será publicado.",
        "Clients can release images, metrics and narrative through the portal, controlling what will be published."
      ),
      action: getText(language, "Abrir portal", "Open portal"),
      onClick: () => setPortalOpen(true),
    },
    {
      icon: FileCheck,
      title: getText(language, "Escopo antes do case", "Scope before the case"),
      description: getText(
        language,
        "Se a ideia ainda está tomando forma, veja primeiro quais tipos de solução fazem sentido para o seu momento.",
        "If the idea is still taking shape, first review which solution types make sense for your moment."
      ),
      action: getText(language, "Ver servicos", "View services"),
      path: servicesPath,
    },
  ];

  const dossierItems = [
    {
      title: getText(language, "Problema", "Problem"),
      description: getText(language, "O motivo real por tras da entrega.", "The real reason behind the delivery."),
    },
    {
      title: getText(language, "Decisões", "Decisions"),
      description: getText(language, "Arquitetura, trade-offs e escolhas de produto.", "Architecture, trade-offs and product choices."),
    },
    {
      title: getText(language, "Stack", "Stack"),
      description: getText(language, "Tecnologias usadas com critério, não como enfeite.", "Technologies used with intent, not decoration."),
    },
    {
      title: getText(language, "Resultado", "Outcome"),
      description: getText(language, "Impacto, aprendizado e próximos passos.", "Impact, learning and next steps."),
    },
  ];

  const faqs = [
    {
      q: getText(language, "Por que os projetos não aparecem todos abertos?", "Why are the projects not all public?"),
      a: getText(
        language,
        "Porque boa parte do que desenvolvo envolve operações privadas, áreas internas e informações de clientes. Prefiro mostrar menos e preservar melhor.",
        "Because much of what I build involves private operations, internal areas and client information. I prefer showing less and preserving trust better."
      ),
    },
    {
      q: getText(language, "Ainda consigo conhecer trabalhos reais?", "Can I still review real work?"),
      a: getText(
        language,
        "Sim. Em uma conversa, consigo apresentar raciocínio técnico, exemplos permitidos e bastidores que não dependem de exposição pública.",
        "Yes. In a conversation, I can present technical reasoning, approved examples and backstage context that does not depend on public exposure."
      ),
    },
    {
      q: getText(language, "Como um cliente libera um case?", "How does a client approve a case?"),
      a: getText(
        language,
        "Pelo portal, o cliente revisa o que pode ser publicado e define limites para texto, imagens, métricas e créditos.",
        "Through the portal, the client reviews what can be published and defines limits for copy, images, metrics and credits."
      ),
    },
  ];

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Portfólio em Curadoria | Talisson Souza", "Curated Portfolio | Talisson Souza")}
        description={getText(
          language,
          "Portfólio em curadoria com respeito à confidencialidade dos clientes. Entenda como conhecer cases, autorizar publicações e discutir projetos em contexto.",
          "Curated portfolio with respect for client confidentiality. Learn how to review cases, authorize publications and discuss projects in context."
        )}
        canonical={language === "en" ? "/en-us/projects" : "/projetos"}
        noindex
      />

      <section className="relative isolate overflow-hidden pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--foreground)/0.018)_1px,transparent_1px),linear-gradient(0deg,hsl(var(--foreground)/0.018)_1px,transparent_1px)] bg-[size:58px_58px]" />
          <div className="absolute left-1/2 top-1/3 hidden h-[660px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-radial from-foreground/[0.04] via-transparent to-transparent blur-3xl lg:block" />
          <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(380px,0.82fr)] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="relative"
            >
              <img
                src={signatureProjetos}
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="async"
                className="mb-5 h-10 w-auto max-w-[220px] select-none object-contain object-left opacity-80 mix-blend-screen sm:h-12 lg:h-14"
              />

              <div className="mb-5 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-card/25 px-3 py-1.5 backdrop-blur-sm">
                  <Lock className="h-3 w-3" />
                  {getText(language, "Curadoria ativa", "Active curation")}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-card/25 px-3 py-1.5 backdrop-blur-sm">
                  <FolderLock className="h-3 w-3" />
                  {getText(language, "Cases privados", "Private cases")}
                </span>
              </div>

              <h1 className="max-w-3xl font-serif text-[clamp(2.55rem,5.05vw,4.25rem)] font-semibold uppercase leading-[0.98] text-foreground">
                {getText(language, "Portfólio com curadoria.", "Curated portfolio.")}
              </h1>

              <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  {getText(
                    language,
                    "Esta página não é uma vitrine aberta por escolha. Meus melhores projetos envolvem operações reais, áreas internas e informações que precisam continuar protegidas.",
                    "This page is not an open showcase by choice. My strongest projects involve real operations, internal areas and information that must remain protected."
                  )}
                </p>
                <p className="text-muted-foreground/82">
                  {getText(
                    language,
                    "O portfólio está sendo organizado como uma sala de contexto: cada case publicado precisa ter permissão, narrativa clara e respeito ao que o cliente confiou.",
                    "The portfolio is being organized as a room of context: every published case needs permission, clear narrative and respect for what the client trusted me with."
                  )}
                </p>
              </div>

              <div className="mt-7 grid max-w-xl grid-cols-3 border-y border-border/25 py-4">
                {[
                  getText(language, "Privacidade", "Privacy"),
                  getText(language, "Autorização", "Authorization"),
                  getText(language, "Contexto", "Context"),
                ].map((item, index) => (
                  <div key={item} className="pr-3">
                    <span className="block font-serif text-3xl leading-none text-foreground/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to={contactPath}
                  className="group inline-flex items-center gap-3 rounded-full border border-border/35 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/25 hover:bg-card/25"
                >
                  {getText(language, "Ver em uma conversa", "See in a conversation")}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <button
                  type="button"
                  onClick={() => setPortalOpen(true)}
                  className="group inline-flex items-center gap-3 rounded-full border border-border/35 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/25 hover:bg-card/25"
                >
                  <ShieldCheck className="h-4 w-4" />
                  {getText(language, "Portal do cliente", "Client portal")}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.12, ease: premiumEase }}
              className="relative lg:justify-self-end"
            >
              <div className="relative max-w-[520px] overflow-hidden rounded-lg border border-border/25 bg-card/25 p-4 shadow-[0_24px_72px_hsl(0_0%_0%/0.24)] backdrop-blur-sm sm:p-5">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--foreground)/0.025)_1px,transparent_1px),linear-gradient(0deg,hsl(var(--foreground)/0.025)_1px,transparent_1px)] bg-[size:44px_44px]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/[0.05] via-transparent to-background/80" />
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

                <div className="relative">
                  <div className="mb-4 flex items-center justify-between border-b border-border/20 pb-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70">
                        {getText(language, "Sala de cases", "Case room")}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {getText(language, "Acesso orientado", "Guided access")}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/30 bg-background/45 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      {getText(language, "Privado", "Private")}
                    </span>
                  </div>

                  <div className="relative overflow-hidden rounded-md border border-border/20 bg-background/45 px-5 py-4 sm:px-7 sm:py-5">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-foreground/[0.08] to-transparent blur-2xl" />
                    <div className="relative mx-auto max-w-md">
                      <img
                        src={organizingImage}
                        alt={getText(language, "Projetos em curadoria", "Projects in curation")}
                        loading="lazy"
                        decoding="async"
                        className="relative mx-auto w-full max-w-[360px] opacity-85"
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {reviewSteps.map((step, index) => (
                        <motion.div
                          key={step.label}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.55, delay: 0.22 + index * 0.08, ease: premiumEase }}
                          className="rounded-md border border-border/20 bg-background/38 p-3"
                        >
                          <span className="mb-2 block font-serif text-2xl leading-none text-foreground/24">{step.label}</span>
                          <span className="block">
                            <span className="block text-sm font-medium text-foreground">{step.title}</span>
                            <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground/75">
                              {step.description}
                            </span>
                          </span>
                        </motion.div>
                      ))}
                  </div>

                  <p className="mt-4 border-t border-border/20 pt-4 text-xs leading-relaxed text-muted-foreground/72">
                    {getText(
                      language,
                      "A curadoria organiza o que pode ser publicado sem transformar confiança em exposição desnecessária.",
                      "Curation organizes what can be published without turning trust into unnecessary exposure."
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        </div>

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto mb-10 grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-muted-foreground/70">
                <Sparkles className="h-3 w-3" />
                {getText(language, "Sem labirinto", "No maze")}
              </span>
              <h2 className="max-w-2xl font-serif text-4xl uppercase leading-[0.96] text-foreground lg:text-6xl">
                {getText(language, "Três formas de acessar.", "Three ways to access.")}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:justify-self-end">
              {getText(
                language,
                "A página continua reservada, mas o caminho ficou claro: conversar, autorizar ou entender primeiro qual tipo de entrega faz sentido.",
                "The page remains reserved, but the path is clear: talk, authorize or first understand which kind of delivery makes sense."
              )}
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
            {accessOptions.map((option, index) => {
              const Icon = option.icon;
              const content = (
                <div className="group relative h-full overflow-hidden rounded-lg border border-border/20 bg-card/25 p-6 text-left backdrop-blur-sm transition-colors duration-300 hover:border-foreground/20">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative mb-7 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border/30 bg-background/45">
                      <Icon className="h-5 w-5 text-foreground/70" />
                    </div>
                    <span className="font-serif text-4xl leading-none text-foreground/[0.12]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative font-serif text-2xl leading-tight text-foreground">{option.title}</h3>
                  <p className="relative mt-4 min-h-[96px] text-sm leading-relaxed text-muted-foreground">
                    {option.description}
                  </p>
                  <div className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="relative">
                      {option.action}
                      <span className="absolute bottom-0 left-0 h-px w-full bg-foreground/20" />
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: premiumEase }}
                >
                  {option.path ? (
                    <Link to={option.path} className="block h-full">
                      {content}
                    </Link>
                  ) : (
                    <button type="button" onClick={option.onClick} className="block h-full w-full">
                      {content}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 border-y border-border/25 py-12 lg:grid-cols-12 lg:items-start lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: premiumEase }}
              className="lg:col-span-5"
            >
              <h2 className="font-serif text-4xl uppercase leading-[0.98] text-foreground lg:text-5xl">
                {getText(language, "O que um case precisa mostrar.", "What a case needs to show.")}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                {getText(
                  language,
                  "Não quero publicar cartões bonitos sem substância. Quando um projeto aparece aqui, ele precisa ajudar alguém a entender como penso, decido e entrego.",
                  "I do not want to publish pretty cards without substance. When a project appears here, it needs to help someone understand how I think, decide and deliver."
                )}
              </p>
            </motion.div>

            <div className="grid gap-3 lg:col-span-7">
              {dossierItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: premiumEase }}
                  className="group grid gap-4 rounded-lg border border-border/18 bg-card/18 p-5 transition-colors duration-300 hover:border-foreground/20 sm:grid-cols-[5rem_1fr]"
                >
                  <span className="font-serif text-4xl leading-none text-foreground/[0.14] transition-colors duration-300 group-hover:text-foreground/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-4">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: premiumEase }}
              className="mb-10 font-serif text-3xl leading-tight text-foreground md:text-4xl"
            >
              {getText(language, "Perguntas frequentes", "Frequently asked questions")}
            </motion.h2>

            <div className="divide-y divide-border/30 border-y border-border/30">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: premiumEase }}
                  className="py-6"
                >
                  <h3 className="mb-2 text-base font-medium text-foreground md:text-lg">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientPortalDialog open={portalOpen} onClose={() => setPortalOpen(false)} />
    </Layout>
  );
};

export default Projects;
