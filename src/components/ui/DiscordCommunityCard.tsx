import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface DiscordCommunityCardProps {
  name: string;
  description: string;
  logo: string;
  banner: string;
  link: string;
  role: string;
}

const DiscordCommunityCard = ({ name, description, logo, banner, link, role }: DiscordCommunityCardProps) => {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative block overflow-hidden rounded-lg border border-border/25 bg-card/25 backdrop-blur-sm transition-colors duration-500 hover:border-foreground/20"
      style={{ boxShadow: '0 16px 44px hsl(0 0% 0% / 0.16)' }}
    >
      <div className="pointer-events-none absolute inset-x-5 top-0 z-10 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Banner */}
      <div className="relative h-28 overflow-hidden bg-secondary/20">
        {!bannerLoaded && (
          <div className="absolute inset-0 animate-pulse bg-secondary/50" />
        )}
        <img
          src={banner}
          alt={`${name} banner`}
          className={`w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 ${bannerLoaded ? 'opacity-80' : 'opacity-0'}`}
          loading="eager"
          decoding="sync"
          onLoad={() => setBannerLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
      </div>

      {/* Logo - positioned outside the overflow-hidden banner */}
      <div className="absolute left-5 top-[88px] z-10">
        <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-foreground/10 bg-background shadow-[0_12px_28px_hsl(0_0%_0%/0.35)]">
          {!logoLoaded && (
            <div className="absolute inset-0 animate-pulse bg-secondary/50" />
          )}
          <img
            src={logo}
            alt={`${name} logo`}
            className={`w-full h-full object-cover transition-opacity duration-200 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="eager"
            decoding="sync"
            onLoad={() => setLogoLoaded(true)}
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-10">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
            {name}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1" />
        </div>

        <span className="mb-3 inline-block border border-border/30 bg-secondary/35 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          {role}
        </span>

        <p className="text-xs text-muted-foreground/80 leading-[1.8] line-clamp-3">
          {description}
        </p>
      </div>
    </motion.a>
  );
};

export default DiscordCommunityCard;
