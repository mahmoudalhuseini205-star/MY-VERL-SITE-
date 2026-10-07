import Link from "next/link";

// Quiet Mono link with an arrow that nudges on hover. `back` points left and tags the navigation
// "nav-back" so the page slides the other way (view transitions); forward links tag "nav-forward".
export function ArrowLink({
  href,
  children,
  back,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  back?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      transitionTypes={back ? ["nav-back"] : undefined}
      className={`float group inline-flex min-h-11 items-center gap-4 text-accent-fg transition-opacity active:opacity-70 ${className}`}
    >
      {back && (
        <span aria-hidden className="inline-block transition-transform duration-(--dur-micro) ease-expo group-hover:-translate-x-1 group-active:-translate-x-1 rtl:-scale-x-100 rtl:group-hover:translate-x-1 rtl:group-active:translate-x-1">
          ←
        </span>
      )}
      <span className="t-label">{children}</span>
      {!back && (
        <span aria-hidden className="inline-block transition-transform duration-(--dur-micro) ease-expo group-hover:translate-x-1 group-active:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1 rtl:group-active:-translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}
