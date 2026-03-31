import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const lang = language as 'pt' | 'en';
  const basePath = lang === 'en' ? '/en-us/policies' : '/politicas';

  return (
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
            {policySections.map((section) => {
              const isActive = activeSectionId === section.id;
              const sectionPath = `${basePath}/${section.id}`;

              return (
                <li key={section.id}>
                  <Link
                    to={sectionPath}
                    onClick={() => setSidebarOpen(false)}
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
      <main className="flex-1 min-w-0 max-w-3xl">
        {children}
      </main>
    </div>
  );
};

export default PolicyLayout;
