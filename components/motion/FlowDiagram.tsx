"use client";

import { useRef } from "react";
import { m, useInView } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";

const STEP = 0.45; // seconds for the line to travel from one node to the next
const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;
// Rail runs from the first node's dot to the last one's; dots sit 1.75rem from each node's top.
const RAIL = "absolute start-[calc(0.75rem-0.75px)] top-7 bottom-7";

// DESIGN.md §6 effect 5: the line draws on scroll, each node settles 0.96→1 as the line reaches it,
// then an Ember packet travels the path in a loop. The loop stops off-screen; reduced motion shows the final state.
export function FlowDiagram({ steps }: { steps: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { amount: 0.3, once: true });
  const visible = useInView(ref, { amount: 0.1 });
  const reduce = useReducedMotion();
  const drawn = seen || !!reduce;
  const total = STEP * (steps.length - 1);

  return (
    <div ref={ref} className="rounded-3xl border border-border bg-surface p-6 md:p-10">
      <div className="relative">
        <m.div
          aria-hidden
          className={`${RAIL} w-[1.5px] origin-top bg-border`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: drawn ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : total, ease: "linear" }}
        />

        {!reduce && seen && visible && (
          <div aria-hidden className={`${RAIL} w-0`}>
            <m.div
              className="absolute inset-0"
              initial={{ y: "-100%" }}
              animate={{ y: ["-100%", "0%"] }}
              transition={{ delay: total + 0.3, duration: total * 1.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.8 }}
            >
              <span className="absolute bottom-0 start-0 z-10 size-2.5 -translate-x-1/2 rtl:translate-x-1/2 translate-y-1/2 rounded-full bg-accent" />
            </m.div>
          </div>
        )}

        <ol className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <m.li
              key={step}
              className="relative ps-10"
              // initial does not depend on reduce: it is what renders on the server, where reduce is unknown.
              initial={{ opacity: 0, scale: 0.96 }}
              animate={drawn ? { opacity: 1, scale: 1 } : undefined}
              transition={reduce ? { duration: 0.2, scale: { duration: 0 } } : { ...spring, delay: i * STEP }}
            >
              <span
                aria-hidden
                className="absolute top-7 start-3 size-2.5 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-bg"
              />
              <div className="flex gap-4 rounded-2xl border border-border bg-bg px-5 py-4">
                <span className="t-label pt-[0.2rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0 font-medium">{step}</span>
              </div>
            </m.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
