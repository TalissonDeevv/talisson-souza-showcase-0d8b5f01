
import { motion } from "framer-motion";
import { Button } from "./button";
import { Building } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";
import { Link } from "react-router-dom";

interface CompanyCardProps {
  name: string;
  description: string;
  logo: string;
  index: number;
  skills?: string[];
}


const CompanyCard = ({ name, description, logo, index, skills }: CompanyCardProps) => {
  const { language } = useTheme();
  const t = useTranslation(language);

  // Generate slug for company
  const getCompanySlug = (companyName: string) => {
    return companyName.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-gradient-to-br from-white/90 to-gray-100/50 dark:from-gray-800/90 dark:to-gray-700/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/80 dark:border-gray-700/80 overflow-hidden hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
      >
        <div className="relative overflow-hidden h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {logo ? (
            <img 
              src={logo} 
              alt={`${name} banner`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <Building className="w-16 h-16 text-gray-400" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
            {name}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
            {description}
          </p>
          
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.slice(0, 3).map((skill, i) => (
                <span 
                  key={i}
                  className="text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-600/50 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300"
                >
                  {skill.length > 20 ? skill.substring(0, 20) + '...' : skill}
                </span>
              ))}
              {skills.length > 3 && (
                <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">
                  +{skills.length - 3} mais
                </span>
              )}
            </div>
          )}
          
          <Link to={`/companies/${getCompanySlug(name)}`}>
            <Button 
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 bg-transparent hover:bg-transparent p-0"
              variant="ghost"
            >
              {language === 'pt' ? 'Ver detalhes' : 'View details'}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="ml-2 h-4 w-4" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default CompanyCard;