"use client";

import { useEffect, useState, type RefObject } from "react";
import { useReducedMotion } from "./useReducedMotion";

// DESIGN.md §6 Accessibility: perpetual loops run only while on screen, the tab is visible,
// and the visitor has not asked for reduced motion. Every loop in the site gates on this.
export function useLoopGate(ref: RefObject<Element | null>) {
  const reduce = useReducedMotion();
  const [onScreen, setOnScreen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting));
    io.observe(el);
    const onVis = () => setVisible(!document.hidden);
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [ref]);

  return onScreen && visible && !reduce;
}
