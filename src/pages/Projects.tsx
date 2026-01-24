
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";

const Projects = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  // Dados para projetos
  const projects = [
    {
      title: "Site da Werneck Group",
      description: "Redesign completo da plataforma corporativa do Werneck Group, incluindo seções institucionais e área de clientes.",
      image: "https://i.ibb.co/rSQjVTs/wallpaper.png",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
      link: "https://werneckgroup.com",
    },
    {
      title: "Site da Família Werneck",
      description: "Portal personalizado para a Família Werneck com foco em compartilhamento de conteúdo e integração de mídias sociais.",
      image: "https://i.ibb.co/20FBr03Q/Chat-GPT-Image-4-05-2025-15-12-34.png",
      technologies: ["React", "Firebase", "Styled Components"],
      link: "https://familiawerneck.vercel.app",
    },
    {
      title: "Sagiri Bot",
      description: "Land page pra uma bot de discord focada em parcerias",
      image: "https://i.ibb.co/jkPPHWdc/image.png",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      link: "https://sagiribot.vercel.app",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16">
        <SectionTitle subtitle={t.projects.subtitle} align="center">
          {t.projects.title}
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
