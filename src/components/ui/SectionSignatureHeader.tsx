import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const premiumEase = [0.16, 1, 0.3, 1] as const;

type SectionSignatureHeaderProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  signature: string;
  action?: ReactNode;
  className?: string;
  contentClassName?: string;
  signatureClassName?: string;
  titleClassName?: string;
  asideClassName?: string;
  align?: "left" | "center";
};

const SectionSignatureHeader = ({
  eyebrow,
  title,
  subtitle,
  signature,
  action,
  className,
  contentClassName,
  signatureClassName,
  titleClassName,
  asideClassName,
  align = "left",
}: SectionSignatureHeaderProps) => {
  const centered = align === "center";

  return (
    <div className={cn("relative isolate", centered && "text-center", className)}>
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, delay: 0.06, ease: premiumEase }}
        className={cn(
          "relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.82fr)] lg:items-center",
          centered && "mx-auto max-w-4xl lg:block",
          contentClassName
        )}
      >
        <div className={cn("relative min-w-0", centered && "mx-auto")}>
          <motion.img
            src={signature}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            initial={{ opacity: 0, y: 14, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 0.72, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: premiumEase }}
            className={cn(
              "relative z-10 mb-4 h-14 w-auto max-w-[min(68vw,320px)] select-none object-contain object-left mix-blend-screen sm:h-16 lg:h-[72px]",
              centered && "mx-auto object-center",
              signatureClassName
            )}
          />

          <span className="sr-only">
            {eyebrow}
          </span>

          <h2
            className={cn(
              "relative z-10 font-serif text-[clamp(2.65rem,10vw,4.6rem)] font-semibold uppercase leading-[0.98] tracking-normal text-foreground sm:text-6xl lg:text-[4.7rem]",
              centered && "mx-auto",
              titleClassName
            )}
          >
            {title}
          </h2>
        </div>

        {(subtitle || action) && (
          <div
            className={cn(
              "relative z-10 max-w-xl lg:justify-self-end",
              centered && "mx-auto mt-7",
              asideClassName
            )}
          >
            {subtitle && (
              <p className="text-base leading-relaxed text-muted-foreground/90">
                {subtitle}
              </p>
            )}

            {action && <div className={cn(subtitle ? "mt-8" : "mt-0")}>{action}</div>}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SectionSignatureHeader;
