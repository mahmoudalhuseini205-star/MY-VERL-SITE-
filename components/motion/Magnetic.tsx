"use client";

import type { PointerEvent } from "react";
import { m, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";

const PULL = 0.2; // share of the cursor offset the button follows
const spring = { stiffness: 300, damping: 30 }; // DESIGN.md §6 snappy spring

// The primary button leans a few pixels toward a mouse cursor and springs back on leave.
// Motion values only, so the pointer never re-renders React. Touch, pen and reduced motion: inert.
export function Magnetic({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), spring);
  const y = useSpring(useMotionValue(0), spring);

  const move = (e: PointerEvent<HTMLSpanElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * PULL);
    y.set((e.clientY - r.top - r.height / 2) * PULL);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.span className="inline-block" style={{ x, y }} onPointerMove={move} onPointerLeave={leave}>
      {children}
    </m.span>
  );
}
