"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useLoopGate } from "./useLoopGate";
import {
  CONSTRUCT_X,
  CONSTRUCT_Y,
  EDGES,
  FACETS,
  UNDERLINE,
  V_H,
  V_W,
} from "@/components/ui/vmark-geometry";

// The Blueprint (DESIGN.md §4, "Blueprint statement"): the manifesto sits on a live engineering grid next to
// the system architecture — the faceted V, joined to WEB · AI · AUTOMATION · CRM · DATA by paths that each
// carry an Ember packet. One rAF loop drives the grid spotlight, the facet shading, the packets and the tilt,
// and runs only while the section is on screen (useLoopGate). The drawing assembles once, when scrolled into
// view (CSS, gated by data-in). Reduced motion: static grid, the V fully drawn, no packets, spotlight or tilt.

const CELL = 40;
const VB = 520; // architecture viewBox
const S = 0.36; // V scale inside it
const VX = (VB - V_W * S) / 2;
const VY = 112;
const C: [number, number] = [VB / 2, 250]; // every path bends through the V
// WEB, AI, AUTOMATION, CRM, DATA.
const POS: [number, number][] = [
  [80, 56],
  [440, 56],
  [440, 432],
  [80, 432],
  [260, 494],
];
const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 2],
  [2, 4],
  [4, 3],
  [3, 0],
  [1, 3],
];
const at = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;
const tone = {
  outer: "var(--v-outer)",
  top: "var(--v-top)",
  inner: "var(--v-inner)",
};

