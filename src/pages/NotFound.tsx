import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, MessageSquare, ArrowLeft } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import illustration from "@/assets/404-illustration.svg";

const DISCORD_LINK = "https://discord.gg/WXwguHWjxg";

const NotFound = () => {
  const location = useLocation();
  const { language } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const homePath = language === 'en' ? '/en-us' : '/';
  const contactPath = language === 'en' ? '/en-us/contact' : '/contato';

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={illustration} 
              alt="404 illustration" 
              className="w-full max-w-md mx-auto mb-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-4 font-medium">
              {getText(language, 'Erro 404', '404 Error')}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-[1.05]">
              {getText(language, 'Página não encontrada', 'Page not found')}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg mx-auto mb-10">
              {getText(
                language,
                'O conteúdo que você procura não existe ou foi movido. Use os links abaixo para continuar navegando.',
                'The content you are looking for does not exist or has been moved. Use the links below to continue browsing.'
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to={homePath}
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300 w-full sm:w-auto justify-center"
              style={{ boxShadow: '0 0 30px hsl(var(--foreground) / 0.15)' }}
            >
              <Home className="w-4 h-4" />
              {getText(language, 'Voltar para a Home', 'Back to Home')}
            </Link>

            <Link
              to={contactPath}
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-foreground border border-border/30 bg-card/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:border-foreground/20 w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-4 h-4" />
              {getText(language, 'Relatar erro', 'Report error')}
            </Link>

            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-foreground border border-border/30 bg-card/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:border-foreground/20 w-full sm:w-auto justify-center"
            >
              <SiDiscord className="w-4 h-4" />
              {getText(language, 'Entrar no Discord', 'Join Discord')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {getText(language, 'Voltar à página anterior', 'Go back to previous page')}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
