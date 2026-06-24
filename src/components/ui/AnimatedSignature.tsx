import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { SIGNATURE_PATHS, SIG_VIEWBOX, SIG_TRANSFORM } from "./signature-paths";

interface AnimatedSignatureProps {
  className?: string;
}

/**
 * Realistic handwriting Motion Design of "Talisson Souza".
 * Paths vectorized from the user-provided signature image (potrace, tight
 * viewBox) and animated as a true sequential write-on: each glyph is first
 * traced by a moving pen-stroke, then the filled shape fades in right behind
 * it (ink bleed), so the signature appears to be written by hand from left
 * to right rather than typed or faded.
 */

const TOTAL_DURATION = 4.8; // full write-on
const START_DELAY = 0.25;
const STROKE_FILL_OVERLAP = 0.55;

const AnimatedSignature = ({ className }: AnimatedSignatureProps) => {
  const pathRefs = useRef<Array<SVGPathElement | null>>([]);
  const [lengths, setLengths] = useState<number[]>([]);

  useEffect(() => {
    const ls = pathRefs.current.map((p) => (p ? p.getTotalLength() : 0));
    setLengths(ls);
  }, []);

  const schedule = useMemo(() => {
    const total = lengths.reduce((a, b) => a + b, 0) || 1;
    let acc = 0;
    return SIGNATURE_PATHS.map((_, i) => {
      const l = lengths[i] ?? 0;
      const duration = Math.max(0.2, (l / total) * TOTAL_DURATION);
      const delay = (acc / total) * TOTAL_DURATION;
      acc += l;
      return { duration, delay };
    });
  }, [lengths]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative inline-block text-foreground ${className ?? ""}`}
    >
      <svg
        viewBox={SIG_VIEWBOX}
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto select-none"
        aria-label="Talisson Souza"
        role="img"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform={SIG_TRANSFORM}>
          {SIGNATURE_PATHS.map((d, i) => {
            const len = lengths[i] ?? 0;
            const sch = schedule[i] ?? { duration: 0.3, delay: 0 };
            const strokeDelay = START_DELAY + sch.delay;
            const fillDelay = strokeDelay + sch.duration * STROKE_FILL_OVERLAP;
            return (
              <g key={i}>
                <motion.path
                  ref={(el) => (pathRefs.current[i] = el)}
                  d={d}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={28}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDashoffset: len || 4000 }}
                  animate={len ? { strokeDashoffset: 0 } : {}}
                  transition={{
                    duration: sch.duration,
                    delay: strokeDelay,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  style={{ strokeDasharray: len || 4000 }}
                />
                <motion.path
                  d={d}
                  fill="currentColor"
                  stroke="none"
                  initial={{ opacity: 0 }}
                  animate={len ? { opacity: 1 } : {}}
                  transition={{
                    duration: sch.duration * 0.55,
                    delay: fillDelay,
                    ease: "easeOut",
                  }}
                />
              </g>
            );
          })}
        </g>
      </svg>
    </motion.div>
  );
};

export default AnimatedSignature;
