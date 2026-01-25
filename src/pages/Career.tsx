import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { 
  Rocket, Target, Heart, Users, Lightbulb, Shield, 
  Award, Calendar, Building2, Briefcase, Quote, Sparkles, 
  HandHeart, ArrowRight, ArrowUpRight, Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const Career = () => {
  const { language } = useTheme();

  const content = {
    pt: {
      title: "Minha Carreira",
      subtitle: "Transformando desafios em oportunidades"
    },
    en: {
      title: "My Career",
      subtitle: "Transforming challenges into opportunities"
    }
  };

  const tt = content[language];

  const storyPt = `Meu nome é Talisson Souza, mas muitos me conhecem como Talinho. Sou Empreendedor Executivo, Diretor de Negócios Empresariais e Desenvolvedor Full Stack. Minha relação com a tecnologia começou de forma simples: na curiosidade de explorar, aprender e descobrir.

Aos 14 anos, desenvolvi meus primeiros bots para Discord. Ali percebi que tecnologia não era apenas código, mas sim uma forma de conectar pessoas e transformar ideias em soluções reais.`;

  const storyEn = `My name is Talisson Souza, but many know me as Talinho. I'm an Executive Entrepreneur, Business Director, and Full Stack Developer. My relationship with technology began simply: in the curiosity to explore, learn and discover.

At 14, I developed my first bots for Discord. There I realized that technology was not just code, but a way to connect people and transform ideas into real solutions.`;

  const whyCompanyPt = `Em 2021, participei de um processo seletivo para uma vaga de Jovem Aprendiz. Passei por todas as etapas com dedicação: entrevista, exames médicos, preparação. No entanto, ao final do processo, fui recusado. Não por falta de qualificação. Mas por causa da minha cadeira de rodas.

Naquele momento, tomei uma decisão: se não iam me dar espaço, eu criaria o meu próprio espaço. Assim nasceu a Cheetah Network.`;

  const whyCompanyEn = `In 2021, I participated in a selection process for a Young Apprentice position. I went through all stages with dedication: interview, medical exams, preparation. However, at the end of the process, I was rejected. Not for lack of qualification. But because of my wheelchair.

At that moment, I made a decision: if they wouldn't give me space, I would create my own space. Thus Cheetah Network was born.`;

  const stats = [
    { icon: Award, label: getText(language, "Projetos Entregues", "Projects Delivered"), value: "50+" },
    { icon: Building2, label: getText(language, "Empresas Fundadas", "Companies Founded"), value: "2" },
    { icon: Star, label: getText(language, "Satisfação", "Satisfaction"), value: "100%" },
    { icon: Calendar, label: getText(language, "Anos de Experiência", "Years of Experience"), value: "8+" }
  ];

  const timelineEvents = [
    { year: "2018", title: getText(language, "Início da Jornada", "Journey Begins"), description: getText(language, "Aos 14 anos, criei meus primeiros bots para Discord", "At 14, I created my first Discord bots"), icon: Rocket },
    { year: "2021", title: getText(language, "Momento Decisivo", "Decisive Moment"), description: getText(language, "Experiência que motivou a criação da própria empresa", "Experience that motivated the creation of my own company"), icon: Target },
    { year: "2023", title: getText(language, "Fundação da Cheetah Network", "Cheetah Network Founded"), description: getText(language, "Criação da empresa focada em soluções digitais", "Company created focused on digital solutions"), icon: Building2 },
    { year: "2024", title: getText(language, "Diretor Estratégico", "Strategic Director"), description: getText(language, "Posição estratégica no Werneck Group", "Strategic position at Werneck Group"), icon: Briefcase }
  ];

  const testimonials = [
    {
      name: "Priscila Suanne",
      role: language === 'pt' ? "Desenvolvedora Back End" : "Back End Developer",
      text: language === 'pt' 
        ? "Tive o prazer de trabalhar com Thalisson, um profissional extremamente comprometido, resiliente e dedicado em tudo o que faz."
        : "I had the pleasure of working with Thalisson, an extremely committed, resilient and dedicated professional in everything he does.",
      image: "https://i.ibb.co/zWp10rhx/Priscila.jpg"
    },
    {
      name: "Matheus Yuri Silva",
      role: language === 'pt' ? "Desenvolvedor de Software" : "Software Developer",
      text: language === 'pt' 
        ? "Talisson demonstra uma combinação rara de expertise técnica e visão estratégica de negócios."
        : "Talisson demonstrates a rare combination of technical expertise and strategic business vision.",
      image: "https://i.ibb.co/V0P35B23/Matheus.jpg"
    }
  ];

  const values = [
    { icon: Heart, title: language === 'pt' ? "Empatia" : "Empathy", description: language === 'pt' ? "Criar soluções humanas" : "Create human solutions" },
    { icon: Lightbulb, title: language === 'pt' ? "Inovação" : "Innovation", description: language === 'pt' ? "Novas formas de resolver" : "New ways to solve" },
    { icon: Shield, title: language === 'pt' ? "Transparência" : "Transparency", description: language === 'pt' ? "Honestidade em tudo" : "Honesty in everything" },
    { icon: Users, title: language === 'pt' ? "Inclusão" : "Inclusion", description: language === 'pt' ? "Oportunidades para todos" : "Opportunities for all" }
  ];

  const companies = [
    { name: "Cheetah Network", description: language === 'pt' ? "Soluções digitais especializadas em desenvolvimento de bots e aplicações web." : "Digital solutions specialized in bot development and web applications.", logo: "https://i.ibb.co/0yQ0mnD6/bannercheetah2.png", role: "CEO & Founder" },
    { name: "Werneck Group", description: language === 'pt' ? "Consultoria estratégica especializada em transformação digital." : "Strategic consulting specialized in digital transformation.", logo: "https://i.ibb.co/YT7LK7Vc/bannerwerneck.jpg", role: getText(language, "Diretor Estratégico", "Strategic Director") }
  ];

  const partnerships = [
    { name: "Tech Leaders Network", description: language === 'pt' ? "Fundador da comunidade exclusiva" : "Founder of exclusive community", logo: "https://i.ibb.co/M5jS68gD/93afd9c07484ebe558d11e4b95c6d976.png", link: "https://discord.gg/edZWXqcxuF", badge: language === 'pt' ? 'Fundador' : 'Founder' },
    { name: "Rocketseat", description: language === 'pt' ? "Influenciador oficial" : "Official influencer", logo: "https://i.ibb.co/jvVR1DzD/rocketseat-logo.jpg", link: "https://www.rocketseat.com.br/oferta/influencer/v2/talinho", badge: "Influencer" },
    { name: "Square Cloud", description: language === 'pt' ? "Parceiro oficial" : "Official partner", logo: "https://squarecloud.app/favicon.ico", link: "https://squarecloud.app", badge: language === 'pt' ? 'Parceiro' : 'Partner' }
  ];

  return (
    <Layout withPadding={false}>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl" />
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
          <ScrollReveal>
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                <span className="w-8 h-px bg-foreground/30" />
                {tt.title}
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-6">
                {tt.subtitle}
              </AnimatedTitle>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-6 text-center group"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border/30 text-foreground/70 mb-4 group-hover:border-foreground/20 transition-colors duration-300">
                    <stat.icon className="w-5 h-5 group-hover:text-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-3xl font-serif text-foreground mb-1">{stat.value}</h3>
                  <p className="text-xs text-muted-foreground/70">{stat.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
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
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              <span className="w-8 h-px bg-foreground/30" />
              {getText(language, 'História', 'Story')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, 'Minha Jornada', 'My Journey')}
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="relative p-8 lg:p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm h-full"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-foreground/[0.06] rounded-tl-2xl" />
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-foreground/60" />
                    </div>
                    <h3 className="text-lg font-serif text-foreground">
                      {getText(language, 'O Início', 'The Beginning')}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-[1.9] whitespace-pre-line">
                    {language === 'pt' ? storyPt : storyEn}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="relative p-8 lg:p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm h-full"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-foreground/[0.06] rounded-br-2xl" />
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <Target className="w-5 h-5 text-foreground/60" />
                    </div>
                    <h3 className="text-lg font-serif text-foreground">
                      {getText(language, 'A Decisão', 'The Decision')}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-[1.9] whitespace-pre-line">
                    {language === 'pt' ? whyCompanyPt : whyCompanyEn}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Timeline Section */}
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
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                <span className="w-8 h-px bg-foreground/30" />
                Timeline
              </motion.span>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {getText(language, 'Marcos Importantes', 'Key Milestones')}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                {getText(language, 'Os momentos que definiram minha trajetória profissional.', 'The moments that defined my professional trajectory.')}
              </p>
            </ScrollReveal>
            
            <div className="lg:col-span-7 space-y-4 relative">
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
              
              {timelineEvents.map((event, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -3, x: 3 }}
                    transition={{ duration: 0.3 }}
                    className="relative pl-0 sm:pl-12 lg:pl-10"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                      className="absolute left-4 lg:left-[-5px] top-6 hidden sm:flex items-center justify-center"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/30 ring-4 ring-background" />
                    </motion.div>
                    
                    <div 
                      className="relative p-6 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm group"
                      style={{
                        boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0 group-hover:border-foreground/20 transition-colors duration-300">
                          <event.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xl font-serif text-foreground">{event.year}</span>
                            <h3 className="text-sm font-medium text-foreground">{event.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Companies Section */}
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
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              <span className="w-8 h-px bg-foreground/30" />
              {getText(language, 'Empresas', 'Companies')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, 'Minhas Empresas', 'My Companies')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <ScrollReveal key={company.name} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div 
                    className="relative h-full rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden group"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    </div>
                    
                    <div className="p-8">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-border/30 bg-card/50 text-foreground/70 mb-4">
                        {company.role}
                      </span>
                      <h3 className="text-xl font-serif text-foreground mb-3">{company.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{company.description}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Partnerships Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-card/20 to-transparent" />
            <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              <span className="w-8 h-px bg-foreground/30" />
              {getText(language, 'Parcerias', 'Partnerships')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, 'Parcerias e Atuações', 'Partnerships and Activities')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerships.map((partnership, index) => (
              <ScrollReveal key={partnership.name} delay={index * 0.1}>
                <motion.a
                  href={partnership.link}
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
                    
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={partnership.logo} 
                        alt={partnership.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <h3 className="text-base font-medium text-foreground">{partnership.name}</h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-border/30 bg-background/80 text-foreground/70">
                          {partnership.badge}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{partnership.description}</p>
                    
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      <span className="relative">
                        {language === 'pt' ? 'Saiba mais' : 'Learn more'}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Values Section */}
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
                {getText(language, 'Valores Pessoais', 'Personal Values')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div 
                    className="relative h-full p-6 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm text-center group"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-4 group-hover:border-foreground/20 transition-colors duration-300">
                      <value.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-base font-medium text-foreground mb-2">{value.title}</h3>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-card/20 to-transparent" />
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="mb-10">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                <span className="w-8 h-px bg-foreground/30" />
                {getText(language, 'Depoimentos', 'Testimonials')}
              </motion.span>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {language === 'pt' ? 'O que dizem' : 'What they say'}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div 
                    className="relative h-full p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-foreground/[0.02] to-transparent rounded-tr-2xl" />
                    
                    <blockquote className="relative">
                      <div className="absolute -top-4 -left-2 text-6xl text-foreground/[0.05] font-serif leading-none select-none">"</div>
                      
                      <p className="text-base text-foreground/80 leading-[1.8] mb-8 relative z-10">
                        "{testimonial.text}"
                      </p>
                      
                      <footer className="flex items-center gap-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-xl object-cover border border-border/30"
                        />
                        <div>
                          <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground/70">{testimonial.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Inclusion Section */}
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
                  <HandHeart className="w-8 h-8 text-foreground/60" />
                </div>
                
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
                >
                  {getText(language, 'Inclusão', 'Inclusion')}
                </motion.span>
                
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight">
                  {language === 'pt' ? 'Comprometido com a Diversidade' : 'Committed to Diversity'}
                </h2>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {language === 'pt' 
                    ? 'A minha história me ensinou que inclusão não é apenas uma palavra, mas uma prática diária. Me comprometo a criar ambientes onde todas as pessoas possam crescer e contribuir.'
                    : 'My story taught me that inclusion is not just a word, but a daily practice. I\'m committed to creating environments where all people can grow and contribute.'}
                </p>
                
                <Link 
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                  style={{
                    boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                  }}
                >
                  {getText(language, 'Vamos conversar', 'Let\'s talk')}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </GlassCard>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
