import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import ThemeLanguageToggle from "@/components/ui/ThemeLanguageToggle";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language } = useTheme();
  const t = useTranslation(language);

  const isHome = location.pathname === "/" || location.pathname === "/en-us";
  const prefix = language === 'en' ? '/en-us' : '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' || path === '/en-us') return location.pathname === '/' || location.pathname === '/en-us';
    return location.pathname.startsWith(path);
  };

  const navItems = language === 'pt' ? [
    { name: t.nav.home, path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Carreira", path: "/carreira" },
    { name: t.nav.projects, path: "/projetos" },
    { name: t.nav.services, path: "/servicos" },
    { name: "Livro", path: "/livro" },
    { name: "Artigos", path: "/artigos" },
    { name: t.nav.blog, path: "/blog" },
    { name: "Contato", path: "/contato" },
  ] : [
    { name: t.nav.home, path: "/en-us" },
    { name: "About", path: "/en-us/about" },
    { name: "Career", path: "/en-us/career" },
    { name: t.nav.projects, path: "/en-us/projects" },
    { name: t.nav.services, path: "/en-us/services" },
    { name: "Book", path: "/en-us/book" },
    { name: "Articles", path: "/en-us/articles" },
    { name: t.nav.blog, path: "/en-us/blog" },
    { name: "Contact", path: "/en-us/contact" },
  ];

  const navBackground = isHome && !isScrolled 
    ? "bg-transparent border-transparent" 
    : "bg-background/90 backdrop-blur-sm border-border/40";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={language === 'en' ? '/en-us' : '/'} className="group">
            <img 
              src={logo} 
              alt="Talisson Souza - Desenvolvedor Full Stack" 
              className="h-14 w-auto transition-opacity duration-200 group-hover:opacity-80" 
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-sm transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="block h-px w-full bg-foreground mt-0.5" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeLanguageToggle />
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border/40">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-foreground bg-secondary/50"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
