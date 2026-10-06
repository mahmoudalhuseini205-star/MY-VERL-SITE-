"use client";

import { useRef, useState } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { AnimatePresence, m, useMotionValueEvent, useScroll } from "motion/react";
import { pad } from "@/lib/locale";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { Reveal } from "@/components/motion/Reveal";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type Phase = { title: string; body: string; deliverable: string };

// DESIGN.md §6 effect 6: on desktop the left column (title + phase index) pins while the phases scroll,
// and an Ember line fills with scaleY tied to scroll. The phase in reading position stays in focus, the others dim,
// and the pinned index rolls to it. On mobile it is a stacked list with reveals.
export function Approach({
  index,
  title,
  phases,
  receive,
  link,
}: {
  index: string;
  title: string;
  phases: Phase[];
  receive: string;
  link?: { href: string; label: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.6"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.max(0, Math.min(phases.length - 1, Math.floor(v * phases.length)));
    if (next !== active) setActive(next);
  });

  return (
    <section aria-labelledby="approach-title" className="container-site section-y">
      <div className="grid gap-12 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <Reveal>
              <SectionIndex>{index}</SectionIndex>
              <h2 id="approach-title" className="t-h2 mt-6 max-w-[16ch] text-balance">
                {title}
              </h2>
            </Reveal>
            <div aria-hidden className="mt-14 hidden md:block">
              <p className="t-metric flex">
                <Roll k={active}>{pad(active + 1)}</Roll>
                <span className="text-muted">&nbsp;/ {pad(phases.length)}</span>
              </p>
              <p className="t-h3 mt-4 flex font-medium text-muted">
                <Roll k={active}>{phases[active].title}</Roll>
              </p>
            </div>
            {link && (
              <ArrowLink href={link.href} className="mt-10 md:mt-14">{link.label}</ArrowLink>
            )}
          </div>
        </div>

        <div ref={ref} className="relative md:col-span-6 md:col-start-7">
          <div aria-hidden className="absolute inset-y-0 start-0 hidden w-px bg-border md:block" />
          <m.div
            aria-hidden
            style={{ scaleY: scrollYProgress }}
            className="rm-static absolute inset-y-0 start-0 hidden w-px origin-top bg-accent md:block"
          />
          <ol className="flex flex-col gap-14 md:gap-[24vh] md:py-[8vh] md:ps-12">
            {phases.map((p, i) => (
              <li
                key={p.title}
                className={`transition-opacity duration-(--dur-section) ease-expo ${i === active ? "" : "md:opacity-35"}`}
              >
                <Reveal className="border-t border-border pt-6 md:border-0 md:pt-0">
                  <p className="t-label text-muted">{pad(i + 1)}</p>
                  <h3 className="t-h2 mt-4">{p.title}</h3>
                  <p className="t-body-l mt-4 text-muted">{p.body}</p>
                  <div className="mt-8 flex items-start gap-4 rounded-2xl border border-border bg-surface px-5 py-4">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <p>
                      <span className="t-label block text-muted">{receive}</span>
                      <span className="mt-1 block font-medium">{p.deliverable}</span>
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// Odometer-style swap: the old value slides up and out while the new one rises in (both share one grid cell).
function Roll({ k, children }: { k: number; children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <span className="inline-grid overflow-hidden pb-[0.08em]">
      <AnimatePresence initial={false}>
        <m.span
          key={k}
          className="[grid-area:1/1]"
          // animate is the same either way: it is what renders on the server, where reduce is unknown.
          initial={reduce ? { opacity: 0, y: 0 } : { opacity: 1, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0, y: 0 } : { opacity: 1, y: "-100%" }}
          transition={reduce ? { duration: 0.2 } : { type: "spring", stiffness: 300, damping: 30 }}
        >
          {children}
        </m.span>
      </AnimatePresence>
    </span>
  );
}
