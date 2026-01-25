import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const professionalChannels = [
    { name: "GitHub", href: "https://github.com/TalinhoDev" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/talinho" },
    { name: "YouTube", href: "https://www.youtube.com/TalissonSouza" },
  ];

  const socialChannels = [
    { name: "Instagram", href: "https://instagram.com/talissondev" },
    { name: "Twitter/X", href: "https://x.com/talinhozx" },
    { name: "Twitch", href: "https://www.twitch.tv/talinhosz" },
  ];

  const navigationLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/sobre" },
    { name: t.nav.projects, path: "/projetos" },
    { name: t.nav.services, path: "/servicos" },
    { name: t.nav.blog, path: "/blog" },
    { name: language === 'pt' ? 'Contato' : 'Contact', path: "/contato" },
  ];

  return (
    <footer className="border-t border-border/40 mt-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="py-12 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Brand & Description */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-block mb-5">
                <img 
                  src={logo} 
                  alt="Talisson Souza - Desenvolvedor Full Stack" 
                  className="h-12 w-auto" 
                  loading="eager"
                />
              </Link>
              
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                {t.footer.role}
              </p>
              
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
                {t.footer.description}
              </p>

              {/* Professional Links */}
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {professionalChannels.map((channel) => (
                  <a
                    key={channel.name}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground transition-colors duration-200"
                  >
                    <span>{channel.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-4">
              <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                {t.footer.explore}
              </h3>
              
              <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
                {navigationLinks.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Social */}
              <div className="mt-6 pt-4 border-t border-border/30">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  {t.footer.channels}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {socialChannels.map((channel) => (
                    <a
                      key={channel.name}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {channel.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                {t.footer.contact}
              </h3>
              
              <a 
                href="mailto:talinhodev@gmail.com" 
                className="group inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors duration-200"
              >
                <span className="text-sm">talinhodev@gmail.com</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>

              <p className="text-sm text-muted-foreground mt-4">
                {t.footer.location}
              </p>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground border border-border/30 rounded-lg hover:bg-card/50 hover:border-foreground/20 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                {getText(language, 'Voltar ao topo', 'Back to top')}
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="py-5 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Talisson Souza. {getText(language, 'Todos os direitos reservados.', 'All rights reserved.')}
          </p>
          <p className="text-xs text-muted-foreground/60">
            {t.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
