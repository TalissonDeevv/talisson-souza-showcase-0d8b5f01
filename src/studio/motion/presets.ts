import type { Transition, Variants } from "framer-motion";

export const studioSpring: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 34,
  mass: 0.75,
};

export const studioEase: Transition = {
  duration: 0.18,
  ease: [0.22, 1, 0.36, 1],
};

export const studioPageTransition: Transition = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1],
};

export const studioPageVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

export const studioStaggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.035,
    },
  },
};

export const studioStaggerItem: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: studioEase },
};

export const studioHover = {
  y: -1,
  transition: studioSpring,
};

export const studioPress = {
  scale: 0.985,
};
