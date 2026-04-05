import { Linkedin, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import ScrollReveal from "@/components/ui/ScrollReveal";

const NEWSLETTER_URL = "https://www.linkedin.com/newsletters/arquitetando-neg%C3%B3cios-digitais-7445971461145677824";

const ArticleSEOFooter = () => {
  const { language } = useTheme();

  return (
    <ScrollReveal delay={0.2}>
      <div className="mt-16 pt-10 border-t border-border/30">
        <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl border border-border/30 bg-foreground/5 flex items-center justify-center flex-shrink-0">
              <Linkedin className="w-5 h-5 text-foreground/70" />
            </div>
            <h3 className="font-serif text-xl text-foreground">
              {getText(language, 'Arquitetando Negócios Digitais', 'Architecting Digital Businesses')}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {getText(
              language,
              'Toda semana publico conteúdo sobre programação, tecnologia, estratégia e construção de projetos digitais de verdade. Sem fórmulas prontas, sem hype. Apenas reflexões práticas de quem está no mercado construindo, errando e evoluindo todos os dias.',
              'Every week I publish content about programming, technology, strategy, and building real digital projects. No ready-made formulas, no hype. Just practical reflections from someone who is in the market building, failing, and evolving every day.'
            )}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            {getText(
              language,
              'Se você busca conteúdo direto sobre carreira, arquitetura de software, posicionamento profissional e visão de longo prazo, inscreva-se na newsletter.',
              'If you\'re looking for straightforward content about career, software architecture, professional positioning, and long-term vision, subscribe to the newsletter.'
            )}
          </p>

          <p className="text-xs text-muted-foreground/60 mb-6">
            {getText(language, 'Publicado semanalmente no LinkedIn', 'Published weekly on LinkedIn')}
          </p>

          <a
            href={NEWSLETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 text-sm font-medium text-white rounded-xl py-3 px-6 transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#0A66C2', boxShadow: '0 0 20px rgba(10, 102, 194, 0.2)' }}
          >
            <Linkedin className="w-4 h-4" />
            {getText(language, 'Inscrever na Newsletter', 'Subscribe to Newsletter')}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ArticleSEOFooter;
