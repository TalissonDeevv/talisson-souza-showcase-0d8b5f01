import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { CheckCircle, AlertTriangle, ArrowRight, ArrowUpRight, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

import {
  heroContent,
  philosophyContent,
  processContent,
  technicalDecisionsContent,
  criteriaContent,
  policyContent,
  riskContent,
  qualityContent,
  ctaContent,
} from "@/data/how-i-work-content";

const t = (language: string, pair: { pt: string; en: string }) =>
  language === "en" ? pair.en : pair.pt;

/* ──────────────────────────────────────────────────────────────────
   Reusable visual blocks (same design patterns as before)
   ────────────────────────────────────────────────────────────────── */

const SectionLabel = ({ text }: { text: string }) => (
  <motion.span
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
  >
    {text}
  </motion.span>
);

const CardGrid = ({
  cards,
  language,
}: {
  cards: typeof philosophyContent.cards;
  language: string;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {cards.map((card, index) => (
      <ScrollReveal key={index} delay={index * 0.1}>
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
          <div
            className="h-full p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group"
            style={{ boxShadow: "0 4px 20px hsl(var(--foreground) / 0.02)" }}
          >
            <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center mb-6 group-hover:border-foreground/20 transition-colors duration-300">
              <card.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3 leading-tight">
              {t(language, card.title)}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(language, card.description)}
            </p>
          </div>
        </motion.div>
      </ScrollReveal>
    ))}
  </div>
);

const SectionDivider = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
);

/* ──────────────────────────────────────────────────────────────────
   Page component
   ────────────────────────────────────────────────────────────────── */

const HowIWork = () => {
  const { language } = useTheme();

  return (
    <Layout withPadding={false}>
      <SEO
        title="Como Trabalho | Processo e Metodologia"
        description="Conheça meu processo de trabalho: como inicio projetos, valido escopo, tomo decisões técnicas e gerencio riscos para entregar resultados consistentes."
        canonical="/como-trabalho"
        keywords={[
          "processo",
          "metodologia",
          "gestão de projetos",
          "desenvolvimento profissional",
          "decisões técnicas",
          "arquitetura de software",
          "qualidade",
          "responsabilidade técnica",
        ]}
      />

      {/* ─── 1. HERO ──────────────────────────────────────────── */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
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
          style={{
            background:
              "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)",
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
                {t(language, heroContent.label)}
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-6">
                {t(language, heroContent.title)}
              </AnimatedTitle>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t(language, heroContent.description)}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 2. FILOSOFIA DE TRABALHO ─────────────────────────── */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <SectionLabel text={t(language, philosophyContent.label)} />
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
              {t(language, philosophyContent.title)}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
              {t(language, philosophyContent.subtitle)}
            </p>
          </ScrollReveal>
          <CardGrid cards={philosophyContent.cards} language={language} />
        </div>
      </ParallaxSection>

      {/* ─── 3. PROCESSO ESTRUTURADO ──────────────────────────── */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <SectionDivider />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <SectionLabel text={t(language, processContent.label)} />
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
              {t(language, processContent.title)}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
              {t(language, processContent.subtitle)}
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {processContent.steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className="relative p-8 lg:p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group overflow-hidden"
                    style={{
                      boxShadow:
                        "0 4px 20px hsl(var(--foreground) / 0.02)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 relative">
                      <div className="lg:col-span-2 flex items-start gap-4">
                        <span className="text-5xl lg:text-6xl font-serif text-foreground/[0.08] group-hover:text-foreground/15 transition-colors duration-500">
                          {step.number}
                        </span>
                        <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center group-hover:border-foreground/20 transition-colors duration-300">
                          <step.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                        </div>
                      </div>

                      <div className="lg:col-span-5">
                        <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 leading-tight">
                          {t(language, step.title)}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(language, step.description)}
                        </p>
                      </div>

                      <div className="lg:col-span-5">
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 text-foreground/40 mt-0.5 flex-shrink-0" />
                              <span>{t(language, detail)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ─── 4. DECISÕES TÉCNICAS ─────────────────────────────── */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
            <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <SectionLabel text={t(language, technicalDecisionsContent.label)} />
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
              {t(language, technicalDecisionsContent.title)}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
              {t(language, technicalDecisionsContent.subtitle)}
            </p>
          </ScrollReveal>
          <CardGrid cards={technicalDecisionsContent.cards} language={language} />
        </div>
      </ParallaxSection>

      {/* ─── 5. CRITÉRIOS ─────────────────────────────────────── */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <SectionDivider />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <SectionLabel text={t(language, criteriaContent.label)} />
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {t(language, criteriaContent.title)}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {criteriaContent.groups.map((criteria, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="h-full p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
                    style={{
                      boxShadow: "0 4px 20px hsl(var(--foreground) / 0.02)",
                    }}
                  >
                    <h3 className="font-serif text-xl text-foreground mb-6 leading-tight">
                      {t(language, criteria.title)}
                    </h3>
                    <ul className="space-y-3">
                      {criteria.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          {criteria.positive ? (
                            <CheckCircle className="w-4 h-4 text-green-500/70 mt-0.5 flex-shrink-0" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-amber-500/70 mt-0.5 flex-shrink-0" />
                          )}
                          <span>{t(language, item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ─── 6. POLÍTICA PROFISSIONAL ─────────────────────────── */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <SectionLabel text={t(language, policyContent.label)} />
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
              {t(language, policyContent.title)}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
              {t(language, policyContent.subtitle)}
            </p>
          </ScrollReveal>
          <CardGrid cards={policyContent.items} language={language} />
        </div>
      </ParallaxSection>

      {/* ─── 7. GESTÃO DE RISCO ───────────────────────────────── */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <SectionDivider />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <SectionLabel text={t(language, riskContent.label)} />
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
              {t(language, riskContent.title)}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
              {t(language, riskContent.subtitle)}
            </p>
          </ScrollReveal>
          <CardGrid cards={riskContent.cards} language={language} />
        </div>
      </ParallaxSection>

      {/* ─── 8. COMPROMISSO COM QUALIDADE ─────────────────────── */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
            <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <SectionLabel text={t(language, qualityContent.label)} />
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
              {t(language, qualityContent.title)}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
              {t(language, qualityContent.subtitle)}
            </p>
          </ScrollReveal>
          <CardGrid cards={qualityContent.cards} language={language} />
        </div>
      </ParallaxSection>

      {/* ─── 9. CTA ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-background to-background" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-foreground/5 to-transparent blur-3xl opacity-50" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard className="max-w-3xl mx-auto p-10 lg:p-12 text-center hover:border-foreground/20 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-foreground/60" />
                </div>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
                >
                  {t(language, ctaContent.label)}
                </motion.span>

                <h2 className="font-serif text-2xl lg:text-4xl text-foreground mb-6 leading-tight">
                  {t(language, ctaContent.title)}
                </h2>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {t(language, ctaContent.description)}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="https://wa.me/5581993964261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                    style={{
                      boxShadow: "0 0 30px hsl(var(--foreground) / 0.2)",
                    }}
                  >
                    {t(language, ctaContent.primaryCta)}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <Link
                    to="/servicos"
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    <span>{t(language, ctaContent.secondaryCta)}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default HowIWork;
