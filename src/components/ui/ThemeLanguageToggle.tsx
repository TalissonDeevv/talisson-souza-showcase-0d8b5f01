import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";
import { getEquivalentRoute } from "@/utils/routeMapping";

const ThemeLanguageToggle = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    const targetLang = language === 'pt' ? 'en' : 'pt';
    const equivalentRoute = getEquivalentRoute(location.pathname, targetLang);
    navigate(equivalentRoute, { state: { languageSwitch: true } });
  };

  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleToggle}
        className="flex items-center gap-2 px-3 h-10 rounded-full hover:bg-card/50 transition-colors"
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
