import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { SiWhatsapp, SiLinkedin, SiX } from "react-icons/si";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import ArticleAudioAutoButton from "./ArticleAudioAutoButton";

interface ShareButtonsProps {
  title: string;
  url?: string;
  className?: string;
  showAudio?: boolean;
}

const ShareButtons = ({ title, url, className = "", showAudio = true }: ShareButtonsProps) => {
  const { language } = useTheme();
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: SiWhatsapp,
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:text-[#25D366]"
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:text-[#0A66C2]"
    },
    {
      name: "X",
      icon: SiX,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:text-foreground"
    }
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`flex items-center gap-4 ${className}`}
    >
      <span className="text-xs text-muted-foreground/70 tracking-wide">
        {getText(language, 'Compartilhar', 'Share')}
      </span>
      
      <div className="flex items-center gap-2">
        {shareLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-9 h-9 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-foreground/20 ${link.color}`}
            aria-label={`Share on ${link.name}`}
          >
            <link.icon className="w-4 h-4" />
          </motion.a>
        ))}
        
        {typeof navigator !== 'undefined' && navigator.share && (
          <motion.button
            onClick={handleShare}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-foreground/20 hover:text-foreground"
            aria-label="Share"
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
        )}
      </div>
      
      {showAudio && <ArticleAudioAutoButton />}
    </motion.div>
  );
};

export default ShareButtons;
