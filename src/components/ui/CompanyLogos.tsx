import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { cn } from "@/lib/utils";

import accendLogo from "@/assets/logos/accend.png";
import agonLogo from "@/assets/logos/agon-by-aoc.png";
import cheetahLogo from "@/assets/logos/cheetah-solutions.png";
import hostingerLogo from "@/assets/logos/hostinger.png";
import mynexisLogo from "@/assets/logos/mynexis.png";
import rocketseatLogo from "@/assets/logos/rocketseat.png";
import shopeeLogo from "@/assets/logos/shopee.png";
import splendoriLogo from "@/assets/logos/splendori.png";
import squareCloudLogo from "@/assets/logos/square-cloud.png";
import collaborationsSignature from "@/assets/collaborations-signature.png";

const premiumEase = [0.16, 1, 0.3, 1] as const;
const logoSlotClassName = "h-14 w-[148px] sm:h-16 sm:w-[174px] xl:h-[72px] xl:w-[194px]";
const logoImageClassName = "max-h-8 max-w-[126px] sm:max-h-10 sm:max-w-[170px] xl:max-h-11 xl:max-w-[190px]";

type Company = {
  name: string;
  logo: string;
  url?: string;
  imageClassName?: string;
  showLabel?: boolean;
};

const companies: Company[] = [
  {
    name: "Cheetah Solutions",
    logo: cheetahLogo,
    url: "https://www.cheetahsolutions.com.br",
  },
  {
    name: "Square Cloud",
    logo: squareCloudLogo,
    url: "https://squarecloud.app",
  },
  {
    name: "Hostinger",
    logo: hostingerLogo,
    url: "https://www.hostinger.com/br?REFERRALCODE=talissonsouza",
    imageClassName: "opacity-90",
  },
  {
    name: "Shopee",
    logo: shopeeLogo,
    url: "https://collshp.com/talisson.dev?view=storefront",
  },
  {
    name: "Accend",
    logo: accendLogo,
  },
  {
    name: "Rocketseat",
    logo: rocketseatLogo,
    url: "https://www.rocketseat.com.br/oferta/influencer/v2/talinho",
  },
  {
    name: "AGON by AOC",
    logo: agonLogo,
  },
  {
    name: "Mynexis",
    logo: mynexisLogo,
  },
  {
    name: "Splendori",
    logo: splendoriLogo,
    url: "https://www.linkedin.com/company/splendoribr/",
    imageClassName: "max-h-9 max-w-[92px] sm:max-h-10 sm:max-w-[110px] xl:max-h-11 xl:max-w-[120px]",
    showLabel: true,
  },
];

const sectionVariants = {
  hidden: {},
  show: {},
};

const signatureVariants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: 14,
    filter: "blur(6px)",
  },
  show: {
    opacity: 0.72,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: 0.02,
      ease: premiumEase,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay: 0.14,
      ease: premiumEase,
    },
  },
};

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay: 0.22,
      ease: premiumEase,
    },
  },
};

const logosWrapperVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay: 0.4,
      ease: premiumEase,
    },
  },
};

