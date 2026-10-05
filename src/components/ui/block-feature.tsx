import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Atom,
  Braces,
  Component,
  Figma,
  Layers3,
  MousePointer2,
  PanelsTopLeft,
  Sparkles,
  Wind,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getText } from "@/utils/translations";

type BlockFeatureProps = {
  language: string;
};

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    whileHover={{ y: -3 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className={cn(
      "relative flex min-h-[288px] flex-col overflow-hidden rounded-lg border border-border/25 bg-card/20 transition-colors duration-300 hover:border-foreground/20 hover:bg-foreground/[0.025]",
      className
    )}
  >
    {children}
  </motion.article>
);

const CardTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="px-6 pb-7 text-center text-xl font-medium leading-7 text-foreground">
    {children}
  </h3>
);

const FoundationGrid = () => {
  const cells = Array.from({ length: 15 });

  return (
    <div className="relative flex-1 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-5 [mask-image:radial-gradient(ellipse_78%_78%_at_50%_50%,#000_38%,transparent_90%)]">
          {cells.map((_, index) => (
            <div
              key={index}
              className={cn(
                "flex h-[68px] w-[68px] items-center justify-center border border-border/30",
                index === 7 && "bg-foreground/[0.07]"
              )}
            >
              {index === 7 && <Component className="h-8 w-8 text-foreground" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCanvas = () => (
  <div className="relative flex min-h-[288px] flex-1 items-center justify-center overflow-hidden p-7" aria-hidden="true">
    <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:28px_28px]" />
    <div className="relative w-full max-w-[420px] border border-border/35 bg-background/90 p-4 shadow-[0_24px_80px_hsl(var(--background)/0.85)]">
      <div className="flex items-center justify-between border-b border-border/25 pb-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-foreground/25" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/10" />
        </div>
        <span className="h-1.5 w-20 bg-foreground/10" />
      </div>
      <div className="grid grid-cols-[0.36fr_0.64fr] gap-3 pt-4">
        <div className="space-y-2 border-r border-border/20 pr-3">
          <span className="block h-2 w-3/4 bg-foreground/25" />
          <span className="block h-2 w-full bg-foreground/10" />
          <span className="block h-2 w-4/5 bg-foreground/10" />
          <span className="mt-6 block h-16 border border-border/25 bg-foreground/[0.025]" />
        </div>
        <div className="space-y-3">
          <span className="block h-3 w-1/2 bg-foreground/30" />
          <span className="block h-2 w-full bg-foreground/10" />
          <span className="block h-2 w-5/6 bg-foreground/10" />
          <div className="grid grid-cols-2 gap-2 pt-2">
            <span className="h-14 border border-border/25 bg-foreground/[0.03]" />
            <span className="h-14 border border-border/25 bg-foreground/[0.03]" />
          </div>
        </div>
      </div>
      <MousePointer2 className="absolute bottom-7 right-10 h-6 w-6 fill-foreground text-background" />
    </div>
  </div>
);

const FigmaOrbit = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden" aria-hidden="true">
      <motion.div
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute h-36 w-60 rounded-[50%] border border-border/35"
      >
        <Sparkles className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground" />
        <Sparkles className="absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-foreground/65" />
      </motion.div>
      <div className="relative flex h-24 w-24 items-center justify-center border border-border/30 bg-background/70 shadow-[0_20px_70px_hsl(var(--foreground)/0.05)]">
        <Figma className="h-12 w-12 text-foreground" />
      </div>
    </div>
  );
};

const PrototypeEditor = () => {
  const lines = [
    ["component", "Button"],
    ["variant", "primary"],
    ["state", "loading"],
    ["motion", "feedback"],
  ];

  return (
    <div className="relative flex-1 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-6 bottom-0 h-28 bg-foreground/[0.025] blur-2xl" />
      <div className="absolute -bottom-5 left-4 right-4 overflow-hidden border border-border/30 bg-background/90">
        <div className="flex items-center justify-between border-b border-border/25 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-foreground/30" />
            <span className="h-2 w-2 rounded-full bg-foreground/20" />
            <span className="h-2 w-2 rounded-full bg-foreground/10" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">DesignTokens.ts</span>
        </div>
        <div className="space-y-3 p-5 font-mono text-xs">
          {lines.map(([property, value]) => (
            <div key={property} className="grid grid-cols-[88px_1fr] gap-3">
              <span className="text-muted-foreground">{property}</span>
              <span className="text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const stackItems = [
  { label: "Figma", Icon: Figma },
  { label: "TypeScript", Icon: Braces },
  { label: "React", Icon: Atom },
  { label: "Tailwind CSS", Icon: Wind },
  { label: "Componentes", Icon: Component },
  { label: "Motion", Icon: Sparkles },
];

const ToolBelt = ({ language }: { language: string }) => {
  const reducedMotion = useReducedMotion();
  const items = [...stackItems, ...stackItems];

  return (
    <div
      className="relative flex flex-1 items-center overflow-hidden"
      aria-label={getText(
        language,
        "Figma, TypeScript, React, Tailwind CSS, componentes e animação",
        "Figma, TypeScript, React, Tailwind CSS, components and motion"
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-card/95 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-card/95 to-transparent" />
      <motion.div
        animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex min-w-max gap-4 px-4"
      >
        {items.map(({ label, Icon }, index) => (
          <div
            key={`${label}-${index}`}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-border/30 bg-background/80"
            title={label}
          >
            <Icon className="h-7 w-7 text-foreground/80" aria-hidden="true" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MotionStudy = () => {
  const reducedMotion = useReducedMotion();
  const pieces = [
    { x: -58, y: -42, delay: 0 },
    { x: 54, y: -38, delay: 0.35 },
    { x: -46, y: 45, delay: 0.7 },
    { x: 52, y: 42, delay: 1.05 },
  ];

  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden" aria-hidden="true">
      <div className="absolute h-36 w-36 rounded-full border border-border/25" />
      <div className="absolute h-24 w-24 rounded-full border border-border/20" />
      <Workflow className="relative z-10 h-9 w-9 text-foreground" />
      {pieces.map((piece, index) => (
        <motion.span
          key={index}
          className="absolute h-7 w-7 rounded-md border border-border/35 bg-foreground/[0.06]"
          style={{ x: piece.x, y: piece.y }}
          animate={reducedMotion ? undefined : { scale: [0.8, 1.1, 0.8], rotate: [0, 14, 0] }}
          transition={{ duration: 3.2, delay: piece.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const BlockFeature = ({ language }: BlockFeatureProps) => (
  <section id="sistema-uiux" className="relative scroll-mt-28 overflow-hidden py-14 lg:py-20">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/30 to-transparent" />
    </div>

    <div className="container relative mx-auto px-6 lg:px-8">
      <ScrollReveal>
        <div className="mx-auto mb-10 grid max-w-6xl gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
              {getText(language, "Sistema de design em prática", "Design system in practice")}
            </span>
            <h2 className="max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {getText(language, "Do Figma ao produto, sem perder intenção.", "From Figma to product without losing intent.")}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-[1.8] text-muted-foreground lg:pb-1">
            {getText(
              language,
              "A interface é tratada como sistema: fundamentos, componentes, protótipo, comportamento e documentação caminham juntos para reduzir ruído entre design e desenvolvimento.",
              "The interface is treated as a system: foundations, components, prototypes, behavior and documentation move together to reduce friction between design and development."
            )}
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <div className="grid gap-4 lg:grid-cols-[1fr_1.25fr_1fr]">
          <Card className="pt-8">
            <CardTitle>{getText(language, "Fundamentos antes da aparência", "Foundations before appearance")}</CardTitle>
            <FoundationGrid />
          </Card>

          <Card>
            <h3 className="sr-only">{getText(language, "Interface construída como produto", "Interface built as a product")}</h3>
            <ProductCanvas />
          </Card>

          <Card className="pt-4">
            <FigmaOrbit />
            <CardTitle>{getText(language, "Figma conectado ao processo", "Figma connected to the process")}</CardTitle>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="min-h-[264px] pt-7">
            <CardTitle>{getText(language, "Componentes documentados para o handoff", "Documented components for handoff")}</CardTitle>
            <PrototypeEditor />
          </Card>

          <Card className="min-h-[264px]">
            <h3 className="sr-only">{getText(language, "Ferramentas integradas ao produto", "Tools integrated into the product")}</h3>
            <ToolBelt language={language} />
          </Card>

          <Card className="min-h-[264px] pt-7">
            <CardTitle>{getText(language, "Movimento que explica e responde", "Motion that explains and responds")}</CardTitle>
            <MotionStudy />
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default BlockFeature;
