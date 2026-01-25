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
      <section className="py-24 border-t border-border/40 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/[0.02] to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              <div className="lg:col-span-4">
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  {getText(language, 'Stack Técnica', 'Tech Stack')}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {getText(language, 'Ferramentas que uso no dia a dia para construir sistemas robustos', 'Tools I use daily to build robust systems')}
                </p>
              </div>
              
              <div className="lg:col-span-8">
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        transition: { duration: 0.2 } 
                      }}
                      className="text-sm text-foreground/80 px-4 py-2.5 rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm hover:border-foreground/30 hover:bg-foreground/5 hover:shadow-[0_0_20px_hsl(var(--foreground)/0.1)] transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Career Timeline - Animated */}
      <section className="py-24 border-t border-border/40 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <ScrollReveal className="lg:col-span-4">
              <h2 className="font-serif text-2xl text-foreground mb-4">
                {getText(language, 'Trajetória Profissional', 'Professional Journey')}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {getText(language, 'Posições de liderança e contribuições que moldaram minha carreira em tecnologia.', 'Leadership positions and contributions that shaped my career in technology.')}
              </p>
              <Link to="/career" className="group inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition-opacity duration-200">
                {getText(language, 'Ver trajetória completa', 'View full career')}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
            
            <div className="lg:col-span-8 space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent hidden lg:block" />
              
              {featuredCompanies.map((company, index) => (
                <ScrollReveal key={company.name} delay={index * 0.15}>
                  <GlassCard className="p-6 lg:ml-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-medium text-foreground">{company.role}</h3>
                        <p className="text-sm text-muted-foreground">{company.name}</p>
                      </div>
                      <PremiumBadge variant="outline">{company.period}</PremiumBadge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                      {company.description}
                    </p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements - Animated Counters */}
      <section className="py-24 border-t border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.02] to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[{
              value: '50+',
              label: getText(language, 'Projetos', 'Projects')
            }, {
              value: '8+',
              label: getText(language, 'Anos Exp.', 'Years Exp.')
            }, {
              value: '2',
              label: getText(language, 'Empresas', 'Companies')
            }, {
              value: '100%',
              label: getText(language, 'Satisfação', 'Satisfaction')
            }].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <motion.div 
                  className="text-center lg:text-left group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="font-serif text-4xl lg:text-5xl text-foreground mb-2 group-hover:text-gradient transition-all duration-300">{stat.value}</p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">{stat.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Premium Cards */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                  {t.projects.title}
                </h2>
                <p className="text-sm text-muted-foreground max-w-lg">
                  {t.projects.subtitle}
                </p>
              </div>
              <Link to="/projects" className="group inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition-opacity duration-200">
                {t.projects.viewAll}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <GlassCard className="p-6 h-full group">
                  <div className="mb-4">
                    <span className="text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <PremiumBadge key={tech} variant="outline">{tech}</PremiumBadge>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group/link inline-flex items-center gap-1 text-sm text-foreground hover:opacity-70 transition-opacity duration-200"
                    >
                      {t.projects.seeProject}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                    </a>
                  )}
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story Highlight - Premium */}
      <section className="py-24 border-t border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.02] via-transparent to-foreground/[0.02] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <GlassCard className="max-w-2xl mx-auto p-10 text-center">
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">
                {language === 'pt' ? 'Por que fundei minha empresa aos 17?' : 'Why I started my company at 17?'}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {language === 'pt' ? 'Em 2021, fui recusado em um processo seletivo não por falta de qualificação, mas por causa da minha cadeira de rodas. Esse momento transformou frustração em propósito: decidi criar meu próprio espaço onde competência e inclusão caminham juntas.' : 'In 2021, I was rejected in a selection process not for lack of qualification, but because of my wheelchair. That moment transformed frustration into purpose: I decided to create my own space where competence and inclusion walk together.'}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                {language === 'pt' ? 'Assim nasceu a Cheetah Network — mais que uma empresa, uma prova de que todos merecem oportunidades reais.' : 'Thus Cheetah Network was born — more than a company, proof that everyone deserves real opportunities.'}
              </p>
              
              <Link to="/career" className="group inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity duration-200">
                {language === 'pt' ? 'Ler história completa' : 'Read full story'}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials - Premium Cards */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                {language === 'pt' ? 'O que dizem sobre mim' : 'What they say about me'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {language === 'pt' ? 'Depoimentos de colegas e clientes' : 'Testimonials from colleagues and clients'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              <ScrollReveal key={testimonial.name} delay={index * 0.15}>
                <GlassCard className="p-8 h-full">
                  <blockquote className="relative">
                    <div className="absolute -top-2 -left-2 text-6xl text-foreground/10 font-serif">"</div>
                    <p className="text-foreground/80 leading-relaxed mb-6 text-lg relative z-10">
                      {testimonial.quote}
                    </p>
                    <footer className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center text-sm font-medium text-foreground border border-foreground/10">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </footer>
                  </blockquote>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Premium */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                  {t.services.title}
                </h2>
                <p className="text-sm text-muted-foreground max-w-lg">
                  {t.services.subtitle}
                </p>
              </div>
              <Link to="/services" className="group inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition-opacity duration-200">
                {language === 'pt' ? 'Ver todos os serviços' : 'View all services'}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[{
              number: '01',
              title: getText(language, 'Desenvolvimento Web', 'Web Development'),
              description: getText(language, 'Sites e aplicações web modernas com as melhores tecnologias.', 'Modern websites and web applications with the best technologies.')
            }, {
              number: '02',
              title: getText(language, 'Sistemas Corporativos', 'Corporate Systems'),
              description: getText(language, 'Soluções empresariais sob medida para otimizar processos.', 'Custom enterprise solutions to optimize processes.')
            }, {
              number: '03',
              title: getText(language, 'Consultoria Tech', 'Tech Consulting'),
              description: getText(language, 'Orientação estratégica para projetos de tecnologia.', 'Strategic guidance for technology projects.')
            }].map((service, index) => (
              <ScrollReveal key={service.number} delay={index * 0.1}>
                <GlassCard className="p-6 h-full group">
                  <span className="text-xs text-muted-foreground mb-4 block">{service.number}</span>
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gradient transition-all duration-300">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview - Premium Cards */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                  {t.blog.title}
                </h2>
                <p className="text-sm text-muted-foreground max-w-lg">
                  {t.blog.subtitle}
                </p>
              </div>
              <Link to="/blog" className="group inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition-opacity duration-200">
                {t.blog.viewAll}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
              <ScrollReveal key={post.title} delay={index * 0.1}>
                <GlassCard className="p-6 h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <PremiumBadge variant="outline">{post.category}</PremiumBadge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section - Premium */}
      <section className="py-24 border-t border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.02] via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                  {language === 'pt' ? 'Terminal Interativo' : 'Interactive Terminal'}
                </h2>
                <p className="text-sm text-muted-foreground max-w-lg mx-auto">
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
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                  {language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
                </h2>
                <p className="text-sm text-muted-foreground">
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
      <section className="py-32 border-t border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/[0.03] via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <GlassCard className="max-w-2xl mx-auto p-12 text-center">
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
                {t.cta.title}
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                {t.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <ContactDialog>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-foreground rounded-lg hover:opacity-90 transition-all duration-200 shadow-[0_0_20px_hsl(var(--foreground)/0.2)]"
                  >
                    {t.cta.button}
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.button>
                </ContactDialog>
                
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {t.projects.viewAll}
                </Link>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </Layout>;
};
export default Index;