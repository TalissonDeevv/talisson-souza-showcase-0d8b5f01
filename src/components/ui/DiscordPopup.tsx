import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import escritorioLogo from "@/assets/discord/escritorio-logo.png";
import escritorioBanner from "@/assets/discord/escritorio-banner.png";

const DISCORD_LINK = "https://discord.gg/WXwguHWjxg";

const DiscordPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsVisible(false);
  };

  const handleJoinDiscord = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(DISCORD_LINK, "_blank", "noopener,noreferrer");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, x: 20, scale: 0.95 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.4, 0.25, 1] 
          }}
          className="fixed bottom-6 right-6 z-50 max-w-[320px] w-[calc(100%-3rem)]"
        >
          <div 
            className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/95 backdrop-blur-xl"
            style={{
              boxShadow: '0 20px 60px -10px hsl(var(--foreground) / 0.15), 0 10px 30px -10px hsl(var(--foreground) / 0.1)'
            }}
          >
            {/* Banner */}
            <div className="relative h-20 rounded-t-2xl overflow-hidden">
              <img
                src={escritorioBanner}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              
              {/* Close button over banner */}
              <button
                onClick={handleDismiss}
                onTouchEnd={handleDismiss}
                className="absolute top-2 right-2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/60 active:bg-black/70 transition-all duration-200 cursor-pointer backdrop-blur-sm"
                aria-label={getText(language, 'Fechar', 'Close')}
                type="button"
              >
                <X className="w-4 h-4 pointer-events-none" />
              </button>
            </div>

            {/* Logo - outside overflow-hidden */}
            <div className="absolute top-[52px] left-4 z-10">
              <div className="w-11 h-11 rounded-xl border-2 border-card bg-card overflow-hidden shadow-lg">
                <img
                  src={escritorioLogo}
                  alt="Escritório do Talisson"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="relative z-10 pt-7 px-5 pb-5">
              <h3 className="font-serif text-lg text-foreground leading-tight mb-2">
                {getText(language, 'Escritório do Talisson', "Talisson's Office")}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {getText(language, 
                  'Faça parte do meu servidor e acompanhe meu dia a dia como programador e empreendedor. Projetos, networking e muito mais.',
                  'Join my server and follow my daily life as a developer and entrepreneur. Projects, networking and much more.'
                )}
              </p>
              
              <motion.button
                onClick={handleJoinDiscord}
                onTouchEnd={handleJoinDiscord}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full inline-flex items-center justify-center gap-2.5 text-sm font-medium text-primary-foreground bg-foreground rounded-xl py-3 transition-all duration-300 cursor-pointer"
                type="button"
                style={{
                  boxShadow: '0 0 20px hsl(var(--foreground) / 0.1)'
                }}
              >
                <SiDiscord className="w-4 h-4 pointer-events-none" />
                {getText(language, 'Entrar no Discord', 'Join Discord')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiscordPopup;
