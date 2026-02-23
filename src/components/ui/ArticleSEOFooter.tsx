import { SiDiscord } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import ScrollReveal from "@/components/ui/ScrollReveal";

const DISCORD_LINK = "https://discord.gg/WXwguHWjxg";

const ArticleSEOFooter = () => {
  const { language } = useTheme();

  return (
    <ScrollReveal delay={0.2}>
      <div className="mt-16 pt-10 border-t border-border/30">
        <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl border border-border/30 bg-foreground/5 flex items-center justify-center flex-shrink-0">
              <SiDiscord className="w-5 h-5 text-foreground/70" />
            </div>
            <h3 className="font-serif text-xl text-foreground">
              {getText(language, 'Continue aprendendo', 'Keep learning')}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {getText(
              language,
              'Construir uma carreira sólida em programação exige mais do que conhecimento técnico. Exige constância, fundamentos bem estruturados e uma rede de profissionais comprometidos com crescimento real. Se você busca evoluir como desenvolvedor com base sólida, participar de discussões técnicas e acompanhar conteúdo estratégico sobre mercado de tecnologia, desenvolvimento profissional e carreira em programação, conheça o servidor do Talisson.',
              'Building a solid programming career requires more than technical knowledge. It requires consistency, well-structured fundamentals, and a network of professionals committed to real growth. If you seek to evolve as a developer with a solid foundation, participate in technical discussions, and follow strategic content about the technology market, professional development, and programming careers, check out Talisson\'s server.'
            )}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {getText(
              language,
              'Um espaço para quem leva a profissão a sério: networking, projetos reais, troca de experiências e conteúdo de alto nível sobre fundamentos, infraestrutura, arquitetura e posicionamento profissional.',
              'A space for those who take the profession seriously: networking, real projects, experience sharing, and high-level content about fundamentals, infrastructure, architecture, and professional positioning.'
            )}
          </p>

          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 text-sm font-medium text-primary-foreground bg-foreground rounded-xl py-3 px-6 transition-all duration-300 hover:opacity-90"
            style={{ boxShadow: '0 0 20px hsl(var(--foreground) / 0.1)' }}
          >
            <SiDiscord className="w-4 h-4" />
            {getText(language, 'Entrar no Discord', 'Join Discord')}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ArticleSEOFooter;
