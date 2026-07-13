import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BadgeCheck } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { useRelativeTime } from "@/hooks/useRelativeTime";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import authorPhoto from "@/assets/talisson-portrait.png";

interface ArticleAuthorHeaderProps {
  date: string;
  readingTime: number;
}

const ArticleAuthorHeader = ({ date, readingTime }: ArticleAuthorHeaderProps) => {
  const { language } = useTheme();
  const relativeTime = useRelativeTime(date, language === "en" ? "en" : "pt");

  const fullDate = new Date(date).toLocaleDateString(
    language === "pt" ? "pt-BR" : "en-US",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const readingLabel =
    language === "pt" ? `${readingTime} min de leitura` : `${readingTime} min read`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex items-center gap-3 sm:gap-4"
    >
      <Link to={language === "en" ? "/en-us/about" : "/sobre"} className="group shrink-0">
        <img
          src={authorPhoto}
          alt="Talisson Souza"
          className="h-12 w-12 rounded-full object-cover object-[50%_24%] ring-2 ring-border/30 transition-all duration-300 group-hover:ring-foreground/30 sm:h-14 sm:w-14"
          draggable={false}
        />
      </Link>

      <div className="flex min-w-0 flex-col gap-0.5">
        <div className="flex items-center gap-1.5">
          <Link
            to={language === "en" ? "/en-us/about" : "/sobre"}
            className="truncate text-sm font-semibold text-foreground transition-colors duration-200 hover:text-foreground/80 sm:text-base"
          >
            Talisson Souza
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <BadgeCheck className="h-4 w-4 shrink-0 text-foreground/70" />
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs">
                {getText(language, "Usuario verificado", "Verified user")}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground/80 sm:text-sm">
          {getText(
            language,
            "Engenheiro de Software, Fundador & CEO da Cheetah Solutions Network",
            "Software Engineer, Founder & CEO at Cheetah Solutions Network"
          )}
        </p>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="mt-0.5 cursor-default text-[11px] text-muted-foreground/60 sm:text-xs">
                {relativeTime} - {readingLabel}
              </p>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">
              {fullDate}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.div>
  );
};

export default ArticleAuthorHeader;
