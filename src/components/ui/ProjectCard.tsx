import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import PremiumBadge from "./PremiumBadge";

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
      className="group"
    >
      <GlassCard className="overflow-hidden h-full" hover glow>
        {/* Image with hover zoom */}
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Project index badge */}
          <div className="absolute top-4 left-4">
            <PremiumBadge variant="glow">0{index + 1}</PremiumBadge>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="font-serif text-xl lg:text-2xl text-foreground group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <PremiumBadge key={i} variant="outline">{tech}</PremiumBadge>
            ))}
          </div>
          
          {link && (
            <motion.a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm text-foreground pt-2 group/link"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {t.projects.seeProject}
              <ArrowUpRight className="w-4 h-4 group-hover/link:opacity-100 transition-all duration-200" />
            </motion.a>
          )}
        </div>
      </GlassCard>
    </motion.article>
  );
};

export default ProjectCard;
