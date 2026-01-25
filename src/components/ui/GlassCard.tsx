import { motion } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

const GlassCard = ({
  children,
  className = "",
  hover = true,
  glow = true,
  delay = 0,
}: GlassCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={hover && !isMobile ? { y: -4, transition: { duration: 0.3 } } : undefined}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "border border-border/50 bg-card/80",
        // Use lighter blur on mobile
        isMobile ? "backdrop-blur-sm" : "backdrop-blur-xl",
        "transition-shadow duration-500",
        hover && !isMobile && "hover:shadow-[0_20px_40px_-15px_hsl(var(--foreground)/0.15)]",
        glow && !isMobile && "hover:border-foreground/20",
        className
      )}
      style={
        {
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`,
          transform: 'translateZ(0)',
        } as React.CSSProperties
      }
    >
      {/* Spotlight effect - disabled on mobile */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--foreground) / 0.04), transparent 40%)`,
          }}
        />
      )}

      {/* Glow border - disabled on mobile */}
      {glow && !isMobile && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--foreground) / 0.15), transparent 40%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
