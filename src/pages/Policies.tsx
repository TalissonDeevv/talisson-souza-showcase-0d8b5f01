import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { useTheme } from '@/contexts/ThemeContext';
import { getText } from '@/utils/translations';
import { policySections, policiesPageMeta } from '@/data/policies-content';
import { cn } from '@/lib/utils';

const Policies = () => {
  const { language } = useTheme();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(policySections[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const lang = language as 'pt' | 'en';

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    policySections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle hash on mount
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [location.hash]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setSidebarOpen(false);
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <Layout>
      <SEO
        title={policiesPageMeta.title[lang]}
        description={policiesPageMeta.description[lang]}
        canonical={lang === 'en' ? '/en-us/policies' : '/politicas'}
        keywords={lang === 'pt'
          ? ['políticas', 'termos de uso', 'política de privacidade', 'diretrizes', 'desenvolvimento de software', 'serviços digitais', 'LGPD']
          : ['policies', 'terms of use', 'privacy policy', 'guidelines', 'software development', 'digital services', 'LGPD']
        }
      />

      <div className="pt-20 lg:pt-24 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mb-10 lg:mb-14"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 font-mono tracking-wider uppercase">
              <span>{getText(language, 'Documentação', 'Documentation')}</span>
              <ChevronRight className="w-3 h-3" />
              <span>{getText(language, 'Políticas', 'Policies')}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              {policiesPageMeta.title[lang]}
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-2xl leading-relaxed">
              {policiesPageMeta.description[lang]}
            </p>
            <div className="mt-4 text-xs text-muted-foreground font-mono">
              {getText(language, 'Última atualização: 31 de março de 2026', 'Last updated: March 31, 2026')}
            </div>
          </motion.div>

          <div className="flex gap-8 lg:gap-12 pb-20 relative">
            {/* Mobile sidebar toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
              aria-label="Toggle navigation"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Sidebar */}
            <nav
              className={cn(
                'lg:w-56 shrink-0 lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto',
                'fixed inset-0 z-40 bg-background/95 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none lg:relative lg:inset-auto',
                'transition-transform duration-300 lg:transform-none',
                sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
              )}
            >
              <div className="p-6 lg:p-0 pt-20 lg:pt-0">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {getText(language, 'Nesta página', 'On this page')}
                </div>
                <ul className="space-y-0.5">
                  {policySections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollTo(section.id)}
                        className={cn(
                          'w-full text-left py-2 px-3 rounded-md text-sm transition-all duration-200 block',
                          activeSection === section.id
                            ? 'text-foreground bg-secondary font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                        )}
                      >
                        {section.title[lang]}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Main content */}
            <main className="flex-1 min-w-0 max-w-3xl">
              <div className="space-y-16">
                {policySections.map((section, i) => (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    {/* Section divider */}
                    {i > 0 && <div className="border-t border-border mb-10" />}

                    <h2 className="text-xl lg:text-2xl font-semibold tracking-tight mb-6">
                      {section.title[lang]}
                    </h2>

                    <div className="space-y-4">
                      {section.paragraphs.map((p, j) => (
                        <p key={j} className="text-muted-foreground leading-[1.8] text-[15px]">
                          {p[lang]}
                        </p>
                      ))}
                    </div>

                    {section.items && section.items.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {section.items.map((item, k) => (
                          <li key={k} className="flex items-start gap-3 text-[15px]">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{item[lang]}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.section>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policies;
