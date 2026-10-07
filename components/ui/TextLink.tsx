import type { ComponentProps } from "react";

// Ink (or Ember on dark) text; a quiet base underline, Ember underline scales in from the left on hover.
export function TextLink({ className = "", ...rest }: ComponentProps<"a">) {
  return (
    <a
      className={`relative inline-block text-accent-fg before:absolute before:inset-x-0 before:-bottom-1 before:h-px before:bg-current before:opacity-30 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left rtl:after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-(--dur-micro) after:ease-expo hover:after:scale-x-100 active:after:scale-x-100 ${className}`}
      {...rest}
    />
  );
}
