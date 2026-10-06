import { FACETS, UNDERLINE, V_H, V_W } from "./vmark-geometry";

const tone = { outer: "var(--v-outer)", top: "var(--v-top)", inner: "var(--v-inner)" };

// Static faceted V (CTA block, menu). The animated version lives in SystemArchitecture.
export function VMark({ className = "", underline = true }: { className?: string; underline?: boolean }) {
  const h = underline ? UNDERLINE.y + UNDERLINE.h : V_H;
  return (
    <svg aria-hidden viewBox={`0 0 ${V_W} ${h}`} className={className}>
      {FACETS.map((f) => (
        <polygon key={f.points} points={f.points} style={{ fill: tone[f.tone] }} />
      ))}
      {underline && <rect x={UNDERLINE.x} y={UNDERLINE.y} width={UNDERLINE.w} height={UNDERLINE.h} className="fill-accent" />}
    </svg>
  );
}
