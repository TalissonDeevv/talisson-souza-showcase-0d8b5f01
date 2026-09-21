import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { TestimonialsSection } from "@/components/ui/testimonials-2";

const StoryHighlight = () => {
  const { language } = useTheme();

  return (
    <div className="container relative mx-auto w-full px-6 lg:px-8">
      <TestimonialsSection
        author="Talisson Souza"
        quote={getText(
          language,
          "Todo software carrega uma intenção. A minha é construir o que permanece.",
          "Every software carries an intention. Mine is to build what remains."
        )}
        role={getText(language, "Engenheiro de Software", "Software Engineer")}
      />
    </div>
  );
};

export default StoryHighlight;
