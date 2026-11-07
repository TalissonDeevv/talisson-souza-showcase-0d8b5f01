import { motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Bot, Check, Cloud, Code, Minus, Palette, Smartphone, type LucideIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel, MotionRail, PageBackdrop } from "@/components/ui/PageIdentity";
import { FaqPro, type FaqProItem } from "@/components/ui/faq-pro";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PlanTierCard from "@/components/services/plans/PlanTierCard";
import EnterprisePlanPanel from "@/components/services/plans/EnterprisePlanPanel";
import PlanComparison from "@/components/services/plans/PlanComparison";
import NotFound from "@/pages/NotFound";
import { useTheme } from "@/contexts/ThemeContext";
import {
  buildPlanWhatsAppMessage,
  buildPlanWhatsAppUrl,
  formatPlanPrice,
  getServicePlanBySlug,
  getServicePlanOgImage,
  getStartingPrice,
  planTiers,
  servicePlans,
  sharedPlanFaq,
} from "@/data/service-plans";

const ease = [0.16, 1, 0.3, 1] as const;
const BASE_URL = "https://www.talissonsouza.com.br";

const serviceIcons: Record<string, LucideIcon> = {
  "web-development": Code,
  "mobile-development": Smartphone,
  "bot-development": Bot,
  "uiux-design": Palette,
  "cloud-solutions": Cloud,
};

