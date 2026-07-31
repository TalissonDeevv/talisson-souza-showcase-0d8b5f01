import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "@/contexts/ThemeContext";

import talissonPortrait from "@/assets/talisson-portrait.png";

const StoryHighlight = () => {
  const { language } = useTheme();

  const tweetText = language === "pt"
    ? "Capacidade não se mede pela primeira impressão. Uma recusa pode tentar resumir quem você é. Eu aprendi a responder construindo, estudando e assumindo responsabilidade pelo que ainda podia nascer dali."
    : "Capability is not measured by a first impression. A rejection can try to summarize who you are. I learned to answer by building, studying and taking responsibility for what could still be created from it.";

  return (
    <div className="container relative mx-auto px-6 lg:px-8">
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-[512px] rounded-2xl border border-white/10 bg-[#101010] p-5 text-white shadow-2xl shadow-black/40 sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={talissonPortrait}
              alt="Talisson Souza"
              loading="lazy"
              decoding="async"
              className="h-12 w-12 shrink-0 rounded-full object-cover object-[58%_28%]"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="truncate text-base font-semibold leading-tight text-white">Talisson Souza</p>
                <BadgeCheck className="h-4 w-4 shrink-0 fill-[#1d9bf0] text-white" aria-hidden="true" />
              </div>
              <p className="mt-0.5 text-sm leading-tight text-white/55">@talissondev</p>
            </div>
          </div>

          <FaXTwitter className="mt-1 h-5 w-5 shrink-0 text-white/55" aria-hidden="true" />
        </div>

        <p className="mt-5 text-[15.5px] leading-[1.55] text-white/90 sm:text-base">
          {tweetText}{" "}
          <span className="text-white/48">
            {language === "pt" ? "talissonsouza.com.br/carreira" : "talissonsouza.com.br/en-us/career"}
          </span>
        </p>
      </motion.article>
    </div>
  );
};

export default StoryHighlight;
