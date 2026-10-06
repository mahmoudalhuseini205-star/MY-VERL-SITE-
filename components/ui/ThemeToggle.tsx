"use client";

import type { MouseEvent } from "react";

// Circular reveal from the button via the View Transitions API (DESIGN.md §6, effect 9).
// No API or reduced motion → plain instant swap.
export function ThemeToggle({ label }: { label: string }) {
  function toggle(e: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };

    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    root.dataset.vt = "theme"; // scopes the no-crossfade CSS to this transition only
    const vt = document.startViewTransition(apply);
    vt.finished.finally(() => delete root.dataset.vt);
    vt.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 600, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-11 place-items-center rounded-full text-text transition-[background-color,transform] duration-(--dur-micro) ease-expo hover:bg-surface active:scale-95"
    >
      {/* Icon follows data-theme via CSS, so server and client markup always match. */}
      <svg aria-hidden width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="9" r="7.25" />
        <path d="M9 1.75a7.25 7.25 0 0 1 0 14.5z" fill="currentColor" className="dark:hidden" />
        <path d="M9 1.75a7.25 7.25 0 0 0 0 14.5z" fill="currentColor" className="hidden dark:block" />
      </svg>
    </button>
  );
}
