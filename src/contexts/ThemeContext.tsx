import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Language = 'pt' | 'en';

interface ThemeContextType {
  language: Language;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const language: Language = location.pathname.startsWith('/en-us') ? 'en' : 'pt';

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove('light');
    root.classList.add('dark');
    root.dataset.theme = 'dark';
    root.style.colorScheme = 'dark';
    window.localStorage.removeItem('talisson-theme');
    root.lang = language === 'pt' ? 'pt-BR' : 'en-US';
  }, [language]);

  return (
    <ThemeContext.Provider value={{ language }}>
      {children}
    </ThemeContext.Provider>
  );
};
