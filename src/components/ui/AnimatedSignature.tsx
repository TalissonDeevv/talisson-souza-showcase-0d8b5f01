import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface AnimatedSignatureProps {
  className?: string;
}

/**
 * Real handwriting Motion Design of "Talisson Souza".
 *
 * Authored as single-stroke cursive paths (one path per letter group), so
 * animating strokeDashoffset reads as an actual pen traveling across the
 * page in natural writing order. A soft pen tip rides the leading edge.
 *
 * Re-runs on every mount (page reload / route entry).
 */

const VIEW_W = 820;
const VIEW_H = 240;
const TOTAL_DURATION = 4.2; // seconds

// Cursive script — single continuous strokes per letter group, left to right.
const STROKES: string[] = [
  // T crossbar
  "M 55 60 C 90 50 130 50 170 60",
  // T stem + small terminal curl
  "M 115 55 C 110 95 108 135 120 175 C 128 195 142 200 156 192",
  // a
  "M 178 130 C 170 112 152 110 144 124 C 134 144 142 170 162 174 C 176 176 188 162 190 146 C 190 130 190 116 192 102 C 190 132 190 162 200 180 C 206 190 216 188 222 180",
  // l
  "M 234 60 C 236 100 234 140 238 175 C 240 188 248 192 258 186",
  // i (stem)
  "M 274 130 C 272 145 270 162 274 176 C 278 186 286 186 294 180",
  // i (dot)
  "M 278 110 L 281 110",
  // s
  "M 314 134 C 308 124 294 124 290 134 C 287 144 300 150 311 154 C 321 158 323 168 315 175 C 305 182 293 178 288 170",
  // s
  "M 350 134 C 344 124 330 124 326 134 C 323 144 336 150 347 154 C 357 158 359 168 351 175 C 341 182 329 178 324 170",
  // o
  "M 390 144 C 382 134 367 134 362 148 C 357 162 364 178 378 178 C 392 178 400 164 398 150 C 396 138 388 132 378 134",
  // n + flowing flourish into next word
  "M 414 175 C 414 160 416 145 420 132 C 422 145 426 160 430 175 C 430 162 434 148 442 138 C 450 130 460 134 462 144 C 462 158 460 172 464 184 C 470 200 484 202 500 192 C 516 180 528 165 535 148",
  // S (capital)
  "M 575 95 C 570 80 553 75 540 84 C 526 94 528 112 544 118 C 560 124 574 132 570 148 C 566 162 548 166 533 158 C 522 152 518 142 521 132",
  // o
  "M 615 134 C 608 124 593 124 588 138 C 583 152 590 168 604 168 C 618 168 626 154 624 140 C 622 128 614 122 604 124",
  // u
  "M 640 124 C 638 140 637 156 641 168 C 647 178 657 178 663 168 C 667 158 669 144 671 132 C 669 148 671 166 675 178 C 681 188 691 188 697 178",
  // z
  "M 715 130 C 730 128 745 128 755 132 C 735 145 715 160 700 175 C 715 175 735 175 755 172",
  // a (final) + terminal flourish
  "M 786 134 C 778 124 764 124 759 138 C 754 152 761 168 774 168 C 786 168 794 156 792 142 C 792 130 792 118 794 108 C 792 130 792 152 798 168 C 804 182 816 184 826 175",
];

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
    return STROKES.map((_, i) => {
      const l = lengths[i] ?? 0;
      const duration = Math.max(0.16, (l / total) * TOTAL_DURATION);
      const delay = (acc / total) * TOTAL_DURATION;
      acc += l;
      return { duration, delay, length: l };
    });
  }, [lengths]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
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
        <g
          stroke="currentColor"
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {STROKES.map((d, i) => {
            const len = lengths[i] ?? 0;
            const sch = schedule[i] ?? { duration: 0.3, delay: 0, length: 0 };
            return (
              <motion.path
                key={i}
                ref={(el) => (pathRefs.current[i] = el)}
                d={d}
                initial={{ strokeDashoffset: len || 600 }}
                animate={len ? { strokeDashoffset: 0 } : {}}
                transition={{
                  duration: sch.duration,
                  delay: 0.25 + sch.delay,
                  ease: [0.42, 0, 0.58, 1],
                }}
                style={{ strokeDasharray: len || 600 }}
              />
            );
          })}
        </g>

        {/* Pen tip — follows roughly along the writing path */}
        <motion.circle
          r={3.6}
          fill="currentColor"
          initial={{ cx: 60, cy: 90, opacity: 0 }}
          animate={{
            cx: [60, 160, 240, 320, 400, 500, 600, 700, 800],
            cy: [90, 140, 150, 150, 150, 160, 150, 150, 160],
            opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0],
          }}
          transition={{
            duration: TOTAL_DURATION,
            delay: 0.25,
            times: [0, 0.1, 0.22, 0.34, 0.46, 0.58, 0.7, 0.88, 1],
            ease: "easeInOut",
          }}
          style={{ filter: "drop-shadow(0 0 6px currentColor)" }}
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedSignature;
