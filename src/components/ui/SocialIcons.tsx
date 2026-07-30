import type { IconType } from "react-icons";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

interface SocialIconsProps {
  className?: string;
  centered?: boolean;
  showLabels?: boolean;
}

interface SocialLink {
  name: string;
  href: string;
  Icon: IconType;
  hoverBg: string;
  tooltipBg: string;
}

const SocialIcons = ({ className = "", centered = false, showLabels = true }: SocialIconsProps) => {
  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      href: "https://instagram.com/talissondev",
      Icon: FaInstagram,
      hoverBg: "bg-[linear-gradient(40deg,#0000ff,#f56040)]",
      tooltipBg: "bg-[linear-gradient(30deg,#0000ff,#f56040)]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/talinho",
      Icon: FaLinkedinIn,
      hoverBg: "bg-[#0274b3]",
      tooltipBg: "bg-[#0274b3]",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5581993964261",
      Icon: FaWhatsapp,
      hoverBg: "bg-[#25d366]",
      tooltipBg: "bg-[#25d366]",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/TalissonSouza",
      Icon: FaYoutube,
      hoverBg: "bg-[#ff0000]",
      tooltipBg: "bg-[#ff0000]",
    },
  ];

  return (
    <div
      className={`relative flex flex-wrap items-center gap-4 ${centered ? "justify-center" : "justify-start"} ${className}`}
    >
      {socialLinks.map(({ href, Icon, name, hoverBg, tooltipBg }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={name}
          className="group relative inline-flex h-12 w-12 items-center justify-center overflow-visible rounded-full bg-white text-[#0c0c0c] shadow-[0_10px_30px_hsl(var(--foreground)/0.06)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[5px_5px_18px_rgba(24,23,23,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
          aria-label={name}
        >
          <span
            className={`pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 scale-0 rounded px-2 py-1 text-xs font-medium text-white opacity-0 shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 ${tooltipBg}`}
          >
            {name}
          </span>
          <span
            className={`absolute bottom-0 left-0 z-0 h-0 w-full rounded-full transition-all duration-300 group-hover:h-full group-focus-visible:h-full ${hoverBg}`}
            aria-hidden="true"
          />
          <Icon
            className="relative z-10 h-6 w-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          {showLabels && <span className="sr-only">{name}</span>}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
