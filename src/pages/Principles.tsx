import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const Principles = () => {
  const { language } = useTheme();

  const sections = language === 'pt' ? [
    {
      title: "Segurança Digital como Responsabilidade",
      paragraphs: [
        "Segurança não é paranoia. É postura profissional diante de um cenário onde vulnerabilidades são exploradas diariamente.",
        "Quem lidera projetos digitais tem a obrigação de proteger dados, contas e infraestrutura. Não como diferencial, mas como requisito mínimo de operação."
      ]
    },
    {
      title: "Infraestrutura como Parte da Arquitetura",
      paragraphs: [
        "Hospedagem não é detalhe operacional. É uma decisão arquitetural que impacta desempenho, segurança e reputação.",
        "Decisões técnicas mal fundamentadas geram custos invisíveis. Cada escolha de infraestrutura reflete o nível de seriedade do projeto."
      ]
    },
    {
      title: "Gestão de Comunidades com Estrutura",
      paragraphs: [
        "Comunidade não é improviso. Requer cultura definida, organização clara e responsabilidade sobre o ambiente criado.",
        "Moderação, estrutura de equipe e crescimento orgânico são pilares que separam comunidades amadoras de projetos sustentáveis."
      ]
    },
    {
      title: "Responsabilidade Técnica e Ética",
      paragraphs: [
        "Este projeto não incentiva práticas nocivas, não divulga métodos de exploração e não promove atalhos que comprometam a integridade técnica.",
        "O foco é maturidade digital. Cada conteúdo publicado passa por um filtro de responsabilidade antes de ser disponibilizado."
      ]
    },
    {
      title: "Profundidade acima de Volume",
      paragraphs: [
        "Qualidade acima de quantidade. Cada artigo é desenvolvido com intenção estratégica, não para alimentar métricas.",
        "O objetivo é que cada conteúdo seja uma referência consultável, não um texto descartável."
      ]
    }
  ] : [
    {
      title: "Digital Security as Responsibility",
      paragraphs: [
        "Security is not paranoia. It is a professional posture in a landscape where vulnerabilities are exploited daily.",
        "Those who lead digital projects have the obligation to protect data, accounts, and infrastructure. Not as a differentiator, but as a minimum operational requirement."
      ]
    },
    {
      title: "Infrastructure as Part of Architecture",
      paragraphs: [
        "Hosting is not an operational detail. It is an architectural decision that impacts performance, security, and reputation.",
        "Poorly grounded technical decisions generate invisible costs. Every infrastructure choice reflects the seriousness of the project."
      ]
    },
    {
      title: "Community Management with Structure",
      paragraphs: [
        "Community is not improvisation. It requires defined culture, clear organization, and responsibility for the environment created.",
        "Moderation, team structure, and organic growth are pillars that separate amateur communities from sustainable projects."
      ]
    },
    {
      title: "Technical and Ethical Responsibility",
      paragraphs: [
        "This project does not encourage harmful practices, does not disclose exploitation methods, and does not promote shortcuts that compromise technical integrity.",
        "The focus is digital maturity. Every piece of content goes through a responsibility filter before being published."
      ]
    },
    {
      title: "Depth over Volume",
      paragraphs: [
        "Quality over quantity. Each article is developed with strategic intent, not to feed metrics.",
        "The goal is for each piece of content to be a consultable reference, not disposable text."
      ]
    }
  ];

  return (
    <Layout>
      <SEO
        title={getText(language, "Princípios | Talisson Souza", "Principles | Talisson Souza")}
        description={getText(
          language,
          "Os princípios que fundamentam este projeto. Segurança digital, infraestrutura profissional, gestão de comunidades e responsabilidade técnica.",
          "The principles that ground this project. Digital security, professional infrastructure, community management, and technical responsibility."
        )}
        keywords={["segurança digital", "infraestrutura", "gestão de comunidades", "responsabilidade técnica", "princípios"]}
        canonical={getText(language, "/principios", "/en-us/principles")}
      />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <motion.span
              className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {getText(language, 'Fundamentos', 'Foundations')}
            </motion.span>
            <AnimatedTitle variant="hero" as="h1" className="mb-8">
              {getText(language, 'Princípios', 'Principles')}
            </AnimatedTitle>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
              {getText(
                language,
                'Este site não publica conteúdo superficial. Existe uma base conceitual por trás de cada artigo, cada decisão técnica e cada recomendação. Os princípios abaixo orientam todo o trabalho publicado aqui.',
                'This site does not publish superficial content. There is a conceptual foundation behind every article, every technical decision, and every recommendation. The principles below guide all work published here.'
              )}
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="p-8 lg:p-10">
                  <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Principles;
