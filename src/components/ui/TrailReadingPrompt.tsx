import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { getText } from "@/utils/translations";

let hasShownThisLoad = false;

const TrailReadingPrompt = () => {
  const { language } = useTheme();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [shouldPrompt] = useState(() => (
    location.pathname !== "/trilhas/mercado-programacao" &&
    location.pathname !== "/en-us/trails/market-programming" &&
    location.pathname !== "/sugestoes-artigos" &&
    location.pathname !== "/en-us/article-suggestions" &&
    location.pathname !== "/bio" &&
    location.pathname !== "/en-us/bio"
  ));

  const trailPath = language === "en" ? "/en-us/trails/market-programming" : "/trilhas/mercado-programacao";

  useEffect(() => {
    if (hasShownThisLoad) return;

    hasShownThisLoad = true;
    if (!shouldPrompt) return;

    const showTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 17000);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [shouldPrompt]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "fixed bottom-3 left-3 z-50 w-[calc(100%-1.5rem)] max-w-[340px]",
            "sm:bottom-6 sm:left-6"
          )}
          aria-live="polite"
        >
          <div className="relative isolate overflow-hidden rounded-2xl shadow-[0_22px_70px_hsl(var(--background)/0.55)]">
            <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl border border-border/25 bg-background/88 backdrop-blur-xl [-webkit-backdrop-filter:blur(24px)]" />
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-[0.018]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 p-3.5 sm:p-4"
            >
              <button
                type="button"
                onClick={() => setIsVisible(false)}
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border/20 bg-background/45 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={getText(language, "Fechar convite", "Close invitation")}
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative pr-8">
                <div className="mb-3 flex items-center gap-3 sm:mb-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border/25 bg-foreground/[0.035] sm:h-10 sm:w-10">
                    <BookOpen className="h-4 w-4 text-foreground/75" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/65">
                    {getText(language, "Leitura guiada", "Guided reading")}
                  </span>
                </div>

                <h2 className="font-serif text-base leading-tight text-foreground sm:text-xl">
                  {getText(
                    language,
                    "Antes de trocar de linguagem pela quinta vez, leia isso com calma.",
                    "Before switching languages for the fifth time, read this calmly."
                  )}
                </h2>
                <p className="mt-3 hidden text-sm leading-relaxed text-muted-foreground sm:block">
                  {getText(
                    language,
                    "Uma trilha com 140 artigos para estudar programa\u00e7\u00e3o, entender o mercado e crescer sem depender de atalhos bonitos.",
                    "A 140 article trail to study programming, understand the market and grow without depending on pretty shortcuts."
                  )}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5 sm:gap-3">
                  <Link
                    to={trailPath}
                    onClick={() => setIsVisible(false)}
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/35 bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5 sm:px-4 sm:py-2.5"
                  >
                    {getText(language, "Abrir trilha", "Open trail")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsVisible(false)}
                    className="inline-flex items-center justify-center rounded-full border border-border/25 bg-background/35 px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-4 sm:py-2.5"
                  >
                    {getText(language, "Agora n\u00e3o", "Not now")}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default TrailReadingPrompt;
