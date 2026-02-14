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
      title: getText(language, 'Vulnerabilidade ao Instalar Dependências: O Risco que Ninguém Leva a Sério', 'Vulnerability When Installing Dependencies: The Risk Nobody Takes Seriously'),
      excerpt: getText(language,
        'Análise sobre os riscos de segurança ao instalar dependências em projetos de software, responsabilidade do desenvolvedor e mentalidade preventiva.',
        'Analysis on security risks when installing dependencies in software projects, developer responsibility, and preventive mindset.'
      ),
      date: getText(language, '14 de Fevereiro, 2025', 'February 14, 2025'),
      readTime: '16 min',
      path: language === 'en' ? '/en-us/articles/dependency-vulnerabilities' : '/artigos/vulnerabilidade-dependencias',
      tags: [getText(language, 'Segurança', 'Security'), getText(language, 'Dependências', 'Dependencies'), 'npm'],
    },
    {
      title: getText(language, 'Política e Empreendedorismo: Por Que Estudar Antes de Opinar', 'Politics and Entrepreneurship: Why Study Before Opining'),
      excerpt: getText(language,
        'Reflexão sobre como decisões políticas impactam negócios e tecnologia, a importância do pensamento crítico e a responsabilidade ao produzir conteúdo.',
        'Reflection on how political decisions impact business and technology, the importance of critical thinking, and responsibility when producing content.'
      ),
      date: getText(language, '14 de Fevereiro, 2025', 'February 14, 2025'),
      readTime: '17 min',
      path: language === 'en' ? '/en-us/articles/politics-entrepreneurship' : '/artigos/politica-empreendedorismo',
      tags: [getText(language, 'Política', 'Politics'), getText(language, 'Empreendedorismo', 'Entrepreneurship'), getText(language, 'Pensamento Crítico', 'Critical Thinking')],
    },
    {
      title: getText(language, 'Fundamentos de Tecnologia: A Lógica Por Trás dos Sistemas', 'Technology Fundamentals: The Logic Behind Systems'),
      excerpt: getText(language,
        'Reflexão sobre a importância dos fundamentos de tecnologia, raciocínio lógico, arquitetura de sistemas e pensamento estruturado antes das ferramentas.',
        'Reflection on the importance of technology fundamentals, logical reasoning, systems architecture, and structured thinking before tools.'
      ),
      date: getText(language, '14 de Fevereiro, 2025', 'February 14, 2025'),
      readTime: '15 min',
      path: language === 'en' ? '/en-us/articles/tech-fundamentals' : '/artigos/fundamentos-tecnologia',
      tags: [getText(language, 'Fundamentos', 'Fundamentals'), getText(language, 'Arquitetura', 'Architecture'), getText(language, 'Lógica', 'Logic')],
    },
    {
      title: getText(language, 'Como Divulgar Comunidades e Bots no Discord de Forma Estratégica', 'How to Strategically Promote Discord Communities and Bots'),
      excerpt: getText(language,
        'Guia estratégico sobre divulgação de comunidades e bots no Discord com foco em crescimento orgânico, posicionamento e autoridade.',
        'Strategic guide on promoting Discord communities and bots focusing on organic growth, positioning, and authority.'
      ),
      date: getText(language, '14 de Fevereiro, 2025', 'February 14, 2025'),
      readTime: '16 min',
      path: language === 'en' ? '/en-us/articles/discord-promotion' : '/artigos/divulgacao-discord',
      tags: ['Discord', getText(language, 'Divulgação', 'Promotion'), getText(language, 'Crescimento', 'Growth')],
    },
    {
      title: getText(language, 'Moderação, Gestão e Administração de Servidores Discord', 'Moderation, Management and Administration of Discord Servers'),
      excerpt: getText(language,
        'Guia sobre moderação, gestão e administração de servidores Discord com foco em responsabilidade, estrutura organizacional, regras e segurança.',
        'Guide on Discord server moderation, management, and administration focusing on responsibility, organizational structure, rules, and security.'
      ),
      date: getText(language, '14 de Fevereiro, 2025', 'February 14, 2025'),
      readTime: '18 min',
      path: language === 'en' ? '/en-us/articles/discord-moderation' : '/artigos/moderacao-discord',
      tags: ['Discord', getText(language, 'Moderação', 'Moderation'), getText(language, 'Gestão', 'Management')],
    },
    {
      title: getText(language, 'De CLT a Freelancer: Como Fazer a Transição com Estratégia', 'From Employee to Freelancer: How to Make the Transition Strategically'),
      excerpt: getText(language,
        'Guia estratégico para desenvolvedores CLT que desejam migrar para o mercado freelancer com posicionamento, autoridade e planejamento profissional.',
        'Strategic guide for employed developers who want to migrate to the freelance market with positioning, authority, and professional planning.'
      ),
      date: getText(language, '13 de Fevereiro, 2025', 'February 13, 2025'),
      readTime: '18 min',
      path: language === 'en' ? '/en-us/articles/clt-to-freelancer' : '/artigos/clt-para-freelancer',
      tags: [getText(language, 'Carreira', 'Career'), 'Freelancer', getText(language, 'Estratégia', 'Strategy')],
    },
    {
      title: getText(language, 'Como Registrar uma Marca no INPI', 'How to Register a Trademark at INPI'),
      excerpt: getText(language,
        'Guia completo e didático sobre o processo de registro de marca no INPI para empreendedores, freelancers, startups e donos de pequenas empresas no Brasil.',
        'A complete and didactic guide on the trademark registration process at INPI for entrepreneurs, freelancers, startups, and small business owners in Brazil.'
      ),
      date: getText(language, '11 de Fevereiro, 2025', 'February 11, 2025'),
      readTime: '20 min',
      path: language === 'en' ? '/en-us/articles/inpi' : '/artigos/inpi',
      tags: [getText(language, 'Registro de Marca', 'Trademark'), 'INPI', getText(language, 'Empreendedorismo', 'Entrepreneurship')],
    },
    {
      title: getText(language, 'Como Criar um Bot Profissional no Discord', 'How to Create a Professional Discord Bot'),
      excerpt: getText(language,
        'Guia estratégico sobre como criar um bot profissional no Discord com foco em planejamento, qualidade, postura e visão de longo prazo.',
        'Strategic guide on how to create a professional Discord bot focusing on planning, quality, conduct, and long-term vision.'
      ),
      date: getText(language, '12 de Fevereiro, 2025', 'February 12, 2025'),
      readTime: '15 min',
      path: language === 'en' ? '/en-us/articles/professional-discord-bot' : '/artigos/bot-profissional-discord',
      tags: ['Discord', getText(language, 'Bots', 'Bots'), getText(language, 'Gestão', 'Management')],
    },
    {
      title: getText(language, 'Por que Alugar Bots no Discord Está Cada Vez Mais Nichado', 'Why Discord Bot Rental Is Becoming Increasingly Niche'),
      excerpt: getText(language,
        'Análise estratégica sobre o mercado de aluguel de bots no Discord, saturação, falta de originalidade e os caminhos para construir projetos genuínos.',
        'Strategic analysis on the Discord bot rental market, saturation, lack of originality, and paths to building genuine projects.'
      ),
      date: getText(language, '12 de Fevereiro, 2025', 'February 12, 2025'),
      readTime: '12 min',
      path: language === 'en' ? '/en-us/articles/discord-bot-rental' : '/artigos/aluguel-bots-discord',
      tags: ['Discord', getText(language, 'Mercado', 'Market'), getText(language, 'Estratégia', 'Strategy')],
    },
    {
      title: getText(language, 'Como Monetizar Bots no Discord Corretamente', 'How to Monetize Discord Bots Correctly'),
      excerpt: getText(language,
        'Guia estratégico sobre como monetizar bots no Discord de forma profissional, sustentável e transparente.',
        'Strategic guide on how to monetize Discord bots professionally, sustainably, and transparently.'
      ),
      date: getText(language, '12 de Fevereiro, 2025', 'February 12, 2025'),
      readTime: '14 min',
      path: language === 'en' ? '/en-us/articles/monetizing-bots' : '/artigos/monetizar-bots',
      tags: ['Discord', getText(language, 'Monetização', 'Monetization'), getText(language, 'Negócios', 'Business')],
    },
    {
      title: getText(language, 'Como Criar um Nicho Para Seu Projeto de Bot no Discord', 'How to Create a Niche for Your Discord Bot Project'),
      excerpt: getText(language,
        'Guia estratégico sobre como encontrar e construir um nicho para projetos de bots no Discord, com foco em diferenciação e posicionamento.',
        'Strategic guide on finding and building a niche for Discord bot projects, focusing on differentiation and positioning.'
      ),
      date: getText(language, '12 de Fevereiro, 2025', 'February 12, 2025'),
      readTime: '13 min',
      path: language === 'en' ? '/en-us/articles/discord-bot-niche' : '/artigos/nicho-bot-discord',
      tags: ['Discord', getText(language, 'Nicho', 'Niche'), getText(language, 'Posicionamento', 'Positioning')],
    },
    {
      title: getText(language, 'O Que é Desenvolvimento Full Stack?', 'What is Full Stack Development?'),
      excerpt: getText(language,
        'Entenda o que realmente significa ser um desenvolvedor full stack, as competências envolvidas e o valor estratégico desse perfil.',
        'Understand what it really means to be a full stack developer, the competencies involved, and the strategic value of this profile.'
      ),
      date: getText(language, '12 de Fevereiro, 2025', 'February 12, 2025'),
      readTime: '12 min',
      path: language === 'en' ? '/en-us/articles/full-stack-development' : '/artigos/desenvolvimento-full-stack',
      tags: ['Full Stack', getText(language, 'Carreira', 'Career'), getText(language, 'Tecnologia', 'Technology')],
    },
    {
      title: getText(language, 'Quanto Custa Desenvolver um Sistema?', 'How Much Does It Cost to Develop a System?'),
      excerpt: getText(language,
        'Entenda os fatores que definem o custo de desenvolvimento de um sistema e como planejar seu investimento em tecnologia.',
        'Understand the factors that define system development costs and how to plan your technology investment.'
      ),
      date: getText(language, '12 de Fevereiro, 2025', 'February 12, 2025'),
      readTime: '12 min',
      path: language === 'en' ? '/en-us/articles/system-development-cost' : '/artigos/custo-desenvolvimento-sistema',
      tags: [getText(language, 'Desenvolvimento', 'Development'), getText(language, 'Custos', 'Costs'), getText(language, 'Estratégia', 'Strategy')],
    },
    {
      title: getText(language,
        'Se a Gente Consegue Imaginar, É Porque É Possível',
        'If We Can Imagine It, It\'s Because It\'s Possible'
      ),
      excerpt: getText(language,
        'Reflexão sobre visão, persistência e empreendedorismo. Toda grande empresa começou com alguém imaginando algo que ainda não existia.',
        'A reflection on vision, persistence and entrepreneurship. Every great company started with someone imagining something that didn\'t exist yet.'
      ),
      date: getText(language, '10 de Fevereiro, 2025', 'February 10, 2025'),
      readTime: '8 min',
      path: language === 'en' ? '/en-us/articles/vision-and-persistence' : '/artigos/visao-e-persistencia',
      tags: [getText(language, 'Empreendedorismo', 'Entrepreneurship'), getText(language, 'Visão', 'Vision'), getText(language, 'Persistência', 'Persistence')],
    },
    {
      title: getText(language,
        'Guia de Maturidade, Gestão e Segurança para Projetos de Bots no Discord',
        'Maturity, Management & Security Guide for Discord Bot Projects'
      ),
      excerpt: getText(language,
        'Guia completo sobre maturidade, gestão e segurança em projetos de bots no Discord, abordando boas práticas, permissões e postura profissional.',
        'A comprehensive guide on maturity, management and security in Discord bot projects, covering best practices, permissions and professional conduct.'
      ),
      date: getText(language, '7 de Fevereiro, 2025', 'February 7, 2025'),
      readTime: '25 min',
      path: language === 'en' ? '/en-us/articles/discord-bots' : '/artigos/bots-discord',
      tags: ['Discord', getText(language, 'Segurança', 'Security'), getText(language, 'Gestão', 'Management')],
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ScrollReveal key={article.path} delay={index * 0.05}>
                <Link to={article.path} className="block h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <GlassCard className="p-6 lg:p-8 group hover:border-foreground/20 transition-all duration-500 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg border border-border/30 bg-card/50 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4 text-foreground/50" />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{article.date}</span>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                          <span>{article.readTime} {getText(language, 'de leitura', 'read')}</span>
                        </div>
                      </div>

                      <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-gradient transition-all duration-500 leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {article.tags.map((tag) => (
                          <span key={tag} className="text-[11px] px-2 py-1 rounded-full border border-border/20 bg-background/50 text-muted-foreground/70">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground mt-auto">
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