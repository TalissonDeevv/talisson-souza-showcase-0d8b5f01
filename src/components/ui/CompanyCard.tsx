import { useTheme } from "@/contexts/ThemeContext";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CompanyCardProps {
  name: string;
  description: string;
  logo: string;
  index: number;
  skills?: string[];
}

const CompanyCard = ({ name, description, logo, index, skills }: CompanyCardProps) => {
  const { language } = useTheme();

  const getCompanySlug = (companyName: string) => {
    return companyName.toLowerCase().replace(/\s+/g, '-');
  };

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
          {logo ? (
            <motion.img 
              src={logo} 
              alt={`${name} banner`} 
              className="w-full h-48 lg:h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <div className="w-full h-48 lg:h-56 bg-card/50 border border-border/30 rounded-lg flex items-center justify-center">
              <span className="text-3xl font-serif text-muted-foreground/50">{name.charAt(0)}</span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <span className="text-xs text-muted-foreground mb-3 block font-mono">0{index + 1}</span>
            <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-foreground/80 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-lg">
              {description}
            </p>
            
            {skills && skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.slice(0, 3).map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-xs text-muted-foreground px-2 py-1 border border-border/30 rounded-md bg-card/30"
                  >
                    {skill.length > 30 ? skill.substring(0, 30) + '...' : skill}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <Link 
            to={`/companies/${getCompanySlug(name)}`}
            className="group/link inline-flex items-center gap-1 text-sm text-foreground hover:opacity-70 transition-opacity duration-200"
          >
            {language === 'pt' ? 'Ver detalhes' : 'View details'}
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default CompanyCard;