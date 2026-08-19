import type { IconType } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

interface SocialIconsProps {
  className?: string;
}

interface SocialLink {
  name: string;
  href: string;
  Icon: IconType;
}

const SocialIcons = ({ className = "" }: SocialIconsProps) => {
  const socialLinks: SocialLink[] = [
    { name: "GitHub", href: "https://github.com/TalinhoDev", Icon: FaGithub },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/talinho",
      Icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/talissondev",
      Icon: FaInstagram,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/TalissonSouza",
      Icon: FaYoutube,
    },
  ];

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2.5 ${className}`}
    >
      {socialLinks.map(({ href, Icon, name }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-9 items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3.5 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-foreground/[0.07] hover:text-foreground hover:shadow-[0_10px_30px_hsl(var(--foreground)/0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
          aria-label={name}
        >
          <Icon
            className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
