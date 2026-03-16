import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

// Import logos
import cheetahLogo from "@/assets/logos/cheetah-solutions.png";
import squareCloudLogo from "@/assets/logos/square-cloud.png";
import quackPayLogo from "@/assets/logos/quack-pay.png";
import rocketseatLogo from "@/assets/logos/rocketseat.png";
import splendoriLogo from "@/assets/logos/splendori.png";

const CompanyLogos = () => {
  const { language } = useTheme();
  
  // Companies with optical scale adjustments for visual balance
  const companies = [
    {
      name: "Cheetah Solutions",
      logo: cheetahLogo,
      url: "https://cheetahsolutions.com.br",
      scale: 1.0 // Base reference
    },
    {
      name: "Square Cloud",
      logo: squareCloudLogo,
      url: "https://squarecloud.app",
      scale: 0.95 // Slightly smaller for balance
    },
    {
      name: "Quack Pay",
      logo: quackPayLogo,
      url: "https://quackpay.com.br",
      scale: 1.05 // Slightly larger - thinner logo
    },
    {
      name: "Rocketseat",
      logo: rocketseatLogo,
      url: "https://www.rocketseat.com.br/oferta/influencer/v2/talinho",
      scale: 1.0
    },
    {
      name: "Splendori",
      logo: splendoriLogo,
      url: "https://www.linkedin.com/company/splendoribr/",
      scale: 0.9,
      showLabel: true
    }
  ];

  return (
    <div className="relative">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-12 text-left"
      >
        {getText(language, "Empresas e organizações com as quais atuo.", "Companies and organizations I work with.")}
      </motion.p>
      
      <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
        {companies.map((company, index) => (
          <motion.a
            key={company.name}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -3 }}
            className="group cursor-pointer flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-1.5">
              <img 
                src={company.logo} 
                alt={company.name}
                style={{ transform: `scale(${company.scale})` }}
                className="h-10 lg:h-12 w-auto max-w-[140px] lg:max-w-[160px] object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              {company.showLabel && (
                <span className="text-[11px] font-sans tracking-wide text-muted-foreground/70 group-hover:text-foreground/80 transition-colors duration-500">
                  {company.name}
                </span>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;