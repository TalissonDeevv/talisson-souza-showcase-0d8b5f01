import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { ExternalLink, Quote } from "lucide-react";

const Feedbacks = () => {
  const { language } = useTheme();

  const feedbacks = [
    {
      name: "Priscila Suanne",
      role: language === 'pt' ? "Desenvolvedora Back End" : "Back End Developer",
      text: language === 'pt'
        ? "Tive o prazer de trabalhar com Thalisson, um profissional extremamente comprometido, resiliente e dedicado em tudo o que faz."
        : "I had the pleasure of working with Thalisson, an extremely committed, resilient and dedicated professional in everything he does.",
      image: "https://i.ibb.co/zWp10rhx/Priscila.jpg"
    },
    {
      name: "Matheus Yuri Silva",
      role: language === 'pt' ? "Desenvolvedor de Software" : "Software Developer",
      text: language === 'pt'
        ? "Talisson demonstra uma combinação rara de expertise técnica e visão estratégica de negócios."
        : "Talisson demonstrates a rare combination of technical expertise and strategic business vision.",
      image: "https://i.ibb.co/V0P35B23/Matheus.jpg"
    },
    {
      name: "Camile Vitória Barros",
      role: language === 'pt' ? "Assistente de Suporte Administrativo" : "Administrative Support Assistant",
      text: language === 'pt'
        ? "Acompanho de perto o comprometimento e dedicação do Talisson em cada projeto. Trabalho marcado pela qualidade e foco em entregar os melhores resultados. Uma escolha segura para quem busca excelência. :)"
        : "I closely follow Talisson's commitment and dedication in every project. Work marked by quality and focus on delivering the best results. A safe choice for those seeking excellence. :)",
      image: "https://i.ibb.co/gFjVRgtr/image.png"
    },
    {
      name: "Rafael Araujo",
      role: "Web Developer",
      text: language === 'pt'
        ? "Estudei ao lado do Talisson e posso afirmar que é extremamente dedicado. Sua liderança sempre se destacou, conduzindo o grupo de forma organizada e motivadora. Sua disposição para colaborar fez toda diferença nos trabalhos em equipe. Agrega muito valor em qualquer ambiente."
        : "I studied alongside Talisson and can affirm he is extremely dedicated. His leadership always stood out, leading the group in an organized and motivating way. His willingness to collaborate made all the difference in team projects. Adds great value in any environment.",
      image: "https://i.ibb.co/My7YX5s4/image.png"
    },
    {
      name: "Davi R. Fraustino",
      role: language === 'pt' ? "Estudante de Ciência da Computação" : "Computer Science Student",
      text: language === 'pt'
        ? "Talisson é um excelente profissional que une conhecimento técnico full stack com visão estratégica de negócios. Entrega soluções criativas e eficientes, sempre atento ao impacto real para clientes e equipes. Comprometido, resiliente e com grande potencial de liderança."
        : "Talisson is an excellent professional who combines full stack technical knowledge with strategic business vision. He delivers creative and efficient solutions, always attentive to real impact for clients and teams. Committed, resilient, with great leadership potential.",
      image: "https://i.ibb.co/LDG4sdNM/image.png"
    },
    {
      name: "Anna Ishii",
      role: language === 'pt' ? "Co-fundadora da Splendori" : "Co-founder of Splendori",
      text: language === 'pt'
        ? "Trabalhei com o Talisson em projetos estratégicos e ele entrega com excelência. Sua visão técnica aliada ao senso de negócio torna qualquer projeto mais robusto. Inspira confiança e compromisso em tudo que faz."
        : "I worked with Talisson on strategic projects and he delivers with excellence. His technical vision combined with business sense makes any project more robust. He inspires trust and commitment in everything he does.",
      image: "https://i.ibb.co/pjKpnWFq/image.png"
    },
    {
      name: "Caio Eduardo Ferreira Frederico",
      role: "Backend Developer",
      text: language === 'pt'
        ? "Talisson entende tanto o lado técnico quanto o de negócios. Sua organização e clareza na comunicação facilitam o trabalho em equipe. Sempre entrega com qualidade e no prazo."
        : "Talisson understands both the technical and business sides. His organization and clear communication make teamwork easier. Always delivers with quality and on time.",
      image: "https://i.ibb.co/SwqJmQt0/image.png"
    },
    {
      name: "Diogo Calmon",
      role: "Full Stack Developer",
      text: language === 'pt'
        ? "Talisson tem domínio técnico sólido, visão de produto e dedicação impressionante. Um desenvolvedor que realmente faz a diferença em qualquer projeto."
        : "Talisson has solid technical skills, product vision and impressive dedication. A developer who truly makes a difference in any project.",
      image: "https://i.ibb.co/1tyf3c5V/image.png"
    }
  ];

  return (
    <Layout>
      <SEO
        title={language === 'pt' ? "Feedbacks | Talisson Souza" : "Feedbacks | Talisson Souza"}
        description={language === 'pt'
          ? "Veja o que colegas, parceiros e clientes dizem sobre o trabalho de Talisson Souza. Feedbacks reais de quem já colaborou comigo."
          : "See what colleagues, partners and clients say about Talisson Souza's work. Real feedback from people who have worked with me."}
        canonical={language === 'pt' ? '/feedbacks' : '/en-us/feedbacks'}
        keywords={language === 'pt'
          ? ['feedbacks', 'depoimentos', 'recomendações', 'Talisson Souza', 'desenvolvedor']
          : ['feedbacks', 'testimonials', 'recommendations', 'Talisson Souza', 'developer']}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <SectionTitle
              subtitle={language === 'pt'
                ? "O que colegas, parceiros e clientes dizem sobre o meu trabalho."
                : "What colleagues, partners and clients say about my work."}
              align="center"
            >
              {language === 'pt' ? "Feedbacks" : "Feedbacks"}
            </SectionTitle>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {feedbacks.map((feedback, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <GlassCard className="p-6 md:p-8 h-full flex flex-col">
                  <Quote className="w-6 h-6 text-primary/40 mb-4 shrink-0" />

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                    "{feedback.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    {feedback.image ? (
                      <img
                        src={feedback.image}
                        alt={feedback.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg border-2 border-primary/20">
                        {feedback.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-foreground">{feedback.name}</p>
                      <p className="text-sm text-muted-foreground">{feedback.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <GlassCard className="p-8 md:p-10 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {language === 'pt' ? "Já trabalhou comigo?" : "Have you worked with me?"}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {language === 'pt'
                    ? "Se a gente já colaborou em algum projeto, ficarei feliz em receber o seu feedback. Leva menos de 2 minutos."
                    : "If we've collaborated on a project, I'd be happy to hear your feedback. It takes less than 2 minutes."}
                </p>
                <Button size="lg" asChild>
                  <a
                    href="https://forms.gle/NLoW8A4L22vP8FfT8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    {language === 'pt' ? "Deixar um feedback" : "Leave feedback"}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Feedbacks;
