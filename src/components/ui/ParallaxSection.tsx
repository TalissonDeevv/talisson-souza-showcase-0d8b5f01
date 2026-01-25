import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative = opposite direction
  backgroundElement?: ReactNode;
}

const ParallaxSection = ({ 
  children, 
  className = "", 
  speed = 0.15,
  backgroundElement 
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax background layer */}
      {backgroundElement && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ y, opacity }}
        >
          {backgroundElement}
        </motion.div>
      )}
      
      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
