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
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group block relative rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
      style={{ boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)' }}
    >
      {/* Banner */}
      <div className="relative h-32 rounded-t-2xl overflow-hidden">
        <img
          src={banner}
          alt={`${name} banner`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Logo - positioned outside the overflow-hidden banner */}
      <div className="absolute top-[104px] left-5 z-10">
        <div className="w-14 h-14 rounded-xl border-2 border-background bg-card overflow-hidden shadow-lg">
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-9 px-5 pb-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
            {name}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1" />
        </div>

        <span className="inline-block text-[10px] tracking-[0.15em] uppercase font-medium text-muted-foreground bg-secondary/50 px-2.5 py-1 rounded-full mb-3">
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
