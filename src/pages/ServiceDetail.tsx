import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import { 
  ArrowLeft, Code, Smartphone, Bot, Palette, Cloud, Users,
  CheckCircle, Star, MessageSquare, ArrowUpRight, Clock, Coins,
  Target, XCircle, TrendingUp, Briefcase
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
      pricing: language === 'pt' ? "A partir de R$ 2.500" : "Starting at $500",
      idealFor: language === 'pt' ? [
        "Empresas que precisam de presença digital profissional",
        "Startups lançando seu primeiro produto",
        "Negócios que querem automatizar processos",
        "Marcas que buscam diferenciação visual"
      ] : [
        "Companies that need professional digital presence",
        "Startups launching their first product",
        "Businesses looking to automate processes",
        "Brands seeking visual differentiation"
      ],
      notIdealFor: language === 'pt' ? [
        "Quem busca templates genéricos e baratos",
        "Projetos sem orçamento definido",
        "Entregas em menos de 1 semana"
      ] : [
        "Those looking for cheap generic templates",
        "Projects without defined budget",
        "Deliveries in less than 1 week"
      ],
      included: language === 'pt' ? [
        "Design responsivo para todos os dispositivos",
        "Otimização de performance e SEO",
        "Integração com analytics",
        "Painel administrativo (quando aplicável)",
        "30 dias de suporte pós-entrega"
      ] : [
        "Responsive design for all devices",
        "Performance and SEO optimization",
        "Analytics integration",
        "Admin panel (when applicable)",
        "30 days post-delivery support"
      ],
      expectedResults: language === 'pt' ? [
        "Aumento de 40-60% na taxa de conversão",
        "Melhoria significativa no tempo de carregamento",
        "Melhor posicionamento nos buscadores",
        "Experiência do usuário otimizada"
      ] : [
        "40-60% increase in conversion rate",
        "Significant improvement in loading time",
        "Better search engine ranking",
        "Optimized user experience"
      ],
      realExample: {
        title: "Werneck Group",
        description: language === 'pt' 
          ? "Plataforma corporativa moderna com sistema de gerenciamento interno, integrações com APIs de terceiros e dashboard analítico. Entregue em 5 semanas com aumento de 52% na eficiência operacional."
          : "Modern corporate platform with internal management system, third-party API integrations and analytics dashboard. Delivered in 5 weeks with 52% increase in operational efficiency."
      },
      additionalExamples: [
        {
          title: "Sagiri Bot Landing",
          result: language === 'pt' ? "Taxa de conversão de 12% em visitas orgânicas" : "12% conversion rate on organic visits",
          tech: "React + Tailwind CSS"
        },
        {
          title: language === 'pt' ? "Portal Família Werneck" : "Werneck Family Portal",
          result: language === 'pt' ? "500+ membros ativos em 2 meses" : "500+ active members in 2 months",
          tech: "React + Firebase"
        },
        {
          title: language === 'pt' ? "Dashboard Analítico" : "Analytics Dashboard",
          result: language === 'pt' ? "Redução de 70% no tempo de análise" : "70% reduction in analysis time",
          tech: "Next.js + PostgreSQL"
        }
      ]
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
      pricing: language === 'pt' ? "A partir de R$ 8.000" : "Starting at $1,600",
      idealFor: language === 'pt' ? [
        "Empresas que querem alcançar usuários mobile",
        "Negócios com processos que funcionam melhor em app",
        "Startups validando produto no mercado",
        "Serviços que exigem notificações push"
      ] : [
        "Companies wanting to reach mobile users",
        "Businesses with processes that work better as an app",
        "Startups validating product in the market",
        "Services requiring push notifications"
      ],
      notIdealFor: language === 'pt' ? [
        "MVPs que funcionam bem como site mobile",
        "Projetos sem plano de monetização",
        "Quem precisa de app em menos de 1 mês"
      ] : [
        "MVPs that work well as mobile site",
        "Projects without monetization plan",
        "Those who need an app in less than 1 month"
      ],
      included: language === 'pt' ? [
        "Desenvolvimento para iOS e Android",
        "Publicação nas lojas (App Store e Play Store)",
        "Sistema de autenticação seguro",
        "Integração com backend",
        "60 dias de suporte pós-entrega"
      ] : [
        "Development for iOS and Android",
        "Store publication (App Store and Play Store)",
        "Secure authentication system",
        "Backend integration",
        "60 days post-delivery support"
      ],
      expectedResults: language === 'pt' ? [
        "Engajamento 3x maior que versão web",
        "Retenção de usuários significativamente maior",
        "Notificações push com alta taxa de abertura",
        "Experiência nativa fluida"
      ] : [
        "3x higher engagement than web version",
        "Significantly higher user retention",
        "Push notifications with high open rate",
        "Smooth native experience"
      ],
      realExample: {
        title: language === 'pt' ? "App de Gestão Interna" : "Internal Management App",
        description: language === 'pt' 
          ? "Aplicativo para equipe de vendas com tracking de metas, catálogo de produtos e relatórios em tempo real. Reduziu o tempo de fechamento de vendas em 35%."
          : "Sales team app with goal tracking, product catalog and real-time reports. Reduced sales closing time by 35%."
      },
      additionalExamples: [
        {
          title: language === 'pt' ? "App de Delivery" : "Delivery App",
          result: language === 'pt' ? "4.8 estrelas na Play Store" : "4.8 stars on Play Store",
          tech: "React Native + Node.js"
        },
        {
          title: language === 'pt' ? "Gestão de Eventos" : "Event Management",
          result: language === 'pt' ? "2.000+ check-ins processados" : "2,000+ check-ins processed",
          tech: "Expo + Firebase"
        }
      ]
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
      pricing: language === 'pt' ? "A partir de R$ 1.500" : "Starting at $300",
      idealFor: language === 'pt' ? [
        "Comunidades que precisam de moderação automatizada",
        "Empresas que querem automatizar atendimento",
        "Servidores com gamificação e economia",
        "Integrações entre plataformas"
      ] : [
        "Communities needing automated moderation",
        "Companies wanting to automate support",
        "Servers with gamification and economy",
        "Cross-platform integrations"
      ],
      notIdealFor: language === 'pt' ? [
        "Bots que violam termos de serviço das plataformas",
        "Automações sem propósito claro",
        "Projetos sem infraestrutura de hospedagem"
      ] : [
        "Bots that violate platform terms of service",
        "Automation without clear purpose",
        "Projects without hosting infrastructure"
      ],
      included: language === 'pt' ? [
        "Desenvolvimento do bot completo",
        "Comandos personalizados ilimitados",
        "Integração com banco de dados",
        "Dashboard web (quando aplicável)",
        "Documentação técnica completa"
      ] : [
        "Complete bot development",
        "Unlimited custom commands",
        "Database integration",
        "Web dashboard (when applicable)",
        "Complete technical documentation"
      ],
      expectedResults: language === 'pt' ? [
        "Redução de 80% no trabalho manual de moderação",
        "Engajamento da comunidade aumentado",
        "Processos automatizados 24/7",
        "Integração fluida com outros sistemas"
      ] : [
        "80% reduction in manual moderation work",
        "Increased community engagement",
        "24/7 automated processes",
        "Smooth integration with other systems"
      ],
      realExample: {
        title: "Sagiri Bot",
        description: language === 'pt' 
          ? "Bot multifuncional para Discord com sistema de economia, moderação avançada e integração com APIs externas. Atende milhares de usuários diariamente."
          : "Multifunctional Discord bot with economy system, advanced moderation and external API integration. Serves thousands of users daily."
      },
      additionalExamples: [
        {
          title: language === 'pt' ? "Bot de Moderação" : "Moderation Bot",
          result: language === 'pt' ? "99.9% uptime em 12 meses" : "99.9% uptime in 12 months",
          tech: "Node.js + Discord.js"
        },
        {
          title: language === 'pt' ? "Bot de Atendimento" : "Support Bot",
          result: language === 'pt' ? "85% dos tickets resolvidos automaticamente" : "85% tickets resolved automatically",
          tech: "Python + Telegram API"
        },
        {
          title: language === 'pt' ? "Bot de Integração" : "Integration Bot",
          result: language === 'pt' ? "50+ integrações com APIs externas" : "50+ external API integrations",
          tech: "Node.js + REST APIs"
        }
      ]
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
      pricing: language === 'pt' ? "A partir de R$ 3.000" : "Starting at $600",
      idealFor: language === 'pt' ? [
        "Produtos digitais que precisam de redesign",
        "Startups criando nova identidade visual",
        "Apps que querem melhorar usabilidade",
        "Empresas investindo em experiência do usuário"
      ] : [
        "Digital products needing redesign",
        "Startups creating new visual identity",
        "Apps wanting to improve usability",
        "Companies investing in user experience"
      ],
      notIdealFor: language === 'pt' ? [
        "Projetos que só precisam de templates",
        "Clientes que não valorizam pesquisa com usuários",
        "Entregas sem iteração"
      ] : [
        "Projects that only need templates",
        "Clients who don't value user research",
        "Deliveries without iteration"
      ],
      included: language === 'pt' ? [
        "Pesquisa de usuário e personas",
        "Wireframes de baixa e alta fidelidade",
        "Design system completo",
        "Protótipos interativos",
        "Handoff para desenvolvimento"
      ] : [
        "User research and personas",
        "Low and high fidelity wireframes",
        "Complete design system",
        "Interactive prototypes",
        "Development handoff"
      ],
      expectedResults: language === 'pt' ? [
        "Interface intuitiva e acessível",
        "Consistência visual em todo o produto",
        "Redução significativa em erros de usuário",
        "Maior satisfação e retenção"
      ] : [
        "Intuitive and accessible interface",
        "Visual consistency across the product",
        "Significant reduction in user errors",
        "Higher satisfaction and retention"
      ],
      realExample: {
        title: language === 'pt' ? "Redesign de Dashboard" : "Dashboard Redesign",
        description: language === 'pt' 
          ? "Redesign completo de sistema de gestão empresarial. Interface simplificada resultou em 45% menos tempo de treinamento para novos funcionários."
          : "Complete redesign of business management system. Simplified interface resulted in 45% less training time for new employees."
      },
      additionalExamples: [
        {
          title: language === 'pt' ? "App Fintech" : "Fintech App",
          result: language === 'pt' ? "NPS de 72 após redesign" : "NPS of 72 after redesign",
          tech: "Figma + User Research"
        },
        {
          title: language === 'pt' ? "E-commerce Premium" : "Premium E-commerce",
          result: language === 'pt' ? "+38% em conversões" : "+38% in conversions",
          tech: "Figma + Prototyping"
        },
        {
          title: language === 'pt' ? "Design System" : "Design System",
          result: language === 'pt' ? "60% mais rápido no desenvolvimento" : "60% faster in development",
          tech: "Figma + Documentation"
        }
      ]
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
      pricing: language === 'pt' ? "A partir de R$ 2.000" : "Starting at $400",
      idealFor: language === 'pt' ? [
        "Aplicações que precisam escalar",
        "Empresas migrando de hospedagem tradicional",
        "Projetos que exigem alta disponibilidade",
        "Times que querem automatizar deploys"
      ] : [
        "Applications that need to scale",
        "Companies migrating from traditional hosting",
        "Projects requiring high availability",
        "Teams wanting to automate deploys"
      ],
      notIdealFor: language === 'pt' ? [
        "Sites simples que funcionam em hospedagem compartilhada",
        "Projetos sem previsão de crescimento",
        "Orçamentos muito limitados para infraestrutura"
      ] : [
        "Simple sites that work on shared hosting",
        "Projects with no growth forecast",
        "Very limited infrastructure budgets"
      ],
      included: language === 'pt' ? [
        "Arquitetura cloud otimizada",
        "Pipeline CI/CD automatizado",
        "Monitoramento e alertas",
        "Backup automatizado",
        "Documentação de infraestrutura"
      ] : [
        "Optimized cloud architecture",
        "Automated CI/CD pipeline",
        "Monitoring and alerts",
        "Automated backup",
        "Infrastructure documentation"
      ],
      expectedResults: language === 'pt' ? [
        "Uptime de 99.9%+",
        "Deploy automatizado em minutos",
        "Escalabilidade sob demanda",
        "Custos otimizados de infraestrutura"
      ] : [
        "99.9%+ uptime",
        "Automated deploy in minutes",
        "On-demand scalability",
        "Optimized infrastructure costs"
      ],
      realExample: {
        title: language === 'pt' ? "Migração Cloud" : "Cloud Migration",
        description: language === 'pt' 
          ? "Migração de aplicação legada para AWS com containerização. Reduziu custos em 40% e melhorou tempo de resposta em 60%."
          : "Migration of legacy application to AWS with containerization. Reduced costs by 40% and improved response time by 60%."
      },
      additionalExamples: [
        {
          title: language === 'pt' ? "Infraestrutura Escalável" : "Scalable Infrastructure",
          result: language === 'pt' ? "10x mais capacidade sob demanda" : "10x more capacity on demand",
          tech: "AWS + Kubernetes"
        },
        {
          title: language === 'pt' ? "CI/CD Pipeline" : "CI/CD Pipeline",
          result: language === 'pt' ? "Deploy em 3 min vs 2h anteriores" : "Deploy in 3 min vs 2h before",
          tech: "GitHub Actions + Docker"
        },
        {
          title: language === 'pt' ? "Monitoramento 24/7" : "24/7 Monitoring",
          result: language === 'pt' ? "MTTR reduzido de 4h para 15min" : "MTTR reduced from 4h to 15min",
          tech: "Datadog + PagerDuty"
        }
      ]
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
      pricing: language === 'pt' ? "R$ 200/hora" : "$40/hour",
      idealFor: language === 'pt' ? [
        "CTOs e tech leads buscando segunda opinião",
        "Startups definindo arquitetura inicial",
        "Times com problemas técnicos complexos",
        "Empresas planejando grandes refatorações"
      ] : [
        "CTOs and tech leads seeking second opinion",
        "Startups defining initial architecture",
        "Teams with complex technical problems",
        "Companies planning major refactors"
      ],
      notIdealFor: language === 'pt' ? [
        "Quem busca apenas execução sem estratégia",
        "Projetos sem clareza de objetivos",
        "Decisões já tomadas que precisam só de validação"
      ] : [
        "Those seeking only execution without strategy",
        "Projects without clarity of objectives",
        "Already made decisions that just need validation"
      ],
      included: language === 'pt' ? [
        "Diagnóstico técnico completo",
        "Recomendações documentadas",
        "Code review detalhado",
        "Sessões de mentoria",
        "Acompanhamento de implementação"
      ] : [
        "Complete technical diagnosis",
        "Documented recommendations",
        "Detailed code review",
        "Mentoring sessions",
        "Implementation follow-up"
      ],
      expectedResults: language === 'pt' ? [
        "Clareza na direção técnica",
        "Identificação de riscos antecipada",
        "Melhoria na qualidade do código",
        "Time mais capacitado"
      ] : [
        "Clarity in technical direction",
        "Early risk identification",
        "Improved code quality",
        "More capable team"
      ],
      realExample: {
        title: language === 'pt' ? "Consultoria de Arquitetura" : "Architecture Consulting",
        description: language === 'pt' 
          ? "Consultoria para startup fintech na definição de arquitetura de microserviços. Evitou retrabalho estimado em R$ 200k e acelerou time-to-market em 3 meses."
          : "Consulting for fintech startup on microservices architecture definition. Avoided estimated R$200k rework and accelerated time-to-market by 3 months."
      },
      additionalExamples: [
        {
          title: language === 'pt' ? "Mentoria de Time" : "Team Mentoring",
          result: language === 'pt' ? "Produtividade +40% em 3 meses" : "Productivity +40% in 3 months",
          tech: "Code Review + Workshops"
        },
        {
          title: language === 'pt' ? "Auditoria de Código" : "Code Audit",
          result: language === 'pt' ? "87 vulnerabilidades corrigidas" : "87 vulnerabilities fixed",
          tech: "Security Analysis"
        },
        {
          title: language === 'pt' ? "Planejamento Técnico" : "Technical Planning",
          result: language === 'pt' ? "Roadmap de 18 meses definido" : "18-month roadmap defined",
          tech: "Strategic Planning"
        }
      ]
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

      {/* Target Audience Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
              {/* Ideal For */}
              <GlassCard className="p-8" hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                    <Target className="w-5 h-5 text-foreground/70" />
                  </div>
                  <h2 className="font-serif text-xl text-foreground">
                    {language === 'pt' ? 'Para quem é' : 'Who it\'s for'}
                  </h2>
                </div>
                <div className="space-y-3">
                  {service.idealFor.map((item: string, index: number) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-foreground/50 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>

              {/* Not Ideal For */}
              <GlassCard className="p-8" hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-foreground/70" />
                  </div>
                  <h2 className="font-serif text-xl text-foreground">
                    {language === 'pt' ? 'Para quem não é' : 'Who it\'s not for'}
                  </h2>
                </div>
                <div className="space-y-3">
                  {service.notIdealFor.map((item: string, index: number) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <XCircle className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground/70 leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
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
              {/* What's Included */}
              <ScrollReveal>
                <GlassCard className="p-8" hover={false}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-foreground/70" />
                    </div>
                    <h2 className="font-serif text-xl lg:text-2xl text-foreground">
                      {language === 'pt' ? 'O que está incluso' : 'What\'s included'}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.included.map((item: string, index: number) => (
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
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>

              {/* Expected Results */}
              <ScrollReveal>
                <GlassCard className="p-8" hover={false}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-foreground/70" />
                    </div>
                    <h2 className="font-serif text-xl lg:text-2xl text-foreground">
                      {language === 'pt' ? 'Resultado esperado' : 'Expected results'}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {service.expectedResults.map((result: string, index: number) => (
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
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>

              {/* Real Example */}
              <ScrollReveal>
                <GlassCard className="p-8" hover={false} glow>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <Star className="w-5 h-5 text-foreground/70" />
                    </div>
                    <h2 className="font-serif text-xl lg:text-2xl text-foreground">
                      {language === 'pt' ? 'Exemplo real' : 'Real example'}
                    </h2>
                  </div>
                  <div className="border-l-2 border-foreground/10 pl-6 mb-8">
                    <h3 className="font-serif text-lg text-foreground mb-2">
                      {service.realExample.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.realExample.description}
                    </p>
                  </div>
                  
                  {/* Additional Examples */}
                  {service.additionalExamples && service.additionalExamples.length > 0 && (
                    <div className="pt-6 border-t border-border/20">
                      <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground/60 mb-4">
                        {language === 'pt' ? 'Mais resultados' : 'More results'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {service.additionalExamples.map((example: { title: string; result: string; tech: string }, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 rounded-xl border border-border/20 bg-card/30 group hover:border-foreground/20 transition-colors duration-300"
                          >
                            <p className="text-sm font-medium text-foreground mb-1">{example.title}</p>
                            <p className="text-xs text-foreground/70 mb-2">{example.result}</p>
                            <p className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">{example.tech}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
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
                      onClick={() => window.open('https://wa.me/5581993964261', '_blank', 'noopener,noreferrer')}
                      className="w-full group inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground bg-foreground rounded-xl py-3.5 transition-all duration-300 hover:opacity-90 mb-3"
                      style={{
                        boxShadow: '0 0 20px hsl(var(--foreground) / 0.15)'
                      }}
                    >
                      <MessageSquare className="w-4 h-4" />
                      {language === 'pt' ? 'Solicitar diagnóstico' : 'Request diagnosis'}
                    </motion.button>

                    <Link 
                      to="/contato"
                      className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground border border-border/30 rounded-xl py-3.5 hover:bg-card/50 hover:border-foreground/20 transition-all duration-300"
                    >
                      {language === 'pt' ? 'Analisar meu projeto' : 'Analyze my project'}
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
                    'Solicite um diagnóstico técnico gratuito e descubra como posso ajudar seu projeto.',
                    'Request a free technical diagnosis and discover how I can help your project.'
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
                  {getText(language, 'Conversar sobre viabilidade', 'Discuss feasibility')}
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
