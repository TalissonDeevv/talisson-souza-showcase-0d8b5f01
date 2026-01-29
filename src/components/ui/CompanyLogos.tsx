import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

interface CompanyLogosProps {
  variant?: "default" | "minimal";
  showLabel?: boolean;
}

const CompanyLogos = ({ variant = "default", showLabel = true }: CompanyLogosProps) => {
  const { language } = useTheme();

  // Companies with placeholder logos (using text as logo placeholders)
  const companies = [
    { 
      name: "Werneck Group", 
      logo: "https://i.ibb.co/ymjQhFmG/image.png",
      segment: getText(language, "Holding Empresarial", "Business Holding")
    },
    { 
      name: "Cheetah Network", 
      logo: "https://cheetahnetwork.vercel.app/_next/image?url=%2Flogo.png&w=256&q=100",
      segment: getText(language, "Tecnologia", "Technology")
    },
    { 
      name: "Sagiri Bot", 
      logo: "https://i.ibb.co/jkPPHWdc/image.png",
      segment: getText(language, "Automação", "Automation")
    },
    { 
      name: "Família Werneck", 
      logo: "https://familiawerneck.vercel.app/logo.png",
      segment: getText(language, "Portal Familiar", "Family Portal")
    },
  ];

  if (variant === "minimal") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-8 lg:h-10 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {showLabel && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-8"
        >
          {getText(language, "Empresas e projetos que confiam no meu trabalho", "Companies and projects that trust my work")}
        </motion.p>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative p-6 rounded-xl border border-border/20 bg-card/20 backdrop-blur-sm flex flex-col items-center justify-center gap-4 cursor-default"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-12 w-full flex items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="h-10 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
            
            <div className="relative text-center">
              <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                {company.name}
              </p>
              <p className="text-[10px] tracking-wider uppercase text-muted-foreground/50 mt-1">
                {company.segment}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
