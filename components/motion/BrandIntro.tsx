import { ARM_OUTLINES, UNDERLINE, V_W } from "@/components/ui/vmark-geometry";

// Brand intro (DESIGN.md §6, effect 1): first visit per session only, ≤ 1.2s, pure CSS.
// The V draws itself in two strokes, the Ember underline slides in, then the curtain lifts.
// Hidden unless the head script sets html[data-intro="on"] (never for reduced motion or repeat visits).
// The page is already painted underneath, so it never delays content.
export const introScript = `(function(){var h=document.documentElement;try{if(sessionStorage.getItem("verl-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches){h.dataset.intro="off"}else{sessionStorage.setItem("verl-intro","1");h.dataset.intro="on"}}catch(e){h.dataset.intro="off"}})()`;

export function BrandIntro() {
  return (
    <div aria-hidden className="intro pointer-events-none fixed inset-0 z-[90] place-items-center bg-surface-inverse">
      <svg viewBox={`-40 -40 ${V_W + 80} ${UNDERLINE.y + UNDERLINE.h + 80}`} className="w-24 md:w-32">
        {ARM_OUTLINES.map((d) => (
          <path key={d} d={d} pathLength={1} fill="none" strokeWidth={14} strokeLinejoin="round" className="intro-stroke stroke-bg" />
        ))}
        <rect
          className="intro-underline fill-accent"
          x={UNDERLINE.x}
          y={UNDERLINE.y}
          width={UNDERLINE.w}
          height={UNDERLINE.h}
        />
      </svg>
    </div>
  );
}
