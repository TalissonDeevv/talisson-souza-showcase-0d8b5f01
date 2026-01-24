import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";
import { ArrowUpRight } from "lucide-react";

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
    <article className="group py-8 border-t border-border/40 first:border-t-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Image */}
        <div className="lg:col-span-5 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-48 lg:h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        
        {/* Content */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <span className="text-xs text-muted-foreground mb-3 block">0{index + 1}</span>
            <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-lg">
              {description}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
              {technologies.map((tech, i) => (
                <span key={i} className="text-xs text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group/link inline-flex items-center gap-1 text-sm text-foreground hover:opacity-70 transition-opacity duration-200"
            >
              {t.projects.seeProject}
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;