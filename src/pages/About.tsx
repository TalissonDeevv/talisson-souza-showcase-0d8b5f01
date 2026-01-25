import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import SocialIcons from "@/components/ui/SocialIcons";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, ArrowRight, ArrowUpRight, Briefcase, GraduationCap, Heart, Star, BookOpen, Zap, Users, Calendar, Award, ExternalLink, Code2, Lightbulb, Target, Coffee, Rocket, TrendingUp, Clock, Layers, Gamepad2, Music, Camera, Plane, Dumbbell, Film } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import bookCover from "@/assets/book-cover.jpg";

const About = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const aboutTextPt = `Oi, tudo bem? Meu nome é Talisson Souza, mas muitos me chamam de Talinho. Sou Empreendedor Executivo, Diretor de Negócios Empresariais e Desenvolvedor Full Stack. Como CEO da Cheetah Network, minha jornada com tecnologia começou meio que na curiosidade, fuçando aqui e ali, até que virei apaixonado de vez.

Gosto de estar envolvido em tudo que crio, desde a primeira linha de código até ver o resultado final funcionando na prática. Trabalhar com desenvolvimento web, mobile, bots inteligentes e infraestrutura não é só meu trabalho, é parte do meu dia a dia.

No fim, minha missão é criar soluções que realmente façam diferença, com um toque humano, e continuar aprendendo e evoluindo todos os dias.`;

  const aboutTextEn = `Hi, how are you? My name is Talisson Souza, but many call me Talinho. I'm an Executive Entrepreneur, Business Director, and Full Stack Developer. As CEO of Cheetah Network, my journey with technology began out of curiosity, dabbling here and there, until I became completely passionate.

I enjoy being involved in everything I create, from the first line of code to seeing the final result in action. Working with web and mobile development, smart bots, and infrastructure isn't just my job; it's part of my daily life.

Ultimately, my mission is to create solutions that truly make a difference, with a human touch, and to continue learning and evolving every day.`;

  const experiences = language === 'pt' ? [
    { company: "Cheetah Network", position: "CEO & Founder", period: "2023 - Presente", description: "Fundei e lidero a Cheetah Network, empresa especializada em soluções digitais." },
    { company: "Werneck Group", position: "Diretor Estratégico", period: "2024 - Presente", description: "Direção estratégica em consultoria empresarial e gestão de operações." }
  ] : [
    { company: "Cheetah Network", position: "CEO & Founder", period: "2023 - Present", description: "Founded and lead Cheetah Network, a company specialized in digital solutions." },
    { company: "Werneck Group", position: "Strategic Director", period: "2024 - Present", description: "Strategic direction in business consulting and operations management." }
  ];

  const values = language === 'pt' ? [
    { icon: Zap, title: "Qualidade", description: "Código limpo, eficiente e bem documentado" },
    { icon: BookOpen, title: "Aprendizado", description: "Sempre estudando novas tecnologias" },
    { icon: Heart, title: "Colaboração", description: "Melhores projetos vêm do trabalho em equipe" }
  ] : [
    { icon: Zap, title: "Quality", description: "Clean, efficient and well-documented code" },
    { icon: BookOpen, title: "Learning", description: "Always studying new technologies" },
    { icon: Heart, title: "Collaboration", description: "Best projects come from teamwork" }
  ];

  const certificates = language === 'pt' ? [
    { id: 1, title: "Administração no Século 21", issuer: "Fundação Bradesco", date: "2025", link: "https://drive.google.com/file/d/1uNq5H26X0WbQf2Ohxr3hWJ_bzHMnMT9Y" },
    { id: 2, title: "Estratégia de Negócios", issuer: "Fundação Bradesco", date: "2025", link: "https://drive.google.com/file/d/1Mel2pK_6ajyFOHQIuvFF5XbljNjY40TA/view?usp=drive_link" },
    { id: 3, title: "Gestão de Projetos", issuer: "Fundação Bradesco", date: "2023", link: "https://drive.google.com/file/d/1Y454v0F4R4G91iR2ZBC8ps1vfUNh-gHI/view?usp=drive_link" }
  ] : [
    { id: 1, title: "Administration in the 21st Century", issuer: "Bradesco Foundation", date: "2025", link: "https://drive.google.com/file/d/1uNq5H26X0WbQf2Ohxr3hWJ_bzHMnMT9Y" },
    { id: 2, title: "Business Strategy", issuer: "Bradesco Foundation", date: "2025", link: "https://drive.google.com/file/d/1Mel2pK_6ajyFOHQIuvFF5XbljNjY40TA/view?usp=drive_link" },
    { id: 3, title: "Project Management", issuer: "Bradesco Foundation", date: "2023", link: "https://drive.google.com/file/d/1Y454v0F4R4G91iR2ZBC8ps1vfUNh-gHI/view?usp=drive_link" }
  ];

  // Tech Stack
  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
  ];

  // Work Philosophy
  const workPhilosophy = language === 'pt' ? [
    { icon: Lightbulb, title: "Simplicidade", description: "Código complexo é fácil. Código simples que resolve problemas complexos é arte." },
    { icon: Target, title: "Foco no Resultado", description: "Tecnologia é meio, não fim. O que importa é o impacto real no negócio." },
    { icon: Coffee, title: "Iteração Constante", description: "Prefiro lançar rápido e melhorar continuamente do que buscar perfeição impossível." },
    { icon: Rocket, title: "Automação", description: "Se algo precisa ser feito mais de duas vezes, automatizo." }
  ] : [
    { icon: Lightbulb, title: "Simplicity", description: "Complex code is easy. Simple code that solves complex problems is art." },
    { icon: Target, title: "Result Focused", description: "Technology is a means, not an end. What matters is the real business impact." },
    { icon: Coffee, title: "Constant Iteration", description: "I prefer to launch fast and improve continuously rather than seek impossible perfection." },
    { icon: Rocket, title: "Automation", description: "If something needs to be done more than twice, I automate it." }
  ];

  // Stats/Achievements
  const stats = language === 'pt' ? [
    { value: "8+", label: "Anos de experiência", icon: Clock },
    { value: "50+", label: "Projetos entregues", icon: Layers },
    { value: "2", label: "Empresas fundadas", icon: TrendingUp },
    { value: "1", label: "Livro publicado", icon: BookOpen }
  ] : [
    { value: "8+", label: "Years of experience", icon: Clock },
    { value: "50+", label: "Projects delivered", icon: Layers },
    { value: "2", label: "Companies founded", icon: TrendingUp },
    { value: "1", label: "Book published", icon: BookOpen }
  ];

  // Career Timeline Milestones
  const careerMilestones = language === 'pt' ? [
    { year: "2016", title: "Primeiros Passos", description: "Comecei a explorar programação e tecnologia por curiosidade", icon: Code2 },
    { year: "2018", title: "Primeiro Projeto", description: "Desenvolvi meu primeiro projeto web completo para um cliente real", icon: Rocket },
    { year: "2020", title: "Especialização", description: "Foquei em desenvolvimento Full Stack com React e Node.js", icon: Target },
    { year: "2023", title: "Cheetah Network", description: "Fundei a Cheetah Network, minha primeira empresa de tecnologia", icon: TrendingUp },
    { year: "2024", title: "Expansão", description: "Assumi posição de liderança no Werneck Group", icon: Briefcase },
    { year: "2025", title: "Livro Publicado", description: "Publiquei meu primeiro livro sobre empreendedorismo e tecnologia", icon: BookOpen }
  ] : [
    { year: "2016", title: "First Steps", description: "Started exploring programming and technology out of curiosity", icon: Code2 },
    { year: "2018", title: "First Project", description: "Developed my first complete web project for a real client", icon: Rocket },
    { year: "2020", title: "Specialization", description: "Focused on Full Stack development with React and Node.js", icon: Target },
    { year: "2023", title: "Cheetah Network", description: "Founded Cheetah Network, my first technology company", icon: TrendingUp },
    { year: "2024", title: "Expansion", description: "Took leadership position at Werneck Group", icon: Briefcase },
    { year: "2025", title: "Book Published", description: "Published my first book about entrepreneurship and technology", icon: BookOpen }
  ];

  // Hobbies and Interests
  const hobbies = language === 'pt' ? [
    { icon: Gamepad2, title: "Games", description: "Jogos de estratégia e RPGs nas horas vagas" },
    { icon: Music, title: "Música", description: "Apreciador de diversos gêneros, especialmente eletrônica" },
    { icon: Camera, title: "Fotografia", description: "Capturando momentos e paisagens urbanas" },
    { icon: Plane, title: "Viagens", description: "Conhecer novas culturas e lugares" },
    { icon: Dumbbell, title: "Exercícios", description: "Manter corpo e mente saudáveis" },
    { icon: Film, title: "Cinema", description: "Filmes de ficção científica e documentários" }
  ] : [
    { icon: Gamepad2, title: "Games", description: "Strategy games and RPGs in spare time" },
    { icon: Music, title: "Music", description: "Appreciate various genres, especially electronic" },
    { icon: Camera, title: "Photography", description: "Capturing moments and urban landscapes" },
    { icon: Plane, title: "Travel", description: "Discovering new cultures and places" },
    { icon: Dumbbell, title: "Exercise", description: "Keeping body and mind healthy" },
    { icon: Film, title: "Cinema", description: "Sci-fi movies and documentaries" }
  ];

  return (
    <Layout withPadding={false}>
      <SEO 
        title="Sobre Talisson Souza | Desenvolvedor Full Stack"
        description="Conheça Talisson Souza, desenvolvedor full stack com mais de 8 anos de experiência, CEO da Cheetah Network e Diretor Estratégico do Werneck Group. Especialista em React, Node.js e soluções digitais."
        canonical="/sobre"
        keywords={['sobre', 'desenvolvedor', 'full stack', 'experiência', 'Cheetah Network', 'Werneck Group']}
      />
      
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden pt-24 pb-16">
        {/* Background */}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Avatar Section */}
            <ScrollReveal className="lg:col-span-4" direction="left">
              <div className="flex flex-col items-center lg:items-start gap-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-radial from-foreground/10 to-transparent rounded-full blur-2xl opacity-50 hidden md:block" />
                  <Avatar className="h-40 w-40 lg:h-48 lg:w-48 border-2 border-border/30 relative z-10">
                    <AvatarImage src="https://i.ibb.co/MySV14GV/Polish-20231015-221849134-112435.jpg" alt="Talisson Souza" className="object-cover" />
                    <AvatarFallback>TS</AvatarFallback>
                  </Avatar>
                </motion.div>

                <div className="flex flex-col items-center lg:items-start gap-4 w-full">
                  <SocialIcons />
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://drive.google.com/file/d/1JBmXK4aCAPfeY4kuEc5QpO-ehlA2rfWO/view?usp=sharing', '_blank')}
                    className="group w-full max-w-[200px] inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground bg-foreground rounded-full py-3 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 20px hsl(var(--foreground) / 0.15)'
                    }}
                  >
                    <Download className="w-4 h-4" />
                    {t.about.downloadCV}
                  </motion.button>
                </div>
              </div>
            </ScrollReveal>

            {/* Content Section */}
            <div className="lg:col-span-8">
              <ScrollReveal>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
                >
                  {t.about.title}
                </motion.span>
                <AnimatedTitle variant="hero" as="h1" className="mb-6">
                  Talisson Souza
                </AnimatedTitle>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  {t.about.subtitle}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* About Text Section */}
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
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div 
                className="relative p-10 lg:p-12 rounded-3xl border border-border/20 bg-card/30 backdrop-blur-sm"
                style={{
                  boxShadow: '0 8px 40px hsl(var(--foreground) / 0.03)'
                }}
              >
                <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-foreground/[0.06] rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-foreground/[0.06] rounded-br-3xl" />
                
                <div className="text-6xl font-serif text-foreground/[0.04] mb-4 select-none leading-none" style={{ letterSpacing: '-0.1em' }}>"</div>
                
                <p className="text-base lg:text-lg text-muted-foreground leading-[1.9] whitespace-pre-line">
                  {language === 'pt' ? aboutTextPt : aboutTextEn}
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Experience Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-card/20 to-transparent" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, 'Experiência', 'Experience')}
              </motion.span>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {getText(language, 'Trajetória Profissional', 'Professional Journey')}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
                {getText(language, 'Posições de liderança e contribuições que moldaram minha carreira.', 'Leadership positions and contributions that shaped my career.')}
              </p>
              <Link 
                to="/carreira"
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground"
              >
                <span className="relative">
                  {getText(language, 'Ver trajetória completa', 'View full career')}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </ScrollReveal>
            
            <div className="lg:col-span-7 space-y-6 relative">
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-6 lg:left-0 top-0 bottom-0 w-px origin-top hidden sm:block"
                style={{
                  background: 'linear-gradient(to bottom, hsl(var(--foreground) / 0.2), hsl(var(--foreground) / 0.05) 70%, transparent)'
                }}
              />
              
              {experiences.map((exp, index) => (
                <ScrollReveal key={exp.company} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ y: -3, x: 3 }}
                    transition={{ duration: 0.3 }}
                    className="relative pl-0 sm:pl-12 lg:pl-10"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                      className="absolute left-4 lg:left-[-5px] top-8 hidden sm:flex items-center justify-center"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/30 ring-4 ring-background" />
                    </motion.div>
                    
                    <div 
                      className="relative p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm group"
                      style={{
                        boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                      }}
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-foreground/[0.04] rounded-tr-2xl" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-lg font-serif text-foreground">{exp.company}</h3>
                          <p className="text-sm text-foreground/70">{exp.position}</p>
                        </div>
                        <span className="text-xs px-3 py-1.5 rounded-full border border-border/30 bg-card/50 text-muted-foreground w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Values Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
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
                {getText(language, 'Valores', 'Values')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                {getText(language, 'O que me guia', 'What guides me')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div 
                    className="relative h-full p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm text-center group"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="w-14 h-14 rounded-2xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-6 group-hover:border-foreground/20 transition-colors duration-300">
                      <value.icon className="w-6 h-6 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-serif text-foreground mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
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
                {getText(language, 'Números', 'Numbers')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                {getText(language, 'Em números', 'By the numbers')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="text-center group"
                >
                  <div 
                    className="relative p-6 lg:p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-4 group-hover:border-foreground/20 transition-colors duration-300">
                      <stat.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                    </div>
                    
                    <div className="text-3xl lg:text-4xl font-serif text-foreground mb-2">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Career Timeline Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/15 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
              >
                {getText(language, 'Jornada', 'Journey')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                {getText(language, 'Marcos da Carreira', 'Career Milestones')}
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto">
                {getText(language, 
                  'Os momentos decisivos que moldaram minha trajetória profissional.', 
                  'The decisive moments that shaped my professional journey.'
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px origin-top hidden md:block"
              style={{
                background: 'linear-gradient(to bottom, transparent, hsl(var(--foreground) / 0.2) 10%, hsl(var(--foreground) / 0.2) 90%, transparent)'
              }}
            />

            <div className="space-y-12 md:space-y-0">
              {careerMilestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year} delay={index * 0.15}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center md:gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className={`w-full md:w-[calc(50%-2rem)] ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div 
                        className="relative p-6 lg:p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group"
                        style={{
                          boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        
                        <div className={`flex items-center gap-4 mb-4 ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}>
                          <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center group-hover:border-foreground/20 transition-colors duration-300">
                            <milestone.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                          </div>
                          <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                            <span className="text-2xl font-serif text-foreground">{milestone.year}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-medium text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </motion.div>

                    {/* Center Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center"
                    >
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-foreground/30 ring-4 ring-background" />
                        <motion.div
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{ scale: 2, opacity: 0 }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          className="absolute inset-0 rounded-full bg-foreground/20"
                        />
                      </div>
                    </motion.div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Hobbies Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-card/15 to-transparent" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
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
                {getText(language, 'Pessoal', 'Personal')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                {getText(language, 'Além do Código', 'Beyond the Code')}
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto">
                {getText(language, 
                  'Interesses e hobbies que me mantêm criativo e equilibrado.', 
                  'Interests and hobbies that keep me creative and balanced.'
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {hobbies.map((hobby, index) => (
              <ScrollReveal key={hobby.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full"
                >
                  <div 
                    className="relative h-full p-6 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm text-center"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-4 group-hover:border-foreground/20 transition-colors duration-300">
                      <hobby.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-base font-medium text-foreground mb-2">{hobby.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{hobby.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Tech Stack Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-card/15 to-transparent" />
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, 'Stack', 'Stack')}
              </motion.span>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {getText(language, 'Tecnologias Favoritas', 'Favorite Technologies')}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                {getText(language, 
                  'Ferramentas que uso no dia a dia para construir soluções robustas e escaláveis.', 
                  'Tools I use daily to build robust and scalable solutions.'
                )}
              </p>
            </ScrollReveal>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <ScrollReveal key={tech.name} delay={index * 0.08}>
                    <motion.div
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group"
                    >
                      <div 
                        className="relative p-5 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
                        style={{
                          boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center group-hover:border-foreground/20 transition-colors duration-300">
                            <Code2 className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-foreground">{tech.name}</h4>
                            <p className="text-xs text-muted-foreground/70">{tech.category}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Work Philosophy Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[75%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
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
                {getText(language, 'Filosofia', 'Philosophy')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                {getText(language, 'Como eu trabalho', 'How I work')}
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto">
                {getText(language, 
                  'Princípios que guiam cada linha de código e decisão de negócio.', 
                  'Principles that guide every line of code and business decision.'
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {workPhilosophy.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div 
                    className="relative h-full p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-foreground/[0.04] rounded-tr-2xl" />
                    
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl border border-border/30 bg-card/50 flex items-center justify-center shrink-0 group-hover:border-foreground/20 transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Book Section */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-card/20 to-transparent" />
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div 
                className="relative rounded-3xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden"
                style={{
                  boxShadow: '0 8px 40px hsl(var(--foreground) / 0.03)'
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="p-10 flex items-center justify-center bg-gradient-to-br from-card/50 to-background">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-foreground/10 rounded-lg blur-xl scale-110" />
                      <img
                        src={bookCover}
                        alt={t.book.title}
                        className="relative w-36 h-auto rounded-lg shadow-xl"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="md:col-span-2 p-10 space-y-5">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-border/30 bg-card/50 text-foreground">
                      {t.book.newRelease}
                    </span>
                    
                    <h3 className="text-xl font-serif text-foreground">{t.book.title}</h3>
                    
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-foreground/70 text-foreground/70" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-2">121 {language === 'pt' ? 'capítulos' : 'chapters'}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t.book.aboutText1}
                    </p>
                    
                    <a 
                      href="https://www.amazon.com.br/dp/B0FXV8WP3Y" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <span className="relative">
                        {t.book.buyOnAmazon}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Certificates Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="mb-10">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {t.certificates.title}
              </motion.span>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {getText(language, 'Certificações', 'Certifications')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <ScrollReveal key={cert.id} delay={index * 0.1}>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="block h-full group"
                >
                  <div 
                    className="relative h-full p-6 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center group-hover:border-foreground/20 transition-colors duration-300">
                        <Award className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-foreground/30 group-hover:text-foreground/70 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-base font-medium text-foreground mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                    
                    <div className="flex items-center text-xs text-muted-foreground/70">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Community Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
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
                  <Users className="w-8 h-8 text-foreground/60" />
                </div>
                
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
                >
                  {getText(language, 'Comunidade', 'Community')}
                </motion.span>
                
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight">
                  Tech Leaders Network
                </h2>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {getText(language, 
                    'Fundador da comunidade exclusiva para empreendedores e programadores que querem acelerar suas carreiras.', 
                    'Founder of the exclusive community for entrepreneurs and programmers who want to accelerate their careers.'
                  )}
                </p>
                
                <a 
                  href="https://discord.gg/edZWXqcxuF" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                  style={{
                    boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                  }}
                >
                  {getText(language, 'Entrar na comunidade', 'Join community')}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </GlassCard>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
