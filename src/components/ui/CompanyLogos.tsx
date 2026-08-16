import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { cn } from "@/lib/utils";

import cheetahLogo from "@/assets/logos/cheetah-solutions.png";
import squareCloudLogo from "@/assets/logos/square-cloud.png";
import quackPayLogo from "@/assets/logos/quack-pay.png";
import rocketseatLogo from "@/assets/logos/rocketseat.png";
import splendoriLogo from "@/assets/logos/splendori.png";
import shoopeLogo from "@/assets/logos/shoope.png";
import sostingerLogo from "@/assets/logos/hostinger.png";
import collaborationsSignature from "@/assets/collaborations-signature.png";

const premiumEase = [0.16, 1, 0.3, 1] as const;

type Company = {
  name: string;
  logo: string;
  url: string;
  imageClassName?: string;
  showLabel?: boolean;
};

const companies: Company[] = [
  {
    name: "Cheetah Solutions",
    logo: cheetahLogo,
    url: "https://cheetahsolutions.com.br",
    imageClassName: "max-h-8 max-w-[132px] sm:max-h-10 sm:max-w-[220px] xl:max-h-12 xl:max-w-[260px]",
  },
  {
    name: "Square Cloud",
    logo: squareCloudLogo,
    url: "https://squarecloud.app",
    imageClassName: "max-h-8 max-w-[126px] sm:max-h-10 sm:max-w-[170px] xl:max-h-11 xl:max-w-[190px]",
  },
  {
    name: "Quack Pay",
    logo: quackPayLogo,
    url: "https://quackpay.com.br",
    imageClassName: "max-h-8 max-w-[126px] sm:max-h-10 sm:max-w-[170px] xl:max-h-11 xl:max-w-[190px]",
  },
  {
    name: "Rocketseat",
    logo: rocketseatLogo,
    url: "https://www.rocketseat.com.br/oferta/influencer/v2/talinho",
    imageClassName: "max-h-8 max-w-[126px] sm:max-h-10 sm:max-w-[170px] xl:max-h-11 xl:max-w-[190px]",
  },
  {
    name: "Splendori",
    logo: splendoriLogo,
    url: "https://www.linkedin.com/company/splendoribr/",
    imageClassName: "h-12 w-12 rounded-sm object-cover lg:h-14 lg:w-14",
    showLabel: true,
  },
  {
    name: "Shoope",
    logo: shoopeLogo,
    url: "https://collshp.com/talisson.dev?view=storefront",
    imageClassName: "max-h-8 max-w-[126px] sm:max-h-10 sm:max-w-[170px] xl:max-h-11 xl:max-w-[190px]",
    {
    name: "Hostinger",
    logo: hostingerLogo,
    url: "https://www.hostinger.com/br?REFERRALCODE=talissonsouza",
    imageClassName: "max-h-8 max-w-[126px] sm:max-h-10 sm:max-w-[170px] xl:max-h-11 xl:max-w-[190px]",
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

  const renderLogo = (company: Company, index: number, isDuplicate = false) => {
    const content = (
      <div className="relative flex flex-col items-center gap-2.5">
        <img
          src={company.logo}
          alt={company.name}
          loading="lazy"
          decoding="async"
          className={cn(
            "h-auto w-auto object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100",
            company.imageClassName
          )}
        />

        {company.showLabel && (
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/65 transition-colors duration-500 group-hover:text-foreground/80">
            {company.name}
          </span>
        )}
      </div>
    );

    if (isDuplicate) {
      return (
        <div
          key={`${company.name}-duplicate-${index}`}
          aria-hidden="true"
          className="group relative flex min-w-[124px] items-center justify-center py-3 sm:min-w-[150px] lg:min-w-[172px]"
        >
          {content}
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
        className="group relative flex min-w-[124px] items-center justify-center py-3 sm:min-w-[150px] lg:min-w-[172px]"
      >
        {content}
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
              WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 9%, black 91%, transparent 100%)",
              maskImage: "linear-gradient(90deg, transparent 0%, black 9%, black 91%, transparent 100%)",
            }}
          >
            <motion.div
              className="collaborations-marquee-track flex w-max items-center"
              animate={marqueeWidth > 0 ? { x: [0, -marqueeWidth] } : { x: 0 }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            >
              <div ref={logoGroupRef} className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10 lg:gap-12 lg:pr-12">
                {companies.map((company, index) => renderLogo(company, index))}
              </div>
              <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10 lg:gap-12 lg:pr-12">
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
