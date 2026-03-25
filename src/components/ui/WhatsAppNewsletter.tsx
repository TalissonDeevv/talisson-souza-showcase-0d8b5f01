import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { MessageCircle, ArrowRight } from "lucide-react";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";

interface WhatsAppNewsletterProps {
  variant?: "card" | "inline" | "article-footer";
  className?: string;
}

const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029Vb7TfXuLI8YWaMpsJ13v";

const WhatsAppNewsletter = ({ variant = "card", className = "" }: WhatsAppNewsletterProps) => {
  const { language } = useTheme();

  const content = (
    <div className={className}>
      {variant === "article-footer" && (
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="w-4 h-4 text-muted-foreground/60" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60 font-medium">
            Newsletter
          </span>
        </div>
      )}

      <h3 className="font-serif text-lg lg:text-xl text-foreground mb-2 leading-tight">
        {getText(language,
          "Receba conteúdo direto no WhatsApp",
          "Get content straight on WhatsApp"
        )}
      </h3>
      <p className="text-sm text-muted-foreground/60 leading-relaxed mb-6 max-w-md">
        {getText(language,
          "Tecnologia aplicada a negócios digitais, construção de projetos e desenvolvimento estratégico. Conteúdo direto, estruturado e voltado para quem quer crescer com visão de longo prazo.",
          "Technology applied to digital businesses, project building and strategic development. Direct, structured content for those who want to grow with a long-term vision."
        )}
      </p>

      <motion.a
        href={WHATSAPP_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-3 h-10 px-6 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all duration-200 group"
      >
        <MessageCircle className="w-4 h-4" />
        {getText(language, "Seguir no WhatsApp", "Follow on WhatsApp")}
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </motion.a>
    </div>
  );

  if (variant === "card" || variant === "article-footer") {
    return (
      <GlassCard className="p-6 lg:p-8">
        {content}
      </GlassCard>
    );
  }

  return content;
};

export default WhatsAppNewsletter;
