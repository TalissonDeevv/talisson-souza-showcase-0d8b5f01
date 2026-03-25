import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import NewsletterForm from "@/components/ui/NewsletterForm";
import GlassCard from "@/components/ui/GlassCard";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { Mail, BookOpen, Shield, Clock, Zap, Users } from "lucide-react";

const Newsletter = () => {
  const { language } = useTheme();

  const benefits = [
    {
      icon: BookOpen,
      title: getText(language, "Conteúdo exclusivo", "Exclusive content"),
      description: getText(language,
        "Artigos, análises e insights que não são publicados no site. Conteúdo pensado para quem quer ir além do superficial.",
        "Articles, analyses and insights not published on the site. Content designed for those who want to go beyond the surface."
      ),
    },
    {
      icon: Zap,
      title: getText(language, "Direto ao ponto", "Straight to the point"),
      description: getText(language,
        "Sem enrolação, sem clickbait. Cada email entrega valor real sobre tecnologia, carreira e decisões técnicas.",
        "No fluff, no clickbait. Each email delivers real value about technology, career and technical decisions."
      ),
    },
    {
      icon: Clock,
      title: getText(language, "Frequência respeitosa", "Respectful frequency"),
      description: getText(language,
        "Envios quinzenais ou quando houver conteúdo relevante. Sem spam, sem emails diários desnecessários.",
        "Biweekly sends or when there is relevant content. No spam, no unnecessary daily emails."
      ),
    },
    {
      icon: Shield,
      title: getText(language, "Privacidade garantida", "Privacy guaranteed"),
      description: getText(language,
        "Seus dados nunca são compartilhados. Double opt-in para confirmação. Cancelamento com um clique.",
        "Your data is never shared. Double opt-in for confirmation. One-click unsubscribe."
      ),
    },
    {
      icon: Users,
      title: getText(language, "Comunidade técnica", "Technical community"),
      description: getText(language,
        "Faça parte de uma comunidade de desenvolvedores que valoriza fundamentos, arquitetura e crescimento profissional.",
        "Join a community of developers who value fundamentals, architecture and professional growth."
      ),
    },
    {
      icon: Mail,
      title: getText(language, "Primeiros a saber", "First to know"),
      description: getText(language,
        "Receba novos artigos, projetos e recursos antes de qualquer publicação no site.",
        "Receive new articles, projects and resources before any publication on the site."
      ),
    },
  ];

  const topics = language === "pt"
    ? [
        "Arquitetura de software e decisões técnicas",
        "Fundamentos que a maioria ignora",
        "Carreira e estratégia profissional",
        "Segurança digital e boas práticas",
        "Análises de mercado e tendências",
        "Projetos reais e lições aprendidas",
      ]
    : [
        "Software architecture and technical decisions",
        "Fundamentals that most people ignore",
        "Career and professional strategy",
        "Digital security and best practices",
        "Market analysis and trends",
        "Real projects and lessons learned",
      ];

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language,
          "Newsletter | Talisson Souza",
          "Newsletter | Talisson Souza"
        )}
        description={getText(language,
          "Inscreva-se na newsletter de Talisson Souza. Conteúdo sobre tecnologia, arquitetura de software, carreira e estratégia para desenvolvedores.",
          "Subscribe to Talisson Souza's newsletter. Content about technology, software architecture, career and strategy for developers."
        )}
        canonical={language === "en" ? "/en-us/newsletter" : "/newsletter"}
      />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center relative overflow-visible pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)" }}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-6">
              <Mail className="w-4 h-4 text-muted-foreground/60" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 font-medium">
                Newsletter
              </span>
            </div>
            <AnimatedTitle variant="hero" as="h1" className="mb-5">
              {getText(language,
                "Conteúdo que faz diferença na sua carreira",
                "Content that makes a difference in your career"
              )}
            </AnimatedTitle>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
              {getText(language,
                "Receba artigos, análises e insights sobre tecnologia, arquitetura de software e estratégia profissional. Direto no seu email, sem ruído.",
                "Receive articles, analyses and insights about technology, software architecture and professional strategy. Straight to your inbox, no noise."
              )}
            </p>
            <div className="max-w-xl">
              <NewsletterForm variant="inline" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What you'll receive */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-3">
              {getText(language, "O que você vai receber", "What you'll receive")}
            </h2>
            <p className="text-sm text-muted-foreground/60 mb-10 max-w-xl">
              {getText(language,
                "Cada email é pensado para entregar valor real. Nada genérico, nada superficial.",
                "Each email is designed to deliver real value. Nothing generic, nothing superficial."
              )}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.06}>
                <GlassCard className="p-6 h-full">
                  <benefit.icon className="w-5 h-5 text-muted-foreground/50 mb-4" />
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-muted-foreground/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <GlassCard className="p-8 lg:p-10">
                <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-6">
                  {getText(language, "Temas abordados", "Topics covered")}
                </h2>
                <ul className="space-y-3">
                  {topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-foreground/40 mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground/70 leading-relaxed">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Frequency & expectations */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <GlassCard className="p-8 lg:p-10">
                <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-4">
                  {getText(language, "Frequência e compromisso", "Frequency and commitment")}
                </h2>
                <div className="space-y-4 text-sm text-muted-foreground/70 leading-relaxed">
                  <p>
                    {getText(language,
                      "Os emails são enviados a cada duas semanas, ou quando houver conteúdo que justifique um envio. A prioridade é qualidade, não quantidade.",
                      "Emails are sent every two weeks, or when there is content that justifies sending. The priority is quality, not quantity."
                    )}
                  </p>
                  <p>
                    {getText(language,
                      "Cada edição é escrita manualmente, sem automação de conteúdo genérico. O objetivo é que cada email valha o tempo de leitura.",
                      "Each edition is manually written, without generic content automation. The goal is for each email to be worth the reading time."
                    )}
                  </p>
                  <p>
                    {getText(language,
                      "Você pode cancelar a qualquer momento com um clique. Sem perguntas, sem complicações. Seus dados são protegidos conforme nossa ",
                      "You can unsubscribe at any time with one click. No questions, no complications. Your data is protected according to our "
                    )}
                    <a
                      href={getText(language, "/politica-de-privacidade", "/en-us/privacy-policy")}
                      className="text-foreground/70 underline underline-offset-4 hover:text-foreground transition-colors"
                    >
                      {getText(language, "política de privacidade", "privacy policy")}
                    </a>.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <NewsletterForm variant="card" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
