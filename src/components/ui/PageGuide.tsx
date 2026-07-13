import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type PageGuideItem = {
  label?: string;
  title: string;
  description?: string;
  href?: string;
};

type PageGuideProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: PageGuideItem[];
  className?: string;
};

export const PageGuide = ({ eyebrow, title, description, items, className }: PageGuideProps) => (
  <section className={cn("relative z-10 py-6", className)}>
    <div className="container mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="relative overflow-hidden border-y border-border/20 py-7"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="relative grid gap-7 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
          <div>
            {eyebrow && (
              <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground/60">
                {eyebrow}
              </span>
            )}
            <h2 className="max-w-xl font-serif text-2xl leading-tight text-foreground sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          <div className="grid gap-px overflow-hidden border border-border/20 bg-border/20 sm:grid-cols-2">
            {items.map((item, index) => {
              const content = (
                <>
                  <span className="font-serif text-3xl leading-none text-foreground/14 transition-colors duration-300 group-hover:text-foreground/30">
                    {item.label ?? String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-sm font-medium leading-tight text-foreground">{item.title}</span>
                    {item.description && (
                      <span className="mt-2 block text-xs leading-relaxed text-muted-foreground/60">{item.description}</span>
                    )}
                  </span>
                  <ArrowRight className="h-4 w-4 justify-self-end text-foreground/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground/70" />
                </>
              );

              return (
                <a
                  key={`${item.title}-${index}`}
                  href={item.href ?? "#"}
                  className="group grid min-h-[112px] grid-cols-[54px_1fr_auto] gap-4 bg-background/94 p-5 transition-colors hover:bg-foreground/[0.035]"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
