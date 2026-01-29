import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

// Import logos
import cheetahLogo from "@/assets/logos/cheetah-solutions.png";
import squareCloudLogo from "@/assets/logos/square-cloud.png";
import quackPayLogo from "@/assets/logos/quack-pay.png";
import rocketseatLogo from "@/assets/logos/rocketseat.png";
const CompanyLogos = () => {
  const {
    language
  } = useTheme();
  const companies = [{
    name: "Cheetah Solutions",
    logo: cheetahLogo,
    url: "https://cheetahsolutions.com.br"
  }, {
    name: "Square Cloud",
    logo: squareCloudLogo,
    url: "https://squarecloud.app"
  }, {
    name: "Quack Pay",
    logo: quackPayLogo,
    url: "https://quackpay.com.br"
  }, {
    name: "Rocketseat",
    logo: rocketseatLogo,
    url: "https://www.rocketseat.com.br/oferta/influencer/v2/talinho"
  }];
  return <div className="relative">
      <motion.p initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-10 text-left">
        {getText(language, "Empresas e projetos que confiam no meu trabalho", "Companies and projects that trust my work")}
      </motion.p>
      
      <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
        {companies.map((company, index) => <motion.a key={company.name} href={company.url} target="_blank" rel="noopener noreferrer" initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.4,
        delay: index * 0.1
      }} whileHover={{
        y: -4
      }} className="group cursor-pointer">
            <img src={company.logo} alt={company.name} className="h-8 lg:h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90" />
          </motion.a>)}
      </div>
    </div>;
};
export default CompanyLogos;