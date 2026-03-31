import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
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
    <Layout withPadding={false}>
      <SEO
        title={language === 'pt' ? "Feedbacks | Talisson Souza" : "Feedbacks | Talisson Souza"}
        description={language === 'pt'
          ? "Veja o que colegas, parceiros e clientes dizem sobre o trabalho de Talisson Souza. Feedbacks reais de quem já colaborou comigo."
          : "See what colleagues, partners and clients say about Talisson Souza's work. Real feedback from people who have worked with me."}
        canonical={language === 'en' ? '/en-us/feedbacks' : '/feedbacks'}
        keywords={language === 'pt'
          ? ['feedbacks', 'depoimentos', 'recomendações', 'Talisson Souza', 'desenvolvedor']
          : ['feedbacks', 'testimonials', 'recommendations', 'Talisson Souza', 'developer']}
      />

      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div 
          className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)'
          }}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <ScrollReveal>
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                Feedbacks
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-6">
                {getText(language, 'O que dizem sobre mim', 'What people say about me')}
              </AnimatedTitle>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {getText(language,
                  'Feedbacks reais de colegas, parceiros e clientes que já trabalharam comigo.',
                  'Real feedback from colleagues, partners and clients who have worked with me.'
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Feedbacks Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {feedbacks.map((feedback, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <GlassCard className="p-6 md:p-8 h-full flex flex-col">
                  <Quote className="w-5 h-5 text-muted-foreground/30 mb-4 shrink-0" />

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic text-sm">
                    "{feedback.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                    {feedback.image ? (
                      <img
                        src={feedback.image}
                        alt={feedback.name}
                        className="w-10 h-10 rounded-full object-cover border border-border/40"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground font-medium text-sm border border-border/40">
                        {feedback.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-foreground text-sm">{feedback.name}</p>
                      <p className="text-xs text-muted-foreground/70">{feedback.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-border/20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {getText(language, 'Já trabalhou comigo?', 'Have you worked with me?')}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {getText(language,
                  'Se a gente já colaborou em algum projeto, ficarei feliz em receber o seu feedback. Leva menos de 2 minutos.',
                  "If we've collaborated on a project, I'd be happy to hear your feedback. It takes less than 2 minutes."
                )}
              </p>
              <Button size="lg" asChild>
                <a
                  href="https://forms.gle/NLoW8A4L22vP8FfT8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getText(language, 'Deixar um feedback', 'Leave feedback')}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Feedbacks;
