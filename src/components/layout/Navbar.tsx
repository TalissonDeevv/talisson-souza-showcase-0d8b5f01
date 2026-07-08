import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import ThemeLanguageToggle from "@/components/ui/ThemeLanguageToggle";
import { trails } from "@/data/articles";
import logo from "@/assets/logo.png";

interface DropdownItem {
  name: string;
  path: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
  allLink?: { name: string; path: string };
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  
  const location = useLocation();
  const { language } = useTheme();
  const t = useTranslation(language);

  const isHome = location.pathname === "/" || location.pathname === "/en-us";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenMobileAccordion(null);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' || path === '/en-us') return location.pathname === '/' || location.pathname === '/en-us';
    return location.pathname.startsWith(path);
  };

  const simpleNavItems = language === 'pt' ? [
    { name: t.nav.home, path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Carreira", path: "/carreira" },
    { name: "Artigos", path: "/artigos" },
    { name: "Contato", path: "/contato" },
  ] : [
    { name: t.nav.home, path: "/en-us" },
    { name: "About", path: "/en-us/about" },
    { name: "Career", path: "/en-us/career" },
    { name: "Articles", path: "/en-us/articles" },
    { name: "Contact", path: "/en-us/contact" },
  ];

  const dropdowns: NavDropdown[] = language === 'pt' ? [
    {
      label: "Explorar",
      items: [
        { name: t.nav.projects, path: "/projetos" },
        { name: t.nav.services, path: "/servicos" },
        { name: "Livro", path: "/livro" },
        { name: "Princípios", path: "/principios" },
        { name: "Checklists", path: "/checklists" },
        { name: "FAQ", path: "/faq" },
        { name: "Feedbacks", path: "/feedbacks" },
      ],
    },
  ] : [
    {
      label: "Explore",
      items: [
        { name: t.nav.projects, path: "/en-us/projects" },
        { name: t.nav.services, path: "/en-us/services" },
        { name: "Book", path: "/en-us/book" },
        { name: "Principles", path: "/en-us/principles" },
        { name: "Checklists", path: "/en-us/checklists" },
        { name: "FAQ", path: "/en-us/faq" },
        { name: "Feedbacks", path: "/en-us/feedbacks" },
      ],
    },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown && !(e.target as HTMLElement).closest('[data-dropdown]')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6 pt-3">
        <div className="flex items-center justify-between gap-4 h-14 px-3 lg:px-5 rounded-full bg-background/80 backdrop-blur-md border border-border/40 shadow-sm">
          <Link to={language === 'en' ? '/en-us' : '/'} className="group shrink-0 pl-1">
            <img
              src={logo}
              alt="Talisson Souza - Desenvolvedor Full Stack"
              className="h-10 w-auto transition-opacity duration-200 group-hover:opacity-80"
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop nav - inline links */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {simpleNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {dropdowns.map((dropdown) => (
              <div
                key={dropdown.label}
                className="relative"
                data-dropdown
              >
                <button
                  className="px-3 py-1.5 text-sm rounded-full text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1"
                  onClick={(e) => { e.stopPropagation(); toggleDropdown(dropdown.label); }}
                  aria-expanded={openDropdown === dropdown.label}
                  aria-haspopup="true"
                >
                  {dropdown.label}
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openDropdown === dropdown.label ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === dropdown.label && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[220px] bg-popover border border-border rounded-xl shadow-lg py-2 z-[60]"
                    data-dropdown
                  >
                    {dropdown.allLink && (
                      <>
                        <Link
                          to={dropdown.allLink.path}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          {dropdown.allLink.name}
                        </Link>
                        <div className="border-t border-border my-1" />
                      </>
                    )}
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(item.path)
                            ? "text-foreground bg-secondary/30"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border/40">
            <div className="flex flex-col gap-1">
              {simpleNavItems.map((item) => (
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

              {dropdowns.map((dropdown) => (
                <div key={dropdown.label}>
                  <button
                    onClick={() => setOpenMobileAccordion(openMobileAccordion === dropdown.label ? null : dropdown.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    aria-expanded={openMobileAccordion === dropdown.label}
                  >
                    {dropdown.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openMobileAccordion === dropdown.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileAccordion === dropdown.label && (
                    <div className="pl-4 border-l border-border/40 ml-4 mb-2">
                      {dropdown.allLink && (
                        <Link
                          to={dropdown.allLink.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-foreground"
                        >
                          {dropdown.allLink.name}
                        </Link>
                      )}
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(item.path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
