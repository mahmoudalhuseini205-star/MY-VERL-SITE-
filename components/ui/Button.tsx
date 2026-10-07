import type { ComponentProps } from "react";
import Link from "next/link";
import { Magnetic } from "@/components/motion/Magnetic";

type Props = ComponentProps<"a"> & { href: string; variant?: "primary" | "secondary" };

const base =
  "group inline-flex min-h-12 items-center gap-3 rounded-full px-6 py-3.5 text-base font-medium duration-(--dur-micro) ease-expo active:translate-y-px active:scale-[0.98]";

const variants = {
  primary: "bg-accent text-on-accent transition-transform",
  secondary: "border border-border text-text transition-[transform,border-color] hover:border-text",
};

// Primary = the single Ember button per viewport (DESIGN.md §4), with a light magnetic pull. Internal hrefs use next/link.
export function Button({ variant = "primary", className = "", children, href, ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {variant === "primary" && (
        <span
          aria-hidden
          className="-me-3 grid size-7 place-items-center rounded-full bg-on-accent text-accent transition-transform duration-(--dur-micro) ease-expo group-hover:translate-x-1 group-active:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1 rtl:group-active:-translate-x-1"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h9.5M6.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      )}
    </>
  );
  const el = href.startsWith("/") ? (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={cls} {...rest}>
      {inner}
    </a>
  );
  return variant === "primary" ? <Magnetic>{el}</Magnetic> : el;
}
