import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";

const ThemeLanguageToggle = () => {
  const { language, toggleLanguage } = useTheme();
  const t = useTranslation(language);

  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-3 h-10 rounded-full hover:bg-card/50 transition-colors"
        title={t.theme.language}
      >
        <span className="text-lg">
          {language === 'pt' ? '🇧🇷' : '🇺🇸'}
        </span>
        <span className="text-xs font-medium uppercase text-muted-foreground">
          {language}
        </span>
      </Button>
    </div>
  );
};

export default ThemeLanguageToggle;
