import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
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
      {/* Mobile: select dropdown */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-sm">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between gap-2 bg-card border border-border rounded-xl px-4 py-3 text-sm font-medium shadow-lg backdrop-blur-md"
        >
          <span className="truncate">
            {activeSection ? activeSection.title[lang] : getText(language, 'Navegar seções', 'Navigate sections')}
          </span>
          <ChevronDown className={cn('w-4 h-4 shrink-0 transition-transform', mobileOpen && 'rotate-180')} />
        </button>

        {mobileOpen && (
          <div className="absolute bottom-full mb-2 w-full bg-card border border-border rounded-xl shadow-xl overflow-hidden">
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
