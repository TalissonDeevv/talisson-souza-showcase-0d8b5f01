import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { 
  ArrowLeft, Code, Smartphone, Bot, Palette, Cloud, Users,
  CheckCircle, Star, MessageSquare, ArrowRight
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
            to="/services"
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
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'pt' ? 'Voltar aos Serviços' : 'Back to Services'}
            </Link>
            
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-8 h-8 text-foreground/70" />
              </div>
              <div>
                <h1 className="font-serif text-3xl lg:text-4xl text-foreground mb-3">
                  {service.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              <ScrollReveal>
                <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8">
                  <h2 className="font-serif text-xl text-foreground mb-6">
                    {language === 'pt' ? 'Recursos Inclusos' : 'Included Features'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-foreground/50 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Requirements */}
              <ScrollReveal>
                <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8">
                  <h2 className="font-serif text-xl text-foreground mb-6">
                    {language === 'pt' ? 'Requisitos do Projeto' : 'Project Requirements'}
                  </h2>
                  <div className="space-y-3">
                    {service.requirements.map((req: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border border-border/30 bg-card/50 flex items-center justify-center text-xs text-foreground/50">
                          {index + 1}
                        </span>
                        <span className="text-sm text-muted-foreground">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Technologies */}
              <ScrollReveal>
                <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8">
                  <h2 className="font-serif text-xl text-foreground mb-6">
                    {language === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech: string, index: number) => (
                      <span key={index} className="text-xs px-3 py-1.5 rounded-lg border border-border/30 bg-background/50 text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6 lg:sticky lg:top-32">
                  <h3 className="text-base font-medium text-foreground mb-4">
                    {language === 'pt' ? 'Informações' : 'Information'}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{language === 'pt' ? 'Prazo' : 'Timeline'}</span>
                      <span className="text-sm text-foreground">{service.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{language === 'pt' ? 'Preço' : 'Price'}</span>
                      <span className="text-sm font-medium text-foreground">{service.pricing}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => window.open('https://wa.me/5581993964261', '_blank')}
                    className="w-full group inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground bg-foreground rounded-xl py-3 transition-all duration-300 hover:opacity-90 mb-3"
                  >
                    <MessageSquare className="w-4 h-4" />
                    {language === 'pt' ? 'Solicitar Orçamento' : 'Request Quote'}
                  </button>

                  <Link 
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground border border-border/30 rounded-xl py-3 hover:bg-card/50 transition-all duration-300"
                  >
                    {language === 'pt' ? 'Mais Informações' : 'More Information'}
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6">
                  <h3 className="text-base font-medium text-foreground mb-4 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    {language === 'pt' ? 'Por que escolher?' : 'Why choose?'}
                  </h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-foreground/50 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
