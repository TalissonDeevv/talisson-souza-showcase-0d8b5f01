import { useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  formatPlanPrice,
  getComparisonRows,
  planTiers,
  type PlanComparisonCell,
  type PlanLanguage,
  type PlanTierId,
  type ServicePlanConfig,
} from "@/data/service-plans";

const ease = [0.16, 1, 0.3, 1] as const;

type PlanComparisonProps = {
  service: ServicePlanConfig;
  language: PlanLanguage;
};

const CellValue = ({ cell, language }: { cell: PlanComparisonCell; language: PlanLanguage }) => {
  const pt = language === "pt";

  if (!cell) {
    return (
      <>
        <Minus className="h-4 w-4 text-foreground/20" aria-hidden="true" />
        <span className="sr-only">{pt ? "Não incluído" : "Not included"}</span>
      </>
    );
  }

  if (cell.value === true) {
    return (
      <>
        <Check className="h-4 w-4 text-foreground/60" aria-hidden="true" />
        <span className="sr-only">{pt ? "Incluído" : "Included"}</span>
      </>
    );
  }

  return <span className="text-sm leading-snug text-foreground/85">{cell.value[language]}</span>;
};

const PlanComparison = ({ service, language }: PlanComparisonProps) => {
  const pt = language === "pt";
  const rows = getComparisonRows(service);
  const [activeTier, setActiveTier] = useState<PlanTierId>("professional");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const baseId = useId();
  const active = planTiers.find((tier) => tier.id === activeTier) ?? planTiers[0];

  const priceLabel = (price: number | null) =>
    price === null ? (pt ? "Sob consulta" : "Upon request") : `${formatPlanPrice(price, language)}${pt ? "/mês" : "/month"}`;

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    let nextIndex: number | null = null;
    if (event.key in keys) nextIndex = (index + keys[event.key] + planTiers.length) % planTiers.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = planTiers.length - 1;
    if (nextIndex === null) return;
    event.preventDefault();
    const next = planTiers[nextIndex];
    setActiveTier(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <div>
      {/* Desktop: tabela completa */}
      <div className="hidden overflow-hidden rounded-2xl border border-border/25 bg-card/25 backdrop-blur-sm lg:block">
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">
            {pt
              ? `Comparativo dos planos de acompanhamento para ${service.serviceName.pt}`
              : `Comparison of follow-up plans for ${service.serviceName.en}`}
          </caption>
          <colgroup>
            <col className="w-[28%]" />
            {planTiers.map((tier) => (
              <col key={tier.id} className="w-[18%]" />
            ))}
          </colgroup>
          <thead>
            <tr className="border-b border-border/20">
              <th scope="col" className="p-6 align-bottom text-[11px] font-normal uppercase tracking-[0.28em] text-muted-foreground/65">
                {pt ? "Recurso" : "Feature"}
              </th>
              {planTiers.map((tier) => (
                <th key={tier.id} scope="col" className="relative p-6 align-bottom font-normal">
                  <span className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/85">
                    {tier.name[language]}
                  </span>
                  <span className="mt-3 block font-serif text-xl leading-none text-foreground">{priceLabel(tier.monthlyPrice)}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="group border-b border-border/15 transition-colors duration-300 last:border-b-0 hover:bg-foreground/[0.025]">
                <th scope="row" className="p-5 pl-6 text-sm font-medium leading-snug text-foreground">
                  {row.label[language]}
                </th>
                {planTiers.map((tier) => (
                  <td key={tier.id} className="p-5 pl-6 align-middle">
                    <CellValue cell={row.cells[tier.id]} language={language} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile e tablet: uma modalidade por vez */}
      <div className="lg:hidden">
        <div
          role="tablist"
          aria-label={pt ? "Escolha uma modalidade para comparar" : "Choose a plan to compare"}
          className="grid grid-cols-2 gap-2 sm:grid-cols-4"
        >
          {planTiers.map((tier, index) => {
            const selected = tier.id === activeTier;
            return (
              <button
                key={tier.id}
                ref={(element) => {
                  tabRefs.current[tier.id] = element;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${tier.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveTier(tier.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  selected ? "border-foreground/30 bg-foreground/[0.08] text-foreground" : "border-border/25 bg-background/30 text-muted-foreground hover:text-foreground",
                )}
              >
                {tier.name[language]}
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active.id}`}
          className="mt-5 overflow-hidden rounded-2xl border border-border/25 bg-card/25"
        >
          <div className="relative flex items-end justify-between gap-4 border-b border-border/20 p-5">
            <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground/70">{active.name[language]}</span>
            <span className="font-serif text-xl leading-none text-foreground">{priceLabel(active.monthlyPrice)}</span>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.dl
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease }}
              className="divide-y divide-border/15"
            >
              {rows.map((row) => (
                <div key={row.id} className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4">
                  <dt className="text-sm text-muted-foreground">{row.label[language]}</dt>
                  <dd className="flex items-center justify-end text-right">
                    <CellValue cell={row.cells[active.id]} language={language} />
                  </dd>
                </div>
              ))}
            </motion.dl>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;
