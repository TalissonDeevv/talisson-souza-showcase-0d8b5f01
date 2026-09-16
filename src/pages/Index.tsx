import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ContactDialog from "@/components/ui/ContactDialog";

import SocialIcons from "@/components/ui/SocialIcons";
import FAQ from "@/components/ui/FAQ";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import PremiumBadge from "@/components/ui/PremiumBadge";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Quote } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import { motion } from "framer-motion";
import AnimatedSignature from "@/components/ui/AnimatedSignature";
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiGit, SiDocker, SiFirebase } from "react-icons/si";
import CompanyLogos from "@/components/ui/CompanyLogos";
import DiscordCommunityCard from "@/components/ui/DiscordCommunityCard";
import StoryHighlight from "@/components/ui/StoryHighlight";
import SectionSignatureHeader from "@/components/ui/SectionSignatureHeader";
import TestimonialsEditorial from "@/components/ui/editorial-testimonial";
import { feedbacks } from "@/data/feedbacks";
import signatureTrajetoria from "@/assets/signature-trajetoria.png";
import signatureProjetos from "@/assets/signature-projetos.png";
import signatureServicos from "@/assets/signature-servicos.png";
import signatureDiscord from "@/assets/signature-discord.png";
import signatureFeedbacks from "@/assets/signature-feedbacks.png";
const agonLogo = "/images/discord/agon-logo.png";
const agonBanner = "/images/discord/agon-banner.png";
const hytaleLogo = "/images/discord/hytale-logo.gif";
const hytaleBanner = "/images/discord/hytale-banner.png";
const modsclubLogo = "/images/discord/modsclub-logo.png";
const modsclubBanner = "/images/discord/modsclub-banner.png";
const escritorioLogo = "/images/discord/escritorio-logo.png";
const escritorioBannerFull = "/images/discord/escritorio-banner-full.png";
import bookMockupImg from "@/assets/book-mockup-v3.png";

