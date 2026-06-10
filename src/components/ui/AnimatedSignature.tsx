import { motion } from "framer-motion";
import logoSignature from "@/assets/logo-signature.png";

interface AnimatedSignatureProps {
  className?: string;
}

/**
 * Reveals the signature image left to right as if being handwritten.
 * Re-runs on every mount (page reload / route entry).
 */
const AnimatedSignature = ({ className }: AnimatedSignatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative inline-block ${className ?? ""}`}
    >
      {/* Hidden image to reserve correct intrinsic size */}
      <img
        src={logoSignature}
        alt="Talisson Souza"
        className="h-full w-auto invert dark:invert-0 opacity-0 select-none pointer-events-none"
        draggable={false}
      />

      {/* Animated reveal layer */}
      <motion.div
        aria-hidden
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.4, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
        className="absolute inset-0"
      >
        <img
          src={logoSignature}
          alt=""
          className="h-full w-auto invert dark:invert-0 select-none pointer-events-none"
          draggable={false}
        />
      </motion.div>

      {/* Pen tip indicator that travels with the reveal edge */}
      <motion.span
        aria-hidden
        initial={{ left: "0%", opacity: 0 }}
        animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2.4,
          ease: [0.65, 0, 0.35, 1],
          delay: 0.2,
          times: [0, 0.05, 0.95, 1],
        }}
        className="absolute top-1/2 -translate-y-1/2 h-[70%] w-[2px] rounded-full bg-foreground/60 dark:bg-foreground/80 blur-[1px]"
      />
    </motion.div>
  );
};

export default AnimatedSignature;
