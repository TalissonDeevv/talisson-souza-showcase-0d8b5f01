import { motion } from "framer-motion";
import { BadgeCheck, Heart, MessageCircle, MoreHorizontal, Repeat2, Share, Sparkles } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

import talissonPortrait from "@/assets/talisson-portrait.png";

const StoryHighlight = () => {
  const { language } = useTheme();
  const careerPath = language === "en" ? "/en-us/career" : "/carreira";

  return (
    <div className="container relative mx-auto px-6 lg:px-8">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border/25 bg-card/45 p-5 shadow-[0_24px_90px_hsl(0_0%_0%/0.35)] backdrop-blur-sm sm:p-6"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-foreground/[0.035] to-transparent" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={talissonPortrait}
              alt="Talisson Souza"
              loading="lazy"
              decoding="async"
              className="h-12 w-12 shrink-0 rounded-full border border-foreground/10 object-cover object-[58%_28%] grayscale"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="truncate text-sm font-semibold text-foreground">Talisson Souza</p>
                <BadgeCheck className="h-4 w-4 shrink-0 text-foreground/70" />
              </div>
              <p className="text-sm text-muted-foreground">@talissondev</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground/70">
            <FaXTwitter className="h-5 w-5" aria-hidden="true" />
            <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>

        <div className="relative z-10 mt-6 space-y-4">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-muted-foreground/65">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {language === "pt" ? "Reflexão" : "Reflection"}
          </span>

          <h2 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
            {language === "pt"
              ? "Capacidade não se mede pela primeira impressão."
              : "Capability is not measured by a first impression."}
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground/90">
            {language === "pt"
              ? "Uma recusa pode tentar resumir quem você é. Eu aprendi a responder construindo, estudando e assumindo responsabilidade pelo que ainda podia nascer dali."
              : "A rejection can try to summarize who you are. I learned to answer by building, studying and taking responsibility for what could still be created from it."}
          </p>

          <p className="text-base leading-relaxed text-muted-foreground/82">
            {language === "pt"
              ? "Essa parte da minha história não é sobre abrir uma empresa cedo. É sobre transformar frustração em postura, trabalho e clareza para continuar."
              : "This part of my story is not about starting a company early. It is about turning frustration into posture, work and clarity to continue."}
          </p>
        </div>

        <Link
          to={careerPath}
          className="relative z-10 mt-6 grid overflow-hidden rounded-2xl border border-border/25 bg-background/40 transition-colors duration-300 hover:border-foreground/18 hover:bg-background/55 sm:grid-cols-[168px_1fr]"
        >
          <div className="relative min-h-[150px] overflow-hidden bg-card/45 sm:min-h-0">
            <img
              src={talissonPortrait}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[58%_26%] grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
          </div>

          <div className="p-4 sm:p-5">
            <p className="text-xs text-muted-foreground/65">talissonsouza.com.br</p>
            <h3 className="mt-2 text-base font-semibold leading-snug text-foreground">
              {language === "pt" ? "Da recusa ao propósito" : "From rejection to purpose"}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground/78">
              {language === "pt"
                ? "Uma leitura sobre carreira, responsabilidade e a decisão de continuar construindo."
                : "A read about career, responsibility and the decision to keep building."}
            </p>
          </div>
        </Link>

        <div className="relative z-10 mt-5 flex items-center justify-between border-t border-border/20 pt-4 text-muted-foreground/70">
          {[
            { Icon: MessageCircle, label: language === "pt" ? "Responder" : "Reply" },
            { Icon: Repeat2, label: language === "pt" ? "Republicar" : "Repost" },
            { Icon: Heart, label: language === "pt" ? "Curtir" : "Like" },
            { Icon: Share, label: language === "pt" ? "Compartilhar" : "Share" },
          ].map(({ Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2 text-xs">
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">{label}</span>
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  );
};

export default StoryHighlight;
