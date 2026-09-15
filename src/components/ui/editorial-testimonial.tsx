import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { cn } from "@/lib/utils";

export interface EditorialTestimonialItem {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image: string;
}

interface TestimonialsEditorialProps {
  title?: string;
  description?: string;
  testimonials: EditorialTestimonialItem[];
  className?: string;
}

export default function TestimonialsEditorial({
  title,
  description,
  testimonials,
  className,
}: TestimonialsEditorialProps) {
  const { language } = useTheme();
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (testimonials.length === 0) {
    return null;
  }

  const handleChange = (index: number) => {
    if (index === active || isTransitioning) return;

    setIsTransitioning(true);
    window.setTimeout(() => {
      setActive(index);
      window.setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handlePrev = () => {
    const newIndex = active === 0 ? testimonials.length - 1 : active - 1;
    handleChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = active === testimonials.length - 1 ? 0 : active + 1;
    handleChange(newIndex);
  };

  const current = testimonials[active];

  return (
    <section className={cn("w-full bg-transparent text-foreground", className)}>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-0 lg:px-8">
        {(title || description) && (
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            {title && (
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base font-medium leading-relaxed text-muted-foreground sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="mx-auto w-full max-w-2xl rounded-lg border border-border/45 bg-card/25 px-5 py-12 shadow-[0_24px_90px_hsl(var(--foreground)/0.035)] sm:px-6 sm:py-16">
          <div className="flex items-start gap-5 sm:gap-8">
            <span
              className="select-none text-[72px] font-light leading-none text-foreground/10 transition-all duration-500 sm:text-[120px]"
              style={{ fontFeatureSettings: '"tnum"' }}
              aria-hidden="true"
            >
              {String(active + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0 flex-1 pt-3 sm:pt-6">
              <blockquote
                className={cn(
                  "text-xl font-light leading-relaxed tracking-normal text-foreground transition-all duration-300 md:text-3xl",
                  isTransitioning ? "translate-x-4 opacity-0" : "translate-x-0 opacity-100"
                )}
              >
                {current.quote}
              </blockquote>

              <div
                className={cn(
                  "group mt-10 cursor-default transition-all delay-100 duration-300",
                  isTransitioning ? "opacity-0" : "opacity-100"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-foreground/10 transition-all duration-300 group-hover:ring-foreground/30">
                    <img
                      src={current.image}
                      alt={current.author}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-foreground">{current.author}</p>
                    <p className="truncate text-sm text-muted-foreground">
                      {current.role}
                      {current.company && (
                        <>
                          <span className="mx-2 text-foreground/20">/</span>
                          <span className="transition-colors duration-300 group-hover:text-foreground">
                            {current.company}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.author}
                    type="button"
                    onClick={() => handleChange(index)}
                    className="group relative py-4"
                    aria-label={getText(
                      language,
                      `Ver depoimento de ${testimonial.author}`,
                      `View testimonial from ${testimonial.author}`
                    )}
                    aria-current={index === active ? "true" : undefined}
                  >
                    <span
                      className={cn(
                        "block h-px transition-all duration-500 ease-out",
                        index === active
                          ? "w-12 bg-foreground"
                          : "w-6 bg-foreground/20 group-hover:w-8 group-hover:bg-foreground/40"
                      )}
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-full p-2 text-foreground/45 transition-all duration-300 hover:bg-foreground/5 hover:text-foreground"
                aria-label={getText(language, "Depoimento anterior", "Previous testimonial")}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-full p-2 text-foreground/45 transition-all duration-300 hover:bg-foreground/5 hover:text-foreground"
                aria-label={getText(language, "Próximo depoimento", "Next testimonial")}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
