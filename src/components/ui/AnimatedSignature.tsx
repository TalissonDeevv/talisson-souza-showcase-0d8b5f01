import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { SIGNATURE_PATHS } from "./signature-paths";

interface AnimatedSignatureProps {
  className?: string;
}

/**
 * Real handwriting Motion Design of "Talisson Souza".
 *
 * Paths were vectorized from the user-provided signature image (potrace),
 * preserved in original order/coordinates and animated sequentially:
 *  - each path is first drawn as a stroke (write-on via strokeDashoffset)
 *  - the filled shape fades in right behind the moving stroke (ink bleed)
 * The result reads as a pen tracing the signature in natural left-to-right
 * order, instead of fading or typing in.
 */

// Potrace output viewBox + transform — expanded to include path overflow
// (bezier control points and strokes extend beyond the raw 1500x750 frame).
const VIEW_X = -340;
const VIEW_Y = 220;
const VIEW_W = 1860;
const VIEW_H = 810;
const POTRACE_TRANSFORM = "translate(0,750) scale(0.1,-0.1)";


const TOTAL_DURATION = 4.6; // seconds for the full write-on
const START_DELAY = 0.25;
const STROKE_FILL_OVERLAP = 0.55; // fill starts at 55% of stroke draw

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
      const duration = Math.max(0.18, (l / total) * TOTAL_DURATION);
      const delay = (acc / total) * TOTAL_DURATION;
      acc += l;
      return { duration, delay, length: l };
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
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto select-none overflow-visible"
        aria-label="Talisson Souza"
        role="img"
      >
        <g transform={POTRACE_TRANSFORM}>
          {SIGNATURE_PATHS.map((d, i) => {
            const len = lengths[i] ?? 0;
            const sch = schedule[i] ?? { duration: 0.3, delay: 0, length: 0 };
            const strokeDelay = START_DELAY + sch.delay;
            const fillDelay = strokeDelay + sch.duration * STROKE_FILL_OVERLAP;
            return (
              <g key={i}>
                {/* Outline pen-stroke that "writes" the letter (under fill) */}
                <motion.path
                  ref={(el) => (pathRefs.current[i] = el)}
                  d={d}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={12}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ strokeDashoffset: len || 2000 }}
                  animate={len ? { strokeDashoffset: 0 } : {}}
                  transition={{
                    duration: sch.duration,
                    delay: strokeDelay,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  style={{ strokeDasharray: len || 2000 }}
                />
                {/* Filled letter, fades in right behind the moving pen */}
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
