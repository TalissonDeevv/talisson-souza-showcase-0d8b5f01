import Lenis from "lenis";
import type { LenisOptions } from "lenis";
import { useEffect, type ReactNode } from "react";

const smoothScrollOptions: LenisOptions = {
  lerp: 0.08,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.15,
  anchors: true,
  autoRaf: true,
};

type SmoothScrollProps = {
  children: ReactNode;
};

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    const lenis = new Lenis(smoothScrollOptions);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div style={{ display: "contents" }}>{children}</div>;
};

export default SmoothScroll;
