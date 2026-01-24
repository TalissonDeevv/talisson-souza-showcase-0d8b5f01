import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";
import ThemeLanguageToggle from "@/components/ui/ThemeLanguageToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const location = useLocation();
  const { language } = useTheme();
  const t = useTranslation(language);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: language === 'pt' ? 'Carreira' : 'Career', path: "/career" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.blog, path: "/blog" },
    { name: t.nav.contact, path: "/contact" },
  ];

  const portfolioItems = [
    { name: t.nav.projects, path: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="group">
            <img 
              src="https://i.ibb.co/hvDDY50/Minha-assinatura.png" 
              alt="Talisson Souza" 
              className="h-24 w-auto filter dark:invert transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-card/80 backdrop-blur-lg rounded-2xl p-2 shadow-lg border border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 mx-1 ${
                    isActive(item.path)
                      ? "text-primary-foreground bg-primary shadow-lg"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary hover:shadow-md"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* Portfolio Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setPortfolioOpen(!portfolioOpen)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-1 ${
                    portfolioItems.some(item => isActive(item.path))
                      ? "text-primary-foreground bg-primary shadow-lg"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary hover:shadow-md"
                  }`}
                >
                  <span className="relative z-10">{t.nav.portfolio}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${portfolioOpen ? 'rotate-180' : ''}`} />
                  {portfolioItems.some(item => isActive(item.path)) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              
              <AnimatePresence>
                {portfolioOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-card rounded-xl shadow-xl border border-border py-2 z-50"
                  >
                    {portfolioItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setPortfolioOpen(false)}
                        className={`block px-4 py-2 text-sm font-medium transition-colors ${
                          isActive(item.path)
                            ? "text-primary-foreground bg-primary"
                            : "text-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Theme and Language Toggle + Mobile menu button */}
          <div className="flex items-center gap-4">
            <ThemeLanguageToggle />
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl text-foreground hover:text-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 transform hover:scale-105"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-3 border-t border-border bg-card rounded-b-xl">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                        isActive(item.path)
                          ? "text-primary-foreground bg-primary shadow-lg"
                          : "text-foreground hover:text-foreground hover:bg-secondary hover:shadow-md"
                      }`}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground px-6 mb-3">{t.nav.portfolio}</h3>
                  {portfolioItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navItems.length + index) * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                          isActive(item.path)
                            ? "text-primary-foreground bg-primary shadow-lg"
                            : "text-foreground hover:text-foreground hover:bg-secondary hover:shadow-md"
                        }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
