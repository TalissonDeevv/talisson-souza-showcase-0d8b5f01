import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { Bell, CalendarDays, FileText, Globe2, Search } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getText } from "@/utils/translations";

type MobileBentoGridProps = {
  language: string;
};

type IconComponent = ComponentType<{ className?: string }>;

type MobileBentoFeature = {
  Icon: IconComponent;
  title: string;
  description: string;
  className: string;
};

const BentoFeatureCard = ({ feature, index }: { feature: MobileBentoFeature; index: number }) => {
  const Icon = feature.Icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className={`group relative flex min-h-[172px] overflow-hidden rounded-xl border border-border/20 bg-card/25 p-6 shadow-[0_22px_65px_hsl(var(--foreground)/0.025)] transition-colors duration-300 hover:border-foreground/18 hover:bg-foreground/[0.025] lg:min-h-0 ${feature.className}`}
    >
      <div className="pointer-events-none absolute inset-x-6 top-6 h-px bg-gradient-to-r from-border/25 via-border/10 to-transparent" />

      <div className="relative z-10 mt-auto max-w-[16rem]">
        <Icon className="mb-3 h-8 w-8 text-foreground/78" />
        <h3 className="text-[15px] font-semibold leading-snug text-foreground">{feature.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground/74">{feature.description}</p>
      </div>
    </motion.article>
  );
};

const MobileBentoGrid = ({ language }: MobileBentoGridProps) => {
  const features: MobileBentoFeature[] = [
    {
      Icon: Search,
      title: getText(language, "Busca dentro do app", "In-app search"),
      description: getText(
        language,
        "Conteúdo, telas e ações encontrados sem esforço.",
        "Content, screens and actions found without friction."
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: FileText,
      title: getText(language, "Fluxos e estados salvos", "Saved flows and states"),
      description: getText(
        language,
        "Estados, cache e progresso continuam consistentes.",
        "States, cache and progress stay consistent."
      ),
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Globe2,
      title: getText(language, "Idioma e contexto", "Language and context"),
      description: getText(
        language,
        "Textos e formatos preparados para crescer.",
        "Copy and formats prepared to grow."
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarDays,
      title: getText(language, "Rotina e agenda", "Routine and schedule"),
      description: getText(
        language,
        "Eventos e lembretes no fluxo certo.",
        "Events and reminders in the right flow."
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Bell,
      title: getText(language, "Notificações úteis", "Useful notifications"),
      description: getText(
        language,
        "Alertas com contexto, sem excesso.",
        "Contextual alerts without excess."
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <ScrollReveal>
      <div id="mobile-bento-grid" className="mx-auto mt-10 max-w-6xl scroll-mt-28 border-y border-border/20 py-8 lg:py-10">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 block text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60">
              {getText(language, "Sistema do app", "App system")}
            </span>
            <h3 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
              {getText(language, "Mobile que funciona como produto", "Mobile that works as a product")}
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {getText(
              language,
              "As partes essenciais do app ficam organizadas para uso real, publicação e evolução.",
              "The essential parts of the app stay organized for real use, release and evolution."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[500px] lg:grid-cols-3 lg:grid-rows-3">
          {features.map((feature, index) => (
            <BentoFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default MobileBentoGrid;
