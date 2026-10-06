"use client";

import { useRef, type ReactNode } from "react";
import { useScrollVar } from "./useScrollVar";

// The close settles as it arrives: --p runs while the section scrolls into view (.close-* in globals.css).
export function CloseStage({ children, label }: { children: ReactNode; label: string }) {
  const root = useRef<HTMLElement>(null);
  useScrollVar(root, ["start end", "end end"]);
  return (
    <section ref={root} data-theme="dark" aria-label={label} className="close relative isolate overflow-hidden">
      {children}
    </section>
  );
}
