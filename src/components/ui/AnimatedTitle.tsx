import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  children: string;
  className?: string;
  variant?: "default" | "hero" | "section";
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4";
}

const AnimatedTitle = ({ 
  children, 
  className = "", 
  variant = "default",
  delay = 0,
  as: Tag = "h2"
}: AnimatedTitleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const words = children.split(" ");

  const getVariantStyles = () => {
    switch (variant) {
      case "hero":
        return "font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground leading-[1.1]";
      case "section":
        return "font-serif text-2xl lg:text-3xl xl:text-4xl text-foreground leading-[1.15]";
      default:
        return "font-serif text-xl lg:text-2xl text-foreground";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -90,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <Tag ref={ref} className={cn(getVariantStyles(), className)}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-flex flex-wrap"
        style={{ perspective: "1000px" }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mr-[0.25em] origin-bottom"
            style={{ transformStyle: "preserve-3d" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default AnimatedTitle;
