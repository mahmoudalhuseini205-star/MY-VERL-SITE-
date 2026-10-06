"use client";

import { useEffect, useRef, useState } from "react";
import { useLoopGate } from "@/components/motion/useLoopGate";
import { pad } from "@/lib/locale";
import { SectionHead } from "./SectionHead";

type Scenario = { label: string; steps: { node: string; body: string }[] };

const TICK = 1800; // ms per step while auto-playing

// Home 6 — one request followed through the system. Pick a scenario; its steps light up in order along an
// Ember line (CSS .sm-fill, transform only). Auto-plays while on screen, pauses while hovered or focused,
// stops once a step is picked. Reduced motion: no auto-play (useLoopGate) and every step shown lit in CSS,
// so server and client render the same markup. All step text is in the DOM.
export function SystemMap({
  index,
  title,
  intro,
  scenarios,
}: {
  index: string;
  title: string;
  intro: string;
  scenarios: Scenario[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const running = useLoopGate(ref);
  const [s, setS] = useState(0);
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hold, setHold] = useState(false);
  const steps = scenarios[s].steps;
  const lit = step;

  useEffect(() => {
    if (!running || !auto || hold) return;
    const id = setInterval(() => setStep((n) => (n + 1) % steps.length), TICK);
    return () => clearInterval(id);
  }, [running, auto, hold, steps.length]);

  return (
    <section aria-labelledby="system-title" className="container-site section-y">
      <SectionHead index={index} title={title} intro={intro} id="system-title" />

      <div
        ref={ref}
        onPointerEnter={() => setHold(true)}
        onPointerLeave={() => setHold(false)}
        onFocus={() => setHold(true)}
        onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHold(false)}
        className="card mt-14 p-6 md:mt-20 md:p-10"
      >
        <div role="group" aria-label={title} className="flex flex-wrap gap-2">
          {scenarios.map((sc, i) => (
            <button
              key={sc.label}
              type="button"
              aria-pressed={i === s}
              onClick={() => {
                setS(i);
                setStep(0);
                setAuto(true);
              }}
              className={`t-label min-h-11 rounded-full border px-4 py-2 transition-colors duration-(--dur-micro) ${i === s ? "border-text bg-surface text-text" : "border-border text-muted hover:border-text/40 hover:text-text"}`}
            >
              {sc.label}
            </button>
          ))}
        </div>

        <ol key={s} aria-label={scenarios[s].label} className="mt-10 grid gap-0 md:mt-14 md:grid-flow-col md:auto-cols-fr md:gap-6">
          {steps.map((st, i) => (
            <li key={st.node} className="grid grid-cols-[1.5rem_1fr] content-start gap-x-4 md:grid-cols-1">
              <div className="flex flex-col items-center md:flex-row">
                <span
                  aria-hidden
                  className={`sm-dot size-3 shrink-0 rounded-full border transition-colors duration-(--dur-element) ${i <= lit ? "border-accent bg-accent" : "border-text/30 bg-bg"}`}
                />
                {i < steps.length - 1 && (
                  <span aria-hidden className="relative my-2 w-px flex-1 bg-border md:my-0 md:ms-3 md:-me-3 md:h-px md:w-auto">
                    <span data-on={i < lit} className="sm-fill absolute inset-0 bg-accent" />
                  </span>
                )}
              </div>
              <button
                type="button"
                aria-current={i === lit ? "step" : undefined}
                onClick={() => {
                  setStep(i);
                  setAuto(false);
                }}
                className={`sm-text pb-8 text-start transition-opacity duration-(--dur-element) md:pt-5 md:pb-0 ${i <= lit ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
              >
                <span className="t-label block text-muted">{pad(i + 1)}</span>
                <span className="mt-2 block text-lg leading-tight font-medium">{st.node}</span>
                <span className="t-body mt-2 block text-muted">{st.body}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
