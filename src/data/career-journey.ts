import type { CareerJourneyItem } from "@/components/ui/timeline";
import cheetahLogo from "@/assets/logos/cheetah-solutions.png";
import hostingerLogo from "@/assets/logos/hostinger.png";
import mynexisLogo from "@/assets/logos/mynexis.png";
import rocketLogo from "@/assets/logos/rocketseat.png";
import shopeeLogo from "@/assets/logos/shopee.png";
import splendoriLogo from "@/assets/logos/splendori.png";
import squareLogo from "@/assets/logos/square-cloud.png";

type Language = "pt" | "en";

export function getCareerJourneyItems(language: Language): CareerJourneyItem[] {
  const isEnglish = language === "en";

  return [
    {
      id: "cheetah-solutions-2020",
      year: "2020",
      date: isEnglish ? "May 2020 - Present" : "mai 2020 - presente",
      company: "Cheetah Solutions",
      role: isEnglish ? "Founder and CEO" : "Fundador e CEO",
      status: isEnglish ? "Current position" : "Atuação atual",
      description: isEnglish
        ? "Leadership, technical direction and development of digital systems focused on automation, reliability and sustainable growth."
        : "Liderança, direção técnica e desenvolvimento de sistemas digitais com foco em automação, confiabilidade e crescimento sustentável.",
      logo: cheetahLogo,
      logoClassName: "max-h-10 max-w-[180px]",
    },
    {
      id: "square-cloud-2025",
      year: "2025",
      date: isEnglish
        ? "Sep 2025 - Sep 15, 2026"
        : "set 2025 - 15 set 2026",
      company: "Square Cloud",
      role: isEnglish ? "Former Strategic Partner" : "Ex-parceiro estratégico",
      status: isEnglish ? "Completed experience" : "Experiência encerrada",
      description: isEnglish
        ? "Collaboration involving development, support, community strategy and feedback on products and user experience."
        : "Colaboração em desenvolvimento, suporte, estratégia de comunidade e feedback sobre produtos e experiência do usuário.",
      logo: squareLogo,
    },
    {
      id: "rocketseat-2025",
      year: "2025",
      date: isEnglish ? "Nov 2025 - May 2026" : "nov 2025 - mai 2026",
      company: "Rocketseat",
      role: isEnglish
        ? "Technology Content Creator and Former Partner"
        : "Criador de conteúdo de tecnologia e ex-parceiro",
      status: isEnglish ? "Completed experience" : "Experiência encerrada",
      description: isEnglish
        ? "Technology, software development and career content created for the Brazilian developer ecosystem."
        : "Conteúdo sobre tecnologia, desenvolvimento de software e carreira produzido para o ecossistema brasileiro de desenvolvedores.",
      logo: rocketLogo,
    },
    {
      id: "splendori-2026",
      year: "2026",
      date: isEnglish ? "Mar 2026 - Present" : "mar 2026 - presente",
      company: "Splendori",
      role: isEnglish ? "Strategic Partner" : "Parceiro estratégico",
      status: isEnglish ? "Current partnership" : "Parceria atual",
      description: isEnglish
        ? "Strategic collaboration on web products, landing pages, automations and SaaS initiatives."
        : "Colaboração estratégica em produtos web, landing pages, automações e iniciativas SaaS.",
      logo: splendoriLogo,
      logoClassName: "max-h-10 max-w-[116px]",
    },
    {
      id: "hostinger-2026",
      year: "2026",
      date: isEnglish ? "Jul 6, 2026 - Present" : "6 jul 2026 - presente",
      company: "Hostinger",
      role: isEnglish ? "Affiliate and Content Creator" : "Afiliado e criador de conteúdo",
      status: isEnglish ? "Current activity" : "Atuação atual",
      description: isEnglish
        ? "Technology-focused content and public promotion of hosting products, services and digital solutions."
        : "Conteúdo voltado à tecnologia e divulgação pública de produtos, serviços de hospedagem e soluções digitais.",
      logo: hostingerLogo,
    },
    {
      id: "shopee-2026",
      year: "2026",
      date: isEnglish ? "Jul 11, 2026 - Present" : "11 jul 2026 - presente",
      company: "Shopee",
      role: isEnglish ? "Affiliate" : "Afiliado",
      status: isEnglish ? "Current activity" : "Atuação atual",
      description: isEnglish
        ? "Product curation and affiliate activity focused on technology, setups and the gaming universe."
        : "Curadoria de produtos e atuação como afiliado com foco em tecnologia, setups e universo gamer.",
      logo: shopeeLogo,
      logoClassName: "max-h-10 max-w-[148px]",
    },
    {
      id: "mynexis-2026",
      year: "2026",
      date: isEnglish ? "From Aug 17, 2026 - Ended" : "desde 17 ago 2026 - encerrada",
      company: "Mynexis",
      role: isEnglish ? "Former Content Supervisor" : "Ex-supervisor de conteúdo",
      status: isEnglish ? "Completed experience" : "Experiência encerrada",
      description: isEnglish
        ? "Content supervision and operational support in the AGON by AOC Discord community, including reports and event organization."
        : "Supervisão de conteúdo e apoio operacional na comunidade AGON by AOC no Discord, incluindo relatórios e organização de eventos.",
      logo: mynexisLogo,
    },
  ];
}
