import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface LetterRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

const LetterReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  staggerDelay = 0.03,
  as: Tag = "span"
}: LetterRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const letters = children.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.5
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  };

  return (
    <Tag ref={ref} className={cn("inline-block", className)}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-flex"
        aria-label={children}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
            style={{ 
              whiteSpace: letter === " " ? "pre" : "normal",
              minWidth: letter === " " ? "0.25em" : "auto"
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default LetterReveal;
