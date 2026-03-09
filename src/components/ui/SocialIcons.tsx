interface SocialIconsProps {
  className?: string;
}

const SocialIcons = ({ className = "" }: SocialIconsProps) => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/TalinhoDev" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/talinho" },
    { name: "Instagram", href: "https://instagram.com/talissondev" },
    { name: "YouTube", href: "https://www.youtube.com/TalissonSouza" },
  ];

  return (
    <div className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label={link.name}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;