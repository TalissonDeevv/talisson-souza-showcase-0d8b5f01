import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import { 
  ArrowLeft, Code, Smartphone, Bot, Palette, Cloud, Users,
  CheckCircle, Star, MessageSquare, ArrowUpRight, Clock, Coins
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { language } = useTheme();
  const t = useTranslation(language);

  const serviceDetails = {
    "web-development": {
      icon: Code,
      ...t.servicesPage.categories.webDevelopment,
      requirements: language === 'pt' ? [
        "Definição clara dos objetivos do projeto",
        "Identidade visual ou diretrizes de marca",
        "Conteúdo (textos, imagens, vídeos)",
        "Funcionalidades específicas desejadas",
        "Prazo estimado para entrega"
      ] : [
        "Clear definition of project objectives",
        "Visual identity or brand guidelines", 
        "Content (texts, images, videos)",
        "Specific desired functionalities",
        "Estimated delivery deadline"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      deliveryTime: language === 'pt' ? "2-6 semanas" : "2-6 weeks",
      pricing: language === 'pt' ? "A partir de R$ 2.500" : "Starting at $500"
    },
    "mobile-development": {
      icon: Smartphone,
      ...t.servicesPage.categories.mobileDevelopment,
      requirements: language === 'pt' ? [
        "Conceito e objetivos do aplicativo",
        "Plataformas alvo (iOS, Android ou ambas)",
        "Wireframes ou mockups se disponíveis",
        "Integrações necessárias (APIs, serviços)",
        "Orçamento disponível"
      ] : [
        "App concept and objectives",
        "Target platforms (iOS, Android or both)",
        "Wireframes or mockups if available",
        "Required integrations (APIs, services)",
        "Available budget"
      ],
      technologies: ["React Native", "TypeScript", "Expo", "Firebase", "Native APIs"],
      deliveryTime: language === 'pt' ? "6-12 semanas" : "6-12 weeks",
      pricing: language === 'pt' ? "A partir de R$ 8.000" : "Starting at $1,600"
    },
    "bot-development": {
      icon: Bot,
      ...t.servicesPage.categories.botDevelopment,
      requirements: language === 'pt' ? [
        "Plataforma desejada (Discord, Telegram, etc)",
        "Funcionalidades e comandos necessários",
        "Integrações com sistemas externos",
        "Nível de automação desejado",
        "Dados ou APIs para integração"
      ] : [
        "Desired platform (Discord, Telegram, etc)",
        "Required features and commands",
        "External system integrations",
        "Desired automation level",
        "Data or APIs for integration"
      ],
      technologies: ["Node.js", "Discord.js", "Python", "APIs", "Database Integration"],
      deliveryTime: language === 'pt' ? "1-4 semanas" : "1-4 weeks",
      pricing: language === 'pt' ? "A partir de R$ 1.500" : "Starting at $300"
    },
    "uiux-design": {
      icon: Palette,
      ...t.servicesPage.categories.uiuxDesign,
      requirements: language === 'pt' ? [
        "Briefing detalhado do projeto",
        "Público-alvo e personas",
        "Referências visuais de preferência",
        "Plataformas e dispositivos alvo",
        "Cronograma do projeto"
      ] : [
        "Detailed project briefing",
        "Target audience and personas",
        "Visual preference references",
        "Target platforms and devices",
        "Project timeline"
      ],
      technologies: ["Figma", "Adobe XD", "Principle", "InVision", "User Research"],
      deliveryTime: language === 'pt' ? "2-8 semanas" : "2-8 weeks",
      pricing: language === 'pt' ? "A partir de R$ 3.000" : "Starting at $600"
    },
    "cloud-solutions": {
      icon: Cloud,
      ...t.servicesPage.categories.cloudSolutions,
      requirements: language === 'pt' ? [
        "Aplicação ou sistema atual",
        "Volume de tráfego esperado",
        "Requisitos de segurança",
        "Orçamento para infraestrutura",
        "Preferência de provedor cloud"
      ] : [
        "Current application or system",
        "Expected traffic volume",
        "Security requirements",
        "Infrastructure budget",
        "Cloud provider preference"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring Tools"],
      deliveryTime: language === 'pt' ? "1-3 semanas" : "1-3 weeks",
      pricing: language === 'pt' ? "A partir de R$ 2.000" : "Starting at $400"
    },
    "consulting": {
      icon: Users,
      ...t.servicesPage.categories.consulting,
      requirements: language === 'pt' ? [
        "Descrição do desafio ou projeto",
        "Tamanho e experiência da equipe",
        "Tecnologias atuais em uso",
        "Prazos e limitações",
        "Objetivos específicos"
      ] : [
        "Challenge or project description",
        "Team size and experience",
        "Current technologies in use",
        "Deadlines and limitations",
        "Specific objectives"
      ],
      technologies: ["Strategic Planning", "Code Review", "Architecture Design", "Team Training"],
      deliveryTime: language === 'pt' ? "Flexível" : "Flexible",
      pricing: language === 'pt' ? "R$ 200/hora" : "$40/hour"
    }
  };

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-8 pt-32 pb-16 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-6">
            {language === 'pt' ? 'Serviço não encontrado' : 'Service not found'}
          </h1>
          <Link 
            to="/servicos"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'pt' ? 'Voltar aos Serviços' : 'Back to Services'}
          </Link>
        </div>
      </Layout>
    );
  }

  const IconComponent = service.icon;
  const benefits = [
    language === 'pt' ? 'Código limpo e documentado' : 'Clean and documented code',
    language === 'pt' ? 'Suporte pós-entrega' : 'Post-delivery support',
    language === 'pt' ? 'Metodologia ágil' : 'Agile methodology',
    language === 'pt' ? 'Comunicação transparente' : 'Transparent communication'
  ];

  return (
    <Layout>
      <SEO 
        title={`${service.title} | Serviços - Talisson Souza`}
        description={service.description}
        canonical={`/servicos/${serviceId}`}
        keywords={[service.title, 'serviço', 'desenvolvimento', ...service.technologies]}
      />
      
      {/* Hero Section */}
      <ParallaxSection 
        className="pt-24 pb-16 lg:pt-28 lg:pb-20"
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
            <Link 
              to="/servicos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'pt' ? 'Voltar aos Serviços' : 'Back to Services'}
            </Link>
            
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, 'Serviço', 'Service')}
              </motion.span>
              
              <div className="flex items-start gap-6 mb-6">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 rounded-2xl border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0"
                >
                  <IconComponent className="w-8 h-8 text-foreground/70" />
                </motion.div>
                <div>
                  <h1 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-foreground mb-4 leading-[1.1]">
                    {service.title}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Quick Stats */}
      <section className="pb-12 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
            {[
              { icon: Clock, label: getText(language, 'Prazo', 'Timeline'), value: service.deliveryTime },
              { icon: Coins, label: getText(language, 'Investimento', 'Investment'), value: service.pricing },
              { icon: CheckCircle, label: getText(language, 'Recursos', 'Features'), value: `${service.features.length}+` },
              { icon: Star, label: getText(language, 'Tecnologias', 'Technologies'), value: `${service.technologies.length}` }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-5"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <stat.icon className="w-5 h-5 text-foreground/50 mb-3" />
                  <p className="text-xs text-muted-foreground/70 mb-1">{stat.label}</p>
                  <p className="text-sm font-medium text-foreground">{stat.value}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              <ScrollReveal>
                <GlassCard className="p-8" hover={false}>
                  <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-6">
                    {language === 'pt' ? 'Recursos Inclusos' : 'Included Features'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature: string, index: number) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-5 h-5 rounded-full border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-foreground/30 transition-colors">
                          <CheckCircle className="w-3 h-3 text-foreground/50" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>

              {/* Requirements */}
              <ScrollReveal>
                <GlassCard className="p-8" hover={false}>
                  <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-6">
                    {language === 'pt' ? 'Requisitos do Projeto' : 'Project Requirements'}
                  </h2>
                  <div className="space-y-4">
                    {service.requirements.map((req: string, index: number) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-4 group"
                      >
                        <span className="w-8 h-8 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center text-xs text-foreground/50 font-medium group-hover:border-foreground/30 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-muted-foreground">{req}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>

              {/* Technologies */}
              <ScrollReveal>
                <GlassCard className="p-8" hover={false}>
                  <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-6">
                    {language === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech: string, index: number) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -2 }}
                        className="text-xs px-4 py-2 rounded-xl border border-border/30 bg-background/50 text-muted-foreground hover:border-foreground/20 hover:text-foreground transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <ScrollReveal>
                <div className="lg:sticky lg:top-32">
                  <GlassCard className="p-6" hover={false} glow>
                    <h3 className="font-serif text-lg text-foreground mb-6">
                      {language === 'pt' ? 'Pronto para começar?' : 'Ready to start?'}
                    </h3>
                    
                    <div className="space-y-4 mb-6 pb-6 border-b border-border/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{language === 'pt' ? 'Prazo estimado' : 'Estimated timeline'}</span>
                        <span className="text-sm text-foreground font-medium">{service.deliveryTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{language === 'pt' ? 'Investimento' : 'Investment'}</span>
                        <span className="text-sm text-foreground font-medium">{service.pricing}</span>
                      </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open('https://wa.me/5581993964261', '_blank')}
                      className="w-full group inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground bg-foreground rounded-xl py-3.5 transition-all duration-300 hover:opacity-90 mb-3"
                      style={{
                        boxShadow: '0 0 20px hsl(var(--foreground) / 0.15)'
                      }}
                    >
                      <MessageSquare className="w-4 h-4" />
                      {language === 'pt' ? 'Solicitar Orçamento' : 'Request Quote'}
                    </motion.button>

                    <Link 
                      to="/contato"
                      className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground border border-border/30 rounded-xl py-3.5 hover:bg-card/50 hover:border-foreground/20 transition-all duration-300"
                    >
                      {language === 'pt' ? 'Mais Informações' : 'More Information'}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </GlassCard>

                  {/* Benefits */}
                  <GlassCard className="p-6 mt-6" hover={false}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                        <Star className="w-5 h-5 text-foreground/70" />
                      </div>
                      <h3 className="font-serif text-base text-foreground">
                        {language === 'pt' ? 'Por que escolher?' : 'Why choose?'}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-4 h-4 text-foreground/40 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
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
                  {getText(language, 'Tem alguma dúvida?', 'Have any questions?')}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {getText(language, 
                    'Entre em contato para discutir seu projeto e receber um orçamento personalizado.',
                    'Get in touch to discuss your project and receive a personalized quote.'
                  )}
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
                  {getText(language, 'Falar no WhatsApp', 'Chat on WhatsApp')}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
