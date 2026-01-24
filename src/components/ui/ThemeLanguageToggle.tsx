
import { Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";

const ThemeLanguageToggle = () => {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();
  const t = useTranslation(language);

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="w-10 h-10 px-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        title={theme === 'light' ? t.theme.dark : t.theme.light}
      >
        {theme === 'light' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-3 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        title={t.theme.language}
      >
        <span className="text-lg">
          {language === 'pt' ? '🇧🇷' : '🇺🇸'}
        </span>
        <span className="text-xs font-medium uppercase">
          {language}
        </span>
      </Button>
    </div>
  );
};

export default ThemeLanguageToggle;
