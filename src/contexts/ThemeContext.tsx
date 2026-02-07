import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Language = 'pt' | 'en';

interface ThemeContextType {
  theme: 'dark';
  language: Language;
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

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Derive language from URL
  const language: Language = location.pathname.startsWith('/en-us') ? 'en' : 'pt';

  useEffect(() => {
    // Always set dark theme
    document.documentElement.className = 'dark';
    // Set lang attribute
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-US';
  }, [language]);

  const toggleLanguage = () => {
    // This is now handled by ThemeLanguageToggle via navigation
    // Kept for interface compatibility
  };

  return (
    <ThemeContext.Provider value={{ theme: 'dark', language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};
