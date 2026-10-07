"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { localePath, pad, type Locale } from "@/lib/locale";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/content/site";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { navItems, type NavLabels } from "./NavLinks";
import { LocaleSwitch } from "./LocaleSwitch";
import { ThemeToggle } from "./ThemeToggle";

const ease = [0.22, 1, 0.36, 1] as const;

// Full-screen mobile menu (DESIGN.md §7): links reveal with the line-mask animation.
// Esc and any navigation close it; scroll is locked while open; focus returns to the button.
export function MobileMenu({
  locale,
  t,
  cta,
  themeLabel,
  languageLabel,
}: {
  locale: Locale;
  t: NavLabels & { open: string; close: string; menu: string };
  cta: string;
  themeLabel: string;
  languageLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const first = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  // Close on navigation (adjusting state during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    // The page behind leaves the tab order and the accessibility tree. Not aria-modal: the close button lives outside the dialog.
    const behind = document.querySelectorAll<HTMLElement>("#main, footer");
    behind.forEach((el) => (el.inert = true));
    first.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    const btn = button.current;
    return () => {
      root.style.overflow = "";
      behind.forEach((el) => (el.inert = false));
      removeEventListener("keydown", onKey);
      btn?.focus();
    };
  }, [open]);

  const items = navItems(locale, t);
  const start = localePath(locale, "/start");

  return (
    <div className="md:hidden">
      <button
        ref={button}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? t.close : t.open}
        className="relative z-[60] grid size-11 place-items-center rounded-full text-text transition-transform duration-(--dur-micro) ease-expo active:scale-90"
      >
        <span aria-hidden className="relative block h-3 w-5">
          <span
            className={`absolute inset-x-0 top-0 h-[1.5px] bg-current transition-transform duration-(--dur-micro) ease-expo ${open ? "translate-y-[5.25px] rotate-45" : ""}`}
          />
          <span
            className={`absolute inset-x-0 bottom-0 h-[1.5px] bg-current transition-transform duration-(--dur-micro) ease-expo ${open ? "-translate-y-[5.25px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-label={t.menu}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-bg px-[clamp(1rem,4vw,3rem)] pt-24 pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.15 : 0.3, ease }}
          >
            <nav aria-label={t.label}>
              <ul className="flex flex-col">
                {items.map((l, i) => {
                  const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
                  return (
                    <li key={l.href} className="border-b border-border">
                      <Link
                        ref={i === 0 ? first : undefined}
                        href={l.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline gap-4 py-4 transition-opacity active:opacity-60"
                      >
                        <span className="t-label text-muted">{pad(i + 1)}</span>
                        <span className="block overflow-hidden pb-[0.08em]">
                          <m.span
                            className="t-h1 block"
                            initial={reduce ? { opacity: 0 } : { y: "110%" }}
                            animate={reduce ? { opacity: 1 } : { y: 0 }}
                            transition={{ duration: reduce ? 0.2 : 0.7, ease, delay: reduce ? 0 : 0.08 + i * 0.08 }}
                          >
                            {l.label}
                          </m.span>
                        </span>
                        {active && <span aria-hidden className="ms-auto size-2 self-center rounded-full bg-accent" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <m.div
              className="mt-auto flex flex-col gap-8 pt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: reduce ? 0 : 0.4 }}
            >
              <Link
                href={start}
                onClick={() => setOpen(false)}
                className="group inline-flex min-h-12 items-center gap-3 self-start rounded-full bg-accent px-6 py-3.5 font-medium text-on-accent transition-transform duration-(--dur-micro) ease-expo active:scale-[0.98]"
              >
                {cta}
                <span aria-hidden className="-me-3 grid size-7 place-items-center rounded-full bg-on-accent text-accent rtl:-scale-x-100">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h9.5M6.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </Link>
              <div className="flex items-center justify-between gap-4 border-t border-border pt-6">
                <div className="flex flex-col">
                  <a href={PHONE_HREF} dir="ltr" className="t-label inline-flex min-h-11 items-center text-muted">
                    {PHONE_DISPLAY}
                  </a>
                  <a href={EMAIL_HREF} className="t-label inline-flex min-h-11 items-center text-muted normal-case">
                    {EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <LocaleSwitch current={locale} label={languageLabel} />
                  <ThemeToggle label={themeLabel} />
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
