import React, { createContext, useContext, useState, useEffect } from 'react';

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
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) setLanguage(savedLanguage);
    
    // Always set dark theme
    document.documentElement.className = 'dark';
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt');
  };

  return (
    <ThemeContext.Provider value={{ theme: 'dark', language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};
