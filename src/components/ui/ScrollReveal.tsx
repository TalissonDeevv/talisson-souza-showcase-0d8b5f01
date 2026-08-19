import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Reduce animation distance on mobile
  const distance = isMobile ? 20 : 40;
  
  const directionVariants = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  // Faster animations on mobile
  const effectiveDuration = isMobile ? duration * 0.7 : duration;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionVariants[direction],
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : directionVariants[direction].x,
        y: isInView ? 0 : directionVariants[direction].y,
      }}
      transition={{
        duration: effectiveDuration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
      style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
