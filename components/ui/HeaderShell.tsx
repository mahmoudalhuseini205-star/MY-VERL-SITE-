"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

// Sticky header that steps out of the way: it slides up while reading down and returns on any scroll up.
// The frosted background and border sit on their own layer, and the transform is only set while hidden:
// either one on the <header> itself would trap the fixed mobile menu inside the header box.
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 8);
    const dy = y - (scrollY.getPrevious() ?? 0);
    if (Math.abs(dy) > 4) setHidden(dy > 0 && y > 240);
  });

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      onFocusCapture={() => setHidden(false)}
      className={`sticky top-0 z-40 transition-[translate] duration-(--dur-element) ease-expo ${hidden ? "-translate-y-full" : ""}`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 border-b bg-bg/90 backdrop-blur-xl transition-colors duration-(--dur-element) ${scrolled ? "border-border" : "border-transparent"}`}
      />
      {children}
    </header>
  );
}
