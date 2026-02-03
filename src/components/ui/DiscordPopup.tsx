import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { SiDiscord } from "react-icons/si";

const STORAGE_KEY = "discord_popup_dismissed";
const DISCORD_LINK = "https://discord.gg/WXwguHWjxg";

const DiscordPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the popup
    const isDismissed = localStorage.getItem(STORAGE_KEY);
    
    if (!isDismissed) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const handleJoinDiscord = () => {
    window.open(DISCORD_LINK, "_blank", "noopener,noreferrer");
    handleDismiss();
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
          className="fixed bottom-6 right-6 z-50 max-w-[320px] w-full"
        >
          <div 
            className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/90 backdrop-blur-xl p-5"
            style={{
              boxShadow: '0 20px 60px -10px hsl(var(--foreground) / 0.15), 0 10px 30px -10px hsl(var(--foreground) / 0.1)'
            }}
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent pointer-events-none" />
            
            {/* Top highlight line */}
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 p-1.5 rounded-full text-muted-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-200"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl border border-border/30 bg-foreground/5 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-foreground/70" />
                </div>
                <h3 className="font-serif text-lg text-foreground leading-tight">
                  Escritório do Talisson
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Faça parte do meu servidor e acompanhe meu dia a dia como programador e empreendedor. Projetos, networking e muito mais.
              </p>
              
              {/* CTA Button */}
              <motion.button
                onClick={handleJoinDiscord}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full inline-flex items-center justify-center gap-2.5 text-sm font-medium text-primary-foreground bg-foreground rounded-xl py-3 transition-all duration-300"
                style={{
                  boxShadow: '0 0 20px hsl(var(--foreground) / 0.1)'
                }}
              >
                <SiDiscord className="w-4 h-4" />
                Entrar no Discord
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiscordPopup;