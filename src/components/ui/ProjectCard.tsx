import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ImageWithSkeleton from "./ImageWithSkeleton";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  link,
  index,
}: ProjectCardProps) => {
  const { language } = useTheme();
  const t = useTranslation(language);
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="group py-8 border-t border-border/40 first:border-t-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Image */}
        <div className="lg:col-span-5 overflow-hidden rounded-lg">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="h-48 lg:h-56"
          >
            <ImageWithSkeleton
              src={image || "/placeholder.svg"}
              alt={title}
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
              containerClassName="h-full rounded-lg"
            />
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <span className="text-xs text-muted-foreground mb-3 block font-mono">0{index + 1}</span>
            <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-foreground/80 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-lg">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 4).map((tech, i) => (
                <span 
                  key={i} 
                  className="text-xs text-muted-foreground px-2 py-1 border border-border/30 rounded-md bg-card/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {link && (
            <motion.a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group/link inline-flex items-center gap-1 text-sm text-foreground hover:opacity-70 transition-opacity duration-200"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {t.projects.seeProject}
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
