import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { motion } from "framer-motion";

const Articles = () => {
  const { language } = useTheme();

  const articles = [
    {
      title: getText(language,
        'Guia de Maturidade, Gestão e Segurança para Projetos de Bots no Discord',
        'Maturity, Management & Security Guide for Discord Bot Projects'
      ),
      excerpt: getText(language,
        'Guia completo sobre maturidade, gestão e segurança em projetos de bots no Discord, abordando boas práticas, permissões, postura profissional e prevenção de falhas graves.',
        'A comprehensive guide on maturity, management and security in Discord bot projects, covering best practices, permissions, professional conduct and prevention of critical failures.'
      ),
      date: getText(language, '7 de Fevereiro, 2025', 'February 7, 2025'),
      readTime: '25 min',
      path: language === 'en' ? '/en-us/articles/discord-bots' : '/artigos/bots-discord',
      tags: ['Discord', 'Security', 'Management'],
    },
  ];

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language,
          'Artigos e Guias Técnicos | Talisson Souza',
          'Articles & Technical Guides | Talisson Souza'
        )}
        description={getText(language,
          'Artigos e guias técnicos sobre tecnologia, gestão, segurança, projetos digitais e boas práticas profissionais.',
          'Articles and technical guides on technology, management, security, digital projects and professional best practices.'
        )}
        canonical={language === 'en' ? '/en-us/articles' : '/artigos'}
        keywords={['artigos tecnicos', 'guias', 'tecnologia', 'gestao', 'seguranca', 'bots discord']}
      />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
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
          style={{ background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)' }}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <ScrollReveal>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              {getText(language, 'Publicações', 'Publications')}
            </motion.span>
            <AnimatedTitle variant="hero" as="h1" className="mb-6">
              {getText(language, 'Artigos e Guias Técnicos', 'Articles & Technical Guides')}
            </AnimatedTitle>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {getText(language,
                'Publico artigos e guias técnicos sobre tecnologia, gestão, segurança, projetos digitais e boas práticas profissionais, com foco em maturidade, responsabilidade e crescimento sustentável.',
                'I publish articles and technical guides on technology, management, security, digital projects and professional best practices, with a focus on maturity, responsibility and sustainable growth.'
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 gap-6 max-w-4xl">
            {articles.map((article, index) => (
              <ScrollReveal key={article.path} delay={index * 0.1}>
                <Link to={article.path}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GlassCard className="p-8 lg:p-10 group hover:border-foreground/20 transition-all duration-500">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-foreground/50" />
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{article.date}</span>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                          <span>{article.readTime} {getText(language, 'de leitura', 'read')}</span>
                        </div>
                      </div>

                      <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-gradient transition-all duration-500 leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 rounded-full border border-border/20 bg-background/50 text-muted-foreground/70">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        <span className="relative">
                          {getText(language, 'Ler artigo', 'Read article')}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </GlassCard>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Articles;
