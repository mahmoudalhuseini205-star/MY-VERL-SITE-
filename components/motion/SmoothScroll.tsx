"use client";

import { useEffect } from "react";

// Lenis on desktop pointers only (DESIGN.md §7): no smoothing on touch or for reduced motion.
// Loaded after first paint as its own chunk.
export function SmoothScroll() {
  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { destroy(): void } | undefined;
    let done = false; // cleanup can run before the import resolves (Strict Mode)
    import("lenis").then(({ default: Lenis }) => {
      if (!done) lenis = new Lenis({ lerp: 0.12, autoRaf: true });
    });
    return () => {
      done = true;
      lenis?.destroy();
    };
  }, []);
  return null;
}
