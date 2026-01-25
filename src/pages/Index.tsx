import Layout from "@/components/layout/Layout";
import ContactDialog from "@/components/ui/ContactDialog";
import SocialIcons from "@/components/ui/SocialIcons";
import FAQ from "@/components/ui/FAQ";
import FloatingTerminal from "@/components/ui/FloatingTerminal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import PremiumBadge from "@/components/ui/PremiumBadge";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import logoSignature from "@/assets/logo-signature.png";
import { motion } from "framer-motion";

const Index = () => {
  const {
    language
  } = useTheme();
  const t = useTranslation(language);
  const featuredProjects = [{
    title: "Land page Sagiri Bot",
    description: getText(language, "Uma land page pra uma bot de discord de parcerias.", "A landing page for a Discord bot for partnerships."),
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://sagiribot.vercel.app"
  }, {
    title: getText(language, "Site da Werneck Group", "Werneck Group Website"),
    description: getText(language, "Redesign completo da plataforma corporativa do Werneck Group, incluindo seções institucionais e área de clientes.", "Complete redesign of Werneck Group's corporate platform, including institutional sections and client area."),
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    link: "https://werneckgroup.com"
  }, {
    title: getText(language, "Site da Família Werneck", "Werneck Family Website"),
    description: getText(language, "Portal personalizado para a Família Werneck com foco em compartilhamento de conteúdo e integração de mídias sociais.", "Customized portal for the Werneck Family focused on content sharing and social media integration."),
    technologies: ["React", "Firebase", "Styled Components"],
    link: "https://familiawerneck.vercel.app"
  }];
  const featuredCompanies = [{
    name: "Cheetah Network",
    role: "CEO & Founder",
    period: "2023 - " + getText(language, 'Presente', 'Present'),
    description: getText(language, "Soluções digitais especializadas em desenvolvimento de bots, aplicações web.", "Digital solutions specialized in bot development and web applications.")
  }, {
    name: "Werneck Group",
    role: getText(language, 'Diretor Estratégico', 'Strategic Director'),
    period: "2024 - " + getText(language, 'Presente', 'Present'),
    description: getText(language, "Consultoria estratégica especializada em transformação digital e implementação de soluções tecnológicas empresariais.", "Strategic consulting specialized in digital transformation and implementation of enterprise technology solutions.")
  }];
  const techStack = ['JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'Next.js', 'Tailwind', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'Firebase'];
  return <Layout withPadding={false}>
      {/* Hero Section - Centered Premium Layout */}
      <section className="min-h-[100vh] flex items-center justify-center relative overflow-hidden">
        {/* Sophisticated Background Effect */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          
          {/* Radial glow effects */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl opacity-60" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-accent/5 via-transparent to-transparent blur-3xl opacity-40" />
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-muted/10 via-transparent to-transparent blur-3xl opacity-30" />
          
          {/* Subtle grid texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Particles Effect */}
          <ParticlesBackground />
        </div>

        {/* Bottom fade effect - smooth transition to next section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)'
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-20 pt-24">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Badge with entrance animation */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-10"
            >
              {t.hero.badge}
            </motion.p>
            
            {/* Signature with entrance animation */}
            <motion.img 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              src={logoSignature} 
              alt="Talisson Souza" 
              className="h-24 sm:h-28 lg:h-36 w-auto mb-10 invert dark:invert-0 border-0 border-none" 
            />

            {/* Subtitle with entrance animation */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs with entrance animation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <ContactDialog>
                <button className="group inline-flex items-center gap-3 text-sm font-medium text-foreground px-8 py-3.5 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-sm hover:bg-foreground/10 hover:border-foreground/40 hover:shadow-[0_0_30px_hsl(var(--foreground)/0.1)] transition-all duration-300">
                  {t.hero.contact}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </ContactDialog>
              
              <Link 
                to="/about" 
                className="group text-sm text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-2"
              >
                {t.hero.about}
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* Social Icons with entrance animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <SocialIcons />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Premium Interactive Cards */}
      <section className="py-36 relative overflow-hidden">
        {/* Sophisticated gradient background with texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }} />
          {/* Top decorative line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-16">
              {/* Header */}
              <div className="lg:col-span-5">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/80 mb-8 font-medium"
                >
                  {getText(language, 'Tecnologias', 'Technologies')}
                </motion.span>
                {/* Decorative line under label */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '3rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-px bg-foreground/20 mb-8"
                />
                <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-8 leading-[1.1]">
                  {getText(language, 'Stack Técnica', 'Tech Stack')}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                  {getText(language, 'Ferramentas e tecnologias que domino para construir sistemas robustos e escaláveis.', 'Tools and technologies I master to build robust and scalable systems.')}
                </p>
              </div>
              
              {/* Tech Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div 
                      key={tech}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      whileHover={{ 
                        y: -6,
                        scale: 1.02,
                        transition: { duration: 0.25 } 
                      }}
                      className="group relative p-5 rounded-xl border border-border/30 bg-card/40 backdrop-blur-md cursor-default overflow-hidden"
                    >
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent" />
                        <div className="absolute -inset-1 bg-foreground/[0.02] blur-xl" />
                      </div>
                      
                      {/* Subtle inner border glow on hover */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{
                          boxShadow: 'inset 0 0 0 1px hsl(var(--foreground) / 0.1), 0 0 30px hsl(var(--foreground) / 0.03)'
                        }}
                      />
                      
                      <span className="relative text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 tracking-wide">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Career Timeline - Premium Animated */}
      <section className="py-36 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-radial from-foreground/[0.03] to-transparent blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-radial from-foreground/[0.03] to-transparent blur-3xl opacity-60" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-16">
            {/* Header */}
            <ScrollReveal className="lg:col-span-5">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/80 mb-8 font-medium"
              >
                {getText(language, 'Experiência', 'Experience')}
              </motion.span>
              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '3rem' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-foreground/20 mb-8"
              />
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-8 leading-[1.1]">
                {getText(language, 'Trajetória Profissional', 'Professional Journey')}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
                {getText(language, 'Posições de liderança e contribuições que moldaram minha carreira em tecnologia.', 'Leadership positions and contributions that shaped my career in technology.')}
              </p>
              <Link 
                to="/career" 
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground relative overflow-hidden"
              >
                <span className="relative">
                  {getText(language, 'Ver trajetória completa', 'View full career')}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-300" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </ScrollReveal>
            
            {/* Timeline Cards */}
            <div className="lg:col-span-7 space-y-8 relative">
              {/* Animated Timeline Line */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-6 lg:left-0 top-0 bottom-0 w-px origin-top hidden sm:block"
                style={{
                  background: 'linear-gradient(to bottom, hsl(var(--foreground) / 0.25), hsl(var(--foreground) / 0.08) 50%, transparent)'
                }}
              />
              
              {featuredCompanies.map((company, index) => (
                <ScrollReveal key={company.name} delay={index * 0.2}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative pl-0 sm:pl-14 lg:pl-10"
                  >
                    {/* Timeline dot with pulse */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                      className="absolute left-4 lg:left-[-5px] top-10 hidden sm:block"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/40" style={{
                        boxShadow: '0 0 15px hsl(var(--foreground) / 0.2)'
                      }} />
                      {/* Subtle pulse ring */}
                      <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-foreground/20 animate-ping" style={{ animationDuration: '2s' }} />
                    </motion.div>
                    
                    <GlassCard className="p-10 group hover:border-foreground/15 transition-all duration-500">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-serif text-foreground mb-2 group-hover:text-gradient transition-all duration-300">{company.role}</h3>
                          <p className="text-sm text-muted-foreground font-medium tracking-wide">{company.name}</p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="shrink-0"
                        >
                          <PremiumBadge variant="outline" className="text-xs">{company.period}</PremiumBadge>
                        </motion.div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {company.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements - Premium Animated Counters */}
      <section className="py-32 relative overflow-hidden">
        {/* Background with gradient borders */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-card/15 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          {/* Section header */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/80 mb-4 font-medium"
              >
                {getText(language, 'Resultados', 'Results')}
              </motion.span>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {[{
              value: '50+',
              label: getText(language, 'Projetos Entregues', 'Projects Delivered')
            }, {
              value: '8+',
              label: getText(language, 'Anos de Experiência', 'Years of Experience')
            }, {
              value: '2',
              label: getText(language, 'Empresas Fundadas', 'Companies Founded')
            }, {
              value: '100%',
              label: getText(language, 'Taxa de Satisfação', 'Satisfaction Rate')
            }].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <motion.div 
                  className="text-center group cursor-default relative"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Decorative line above */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '2rem' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-px bg-foreground/15 mx-auto mb-8"
                  />
                  <motion.p 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="font-serif text-5xl lg:text-6xl xl:text-7xl text-foreground mb-5 transition-all duration-300"
                    style={{
                      textShadow: '0 0 60px hsl(var(--foreground) / 0.08)',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    <span className="group-hover:text-gradient transition-all duration-500">{stat.value}</span>
                  </motion.p>
                  <p className="text-[11px] sm:text-xs tracking-[0.15em] uppercase text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-300 font-medium">{stat.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Premium Cards */}
      <section className="py-36 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">
              <div className="max-w-xl">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/80 mb-8 font-medium"
                >
                  {getText(language, 'Portfolio', 'Portfolio')}
                </motion.span>
                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '3rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-px bg-foreground/20 mb-8"
                />
                <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-8 leading-[1.1]">
                  {t.projects.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t.projects.subtitle}
                </p>
              </div>
              <Link 
                to="/projects" 
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground self-start lg:self-auto"
              >
                <span className="relative">
                  {t.projects.viewAll}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-300" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <GlassCard className="p-10 h-full group hover:border-foreground/15 transition-all duration-500">
                    {/* Project number with decorative line */}
                    <div className="mb-8 relative">
                      <span className="text-5xl font-serif text-foreground/[0.07] group-hover:text-foreground/15 transition-colors duration-300" style={{ letterSpacing: '-0.05em' }}>0{index + 1}</span>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '2.5rem' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="absolute bottom-1 left-0 h-px bg-foreground/20"
                      />
                    </div>
                    
                    <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-5 group-hover:text-gradient transition-all duration-500 leading-[1.15]">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          className="text-xs px-3 py-1.5 rounded-full border border-border/40 bg-card/30 text-muted-foreground/80 tracking-wide"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground"
                      >
                        <span className="relative">
                          {t.projects.seeProject}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover/link:w-full transition-all duration-300" />
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </GlassCard>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story Highlight - Premium */}
      <section className="py-40 relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-foreground/[0.03] to-transparent blur-3xl opacity-60" />
          {/* Decorative line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard className="max-w-4xl mx-auto p-14 lg:p-20 text-center hover:border-foreground/15 transition-all duration-500">
                {/* Decorative quote mark */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="text-9xl font-serif text-foreground/[0.04] mb-6 select-none leading-none"
                  style={{ letterSpacing: '-0.1em' }}
                >
                  "
                </motion.div>
                
                <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-foreground mb-12 leading-[1.15]">
                  {language === 'pt' ? 'Por que fundei minha empresa aos 17?' : 'Why I started my company at 17?'}
                </h2>
                
                <p className="text-lg text-muted-foreground leading-[1.8] mb-6 max-w-2xl mx-auto">
                  {language === 'pt' ? 'Em 2021, fui recusado em um processo seletivo não por falta de qualificação, mas por causa da minha cadeira de rodas. Esse momento transformou frustração em propósito: decidi criar meu próprio espaço onde competência e inclusão caminham juntas.' : 'In 2021, I was rejected in a selection process not for lack of qualification, but because of my wheelchair. That moment transformed frustration into purpose: I decided to create my own space where competence and inclusion walk together.'}
                </p>
                <p className="text-lg text-muted-foreground leading-[1.8] mb-14 max-w-2xl mx-auto">
                  {language === 'pt' ? 'Assim nasceu a Cheetah Network — mais que uma empresa, uma prova de que todos merecem oportunidades reais.' : 'Thus Cheetah Network was born — more than a company, proof that everyone deserves real opportunities.'}
                </p>
                
                <Link 
                  to="/career" 
                  className="group inline-flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <span className="relative">
                    {language === 'pt' ? 'Ler história completa' : 'Read full story'}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-300" />
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </GlassCard>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials - Premium Cards */}
      <section className="py-36 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-24">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/80 mb-8 font-medium"
              >
                {getText(language, 'Depoimentos', 'Testimonials')}
              </motion.span>
              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '3rem' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-foreground/20 mb-8"
              />
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-8 leading-[1.1]">
                {language === 'pt' ? 'O que dizem sobre mim' : 'What they say about me'}
              </h2>
              <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
                {language === 'pt' ? 'Feedback de colegas e clientes com quem tive o prazer de trabalhar.' : 'Feedback from colleagues and clients I had the pleasure of working with.'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[{
              initials: "PS",
              name: "Priscila Suanne",
              role: language === 'pt' ? 'Desenvolvedora Back End' : 'Back End Developer',
              quote: language === 'pt' ? '"Tive o prazer de trabalhar com Talisson, um profissional extremamente comprometido, resiliente e dedicado. Sua postura ética e foco em resultados foram fundamentais para o sucesso dos projetos."' : '"I had the pleasure of working with Talisson, an extremely committed, resilient and dedicated professional. His ethical stance and focus on results were fundamental to the success of the projects."'
            }, {
              initials: "DF",
              name: "Davi R. Fraustino",
              role: language === 'pt' ? 'Consultor de Tecnologia' : 'Technology Consultant',
              quote: language === 'pt' ? '"Talisson é um excelente profissional capaz de unir conhecimento técnico com visão estratégica de negócios. Ele sempre entrega soluções criativas e eficientes."' : '"Talisson is an excellent professional capable of combining technical knowledge with strategic business vision. He always delivers creative and efficient solutions."'
            }].map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <GlassCard className="p-12 h-full group hover:border-foreground/15 transition-all duration-500">
                    <blockquote className="relative">
                      {/* Large decorative quote */}
                      <div className="absolute -top-6 -left-3 text-8xl text-foreground/[0.04] font-serif leading-none select-none">"</div>
                      
                      <p className="text-lg text-foreground/85 leading-[1.8] mb-10 relative z-10">
                        {testimonial.quote}
                      </p>
                      
                      <footer className="flex items-center gap-5">
                        {/* Avatar with subtle glow */}
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="w-14 h-14 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/[0.03] flex items-center justify-center text-sm font-medium text-foreground/80 border border-foreground/[0.08]"
                          style={{
                            boxShadow: '0 0 25px hsl(var(--foreground) / 0.06)'
                          }}
                        >
                          {testimonial.initials}
                        </motion.div>
                        <div>
                          <p className="text-base font-medium text-foreground tracking-wide">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground/80">{testimonial.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  </GlassCard>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Premium */}
      <section className="py-32 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
              <div className="max-w-xl">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
                >
                  {getText(language, 'O que faço', 'What I do')}
                </motion.span>
                <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-6 leading-tight">
                  {t.services.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t.services.subtitle}
                </p>
              </div>
              <Link 
                to="/services" 
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground self-start lg:self-auto"
              >
                <span className="relative">
                  {language === 'pt' ? 'Ver todos os serviços' : 'View all services'}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[{
              number: '01',
              title: getText(language, 'Desenvolvimento Web', 'Web Development'),
              description: getText(language, 'Sites e aplicações web modernas com as melhores tecnologias do mercado.', 'Modern websites and web applications with cutting-edge technologies.')
            }, {
              number: '02',
              title: getText(language, 'Sistemas Corporativos', 'Corporate Systems'),
              description: getText(language, 'Soluções empresariais sob medida para otimizar processos e escalar.', 'Custom enterprise solutions to optimize processes and scale.')
            }, {
              number: '03',
              title: getText(language, 'Consultoria Tech', 'Tech Consulting'),
              description: getText(language, 'Orientação estratégica para projetos de tecnologia e transformação digital.', 'Strategic guidance for technology projects and digital transformation.')
            }].map((service, index) => (
              <ScrollReveal key={service.number} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <GlassCard className="p-8 h-full group hover:border-foreground/20 transition-all duration-500">
                    {/* Service number */}
                    <div className="mb-6 relative">
                      <span className="text-4xl font-serif text-foreground/10 group-hover:text-foreground/20 transition-colors duration-300">{service.number}</span>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '2rem' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="absolute bottom-0 left-0 h-px bg-foreground/30"
                      />
                    </div>
                    
                    <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-gradient transition-all duration-500 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </GlassCard>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview - Premium Editorial Cards */}
      <section className="py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
              <div className="max-w-xl">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
                >
                  {getText(language, 'Artigos', 'Articles')}
                </motion.span>
                <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-6 leading-tight">
                  {t.blog.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t.blog.subtitle}
                </p>
              </div>
              <Link 
                to="/blog" 
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground self-start lg:self-auto"
              >
                <span className="relative">
                  {t.blog.viewAll}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[{
              title: getText(language, 'Desenvolvimento Full Stack', 'Full Stack Development'),
              excerpt: getText(language, 'Explore as melhores práticas e tendências no desenvolvimento web moderno.', 'Explore best practices and trends in modern web development.'),
              category: getText(language, 'Desenvolvimento', 'Development'),
              readTime: '5 min'
            }, {
              title: getText(language, 'Automação Web', 'Web Automation'),
              excerpt: getText(language, 'Aprenda como automatizar processos e aumentar a produtividade.', 'Learn how to automate processes and increase productivity.'),
              category: getText(language, 'Automação', 'Automation'),
              readTime: '4 min'
            }, {
              title: getText(language, 'Soluções Cloud', 'Cloud Solutions'),
              excerpt: getText(language, 'Descubra as vantagens da computação em nuvem para seu negócio.', 'Discover the advantages of cloud computing for your business.'),
              category: 'Cloud',
              readTime: '6 min'
            }].map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <GlassCard className="p-8 h-full group hover:border-foreground/20 transition-all duration-500">
                    {/* Category and read time */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="text-xs px-3 py-1.5 rounded-full border border-border/50 bg-card/50 text-muted-foreground"
                      >
                        {post.category}
                      </motion.span>
                      <span className="text-xs text-muted-foreground/60">{post.readTime} {getText(language, 'de leitura', 'read')}</span>
                    </div>
                    
                    <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-gradient transition-all duration-500 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    {/* Read more link */}
                    <Link 
                      to="/blog"
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <span className="relative">
                        {getText(language, 'Ler artigo', 'Read article')}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover/link:w-full transition-all duration-300" />
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </GlassCard>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section - Premium */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
                >
                  {getText(language, 'Experimente', 'Try it out')}
                </motion.span>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                  {language === 'pt' ? 'Terminal Interativo' : 'Interactive Terminal'}
                </h2>
                <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  {language === 'pt' ? 'Experimente navegar pelo meu perfil usando comandos de terminal. Digite "help" para ver os comandos disponíveis.' : 'Try navigating my profile using terminal commands. Type "help" to see available commands.'}
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <FloatingTerminal />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ - Premium */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
                >
                  FAQ
                </motion.span>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                  {language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
                </h2>
                <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  {language === 'pt' ? 'Respostas para as dúvidas mais comuns sobre meus serviços e forma de trabalho.' : 'Answers to the most common questions about my services and work approach.'}
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <FAQ />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA - Premium */}
      <section className="py-40 relative overflow-hidden">
        {/* Background with ambient glow */}
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
              <GlassCard className="max-w-3xl mx-auto p-12 lg:p-16 text-center hover:border-foreground/20 transition-all duration-500">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8"
                >
                  {getText(language, 'Vamos conversar', 'Let\'s talk')}
                </motion.span>
                
                <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-8 leading-tight">
                  {t.cta.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl mx-auto">
                  {t.cta.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <ContactDialog>
                    <motion.button 
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                      style={{
                        boxShadow: '0 0 30px hsl(var(--foreground) / 0.2), 0 10px 40px hsl(var(--foreground) / 0.1)'
                      }}
                    >
                      {t.cta.button}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                  </ContactDialog>
                  
                  <Link 
                    to="/projects" 
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    <span>{t.projects.viewAll}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>;
};
export default Index;