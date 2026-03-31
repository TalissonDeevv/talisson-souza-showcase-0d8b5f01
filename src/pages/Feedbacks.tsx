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
import { feedbacks as feedbacksData } from "@/data/feedbacks";

const Feedbacks = () => {
  const { language } = useTheme();
  const lang = language === 'pt' ? 'pt' : 'en';

  const feedbacks = feedbacksData.map(fb => ({
    name: fb.name,
    role: fb.role[lang],
    text: fb.text[lang],
    image: fb.image
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Talisson Souza",
    "url": "https://www.talissonsouza.com.br",
    "jobTitle": language === 'pt' ? "Desenvolvedor Full Stack & CEO" : "Full Stack Developer & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "Cheetah Solutions Network"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": String(feedbacks.length)
    },
    "review": feedbacks.map((fb) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": fb.name
      },
      "reviewBody": fb.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }))
  };

  return (
    <Layout withPadding={false}>
      <SEO
        title={language === 'pt' ? "Feedbacks | Talisson Souza" : "Feedbacks | Talisson Souza"}
        description={language === 'pt'
          ? "Veja o que colegas, parceiros e clientes dizem sobre o trabalho de Talisson Souza. Feedbacks reais de quem já colaborou comigo."
          : "See what colleagues, partners and clients say about Talisson Souza's work. Real feedback from people who have worked with me."}
        canonical={language === 'en' ? '/en-us/feedbacks' : '/feedbacks'}
        keywords={language === 'pt'
          ? ['feedbacks', 'depoimentos', 'recomendações', 'avaliações Talisson Souza', 'reputação Talisson Souza', 'reviews Talisson Souza']
          : ['feedbacks', 'testimonials', 'recommendations', 'Talisson Souza reviews', 'Talisson Souza reputation']}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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
      <section className="py-16 md:py-24" aria-label={getText(language, 'Depoimentos e avaliações', 'Testimonials and reviews')}>
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {feedbacks.map((feedback, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <article aria-label={getText(language, `Depoimento de ${feedback.name}`, `Testimonial from ${feedback.name}`)}>
                  <GlassCard className="p-6 md:p-8 h-full flex flex-col">
                    <Quote className="w-5 h-5 text-muted-foreground/30 mb-4 shrink-0" aria-hidden="true" />

                    <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow italic text-sm">
                      "{feedback.text}"
                    </blockquote>

                    <footer className="flex items-center gap-4 pt-4 border-t border-border/30">
                      {feedback.image ? (
                        <img
                          src={feedback.image}
                          alt={feedback.name}
                          className="w-10 h-10 rounded-full object-cover border border-border/40"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground font-medium text-sm border border-border/40" aria-hidden="true">
                          {feedback.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                      )}
                      <div>
                        <cite className="font-medium text-foreground text-sm not-italic block">{feedback.name}</cite>
                        <p className="text-xs text-muted-foreground/70">{feedback.role}</p>
                      </div>
                    </footer>
                  </GlassCard>
                </article>
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
