import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  index: number;
}

const CourseCard = ({ title, description, image, link, index }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg shadow-sm border border-border overflow-hidden group"
    >
      <div className="overflow-hidden h-40">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground text-sm line-clamp-3">{description}</p>
        
        {link && (
          <div className="mt-4">
            <Link
              to={link}
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
            >
              Ver detalhes
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CourseCard;
