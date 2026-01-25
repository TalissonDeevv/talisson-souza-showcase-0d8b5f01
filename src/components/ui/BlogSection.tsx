import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlogSectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "highlight" | "code";
}

const BlogSection = ({ title, children, icon, variant = "default" }: BlogSectionProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "highlight":
        return "bg-gradient-to-br from-foreground/[0.03] to-transparent border-l-2 border-foreground/20";
      case "code":
        return "bg-card/50 border border-border/30";
      default:
        return "bg-card/30 border border-border/20";
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "p-6 lg:p-8 rounded-2xl backdrop-blur-sm my-8",
        getVariantClasses()
      )}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon && (
          <div className="w-10 h-10 rounded-xl border border-border/30 bg-background/50 flex items-center justify-center">
            {icon}
          </div>
        )}
        <h3 className="font-serif text-xl lg:text-2xl text-foreground">
          {title}
        </h3>
      </div>
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-foreground prose-code:bg-card/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-a:text-foreground prose-a:underline hover:prose-a:no-underline">
        {children}
      </div>
    </motion.section>
  );
};

export default BlogSection;
