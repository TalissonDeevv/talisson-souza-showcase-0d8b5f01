import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
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
        'Guia de Maturidade, Gestao e Seguranca para Projetos de Bots no Discord',
        'Maturity, Management & Security Guide for Discord Bot Projects'
      ),
      excerpt: getText(language,
        'Guia completo sobre maturidade, gestao e seguranca em projetos de bots no Discord, abordando boas praticas, permissoes, postura profissional e prevencao de falhas graves.',
        'A comprehensive guide on maturity, management and security in Discord bot projects, covering best practices, permissions, professional conduct and prevention of critical failures.'
      ),
      date: getText(language, '7 de Fevereiro, 2025', 'February 7, 2025'),
      readTime: '25 min',
      path: getText(language, '/artigos/bots-discord', '/en-us/articles/discord-bots'),
    },
  ];

  return (
    <Layout>
      <SEO
        title={getText(language,
          'Artigos e Guias Tecnicos | Talisson Souza',
          'Articles & Technical Guides | Talisson Souza'
        )}
        description={getText(language,
          'Artigos e guias tecnicos sobre tecnologia, gestao, seguranca, projetos digitais e boas praticas profissionais.',
          'Articles and technical guides on technology, management, security, digital projects and professional best practices.'
        )}
        canonical={getText(language, '/artigos', '/en-us/articles')}
        keywords={['artigos tecnicos', 'guias', 'tecnologia', 'gestao', 'seguranca', 'bots discord']}
      />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, 'Publicacoes', 'Publications')}
              </motion.span>
              <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {getText(language, 'Artigos e Guias Tecnicos', 'Articles & Technical Guides')}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                {getText(language,
                  'Publico artigos e guias tecnicos sobre tecnologia, gestao, seguranca, projetos digitais e boas praticas profissionais, com foco em maturidade, responsabilidade e crescimento sustentavel.',
                  'I publish articles and technical guides on technology, management, security, digital projects and professional best practices, with a focus on maturity, responsibility and sustainable growth.'
                )}
              </p>
            </div>
          </ScrollReveal>

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
      </section>
    </Layout>
  );
};

export default Articles;
