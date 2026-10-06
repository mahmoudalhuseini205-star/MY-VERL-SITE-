"use client";

import { m } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";

const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;

// Scroll reveal (DESIGN.md §6, effect 4): opacity 0→1, y 32→0 once the top passes 80% of the viewport.
// A margin, not `amount`, so blocks taller than 5 viewports (long walkthroughs) still reveal.
// Reduced motion: opacity only, 200ms.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      transition={reduce ? { duration: 0.2, y: { duration: 0 } } : { ...spring, delay }}
    >
      {children}
    </m.div>
  );
}
