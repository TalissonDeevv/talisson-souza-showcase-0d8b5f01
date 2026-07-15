import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const ParticlesBackground = () => {
  // Reduce particles on mobile for better performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 7 : 35;
  
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, [particleCount]);

  // Fewer orbs on mobile
  const orbs = isMobile ? [
    { x: '18%', y: '24%', size: 3, duration: 10, delay: 0 },
    { x: '78%', y: '42%', size: 3, duration: 12, delay: 1.5 },
  ] : [
    { x: '15%', y: '20%', size: 4, duration: 8, delay: 0 },
    { x: '85%', y: '30%', size: 3, duration: 10, delay: 2 },
    { x: '25%', y: '70%', size: 3.5, duration: 9, delay: 1 },
    { x: '75%', y: '80%', size: 2.5, duration: 11, delay: 3 },
    { x: '50%', y: '50%', size: 5, duration: 12, delay: 0.5 },
    { x: '10%', y: '45%', size: 2, duration: 7, delay: 4 },
    { x: '90%', y: '60%', size: 3, duration: 9, delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform" style={{ transform: 'translateZ(0)' }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-foreground will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            transform: 'translateZ(0)',
          }}
          animate={{
            y: isMobile ? [0, -34, 0] : [0, -100, 0],
            x: isMobile ? [0, 8, 0] : [0, Math.random() * 30 - 15, 0],
            opacity: [particle.opacity * 0.5, particle.opacity, particle.opacity * 0.5],
            scale: isMobile ? [1, 1.08, 1] : [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Larger floating orbs with glow */}
      {orbs.map((orb, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute rounded-full will-change-transform"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: 'hsl(var(--foreground))',
            boxShadow: isMobile ? 'none' : `0 0 ${orb.size * 4}px ${orb.size}px hsl(var(--foreground) / 0.15)`,
            transform: 'translateZ(0)',
          }}
          animate={{
            y: isMobile ? [0, -18, 0] : [0, -40, 0],
            opacity: isMobile ? [0.16, 0.28, 0.16] : [0.2, 0.5, 0.2],
            scale: isMobile ? [1, 1.12, 1] : [1, 1.3, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connecting lines effect - subtle (hidden on mobile) */}
      {!isMobile && (
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <motion.line
            x1="10%"
            y1="20%"
            x2="30%"
            y2="40%"
            stroke="hsl(var(--foreground))"
            strokeWidth="0.5"
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="70%"
            y1="30%"
            x2="85%"
            y2="50%"
            stroke="hsl(var(--foreground))"
            strokeWidth="0.5"
            animate={{
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.line
            x1="40%"
            y1="60%"
            x2="60%"
            y2="80%"
            stroke="hsl(var(--foreground))"
            strokeWidth="0.5"
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </svg>
      )}
    </div>
  );
};

export default ParticlesBackground;
