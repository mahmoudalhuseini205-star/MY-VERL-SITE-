"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image, { getImageProps } from "next/image";
import { useScrollVar } from "./useScrollVar";
import { useReducedMotion } from "./useReducedMotion";

// "The monument" hero (DESIGN.md §4). Four planes, back to front: dusk plate, the headline (server HTML,
// passed in as children so it paints first), the concrete V, and a concrete ledge close to the camera.
// Plate and V share one contact point on the horizon: they translate together and scale around it at
// different rates, so the V grows toward the visitor without ever leaving the ground. The ledge rides
// with the page, the fastest plane. Geometry and motion live in globals.css (.hero-*), driven by --p
// (scroll) and --mx (pointer, desktop mouse only).

export function HeroScene({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  useScrollVar(root, ["start start", "end start"]);

  useEffect(() => {
    const el = root.current;
    if (!el || reduce || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let target = 0;
    let x = 0;
    let raf = 0;
    const tick = () => {
      x += (target - x) * 0.06;
      el.style.setProperty("--mx", x.toFixed(4));
      raf = Math.abs(target - x) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      // The Arabic scene is mirrored (globals.css), so the pointer's direction is too.
      target = (((e.clientX - r.left) / r.width) * 2 - 1) * (document.dir === "rtl" ? -1 : 1);
      if (!raf) raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  // Art direction: a low-horizon portrait plate on phones, the wide plate from 768px.
  const common = { alt: "", priority: true, quality: 80, sizes: "(max-width: 767px) 160vw, 110vw" };
  const { props: wide } = getImageProps({ ...common, src: "/home/plate.webp", width: 2560, height: 1440 });
  const { props: tall } = getImageProps({ ...common, src: "/home/plate-p.webp", width: 1080, height: 1400 });

  return (
    <section ref={root} data-ambient-start data-theme="light" className="hero relative isolate overflow-hidden">
      <div aria-hidden className="hero-frame hero-back">
        <picture>
          <source media="(min-width: 768px)" srcSet={wide.srcSet} sizes={wide.sizes} />
          <img {...tall} className="hero-img" alt="" />
        </picture>
      </div>

      <div className="hero-copy container-site relative">{children}</div>

      <div aria-hidden className="hero-frame hero-mid">
        <Image src="/home/monument.webp" alt="" width={856} height={900} sizes="40vw" className="hero-monument" />
      </div>

      <div aria-hidden className="hero-ledge">
        <Image src="/home/ledge.webp" alt="" width={1672} height={180} sizes="110vw" className="hero-img" />
      </div>
    </section>
  );
}
