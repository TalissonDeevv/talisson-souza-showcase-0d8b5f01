import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { getText } from '@/utils/translations';
import { policySections } from '@/data/policies-content';
import { cn } from '@/lib/utils';

interface PolicyLayoutProps {
  children: React.ReactNode;
  activeSectionId?: string;
}

const PolicyLayout = ({ children, activeSectionId }: PolicyLayoutProps) => {
  const { language } = useTheme();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const lang = language as 'pt' | 'en';
  const basePath = lang === 'en' ? '/en-us/policies' : '/politicas';

  return (
    <div className="relative flex gap-8 pb-20 lg:gap-12">
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border/30 bg-card/80 shadow-lg backdrop-blur-md"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5 text-foreground" />
        </button>

        {mobileOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <div
              data-lenis-prevent=""
              data-lenis-prevent-wheel=""
              data-lenis-prevent-vertical=""
              className="policy-reading-scrollbar absolute bottom-full right-0 z-50 mb-2 max-h-[70vh] w-72 overflow-y-auto rounded-2xl border border-border/30 bg-card/95 shadow-xl backdrop-blur-xl"
            >
              <div className="border-b border-border/30 px-4 py-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {getText(language, 'Nesta página', 'On this page')}
                </span>
              </div>
              {policySections.map((section) => {
                const isActive = activeSectionId === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      navigate(`${basePath}/${section.id}`);
                      setMobileOpen(false);
                    }}
                    className={cn(
                      'w-full border-b border-border/20 px-4 py-3 text-left text-sm transition-colors last:border-b-0',
                      isActive
                        ? 'bg-foreground/[0.07] text-foreground'
                        : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                    )}
                  >
                    {section.title[lang]}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <nav
        data-lenis-prevent=""
        data-lenis-prevent-wheel=""
        data-lenis-prevent-vertical=""
        className="policy-reading-scrollbar hidden shrink-0 lg:sticky lg:top-28 lg:block lg:max-h-[calc(100vh-8rem)] lg:w-72 lg:self-start lg:overflow-y-auto"
      >
        <div className="relative overflow-hidden rounded-2xl border border-border/25 bg-card/35 p-4 backdrop-blur-sm">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
            }}
          />
          <div className="relative mb-4 text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
            {getText(language, 'Nesta página', 'On this page')}
          </div>
          <ul className="relative space-y-1">
            {policySections.map((section) => {
              const isActive = activeSectionId === section.id;
              const sectionPath = `${basePath}/${section.id}`;

              return (
                <li key={section.id}>
                  <Link
                    to={sectionPath}
                    className={cn(
                      'group relative block rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200',
                      isActive
                        ? 'bg-foreground/[0.08] text-foreground'
                        : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-5 w-px -translate-y-1/2 bg-foreground/70" />
                    )}
                    {section.title[lang]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <main className="min-w-0 flex-1 pb-20 lg:pb-0">
        {children}
      </main>
    </div>
  );
};

export default PolicyLayout;