const Index = () => {
  const {
    language
  } = useTheme();
  const t = useTranslation(language);
  const showLegacyStoryPreview = import.meta.env.DEV && import.meta.env.VITE_SHOW_LEGACY_STORY === "true";
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
  const feedbackLanguage = language === "en" ? "en" : "pt";
  const homeTestimonials = feedbacks.map((feedback) => ({
    quote: feedback.text[feedbackLanguage],
    author: feedback.name,
    role: feedback.role[feedbackLanguage],
    image: feedback.image,
  }));
  const featuredCompanies = [{
    name: "Cheetah Solutions Network",
    role: "CEO & Founder",
    period: "2020 - " + getText(language, 'Presente', 'Present'),
    description: getText(language, "Soluções digitais especializadas em desenvolvimento de bots, aplicações web.", "Digital solutions specialized in bot development and web applications.")
  }, {
    name: "Werneck Group",
    role: getText(language, 'Diretor Estratégico', 'Strategic Director'),
    period: "2024 - " + getText(language, 'Presente', 'Present'),
    description: getText(language, "Consultoria estratégica especializada em transformação digital e implementação de soluções tecnológicas empresariais.", "Strategic consulting specialized in digital transformation and implementation of enterprise technology solutions.")
  }];
  const techStack = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: SiGit },
  { name: 'Docker', icon: SiDocker },
  { name: 'Firebase', icon: SiFirebase }];
  const stackLayers = [
    {
      number: "01",
      title: getText(language, "Interface", "Interface"),
      description: getText(language, "Experi\u00eancias r\u00e1pidas, responsivas e f\u00e1ceis de manter.", "Fast, responsive and maintainable experiences."),
      tools: techStack.filter((tech) => ["React", "Tailwind", "JavaScript", "TypeScript"].includes(tech.name)),
    },
    {
      number: "02",
      title: getText(language, "Aplica\u00e7\u00e3o", "Application"),
      description: getText(language, "Regras, integra\u00e7\u00f5es e fluxos organizados para crescer sem ru\u00eddo.", "Rules, integrations and flows organized to grow without noise."),
      tools: techStack.filter((tech) => ["Node.js", "Next.js", "Python", "Firebase"].includes(tech.name)),
    },
    {
      number: "03",
      title: getText(language, "Dados & opera\u00e7\u00e3o", "Data & operations"),
      description: getText(language, "Persist\u00eancia, versionamento e deploy com base previs\u00edvel.", "Persistence, versioning and deploy with a predictable base."),
      tools: techStack.filter((tech) => ["PostgreSQL", "MongoDB", "Docker", "Git"].includes(tech.name)),
    },
  ];

  return (
    <Layout withPadding={false} showDiscordPopup={true}>
      <SEO
        title={getText(language, 'Talisson Souza | Engenheiro de Software & Empresário', 'Talisson Souza | Software Engineer & Entrepreneur')}
        description={getText(language, "Engenheiro de Software e fundador da Cheetah Solutions Network. Mais de 8 anos criando sistemas, automações e arquiteturas digitais.", "Software Engineer and founder of Cheetah Solutions Network. Over 8 years building systems, automations and digital architectures.")}
        canonical={language === 'en' ? '/en-us' : '/'}
        keywords={language === 'pt' ? ['desenvolvedor full stack', 'CEO', 'sistemas sob medida', 'desenvolvimento web', 'React', 'Node.js', 'TypeScript', 'Cheetah Solutions Network'] : ['full stack developer', 'CEO', 'custom systems', 'web development', 'React', 'Node.js', 'TypeScript', 'Cheetah Solutions Network']} />

      <section className="min-h-[115vh] flex items-center justify-center relative overflow-hidden">
        {/* Sophisticated Background Effect */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          
          {/* Radial glow effects */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl opacity-60 hidden md:block" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-accent/5 via-transparent to-transparent blur-3xl opacity-40 hidden md:block" />
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-muted/10 via-transparent to-transparent blur-3xl opacity-30 hidden md:block" />
          
          {/* Subtle grid texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />

          
          {/* Particles Effect */}
          <ParticlesBackground />
        </div>

        {/* Bottom fade effect - smooth transition to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)'
          }} />


        {/* Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-20 pt-24 pb-24">
          <div className="flex min-h-[calc(100vh-8rem)] translate-y-[3vh] flex-col items-center justify-center text-center max-w-7xl mx-auto">
            {/* Badge with entrance animation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground sm:mb-4 sm:text-sm">

              {t.hero.badge}
            </motion.p>
            
            {/* Signature — protagonist of the hero */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-3 flex w-full max-w-[98vw] justify-center sm:mb-4"
            >
              <AnimatedSignature />
            </motion.div>


            {/* Subtitle with entrance animation */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-0 leading-relaxed">

              {t.hero.subtitle}
            </motion.p>
          </div>

          <div className="flex flex-col items-center text-center">
            {/* CTAs with entrance animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">

              <Link
                to={language === 'en' ? '/en-us/contact' : '/contato'}
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-all duration-300">
                <span className="relative">
                  {t.hero.contact}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <Link
                to={language === 'en' ? '/en-us/about' : '/sobre'}
                className="group text-sm text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-2">

                {t.hero.about}
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* Social Icons with entrance animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-2">

              <SocialIcons centered className="mx-auto max-w-[92vw] justify-center" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Technical Hub */}
      <ParallaxSection
        className="py-16 lg:py-20"
        speed={0.1}
        backgroundElement={
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute left-1/2 top-1/2 hidden h-[560px] w-[760px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-foreground/[0.025] via-transparent to-transparent blur-3xl md:block" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4 lg:pt-6">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium">

                  {getText(language, 'Tecnologias', 'Technologies')}
                </motion.span>
                <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                  {getText(language, 'Stack T\u00e9cnica', 'Tech Stack')}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-7">
                  {getText(language, 'Ferramentas e tecnologias que domino para construir sistemas robustos e escal\u00e1veis.', 'Tools and technologies I master to build robust and scalable systems.')}
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.025, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -3 }}
                        className="group flex min-h-[92px] items-center gap-3 rounded-lg border border-border/20 bg-card/25 px-4 py-4 transition-colors duration-300 hover:border-foreground/20 hover:bg-foreground/[0.035]"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border/25 bg-background/45 text-foreground/65 transition-colors duration-300 group-hover:text-foreground">
                          <IconComponent className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Tech Stack - Legacy Hidden */}
      <ParallaxSection
        className="hidden"
        speed={0.1}
        backgroundElement={
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
            <div className="absolute top-20 right-[15%] w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
            <div className="absolute bottom-20 left-[10%] w-[300px] h-[300px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }>

        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Header */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium">

                  {getText(language, 'Tecnologias', 'Technologies')}
                </motion.span>
                <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                  {getText(language, 'Stack Técnica', 'Tech Stack')}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-8">
                  {getText(language, 'Ferramentas e tecnologias que domino para construir sistemas robustos e escaláveis.', 'Tools and technologies I master to build robust and scalable systems.')}
                </p>
                {/* Decorative element */}
                <div className="hidden lg:flex items-center gap-4 mt-6">
                  <div className="w-12 h-12 rounded-2xl border border-border/40 bg-card/50 flex items-center justify-center">
                    <span className="text-lg font-serif text-foreground/60">{techStack.length}</span>
                  </div>
                  <span className="text-sm text-muted-foreground/60">{getText(language, 'tecnologias', 'technologies')}</span>
                </div>
              </div>
              
              {/* Tech Grid - More visual interest */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.03 }}
                        whileHover={{
                          y: -4,
                          transition: { duration: 0.2 }
                        }}
                        className="group relative p-4 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm cursor-default overflow-hidden flex flex-col items-center justify-center gap-2"
                        style={{
                          boxShadow: '0 2px 8px hsl(var(--foreground) / 0.02)'
                        }}>

                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-foreground/[0.04] to-transparent" />
                        
                        {/* Top highlight line */}
                        <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <IconComponent className="relative w-6 h-6 text-foreground/50 group-hover:text-foreground transition-colors duration-300" />
                        <span className="relative text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {tech.name}
                        </span>
                      </motion.div>);

                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Career Timeline - Premium Animated */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
        <>
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-card/20 to-transparent" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-card/20 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          </>
        }>

        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <SectionSignatureHeader
              eyebrow={getText(language, 'Experi\u00eancia', 'Experience')}
              title={getText(language, 'Trajet\u00f3ria', 'Journey')}
              subtitle={getText(language, 'Posi\u00e7\u00f5es de lideran\u00e7a e contribui\u00e7\u00f5es que moldaram minha carreira em tecnologia.', 'Leadership positions and contributions that shaped my career in technology.')}
              signature={signatureTrajetoria}
              className="lg:col-span-12"
              action={
                <Link
                  to={language === 'en' ? '/en-us/career' : '/carreira'}
                  className="group inline-flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="relative">
                    {getText(language, 'Ver trajet\u00f3ria completa', 'View full career')}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              }
            />
            {/* Header */}
            <ScrollReveal className="hidden">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium">

                {getText(language, 'Experiência', 'Experience')}
              </motion.span>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {getText(language, 'Trajetória', 'Journey')}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
                {getText(language, 'Posições de liderança e contribuições que moldaram minha carreira em tecnologia.', 'Leadership positions and contributions that shaped my career in technology.')}
              </p>
              <Link
                to={language === 'en' ? '/en-us/career' : '/carreira'}
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground">

                <span className="relative">
                    {getText(language, 'Ver trajet\u00f3ria completa', 'View full career')}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </ScrollReveal>
            
            {/* Timeline Cards */}
            <div className="lg:col-span-10 lg:col-start-2 space-y-6 relative">
              {/* Animated Timeline Line with gradient */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-6 lg:left-0 top-0 bottom-0 w-px origin-top hidden sm:block"
                style={{
                  background: 'linear-gradient(to bottom, hsl(var(--foreground) / 0.2), hsl(var(--foreground) / 0.05) 70%, transparent)'
                }} />

              
              {featuredCompanies.map((company, index) =>
              <ScrollReveal key={company.name} delay={index * 0.15}>
                  <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-0 sm:pl-12 lg:pl-10">

                    {/* Timeline dot */}
                    <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                    className="absolute left-4 lg:left-[-5px] top-8 hidden sm:flex items-center justify-center">

                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/30 ring-4 ring-background" />
                    </motion.div>
                    
                    <motion.div
                    whileHover={{ y: -3, x: 3 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm group"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}>

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-foreground/[0.02] to-transparent rounded-tr-2xl" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                        <div>
                          <h3 className="text-xl font-serif text-foreground mb-1 group-hover:text-gradient transition-all duration-300">{company.role}</h3>
                          <p className="text-sm text-muted-foreground/80 font-medium">{company.name}</p>
                        </div>
                        <PremiumBadge variant="outline" className="text-xs shrink-0">{company.period}</PremiumBadge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {company.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Company Logos - Social Proof */}
      <ParallaxSection
        className="py-0"
        speed={0.08}
        backgroundElement={
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
          </>
        }>

        <CompanyLogos />
      </ParallaxSection>


      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.15}
        backgroundElement={
        <>
            <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-gradient-to-bl from-card/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-card/20 to-transparent" />
          </>
        }>

        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <SectionSignatureHeader
            eyebrow={getText(language, 'Portf\u00f3lio', 'Portfolio')}
            title={t.projects.title}
            subtitle={t.projects.subtitle}
            signature={signatureProjetos}
            className="mb-14"
            action={
              <Link
                to={language === 'en' ? '/en-us/projects' : '/projetos'}
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground">
                <span className="relative">
                  {t.projects.viewAll}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            }
          />

          <div className="hidden">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div className="max-w-xl">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium">

                  {getText(language, 'Portfolio', 'Portfolio')}
                </motion.span>
                <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                  {t.projects.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t.projects.subtitle}
                </p>
              </div>
              <Link
                to={language === 'en' ? '/en-us/projects' : '/projetos'}
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground self-start lg:self-auto">

                <span className="relative">
                  {t.projects.viewAll}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          <div className="hidden">
            <ScrollReveal delay={0.05} className="lg:col-span-4">
              <div className="relative h-full overflow-hidden rounded-lg border border-border/20 bg-card/25 p-7 backdrop-blur-sm">
                <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                <span className="mb-8 block text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground/70">
                  {getText(language, 'Modo de atuação', 'Operating mode')}
                </span>
                <h3 className="max-w-xs font-serif text-2xl leading-tight text-foreground lg:text-3xl">
                  {getText(language, 'Clareza antes do código.', 'Clarity before code.')}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    'Cada entrega começa com recorte de problema, prioridade técnica e uma rota simples para transformar intenção em produto confiável.',
                    'Every delivery starts with problem framing, technical priority and a simple path from intent to a reliable product.'
                  )}
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    getText(language, 'Escopo legível', 'Readable scope'),
                    getText(language, 'Execução rastreável', 'Traceable execution'),
                    getText(language, 'Base preparada para evoluir', 'A base ready to evolve'),
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-xs text-muted-foreground/80">
                      <span className="h-px w-8 bg-foreground/20" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-lg border border-border/20 bg-card/20 backdrop-blur-sm">
                {[{
                  number: '01',
                  title: getText(language, 'Presença digital sob medida', 'Tailored digital presence'),
                  description: getText(language, 'Sites e aplicações web com acabamento premium, performance e uma estrutura pronta para crescer.', 'Websites and web applications with premium polish, performance and a structure ready to grow.'),
                  detail: getText(language, 'Interface, front-end e deploy', 'Interface, frontend and deploy')
                }, {
                  number: '02',
                  title: getText(language, 'Operações internas', 'Internal operations'),
                  description: getText(language, 'Sistemas para organizar fluxos, reduzir retrabalho e dar mais previsibilidade ao dia a dia da equipe.', 'Systems that organize workflows, reduce rework and make day-to-day operations more predictable.'),
                  detail: getText(language, 'Painéis, automações e integrações', 'Dashboards, automations and integrations')
                }, {
                  number: '03',
                  title: getText(language, 'Direção técnica', 'Technical direction'),
                  description: getText(language, 'Apoio estratégico para decidir arquitetura, prioridades e próximos passos sem desperdiçar energia.', 'Strategic support for architecture, priorities and next steps without wasting energy.'),
                  detail: getText(language, 'Diagnóstico, roadmap e revisão', 'Diagnosis, roadmap and review')
                }].map((service, index) =>
                <ScrollReveal key={service.number} delay={index * 0.1}>
                    <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="group grid gap-4 border-t border-border/20 px-5 py-6 first:border-t-0 sm:grid-cols-[84px_1fr] lg:grid-cols-[90px_1.1fr_1fr] lg:items-center lg:px-7">

                      <div className="flex items-center gap-4 sm:block">
                        <span className="font-serif text-4xl leading-none text-foreground/[0.12] transition-colors duration-500 group-hover:text-foreground/25">
                          {service.number}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-foreground/15 to-transparent sm:mt-5 sm:w-12" />
                      </div>

                      <div>
                        <h3 className="font-serif text-xl leading-tight text-foreground transition-colors duration-500 group-hover:text-foreground/90">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-4 border-t border-border/20 pt-4 sm:col-start-2 lg:col-start-auto lg:border-t-0 lg:pt-0">
                        <span className="max-w-[220px] text-xs uppercase tracking-[0.18em] text-muted-foreground/65">
                          {service.detail}
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-foreground/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground/70" />
                      </div>
                    </motion.div>
                  </ScrollReveal>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {featuredProjects.map((project, index) =>
            <ScrollReveal
              key={project.title}
              delay={index * 0.1}
              className={`h-full ${index === 0 ? 'lg:col-span-5' : index === 1 ? 'lg:col-span-4' : 'lg:col-span-3'}`}
            >
                <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="h-full">

                  <div
                  className="project-card-surface relative h-full min-h-[310px] overflow-hidden rounded-lg border border-border/20 bg-card/30 p-8 backdrop-blur-sm group"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Project number */}
                    <div className="mb-6 flex items-center gap-4">
                      <span className="project-card-number text-4xl font-serif text-foreground/[0.08] group-hover:text-foreground/15 transition-colors duration-500" style={{ letterSpacing: '-0.05em' }}>0{index + 1}</span>
                      <div className="project-card-rule flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent" />
                    </div>
                    
                    <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4 group-hover:text-gradient transition-all duration-500 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) =>
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md border border-border/30 bg-background/50 text-muted-foreground/70">

                          {tech}
                        </span>
                    )}
                    </div>
                    
                    {project.link &&
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground">

                        <span className="relative">
                          {t.projects.seeProject}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover/link:w-full transition-all duration-300" />
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                  }
                  </div>
                </motion.div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </ParallaxSection>

      {/* Story Highlight - Premium */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
          </>
        }>

        
        <StoryHighlight />
        {showLegacyStoryPreview && (
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto">

              <div
                className="relative p-10 lg:p-12 rounded-3xl border border-border/20 bg-card/30 backdrop-blur-sm text-center"
                style={{
                  boxShadow: '0 8px 40px hsl(var(--foreground) / 0.03)'
                }}>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-foreground/[0.06] rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-foreground/[0.06] rounded-br-3xl" />
                
                {/* Decorative quote */}
                <div className="text-6xl font-serif text-foreground/[0.04] mb-2 select-none leading-none" style={{ letterSpacing: '-0.1em' }}>"</div>
                
                <h2 className="font-serif text-xl lg:text-2xl xl:text-3xl text-foreground mb-6 leading-[1.2]">
                  {language === 'pt' ? 'Reflexão' : 'Reflection'}
                </h2>
                
                <p className="text-sm text-muted-foreground leading-[1.8] mb-4 max-w-2xl mx-auto">
                  {language === 'pt' ? 'Em 2021, fui recusado em um processo seletivo não por falta de qualificação, mas por causa da minha cadeira de rodas. Esse momento transformou frustração em propósito.' : 'In 2021, I was rejected in a selection process not for lack of qualification, but because of my wheelchair. That moment transformed frustration into purpose.'}
                </p>
                <p className="text-sm text-muted-foreground leading-[1.8] mb-8 max-w-2xl mx-auto">
                  {language === 'pt' ? 'Assim nasceu a Cheetah Solutions Network. Mais que uma empresa, uma prova de que todos merecem oportunidades reais.' : 'Thus Cheetah Solutions Network was born. More than a company, proof that everyone deserves real opportunities.'}
                </p>
                
                <Link
                  to={language === 'en' ? '/en-us/career' : '/carreira'}
                  className="group inline-flex items-center gap-3 text-sm font-medium text-foreground">

                  <span className="relative">
                    {language === 'pt' ? 'Abrir carreira' : 'Open career'}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>
          </ScrollReveal>
        )}
      </ParallaxSection>

      {/* Testimonials - Premium Cards */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-card/20 to-transparent" />
        }>

        
        <div className="container mx-auto px-0 lg:px-8 relative">
          <ScrollReveal>
            <SectionSignatureHeader
              eyebrow={language === 'pt' ? 'Feedbacks' : 'Feedbacks'}
              title={language === 'pt' ? 'O que dizem' : 'What they say'}
              subtitle={language === 'pt' ? 'Feedbacks reais de colegas, parceiros e clientes em uma leitura editorial, direta e sem excesso de moldura.' : 'Real feedback from colleagues, partners and clients in a direct editorial reading experience.'}
              signature={signatureFeedbacks}
              className="px-6 lg:px-0"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <TestimonialsEditorial
              testimonials={homeTestimonials}
              className="mt-12"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mx-auto mt-10 flex w-full max-w-6xl justify-end px-6 lg:px-8">
              <Link
                to={language === 'en' ? '/en-us/feedbacks' : '/feedbacks'}
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground"
              >
                <span className="relative">
                  {getText(language, 'Ver todos os feedbacks', 'View all feedbacks')}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="hidden">
            {[{
              initials: "PS",
              name: "Priscila Suanne",
              role: language === 'pt' ? 'Desenvolvedora Back End' : 'Back End Developer',
              quote: language === 'pt' ? '"Tive o prazer de trabalhar com Talisson, um profissional extremamente comprometido, resiliente e dedicado. Sua postura ética e foco em resultados foram fundamentais."' : '"I had the pleasure of working with Talisson, an extremely committed, resilient and dedicated professional. His ethical stance and focus on results were fundamental."'
            }, {
              initials: "DF",
              name: "Davi R. Fraustino",
              role: language === 'pt' ? 'Consultor de Tecnologia' : 'Technology Consultant',
              quote: language === 'pt' ? '"Talisson é um excelente profissional capaz de unir conhecimento técnico com visão estratégica de negócios. Ele sempre entrega soluções criativas e eficientes."' : '"Talisson is an excellent professional capable of combining technical knowledge with strategic business vision. He always delivers creative and efficient solutions."'
            }].map((testimonial, index) =>
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
                <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full">

                  <div
                  className="relative h-full p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}>

                    {/* Corner gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-foreground/[0.02] to-transparent rounded-tr-2xl" />
                    
                    <blockquote className="relative">
                      {/* Quote mark */}
                      <div className="absolute -top-4 -left-2 text-6xl text-foreground/[0.05] font-serif leading-none select-none">"</div>
                      
                      <p className="text-base text-foreground/80 leading-[1.8] mb-8 relative z-10">
                        {testimonial.quote}
                      </p>
                      
                      <footer className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-card/80 border border-border/30 flex items-center justify-center text-sm font-medium text-foreground/70">
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground/70">{testimonial.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </motion.div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </ParallaxSection>

      {/* Services Preview - Premium */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
        <>
            <div className="absolute inset-0 bg-gradient-to-br from-card/30 via-background to-card/20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
          </>
        }>

        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <SectionSignatureHeader
            eyebrow={getText(language, 'Servi\u00e7os', 'Services')}
            title={t.services.title}
            subtitle={t.services.subtitle}
            signature={signatureServicos}
            className="mb-14"
            action={
              <Link
                to={language === 'en' ? '/en-us/services' : '/servicos'}
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground">
                <span className="relative">
                  {language === 'pt' ? 'Ver todos' : 'View all'}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            }
          />

          <div className="hidden">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div className="max-w-xl">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium">

                  {getText(language, 'Serviços', 'Services')}
                </motion.span>
                <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                  {t.services.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t.services.subtitle}
                </p>
              </div>
              <Link
                to={language === 'en' ? '/en-us/services' : '/servicos'}
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground self-start lg:self-auto">

                <span className="relative">
                  {language === 'pt' ? 'Ver todos' : 'View all'}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <ScrollReveal delay={0.05} className="lg:col-span-4">
              <div className="relative h-full overflow-hidden rounded-lg border border-border/20 bg-card/25 p-7 backdrop-blur-sm">
                <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                <span className="mb-8 block text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground/70">
                  {getText(language, 'Modo de atuação', 'Operating mode')}
                </span>
                <h3 className="max-w-xs font-serif text-2xl leading-tight text-foreground lg:text-3xl">
                  {getText(language, 'Clareza antes do código.', 'Clarity before code.')}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    'Cada entrega começa com recorte de problema, prioridade técnica e uma rota simples para transformar intenção em produto confiável.',
                    'Every delivery starts with problem framing, technical priority and a simple path from intent to a reliable product.'
                  )}
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    getText(language, 'Escopo legível', 'Readable scope'),
                    getText(language, 'Execução rastreável', 'Traceable execution'),
                    getText(language, 'Base preparada para evoluir', 'A base ready to evolve'),
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-xs text-muted-foreground/80">
                      <span className="h-px w-8 bg-foreground/20" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-lg border border-border/20 bg-card/20 backdrop-blur-sm">
                {[{
                  number: '01',
                  title: getText(language, 'Presença digital sob medida', 'Tailored digital presence'),
                  description: getText(language, 'Sites e aplicações web com acabamento premium, performance e uma estrutura pronta para crescer.', 'Websites and web applications with premium polish, performance and a structure ready to grow.'),
                  detail: getText(language, 'Interface, front-end e deploy', 'Interface, frontend and deploy')
                }, {
                  number: '02',
                  title: getText(language, 'Operações internas', 'Internal operations'),
                  description: getText(language, 'Sistemas para organizar fluxos, reduzir retrabalho e dar mais previsibilidade ao dia a dia da equipe.', 'Systems that organize workflows, reduce rework and make day-to-day operations more predictable.'),
                  detail: getText(language, 'Painéis, automações e integrações', 'Dashboards, automations and integrations')
                }, {
                  number: '03',
                  title: getText(language, 'Direção técnica', 'Technical direction'),
                  description: getText(language, 'Apoio estratégico para decidir arquitetura, prioridades e próximos passos sem desperdiçar energia.', 'Strategic support for architecture, priorities and next steps without wasting energy.'),
                  detail: getText(language, 'Diagnóstico, roadmap e revisão', 'Diagnosis, roadmap and review')
                }].map((service, index) =>
                <ScrollReveal key={service.number} delay={index * 0.1}>
                    <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="group grid gap-4 border-t border-border/20 px-5 py-6 first:border-t-0 sm:grid-cols-[84px_1fr] lg:grid-cols-[90px_1.1fr_1fr] lg:items-center lg:px-7">

                      <div className="flex items-center gap-4 sm:block">
                        <span className="font-serif text-4xl leading-none text-foreground/[0.12] transition-colors duration-500 group-hover:text-foreground/25">
                          {service.number}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-foreground/15 to-transparent sm:mt-5 sm:w-12" />
                      </div>

                      <div>
                        <h3 className="font-serif text-xl leading-tight text-foreground transition-colors duration-500 group-hover:text-foreground/90">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-4 border-t border-border/20 pt-4 sm:col-start-2 lg:col-start-auto lg:border-t-0 lg:pt-0">
                        <span className="max-w-[220px] text-xs uppercase tracking-[0.18em] text-muted-foreground/65">
                          {service.detail}
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-foreground/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground/70" />
                      </div>
                    </motion.div>
                  </ScrollReveal>
                )}
              </div>
            </div>
          </div>

          <div className="hidden">
            {[{
              number: '01',
              title: getText(language, 'Desenvolvimento Web', 'Web Development'),
              description: getText(language, 'Sites e aplicações web modernas com as melhores tecnologias.', 'Modern websites and web applications with cutting-edge technologies.')
            }, {
              number: '02',
              title: getText(language, 'Sistemas Corporativos', 'Corporate Systems'),
              description: getText(language, 'Soluções empresariais sob medida para otimizar e escalar.', 'Custom enterprise solutions to optimize and scale.')
            }, {
              number: '03',
              title: getText(language, 'Consultoria Tech', 'Tech Consulting'),
              description: getText(language, 'Orientação estratégica para projetos de tecnologia.', 'Strategic guidance for technology projects.')
            }].map((service, index) =>
            <ScrollReveal key={service.number} delay={index * 0.1}>
                <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full">

                  <div
                  className="relative h-full p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group overflow-hidden"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}>

                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Number with line */}
                    <div className="mb-6 flex items-center gap-4">
                      <span className="text-3xl font-serif text-foreground/[0.1] group-hover:text-foreground/20 transition-colors duration-500">{service.number}</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent" />
                    </div>
                    
                    <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gradient transition-all duration-500 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </ParallaxSection>


      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
          <div className="absolute left-[8%] top-1/3 h-px w-[36%] bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          <div className="absolute right-[12%] top-20 h-[420px] w-[420px] bg-gradient-radial from-foreground/[0.025] to-transparent blur-3xl" />
        </div>

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <ScrollReveal className="lg:col-span-5">
              <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                {getText(language, 'Filosofia', 'Philosophy')}
              </span>
              <h2 className="max-w-md font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                {getText(language, 'Trabalho melhor quando o caminho fica visível.', 'I work best when the path is visible.')}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                {getText(
                  language,
                  'Antes de escrever código, eu reduzo ruído: entendo o objetivo, separo o essencial do acessório e transformo decisão em plano de execução.',
                  'Before writing code, I reduce noise: understand the goal, separate what matters from what distracts, and turn decisions into an execution plan.'
                )}
              </p>
            </ScrollReveal>

            <div className="relative lg:col-span-7">
              <div className="absolute bottom-0 left-[31px] top-0 hidden w-px bg-gradient-to-b from-transparent via-border/70 to-transparent sm:block" />
              {[
                {
                  number: '01',
                  title: getText(language, 'Recorte', 'Frame'),
                  text: getText(language, 'Definir o problema certo, o impacto esperado e o que não precisa entrar na primeira entrega.', 'Define the right problem, expected impact and what does not belong in the first delivery.'),
                },
                {
                  number: '02',
                  title: getText(language, 'Construção', 'Build'),
                  text: getText(language, 'Escolher a solução mais estável para o contexto, com arquitetura clara e manutenção possível.', 'Choose the most stable solution for the context, with clear architecture and practical maintenance.'),
                },
                {
                  number: '03',
                  title: getText(language, 'Entrega', 'Ship'),
                  text: getText(language, 'Validar comportamento, registrar decisões e deixar base pronta para o próximo ciclo.', 'Validate behavior, record decisions and leave the base ready for the next cycle.'),
                },
              ].map((item, index) => (
                <ScrollReveal key={item.number} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="group relative grid gap-4 py-5 sm:grid-cols-[64px_1fr]"
                  >
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center border border-border/30 bg-background text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:border-foreground/25 group-hover:text-foreground">
                      {item.number}
                    </div>
                    <div className="border-b border-border/20 pb-5">
                      <h3 className="font-serif text-2xl leading-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium">

                    {getText(language, 'Filosofia', 'Philosophy')}
                  </motion.span>
                  <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                    {language === 'pt' ? 'Como eu trabalho' : 'How I work'}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    {language === 'pt' ?
                    'Acredito que a tecnologia deve simplificar, não complicar. Cada projeto é uma oportunidade de criar algo que realmente faça diferença.' :
                    'I believe technology should simplify, not complicate. Every project is an opportunity to create something that truly makes a difference.'}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {language === 'pt' ?
                    'Meu foco está em soluções elegantes, código limpo e resultados mensuráveis.' :
                    'My focus is on elegant solutions, clean code, and measurable results.'}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[{
                    number: '01',
                    title: getText(language, 'Simplicidade', 'Simplicity'),
                    text: getText(language, 'Menos é mais. Código limpo e interfaces intuitivas.', 'Less is more. Clean code and intuitive interfaces.')
                  }, {
                    number: '02',
                    title: getText(language, 'Qualidade', 'Quality'),
                    text: getText(language, 'Atenção aos detalhes em cada entrega.', 'Attention to detail in every delivery.')
                  }, {
                    number: '03',
                    title: getText(language, 'Resultado', 'Results'),
                    text: getText(language, 'Foco em impacto real e mensurável.', 'Focus on real and measurable impact.')
                  }].map((item, index) =>
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl border border-border/20 bg-card/20 group hover:bg-card/40 transition-colors duration-300">

                      <span className="text-lg font-serif text-foreground/20 group-hover:text-foreground/40 transition-colors duration-300">{item.number}</span>
                      <div>
                        <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.text}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Discord Communities Section */}
      <ParallaxSection
        className="py-16 lg:py-20"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <SectionSignatureHeader
            eyebrow={getText(language, 'Comunidades', 'Communities')}
            title={getText(language, 'Discord', 'Discord')}
            subtitle={getText(language, 'Comunidades onde possuo ou possu\u00ed cargo, contribuindo com modera\u00e7\u00e3o, desenvolvimento e gest\u00e3o comunit\u00e1ria.', 'Communities where I hold or held a role, contributing with moderation, development and community management.')}
            signature={signatureDiscord}
            className="mb-12"
          />

          <div className="hidden">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              Discord
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-4 leading-[1.05]">
              {getText(language, 'Comunidades no Discord', 'Discord Communities')}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
              {getText(
                language,
                'Comunidades onde possuo ou possuí cargo, contribuindo com moderação, desenvolvimento e gestão comunitária.',
                'Communities where I hold or held a role, contributing with moderation, development and community management.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0.05}>
              <DiscordCommunityCard
                name="Escritório do Talisson"
                description={getText(language, "Espaço oficial onde concentro minha comunidade, projetos e conteúdos de tecnologia e estratégia de negócios.", "Official space where I concentrate my community, projects and content on technology and business strategy.")}
                logo={escritorioLogo}
                banner={escritorioBannerFull}
                link="https://discord.gg/DzZN6tUJKq"
                role={getText(language, "Proprietário", "Owner")}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <DiscordCommunityCard
                name="AGON by AOC"
                description={getText(language, "Comunidade AGON by AOC no Discord Brasil, onde tive atuação encerrada com suporte de conteúdo e auxílio operacional via Mynexis.", "AGON by AOC community on Discord Brazil, where I had a completed role with content support and operational assistance through Mynexis.")}
                logo={agonLogo}
                banner={agonBanner}
                link="https://discord.gg/yBy8Vu79J3"
                role={getText(language, "Ex Supervisor de Conteúdo", "Former Content Supervisor")}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <DiscordCommunityCard
                name="Hytale Brasil"
                description={getText(language, "O servidor definitivo de Hytale no Discord! O lar dos jogadores brasileiros.", "The ultimate Hytale server on Discord! The home of Brazilian players.")}
                logo={hytaleLogo}
                banner={hytaleBanner}
                link="https://discord.gg/x2SvJd2NsZ"
                role={getText(language, "Desenvolvedor Interno", "Internal Developer")}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <DiscordCommunityCard
                name="ModsClub"
                description={getText(language, "Comunidade que reúne moderadores e administradores de comunidades brasileiras.", "Community that brings together moderators and administrators of Brazilian communities.")}
                logo={modsclubLogo}
                banner={modsclubBanner}
                link="https://discord.gg/uuHdJUNYQs"
                role={getText(language, "Especialista em Comunidades", "Community Specialist")}
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                to={language === 'en' ? '/en-us/career' : '/carreira'}
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground"
              >
                <span className="relative">
                  {getText(language, 'Ver todas as comunidades', 'View all communities')}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/15 to-background" />
          <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        </div>

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                {getText(language, 'Insights', 'Insights')}
              </span>
              <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                {getText(language, 'Além do código', 'Beyond the code')}
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {getText(
                  language,
                  'Um índice vivo do que guia minhas decisões: produto, operação, qualidade e inclusão.',
                  'A living index of what guides my decisions: product, operations, quality and inclusion.'
                )}
              </p>
            </ScrollReveal>

            <div className="lg:col-span-8">
              <div className="divide-y divide-border/20 border-y border-border/25">
                {[
                  {
                    label: '01',
                    title: getText(language, 'Princípios', 'Principles'),
                    description: getText(language, 'O que eu não negocio quando projeto, escrevo e publico.', 'What I do not negotiate when designing, writing and publishing.'),
                    path: language === 'en' ? '/en-us/principles' : '/principios',
                  },
                  {
                    label: '02',
                    title: getText(language, 'Trilhas de Conteúdo', 'Content Trails'),
                    description: getText(language, 'Caminhos para estudar com sequência, sem empilhar assunto solto.', 'Paths for studying in sequence, without stacking disconnected topics.'),
                    path: language === 'en' ? '/en-us/articles' : '/artigos',
                  },
                  {
                    label: '03',
                    title: 'Checklists',
                    description: getText(language, 'Listas curtas para revisar decisões antes de publicar ou entregar.', 'Short lists for reviewing decisions before publishing or shipping.'),
                    path: language === 'en' ? '/en-us/checklists' : '/checklists',
                  },
                  {
                    label: '04',
                    title: getText(language, 'Decisões Técnicas', 'Tech Decisions'),
                    description: getText(language, 'Trade-offs reais, escolhas de stack e sinais de alerta que observo.', 'Real trade-offs, stack choices and warning signs I watch.'),
                    path: language === 'en' ? '/en-us/tech-decisions' : '/decisoes-tecnicas',
                  },
                  {
                    label: '05',
                    title: getText(language, 'Acessibilidade', 'Accessibility'),
                    description: getText(language, 'Inclusão digital tratada como critério de qualidade, não como detalhe.', 'Digital inclusion treated as a quality criterion, not a detail.'),
                    path: language === 'en' ? '/en-us/accessibility' : '/acessibilidade',
                  },
                ].map((item, index) => (
                  <ScrollReveal key={item.path} delay={index * 0.05}>
                    <Link to={item.path} className="group grid gap-4 py-5 sm:grid-cols-[72px_1fr_auto] sm:items-center">
                      <span className="font-serif text-3xl leading-none text-foreground/[0.12] transition-colors duration-300 group-hover:text-foreground/30">
                        {item.label}
                      </span>
                      <span>
                        <span className="block font-serif text-xl text-foreground">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-foreground/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground/70" />
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <ParallaxSection
        className="hidden"
        speed={0.08}
        backgroundElement={
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          </>
        }>

        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">

                {getText(language, 'Insights', 'Insights')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
                {getText(language, 'Além do código', 'Beyond the code')}
              </h2>
              <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                {getText(language, 'Processo, decisões técnicas e compromisso com qualidade.', 'Process, technical decisions and commitment to quality.')}
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
            {
              title: getText(language, 'Princípios', 'Principles'),
              description: getText(language, 'Os fundamentos que orientam cada conteúdo e decisão técnica publicada aqui.', 'The foundations that guide every content and technical decision published here.'),
              path: language === 'en' ? '/en-us/principles' : '/principios'
            },
            {
              title: getText(language, 'Trilhas de Conteúdo', 'Content Trails'),
              description: getText(language, 'Caminhos estratégicos de aprendizado organizados por área de conhecimento.', 'Strategic learning paths organized by knowledge area.'),
              path: language === 'en' ? '/en-us/articles' : '/artigos'
            },
            {
              title: 'Checklists',
              description: getText(language, 'Guias práticos e objetivos para garantir que nenhum passo crítico seja esquecido.', 'Practical guides to ensure no critical step is missed.'),
              path: language === 'en' ? '/en-us/checklists' : '/checklists'
            },
            {
              title: getText(language, 'Como Trabalho', 'How I Work'),
              description: getText(language, 'Meu processo de desenvolvimento, validação de escopo e gestão de riscos.', 'My development process, scope validation and risk management.'),
              path: language === 'en' ? '/en-us/policies/como-trabalho' : '/politicas/como-trabalho'
            },
            {
              title: getText(language, 'Decisões Técnicas', 'Tech Decisions'),
              description: getText(language, 'Trade-offs reais, escolhas de stack e anti-padrões que evito.', 'Real trade-offs, stack choices and anti-patterns I avoid.'),
              path: language === 'en' ? '/en-us/tech-decisions' : '/decisoes-tecnicas'
            },
            {
              title: getText(language, 'Acessibilidade', 'Accessibility'),
              description: getText(language, 'Compromisso com inclusão digital e boas práticas de a11y.', 'Commitment to digital inclusion and a11y best practices.'),
              path: language === 'en' ? '/en-us/accessibility' : '/acessibilidade'
            }].
            map((item, index) =>
            <ScrollReveal key={item.path} delay={index * 0.1}>
                <Link to={item.path}>
                  <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group p-6 rounded-2xl border border-border/20 bg-card/30 h-full hover:border-foreground/20 transition-all duration-300">

                    <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {getText(language, 'Explorar', 'Explore')}
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </motion.div>
                </Link>
              </ScrollReveal>
            )}
          </div>
        </div>
      </ParallaxSection>

      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/10" />
          <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        </div>

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                {getText(language, 'Publicações', 'Publications')}
              </span>
              <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                {getText(language, 'Artigos e guias técnicos', 'Articles and technical guides')}
              </h2>
              <div className="mt-8 flex items-end gap-4 border-t border-border/25 pt-6">
                <span className="font-serif text-6xl leading-none text-foreground/[0.16]">02</span>
                <span className="pb-2 text-xs uppercase tracking-[0.22em] text-muted-foreground/70">
                  {getText(language, 'leituras selecionadas', 'selected reads')}
                </span>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-8">
              {[
                {
                  path: language === 'en' ? '/en-us/articles/vision-and-persistence' : '/artigos/visao-e-persistencia',
                  date: getText(language, '10 de Fevereiro, 2025', 'February 10, 2025'),
                  time: '8 min',
                  title: getText(language, 'Se a Gente Consegue Imaginar, É Porque É Possível', "If We Can Imagine It, It's Because It's Possible"),
                  description: getText(language, 'Reflexão sobre visão, persistência e empreendedorismo.', 'A reflection on vision, persistence and entrepreneurship.'),
                },
                {
                  path: language === 'en' ? '/en-us/articles/discord-bots' : '/artigos/bots-discord',
                  date: getText(language, '7 de Fevereiro, 2025', 'February 7, 2025'),
                  time: '25 min',
                  title: getText(language, 'Guia de Maturidade, Gestão e Segurança para Projetos de Bots no Discord', 'Maturity, Management & Security Guide for Discord Bot Projects'),
                  description: getText(language, 'Um guia longo sobre decisões, riscos e manutenção em bots de comunidade.', 'A long guide on decisions, risks and maintenance in community bots.'),
                },
              ].map((article, index) => (
                <ScrollReveal key={article.path} delay={index * 0.08}>
                  <Link to={article.path} className="group block border-t border-border/25 py-8 first:border-t-0 lg:py-10">
                    <div className="grid gap-5 lg:grid-cols-[140px_1fr_auto] lg:items-start">
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground/65">
                        <span className="block">{article.date}</span>
                        <span className="mt-2 block">{article.time} {getText(language, 'de leitura', 'read')}</span>
                      </div>
                      <div>
                        <h3 className="max-w-2xl font-serif text-2xl leading-tight text-foreground lg:text-3xl">
                          {article.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                          {article.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        {getText(language, 'Ler', 'Read')}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <ParallaxSection
        className="hidden"
        speed={0.08}
        backgroundElement={
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          </>
        }>

        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">

                {getText(language, 'Publicações', 'Publications')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
                {getText(language, 'Artigos e Guias Técnicos', 'Articles & Technical Guides')}
              </h2>
              <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                {getText(language,
                'Publico artigos e guias técnicos sobre tecnologia, gestão, segurança, projetos digitais e boas práticas profissionais, com foco em maturidade, responsabilidade e crescimento sustentável.',
                'I publish articles and technical guides on technology, management, security, digital projects and professional best practices, with a focus on maturity, responsibility and sustainable growth.'
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            <ScrollReveal delay={0.1}>
              <Link to={language === 'en' ? '/en-us/articles/vision-and-persistence' : '/artigos/visao-e-persistencia'}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}>

                  <GlassCard className="p-8 group hover:border-foreground/20 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                      <span>{getText(language, '10 de Fevereiro, 2025', 'February 10, 2025')}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      <span>8 min {getText(language, 'de leitura', 'read')}</span>
                    </div>
                    <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-gradient transition-all duration-500 leading-tight">
                      {getText(language,
                      'Se a Gente Consegue Imaginar, É Porque É Possível',
                      'If We Can Imagine It, It\'s Because It\'s Possible'
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {getText(language,
                      'Reflexão sobre visão, persistência e empreendedorismo.',
                      'A reflection on vision, persistence and entrepreneurship.'
                      )}
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

            <ScrollReveal delay={0.15}>
              <Link to={language === 'en' ? '/en-us/articles/discord-bots' : '/artigos/bots-discord'}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}>

                  <GlassCard className="p-8 group hover:border-foreground/20 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                      <span>{getText(language, '7 de Fevereiro, 2025', 'February 7, 2025')}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      <span>25 min {getText(language, 'de leitura', 'read')}</span>
                    </div>
                    <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-gradient transition-all duration-500 leading-tight">
                      {getText(language,
                      'Guia de Maturidade, Gestão e Segurança para Projetos de Bots no Discord',
                      'Maturity, Management & Security Guide for Discord Bot Projects'
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {getText(language,
                      'Guia completo sobre maturidade, gestão e segurança em projetos de bots no Discord.',
                      'A comprehensive guide on maturity, management and security in Discord bot projects.'
                      )}
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
          </div>
        </div>
      </ParallaxSection>

      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-background to-background" />
          <div className="absolute right-[18%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 bg-gradient-radial from-foreground/[0.04] to-transparent blur-3xl" />
        </div>

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <ScrollReveal className="lg:col-span-5">
              <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                {getText(language, 'Obra autoral', 'Original work')}
              </span>
              <h2 className="font-serif text-4xl leading-tight text-foreground lg:text-6xl">
                {getText(language, 'Superando Limites', 'Overcoming Limits')}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground/80">
                {getText(language, 'Da Rejeição ao Sucesso', 'From Rejection to Success')}
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                {getText(
                  language,
                  'Um livro nascido de experiência real: rejeição, adaptação, liderança e a decisão de construir espaço onde antes havia barreira.',
                  'A book born from real experience: rejection, adaptation, leadership and the decision to build space where there was once a barrier.'
                )}
              </p>

              <div className="mt-8 grid grid-cols-3 border-y border-border/25 py-5">
                {[
                  ['120+', getText(language, 'capítulos', 'chapters')],
                  ['02', getText(language, 'formatos', 'formats')],
                  ['01', getText(language, 'história real', 'real story')],
                ].map(([value, label]) => (
                  <div key={label}>
                    <span className="block font-serif text-3xl text-foreground/80">{value}</span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground/65">{label}</span>
                  </div>
                ))}
              </div>

              <Link
                to={language === 'en' ? '/en-us/book' : '/livro'}
                className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-foreground"
              >
                <span className="relative">
                  {getText(language, 'Conhecer o livro', 'Discover the book')}
                  <span className="absolute bottom-0 left-0 h-px w-full bg-foreground/20" />
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="lg:col-span-7">
              <div className="relative min-h-[440px]">
                <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                <img
                  src={bookMockupImg}
                  alt={getText(language, 'Superando Limites - Da Rejeição ao Sucesso', 'Overcoming Limits - From Rejection to Success')}
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 mx-auto h-auto w-64 animate-float drop-shadow-[0_32px_70px_hsl(0_0%_0%/0.55)] lg:w-80"
                />
                <div className="relative z-10 mx-auto mt-5 flex max-w-md flex-col justify-center gap-3 sm:flex-row">
                  <a href="https://www.amazon.com/dp/B0GVS4D8HL" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-foreground/20 bg-foreground px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90">
                    <BookOpen className="h-3.5 w-3.5" />
                    {getText(language, 'Livro Físico', 'Physical Book')}
                  </a>
                  <a href="https://www.amazon.com/dp/B0FXV8WP3Y" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-border/50 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted/40">
                    <BookOpen className="h-3.5 w-3.5" />
                    {getText(language, 'Livro Digital', 'Digital Book')}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                <div>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium">

                    {getText(language, 'Obra Autoral', 'Original Work')}
                  </motion.span>
                  <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
                    {getText(language, 'Superando Limites', 'Overcoming Limits')}
                  </h2>
                  <p className="text-sm text-muted-foreground/80 mb-4">
                    {getText(language, 'Da Rejeição ao Sucesso', 'From Rejection to Success')}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {getText(language,
                    'Um livro com mais de 120 capítulos sobre superação, resiliência, empreendedorismo e liderança. Escrito a partir de experiências reais de quem transformou cada dificuldade em força.',
                    'A book with over 120 chapters on overcoming, resilience, entrepreneurship and leadership. Written from real experiences of someone who transformed every difficulty into strength.'
                    )}
                  </p>
                  <Link
                    to={language === 'en' ? '/en-us/book' : '/livro'}
                    className="group inline-flex items-center gap-3 text-sm font-medium text-foreground">

                    <span className="relative">
                      {getText(language, 'Conhecer o livro', 'Discover the book')}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={bookMockupImg}
                    alt={getText(language, 'Superando Limites - Da Rejeição ao Sucesso', 'Overcoming Limits - From Rejection to Success')}
                    className="w-56 lg:w-72 h-auto animate-float" />
                  <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <a href="https://www.amazon.com/dp/B0GVS4D8HL" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-primary-foreground bg-foreground rounded-full px-4 py-2 hover:opacity-90 transition-opacity">
                      <BookOpen className="w-3.5 h-3.5" />
                      {getText(language, 'Livro Físico', 'Physical Book')}
                    </a>
                    <a href="https://www.amazon.com/dp/B0FXV8WP3Y" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-foreground border border-border rounded-full px-4 py-2 hover:bg-muted transition-colors">
                      <BookOpen className="w-3.5 h-3.5" />
                      {getText(language, 'Livro Digital', 'Digital Book')}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feedbacks Section */}
      <ParallaxSection
        className="hidden"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
              >
                Feedbacks
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
                {getText(language, 'O que dizem sobre mim', 'What people say about me')}
              </h2>
              <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                {getText(language,
                  'Feedbacks reais de colegas e parceiros que já trabalharam comigo.',
                  'Real feedback from colleagues and partners who have worked with me.'
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Anna Ishii",
                role: getText(language, 'Co-fundadora da Splendori', 'Co-founder of Splendori'),
                text: getText(language,
                  'Trabalhei com o Talisson em projetos estratégicos e ele entrega com excelência. Sua visão técnica aliada ao senso de negócio torna qualquer projeto mais robusto.',
                  'I worked with Talisson on strategic projects and he delivers with excellence. His technical vision combined with business sense makes any project more robust.'
                ),
                image: "https://i.ibb.co/pjKpnWFq/image.png"
              },
              {
                name: "Matheus Yuri Silva",
                role: getText(language, 'Desenvolvedor de Software', 'Software Developer'),
                text: getText(language,
                  'Talisson demonstra uma combinação rara de expertise técnica e visão estratégica de negócios.',
                  'Talisson demonstrates a rare combination of technical expertise and strategic business vision.'
                ),
                image: "https://i.ibb.co/V0P35B23/Matheus.jpg"
              },
              {
                name: "Rafael Araujo",
                role: "Web Developer",
                text: getText(language,
                  'Estudei ao lado do Talisson e posso afirmar que é extremamente dedicado. Sua liderança sempre se destacou, conduzindo o grupo de forma organizada e motivadora.',
                  'I studied alongside Talisson and can affirm he is extremely dedicated. His leadership always stood out, leading the group in an organized and motivating way.'
                ),
                image: "https://i.ibb.co/My7YX5s4/image.png"
              },
              {
                name: "Davi R. Fraustino",
                role: getText(language, 'Estudante de Ciência da Computação', 'Computer Science Student'),
                text: getText(language,
                  'Talisson é um excelente profissional que une conhecimento técnico full stack com visão estratégica de negócios.',
                  'Talisson is an excellent professional who combines full stack technical knowledge with strategic business vision.'
                ),
                image: "https://i.ibb.co/LDG4sdNM/image.png"
              }
            ].map((feedback, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <GlassCard className="p-6 h-full flex flex-col group hover:border-foreground/20 transition-all duration-500">
                  <Quote className="w-4 h-4 text-muted-foreground/30 mb-3 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow italic">
                    "{feedback.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                    <img
                      src={feedback.image}
                      alt={feedback.name}
                      className="w-9 h-9 rounded-full object-cover border border-border/40"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-medium text-foreground text-sm">{feedback.name}</p>
                      <p className="text-xs text-muted-foreground/70">{feedback.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to={language === 'en' ? '/en-us/feedbacks' : '/feedbacks'}
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground px-8 py-3.5 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-sm hover:bg-foreground/10 hover:border-foreground/40 hover:shadow-[0_0_30px_hsl(var(--foreground)/0.1)] transition-all duration-300"
              >
                {getText(language, 'Ver todos os feedbacks', 'View all feedbacks')}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
          <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                FAQ
              </span>
              <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                {language === 'pt' ? 'Perguntas frequentes' : 'Frequently asked questions'}
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {language === 'pt'
                  ? 'Respostas diretas para alinhar expectativa antes de uma conversa.'
                  : 'Direct answers to align expectations before a conversation.'}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-8">
              <FAQ />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ - Premium */}
      <section className="hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">

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




      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-card/25 via-background to-background" />
          <div className="absolute bottom-0 left-1/2 h-[420px] w-[760px] -translate-x-1/2 bg-gradient-radial from-foreground/[0.05] to-transparent blur-3xl" />
        </div>

        <div className="container relative mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 border-y border-border/25 py-12 lg:grid-cols-12 lg:items-center lg:py-16">
              <div className="lg:col-span-7">
                <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                  {getText(language, 'Vamos conversar', 'Let\'s talk')}
                </span>
                <h2 className="max-w-3xl font-serif text-4xl leading-tight text-foreground lg:text-6xl">
                  {t.cta.title}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {t.cta.subtitle}
                </p>
                <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
                  <Link
                    to={language === 'en' ? '/en-us/contact' : '/contato'}
                    className="group inline-flex items-center gap-3 text-sm font-medium text-foreground"
                  >
                    <span className="relative">
                      {t.cta.button}
                      <span className="absolute bottom-0 left-0 h-px w-full bg-foreground/20" />
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                  <Link
                    to={language === 'en' ? '/en-us/projects' : '/projetos'}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>{t.projects.viewAll}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="divide-y divide-border/20 border-y border-border/20">
                  {[
                    getText(language, 'Escopo claro', 'Clear scope'),
                    getText(language, 'Execução técnica', 'Technical execution'),
                    getText(language, 'Entrega acompanhada', 'Guided delivery'),
                  ].map((item, index) => (
                    <div key={item} className="flex items-center justify-between py-5">
                      <span className="font-serif text-3xl text-foreground/[0.14]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA - Premium */}
      <section className="hidden">
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
              transition={{ duration: 0.4 }}>

              <GlassCard className="max-w-3xl mx-auto p-10 lg:p-12 text-center hover:border-foreground/20 transition-all duration-500">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">

                  {getText(language, 'Vamos conversar', 'Let\'s talk')}
                </motion.span>
                
                <h2 className="font-serif text-2xl lg:text-4xl text-foreground mb-6 leading-tight">
                  {t.cta.title}
                </h2>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {t.cta.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    to={language === 'en' ? '/en-us/contact' : '/contato'}
                  >
                    <motion.span
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                      style={{
                        boxShadow: '0 0 30px hsl(var(--foreground) / 0.2), 0 10px 40px hsl(var(--foreground) / 0.1)'
                      }}>
                      {t.cta.button}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.span>
                  </Link>
                  
                  <Link
                    to={language === 'en' ? '/en-us/projects' : '/projetos'}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300">

                    <span>{t.projects.viewAll}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>);

};

export default Index;
