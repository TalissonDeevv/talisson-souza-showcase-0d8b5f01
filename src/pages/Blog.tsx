
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/ui/BlogCard";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";

const Blog = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  // Blog posts data
  const blogPosts = [
    {
      id: "bot-discord",
      title: language === 'pt' 
        ? "Criando Bots para Discord: Um Guia Completo"
        : "Creating Discord Bots: A Complete Guide",
      excerpt: language === 'pt'
        ? "Aprenda a desenvolver bots para Discord utilizando JavaScript/Node.js com a biblioteca Discord.js. Desde a configuração inicial até funcionalidades avançadas."
        : "Learn to develop Discord bots using JavaScript/Node.js with the Discord.js library. From initial setup to advanced features.",
      image: "https://i.ibb.co/G30Wf7JB/Top-10-Best-Discord-Bots-to-Improve-Your-Discord-Server.jpg",
      date: language === 'pt' ? "10 de Maio, 2023" : "May 10, 2023",
      tags: ["Discord", "Bot", "JavaScript", "Node.js"],
    },
    {
      id: "fullstack-development",
      title: language === 'pt'
        ? "Desenvolvimento Full Stack: Tecnologias e Práticas"
        : "Full Stack Development: Technologies and Practices",
      excerpt: language === 'pt'
        ? "Uma análise das principais tecnologias e práticas para desenvolvimento full stack em 2023, incluindo React, Node.js, TypeScript e arquiteturas modernas."
        : "An analysis of the main technologies and practices for full stack development in 2023, including React, Node.js, TypeScript and modern architectures.",
      image: "https://i.ibb.co/Kzsf63Hx/971.jpg",
      date: language === 'pt' ? "25 de Junho, 2024" : "June 25, 2024",
      tags: ["Full Stack", "React", "Node.js", "TypeScript"],
    },
    {
      id: "cloud-solutions",
      title: language === 'pt'
        ? "Soluções em Nuvem para Empresas de Todos os Tamanhos"
        : "Cloud Solutions for Companies of All Sizes",
      excerpt: language === 'pt'
        ? "Descubra como implementar soluções em nuvem eficientes para empresas de diferentes portes, otimizando custos e melhorando a escalabilidade."
        : "Discover how to implement efficient cloud solutions for companies of different sizes, optimizing costs and improving scalability.",
      image: "https://i.ibb.co/sv5LjMHr/website-hosting-concept-with-screen.jpg",
      date: language === 'pt' ? "12 de Julho, 2024" : "July 12, 2024",
      tags: ["Cloud", "AWS", "Azure", "GCP"],
    },
    {
      id: "web-automation",
      title: language === 'pt'
        ? "Automação Web: Ferramentas e Estratégias"
        : "Web Automation: Tools and Strategies",
      excerpt: language === 'pt'
        ? "Como utilizar ferramentas como Puppeteer e Playwright para automatizar tarefas repetitivas na web e aumentar a produtividade."
        : "How to use tools like Puppeteer and Playwright to automate repetitive web tasks and increase productivity.",
      image: "https://i.ibb.co/kVpRGdg5/representation-user-experience-interface-design.jpg",
      date: language === 'pt' ? "17 de Setembro, 2024" : "September 17, 2024",
      tags: language === 'pt' ? ["Automação", "Web", "Puppeteer", "JavaScript"] : ["Automation", "Web", "Puppeteer", "JavaScript"],
    },
    {
      id: "project-management",
      title: language === 'pt'
        ? "Gestão de Projetos Tecnológicos: Metodologias Ágeis"
        : "Technology Project Management: Agile Methodologies",
      excerpt: language === 'pt'
        ? "Implementação efetiva de metodologias ágeis em projetos de tecnologia, com foco em Scrum e Kanban para equipes distribuídas."
        : "Effective implementation of agile methodologies in technology projects, focusing on Scrum and Kanban for distributed teams.",
      image: "https://i.ibb.co/DPd6rDMn/still-life-business-roles-with-various-mechanism-pieces.jpg",
      date: language === 'pt' ? "29 de Outubro, 2024" : "October 29, 2024",
      tags: language === 'pt' ? ["Gestão", "Ágil", "Scrum", "Projetos"] : ["Management", "Agile", "Scrum", "Projects"],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16">
        <SectionTitle subtitle={t.blog.subtitle} align="center">
          {t.blog.title}
        </SectionTitle>
        
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 px-5 py-3 bg-secondary rounded-full text-foreground">
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">{t.blog.articlesBasedOnExperience}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              tags={post.tags}
              index={index}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
