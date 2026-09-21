import { motion } from "framer-motion";
import { ArrowRight, Bot, Check, Cloud, Code, Compass, MessageCircle, Palette, Shield, Smartphone, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import { budgetFormUrl } from "@/data/contact-channels";
import signatureServicos from "@/assets/signature-servicos.png";

const ease = [0.16, 1, 0.3, 1] as const;

const Services = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const servicePath = (id: string) => id === "community-discord"
    ? (language === "en" ? "/en-us/services/community-discord" : "/servicos/comunidade-discord")
    : (language === "en" ? `/en-us/services/${id}` : `/servicos/${id}`);

  const services = [
    {
      id: "web-development",
      icon: Code,
      ...t.servicesPage.categories.webDevelopment,
      context: getText(language, "Interface, front-end e operação web", "Interface, front-end and web operations"),
      useCases: language === "pt" ? ["Portais", "Dashboards", "Landing pages"] : ["Portals", "Dashboards", "Landing pages"],
    },
    {
      id: "mobile-development",
      icon: Smartphone,
      ...t.servicesPage.categories.mobileDevelopment,
      context: getText(language, "Produto recorrente no bolso do usuário", "Recurring product in the user's pocket"),
      useCases: language === "pt" ? ["Apps", "Notificações", "Fluxos nativos"] : ["Apps", "Notifications", "Native flows"],
    },
    {
      id: "bot-development",
      icon: Bot,
      ...t.servicesPage.categories.botDevelopment,
      context: getText(language, "Bots criativos para Discord, WhatsApp e Telegram", "Creative bots for Discord, WhatsApp and Telegram"),
      useCases: language === "pt" ? ["Comunidade", "Atendimento", "Automação"] : ["Community", "Support", "Automation"],
    },
    {
      id: "uiux-design",
      icon: Palette,
      ...t.servicesPage.categories.uiuxDesign,
      context: getText(language, "Decisão visual antes da execução", "Visual decision before execution"),
      useCases: language === "pt" ? ["UX", "Protótipo", "Design system"] : ["UX", "Prototype", "Design system"],
    },
    {
      id: "cloud-solutions",
      icon: Cloud,
      ...t.servicesPage.categories.cloudSolutions,
      context: getText(language, "Deploy, estabilidade e governança", "Deploy, stability and governance"),
      useCases: language === "pt" ? ["CI/CD", "Monitoramento", "Backup"] : ["CI/CD", "Monitoring", "Backup"],
    },
    {
      id: "consulting",
      icon: Users,
      ...t.servicesPage.categories.consulting,
      context: getText(language, "Clareza técnica para decidir melhor", "Technical clarity to decide better"),
      useCases: language === "pt" ? ["Diagnóstico", "Arquitetura", "Mentoria"] : ["Diagnosis", "Architecture", "Mentoring"],
    },
    {
      id: "community-discord",
      icon: MessageCircle,
      ...t.servicesPage.categories.communityDiscord,
      context: getText(language, "Pessoas, processos e operação", "People, processes and operations"),
      useCases: language === "pt" ? ["Administração", "Moderação", "Segurança"] : ["Administration", "Moderation", "Security"],
    },
  ];

  const decisionMap = [
    {
      icon: Compass,
      title: getText(language, "Não sei por onde começar", "I don't know where to start"),
      text: getText(language, "Use consultoria ou UI/UX para transformar ruído em rota de execução.", "Use consulting or UI/UX to turn noise into an execution route."),
      path: servicePath("consulting"),
    },
    {
      icon: Code,
      title: getText(language, "Preciso colocar algo no ar", "I need to put something live"),
      text: getText(language, "Web, mobile ou cloud entram quando a direção já precisa virar produto funcionando.", "Web, mobile or cloud enter when direction needs to become a working product."),
      path: servicePath("web-development"),
    },
    {
      icon: Zap,
      title: getText(language, "Minha operação está manual demais", "My operation is too manual"),
      text: getText(language, "Bots, integrações e sistemas internos organizam repetição, regra e atendimento.", "Bots, integrations and internal systems organize repetition, rules and support."),
      path: servicePath("bot-development"),
    },
  ];

  const operatingSteps = [
    getText(language, "Diagnóstico antes de escopo", "Diagnosis before scope"),
    getText(language, "Prototipagem quando reduz risco", "Prototype when it reduces risk"),
    getText(language, "Execução rastreável", "Traceable execution"),
    getText(language, "Entrega preparada para evoluir", "Delivery prepared to evolve"),
  ];

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Serviços de Desenvolvimento | Talisson Souza", "Development Services | Talisson Souza")}
        description={getText(
          language,
          "Desenvolvimento web, mobile, bots, UI/UX, cloud e consultoria técnica com foco em clareza, operação e produto digital.",
          "Web, mobile, bots, UI/UX, cloud and technical consulting focused on clarity, operations and digital product."
        )}
        canonical={language === "en" ? "/en-us/services" : "/servicos"}
        keywords={language === "pt" ? ["serviços", "desenvolvimento web", "mobile", "bots", "UI/UX", "cloud", "consultoria"] : ["services", "web development", "mobile", "bots", "UI/UX", "cloud", "consulting"]}
      />

      <PageHero
        compact
        signature={signatureServicos}
        signatureAlt="Serviços"
        title={t.servicesPage.title}
        subtitle={getText(
          language,
          "Serviços organizados pelo problema que precisam resolver, não pela tecnologia mais chamativa do momento.",
          "Services organized by the problem they need to solve, not by the trendiest technology of the moment."
        )}
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: "06", label: getText(language, "frentes", "tracks") },
              { value: "04", label: getText(language, "etapas", "stages") },
              { value: "UX", label: getText(language, "clareza", "clarity") },
            ]}
          />
        }
      />

      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 max-w-3xl">
              <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                {getText(language, "Mapa de decisão", "Decision map")}
              </span>
              <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                {getText(language, "Entre pelo sintoma. Saia com uma rota.", "Enter through the symptom. Leave with a route.")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-border/20 border-y border-border/20">
            {decisionMap.map((entry, index) => (
              <ScrollReveal key={entry.title} delay={index * 0.08}>
                <Link to={entry.path} className="group grid gap-6 py-7 sm:grid-cols-[90px_1fr_auto] sm:items-center lg:py-9">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-4xl text-foreground/18">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/30 bg-background/35">
                      <entry.icon className="h-5 w-5 text-foreground/65" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight text-foreground">{entry.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{entry.text}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-foreground/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-4 border-y border-border/20 py-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Frentes de entrega", "Delivery tracks")}
                </span>
                <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                  {getText(language, "Cada frente tem um papel.", "Each track has a role.")}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {getText(
                  language,
                  "A escolha certa nasce do contexto: usuário, operação, risco, manutenção e maturidade do produto.",
                  "The right choice comes from context: user, operation, risk, maintenance and product maturity."
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const spans = ["xl:col-span-5", "xl:col-span-7", "xl:col-span-4", "xl:col-span-4", "xl:col-span-4", "xl:col-span-6", "xl:col-span-6"];
              return (
                <ScrollReveal key={service.id} delay={index * 0.05} className={spans[index]}>
                  <Link to={servicePath(service.id)} className="group block h-full">
                    <IdentityPanel className="flex h-full flex-col p-6 lg:p-7">
                      <div className="mb-8 flex items-start justify-between gap-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/40">
                          <Icon className="h-5 w-5 text-foreground/70" />
                        </div>
                        <span className="max-w-[210px] text-right text-[10px] uppercase tracking-[0.2em] text-muted-foreground/45">
                          {service.context}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl leading-tight text-foreground">{service.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {service.useCases.map((useCase) => (
                          <span key={useCase} className="rounded-full border border-border/20 bg-background/30 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground/55">
                            {useCase}
                          </span>
                        ))}
                      </div>
                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        <span className="relative">
                          {t.servicesPage.learnMore}
                          <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </IdentityPanel>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <IdentityPanel hover={false} className="p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/35">
                    <Shield className="h-5 w-5 text-foreground/70" />
                  </div>
                  <h2 className="font-serif text-3xl leading-tight text-foreground">
                    {getText(language, "Como eu evito projeto-labirinto.", "How I avoid maze-projects.")}
                  </h2>
                </div>
                <div className="grid gap-px overflow-hidden border border-border/20 bg-border/20 sm:grid-cols-2">
                  {operatingSteps.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.55, delay: index * 0.06, ease }}
                      className="bg-background/92 p-5"
                    >
                      <span className="font-serif text-3xl text-foreground/18">{String(index + 1).padStart(2, "0")}</span>
                      <div className="mt-5 flex items-center gap-2">
                        <Check className="h-4 w-4 text-foreground/50" />
                        <p className="text-sm font-medium text-foreground">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </IdentityPanel>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border/20 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl leading-tight text-foreground">
                {t.servicesPage.projectIdea}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {t.servicesPage.projectIdeaDescription}
              </p>
              <a
                href={budgetFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-border/30 bg-background/30 px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
              >
                {getText(language, "Solicitar orçamento pelo formulário", "Request a quote through the form")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
