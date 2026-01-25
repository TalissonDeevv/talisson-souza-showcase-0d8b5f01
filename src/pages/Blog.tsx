import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const blogPosts = [
    { id: "bot-discord", title: language === 'pt' ? "Criando Bots para Discord: Um Guia Completo" : "Creating Discord Bots: A Complete Guide", excerpt: language === 'pt' ? "Aprenda a desenvolver bots para Discord utilizando JavaScript/Node.js." : "Learn to develop Discord bots using JavaScript/Node.js.", date: language === 'pt' ? "10 de Maio, 2023" : "May 10, 2023", tags: ["Discord", "JavaScript"], readTime: "8 min" },
    { id: "fullstack-development", title: language === 'pt' ? "Desenvolvimento Full Stack: Tecnologias e Práticas" : "Full Stack Development: Technologies and Practices", excerpt: language === 'pt' ? "Principais tecnologias e práticas para desenvolvimento full stack." : "Main technologies and practices for full stack development.", date: language === 'pt' ? "25 de Junho, 2024" : "June 25, 2024", tags: ["Full Stack", "React"], readTime: "10 min" },
    { id: "cloud-solutions", title: language === 'pt' ? "Soluções em Nuvem para Empresas" : "Cloud Solutions for Companies", excerpt: language === 'pt' ? "Como implementar soluções em nuvem eficientes." : "How to implement efficient cloud solutions.", date: language === 'pt' ? "12 de Julho, 2024" : "July 12, 2024", tags: ["Cloud", "AWS"], readTime: "7 min" },
    { id: "web-automation", title: language === 'pt' ? "Automação Web: Ferramentas e Estratégias" : "Web Automation: Tools and Strategies", excerpt: language === 'pt' ? "Como automatizar tarefas repetitivas na web." : "How to automate repetitive web tasks.", date: language === 'pt' ? "17 de Setembro, 2024" : "September 17, 2024", tags: [language === 'pt' ? "Automação" : "Automation", "Puppeteer"], readTime: "6 min" },
    { id: "project-management", title: language === 'pt' ? "Gestão de Projetos Tecnológicos: Metodologias Ágeis" : "Technology Project Management: Agile Methodologies", excerpt: language === 'pt' ? "Implementação efetiva de metodologias ágeis." : "Effective implementation of agile methodologies.", date: language === 'pt' ? "29 de Outubro, 2024" : "October 29, 2024", tags: [language === 'pt' ? "Gestão" : "Management", "Scrum"], readTime: "9 min" }
  ];

  return (
    <Layout withPadding={false}>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)' }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <ScrollReveal>
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"><span className="w-8 h-px bg-foreground/30" />Blog</motion.span>
            <AnimatedTitle variant="hero" as="h1" className="mb-6">{t.blog.title}</AnimatedTitle>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{t.blog.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <ParallaxSection className="py-20 lg:py-24" speed={0.1} backgroundElement={<><div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" /></>}>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.4 }}>
                  <Link to={`/blog/${post.id}`} className="block group">
                    <GlassCard className="p-8 h-full hover:border-foreground/20 transition-all duration-500">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.span whileHover={{ scale: 1.05 }} className="text-xs px-3 py-1.5 rounded-full border border-border/50 bg-card/50 text-muted-foreground">{post.tags[0]}</motion.span>
                        <span className="text-xs text-muted-foreground/60">{post.readTime} {getText(language, 'de leitura', 'read')}</span>
                      </div>
                      <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-gradient transition-all duration-500 leading-tight">{post.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground/60">{post.date}</span>
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                          <span className="relative">{language === 'pt' ? 'Ler artigo' : 'Read article'}<span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" /></span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Blog;
