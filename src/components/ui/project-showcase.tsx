import { useCallback, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProjectShowcaseItem = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
};

type ProjectShowcaseProps = {
  items: ProjectShowcaseItem[];
  previousLabel: string;
  nextLabel: string;
  itemLabel: string;
};

const ProjectShowcase = ({
  items,
  previousLabel,
  nextLabel,
  itemLabel,
}: ProjectShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeItem = items[activeIndex];

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  }, [items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % items.length);
  }, [items.length]);

  if (!activeItem) return null;

  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.42, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <div
      className="overflow-hidden border-y border-border/25 bg-background/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") showPrevious();
        if (event.key === "ArrowRight") showNext();
      }}
      aria-label={itemLabel}
    >
      <div className="grid lg:grid-cols-[minmax(0,1.22fr)_minmax(320px,0.78fr)]">
        <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden border-b border-border/20 bg-[#050507] p-4 sm:min-h-[470px] sm:p-8 lg:min-h-[610px] lg:border-b-0 lg:border-r">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.imageAlt}
              loading="lazy"
              decoding="async"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, scale: 0.99 }}
              transition={transition}
              className="block max-h-[560px] w-full object-contain"
            />
          </AnimatePresence>

          <span className="absolute left-4 top-4 border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/65 backdrop-blur-sm sm:left-6 sm:top-6">
            {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex min-h-[420px] flex-col p-6 sm:p-8 lg:min-h-[610px] lg:p-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeItem.title}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
              transition={transition}
              className="flex-1"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-muted-foreground/65">
                {activeItem.eyebrow}
              </p>
              <h3 className="mt-5 max-w-md font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                {activeItem.title}
              </h3>
              <p className="mt-6 max-w-lg text-sm leading-[1.8] text-muted-foreground">
                {activeItem.description}
              </p>

              <ul className="mt-8 space-y-3" aria-label={`${activeItem.title}: ${itemLabel}`}>
                {activeItem.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center border border-border/35 bg-foreground/[0.035]">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 border-t border-border/20 pt-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label={previousLabel}
                  className="flex h-11 w-11 items-center justify-center border border-border/30 text-foreground transition-colors hover:bg-foreground/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label={nextLabel}
                  className="flex h-11 w-11 items-center justify-center border border-border/30 text-foreground transition-colors hover:bg-foreground/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="flex flex-wrap justify-end gap-1.5" role="group" aria-label={itemLabel}>
                {items.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-current={index === activeIndex ? "true" : undefined}
                    aria-label={`${itemLabel} ${index + 1}: ${item.title}`}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "h-1.5 w-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      index === activeIndex ? "bg-foreground" : "bg-foreground/18 hover:bg-foreground/35"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
