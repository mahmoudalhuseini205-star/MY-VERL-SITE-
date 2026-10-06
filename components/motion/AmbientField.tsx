"use client";

import { useEffect, useRef } from "react";

// The ambient field: a fixed canvas behind every page, so the canvas is never dead below the hero.
// It continues the Blueprint language (DESIGN.md §4): a faint dot lattice on the 40px grid that drifts at
// half the scroll speed, a soft cursor spotlight, and a few Ember "signals" running along the grid lines like
// data through a system. Signals bend toward the cursor, speed up with scroll, and a click on empty canvas
// sends four out from that point. It fades in below any [data-ambient-start] element (the Home hero, inner
// page intros) so it never doubles their own grid. Opaque blocks (cards, the Work chapter) simply cover it.
// Reduced motion: the static lattice only, redrawn on scroll. Paused while the tab is hidden.

const CELL = 40;
const PARALLAX = 0.5; // the field moves at half the scroll speed: depth behind the content
const R = 220; // spotlight radius
const TRAIL = 120; // px of trail behind each signal
const TURN = 0.28; // chance to turn at an intersection
const FADE = 260; // px over which the field fades in below the start element

type Signal = { x: number; y: number; dx: number; dy: number; age: number; life: number; trail: { x: number; y: number }[] };

export function AmbientField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(pointer: fine)").matches;
    let W = 0;
    let H = 0;
    let grid = "11,12,16";
    let ember = "217,125,84";
    let start: Element | null = null;
    let startAt = 0; // viewport y where the field becomes fully visible
    const pointer = { x: -1e4, y: -1e4, last: -1e9 };
    const spot = { x: -1e4, y: -1e4, k: 0 };
    let signals: Signal[] = [];
    let vel = 0;
    let lastY = scrollY;

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      grid = cs.getPropertyValue("--grid-rgb").trim().split(/\s+/).join(",");
      ember = cs.getPropertyValue("--ember-rgb").trim().split(/\s+/).join(",");
    };
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth;
      H = innerHeight;
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    // Visibility of the field at a viewport y: 0 inside the start element, ramping to 1 below it.
    const fieldAlpha = (y: number) => Math.max(0, Math.min(1, (y - startAt + FADE) / FADE));
    const offset = () => (scrollY * PARALLAX) % CELL;

    // Colours are set once per pass and only globalAlpha changes per point: building and parsing an
    // rgba() string for every intersection, every frame, was most of the field's CPU cost.
    const lattice = (now: number) => {
      const off = offset();
      const s = spot.k;
      const hot: number[] = []; // x, y, alpha of Ember dots, drawn on top in a second pass
      ctx.fillStyle = ctx.strokeStyle = `rgb(${grid})`;
      for (let y = -off; y <= H + CELL; y += CELL) {
        const a = fieldAlpha(y);
        if (a <= 0) continue;
        const major = (Math.round((y + scrollY * PARALLAX) / CELL) & 3) === 0;
        for (let i = 0, x = 0; x <= W; i++, x += CELL) {
          const d = s ? Math.hypot(spot.x - x, spot.y - y) : R;
          const k = d < R ? (1 - d / R) * s : 0;
          if (major && (i & 3) === 0) {
            // Major intersection: a small cross, as on the hero grid.
            const arm = 2.5 + k * 4;
            ctx.globalAlpha = (0.14 + k * 0.3) * a;
            ctx.beginPath();
            ctx.moveTo(x - arm, y + 0.5);
            ctx.lineTo(x + arm, y + 0.5);
            ctx.moveTo(x + 0.5, y - arm);
            ctx.lineTo(x + 0.5, y + arm);
            ctx.stroke();
          } else {
            // A slow breathing wave across the lattice keeps it alive even when nothing else moves.
            const wave = reduce ? 0 : 0.03 * Math.sin(now / 1800 + x / 260 + (y + scrollY * PARALLAX) / 340);
            const size = 1 + k * 1.5;
            ctx.globalAlpha = (0.1 + wave + k * 0.25) * a;
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
          }
          if (k > 0.35) hot.push(x, y, (k - 0.35) * 1.2 * a);
        }
      }
      ctx.fillStyle = `rgb(${ember})`;
      for (let i = 0; i < hot.length; i += 3) {
        ctx.globalAlpha = hot[i + 2];
        ctx.fillRect(hot[i] - 1.5, hot[i + 1] - 1.5, 3, 3);
      }
      ctx.globalAlpha = 1; // signals carry their alpha in rgba()
    };

    // Signals live in "field" coordinates (y includes the parallax scroll), so they drift with the lattice.
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const spawn = (x?: number, y?: number, dir?: number[]): Signal => {
      const fy = scrollY * PARALLAX;
      const minY = Math.max(0, startAt);
      const sx = x ?? Math.round((Math.random() * W) / CELL) * CELL;
      const sy = y ?? Math.round((fy + minY + Math.random() * Math.max(CELL, H - minY)) / CELL) * CELL;
      const [dx, dy] = dir ?? dirs[(Math.random() * 4) | 0];
      return { x: sx, y: sy, dx, dy, age: 0, life: 5 + Math.random() * 5, trail: [] };
    };

    const step = (sg: Signal, dist: number) => {
      sg.trail.push({ x: sg.x, y: sg.y });
      // Move cell by cell so turns happen exactly on intersections.
      while (dist > 0) {
        const tx = sg.dx ? (sg.dx > 0 ? Math.floor(sg.x / CELL + 1) : Math.ceil(sg.x / CELL - 1)) * CELL : sg.x;
        const ty = sg.dy ? (sg.dy > 0 ? Math.floor(sg.y / CELL + 1) : Math.ceil(sg.y / CELL - 1)) * CELL : sg.y;
        const gap = Math.abs(tx - sg.x) + Math.abs(ty - sg.y);
        if (gap > dist) {
          sg.x += sg.dx * dist;
          sg.y += sg.dy * dist;
          break;
        }
        sg.x = tx;
        sg.y = ty;
        dist -= gap;
        sg.trail.push({ x: sg.x, y: sg.y });
        // At an intersection: lean toward the cursor while the spotlight is on, otherwise turn at random.
        const py = spot.y + scrollY * PARALLAX;
        const near = spot.k > 0.5 && Math.hypot(spot.x - sg.x, py - sg.y) < R * 2.2;
        if (near && Math.random() < 0.55) {
          const ddx = spot.x - sg.x;
          const ddy = py - sg.y;
          [sg.dx, sg.dy] = Math.abs(ddx) > Math.abs(ddy) ? [Math.sign(ddx), 0] : [0, Math.sign(ddy)];
        } else if (Math.random() < TURN) {
          [sg.dx, sg.dy] = sg.dx ? [0, Math.random() < 0.5 ? 1 : -1] : [Math.random() < 0.5 ? 1 : -1, 0];
        }
      }
      // Trim the trail to TRAIL px of path length.
      let len = Math.abs(sg.x - sg.trail[sg.trail.length - 1].x) + Math.abs(sg.y - sg.trail[sg.trail.length - 1].y);
      for (let i = sg.trail.length - 1; i > 0; i--) {
        len += Math.abs(sg.trail[i].x - sg.trail[i - 1].x) + Math.abs(sg.trail[i].y - sg.trail[i - 1].y);
        if (len > TRAIL) {
          sg.trail.splice(0, i - 1);
          break;
        }
      }
    };

    const drawSignal = (sg: Signal) => {
      const fy = scrollY * PARALLAX;
      const life = Math.min(1, sg.age / 0.6, (sg.life - sg.age) / 0.8); // fade in and out
      const hy = sg.y - fy;
      const a = life * fieldAlpha(hy);
      if (a <= 0) return;
      // Trail: segments from the head back, fading out.
      const pts = [{ x: sg.x, y: sg.y }, ...sg.trail.slice().reverse()];
      let walked = 0;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < pts.length - 1 && walked < TRAIL; i++) {
        const p = pts[i];
        const q = pts[i + 1];
        const seg = Math.abs(p.x - q.x) + Math.abs(p.y - q.y);
        if (!seg) continue;
        ctx.strokeStyle = `rgba(${ember},${0.55 * (1 - walked / TRAIL) * a})`;
        ctx.beginPath();
        ctx.moveTo(p.x + 0.5, p.y - fy + 0.5);
        ctx.lineTo(q.x + 0.5, q.y - fy + 0.5);
        ctx.stroke();
        walked += seg;
      }
      ctx.lineWidth = 1;
      ctx.fillStyle = `rgba(${ember},${0.95 * a})`;
      ctx.fillRect(sg.x - 2, hy - 2, 4, 4);
    };

    const measureStart = () => {
      start = document.querySelector("[data-ambient-start]");
      startAt = start ? start.getBoundingClientRect().bottom : 0;
    };

    const frame = (now: number, dt: number) => {
      measureStart();
      ctx.clearRect(0, 0, W, H);

      // Spotlight follows a mouse that moved in the last 2.5s, otherwise it fades away.
      const active = fine && now - pointer.last < 2500;
      spot.k += ((active ? 1 : 0) - spot.k) * 0.06;
      spot.x += (pointer.x - spot.x) * 0.12;
      spot.y += (pointer.y - spot.y) * 0.12;
      lattice(now);
      if (reduce) return;

      // Scroll velocity speeds the signals up: the system works harder as you move through it.
      const sy = scrollY;
      vel += ((Math.abs(sy - lastY) / Math.max(dt, 1)) * 1000 - vel) * 0.15;
      lastY = sy;
      const speed = 70 * (1 + Math.min(3, vel / 700));

      const target = W < 768 ? 3 : 6;
      if (signals.length < target && Math.random() < 0.02) signals.push(spawn());
      const fy = sy * PARALLAX;
      signals = signals.filter((sg) => {
        sg.age += dt / 1000;
        const hy = sg.y - fy;
        return sg.age < sg.life && sg.x > -CELL && sg.x < W + CELL && hy > -H && hy < 2 * H;
      });
      for (const sg of signals) {
        step(sg, (speed * dt) / 1000);
        drawSignal(sg);
      }
    };

    readColors();
    resize();
    measureStart();

    let raf = 0;
    let prev = 0;
    const loop = (now: number) => {
      frame(now, prev ? Math.min(now - prev, 50) : 16);
      prev = now;
      raf = requestAnimationFrame(loop);
    };
    const play = () => {
      cancelAnimationFrame(raf);
      prev = 0;
      if (reduce) frame(0, 16);
      else if (!document.hidden) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.last = performance.now();
    };
    // A click on empty canvas (not a link, button or field) sends four signals out from that intersection.
    const onDown = (e: PointerEvent) => {
      if (reduce || (e.target as Element).closest("a,button,input,textarea,select,label,[role=button]")) return;
      const fy = scrollY * PARALLAX;
      if (fieldAlpha(e.clientY) < 0.5) return;
      const x = Math.round(e.clientX / CELL) * CELL;
      const y = Math.round((e.clientY + fy) / CELL) * CELL;
      for (const d of dirs) signals.push({ ...spawn(x, y, d), life: 1.6 + Math.random() * 0.8, age: 0.4 });
    };
    const onScroll = () => reduce && frame(0, 16);
    const onResize = () => {
      resize();
      play();
    };

    const mo = new MutationObserver(() => {
      readColors();
      if (reduce) frame(0, 16);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    addEventListener("resize", onResize);
    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerdown", onDown, { passive: true });
    addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", play);
    play();

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      removeEventListener("resize", onResize);
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerdown", onDown);
      removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", play);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 h-dvh w-full" />;
}
