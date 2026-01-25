import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { 
  Code, 
  Smartphone, 
  Bot, 
  Palette, 
  Cloud, 
  Users,
  ArrowRight,
  ArrowUpRight,
  Check
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";

const Services = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const serviceCategories = [
    {
      id: "web-development",
      icon: Code,
      ...t.servicesPage.categories.webDevelopment
    },
    {
      id: "mobile-development", 
      icon: Smartphone,
      ...t.servicesPage.categories.mobileDevelopment
    },
    {
      id: "bot-development",
      icon: Bot,
      ...t.servicesPage.categories.botDevelopment
    },
    {
      id: "uiux-design",
      icon: Palette,
      ...t.servicesPage.categories.uiuxDesign
    },
    {
      id: "cloud-solutions",
      icon: Cloud,
      ...t.servicesPage.categories.cloudSolutions
    },
    {
      id: "consulting",
      icon: Users,
      ...t.servicesPage.categories.consulting
    }
  ];

  const clientProjects = [
    {
      title: "Land page Sagiri Bot",
      client: "Rodrigo",
      description: language === 'pt' 
        ? "Uma land page pra uma bot de discord de parcerias."
        : "A landing page for a Discord bot for partnerships.",
      image: "https://i.ibb.co/jkPPHWdc/image.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      link: "https://zafire.cloud",
    },
    {
      title: "Werneck Group",
      client: "Talisson Souza",
      description: language === 'pt' 
        ? "Desenvolvimento de plataforma web moderna com funcionalidades avançadas e interface intuitiva."
        : "Development of modern web platform with advanced features and intuitive interface.",
      image: "https://i.ibb.co/ymjQhFmG/image.png",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      link: "https://werneckgroup.com",
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <ParallaxSection 
        className="pt-24 pb-10 lg:pt-28 lg:pb-12"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                <span className="w-8 h-px bg-foreground/30" />
                {getText(language, 'Serviços', 'Services')}
              </motion.span>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 leading-[1.1]">
                {t.servicesPage.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t.servicesPage.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal key={service.id} delay={index * 0.08}>
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
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center mb-6 group-hover:border-foreground/20 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
                      </div>
                      
                      <h3 className="font-serif text-xl text-foreground mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <Check className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/services/${service.id}`}
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground"
                      >
                        <span className="relative">
                          {t.servicesPage.learnMore}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover/link:w-full transition-all duration-300" />
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Projects */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="mb-12">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                <span className="w-8 h-px bg-foreground/30" />
                Portfolio
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
                {language === 'pt' ? 'Projetos Realizados' : 'Completed Projects'}
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                {language === 'pt' 
                  ? 'Conheça alguns dos projetos personalizados que desenvolvi para meus clientes'
                  : 'Learn about some of the custom projects I developed for my clients'
                }
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clientProjects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="block h-full group"
                >
                  <div 
                    className="relative h-full rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-serif text-lg text-foreground mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground/60 mb-3">
                        {getText(language, 'Cliente:', 'Client:')} {project.client}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-0.5 rounded border border-border/30 bg-background/50 text-muted-foreground/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        <span>{t.servicesPage.viewProject}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/[0.02] via-background to-background" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <div 
                className="relative p-10 lg:p-12 rounded-3xl border border-border/20 bg-card/30 backdrop-blur-sm text-center"
                style={{
                  boxShadow: '0 8px 40px hsl(var(--foreground) / 0.03)'
                }}
              >
                <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-foreground/[0.06] rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-foreground/[0.06] rounded-br-3xl" />
                
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight">
                  {t.servicesPage.projectIdea}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {t.servicesPage.projectIdeaDescription}
                </p>
                
                <a 
                  href="https://wa.me/5581993964261" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300 hover:opacity-90"
                  style={{
                    boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                  }}
                >
                  {t.servicesPage.requestQuote}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
