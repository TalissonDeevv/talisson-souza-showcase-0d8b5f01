import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import TechList from "@/components/ui/TechList";
import { ArrowLeft, ExternalLink, Calendar, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";

interface ProjectDetailData {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  deliveryDate: string;
  duration: string;
  team: string;
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
}

const ProjectDetail = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const { slug } = useParams();

  // Dados dos projetos com detalhes expandidos
  const projectsData: Record<string, ProjectDetailData> = {
    "site-global-mode": {
      title: "Site Global Mode",
      description: language === 'pt' 
        ? "Desenvolvimento completo do site institucional da Global Mode com design moderno e responsivo."
        : "Complete development of Global Mode's institutional website with modern and responsive design.",
      image: "https://i.ibb.co/j9hyzL8x/globalmodebanner.jpg",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://globalmode.vercel.app",
      deliveryDate: language === 'pt' ? "15 de junho de 2024" : "June 15, 2024",
      duration: language === 'pt' ? "2 meses" : "2 months",
      team: "3 desenvolvedores",
      challenge: language === 'pt' 
        ? "Criar uma identidade visual moderna e responsiva que representasse a inovação da Global Mode no mercado de tecnologia."
        : "Create a modern and responsive visual identity that represented Global Mode's innovation in the technology market.",
      solution: language === 'pt'
        ? "Desenvolvemos uma plataforma com animações fluidas, design responsivo e experiência de usuário otimizada para conversões."
        : "We developed a platform with fluid animations, responsive design and user experience optimized for conversions.",
      features: language === 'pt' 
        ? [
          "Design responsivo para todos os dispositivos",
          "Animações suaves com Framer Motion",
          "Otimização SEO completa",
          "Integração com sistemas de analytics",
          "Formulários de contato inteligentes"
        ]
        : [
          "Responsive design for all devices",
          "Smooth animations with Framer Motion",
          "Complete SEO optimization",
          "Analytics systems integration",
          "Smart contact forms"
        ],
      results: language === 'pt'
        ? [
          "Aumento de 150% nas conversões",
          "Redução de 40% na taxa de rejeição",
          "Tempo de carregamento inferior a 2 segundos",
          "Score 98/100 no Google PageSpeed"
        ]
        : [
          "150% increase in conversions",
          "40% reduction in bounce rate",
          "Loading time under 2 seconds",
          "98/100 score on Google PageSpeed"
        ]
    },
    "site-da-werneck-group": {
      title: "Site da Werneck Group",
      description: language === 'pt'
        ? "Redesign completo da plataforma corporativa do Werneck Group, incluindo seções institucionais e área de clientes."
        : "Complete redesign of Werneck Group's corporate platform, including institutional sections and client area.",
      image: "https://i.ibb.co/rSQjVTs/wallpaper.png",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
      link: "https://werneckgroup.com",
      deliveryDate: language === 'pt' ? "22 de agosto de 2024" : "August 22, 2024",
      duration: language === 'pt' ? "3 meses" : "3 months",
      team: "5 desenvolvedores",
      challenge: language === 'pt'
        ? "Modernizar a presença digital do Werneck Group mantendo a solidez e confiança da marca corporativa."
        : "Modernize Werneck Group's digital presence while maintaining the brand's corporate solidity and trust.",
      solution: language === 'pt'
        ? "Criamos uma plataforma robusta com área administrativa, sistema de gerenciamento de clientes e dashboard analytics."
        : "We created a robust platform with administrative area, client management system and analytics dashboard.",
      features: language === 'pt'
        ? [
          "Portal corporativo completo",
          "Sistema de gestão de clientes",
          "Dashboard executivo com métricas",
          "Área de documentos seguros",
          "Sistema de notificações em tempo real"
        ]
        : [
          "Complete corporate portal",
          "Client management system",
          "Executive dashboard with metrics",
          "Secure documents area",
          "Real-time notification system"
        ],
      results: language === 'pt'
        ? [
          "Redução de 60% no tempo de atendimento",
          "Automatização de 80% dos processos manuais",
          "Satisfação do cliente acima de 95%",
          "ROI de 300% no primeiro ano"
        ]
        : [
          "60% reduction in service time",
          "80% automation of manual processes",
          "Client satisfaction above 95%",
          "300% ROI in the first year"
        ]
    },
    "site-da-família-werneck": {
      title: "Site da Família Werneck",
      description: language === 'pt'
        ? "Portal personalizado para a Família Werneck com foco em compartilhamento de conteúdo e integração de mídias sociais."
        : "Personalized portal for the Werneck Family focused on content sharing and social media integration.",
      image: "https://i.ibb.co/20FBr03Q/Chat-GPT-Image-4-05-2025-15-12-34.png",
      technologies: ["React", "Firebase", "Styled Components"],
      link: "https://familiawerneck.vercel.app",
      deliveryDate: language === 'pt' ? "10 de setembro de 2024" : "September 10, 2024",
      duration: language === 'pt' ? "1.5 meses" : "1.5 months",
      team: "2 desenvolvedores",
      challenge: language === 'pt'
        ? "Criar um espaço digital íntimo e seguro para compartilhamento familiar com interface intuitiva."
        : "Create an intimate and secure digital space for family sharing with intuitive interface.",
      solution: language === 'pt'
        ? "Desenvolvemos uma plataforma familiar com galeria de fotos, timeline de eventos e chat privado."
        : "We developed a family platform with photo gallery, events timeline and private chat.",
      features: language === 'pt'
        ? [
          "Galeria de fotos com organização automática",
          "Timeline de eventos familiares",
          "Chat privado entre membros",
          "Calendário de aniversários",
          "Álbuns temáticos personalizados"
        ]
        : [
          "Photo gallery with automatic organization",
          "Family events timeline",
          "Private chat between members",
          "Birthday calendar",
          "Custom themed albums"
        ],
      results: language === 'pt'
        ? [
          "Engajamento familiar de 90%",
          "Mais de 1000 fotos compartilhadas",
          "Redução de 70% no uso de outros apps",
          "Satisfação de 100% dos usuários"
        ]
        : [
          "90% family engagement",
          "Over 1000 shared photos",
          "70% reduction in other apps usage",
          "100% user satisfaction"
        ]
    },
    "devstudio": {
      title: "DevStudio",
      description: language === 'pt'
        ? "Site simples para uma comunidade no Discord voltada a programação e tecnologia."
        : "Simple website for a Discord community focused on programming and technology.",
      image: "https://i.ibb.co/fY11hRgs/Chat-GPT-Image-5-05-2025-15-26-21.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "https://devstudiocommunity.vercel.app/",
      deliveryDate: language === 'pt' ? "5 de julho de 2024" : "July 5, 2024",
      duration: language === 'pt' ? "1 mês" : "1 month",
      team: "2 desenvolvedores",
      challenge: language === 'pt'
        ? "Criar uma presença web profissional para comunidade de desenvolvedores com recursos interativos."
        : "Create a professional web presence for developers community with interactive features.",
      solution: language === 'pt'
        ? "Desenvolvemos um hub comunitário com integração Discord, sistema de eventos e recursos educacionais."
        : "We developed a community hub with Discord integration, events system and educational resources.",
      features: language === 'pt'
        ? [
          "Integração nativa com Discord",
          "Sistema de eventos da comunidade",
          "Biblioteca de recursos educacionais",
          "Chat em tempo real",
          "Rankings e gamificação"
        ]
        : [
          "Native Discord integration",
          "Community events system",
          "Educational resources library",
          "Real-time chat",
          "Rankings and gamification"
        ],
      results: language === 'pt'
        ? [
          "Crescimento de 200% na comunidade",
          "Engajamento diário de 85%",
          "Mais de 50 eventos organizados",
          "Feedback positivo de 95%"
        ]
        : [
          "200% community growth",
          "85% daily engagement",
          "Over 50 organized events",
          "95% positive feedback"
        ]
    },
    "atendefly": {
      title: "Atendefly",
      description: language === 'pt'
        ? "Atendimento automático para WhatsApp."
        : "Automatic WhatsApp customer service.",
      image: "https://i.ibb.co/DHCvmvVm/atendefly-print.png",
      technologies: ["React", "Node.js", "Discord.js", "MongoDB"],
      link: "#",
      deliveryDate: language === 'pt' ? "Em desenvolvimento" : "In development",
      duration: language === 'pt' ? "4 meses" : "4 months",
      team: "4 desenvolvedores",
      challenge: language === 'pt'
        ? "Criar uma solução de atendimento automatizado que oferece experiência humanizada no WhatsApp."
        : "Create an automated customer service solution that offers humanized experience on WhatsApp.",
      solution: language === 'pt'
        ? "Desenvolvemos um chatbot inteligente com IA que simula conversas naturais e resolve 80% das dúvidas automaticamente."
        : "We developed an intelligent AI chatbot that simulates natural conversations and automatically resolves 80% of inquiries.",
      features: language === 'pt'
        ? [
          "Processamento de linguagem natural",
          "Integração com APIs de pagamento",
          "Dashboard de analytics em tempo real",
          "Fluxos de conversa personalizáveis",
          "Escalação inteligente para humanos"
        ]
        : [
          "Natural language processing",
          "Payment APIs integration",
          "Real-time analytics dashboard",
          "Customizable conversation flows",
          "Smart escalation to humans"
        ],
      results: language === 'pt'
        ? [
          "80% de resolução automática",
          "Redução de 65% no tempo de resposta",
          "Economia de 50% em custos operacionais",
          "Satisfação do cliente de 92%"
        ]
        : [
          "80% automatic resolution",
          "65% reduction in response time",
          "50% savings in operational costs",
          "92% customer satisfaction"
        ]
    },
    "cheetah-network": {
      title: "Cheetah Solutions Network",
      description: language === 'pt'
        ? "Soluções Digitais Inovadoras."
        : "Innovative Digital Solutions.",
      image: "https://i.ibb.co/bjvQY32p/bannercheetah.jpg",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      link: "https://cheetahnetwork.vercel.app/",
      deliveryDate: language === 'pt' ? "18 de novembro de 2024" : "November 18, 2024",
      duration: language === 'pt' ? "2.5 meses" : "2.5 months",
      team: "3 desenvolvedores",
      challenge: language === 'pt'
        ? "Criar uma plataforma completa de soluções digitais com sistema de pagamentos e gestão de projetos."
        : "Create a complete digital solutions platform with payment system and project management.",
      solution: language === 'pt'
        ? "Desenvolvemos uma plataforma SaaS completa com múltiplos módulos integrados e sistema de assinaturas."
        : "We developed a complete SaaS platform with multiple integrated modules and subscription system.",
      features: language === 'pt'
        ? [
          "Sistema de pagamentos Stripe integrado",
          "Gestão completa de projetos",
          "Dashboard cliente personalizado",
          "Sistema de assinaturas flexível",
          "Relatórios avançados e analytics"
        ]
        : [
          "Integrated Stripe payment system",
          "Complete project management",
          "Custom client dashboard",
          "Flexible subscription system",
          "Advanced reports and analytics"
        ],
      results: language === 'pt'
        ? [
          "Processamento de R$ 500k em pagamentos",
          "Taxa de conversão de 12%",
          "Retenção de clientes de 88%",
          "NPS de 75 pontos"
        ]
        : [
          "R$ 500k in payment processing",
          "12% conversion rate",
          "88% client retention",
          "75 NPS score"
        ]
    }
  };

  const project = projectsData[slug || ""];

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'pt' ? 'Projeto não encontrado' : 'Project not found'}
          </h1>
          <Link to="/projects" className="text-accent-blue hover:underline">
            {language === 'pt' ? 'Voltar aos projetos' : 'Back to projects'}
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-accent-blue hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'pt' ? 'Voltar aos projetos' : 'Back to projects'}
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <SectionTitle>{project.title}</SectionTitle>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent-blue" />
                  <span className="text-gray-600 dark:text-gray-300">{project.deliveryDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent-blue" />
                  <span className="text-gray-600 dark:text-gray-300">{project.team}</span>
                </div>
              </div>

              <TechList
                title={language === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
                items={project.technologies}
                variant="features"
              />

              {project.link && project.link !== "#" && (
                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {language === 'pt' ? 'Visitar Projeto' : 'Visit Project'}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
            
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {language === 'pt' ? 'Desafio' : 'Challenge'}
              </h3>
              <p className="text-muted-foreground">
                {project.challenge}
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {language === 'pt' ? 'Solução' : 'Solution'}
              </h3>
              <p className="text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/50 rounded-xl p-6 border border-border">
              <TechList
                title={language === 'pt' ? 'Principais Funcionalidades' : 'Key Features'}
                items={project.features}
                variant="features"
              />
            </div>
            
            <div className="bg-secondary/50 rounded-xl p-6 border border-border">
              <TechList
                title={language === 'pt' ? 'Resultados Alcançados' : 'Achieved Results'}
                items={project.results}
                variant="benefits"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
