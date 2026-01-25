import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import GlassCard from "./GlassCard";

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
      whileHover={{ y: -8 }}
    >
      <Link to={`/blog/${id}`} className="block group">
        <GlassCard className="p-8 h-full hover:border-foreground/20 transition-all duration-500">
          {/* Meta info */}
          <div className="flex items-center gap-4 mb-6">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xs px-3 py-1.5 rounded-full border border-border/50 bg-card/50 text-muted-foreground"
            >
              {tags[0]}
            </motion.span>
            {tags.length > 1 && (
              <span className="text-xs text-muted-foreground/60">
                +{tags.length - 1} {language === 'pt' ? 'mais' : 'more'}
              </span>
            )}
            <span className="text-xs text-muted-foreground/60">{date}</span>
          </div>
          
          {/* Title */}
          <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-gradient transition-all duration-500 leading-tight">
            {title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
            {excerpt}
          </p>
          
          {/* Read more link */}
          <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <span className="relative">
              {language === 'pt' ? 'Ler artigo' : 'Read article'}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
