import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

import talissonPortrait from "@/assets/talisson-portrait.png";
import { SIGNATURE_VECTOR_PATH, SIGNATURE_VECTOR_VIEWBOX } from "./signatureVectorPath";

const StoryHighlight = () => {
  const { language } = useTheme();

  return (
    <div className="container relative mx-auto px-6 lg:px-8">
      <div className="grid min-h-[460px] grid-cols-1 items-center gap-8 overflow-visible lg:grid-cols-12 lg:gap-4 xl:gap-0">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 lg:col-span-6"
        >
          <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
            {language === "pt" ? "Reflexão" : "Reflection"}
          </span>

          <h2 className="max-w-xl font-serif text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-5xl">
            {language === "pt" ? "Capacidade não se mede pela primeira impressão." : "Capability is not measured by a first impression."}
          </h2>

          <div className="mt-7 max-w-xl space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground/90">
              {language === "pt"
                ? "Uma recusa pode tentar resumir quem você é. Eu aprendi a responder construindo, estudando e assumindo responsabilidade pelo que ainda podia nascer dali."
                : "A rejection can try to summarize who you are. I learned to answer by building, studying and taking responsibility for what could still be created from it."}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground/80">
              {language === "pt"
                ? "Essa parte da minha história não é sobre abrir uma empresa cedo. É sobre transformar frustração em postura, trabalho e clareza para continuar."
                : "This part of my story is not about starting a company early. It is about turning frustration into posture, work and clarity to continue."}
            </p>
          </div>

          <div className="mt-8 w-[220px] text-foreground/78 sm:w-[260px]" aria-hidden="true">
            <svg viewBox={SIGNATURE_VECTOR_VIEWBOX} className="h-auto w-full overflow-visible">
              <path
                d={SIGNATURE_VECTOR_PATH}
                fill="currentColor"
                fillRule="evenodd"
                className="animated-signature__static"
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34, scale: 1.02 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex min-h-[390px] flex-col items-center justify-center overflow-visible lg:col-span-6 lg:min-h-[540px]"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-foreground/[0.055] via-transparent to-transparent blur-2xl sm:h-[430px] sm:w-[430px]" />

          <div className="relative h-[264px] w-[264px] sm:h-[318px] sm:w-[318px] lg:h-[360px] lg:w-[360px]">
            <div className="pointer-events-none absolute -inset-4 rounded-full border border-foreground/[0.045]" />
            <div className="pointer-events-none absolute -inset-8 rounded-full border border-foreground/[0.025]" />
            <div className="pointer-events-none absolute -inset-11 rounded-full border border-foreground/[0.018]" />

            <div className="relative h-full w-full overflow-hidden rounded-full border border-foreground/[0.08] bg-card/35 p-2 shadow-[0_0_0_1px_hsl(var(--foreground)/0.035),0_28px_90px_hsl(0_0%_0%/0.5)]">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
                <img
                  src={talissonPortrait}
                  alt="Talisson Souza"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full scale-[1.06] object-cover object-[58%_28%] grayscale"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,transparent_0%,transparent_48%,hsl(var(--background)/0.4)_74%,hsl(var(--background)/0.82)_100%)]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/48 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StoryHighlight;
