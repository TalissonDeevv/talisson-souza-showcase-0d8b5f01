import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlogCard from "@/components/ui/BlogCard";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";

const Blog = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const blogPosts = [
    {
      id: "bot-discord",
      title: language === 'pt' ? "Criando Bots para Discord: Um Guia Completo" : "Creating Discord Bots: A Complete Guide",
      excerpt: language === 'pt' ? "Aprenda a desenvolver bots para Discord utilizando JavaScript/Node.js com a biblioteca Discord.js. Desde a configuração inicial até funcionalidades avançadas." : "Learn to develop Discord bots using JavaScript/Node.js with the Discord.js library. From initial setup to advanced features.",
      image: "https://i.ibb.co/G30Wf7JB/Top-10-Best-Discord-Bots-to-Improve-Your-Discord-Server.jpg",
      date: language === 'pt' ? "10 de Maio, 2023" : "May 10, 2023",
      tags: ["Discord", "Bot", "JavaScript", "Node.js"],
    },
    {
      id: "fullstack-development",
      title: language === 'pt' ? "Desenvolvimento Full Stack: Tecnologias e Práticas" : "Full Stack Development: Technologies and Practices",
      excerpt: language === 'pt' ? "Uma análise das principais tecnologias e práticas para desenvolvimento full stack em 2023, incluindo React, Node.js, TypeScript e arquiteturas modernas." : "An analysis of the main technologies and practices for full stack development in 2023, including React, Node.js, TypeScript and modern architectures.",
      image: "https://i.ibb.co/Kzsf63Hx/971.jpg",
      date: language === 'pt' ? "25 de Junho, 2024" : "June 25, 2024",
      tags: ["Full Stack", "React", "Node.js", "TypeScript"],
    },
    {
      id: "cloud-solutions",
      title: language === 'pt' ? "Soluções em Nuvem para Empresas" : "Cloud Solutions for Companies",
      excerpt: language === 'pt' ? "Descubra como implementar soluções em nuvem eficientes para empresas de diferentes portes, otimizando custos e melhorando a escalabilidade." : "Discover how to implement efficient cloud solutions for companies of different sizes, optimizing costs and improving scalability.",
      image: "https://i.ibb.co/sv5LjMHr/website-hosting-concept-with-screen.jpg",
      date: language === 'pt' ? "12 de Julho, 2024" : "July 12, 2024",
      tags: ["Cloud", "AWS", "Azure", "GCP"],
    },
    {
      id: "web-automation",
      title: language === 'pt' ? "Automação Web: Ferramentas e Estratégias" : "Web Automation: Tools and Strategies",
      excerpt: language === 'pt' ? "Como utilizar ferramentas como Puppeteer e Playwright para automatizar tarefas repetitivas na web e aumentar a produtividade." : "How to use tools like Puppeteer and Playwright to automate repetitive web tasks and increase productivity.",
      image: "https://i.ibb.co/kVpRGdg5/representation-user-experience-interface-design.jpg",
      date: language === 'pt' ? "17 de Setembro, 2024" : "September 17, 2024",
      tags: language === 'pt' ? ["Automação", "Web", "Puppeteer", "JavaScript"] : ["Automation", "Web", "Puppeteer", "JavaScript"],
    },
    {
      id: "project-management",
      title: language === 'pt' ? "Gestão de Projetos Tecnológicos: Metodologias Ágeis" : "Technology Project Management: Agile Methodologies",
      excerpt: language === 'pt' ? "Implementação efetiva de metodologias ágeis em projetos de tecnologia, com foco em Scrum e Kanban para equipes distribuídas." : "Effective implementation of agile methodologies in technology projects, focusing on Scrum and Kanban for distributed teams.",
      image: "https://i.ibb.co/DPd6rDMn/still-life-business-roles-with-various-mechanism-pieces.jpg",
      date: language === 'pt' ? "29 de Outubro, 2024" : "October 29, 2024",
      tags: language === 'pt' ? ["Gestão", "Ágil", "Scrum", "Projetos"] : ["Management", "Agile", "Scrum", "Projects"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                <span className="w-8 h-px bg-foreground/30" />
                Blog
              </motion.span>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 leading-[1.1]">
                {t.blog.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t.blog.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </section>
    </Layout>
  );
};

export default Blog;