const ServicePlans = () => {
  const { serviceId } = useParams();
  const { language } = useTheme();
  const service = getServicePlanBySlug(serviceId, language);

  if (!service) return <NotFound />;

  const pt = language === "pt";
  const Icon = serviceIcons[service.id] ?? Code;
  const homePath = pt ? "/" : "/en-us";
  const servicesPath = pt ? "/servicos" : "/en-us/services";
  const fixedTiers = planTiers.filter((tier) => tier.monthlyPrice !== null);
  const enterpriseTier = planTiers.find((tier) => tier.monthlyPrice === null);
  const generalWhatsAppUrl = buildPlanWhatsAppUrl(buildPlanWhatsAppMessage(service, null, language));
  const otherServices = servicePlans.filter((item) => item.id !== service.id);

  const faqItems: FaqProItem[] = [...service.faq, ...sharedPlanFaq].map((item, index) => ({
    id: `plan-faq-${index}`,
    question: item.question[language],
    answer: item.answer[language],
  }));

  const pageUrl = `${BASE_URL}${service.plansPath[language]}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: pt ? "Início" : "Home", item: `${BASE_URL}${pt ? "" : "/en-us"}` },
        { "@type": "ListItem", position: 2, name: pt ? "Serviços" : "Services", item: `${BASE_URL}${servicesPath}` },
        { "@type": "ListItem", position: 3, name: service.serviceName[language], item: `${BASE_URL}${service.servicePath[language]}` },
        { "@type": "ListItem", position: 4, name: pt ? "Planos" : "Plans", item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title[language].replace(/\.$/, ""),
      serviceType: pt ? "Acompanhamento técnico" : "Technical follow-up",
      description: service.description[language],
      url: pageUrl,
      provider: { "@type": "Person", name: "Talisson Souza", url: BASE_URL },
      offers: fixedTiers.map((tier) => ({
        "@type": "Offer",
        name: `${pt ? "Plano" : ""} ${tier.name[language]}${pt ? "" : " plan"}`.trim(),
        description: tier.description[language],
        price: tier.monthlyPrice?.toFixed(2),
        priceCurrency: "BRL",
        url: `${pageUrl}#plano-${tier.id}`,
      })),
    },
  ];

  return (
    <Layout withPadding={false}>
      <SEO
        title={service.seoTitle[language]}
        description={service.seoDescription[language]}
        canonical={service.plansPath[language]}
        image={getServicePlanOgImage(service, language)}
        keywords={
          pt
            ? ["planos de acompanhamento", "manutenção de software", "suporte técnico", service.serviceName.pt]
            : ["follow-up plans", "software maintenance", "technical support", service.serviceName.en]
        }
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-14 pt-28 lg:pb-20">
        <PageBackdrop />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <Breadcrumb className="mb-10">
              <BreadcrumbList className="text-xs sm:text-sm">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={homePath}>{pt ? "Início" : "Home"}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={servicesPath}>{pt ? "Serviços" : "Services"}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={service.servicePath[language]}>{service.serviceName[language]}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-foreground/85">{pt ? "Planos" : "Plans"}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.62fr)] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.05, ease }}>
              <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/30 bg-card/35">
                  <Icon className="h-4 w-4 text-foreground/70" aria-hidden="true" />
                </span>
                {pt ? "Acompanhamento técnico" : "Technical follow-up"} / {service.serviceName[language]}
              </span>
              <h1 className="max-w-4xl break-words font-serif text-[clamp(2.5rem,6.2vw,4.8rem)] font-semibold leading-[0.98] text-foreground [overflow-wrap:anywhere]">
                {service.title[language]}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.18, ease }}
                className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {service.description[language]}
              </motion.p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#planos"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {pt ? "Ver modalidades" : "See plans"}
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
                <Link
                  to={service.servicePath[language]}
                  className="inline-flex items-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  {pt ? "Voltar ao serviço" : "Back to the service"}
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.16, ease }}>
              <ul className="divide-y divide-border/20 border-y border-border/20" aria-label={pt ? "Resumo das modalidades" : "Plans overview"}>
                {planTiers.map((tier) => (
                  <li key={tier.id}>
                    <a
                      href={`#plano-${tier.id}`}
                      className="group grid grid-cols-[1fr_auto] items-center gap-4 py-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
                    >
                      <span className="text-sm font-medium text-foreground/90 transition-colors group-hover:text-foreground">{tier.name[language]}</span>
                      <span className="flex items-center gap-3 font-serif text-lg leading-none text-foreground/80">
                        {tier.monthlyPrice === null ? (pt ? "Sob consulta" : "Upon request") : formatPlanPrice(tier.monthlyPrice, language)}
                        <ArrowRight className="h-3.5 w-3.5 text-foreground/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground/70" aria-hidden="true" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-12">
            <MotionRail
              className="max-w-3xl"
              items={[
                { value: String(planTiers.length).padStart(2, "0"), label: pt ? "modalidades" : "plans" },
                { value: formatPlanPrice(getStartingPrice(), language), label: pt ? "a partir de, por mês" : "starting at, per month" },
                { value: "Stripe", label: pt ? "assinatura com pagamento seguro" : "subscription with secure payment" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" aria-labelledby="planos-titulo" className="relative scroll-mt-24 border-t border-border/20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">{pt ? "Modalidades" : "Plans"}</span>
                <h2 id="planos-titulo" className="max-w-2xl font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                  {pt ? "Escolha o nível de acompanhamento." : "Choose your level of follow-up."}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {pt
                  ? "Assinaturas mensais. Cada modalidade amplia a anterior. Depois da assinatura, o projeto é analisado e o escopo do acompanhamento é alinhado com você."
                  : "Monthly subscriptions. Each plan builds on the previous one. After subscribing, the project is reviewed and the follow-up scope is aligned with you."}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {fixedTiers.map((tier, index) => (
              <div key={tier.id} className={index === fixedTiers.length - 1 ? "md:col-span-2 lg:col-span-1" : undefined}>
                <PlanTierCard tier={tier} service={service} language={language} index={index} />
              </div>
            ))}
          </div>

          {enterpriseTier && (
            <div className="mt-4">
              <EnterprisePlanPanel tier={enterpriseTier} service={service} language={language} />
            </div>
          )}
        </div>
      </section>

      {/* Comparativo */}
      <section id="comparativo" aria-labelledby="comparativo-titulo" className="relative scroll-mt-24 py-16 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/30 to-transparent" aria-hidden="true" />
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 max-w-3xl">
              <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">{pt ? "Comparativo" : "Comparison"}</span>
              <h2 id="comparativo-titulo" className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                {pt ? "As diferenças, lado a lado." : "The differences, side by side."}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <PlanComparison service={service} language={language} />
          </ScrollReveal>
        </div>
      </section>

      {/* Importância e escopo */}
      <section id="importancia" aria-labelledby="importancia-titulo" className="relative scroll-mt-24 overflow-hidden border-t border-border/20 py-16 lg:py-24">
        <div className="pointer-events-none absolute right-[8vw] top-20 h-64 w-64 rounded-full bg-foreground/[0.025] blur-3xl" aria-hidden="true" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {pt ? "Por que acompanhar" : "Why follow up"}
                </span>
                <h2 id="importancia-titulo" className="max-w-md font-serif text-3xl leading-[1.05] text-foreground lg:text-5xl">
                  {pt ? "Entregar é o começo da vida útil do projeto." : "Delivery is where a project's lifespan begins."}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {pt
                    ? "Tecnologias, plataformas e necessidades mudam depois do lançamento. O acompanhamento técnico mantém o que foi construído confiável e preparado para o próximo passo."
                    : "Technologies, platforms and needs change after launch. Technical follow-up keeps what was built reliable and ready for the next step."}
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-10">
              <div className="divide-y divide-border/20 border-y border-border/20">
                {service.importance.map((item, index) => (
                  <ScrollReveal key={item.title.pt} delay={index * 0.06}>
                    <motion.div whileHover={{ x: 4 }} className="group grid gap-4 py-7 sm:grid-cols-[86px_0.8fr_1.2fr] sm:items-start">
                      <span className="font-serif text-4xl leading-none text-foreground/15 transition-colors duration-300 group-hover:text-foreground/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-2xl leading-tight text-foreground">{item.title[language]}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.text[language]}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <IdentityPanel hover={false} className="p-0">
                  <div className="grid gap-px bg-border/20 sm:grid-cols-2">
                    <div className="bg-background/92 p-6 sm:p-7">
                      <span className="mb-5 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground/65">
                        {pt ? "O acompanhamento cobre" : "The follow-up covers"}
                      </span>
                      <ul className="space-y-3.5">
                        {service.coverage.included.map((item) => (
                          <li key={item.pt} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" aria-hidden="true" />
                            {item[language]}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-background/92 p-6 sm:p-7">
                      <span className="mb-5 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground/65">
                        {pt ? "Fica fora do plano" : "Outside the plan"}
                      </span>
                      <ul className="space-y-3.5">
                        {service.coverage.excluded.map((item) => (
                          <li key={item.pt} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                            <Minus className="mt-0.5 h-4 w-4 shrink-0 text-foreground/30" aria-hidden="true" />
                            {item[language]}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 border-t border-border/20 pt-5 text-xs leading-relaxed text-muted-foreground/75">
                        {pt ? "Demandas fora do escopo podem ser orçadas à parte. Consulte também " : "Out-of-scope requests can be quoted separately. See also "}
                        <Link to={pt ? "/politicas/como-trabalho" : "/en-us/policies/como-trabalho"} className="text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-foreground">
                          {pt ? "como eu trabalho" : "how I work"}
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </IdentityPanel>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-titulo" className="scroll-mt-24 border-t border-border/20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">FAQ</span>
                <h2 id="faq-titulo" className="font-serif text-3xl leading-[1.05] text-foreground lg:text-5xl">
                  {pt ? "Antes de escolher." : "Before you choose."}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {pt
                    ? "Respostas diretas sobre escopo, contratação e diferenças entre as modalidades."
                    : "Straight answers about scope, hiring and the differences between plans."}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} direction="right">
              <FaqPro
                className="w-full max-w-4xl"
                defaultOpenFirst
                items={faqItems}
                searchPlaceholder={pt ? "Buscar perguntas..." : "Search questions..."}
                emptyText={pt ? "Nenhuma pergunta encontrada." : "No questions found."}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section aria-labelledby="planos-cta-titulo" className="relative overflow-hidden border-t border-border/20 py-16 lg:py-24">
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" aria-hidden="true" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">{pt ? "Próximo passo" : "Next step"}</span>
                <h2 id="planos-cta-titulo" className="max-w-3xl font-serif text-4xl leading-[1.04] text-foreground lg:text-6xl">
                  {pt ? "Ainda em dúvida sobre a modalidade?" : "Still unsure which plan fits?"}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {pt
                    ? "Conte como o projeto está hoje e o que precisa acontecer nos próximos meses. A partir disso, fica claro qual nível de acompanhamento faz sentido."
                    : "Share where the project stands today and what needs to happen in the coming months. From there, it becomes clear which level of follow-up makes sense."}
                </p>
              </div>
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={pt ? "Conversar sobre os planos pelo WhatsApp (abre em nova aba)" : "Talk about the plans on WhatsApp (opens in a new tab)"}
                className="group inline-flex items-center gap-3 self-start rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:self-end"
                style={{ boxShadow: "0 0 30px hsl(var(--foreground) / 0.2)" }}
              >
                {pt ? "Conversar sobre os planos" : "Talk about the plans"}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <nav aria-label={pt ? "Planos de outros serviços" : "Plans for other services"} className="mt-14 border-t border-border/20 pt-8">
              <span className="mb-4 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground/60">
                {pt ? "Planos para outros serviços" : "Plans for other services"}
              </span>
              <ul className="flex flex-wrap gap-2">
                {otherServices.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.plansPath[language]}
                      className="inline-flex items-center gap-2 rounded-full border border-border/25 bg-background/30 px-4 py-2 text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:border-border/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
                    >
                      {item.serviceName[language]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePlans;
