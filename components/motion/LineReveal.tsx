"use client";

import type { ElementType } from "react";
import { m } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";

const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;

// Below-the-fold line-mask (DESIGN.md §6, effect 2): each line slides up out of its clip when the
// block reaches 20% visibility, staggered 80ms. Below md the lines flow as normal text (no orphaned words)
// and only fade, like LineMask (DESIGN.md §7): transform has no effect on the inline spans. Reduced motion: a short fade.
export function LineReveal({
  lines,
  as: Tag = "p",
  className = "",
}: {
  lines: string[];
  as?: ElementType;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <m.div initial="hidden" whileInView="shown" viewport={{ once: true, amount: 0.2 }}>
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="inline md:block md:overflow-hidden md:pb-[0.08em]">
            <m.span
              className="inline md:block"
              // hidden is the same either way: it is what renders on the server, where reduce is unknown.
              // Reduced motion snaps y back at once and only fades.
              variants={{
                hidden: { y: "110%", opacity: 0 },
                shown: {
                  y: 0,
                  opacity: 1,
                  transition: reduce ? { duration: 0.2, y: { duration: 0 } } : { ...spring, delay: i * 0.08 },
                },
              }}
            >
              {line}
              {i < lines.length - 1 && " "}
            </m.span>
          </span>
        ))}
      </Tag>
    </m.div>
  );
}