export function BlueprintStage({
  nodes,
  children,
}: {
  nodes: string[];
  children: ReactNode;
}) {
  const section = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const tilt = useRef<HTMLDivElement>(null);
  const shades = useRef<(SVGPolygonElement | null)[]>([]);
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const packets = useRef<(SVGCircleElement | null)[]>([]);
  const [inView, setInView] = useState(false);
  const run = useLoopGate(section);

  // Assemble once, when a fifth of the section is visible.
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setInView(true);
        io.disconnect();
      },
      { threshold: 0.2 },
    );
    io.observe(section.current!);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = section.current!;
    const cv = canvas.current!;
    // Captured once: React detaches refs before this cleanup runs, and the ResizeObserver fires on removal.
    const sv = svg.current!;
    const ctx = cv.getContext("2d")!;
    const fine = matchMedia("(pointer: fine)").matches;
    let W = 0;
    let H = 0;
    let R = 210;
    let grid = "11,12,16";
    let ember = "217,125,84";
    const vc = { x: 0, y: 0 }; // V centre in section coordinates
    const pointer = { x: 0, y: 0, last: -1e9 };
    const spot = { x: 0, y: 0 };
    let raf = 0;

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      grid = cs.getPropertyValue("--grid-rgb").trim().split(/\s+/).join(",");
      ember = cs.getPropertyValue("--ember-rgb").trim().split(/\s+/).join(",");
    };
    const draw = (lit: boolean) => {
      ctx.clearRect(0, 0, W, H);
      for (let x = 0; x <= W; x += CELL) {
        ctx.strokeStyle = `rgba(${grid},${x % (CELL * 4) ? 0.05 : 0.09})`;
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, H);
        ctx.stroke();
      }
      for (let y = 0; y <= H; y += CELL) {
        ctx.strokeStyle = `rgba(${grid},${y % (CELL * 4) ? 0.05 : 0.09})`;
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(W, y + 0.5);
        ctx.stroke();
      }
      if (!lit) return;
      // Spotlight: intersections near the cursor get a crosshair and an Ember dot leaning 6% toward it.
      const x0 = Math.max(0, Math.floor((spot.x - R) / CELL)) * CELL;
      const y0 = Math.max(0, Math.floor((spot.y - R) / CELL)) * CELL;
      for (let gx = x0; gx <= Math.min(W, spot.x + R); gx += CELL)
        for (let gy = y0; gy <= Math.min(H, spot.y + R); gy += CELL) {
          const dx = spot.x - gx;
          const dy = spot.y - gy;
          const d = Math.hypot(dx, dy);
          if (d >= R) continue;
          const k = 1 - d / R;
          const px = gx + dx * k * 0.06;
          const py = gy + dy * k * 0.06;
          ctx.fillStyle = `rgba(${ember},${k * 0.9})`;
          ctx.fillRect(px - 1.5, py - 1.5, 3, 3);
          ctx.strokeStyle = `rgba(${grid},${k * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(px - 6, py);
          ctx.lineTo(px + 6, py);
          ctx.moveTo(px, py - 6);
          ctx.lineTo(px, py + 6);
          ctx.stroke();
        }
    };
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = el.clientWidth;
      H = el.clientHeight;
      R = fine && W >= 768 ? 210 : 150;
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const s = el.getBoundingClientRect();
      const v = sv.getBoundingClientRect();
      vc.x = v.left - s.left + ((VX + (V_W * S) / 2) / VB) * v.width;
      vc.y = v.top - s.top + ((VY + (V_H * S) / 2) / VB) * v.height;
      // Node labels keep ~10.5px on screen however small the drawing gets (phones).
      sv.style.setProperty(
        "--lk",
        String(Math.max(1, 496 / v.width)),
      );
      if (!raf) draw(false);
    };

    const frame = (now: number) => {
      // Idle for 1.5s or never touched: the spotlight drifts on a slow Lissajous path.
      const idle = now - pointer.last > 1500;
      const tx = idle ? W * (0.55 + 0.3 * Math.sin(now / 2300)) : pointer.x;
      const ty = idle ? H * (0.5 + 0.35 * Math.sin(now / 1700 + 1)) : pointer.y;
      spot.x += (tx - spot.x) * 0.08;
      spot.y += (ty - spot.y) * 0.08;
      draw(true);

      // Facets read as lit from the cursor: Sand overlay by the dot product with each facet's normal.
      const dx = spot.x - vc.x;
      const dy = spot.y - vc.y;
      const len = Math.hypot(dx, dy) || 1;
      FACETS.forEach((f, i) => {
        const lit = Math.max(0, (dx * f.normal[0] + dy * f.normal[1]) / len);
        shades.current[i]?.setAttribute("opacity", (lit * 0.32).toFixed(3));
      });

      // The structure tilts toward the spotlight: max 4° with a mouse, 3° on touch.
      if (tilt.current) {
        const m = fine ? 4 : 3;
        const c = (n: number) => Math.max(-m, Math.min(m, n));
        tilt.current.style.transform = `perspective(900px) rotateX(${c((-dy / H) * 8)}deg) rotateY(${c((dx / W) * 8)}deg)`;
      }

      // One Ember packet per path, one trip every 3.6–6.1s.
      paths.current.forEach((p, i) => {
        const dot = packets.current[i];
        if (!p || !dot || !p.getClientRects().length) return;
        const pt = p.getPointAtLength(
          ((now / (3600 + i * 410) + i / LINKS.length) % 1) *
            p.getTotalLength(),
        );
        dot.setAttribute("cx", pt.x.toFixed(1));
        dot.setAttribute("cy", pt.y.toFixed(1));
      });
      raf = requestAnimationFrame(frame);
    };

    // Mouse moves, or a finger taps/drags (scrolling stays native: passive listeners).
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.last = performance.now();
    };

    readColors();
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    const mo = new MutationObserver(() => {
      readColors();
      if (!raf) draw(false);
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    if (run) {
      spot.x = W * 0.6;
      spot.y = H * 0.5;
      el.addEventListener("pointermove", onMove, { passive: true });
      el.addEventListener("pointerdown", onMove, { passive: true });
      raf = requestAnimationFrame(frame);
    }
    return () => {
      cancelAnimationFrame(raf);
      raf = 0;
      ro.disconnect();
      mo.disconnect();
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerdown", onMove);
    };
  }, [run]);

  return (
    <section
      ref={section}
      data-in={inView || undefined}
      className="arch relative isolate overflow-hidden bg-bg section-y"
    >
      <canvas
        ref={canvas}
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      />
      <div className="container-site grid gap-14 md:grid-cols-12 md:items-center md:gap-6">
        <div className="md:col-span-7">{children}</div>
        <div
          ref={tilt}
          className="mx-auto w-full max-w-[26rem] md:col-span-5 md:max-w-[32rem]"
        >
          <svg
            ref={svg}
            aria-hidden
            viewBox={`0 0 ${VB} ${VB}`}
            className="w-full overflow-visible text-text"
          >
            <g transform={`translate(${VX} ${VY}) scale(${S})`}>
              {CONSTRUCT_X.map((x, i) => (
                <line
                  key={`x${x}`}
                  x1={x}
                  y1={-60}
                  x2={x}
                  y2={V_H + 60}
                  pathLength={1}
                  className="arch-construct"
                  style={at(i * 0.04)}
                  stroke="currentColor"
                  strokeOpacity={0.14}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
              {CONSTRUCT_Y.map((y, i) => (
                <line
                  key={`y${y}`}
                  x1={-60}
                  y1={y}
                  x2={V_W + 60}
                  y2={y}
                  pathLength={1}
                  className="arch-construct"
                  style={at(i * 0.04)}
                  stroke="currentColor"
                  strokeOpacity={0.14}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </g>
            <g
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.24}
              strokeWidth={1.5}
            >
              {LINKS.map(([a, b], i) => (
                <path
                  key={i}
                  ref={(n) => {
                    paths.current[i] = n;
                  }}
                  d={`M${POS[a][0]} ${POS[a][1]} Q${C[0]} ${C[1]} ${POS[b][0]} ${POS[b][1]}`}
                  pathLength={1}
                  className="arch-path"
                  style={at(i * 0.08)}
                />
              ))}
            </g>
            <g className="arch-packets">
              {LINKS.map(([a], i) => (
                <circle
                  key={i}
                  ref={(n) => {
                    packets.current[i] = n;
                  }}
                  r={3.2}
                  cx={POS[a][0]}
                  cy={POS[a][1]}
                  className="arch-packet fill-accent"
                />
              ))}
            </g>
            <g transform={`translate(${VX} ${VY}) scale(${S})`}>
              {FACETS.map((f, i) => (
                <g key={f.points} className="arch-facet" style={at(i * 0.06)}>
                  <polygon points={f.points} style={{ fill: tone[f.tone] }} />
                  <polygon
                    ref={(n) => {
                      shades.current[i] = n;
                    }}
                    points={f.points}
                    style={{ fill: "var(--v-light)" }}
                    opacity={0}
                  />
                </g>
              ))}
              {EDGES.map(([x1, y1, x2, y2]) => (
                <line
                  key={x1}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  pathLength={1}
                  className="arch-edge stroke-accent"
                  strokeWidth={7}
                />
              ))}
              <rect
                x={UNDERLINE.x}
                y={UNDERLINE.y}
                width={UNDERLINE.w}
                height={UNDERLINE.h}
                className="arch-underline fill-accent"
              />
            </g>
            {nodes.map((label, i) => {
              const w = label.length * 7.4 + 34;
              // Long labels (Arabic AI) move inward so the pill, scaled up to ~1.5x on phones, stays on screen.
              const x = Math.min(POS[i][0], VB + 12 - w * 0.75);
              return (
                <g
                  key={label}
                  transform={`translate(${x} ${POS[i][1]})`}
                >
                  <g className="arch-label">
                    <g className="arch-node" style={at(i * 0.08)}>
                      <rect
                        x={-w / 2}
                        y={-14}
                        width={w}
                        height={28}
                        rx={14}
                        className="fill-bg"
                        stroke="currentColor"
                        strokeOpacity={0.3}
                      />
                      <circle
                        cx={-w / 2 + 13}
                        cy={0}
                        r={3}
                        className="fill-accent"
                      />
                      <text
                        x={7}
                        y={4}
                        textAnchor="middle"
                        className="fill-current font-mono text-[11px] font-medium tracking-[0.1em]"
                      >
                        {label}
                      </text>
                    </g>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
