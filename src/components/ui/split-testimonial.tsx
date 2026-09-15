import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { feedbacks } from "@/data/feedbacks";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { cn } from "@/lib/utils";

const visibleFeedbacks = feedbacks.slice(0, 7);

export function TestimonialsSplit() {
  const { language } = useTheme();
  const lang = language === "en" ? "en" : "pt";
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const active = visibleFeedbacks[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % visibleFeedbacks.length);
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-0 sm:px-4">
      <div
        role="button"
        tabIndex={0}
        aria-label={getText(language, "Alternar depoimento", "Change testimonial")}
        className="group relative grid cursor-pointer gap-8 overflow-hidden rounded-lg border border-border/45 bg-card/30 p-5 pb-16 shadow-[0_24px_90px_hsl(var(--foreground)/0.035)] outline-none transition-colors duration-300 hover:border-foreground/20 focus-visible:border-foreground/35 sm:p-7 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center lg:gap-12 lg:p-9 lg:pb-16"
        onClick={nextTestimonial}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            nextTestimonial();
          }
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/[0.045] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

        <div className="relative min-w-0 space-y-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.role[lang]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="inline-flex max-w-full items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              <span className="h-px w-8 shrink-0 bg-muted-foreground/45" />
              <span className="truncate">{active.role[lang]}</span>
            </motion.div>
          </AnimatePresence>

          <div className="relative min-h-[340px] sm:min-h-[260px] lg:min-h-[245px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.name}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -34 }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <p className="text-[1.35rem] font-light leading-[1.32] tracking-normal text-foreground sm:text-3xl lg:text-[2.2rem]">
                  "{active.text[lang]}"
                </p>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.footer
              key={active.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="flex min-w-0 items-center gap-4"
            >
              <div className="h-px w-10 shrink-0 bg-foreground/20" />
              <div className="min-w-0">
                <cite className="block truncate text-sm font-medium not-italic text-foreground">{active.name}</cite>
                <p className="mt-1 truncate text-xs text-muted-foreground">{active.role[lang]}</p>
              </div>
            </motion.footer>
          </AnimatePresence>
        </div>

        <div className="relative mx-auto h-64 w-full max-w-[220px] lg:h-[305px] lg:w-60 lg:max-w-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.image}
              initial={{ opacity: 0, filter: "blur(18px)", scale: 1.04 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(18px)", scale: 0.96 }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <div className="h-full w-full overflow-hidden rounded-lg border border-border/55 bg-background/40">
                <img
                  src={active.image}
                  alt={active.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            animate={{
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1 : 0.88,
            }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-2 whitespace-nowrap text-xs text-muted-foreground lg:flex"
          >
            <span>{getText(language, "Próximo", "Next")}</span>
            <ArrowUpRight className="h-3 w-3" />
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-5 flex items-center gap-3 sm:left-7 lg:left-9">
          {visibleFeedbacks.map((feedback, index) => (
            <button
              key={feedback.name}
              type="button"
              aria-label={getText(language, `Ver feedback de ${feedback.name}`, `View feedback from ${feedback.name}`)}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex(index);
              }}
              className="relative p-1"
            >
              <span
                className={cn(
                  "block h-2 w-2 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "scale-100 bg-foreground"
                    : "scale-75 bg-muted-foreground/30 hover:scale-100 hover:bg-muted-foreground/55"
                )}
              />
              {index === activeIndex && (
                <motion.span
                  layoutId="homeTestimonialActiveDot"
                  className="absolute inset-0 rounded-full border border-foreground/30"
                  transition={{ duration: 0.25 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
