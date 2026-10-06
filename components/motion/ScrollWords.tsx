"use client";

import { useRef } from "react";
import { m, useScroll, useTransform, type MotionValue } from "motion/react";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <m.span className="rm-static" style={{ opacity }}>
      {word}{" "}
    </m.span>
  );
}

// Manifesto read-along: each word lights up as the sentence scrolls through the viewport.
// Scroll-linked, so it reads at the visitor's pace. Lines keep their breaks from md up. Reduced motion: full-strength text (.rm-static).
export function ScrollWords({ lines, className = "" }: { lines: string[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const total = lines.join(" ").split(" ").length;
  let n = 0;

  return (
    <p ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="md:block">
          {line.split(" ").map((word) => {
            const k = n++;
            return <Word key={k} word={word} progress={scrollYProgress} range={[k / total, (k + 1) / total]} />;
          })}
        </span>
      ))}
    </p>
  );
}
