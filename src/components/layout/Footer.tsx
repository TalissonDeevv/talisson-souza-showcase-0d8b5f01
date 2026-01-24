import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";

const Footer = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const currentYear = new Date().getFullYear();

  const professionalChannels = [
    { name: "GitHub", href: "https://github.com/TalinhoDev", label: "Código" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/talinho", label: "Profissional" },
    { name: "YouTube", href: "https://www.youtube.com/TalissonSouza", label: "Conteúdo" },
  ];

  const socialChannels = [
    { name: "Instagram", href: "https://instagram.com/talissondev" },
    { name: "Twitter/X", href: "https://x.com/talinhozx" },
    { name: "Twitch", href: "https://www.twitch.tv/talinhosz" },
  ];

  const navigationLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.projects, path: "/projects" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.blog, path: "/blog" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative bg-background border-t border-border/50 mt-20">
      {/* Linha superior decorativa */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Conteúdo Principal */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Coluna 1: Identidade / Assinatura */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <Link to="/" className="inline-block mb-6 group">
                <img 
                  src="https://i.ibb.co/hvDDY50/Minha-assinatura.png" 
                  alt="Talisson Souza" 
                  className="h-24 w-auto filter dark:invert transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
                {t.footer.role}
              </p>
              
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-8">
                {t.footer.description}
              </p>

              {/* Canais Profissionais */}
              <div className="space-y-2">
                {professionalChannels.map((channel) => (
                  <motion.a
                    key={channel.name}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-foreground/80 hover:text-foreground transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    <span className="font-medium">{channel.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Coluna 2: Navegação */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
                {t.footer.explore}
              </h3>
              
              <nav className="space-y-3">
                {navigationLinks.map((item) => (
                  <motion.div key={item.name} whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                    <Link 
                      to={item.path} 
                      className="group flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity duration-200" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Redes sociais secundárias */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4">
                  {t.footer.channels}
                </p>
                <div className="flex flex-wrap gap-3">
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
            </motion.div>

            {/* Coluna 3: Contato Profissional */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
                {t.footer.contact}
              </h3>
              
              {/* Email como CTA principal */}
              <motion.a 
                href="mailto:talinhodev@gmail.com" 
                className="group flex items-start gap-4 p-4 -ml-4 rounded-xl hover:bg-secondary/50 transition-all duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    {t.footer.email}
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-foreground/80 transition-colors truncate">
                    talinhodev@gmail.com
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 mt-3" />
              </motion.a>

              {/* Localização */}
              <div className="flex items-center gap-3 mt-6 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{t.footer.location}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Barra Inferior */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-6 border-t border-border/30"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Talisson Souza. {t.footer.allRightsReserved}
            </p>
            <p className="text-xs text-muted-foreground/60">
              {t.footer.madeWith} {t.footer.location}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
