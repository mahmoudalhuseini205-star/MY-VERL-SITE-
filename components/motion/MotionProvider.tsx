"use client";

import { LazyMotion } from "motion/react";

// Animation features load in a separate chunk, after first paint (DESIGN.md §6 performance budget).
const loadFeatures = () => import("./features").then((m) => m.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
