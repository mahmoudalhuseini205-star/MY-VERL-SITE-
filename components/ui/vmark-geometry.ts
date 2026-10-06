// The VERL V, traced from the logo construction grid (asset/Gemini_…png) into a 913 × 733 box.
// Each arm is three facets: outer (darkest), top (mid), inner (lit). The right arm mirrors the left.
// `normal` is the facet's 2D facing direction, used to shade it from the cursor's light.
type Pt = [number, number];

export const V_W = 913;
export const V_H = 733;

const left = {
  outer: [[0, 0], [208, 108], [445, 640], [445, 733]] as Pt[],
  top: [[0, 0], [275, 0], [208, 108]] as Pt[],
  inner: [[208, 108], [275, 0], [445, 445], [445, 640]] as Pt[],
};
const mirror = (pts: Pt[]): Pt[] => pts.map(([x, y]) => [V_W - x, y]);
const pts = (p: Pt[]) => p.map((q) => q.join(",")).join(" ");

export type Facet = { points: string; tone: "outer" | "top" | "inner"; normal: Pt };

export const FACETS: Facet[] = [
  { points: pts(left.outer), tone: "outer", normal: [-0.85, 0.3] },
  { points: pts(left.top), tone: "top", normal: [-0.2, -1] },
  { points: pts(left.inner), tone: "inner", normal: [0.75, -0.45] },
  { points: pts(mirror(left.outer)), tone: "outer", normal: [0.85, 0.3] },
  { points: pts(mirror(left.top)), tone: "top", normal: [0.2, -1] },
  { points: pts(mirror(left.inner)), tone: "inner", normal: [-0.75, -0.45] },
];

// Ember fold lines between the inner and outer facets.
export const EDGES: [number, number, number, number][] = [
  [208, 108, 445, 640],
  [V_W - 208, 108, V_W - 445, 640],
];

// Outline of each arm, drawn as one stroke in the brand intro.
export const ARM_OUTLINES = [
  "M0 0 L275 0 L445 445 L445 733 Z",
  `M${V_W} 0 L${V_W - 275} 0 L${V_W - 445} 445 L${V_W - 445} 733 Z`,
];

// Construction grid lines, as on the logo sheet.
export const CONSTRUCT_X = [0, 208, 275, 445, V_W / 2, V_W - 445, V_W - 275, V_W - 208, V_W];
export const CONSTRUCT_Y = [0, 108, 445, 640, 733];

// Ember underline, centered under the mark.
export const UNDERLINE = { x: V_W / 2 - 180, y: V_H + 64, w: 360, h: 14 };
