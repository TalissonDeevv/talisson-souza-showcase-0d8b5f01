import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { contactEmails, mailtoHref } from "@/data/contact-channels";
import { 
  Eye, 
  Keyboard, 
  Monitor, 
  Volume2, 
  Palette, 
  Smartphone, 
  CheckCircle, 
  Heart,
  Users,
  Globe
} from "lucide-react";

const Accessibility = () => {
  const { language } = useTheme();

  const commitments = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: getText(language, "Contraste adequado", "Adequate contrast"),
      description: getText(language, 
        "Todas as cores são testadas para garantir legibilidade para pessoas com baixa visão ou daltonismo.",
        "All colors are tested to ensure readability for people with low vision or color blindness."
      )
    },
    {
      icon: <Keyboard className="w-5 h-5" />,
      title: getText(language, "Navegação por teclado", "Keyboard navigation"),
      description: getText(language,
        "Todos os elementos interativos podem ser acessados e operados apenas com o teclado.",
        "All interactive elements can be accessed and operated using only the keyboard."
      )
    },
    {
      icon: <Volume2 className="w-5 h-5" />,
      title: getText(language, "Compatível com leitores de tela", "Screen reader compatible"),
      description: getText(language,
        "Estrutura semântica e ARIA labels para garantir compatibilidade com tecnologias assistivas.",
        "Semantic structure and ARIA labels to ensure compatibility with assistive technologies."
      )
    },
    {
      icon: <Monitor className="w-5 h-5" />,
      title: getText(language, "Design responsivo", "Responsive design"),
      description: getText(language,
        "Experiência consistente em qualquer dispositivo, do celular ao desktop.",
        "Consistent experience on any device, from mobile to desktop."
      )
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: getText(language, "Contraste e legibilidade", "Contrast and readability"),
      description: getText(language,
        "Paleta escura consistente, contraste revisado e hierarquia visual para leitura confortável.",
        "A consistent dark palette, reviewed contrast and visual hierarchy for comfortable reading."
      )
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: getText(language, "Touch-friendly", "Touch-friendly"),
      description: getText(language,
        "Áreas de toque adequadas e gestos intuitivos para dispositivos móveis.",
        "Adequate touch areas and intuitive gestures for mobile devices."
      )
    }
  ];

  const standards = [
    {
      title: "WCAG 2.1",
      description: getText(language,
        "Seguindo as diretrizes de acessibilidade de conteúdo web nível AA.",
        "Following Web Content Accessibility Guidelines level AA."
      )
    },
    {
      title: getText(language, "HTML Semântico", "Semantic HTML"),
      description: getText(language,
        "Estrutura de código que facilita a interpretação por tecnologias assistivas.",
        "Code structure that facilitates interpretation by assistive technologies."
      )
    },
    {
      title: getText(language, "Testes contínuos", "Continuous testing"),
      description: getText(language,
        "Validação regular com ferramentas automatizadas e testes manuais.",
        "Regular validation with automated tools and manual testing."
      )
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: getText(language, "Empatia", "Empathy"),
      description: getText(language,
        "Cada decisão de design considera diferentes contextos e necessidades de uso.",
        "Every design decision considers different contexts and usage needs."
      )
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: getText(language, "Inclusão", "Inclusion"),
      description: getText(language,
        "Tecnologia deve ser acessível a todos, sem exceção.",
        "Technology should be accessible to everyone, without exception."
      )
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: getText(language, "Universalidade", "Universality"),
      description: getText(language,
        "Construir para a web significa construir para o mundo.",
        "Building for the web means building for the world."
      )
    }
  ];

  return (
    <Layout withPadding={false}>
      <SEO 
        title={getText(language, "Acessibilidade | Talisson Souza", "Accessibility | Talisson Souza")}
        description={getText(language,
          "Compromisso com acessibilidade digital e inclusão. Conheça as práticas e padrões que sigo para criar experiências acessíveis.",
          "Commitment to digital accessibility and inclusion. Learn about the practices and standards I follow to create accessible experiences."
        )}
        canonical="/acessibilidade"
        keywords={['acessibilidade', 'wcag', 'inclusão digital', 'a11y', 'accessibility']}
      />

      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, 'Compromisso', 'Commitment')}
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-6">
                {getText(language, 'Acessibilidade', 'Accessibility')}
              </AnimatedTitle>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {getText(language,
                  "Acredito que a web deve ser acessível a todos. Este é meu compromisso com práticas inclusivas e experiências digitais que não deixam ninguém para trás.",
                  "I believe the web should be accessible to everyone. This is my commitment to inclusive practices and digital experiences that leave no one behind."
                )}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ParallaxSection 
        className="py-16 lg:py-20"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <GlassCard className="p-6 h-full text-center">
                  <div className="w-12 h-12 rounded-2xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-4 text-foreground/70">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Commitments Section */}
      <ParallaxSection 
        className="py-16 lg:py-20"
        speed={0.12}
        backgroundElement={
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, 'Boas práticas', 'Best practices')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
                {getText(language, 'O que eu aplico', 'What I apply')}
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl">
                {getText(language,
                  "Práticas concretas que implemento em cada projeto para garantir acessibilidade.",
                  "Concrete practices I implement in every project to ensure accessibility."
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <ScrollReveal key={commitment.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl border border-border/20 bg-card/30 h-full"
                >
                  <div className="w-10 h-10 rounded-xl border border-border/30 bg-background/50 flex items-center justify-center mb-4 text-foreground/60">
                    {commitment.icon}
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">
                    {commitment.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {commitment.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Standards Section */}
      <ParallaxSection 
        className="py-16 lg:py-20"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, 'Padrões', 'Standards')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                {getText(language, 'Referências técnicas', 'Technical references')}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                {getText(language,
                  "Sigo padrões internacionais e boas práticas consolidadas pela comunidade de acessibilidade web.",
                  "I follow international standards and best practices established by the web accessibility community."
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                {standards.map((standard, index) => (
                  <motion.div
                    key={standard.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl border border-border/20 bg-card/20"
                  >
                    <CheckCircle className="w-5 h-5 text-foreground/50 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-foreground mb-1">
                        {standard.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {standard.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Feedback Section */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <GlassCard className="max-w-2xl mx-auto p-8 lg:p-10 text-center">
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                {getText(language, 'Feedback é bem-vindo', 'Feedback is welcome')}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {getText(language,
                  "Se você encontrar qualquer barreira de acessibilidade neste site, por favor me avise. Seu feedback é essencial para melhorar continuamente.",
                  "If you find any accessibility barrier on this site, please let me know. Your feedback is essential for continuous improvement."
                )}
              </p>
              <a 
                href={mailtoHref(contactEmails.contact, "Feedback de Acessibilidade")}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                {contactEmails.contact}
              </a>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Accessibility;
