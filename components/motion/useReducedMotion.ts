// Single import point for the reduced-motion guard. Every loop, counter and JS-driven
// animation must check it (DESIGN.md §6 Accessibility). CSS animations use the media query.
export { useReducedMotion } from "motion/react";
