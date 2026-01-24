
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group"
    >
      <Link to={`/blog/${id}`} className="block">
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <span>{date}</span>
            <span>•</span>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag, i) => (
                <span 
                  key={i}
                  className="text-accent-blue"
                >
                  #{tag}
                </span>
              ))}
              {tags.length > 2 && <span>+{tags.length - 2}</span>}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-accent-blue transition-colors mb-3">
            {title}
          </h3>
          
          <p className="text-gray-600 line-clamp-3 mb-4">
            {excerpt}
          </p>
          
          <div className="text-sm font-medium text-accent-blue flex items-center">
            Leia mais
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-1 h-4 w-4" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
