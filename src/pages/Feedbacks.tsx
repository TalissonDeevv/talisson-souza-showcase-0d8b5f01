import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { ExternalLink, Quote, Star } from "lucide-react";
import { feedbacks as feedbacksData } from "@/data/feedbacks";
import signatureFeedbacks from "@/assets/signature-feedbacks.png";

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

      <PageHero
        compact
        signature={signatureFeedbacks}
        signatureAlt="Feedbacks"
        title={getText(language, 'O que dizem', 'What people say')}
        subtitle={getText(language,
          'Recomendações reais de pessoas que acompanharam minha execução, postura técnica e forma de colaborar.',
          'Real recommendations from people who followed my execution, technical posture and way of collaborating.'
        )}
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: feedbacks.length, label: getText(language, 'feedbacks', 'feedbacks') },
              { value: '5.0', label: getText(language, 'reputação', 'reputation') },
              { value: 'real', label: getText(language, 'relatos', 'notes') },
            ]}
          />
        }
      >
        <IdentityPanel hover={false} className="hidden p-6 lg:block">
          <div className="mb-8 flex items-center justify-between">
            <Quote className="h-5 w-5 text-foreground/70" />
            <div className="flex gap-1 text-foreground/70">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {getText(language,
              'A prova social aqui não é enfeite: é registro de colaboração, confiança e entrega.',
              'Social proof here is not decoration: it is a record of collaboration, trust and delivery.'
            )}
          </p>
        </IdentityPanel>
      </PageHero>

      <section className="pb-20" aria-label={getText(language, 'Depoimentos e avaliações', 'Testimonials and reviews')}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {feedbacks.map((feedback, index) => (
              <ScrollReveal key={index} delay={index * 0.05} className={index === 1 || index === 6 ? 'xl:col-span-2' : ''}>
                <article
                  aria-label={getText(language, `Depoimento de ${feedback.name}`, `Testimonial from ${feedback.name}`)}
                  className="h-full"
                >
                  <IdentityPanel className="flex h-full flex-col p-6">
                    <div className="mb-8 flex items-start justify-between gap-6">
                      <Quote className="h-5 w-5 shrink-0 text-foreground/25" aria-hidden="true" />
                      <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/45">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      "{feedback.text}"
                    </blockquote>

                    <footer className="mt-7 flex items-center gap-4 border-t border-border/25 pt-5">
                      {feedback.image ? (
                        <img
                          src={feedback.image}
                          alt={feedback.name}
                          className="h-11 w-11 rounded-full border border-border/40 object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border/40 bg-muted/50 text-sm font-medium text-muted-foreground" aria-hidden="true">
                          {feedback.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <cite className="block truncate text-sm font-medium not-italic text-foreground">{feedback.name}</cite>
                        <p className="truncate text-xs text-muted-foreground/70">{feedback.role}</p>
                      </div>
                    </footer>
                  </IdentityPanel>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/20 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <IdentityPanel hover={false} className="mx-auto max-w-3xl p-8 text-center lg:p-10">
              <h2 className="font-serif text-3xl leading-tight text-foreground">
                {getText(language, 'Já trabalhou comigo?', 'Have you worked with me?')}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {getText(language,
                  'Se a gente já colaborou em algum projeto, seu feedback ajuda a documentar a qualidade dessa relação.',
                  "If we've collaborated on a project, your feedback helps document the quality of that relationship."
                )}
              </p>
              <Button size="lg" asChild className="mt-8 rounded-full">
                <a
                  href="https://forms.gle/NLoW8A4L22vP8FfT8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getText(language, 'Deixar um feedback', 'Leave feedback')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </IdentityPanel>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Feedbacks;
