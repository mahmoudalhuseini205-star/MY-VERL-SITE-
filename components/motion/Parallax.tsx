"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "motion/react";

// Image drift inside its clip: the picture moves a little slower than the page, which gives the frame depth.
// Scaled up so the edges never show. Parent must clip (overflow-hidden). Reduced motion: still (.rm-static).
export function Parallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-3.5%", "3.5%"]);

  return (
    <m.div ref={ref} className="rm-static" style={{ y, scale: 1.08 }}>
      {children}
    </m.div>
  );
}
