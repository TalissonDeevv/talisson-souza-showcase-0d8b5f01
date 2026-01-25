import { motion } from "framer-motion";
import { CheckCircle, Star, Circle } from "lucide-react";

interface TechListProps {
  title: string;
  items: string[];
  variant?: "requirements" | "features" | "benefits";
}

const TechList = ({ title, items, variant = "requirements" }: TechListProps) => {
  const getIcon = () => {
    switch (variant) {
      case "features":
        return CheckCircle;
      case "benefits":
        return Star;
      default:
        return Circle;
    }
  };

  const Icon = getIcon();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-5 my-5"
    >
      <h4 className="font-serif text-base text-foreground mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-start gap-3"
          >
            <Icon className="w-4 h-4 text-foreground/50 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TechList;
