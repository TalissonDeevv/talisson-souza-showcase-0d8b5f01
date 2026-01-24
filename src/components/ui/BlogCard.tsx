import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import GlassCard from "./GlassCard";
import PremiumBadge from "./PremiumBadge";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  tags: string[];
  index: number;
}

const BlogCard = ({ id, title, excerpt, date, tags, index }: BlogCardProps) => {
  const { language } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <Link to={`/blog/${id}`} className="block group">
        <GlassCard className="p-6 h-full" hover glow>
          {/* Meta info */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-muted-foreground">{date}</span>
            <span className="text-muted-foreground/50">•</span>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag, i) => (
                <PremiumBadge key={i} variant="outline">
                  #{tag}
                </PremiumBadge>
              ))}
              {tags.length > 2 && (
                <span className="text-xs text-muted-foreground">+{tags.length - 2}</span>
              )}
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-sm text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
            {excerpt}
          </p>
          
          {/* Read more link */}
          <motion.div 
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {language === 'pt' ? 'Leia mais' : 'Read more'}
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </motion.div>
        </GlassCard>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
