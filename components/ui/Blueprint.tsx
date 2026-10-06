// Designed placeholder for a missing image (never stock photos): engineering grid, a framed
// drawing area with construction diagonals and corner ticks, and a Mono label ("SALON — SCREEN 01").
// Uses theme tokens only, so it works on the page, inside cards and inside the inverse Work block.
export function Blueprint({
  label,
  width,
  height,
  alt,
}: {
  label: string;
  width: number;
  height: number;
  alt: string;
}) {
  const tick = "absolute size-3 border-text/40";
  return (
    <div
      role="img"
      aria-label={alt}
      style={{ aspectRatio: `${width} / ${height}` }}
      className="blueprint-bg relative w-full overflow-hidden bg-surface"
    >
      <div className="absolute inset-x-[8%] top-[8%] bottom-[calc(8%+1.75rem)] border border-text/15">
        <svg aria-hidden className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 0 L100 100 M100 0 L0 100" className="stroke-text/10" strokeWidth={1} vectorEffect="non-scaling-stroke" fill="none" />
        </svg>
        <span className={`${tick} -top-px -left-px border-t border-l`} />
        <span className={`${tick} -top-px -right-px border-t border-r`} />
        <span className={`${tick} -bottom-px -left-px border-b border-l`} />
        <span className={`${tick} -right-px -bottom-px border-r border-b`} />
      </div>
      <div className="absolute inset-x-[8%] bottom-[8%] flex items-center justify-between gap-4">
        <span className="t-label flex min-w-0 items-center gap-2 truncate text-[0.6875rem] text-muted">
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent" />
          {label}
        </span>
        <span className="t-label hidden text-[0.6875rem] text-muted sm:inline">
          {width} × {height}
        </span>
      </div>
    </div>
  );
}
