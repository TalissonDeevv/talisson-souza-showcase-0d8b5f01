import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type PageBackdropProps = {
  signature?: string;
  signatureClassName?: string;
  className?: string;
};

export const PageBackdrop = ({ signature, signatureClassName, className }: PageBackdropProps) => (
  <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
    <div
      className="absolute inset-0 opacity-[0.018]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
    <motion.div
      initial={{ opacity: 0, scaleX: 0.72 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1.15, ease }}
      className="absolute left-[8vw] right-[8vw] top-32 h-px origin-left bg-gradient-to-r from-transparent via-foreground/12 to-transparent"
    />
    <div className="absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.025] blur-3xl" />
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    {signature && (
      <motion.img
        src={signature}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 0.16, y: 0, scale: 1 }}
        transition={{ duration: 1.05, delay: 0.08, ease }}
        className={cn(
          "absolute left-1/2 top-[22%] w-[min(92vw,760px)] -translate-x-1/2 select-none object-contain mix-blend-screen",
          signatureClassName
        )}
      />
    )}
  </div>
);

type PageHeroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  signature?: string;
  signatureAlt?: string;
  children?: ReactNode;
  actions?: ReactNode;
  meta?: ReactNode;
  className?: string;
  contentClassName?: string;
  visualClassName?: string;
  titleClassName?: string;
  uppercase?: boolean;
  compact?: boolean;
  visualPlacement?: "none" | "below" | "side";
};

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  signature,
  signatureAlt = "",
  children,
  actions,
  meta,
  className,
  contentClassName,
  visualClassName,
  titleClassName,
  uppercase = true,
  compact = false,
  visualPlacement = "none",
}: PageHeroProps) => (
  <section
    className={cn(
      "relative isolate flex items-center overflow-hidden pt-28",
      compact ? "min-h-[42vh] pb-12 lg:pb-16" : "min-h-[58vh] pb-16 lg:pb-20",
      className
    )}
  >
    <PageBackdrop />
    <div className="container relative z-10 mx-auto px-6 lg:px-8">
      <div
        className={cn(
          visualPlacement === "side" && children
            ? "grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)]"
            : "block"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
          className={cn("max-w-4xl", contentClassName)}
        >
          {signature ? (
            <motion.img
              src={signature}
              alt={signatureAlt}
              loading="eager"
              decoding="async"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 0.78, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease }}
              className="mb-5 h-14 w-auto max-w-[min(68vw,330px)] select-none object-contain object-left mix-blend-screen"
            />
          ) : (
            eyebrow && (
              <motion.span
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease }}
                className="mb-6 inline-block text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/70"
              >
                {eyebrow}
              </motion.span>
            )
          )}

          <h1
            className={cn(
              "max-w-5xl font-serif font-semibold leading-[0.92] tracking-normal text-foreground",
              compact ? "text-[clamp(2.7rem,7.4vw,5.2rem)]" : "text-[clamp(3rem,9vw,6.4rem)]",
              uppercase && "uppercase",
              titleClassName
            )}
          >
            {title}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease }}
              className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}

          {meta && <div className="mt-8">{meta}</div>}
          {actions && <div className="mt-9">{actions}</div>}
        </motion.div>

        {children && visualPlacement === "side" && (
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
            className={cn("relative", visualClassName)}
          >
            {children}
          </motion.div>
        )}
      </div>

      {children && visualPlacement === "below" && (
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease }}
          className={cn("mt-10", visualClassName)}
        >
          {children}
        </motion.div>
      )}
    </div>
  </section>
);

type IdentityPanelProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export const IdentityPanel = ({ children, className, hover = true }: IdentityPanelProps) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.65, ease }}
    whileHover={hover ? { y: -4 } : undefined}
    className={cn(
      "group relative overflow-hidden rounded-2xl border border-border/25 bg-card/35 backdrop-blur-sm",
      "shadow-[0_24px_80px_-56px_hsl(var(--foreground)/0.35)]",
      className
    )}
  >
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.018]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "38px 38px",
      }}
    />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-foreground/[0.04] to-transparent opacity-80" />
    <div className="pointer-events-none absolute left-0 top-0 h-14 w-14 border-l border-t border-foreground/10" />
    <div className="pointer-events-none absolute bottom-0 right-0 h-14 w-14 border-b border-r border-foreground/10" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

type MotionRailProps = {
  items: Array<{ label: ReactNode; value?: ReactNode }>;
  className?: string;
};

export const MotionRail = ({ items, className }: MotionRailProps) => (
  <div className={cn("grid gap-3 sm:grid-cols-3", className)}>
    {items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.14 + index * 0.08, ease }}
        className="rounded-xl border border-border/25 bg-background/35 px-4 py-3 backdrop-blur-sm"
      >
        {item.value && <div className="font-serif text-2xl leading-none text-foreground">{item.value}</div>}
        <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">{item.label}</div>
      </motion.div>
    ))}
  </div>
);
