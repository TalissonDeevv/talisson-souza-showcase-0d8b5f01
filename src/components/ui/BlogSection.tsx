import { ReactNode } from "react";

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
        return "bg-gradient-to-r from-secondary/50 to-muted/50 dark:from-secondary/30 dark:to-muted/30 border-l-4 border-primary";
      case "code":
        return "bg-secondary dark:bg-secondary/50 border border-border";
      default:
        return "bg-card/50 dark:bg-card/30 border border-border/50";
    }
  };

  return (
    <section className={`p-6 rounded-xl ${getVariantClasses()} my-6`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        {children}
      </div>
    </section>
  );
};

export default BlogSection;