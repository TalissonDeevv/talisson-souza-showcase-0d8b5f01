import { Link } from "react-router-dom";
import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { Play, Pause, Music } from "lucide-react";
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
    { name: "Contato", path: "/contato" },
  ] : [
    { name: "Projects", path: "/en-us/projects" },
    { name: "Services", path: "/en-us/services" },
    { name: "Articles", path: "/en-us/articles" },
    { name: "Contact", path: "/en-us/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/TalinhoDev" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/talinho" },
    { name: "YouTube", href: "https://www.youtube.com/TalissonSouza" },
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start">

            {/* 1 — Brand */}
            <div>
              <Link to={homePath} className="inline-block">
                <img src={logo} alt="Talisson Souza" className="h-10 w-auto" loading="lazy" />
              </Link>
              <p className="text-xs text-muted-foreground mt-1.5 max-w-[220px]">
                Full Stack Developer & CEO
              </p>
              <div className="flex gap-3 mt-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* 2 — Navigation */}
            <div className="flex gap-5 flex-wrap md:justify-center">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 3 — Mini Player + Signature */}
            <div className="md:flex md:flex-col md:items-end">
              <motion.button
                onClick={handlePlayPause}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border/40 hover:border-border/70 bg-card/40 backdrop-blur-sm transition-all duration-300"
              >
                <Music className="w-3 h-3 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  Congratulations — Post Malone
                </span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-200">
                  {isPlaying ? (
                    <Pause className="w-2.5 h-2.5 text-foreground/70" />
                  ) : (
                    <Play className="w-2.5 h-2.5 text-foreground/70 ml-px" />
                  )}
                </span>
              </motion.button>

              <p className="text-[11px] text-muted-foreground/60 mt-2.5 md:text-right italic">
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
            {getText(language, 'Feito com dedicação e muito café ☕', 'Made with dedication and lots of coffee ☕')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
