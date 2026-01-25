import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Disable parallax on mobile for better performance
  const effectiveSpeed = isMobile ? 0 : speed;
  const y = useTransform(scrollYProgress, [0, 1], [`${-effectiveSpeed * 100}px`, `${effectiveSpeed * 100}px`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`} style={{ transform: 'translateZ(0)' }}>
      {/* Parallax background layer */}
      {backgroundElement && (
        <motion.div 
          className="absolute inset-0 pointer-events-none will-change-transform"
          style={{ y: isMobile ? 0 : y, opacity: isMobile ? 1 : opacity, transform: 'translateZ(0)' }}
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
