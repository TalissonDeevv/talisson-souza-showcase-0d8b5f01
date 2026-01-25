import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import { ArrowUpRight, ArrowRight, ExternalLink, Github, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const projects = [
    {
      slug: "werneck-group",
      title: getText(language, "Site da Werneck Group", "Werneck Group Website"),
      description: getText(language, "Redesign completo da plataforma corporativa do Werneck Group, incluindo seções institucionais e área de clientes.", "Complete redesign of Werneck Group's corporate platform, including institutional sections and client area."),
      image: "https://i.ibb.co/rSQjVTs/wallpaper.png",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
      link: "https://werneckgroup.com",
      featured: true
    },
    {
      slug: "familia-werneck",
      title: getText(language, "Site da Família Werneck", "Werneck Family Website"),
      description: getText(language, "Portal personalizado para a Família Werneck com foco em compartilhamento de conteúdo e integração de mídias sociais.", "Customized portal for the Werneck Family focused on content sharing and social media integration."),
      image: "https://i.ibb.co/20FBr03Q/Chat-GPT-Image-4-05-2025-15-12-34.png",
      technologies: ["React", "Firebase", "Styled Components"],
      link: "https://familiawerneck.vercel.app",
      featured: true
    },
    {
      slug: "sagiri-bot",
      title: "Sagiri Bot",
      description: getText(language, "Land page para uma bot de Discord focada em parcerias", "Landing page for a Discord bot focused on partnerships"),
      image: "https://i.ibb.co/jkPPHWdc/image.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://sagiribot.vercel.app",
      featured: true
    }
  ];

  const stats = [
    { label: getText(language, "Projetos Entregues", "Projects Delivered"), value: "50+" },
    { label: getText(language, "Clientes Satisfeitos", "Satisfied Clients"), value: "30+" },
    { label: getText(language, "Países", "Countries"), value: "5+" }
  ];

  return (
    <Layout withPadding={false}>
      <SEO 
        title="Projetos | Portfólio de Talisson Souza"
        description="Conheça os projetos desenvolvidos por Talisson Souza. Sites, aplicações web, sistemas empresariais e soluções digitais para empresas de diversos segmentos."
        canonical="/projetos"
        keywords={['projetos', 'portfólio', 'sites', 'aplicações web', 'sistemas', 'desenvolvimento']}
      />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <ScrollReveal className="lg:col-span-8">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                Portfolio
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-6">
                {t.projects.title}
              </AnimatedTitle>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t.projects.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-4" delay={0.2}>
              <div className="flex gap-8 lg:justify-end">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-right">
                    <p className="text-3xl font-serif text-foreground mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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
          <ScrollReveal>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              {getText(language, 'Destaques', 'Featured')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, 'Projetos em Destaque', 'Featured Projects')}
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 0.15}>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="block group"
                >
                  <div 
                    className="relative rounded-3xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden"
                    style={{
                      boxShadow: '0 8px 40px hsl(var(--foreground) / 0.03)'
                    }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image */}
                      <div className="relative h-64 lg:h-auto overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/80 via-transparent to-transparent" />
                        
                        {/* Number overlay */}
                        <div className="absolute top-6 left-6 text-6xl font-serif text-foreground/[0.08] select-none">
                          0{index + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                          <span className="text-xs px-3 py-1.5 rounded-full border border-border/30 bg-card/50 text-muted-foreground">
                            {project.technologies[0]}
                          </span>
                        </div>

                        <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight group-hover:text-gradient transition-all duration-500">
                          {project.title}
                        </h3>
                        
                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2.5 py-1 rounded-md border border-border/30 bg-background/50 text-muted-foreground/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                          <span className="relative">
                            {t.projects.seeProject}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                          </span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Process Section */}
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
            <div className="text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
              >
                {getText(language, 'Processo', 'Process')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                {getText(language, 'Como eu trabalho', 'How I work')}
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                {getText(language, 'Um processo estruturado para entregar projetos de alta qualidade.', 'A structured process to deliver high-quality projects.')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{
              number: '01',
              title: getText(language, 'Descoberta', 'Discovery'),
              description: getText(language, 'Entendo suas necessidades e objetivos para criar a solução ideal.', 'I understand your needs and goals to create the ideal solution.')
            }, {
              number: '02',
              title: getText(language, 'Desenvolvimento', 'Development'),
              description: getText(language, 'Construo a solução com as melhores práticas e tecnologias.', 'I build the solution with best practices and technologies.')
            }, {
              number: '03',
              title: getText(language, 'Entrega', 'Delivery'),
              description: getText(language, 'Entrego o projeto testado e pronto para produção.', 'I deliver the tested project ready for production.')
            }].map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div 
                    className="relative h-full p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group overflow-hidden"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="mb-6 flex items-center gap-4">
                      <span className="text-3xl font-serif text-foreground/[0.1] group-hover:text-foreground/20 transition-colors duration-500">{step.number}</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent" />
                    </div>
                    
                    <h3 className="font-serif text-xl text-foreground mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
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
                  <Layers className="w-8 h-8 text-foreground/60" />
                </div>
                
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
                >
                  {getText(language, 'Próximo projeto', 'Next project')}
                </motion.span>
                
                <h2 className="font-serif text-2xl lg:text-4xl text-foreground mb-6 leading-tight">
                  {getText(language, 'Tem um projeto em mente?', 'Have a project in mind?')}
                </h2>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {getText(language, 'Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.', "Let's talk about how I can help turn your idea into reality.")}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a 
                    href="https://wa.me/5581993964261" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                    style={{
                      boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                    }}
                  >
                    {getText(language, 'Iniciar conversa', 'Start conversation')}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  
                  <Link 
                    to="/servicos"
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    <span>{getText(language, 'Ver serviços', 'View services')}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
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

export default Projects;
