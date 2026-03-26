import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BadgeCheck } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { useRelativeTime } from "@/hooks/useRelativeTime";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import authorPhoto from "@/assets/author-talisson.png";

interface ArticleAuthorHeaderProps {
  date: string;
  readingTime: number;
}

const ArticleAuthorHeader = ({ date, readingTime }: ArticleAuthorHeaderProps) => {
  const { language } = useTheme();
  const relativeTime = useRelativeTime(date, language === 'en' ? 'en' : 'pt');

  const fullDate = new Date(date).toLocaleDateString(
    language === 'pt' ? 'pt-BR' : 'en-US',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  const readingLabel = language === 'pt'
    ? `${readingTime} min de leitura`
    : `${readingTime} min read`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex items-center gap-3 sm:gap-4 mb-6"
    >
      <Link
        to={language === 'en' ? '/en-us/about' : '/sobre'}
        className="shrink-0 group"
      >
        <img
          src={authorPhoto}
          alt="Talisson Souza"
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-border/30 group-hover:ring-primary/50 transition-all duration-300"
        />
      </Link>

      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5">
          <Link
            to={language === 'en' ? '/en-us/about' : '/sobre'}
            className="text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors duration-200"
          >
            Talisson Souza
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <BadgeCheck className="w-4 h-4 text-primary shrink-0 cursor-default" />
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs">
                {getText(language, 'Usuário Verificado', 'Verified User')}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground/80 leading-snug">
          {getText(language,
            'Engenheiro de Software, Fundador & CEO da Cheetah Solutions',
            'Software Engineer, Founder & CEO at Cheetah Solutions'
          )}
        </p>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-[11px] sm:text-xs text-muted-foreground/60 mt-0.5 cursor-default">
                {relativeTime} • {readingLabel}
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
