import { motion } from "framer-motion";
import { ArrowRight, Bot, Check, Cloud, Code, Compass, Palette, Shield, Smartphone, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import signatureServicos from "@/assets/signature-servicos.png";

const Services = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const servicePath = (id: string) => (language === "en" ? `/en-us/services/${id}` : `/servicos/${id}`);

  const serviceCategories = [
    {
      id: "web-development",
      icon: Code,
      ...t.servicesPage.categories.webDevelopment,
      context: getText(language, "Presença, conversão e operação web.", "Presence, conversion and web operations."),
      useCases: language === "pt"
        ? ["Portais corporativos", "Dashboards analíticos", "E-commerces personalizados", "Sistemas internos"]
        : ["Corporate portals", "Analytics dashboards", "Custom e-commerce", "Internal systems"],
    },
    {
      id: "mobile-development",
      icon: Smartphone,
      ...t.servicesPage.categories.mobileDevelopment,
      context: getText(language, "Produto recorrente no bolso do usuário.", "Recurring product in the user's pocket."),
      useCases: language === "pt"
        ? ["Apps de delivery", "Gestão de equipes", "Catálogos digitais", "Apps de fidelidade"]
        : ["Delivery apps", "Team management", "Digital catalogs", "Loyalty apps"],
    },
    {
      id: "bot-development",
      icon: Bot,
      ...t.servicesPage.categories.botDevelopment,
      context: getText(language, "Automação para comunidade e operação.", "Automation for community and operations."),
      useCases: language === "pt"
        ? ["Moderação automatizada", "Atendimento 24/7", "Integrações com APIs", "Sistemas de economia"]
        : ["Automated moderation", "24/7 support", "API integrations", "Economy systems"],
    },
    {
      id: "uiux-design",
      icon: Palette,
      ...t.servicesPage.categories.uiuxDesign,
      context: getText(language, "Decisão visual antes da execução.", "Visual decision before execution."),
      useCases: language === "pt"
        ? ["Redesign de produtos", "Design systems", "Prototipagem rápida", "Pesquisa de usuários"]
        : ["Product redesign", "Design systems", "Rapid prototyping", "User research"],
    },
    {
      id: "cloud-solutions",
      icon: Cloud,
      ...t.servicesPage.categories.cloudSolutions,
      context: getText(language, "Base de estabilidade, deploy e escala.", "Stability, deploy and scale foundation."),
      useCases: language === "pt"
        ? ["Migração para nuvem", "CI/CD automatizado", "Monitoramento 24/7", "Arquitetura escalável"]
        : ["Cloud migration", "Automated CI/CD", "24/7 monitoring", "Scalable architecture"],
    },
    {
      id: "consulting",
      icon: Users,
      ...t.servicesPage.categories.consulting,
      context: getText(language, "Direção para reduzir risco técnico.", "Direction to reduce technical risk."),
      useCases: language === "pt"
        ? ["Code review", "Mentoria técnica", "Arquitetura de sistemas", "Planejamento estratégico"]
        : ["Code review", "Technical mentoring", "System architecture", "Strategic planning"],
    },
  ];

  const entryPoints = [
    {
      icon: Code,
      title: getText(language, "Quero vender ou apresentar melhor", "I want to sell or present better"),
      description: getText(language, "Site, landing page, interface ou portal com acabamento e conversão.", "Website, landing page, interface or portal with polish and conversion."),
      path: servicePath("web-development"),
    },
    {
      icon: Zap,
      title: getText(language, "Quero organizar operação", "I want to organize operations"),
      description: getText(language, "Sistemas, bots, integrações e automações para reduzir retrabalho.", "Systems, bots, integrations and automations to reduce rework."),
      path: servicePath("bot-development"),
    },
    {
      icon: Shield,
      title: getText(language, "Quero decidir com segurança", "I want to decide safely"),
      description: getText(language, "Consultoria, arquitetura, UX e infraestrutura antes de escalar.", "Consulting, architecture, UX and infrastructure before scaling."),
      path: servicePath("consulting"),
    },
  ];

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Serviços de Desenvolvimento | Talisson Souza", "Development Services | Talisson Souza")}
        description={getText(
          language,
          "Desenvolvimento web, mobile, bots, UI/UX, soluções cloud e consultoria tecnológica. Soluções digitais sob medida para sua empresa crescer.",
          "Web, mobile, bot development, UI/UX design, cloud solutions and technology consulting. Custom digital solutions to grow your business."
        )}
        canonical={language === "en" ? "/en-us/services" : "/servicos"}
        keywords={language === "pt" ? ["serviços", "desenvolvimento web", "desenvolvimento mobile", "bots", "UI/UX", "cloud", "consultoria"] : ["services", "web development", "mobile development", "bots", "UI/UX", "cloud", "consulting"]}
      />

      <PageHero
        compact
        signature={signatureServicos}
        signatureAlt="Serviços"
        title={t.servicesPage.title}
        subtitle={t.servicesPage.subtitle}
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: "06", label: getText(language, "frentes", "tracks") },
              { value: "01", label: getText(language, "direção", "direction") },
              { value: "UX", label: getText(language, "execução clara", "clear execution") },
            ]}
          />
        }
      >
        <IdentityPanel hover={false} className="p-6">
          <div className="mb-8 flex items-center justify-between">
            <Compass className="h-6 w-6 text-foreground/70" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
              {getText(language, "mapa de escopo", "scope map")}
            </span>
          </div>
          <div className="space-y-3">
            {entryPoints.map((entry, index) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 + index * 0.08 }}
                className="rounded-xl border border-border/20 bg-background/35 p-4"
              >
                <div className="mb-2 flex items-center gap-3">
                  <entry.icon className="h-4 w-4 text-foreground/55" />
                  <h2 className="text-sm font-medium text-foreground">{entry.title}</h2>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{entry.description}</p>
              </motion.div>
            ))}
          </div>
        </IdentityPanel>
      </PageHero>

      <section className="pb-14">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {entryPoints.map((entry, index) => (
              <ScrollReveal key={entry.title} delay={index * 0.08}>
                <Link to={entry.path} className="group block h-full">
                  <IdentityPanel className="h-full p-6">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/30 bg-background/40">
                        <entry.icon className="h-5 w-5 text-foreground/70" />
                      </div>
                      <span className="font-serif text-4xl leading-none text-foreground/14">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h2 className="font-serif text-2xl leading-tight text-foreground">{entry.title}</h2>
                    <p className="mt-4 min-h-[72px] text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      <span className="relative">
                        {getText(language, "Encontrar serviço", "Find service")}
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

      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 max-w-2xl">
              <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                {getText(language, "frentes de entrega", "delivery tracks")}
              </span>
              <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                {getText(language, "Escolha pelo problema, não pela ferramenta.", "Choose by the problem, not the tool.")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.id} delay={index * 0.06}>
                  <Link to={servicePath(service.id)} className="group block h-full">
                    <IdentityPanel className="flex h-full flex-col p-6">
                      <div className="mb-8 flex items-start justify-between gap-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/40">
                          <Icon className="h-5 w-5 text-foreground/70" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/45">
                          {service.context}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl leading-tight text-foreground">{service.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {service.useCases.slice(0, 3).map((useCase) => (
                          <span key={useCase} className="rounded-full border border-border/20 bg-background/30 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground/55">
                            {useCase}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 space-y-2 border-t border-border/20 pt-5">
                        {service.features.slice(0, 3).map((feature: string) => (
                          <div key={feature} className="flex items-center gap-2">
                            <Check className="h-3.5 w-3.5 shrink-0 text-foreground/45" />
                            <span className="text-xs text-muted-foreground/70">{feature}</span>
                          </div>
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

      <section className="border-t border-border/20 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <IdentityPanel hover={false} className="mx-auto max-w-3xl p-8 text-center lg:p-10">
              <h2 className="font-serif text-3xl leading-tight text-foreground">
                {t.servicesPage.projectIdea}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {t.servicesPage.projectIdeaDescription}
              </p>
              <a
                href="https://wa.me/5581993964261"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-border/30 bg-background/30 px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
              >
                {getText(language, "Solicitar diagnóstico técnico", "Request technical diagnosis")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </IdentityPanel>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
