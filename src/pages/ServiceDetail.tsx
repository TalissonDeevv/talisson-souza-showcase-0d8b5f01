import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TechList from "@/components/ui/TechList";
import { 
  ArrowLeft, 
  Code, 
  Smartphone, 
  Bot, 
  Palette, 
  Cloud, 
  Users,
  CheckCircle,
  Star,
  Zap,
  MessageSquare
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";

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
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {language === 'pt' ? 'Serviço não encontrado' : 'Service not found'}
          </h1>
          <Button asChild>
            <Link to="/services">
              {language === 'pt' ? 'Voltar aos Serviços' : 'Back to Services'}
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const IconComponent = service.icon;

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="outline" asChild>
            <Link to="/services">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'pt' ? 'Voltar aos Serviços' : 'Back to Services'}
            </Link>
          </Button>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-24 h-24 rounded-3xl bg-primary p-6 mx-auto mb-6">
              <IconComponent className="w-full h-full text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {service.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <TechList 
                  title={language === 'pt' ? 'Recursos Inclusos' : 'Included Features'}
                  items={service.features}
                  variant="features"
                />
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TechList 
                  title={language === 'pt' ? 'Requisitos do Projeto' : 'Project Requirements'}
                  items={service.requirements}
                  variant="requirements"
                />
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      {language === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Service Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle>{language === 'pt' ? 'Informações do Serviço' : 'Service Information'}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        {language === 'pt' ? 'Prazo:' : 'Timeline:'}
                      </span>
                      <Badge variant="outline">{service.deliveryTime}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        {language === 'pt' ? 'Preço:' : 'Price:'}
                      </span>
                      <Badge className="bg-primary text-primary-foreground">
                        {service.pricing}
                      </Badge>
                    </div>

                    <div className="pt-4 border-t space-y-3">
                      <Button 
                        className="w-full"
                        onClick={() => window.open('https://wa.me/5581993964261', '_blank')}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        {language === 'pt' ? 'Solicitar Orçamento' : 'Request Quote'}
                      </Button>
                      
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/contact">
                          {language === 'pt' ? 'Mais Informações' : 'More Information'}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      {language === 'pt' ? 'Por que escolher?' : 'Why choose?'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      language === 'pt' ? 'Código limpo e documentado' : 'Clean and documented code',
                      language === 'pt' ? 'Suporte pós-entrega' : 'Post-delivery support',
                      language === 'pt' ? 'Metodologia ágil' : 'Agile methodology',
                      language === 'pt' ? 'Comunicação transparente' : 'Transparent communication'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-700 dark:text-gray-300 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetail;