"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, type Locale } from "@/lib/locale";

export type NavLabels = { label: string; capabilities: string; work: string; approach: string; company: string };

export const navItems = (locale: Locale, t: NavLabels) =>
  (["capabilities", "work", "approach", "company"] as const).map((key) => ({
    href: localePath(locale, `/${key}`),
    label: t[key],
  }));

// Main navigation (DESIGN.md §5). Campaign pages (/c/…) are never listed here.
export function NavLinks({
  locale,
  t,
  className = "",
  vertical = false,
}: {
  locale: Locale;
  t: NavLabels;
  className?: string;
  vertical?: boolean;
}) {
  const pathname = usePathname();
  return (
    <nav aria-label={t.label} className={className}>
      <ul className={vertical ? "flex flex-col gap-1" : "flex gap-7"}>
        {navItems(locale, t).map((l) => {
          const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`group relative inline-flex min-h-11 items-center text-sm transition-colors ${active ? "text-text" : "text-muted hover:text-text"}`}
              >
                {l.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 bottom-2.5 h-px origin-left bg-accent rtl:origin-right transition-transform duration-(--dur-micro) ease-expo ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
