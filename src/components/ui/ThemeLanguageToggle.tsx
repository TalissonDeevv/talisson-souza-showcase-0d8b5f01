import { useNavigate, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { getText, useTranslation } from "@/utils/translations";
import { getEquivalentRoute } from "@/utils/routeMapping";

const ThemeLanguageToggle = () => {
  const { language, theme, toggleTheme } = useTheme();
  const t = useTranslation(language);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    const targetLang = language === 'pt' ? 'en' : 'pt';
    const equivalentRoute = getEquivalentRoute(location.pathname, targetLang);
    navigate(equivalentRoute, { state: { languageSwitch: true } });
  };

  const themeLabel = theme === "dark"
    ? getText(language, "Ativar tema claro", "Enable light theme")
    : getText(language, "Ativar tema escuro", "Enable dark theme");
  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/35 bg-background/55 p-1 backdrop-blur-md">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="h-8 w-8 rounded-full px-0 text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
        title={themeLabel}
        aria-label={themeLabel}
      >
        <ThemeIcon className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleToggle}
        className="flex h-8 items-center gap-2 rounded-full px-2.5 hover:bg-foreground/10"
        title={t.theme.language}
      >
        <span className="text-lg">
          {language === 'pt' ? '🇧🇷' : '🇺🇸'}
        </span>
        <span className="text-xs font-medium uppercase text-muted-foreground">
          {language === 'pt' ? 'pt' : 'en'}
        </span>
      </Button>
    </div>
  );
};

export default ThemeLanguageToggle;
