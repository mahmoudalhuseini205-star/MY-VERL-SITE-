import type { CSSProperties, ElementType } from "react";

// Line-mask reveal (DESIGN.md §6, effect 2). CSS-only (see .line-mask in globals.css):
// the text is in the server HTML and animates without waiting for JS, so LCP is not delayed.
// ponytail: plays on page load; add an in-view trigger when a below-the-fold heading needs it.
export function LineMask({
  lines,
  as: Tag = "h1",
  className = "",
}: {
  lines: string[];
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag className={`line-mask ${className}`}>
      {lines.map((line, i) => (
        <span key={i}>
          <span style={{ "--i": i } as CSSProperties}>
            {line}
            {i < lines.length - 1 && " "}
          </span>
        </span>
      ))}
    </Tag>
  );
}
