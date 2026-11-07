import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactEmails, mailtoHref } from "@/data/contact-channels";
import {
  buildPlanWhatsAppMessage,
  buildPlanWhatsAppUrl,
  getTierBenefits,
  type PlanLanguage,
  type PlanTier,
  type ServicePlanConfig,
} from "@/data/service-plans";

const ease = [0.16, 1, 0.3, 1] as const;

type EnterprisePlanPanelProps = {
  tier: PlanTier;
  service: ServicePlanConfig;
  language: PlanLanguage;
};

const EnterprisePlanPanel = ({ tier, service, language }: EnterprisePlanPanelProps) => {
  const pt = language === "pt";
  const benefits = getTierBenefits(service, tier, language);
  const whatsappHref = buildPlanWhatsAppUrl(buildPlanWhatsAppMessage(service, tier, language));
  const emailSubject = pt
    ? `Proposta - Plano ${tier.name.pt} - ${service.serviceName.pt}`
    : `Proposal - ${tier.name.en} Plan - ${service.serviceName.en}`;
  const headingId = `plano-${tier.id}-titulo`;

  return (
    <motion.article
      id={`plano-${tier.id}`}
      aria-labelledby={headingId}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease }}
      className="group relative scroll-mt-28 overflow-hidden rounded-2xl border border-border/25 bg-card/35 backdrop-blur-sm shadow-[0_24px_80px_-56px_hsl(var(--foreground)/0.35)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.006]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-10 h-14 w-14 border-l border-t border-foreground/10" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-14 w-14 border-r border-t border-foreground/10" />

      <div className="relative grid gap-px bg-border/20 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col bg-background/90 p-7 sm:p-9 lg:p-10">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/85">
            {tier.name[language]}
          </span>
          <h3 id={headingId} className="mt-7 max-w-md font-serif text-3xl leading-[1.08] text-foreground lg:text-4xl">
            {tier.title[language]}
          </h3>
          <p className="mt-5 font-serif text-2xl text-foreground/80">{pt ? "Sob consulta" : "Upon request"}</p>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">{tier.description[language]}</p>

          <div className="mt-auto flex flex-col gap-3 pt-9 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tier.cta[language]} ${pt ? "pelo WhatsApp (abre em nova aba)" : "on WhatsApp (opens in a new tab)"}`}
              className="group/cta inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-opacity duration-300 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {tier.cta[language]}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href={mailtoHref(contactEmails.commercial, emailSubject)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {pt ? "Prefiro enviar por e-mail" : "I'd rather send an email"}
            </a>
          </div>
        </div>

        <div className="bg-background/95 p-7 sm:p-9 lg:p-10">
          <span className="mb-6 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
            {pt ? "O que pode compor a proposta" : "What the proposal can include"}
          </span>
          <ul className="grid gap-px overflow-hidden border border-border/20 bg-border/20 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <li
                key={benefit}
                className={cn(
                  "flex min-h-[92px] flex-col justify-between gap-4 bg-background/95 p-4 transition-colors duration-300 hover:bg-foreground/[0.03]",
                  benefits.length % 2 === 1 && index === benefits.length - 1 && "sm:col-span-2",
                )}
              >
                <span className="font-serif text-xl leading-none text-foreground/20" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium leading-snug text-foreground/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};

export default EnterprisePlanPanel;
