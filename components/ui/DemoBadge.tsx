// Non-negotiable on every demo project tile and page hero (DESIGN.md §4).
export function DemoBadge() {
  return (
    <span lang="en" className="t-label inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-text">
      <span aria-hidden className="size-1.5 rounded-full bg-accent" />
      Demo System
    </span>
  );
}
