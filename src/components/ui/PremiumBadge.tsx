import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumBadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "glow";
}

const PremiumBadge = ({
  children,
  className = "",
  variant = "default",
}: PremiumBadgeProps) => {
  const variants = {
    default:
      "bg-foreground/5 text-foreground/80 border-foreground/10",
    outline:
      "bg-transparent text-foreground/70 border-foreground/20",
    glow:
      "bg-foreground/10 text-foreground border-foreground/20 shadow-[0_0_15px_hsl(var(--foreground)/0.1)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full",
        "border backdrop-blur-sm transition-all duration-300",
        "hover:bg-foreground/10 hover:border-foreground/30",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default PremiumBadge;
