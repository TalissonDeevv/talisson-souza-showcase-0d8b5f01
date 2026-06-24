import { motion } from "framer-motion";
import { SIGNATURE_PATHS, SIG_VIEWBOX, SIG_TRANSFORM } from "./signature-paths";

interface AnimatedSignatureProps {
  className?: string;
}

const REVEAL_PATHS = [
  {
    d: "M62 280 C210 254 360 228 510 194 C690 154 845 112 1014 91 C1168 72 1321 82 1462 126 C1588 164 1690 226 1786 277 C1898 337 2018 371 2168 360 C2385 345 2577 261 2794 215",
    duration: 1.72,
    delay: 0.18,
    width: 118,
  },
  {
    d: "M498 530 C584 380 650 250 727 99 C770 18 825 -20 864 55 C895 113 852 208 805 289 C740 401 676 505 628 591",
    duration: 0.72,
    delay: 1.36,
    width: 102,
  },
  {
    d: "M885 414 C1010 330 1160 281 1303 290 C1412 296 1481 348 1468 416 C1453 497 1348 537 1238 515 C1152 498 1097 448 1116 394 C1138 332 1242 315 1369 354 C1516 399 1658 466 1817 500 C1991 538 2216 525 2453 472 C2593 441 2728 399 2856 346",
    duration: 1.52,
    delay: 2.0,
    width: 128,
  },
  {
    d: "M116 516 C324 430 563 370 816 345 C1028 324 1199 347 1412 399 C1626 451 1808 503 2040 505 C2320 507 2572 433 2840 326",
    duration: 1.38,
    delay: 2.86,
    width: 146,
  },
  {
    d: "M2385 230 C2426 187 2471 166 2518 170 C2565 174 2586 207 2565 244 C2537 296 2457 341 2390 330 C2336 321 2326 275 2385 230 Z",
    duration: 0.34,
    delay: 4.02,
    width: 72,
  },
  {
    d: "M2702 207 C2735 171 2776 154 2813 164 C2850 174 2862 207 2835 238 C2806 273 2749 294 2708 278 C2673 264 2672 240 2702 207 Z",
    duration: 0.26,
    delay: 4.28,
    width: 66,
  },
  {
    d: "M2832 196 C2868 160 2912 145 2948 158 C2980 170 2984 201 2952 229 C2917 260 2861 277 2822 263 C2790 251 2798 229 2832 196 Z",
    duration: 0.24,
    delay: 4.48,
    width: 64,
  },
];

const lineDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (path: (typeof REVEAL_PATHS)[number]) => ({
    pathLength: 1,
    opacity: [0, 0.88, 0.62, 0],
    transition: {
      pathLength: {
        duration: path.duration,
        delay: path.delay,
        ease: [0.47, 0, 0.2, 1],
      },
      opacity: {
        duration: path.duration + 0.24,
        delay: path.delay,
        times: [0, 0.14, 0.72, 1],
        ease: "easeOut",
      },
    },
  }),
};

const maskDraw = {
  hidden: { pathLength: 0 },
  visible: (path: (typeof REVEAL_PATHS)[number]) => ({
    pathLength: 1,
    transition: {
      duration: path.duration,
      delay: path.delay,
      ease: [0.47, 0, 0.2, 1],
    },
  }),
};

const AnimatedSignature = ({ className }: AnimatedSignatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative inline-block text-foreground drop-shadow-[0_14px_40px_hsl(var(--foreground)/0.12)] ${className ?? ""}`}
    >
      <svg
        viewBox={SIG_VIEWBOX}
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto select-none"
        aria-label="Talisson Souza"
        role="img"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="signature-ink-softness" x="-6%" y="-18%" width="112%" height="136%">
            <feGaussianBlur stdDeviation="0.45" />
          </filter>

          <mask id="signature-write-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="2918" height="612">
            <rect width="2918" height="612" fill="black" />
            {REVEAL_PATHS.map((path, index) => (
              <motion.path
                key={`mask-${index}`}
                d={path.d}
                fill="none"
                stroke="white"
                strokeWidth={path.width}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={maskDraw}
                custom={path}
                initial="hidden"
                animate="visible"
              />
            ))}
          </mask>
        </defs>

        <g mask="url(#signature-write-mask)">
          <g transform={SIG_TRANSFORM}>
            {SIGNATURE_PATHS.map((d, i) => (
              <path key={i} d={d} fill="currentColor" stroke="none" />
            ))}
          </g>
        </g>

        <g filter="url(#signature-ink-softness)" aria-hidden="true">
          {REVEAL_PATHS.map((path, index) => (
            <motion.path
              key={`ink-${index}`}
              d={path.d}
              fill="none"
              stroke="currentColor"
              strokeWidth={Math.max(8, path.width * 0.11)}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={lineDraw}
              custom={path}
              initial="hidden"
              animate="visible"
            />
          ))}
        </g>

        <motion.g
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4.8, delay: 0.16, times: [0, 0.04, 0.9, 1], ease: "easeOut" }}
        >
          <motion.ellipse
            cx="72"
            cy="280"
            rx="9"
            ry="5"
            fill="currentColor"
            animate={{
              cx: [72, 510, 1462, 2794, 628, 1369, 2840, 2948],
              cy: [280, 194, 126, 215, 591, 354, 326, 158],
              rotate: [-12, -8, 9, -5, 16, -10, -7, 2],
              scale: [0.8, 1.15, 0.95, 1, 0.9, 1.08, 0.92, 0.7],
            }}
            transition={{ duration: 4.72, delay: 0.18, ease: [0.47, 0, 0.2, 1] }}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default AnimatedSignature;
