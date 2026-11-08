import { motion } from "framer-motion";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  buildPlanWhatsAppMessage,
  buildPlanWhatsAppUrl,
  formatPlanPrice,
  getTier,
  getTierBenefits,
  type PlanLanguage,
  type PlanTier,
  type ServicePlanConfig,
} from "@/data/service-plans";

const ease = [0.16, 1, 0.3, 1] as const;

type PlanTierCardProps = {
  tier: PlanTier;
  service: ServicePlanConfig;
  language: PlanLanguage;
  index: number;
};

const PlanTierCard = ({ tier, service, language, index }: PlanTierCardProps) => {
  const pt = language === "pt";
  const benefits = getTierBenefits(service, tier, language);
  const inherited = tier.inherits ? getTier(tier.inherits) : null;
  const whatsappHref = buildPlanWhatsAppUrl(buildPlanWhatsAppMessage(service, tier, language));
  const href = tier.paymentUrl ?? whatsappHref;
  const ctaDestination = tier.paymentUrl
    ? pt ? "na página de pagamento segura (abre em nova aba)" : "on the secure payment page (opens in a new tab)"
    : pt ? "pelo WhatsApp (abre em nova aba)" : "on WhatsApp (opens in a new tab)";
  const headingId = `plano-${tier.id}-titulo`;

  return (
    <motion.article
      id={`plano-${tier.id}`}
      aria-labelledby={headingId}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
      whileHover={{ y: -4, transition: { duration: 0.4, ease } }}
      className={cn(
        "group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-border/25 bg-card/35 p-6 backdrop-blur-sm lg:p-7",
        "shadow-[0_24px_80px_-56px_hsl(var(--foreground)/0.35)] transition-[border-color,box-shadow] duration-500 ease-out",
        "hover:border-border/50 hover:shadow-[0_30px_90px_-56px_hsl(var(--foreground)/0.45)] focus-within:border-border/50",
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-foreground/[0.025] to-transparent opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-14 w-14 border-l border-t border-foreground/10" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-14 w-14 border-b border-r border-foreground/10" />

      <div className="relative flex min-h-[26px] items-center justify-between gap-4">
        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/85">
          {tier.name[language]}
        </span>
        {tier.badge && (
          <span className="rounded-full border border-border/35 bg-background/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground/75">
            {tier.badge[language]}
          </span>
        )}
      </div>

      <h3 id={headingId} className="relative mt-7 font-serif text-2xl leading-tight text-foreground">
        {tier.title[language]}
      </h3>
      <p className="relative mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/60">{tier.tagline[language]}</p>

      {tier.monthlyPrice !== null && (
        <p className="relative mt-5 flex items-baseline gap-2">
          <span className="font-serif text-4xl leading-none text-foreground lg:text-[2.75rem]">
            {formatPlanPrice(tier.monthlyPrice, language)}
          </span>
          <span className="text-sm text-muted-foreground">{pt ? "/mês" : "/month"}</span>
        </p>
      )}

      <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground">{tier.description[language]}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${tier.cta[language]} ${ctaDestination}`}
        className={cn(
          "relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground",
          "transition-[background-color,border-color,color] duration-300",
          "hover:border-foreground/40 hover:bg-foreground hover:text-background",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        {tier.cta[language]}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </a>

      {tier.paymentUrl && (
        <p className="relative mt-3 text-center text-[11px] leading-relaxed text-muted-foreground/75">
          {pt ? "Exclusivo para projetos com contrato formal. " : "Exclusive to projects under a formal contract. "}
          <a
            href="#condicoes-contratuais"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            {pt ? "Ver condições" : "See conditions"}
          </a>
        </p>
      )}

      {tier.paymentUrl && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-3 inline-flex items-center justify-center gap-2 self-center rounded-full px-3 py-1 text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
        >
          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {pt ? "Prefere conversar antes? Fale no WhatsApp" : "Rather talk first? Message on WhatsApp"}
          <span className="sr-only">{pt ? "(abre em nova aba)" : "(opens in a new tab)"}</span>
        </a>
      )}

      <div className="relative mt-7 border-t border-border/20 pt-6">
        {inherited && (
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/75">
            {pt ? `Tudo do ${inherited.name.pt}, e mais:` : `Everything in ${inherited.name.en}, plus:`}
          </p>
        )}
        <ul className="space-y-3" aria-label={pt ? `Benefícios do plano ${tier.name.pt}` : `${tier.name.en} plan benefits`}>
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default PlanTierCard;
