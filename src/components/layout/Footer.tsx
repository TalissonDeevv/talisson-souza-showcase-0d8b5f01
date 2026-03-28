import { Link } from "react-router-dom";
import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { Play, Pause, Music, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { language } = useTheme();
  const currentYear = new Date().getFullYear();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const homePath = language === 'en' ? '/en-us' : '/';

  const navLinks = language === 'pt' ? [
  { name: "Projetos", path: "/projetos" },
  { name: "Serviços", path: "/servicos" },
  { name: "Artigos", path: "/artigos" },
  { name: "Contato", path: "/contato" }] :
  [
  { name: "Projects", path: "/en-us/projects" },
  { name: "Services", path: "/en-us/services" },
  { name: "Articles", path: "/en-us/articles" },
  { name: "Contact", path: "/en-us/contact" }];


  const secondaryLinks = language === 'pt' ? [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Carreira", path: "/carreira" },
  { name: "Livro", path: "/livro" },
  { name: "Privacidade", path: "/politica-de-privacidade" }] :
  [
  { name: "Home", path: "/en-us" },
  { name: "About", path: "/en-us/about" },
  { name: "Career", path: "/en-us/career" },
  { name: "Book", path: "/en-us/book" },
  { name: "Privacy", path: "/en-us/privacy-policy" }];


  const socialLinks = [
  { name: "GitHub", href: "https://github.com/TalinhoDev" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/talinho" },
  { name: "YouTube", href: "https://www.youtube.com/TalissonSouza" }];


  const handlePlayPause = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/congratulations.mp3");
      audioRef.current.volume = 0.4;
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  return (
    <footer className="border-t border-border/30 mt-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="py-8 lg:py-10">
          {/* Logo */}
          <Link to={homePath} className="inline-block mb-5">
            <img src={logo} alt="Talisson Souza" className="h-10 w-auto" loading="lazy" />
          </Link>

          {/* Content grid. all columns aligned */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 items-start">

            {/* 1. Tagline + Social */}
            <div className="flex flex-col gap-3">
              <p className="text-xs text-muted-foreground max-w-[220px]">
                {getText(language, 'Tecnologia. Sistemas. Decisões.', 'Technology. Systems. Decisions.')}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) =>
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {link.name}
                  </a>
                )}
              </div>
            </div>

            {/* 2. Navigation */}
            <div className="flex flex-col gap-2 md:items-center">
              <div className="flex gap-5 flex-wrap md:justify-center">
                {navLinks.map((item) =>
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {item.name}
                  </Link>
                )}
              </div>
              <div className="flex gap-5 flex-wrap md:justify-center">
                {secondaryLinks.map((item) =>
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors duration-200">
                    {item.name}
                  </Link>
                )}
              </div>
            </div>

            {/* 3. Mini Player + Signature */}
            <div className="flex flex-col gap-2.5 md:items-end">
              <motion.button
                onClick={handlePlayPause}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border/40 hover:border-border/70 bg-card/40 backdrop-blur-sm transition-all duration-300">
                <Music className="w-3 h-3 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  Congratulations. Post Malone
                </span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-200">
                  {isPlaying ?
                  <Pause className="w-2.5 h-2.5 text-foreground/70" /> :
                  <Play className="w-2.5 h-2.5 text-foreground/70 ml-px" />
                  }
                </span>
              </motion.button>

              <p className="text-[11px] text-muted-foreground/60 md:text-right italic">
                {getText(language, 'Nada aqui é por acaso.', 'Nothing here is by chance.')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-border/20 flex items-center justify-between">
          <p className="text-[10px] text-muted-foreground/50">
            © {currentYear} Talisson Souza
          </p>
          <p className="text-[10px] text-muted-foreground/40">
            {getText(language, 'Automações, arquitetura de sistemas e escalabilidade como base de cada projeto.', 'Automation, systems architecture and scalability as the foundation of every project.')}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-1.5 rounded-full border border-border/30 hover:border-border/60 text-muted-foreground/50 hover:text-foreground transition-all duration-200"
            aria-label="Back to top">
            
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>);

};

export default Footer;