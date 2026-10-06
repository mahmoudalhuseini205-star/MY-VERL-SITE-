"use client";

import { useScroll, useMotionValueEvent, type UseScrollOptions } from "motion/react";
import type { RefObject } from "react";

// Publishes the scroll progress of `ref` (0 → 1) as the CSS variable --p on that element, so the scene's
// transforms live in CSS (globals.css) and React never re-renders on scroll. Reduced motion is handled in
// CSS: the stylesheet pins --p with !important, which wins over this inline value.
export function useScrollVar(ref: RefObject<HTMLElement | null>, offset: UseScrollOptions["offset"]) {
  const { scrollYProgress } = useScroll({ target: ref, offset });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    ref.current?.style.setProperty("--p", v.toFixed(4));
  });
}
