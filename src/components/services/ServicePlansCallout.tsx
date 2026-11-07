import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel } from "@/components/ui/PageIdentity";
import { cn } from "@/lib/utils";
import { formatPlanPrice, getServicePlanById, planTiers, type PlanLanguage } from "@/data/service-plans";

type ServicePlansCalloutProps = {
  serviceId: string | undefined;
  language: PlanLanguage;
  className?: string;
};

/** Chamada para os planos de acompanhamento, exibida nas páginas individuais de serviço. */
const ServicePlansCallout = ({ serviceId, language, className }: ServicePlansCalloutProps) => {
  const service = getServicePlanById(serviceId);
  if (!service) return null;

  const pt = language === "pt";
  const headingId = `planos-acompanhamento-${service.id}`;

  return (
    <section id="planos-acompanhamento" aria-labelledby={headingId} className={cn("relative scroll-mt-28 py-14 lg:py-20", className)}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <IdentityPanel hover={false} className="p-7 sm:p-9 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {pt ? "Acompanhamento técnico" : "Technical follow-up"}
                </span>
                <h2 id={headingId} className="max-w-xl font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                  {pt ? "Continue evoluindo seu projeto." : "Keep evolving your project."}
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {pt
                    ? "Seu projeto não precisa parar na entrega. Conheça as opções de acompanhamento técnico e tenha suporte para manter, atualizar e evoluir sua solução."
                    : "Your project doesn't have to stop at delivery. Explore the technical follow-up options and get support to maintain, update and evolve your solution."}
                </p>
                <Link
                  to={service.plansPath[language]}
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-opacity duration-300 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {pt ? "Conhecer planos" : "Explore plans"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>

              <ul className="divide-y divide-border/20 border-y border-border/20" aria-label={pt ? "Modalidades disponíveis" : "Available plans"}>
                {planTiers.map((tier) => (
                  <li key={tier.id} className="grid grid-cols-[1fr_auto] items-center gap-4 py-4">
                    <div className="min-w-0">
                      <span className="block text-sm font-medium text-foreground">{tier.name[language]}</span>
                      <span className="block truncate text-xs text-muted-foreground/75">{tier.tagline[language]}</span>
                    </div>
                    <span className="text-right font-serif text-lg leading-none text-foreground/85">
                      {tier.monthlyPrice === null ? (pt ? "Sob consulta" : "Upon request") : formatPlanPrice(tier.monthlyPrice, language)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </IdentityPanel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicePlansCallout;
