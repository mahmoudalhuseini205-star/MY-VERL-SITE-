"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localePath, type Locale } from "@/lib/locale";

export function LocaleSwitch({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();
  const base = pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";

  return (
    <nav aria-label={label} className="t-label flex items-center">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span aria-hidden className="text-muted">/</span>}
          <Link
            href={localePath(l, base)}
            hrefLang={l}
            // No prefetch: the client router would read "/capabilities" as locale "capabilities" (TR lives at the root via a rewrite).
            prefetch={false}
            aria-current={l === current ? "true" : undefined}
            className={`grid min-h-11 min-w-11 place-items-center ${l === current ? "text-text" : "text-muted hover:text-text"}`}
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  );
}