const CompanyLogos = () => {
  const { language } = useTheme();
  const logoGroupRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    const updateMarqueeWidth = () => {
      setMarqueeWidth(logoGroupRef.current?.scrollWidth ?? 0);
    };

    updateMarqueeWidth();

    const resizeObserver = new ResizeObserver(updateMarqueeWidth);
    if (logoGroupRef.current) {
      resizeObserver.observe(logoGroupRef.current);
    }

    window.addEventListener("resize", updateMarqueeWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMarqueeWidth);
    };
  }, []);

  const renderLogoContent = (company: Company) => (
    <div className={cn("relative flex shrink-0 flex-col items-center justify-center gap-2.5", logoSlotClassName)}>
      <img
        src={company.logo}
        alt={company.name}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={cn(
          "h-auto w-auto select-none object-contain opacity-80 transition-all duration-500 [filter:grayscale(1)_brightness(0)_invert(1)_contrast(1.12)] group-hover:opacity-100",
          logoImageClassName,
          company.imageClassName
        )}
      />

      {company.showLabel && (
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/65 transition-colors duration-500 group-hover:text-foreground/80">
          {company.name}
        </span>
      )}
    </div>
  );

  const renderLogo = (company: Company, index: number, isDuplicate = false) => {
    const className = "group relative flex shrink-0 items-center justify-center py-3";

    if (isDuplicate || !company.url) {
      return (
        <div key={`${company.name}-${isDuplicate ? "duplicate" : "static"}-${index}`} aria-hidden={isDuplicate || undefined} className={className}>
          {renderLogoContent(company)}
        </div>
      );
    }

    return (
      <motion.a
        key={company.name}
        href={company.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={getText(language, `Abrir ${company.name}`, `Open ${company.name}`)}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className={className}
      >
        {renderLogoContent(company)}
      </motion.a>
    );
  };

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="relative isolate overflow-hidden py-16 lg:py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="texture-overlay absolute inset-0" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="relative lg:col-span-6">
            <motion.div variants={titleVariants} className="relative z-10">
              <motion.img
                src={collaborationsSignature}
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="async"
                variants={signatureVariants}
                className="mb-4 h-14 w-auto max-w-[min(68vw,320px)] select-none object-contain object-left mix-blend-screen sm:h-16 lg:h-[72px]"
              />
              <span className="sr-only">
                {getText(language, "Colaborações", "Collaborations")}
              </span>

              <h2 className="font-serif text-[2.35rem] font-semibold uppercase leading-[0.98] tracking-normal text-foreground sm:text-4xl md:text-5xl lg:text-[3.7rem] xl:text-[4.1rem]">
                <span className="block">{getText(language, "Colaborações", "Collaborations")}</span>
                <span className="mt-2 flex items-center gap-2.5 sm:gap-4">
                  <span className="font-sans text-[0.38em] font-light leading-none text-muted-foreground/55">
                    &
                  </span>
                  <span>{getText(language, "Parcerias", "Partnerships")}</span>
                </span>
              </h2>
            </motion.div>
          </div>

          <motion.div
            variants={descriptionVariants}
            className="flex items-start lg:col-span-5 lg:col-start-8 lg:justify-end lg:pt-10"
          >
            <div className="max-w-md">
              <p className="text-base leading-relaxed text-muted-foreground/90">
                {getText(
                  language,
                  "Atuo com empresas, comunidades e marcas onde tecnologia precisa sustentar reputação, operação e crescimento. Cada parceria é conduzida com clareza estratégica, execução cuidadosa e compromisso real com o resultado.",
                  "I collaborate with companies, communities and brands where technology has to support reputation, operations and growth. Each partnership is guided by strategic clarity, careful execution and a real commitment to outcomes."
                )}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={logosWrapperVariants} className="mt-10 lg:mt-14">
          <div
            className="relative overflow-hidden py-4 sm:py-5"
            style={{
              WebkitMaskImage: "linear-gradient(90deg, black 0%, black 96%, transparent 100%)",
              maskImage: "linear-gradient(90deg, black 0%, black 96%, transparent 100%)",
            }}
          >
            <motion.div
              className="collaborations-marquee-track flex w-max items-center"
              animate={marqueeWidth > 0 ? { x: [0, -marqueeWidth] } : { x: 0 }}
              transition={{ duration: 34, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            >
              <div ref={logoGroupRef} className="flex shrink-0 items-center gap-2 pl-4 pr-2 sm:gap-3 sm:pl-5 sm:pr-3 lg:gap-4 lg:pl-6 lg:pr-4">
                {companies.map((company, index) => renderLogo(company, index))}
              </div>
              <div className="flex shrink-0 items-center gap-2 pl-4 pr-2 sm:gap-3 sm:pl-5 sm:pr-3 lg:gap-4 lg:pl-6 lg:pr-4">
                {companies.map((company, index) => renderLogo(company, index, true))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyLogos;
