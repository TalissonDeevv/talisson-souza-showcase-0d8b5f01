import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { Code, Smartphone, Bot, Palette, Cloud, Users, ArrowRight, ArrowUpRight, Check, Zap, Shield, Clock } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";

const Services = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const serviceCategories = [
    { 
      id: "web-development", 
      icon: Code, 
      ...t.servicesPage.categories.webDevelopment,
      useCases: language === 'pt' 
        ? ["Portais corporativos", "Dashboards analíticos", "E-commerces personalizados", "Sistemas internos"]
        : ["Corporate portals", "Analytics dashboards", "Custom e-commerce", "Internal systems"]
    },
    { 
      id: "mobile-development", 
      icon: Smartphone, 
      ...t.servicesPage.categories.mobileDevelopment,
      useCases: language === 'pt'
        ? ["Apps de delivery", "Gestão de equipes", "Catálogos digitais", "Apps de fidelidade"]
        : ["Delivery apps", "Team management", "Digital catalogs", "Loyalty apps"]
    },
    { 
      id: "bot-development", 
      icon: Bot, 
      ...t.servicesPage.categories.botDevelopment,
      useCases: language === 'pt'
        ? ["Moderação automatizada", "Atendimento 24/7", "Integrações com APIs", "Sistemas de economia"]
        : ["Automated moderation", "24/7 support", "API integrations", "Economy systems"]
    },
    { 
      id: "uiux-design", 
      icon: Palette, 
      ...t.servicesPage.categories.uiuxDesign,
      useCases: language === 'pt'
        ? ["Redesign de produtos", "Design systems", "Prototipagem rápida", "Pesquisa de usuários"]
        : ["Product redesign", "Design systems", "Rapid prototyping", "User research"]
    },
    { 
      id: "cloud-solutions", 
      icon: Cloud, 
      ...t.servicesPage.categories.cloudSolutions,
      useCases: language === 'pt'
        ? ["Migração para nuvem", "CI/CD automatizado", "Monitoramento 24/7", "Arquitetura escalável"]
        : ["Cloud migration", "Automated CI/CD", "24/7 monitoring", "Scalable architecture"]
    },
    { 
      id: "consulting", 
      icon: Users, 
      ...t.servicesPage.categories.consulting,
      useCases: language === 'pt'
        ? ["Code review", "Mentoria técnica", "Arquitetura de sistemas", "Planejamento estratégico"]
        : ["Code review", "Technical mentoring", "System architecture", "Strategic planning"]
    }
  ];

  const differentials = language === 'pt' ? [
    { icon: Zap, title: "Entrega Rápida", description: "Metodologia ágil com sprints semanais e entregas incrementais" },
    { icon: Shield, title: "Qualidade Garantida", description: "Código testado, documentado e com suporte pós-entrega incluso" },
    { icon: Clock, title: "Comunicação Direta", description: "Acesso direto ao desenvolvedor, sem intermediários" }
  ] : [
    { icon: Zap, title: "Fast Delivery", description: "Agile methodology with weekly sprints and incremental deliveries" },
    { icon: Shield, title: "Guaranteed Quality", description: "Tested, documented code with post-delivery support included" },
    { icon: Clock, title: "Direct Communication", description: "Direct access to the developer, no intermediaries" }
  ];

  const clientProjects = [
    { 
      title: "Werneck Group", 
      client: "Talisson Souza", 
      description: language === 'pt' ? "Plataforma web moderna com funcionalidades avançadas." : "Modern web platform with advanced features.", 
      image: "https://i.ibb.co/ymjQhFmG/image.png", 
      technologies: ["React", "Node.js", "PostgreSQL"], 
      link: "https://werneckgroup.com",
      result: language === 'pt' ? "+52% eficiência operacional" : "+52% operational efficiency"
    },
    { 
      title: "Sagiri Bot", 
      client: "Rodrigo", 
      description: language === 'pt' ? "Landing page para bot de Discord." : "Landing page for Discord bot.", 
      image: "https://i.ibb.co/jkPPHWdc/image.png", 
      technologies: ["React", "Tailwind CSS"], 
      link: "https://zafire.cloud",
      result: language === 'pt' ? "12% taxa de conversão" : "12% conversion rate"
    }
  ];

  return (
    <Layout withPadding={false}>
      <SEO 
        title="Serviços de Desenvolvimento | Talisson Souza"
        description="Serviços de desenvolvimento web, mobile, bots, UI/UX design, soluções cloud e consultoria tecnológica. Soluções digitais sob medida para sua empresa crescer."
        canonical="/servicos"
        keywords={['serviços', 'desenvolvimento web', 'desenvolvimento mobile', 'bots', 'UI/UX', 'cloud', 'consultoria']}
      />
      
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)' }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <ScrollReveal>
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium">
              {getText(language, 'Serviços', 'Services')}
            </motion.span>
            <AnimatedTitle variant="hero" as="h1" className="mb-6">{t.servicesPage.title}</AnimatedTitle>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{t.servicesPage.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differentials.map((diff, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-border/10 bg-card/20">
                  <div className="w-10 h-10 rounded-xl border border-border/20 bg-card/40 flex items-center justify-center flex-shrink-0">
                    <diff.icon className="w-5 h-5 text-foreground/60" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{diff.title}</h3>
                    <p className="text-sm text-muted-foreground/70">{diff.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ParallaxSection className="py-20 lg:py-24" speed={0.1} backgroundElement={<><div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" /></>}>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal key={service.id} delay={index * 0.08}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="h-full">
                    <div className="relative h-full p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group overflow-hidden" style={{ boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center mb-6 group-hover:border-foreground/20 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
                      </div>
                      <h3 className="font-serif text-xl text-foreground mb-3 leading-tight">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      
                      {/* Use Cases */}
                      <div className="mb-6">
                        <p className="text-xs text-muted-foreground/50 uppercase tracking-wider mb-3">
                          {getText(language, 'Casos de uso', 'Use cases')}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.useCases?.slice(0, 3).map((useCase, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full border border-border/20 bg-background/50 text-muted-foreground/70">
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link to={`/services/${service.id}`} className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        <span className="relative">{t.servicesPage.learnMore}<span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover/link:w-full transition-all duration-300" /></span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </ParallaxSection>

      {/* Client Projects */}
      <ParallaxSection className="py-20 lg:py-24" speed={0.12} backgroundElement={<><div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" /></>}>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium">Portfolio</motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">{language === 'pt' ? 'Projetos Realizados' : 'Completed Projects'}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clientProjects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.a href={project.link} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="block h-full group">
                  <div className="relative h-full rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden" style={{ boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)' }}>
                    <div className="h-48 overflow-hidden relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      {/* Result badge */}
                      <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border/30">
                        <span className="text-xs font-medium text-foreground">{project.result}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg text-foreground mb-2">{project.title}</h3>
                      <p className="text-xs text-muted-foreground/60 mb-3">{getText(language, 'Cliente:', 'Client:')} {project.client}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">{project.technologies.map((tech) => (<span key={tech} className="text-xs px-2 py-0.5 rounded border border-border/30 bg-background/50 text-muted-foreground/70">{tech}</span>))}</div>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground"><span>{t.servicesPage.viewProject}</span><ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* CTA */}
      <section className="py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" /><div className="absolute inset-0 bg-gradient-to-t from-card/30 via-background to-background" /><div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-foreground/5 to-transparent blur-3xl opacity-50" /></div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }}>
              <GlassCard className="max-w-3xl mx-auto p-10 lg:p-12 text-center hover:border-foreground/20 transition-all duration-500">
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight">{t.servicesPage.projectIdea}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">{t.servicesPage.projectIdeaDescription}</p>
                <a href="https://wa.me/5581993964261" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300" style={{ boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)' }}>{language === 'pt' ? 'Solicitar diagnóstico técnico' : 'Request technical diagnosis'}<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
              </GlassCard>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
