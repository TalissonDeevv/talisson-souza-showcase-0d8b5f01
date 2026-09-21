import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type CommunityShowcaseItem = {
  name: string;
  shortName?: string;
  role: string;
  status: string;
  description: string;
  context: string;
  logo?: string;
  banner?: string;
  link: string;
  cta: string;
  featured?: boolean;
};

type CommunityShowcaseProps = {
  items: CommunityShowcaseItem[];
  externalLabel: string;
};

const CommunityShowcase = ({ items, externalLabel }: CommunityShowcaseProps) => (
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
    {items.map((item, index) => {
      const featured = item.featured || index === 0;
      const isLast = index === items.length - 1;
      const gridSpan =
        index === 0
          ? "lg:col-span-7"
          : index === 1
            ? "lg:col-span-5"
            : index === 2
              ? "lg:col-span-5"
              : index === 3
                ? "lg:col-span-7"
                : "md:col-span-2 lg:col-span-12";

      return (
        <motion.a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${item.cta}: ${item.name}`}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "group relative overflow-hidden rounded-[1.75rem] border border-border/25 bg-card shadow-[0_24px_70px_-46px_hsl(var(--foreground)/0.55)] transition-colors duration-500 hover:border-foreground/30 focus-visible:border-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0",
            gridSpan
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden bg-secondary/20",
              isLast
                ? "aspect-[1.7/1] sm:aspect-[2.4/1] lg:aspect-[3.35/1]"
                : featured
                  ? "aspect-[2.15/1]"
                  : "aspect-[1.8/1]"
            )}
          >
            {item.banner ? (
              <img
                src={item.banner}
                alt={`${item.name} banner`}
                className="block h-full w-full scale-[1.01] object-cover brightness-[0.78] saturate-[0.78] contrast-[1.06] transition duration-700 group-hover:scale-[1.045] group-hover:brightness-90 group-hover:saturate-100"
                loading={featured ? "eager" : "lazy"}
                decoding="async"
              />
            ) : (
              <div className="h-full w-full bg-[linear-gradient(135deg,hsl(var(--foreground)/0.12),transparent_55%)]" />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--card)/0.08)_0%,hsl(var(--card)/0.16)_38%,hsl(var(--card))_100%)]" />
            <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-4">
              <span className="rounded-full border border-foreground/20 bg-background/75 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-md">
                {item.status}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-background/70 text-foreground/75 backdrop-blur-md">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            {item.logo && (
              <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-foreground/20 bg-background/90 p-2 shadow-[0_12px_34px_hsl(0_0%_0%/0.32)] sm:h-16 sm:w-16">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="h-full w-full object-contain"
                  loading={featured ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            )}
          </div>

          <div className={cn("relative flex flex-col", featured || isLast ? "p-6 lg:p-8" : "p-5 lg:p-6")}>
            <span className="pointer-events-none absolute right-6 top-5 font-serif text-5xl leading-none text-foreground/[0.045]" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/60">{item.context}</p>
              {item.shortName && <span className="mr-12 font-serif text-2xl text-foreground/20">{item.shortName}</span>}
            </div>
            <div className={cn(isLast && "lg:grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-12")}>
              <div>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-foreground lg:text-3xl">{item.name}</h3>
                <p className="mt-4 border-l-2 border-foreground/25 pl-3 text-sm font-semibold leading-relaxed text-foreground/85">
                  {item.role}
                </p>
              </div>
              <div>
                <p className="mt-4 max-w-3xl text-sm leading-[1.75] text-muted-foreground">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <span className="relative">
                    {item.cta}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-foreground/50" aria-hidden="true" />
                  <span className="sr-only">{externalLabel}</span>
                </span>
              </div>
            </div>
          </div>
        </motion.a>
      );
    })}
  </div>
);

export default CommunityShowcase;
