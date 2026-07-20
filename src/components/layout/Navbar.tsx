import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  CircleHelp,
  Compass,
  FileText,
  Layers,
  Lightbulb,
  ListChecks,
  Menu,
  MessageSquareQuote,
  X,
  type LucideIcon,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import ThemeLanguageToggle from "@/components/ui/ThemeLanguageToggle";
import { trails } from "@/data/articles";
import logo from "@/assets/logo.png";

interface DropdownItem {
  name: string;
  path: string;
  description: string;
  icon: LucideIcon;
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
  const [isExploreSheetOpen, setIsExploreSheetOpen] = useState(false);
  
  const location = useLocation();
  const { language } = useTheme();
  const t = useTranslation(language);

  const isHome = location.pathname === "/" || location.pathname === "/en-us";
  const isBioPage = location.pathname === "/bio" || location.pathname === "/en-us/bio";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setIsExploreSheetOpen(false);
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
        { name: t.nav.projects, path: "/projetos", description: "Portfólio com curadoria e acesso orientado.", icon: BriefcaseBusiness },
        { name: t.nav.services, path: "/servicos", description: "Soluções técnicas para empresas e produtos.", icon: Layers },
        { name: "Livro", path: "/livro", description: "Superando Limites e materiais oficiais.", icon: BookOpen },
        { name: "Sugestões de artigos", path: "/sugestoes-artigos", description: "Envie temas que merecem virar leitura.", icon: Lightbulb },
        { name: "Princípios", path: "/principios", description: "Ideias que guiam decisões e trabalho.", icon: FileText },
        { name: "Checklists", path: "/checklists", description: "Guias práticos para revisar com clareza.", icon: ListChecks },
        { name: "FAQ", path: "/faq", description: "Respostas diretas antes de conversar.", icon: CircleHelp },
        { name: "Feedbacks", path: "/feedbacks", description: "Depoimentos e percepções reais.", icon: MessageSquareQuote },
      ],
    },
  ] : [
    {
      label: "Explore",
      items: [
        { name: t.nav.projects, path: "/en-us/projects", description: "Curated portfolio and guided access.", icon: BriefcaseBusiness },
        { name: t.nav.services, path: "/en-us/services", description: "Technical solutions for companies and products.", icon: Layers },
        { name: "Book", path: "/en-us/book", description: "Superando Limites and official materials.", icon: BookOpen },
        { name: "Article suggestions", path: "/en-us/article-suggestions", description: "Send topics worth turning into reading.", icon: Lightbulb },
        { name: "Principles", path: "/en-us/principles", description: "Ideas that guide decisions and work.", icon: FileText },
        { name: "Checklists", path: "/en-us/checklists", description: "Practical guides to review with clarity.", icon: ListChecks },
        { name: "FAQ", path: "/en-us/faq", description: "Direct answers before a conversation.", icon: CircleHelp },
        { name: "Feedbacks", path: "/en-us/feedbacks", description: "Testimonials and real perceptions.", icon: MessageSquareQuote },
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
                    className="absolute left-1/2 top-full z-[60] mt-3 w-[min(920px,calc(100vw-3rem))] -translate-x-1/2 overflow-hidden rounded-[28px] border border-border/35 bg-background p-4 shadow-[0_28px_90px_hsl(0_0%_0%/0.48)]"
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
                    <div className="border-b border-border/20 px-2 pb-4">
                      <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground/65">
                        {getText(language, "para navegar", "navigation")}
                      </span>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {getText(
                          language,
                          "Páginas principais para conhecer meu trabalho, meus conteúdos e os caminhos oficiais do site.",
                          "Main pages to understand my work, content and the official paths inside the site."
                        )}
                      </p>
                    </div>
                    <div className="grid gap-2 pt-4 md:grid-cols-2 xl:grid-cols-4">
                      {dropdown.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`group relative min-h-[112px] rounded-2xl border p-4 transition-all duration-300 ${
                              isActive(item.path)
                                ? "border-foreground/25 bg-secondary text-foreground"
                                : "border-border/25 bg-card text-muted-foreground hover:border-foreground/20 hover:bg-secondary hover:text-foreground"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/25 bg-background text-foreground/75 transition-colors duration-300 group-hover:border-foreground/20">
                                <Icon className="h-4 w-4" />
                              </span>
                              <ArrowUpRight className="h-3.5 w-3.5 opacity-45 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-90" />
                            </div>
                            <div className="mt-4">
                              <p className="text-sm font-semibold text-foreground">{item.name}</p>
                              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
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
          <div className="mt-2 overflow-hidden rounded-3xl border border-border/35 bg-background/95 py-4 shadow-[0_24px_80px_hsl(0_0%_0%/0.45)] backdrop-blur-xl lg:hidden">
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

              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsExploreSheetOpen(true);
                }}
                className="mx-2 mt-2 flex items-center justify-between rounded-2xl border border-border/35 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground transition-colors hover:bg-foreground/[0.08]"
              >
                {dropdowns[0]?.label}
                <Compass className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {!isBioPage && (
        <button
          onClick={() => setIsExploreSheetOpen(true)}
          className="fixed bottom-4 right-4 z-[65] inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/95 px-4 py-3 text-sm font-medium text-foreground shadow-[0_18px_60px_hsl(0_0%_0%/0.45)] backdrop-blur-xl transition-colors hover:bg-foreground/10 lg:hidden"
          aria-label={dropdowns[0]?.label}
        >
          <Compass className="h-4 w-4" />
          {dropdowns[0]?.label}
        </button>
      )}

      {isExploreSheetOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button
            className="absolute inset-0 bg-background/75 backdrop-blur-sm"
            aria-label={getText(language, "Fechar explorar", "Close explore")}
            onClick={() => setIsExploreSheetOpen(false)}
          />
          <div className="absolute inset-x-3 bottom-3 overflow-hidden rounded-[28px] border border-border/35 bg-background/95 shadow-[0_28px_90px_hsl(0_0%_0%/0.55)]">
            <div className="flex items-center justify-between border-b border-border/25 px-5 py-4">
              <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground/70">{dropdowns[0]?.label}</span>
              <button
                onClick={() => setIsExploreSheetOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/35 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={getText(language, "Fechar", "Close")}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid max-h-[62vh] gap-1 overflow-y-auto p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
              {dropdowns[0]?.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsExploreSheetOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors ${
                    isActive(item.path)
                      ? "bg-foreground/[0.08] text-foreground"
                      : "text-muted-foreground hover:bg-foreground/[0.05] hover:text-foreground"
                  }`}
                >
                  {item.name}
                  <ChevronDown className="-rotate-90 h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
