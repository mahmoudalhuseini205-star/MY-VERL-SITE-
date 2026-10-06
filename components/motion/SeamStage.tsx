"use client";

import { useRef, type ReactNode } from "react";
import { useScrollVar } from "./useScrollVar";

// The peak (DESIGN.md §6): a tall section whose sticky stage reads --p across its pinned travel.
// Everything that moves is CSS in globals.css (.seam-*). Reduced motion: no pin, final frame.
export function SeamStage({ children, label }: { children: ReactNode; label: string }) {
  const root = useRef<HTMLElement>(null);
  useScrollVar(root, ["start start", "end end"]);
  return (
    <section ref={root} data-theme="dark" aria-labelledby={label} className="seam relative">
      <div className="seam-stage sticky top-0 overflow-hidden">{children}</div>
    </section>
  );
}
