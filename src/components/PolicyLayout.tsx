import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
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

  const activeSection = policySections.find(s => s.id === activeSectionId);

  return (
    <div className="flex gap-8 lg:gap-12 pb-20 relative">
      {/* Mobile: hamburger button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center w-12 h-12 bg-card border border-border rounded-full shadow-lg backdrop-blur-md"
          aria-label="Menu"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>

        {mobileOpen && (
          <>
            <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40" onClick={() => setMobileOpen(false)} />
            <div className="absolute bottom-full right-0 mb-2 w-64 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50">
              <div className="px-4 py-3 border-b border-border">
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
                      'w-full text-left px-4 py-3 text-sm transition-colors border-b border-border last:border-b-0',
                      isActive
                        ? 'text-foreground bg-secondary font-medium'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
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

      {/* Desktop: sticky sidebar */}
      <nav className="hidden lg:block lg:w-56 shrink-0 lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {getText(language, 'Nesta página', 'On this page')}
          </div>
          <ul className="space-y-0.5">
            {policySections.map((section) => {
              const isActive = activeSectionId === section.id;
              const sectionPath = `${basePath}/${section.id}`;

              return (
                <li key={section.id}>
                  <Link
                    to={sectionPath}
                    className={cn(
                      'w-full text-left py-2 px-3 rounded-md text-sm transition-all duration-200 block',
                      isActive
                        ? 'text-foreground bg-secondary font-medium'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    )}
                  >
                    {section.title[lang]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 min-w-0 max-w-3xl pb-20 lg:pb-0">
        {children}
      </main>
    </div>
  );
};

export default PolicyLayout;
