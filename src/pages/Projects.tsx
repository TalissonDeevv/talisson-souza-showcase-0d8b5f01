import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const projects = [
    {
      title: getText(language, "Site da Werneck Group", "Werneck Group Website"),
      description: getText(language, "Redesign completo da plataforma corporativa do Werneck Group, incluindo seções institucionais e área de clientes.", "Complete redesign of Werneck Group's corporate platform, including institutional sections and client area."),
      image: "https://i.ibb.co/rSQjVTs/wallpaper.png",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
      link: "https://werneckgroup.com",
    },
    {
      title: getText(language, "Site da Família Werneck", "Werneck Family Website"),
      description: getText(language, "Portal personalizado para a Família Werneck com foco em compartilhamento de conteúdo e integração de mídias sociais.", "Customized portal for the Werneck Family focused on content sharing and social media integration."),
      image: "https://i.ibb.co/20FBr03Q/Chat-GPT-Image-4-05-2025-15-12-34.png",
      technologies: ["React", "Firebase", "Styled Components"],
      link: "https://familiawerneck.vercel.app",
    },
    {
      title: "Sagiri Bot",
      description: getText(language, "Land page pra uma bot de discord focada em parcerias", "Landing page for a Discord bot focused on partnerships"),
      image: "https://i.ibb.co/jkPPHWdc/image.png",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      link: "https://sagiribot.vercel.app",
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
                Portfolio
              </motion.span>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 leading-[1.1]">
                {t.projects.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t.projects.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="block h-full group"
                >
                  <div 
                    className="relative h-full rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    {/* Image */}
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      {/* Project number */}
                      <div className="mb-4 flex items-center gap-4">
                        <span className="text-3xl font-serif text-foreground/[0.1] group-hover:text-foreground/20 transition-colors duration-500" style={{ letterSpacing: '-0.05em' }}>0{index + 1}</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent" />
                      </div>
                      
                      <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-foreground/80 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-md border border-border/30 bg-background/50 text-muted-foreground/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        <span className="relative">
                          {t.projects.seeProject}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
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
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6 leading-tight">
                {getText(language, 'Tem um projeto em mente?', 'Have a project in mind?')}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {getText(language, 'Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.', "Let's talk about how I can help turn your idea into reality.")}
              </p>
              <a 
                href="https://wa.me/5581993964261" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground px-8 py-3.5 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-sm hover:bg-foreground/10 hover:border-foreground/40 transition-all duration-300"
              >
                {getText(language, 'Iniciar conversa', 'Start conversation')}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
