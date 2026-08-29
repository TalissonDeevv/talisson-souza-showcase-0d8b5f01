import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Language = 'pt' | 'en';
type Theme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'talisson-theme';

interface ThemeContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  
  // Derive language from URL
  const language: Language = location.pathname.startsWith('/en-us') ? 'en' : 'pt';

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    // Set lang attribute
    root.lang = language === 'pt' ? 'pt-BR' : 'en-US';
  }, [language, theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    // This is now handled by ThemeLanguageToggle via navigation
    // Kept for interface compatibility
  };

  return (
    <ThemeContext.Provider value={{ theme, language, toggleTheme, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};
