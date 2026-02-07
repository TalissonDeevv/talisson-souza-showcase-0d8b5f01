import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

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
            className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/95 backdrop-blur-xl p-5"
            style={{
              boxShadow: '0 20px 60px -10px hsl(var(--foreground) / 0.15), 0 10px 30px -10px hsl(var(--foreground) / 0.1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent pointer-events-none" />
            
            {/* Close button - larger touch target */}
            <button
              onClick={handleDismiss}
              onTouchEnd={handleDismiss}
              className="absolute top-2 right-2 z-20 w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground/60 hover:text-foreground hover:bg-foreground/5 active:bg-foreground/10 transition-all duration-200 cursor-pointer"
              aria-label={getText(language, 'Fechar', 'Close')}
              type="button"
            >
              <X className="w-5 h-5 pointer-events-none" />
            </button>
            
            <div className="relative z-10 pr-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl border border-border/30 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <SiDiscord className="w-5 h-5 text-foreground/70" />
                </div>
                <h3 className="font-serif text-lg text-foreground leading-tight">
                  {getText(language, 'Escritório do Talisson', "Talisson's Office")}
                </h3>
              </div>
              
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
