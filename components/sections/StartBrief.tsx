"use client";

import { addTransitionType, startTransition, useEffect, useRef, useState, ViewTransition } from "react";
import { m } from "motion/react";
import { pad } from "@/lib/locale";
import type pages from "@/content/tr/pages";
import { briefMessage } from "@/lib/brief";
import { whatsappUrl } from "@/content/site";
import { Button } from "@/components/ui/Button";

type T = (typeof pages)["start"];
type NeedKey = keyof T["needs"]["options"];
type TimelineKey = keyof T["timeline"]["options"];

const QUESTIONS = 5;
const field =
  "w-full rounded-2xl border border-border bg-surface px-5 py-4 text-lg text-text placeholder:text-muted transition-colors hover:border-text/30";

function Chip({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`float flex min-h-14 items-center gap-4 rounded-2xl border px-5 py-3 text-start text-lg font-medium transition-[border-color,background-color,transform] duration-(--dur-micro) ease-expo active:scale-[0.98] ${selected ? "border-text bg-surface" : "border-border hover:border-text/40"}`}
    >
      <span
        aria-hidden
        className={`grid size-5 shrink-0 place-items-center rounded-full border ${selected ? "border-accent bg-accent" : "border-text/30"}`}
      >
        {selected && <span className="size-1.5 rounded-full bg-on-accent" />}
      </span>
      {children}
    </button>
  );
}

// /start brief (CLAUDE.md §6, DESIGN.md §4): one question per step, Ember progress bar, choice chips,
// back / next, a summary, then WhatsApp opens with the brief in the visitor's language. Nothing is stored.
export function StartBrief({ t }: { t: T }) {
  const [step, setStep] = useState(0);
  const [needs, setNeeds] = useState<NeedKey[]>([]);
  const [business, setBusiness] = useState("");
  const [link, setLink] = useState("");
  const [goal, setGoal] = useState("");
  const [timeline, setTimeline] = useState<TimelineKey | null>(null);
  const [name, setName] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);
  const advance = useRef<ReturnType<typeof setTimeout>>(undefined);

  const valid = [needs.length > 0, !!business.trim(), !!goal.trim(), !!timeline, !!name.trim()];
  const summary = step === QUESTIONS;

  // Steps are an ordered sequence: forward slides from the right, back from the left.
  const go = (to: number) => {
    clearTimeout(advance.current); // a pending timeline auto-advance must not fire after Back
    moved.current = true;
    startTransition(() => {
      addTransitionType(to > step ? "nav-forward" : "nav-back");
      setStep(to);
    });
  };

  // Move focus to the new question so keyboard and screen-reader users follow the step change.
  useEffect(() => {
    if (moved.current) heading.current?.focus();
  }, [step]);
  useEffect(() => () => clearTimeout(advance.current), []);

  const brief = {
    needs: needs.map((k) => t.needs.options[k]),
    business,
    link,
    goal,
    timeline: timeline ? t.timeline.options[timeline] : "",
    name,
  };
  const message = briefMessage(brief, t.message);

  const questions = [t.needs.question, t.business.question, t.goal.question, t.timeline.question, t.person.question];
  const title = summary ? t.summary.title : questions[step];

  return (
    <div className="card overflow-hidden">
      {/* Progress */}
      <div className="flex items-center justify-between gap-4 px-6 pt-6 md:px-10 md:pt-8">
        <p className="t-label text-muted" aria-live="polite">
          {summary ? t.summary.title : `${t.step} ${pad(step + 1)} ${t.of} ${pad(QUESTIONS)}`}
        </p>
        {step > 0 && (
          <button
            type="button"
            onClick={() => go(step - 1)}
            className="t-label inline-flex min-h-11 items-center gap-2 text-muted hover:text-text"
          >
            <span aria-hidden className="inline-block rtl:-scale-x-100">←</span> {t.back}
          </button>
        )}
      </div>
      <div aria-hidden className="mx-6 mt-4 h-0.5 overflow-hidden rounded-full bg-border md:mx-10">
        <m.div
          className="h-full origin-left bg-accent rtl:origin-right"
          initial={false}
          animate={{ scaleX: Math.max(0.04, Math.min(step, QUESTIONS) / QUESTIONS) }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      <ViewTransition
        key={step}
        enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
        exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
        default="none"
      >
        <form
          className="px-6 pt-10 pb-6 md:px-10 md:pt-14 md:pb-10"
          onSubmit={(e) => {
            e.preventDefault();
            if (!summary && valid[step]) go(step + 1);
          }}
        >
          <h2 ref={heading} tabIndex={-1} className="t-h2 max-w-[20ch] outline-none">
            {title}
          </h2>

          <div className="mt-8 min-h-56">
            {step === 0 && (
              <fieldset>
                <legend className="t-body text-muted">{t.needs.helper}</legend>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {(Object.keys(t.needs.options) as NeedKey[]).map((k) => (
                    <Chip
                      key={k}
                      selected={needs.includes(k)}
                      onClick={() => setNeeds((n) => (n.includes(k) ? n.filter((x) => x !== k) : [...n, k]))}
                    >
                      {t.needs.options[k]}
                    </Chip>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 1 && (
              <div className="flex flex-col gap-6">
                <label className="block">
                  <span className="t-label text-muted">{t.business.name}</span>
                  <input
                    className={`${field} mt-2`}
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    autoComplete="organization"
                    maxLength={120}
                    required
                  />
                </label>
                <label className="block">
                  <span className="t-label text-muted">
                    {t.business.link} <span className="normal-case">({t.optional})</span>
                  </span>
                  <input
                    className={`${field} mt-2`}
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    inputMode="url"
                    autoComplete="url"
                    maxLength={200}
                  />
                  <span className="t-body mt-2 block text-sm text-muted">{t.business.linkHelper}</span>
                </label>
              </div>
            )}

            {step === 2 && (
              <label className="block">
                <span className="t-body text-muted">{t.goal.helper}</span>
                <textarea
                  className={`${field} mt-4 min-h-40 resize-y`}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  maxLength={800}
                  required
                />
              </label>
            )}

            {step === 3 && (
              <fieldset>
                <legend className="sr-only">{t.timeline.question}</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(Object.keys(t.timeline.options) as TimelineKey[]).map((k) => (
                    <Chip
                      key={k}
                      selected={timeline === k}
                      // Single choice: advance on its own once the selection has registered on screen.
                      onClick={() => {
                        setTimeline(k);
                        advance.current = setTimeout(() => go(step + 1), 320);
                      }}
                    >
                      {t.timeline.options[k]}
                    </Chip>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 4 && (
              <label className="block">
                <span className="t-label text-muted">{t.person.name}</span>
                <input
                  className={`${field} mt-2`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  maxLength={80}
                  required
                />
              </label>
            )}

            {summary && (
              <>
                <dl className="flex flex-col">
                  {[
                    [t.message.needs, brief.needs.join(", "), 0],
                    [t.message.business, business, 1],
                    [t.message.link, link, 1],
                    [t.message.goal, goal, 2],
                    [t.message.timeline, brief.timeline, 3],
                    [t.message.name, name, 4],
                  ]
                    .filter(([, value]) => String(value).trim())
                    .map(([label, value, to]) => (
                      <div key={label} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-t border-border py-4 sm:grid-cols-[10rem_1fr_auto]">
                        <dt className="t-label col-start-1 row-start-1 pt-1 text-muted">{label}</dt>
                        <dd className="col-span-2 col-start-1 row-start-2 min-w-0 whitespace-pre-line [overflow-wrap:anywhere] sm:col-span-1 sm:col-start-2 sm:row-start-1">{value}</dd>
                        <button
                          type="button"
                          onClick={() => go(Number(to))}
                          className="t-label col-start-2 row-start-1 min-h-11 self-start text-muted underline-offset-4 hover:text-text hover:underline sm:col-start-3 sm:-mt-3"
                        >
                          {t.edit}
                        </button>
                      </div>
                    ))}
                </dl>
                <p className="t-body mt-6 text-muted">{t.summary.helper}</p>
                <Button href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className="mt-8">
                  {t.summary.send}
                </Button>
              </>
            )}
          </div>

          {!summary && (
            <div className="mt-10 flex items-center justify-end border-t border-border pt-6">
              <button
                type="submit"
                disabled={!valid[step]}
                className="float group inline-flex min-h-12 items-center gap-3 rounded-full bg-text px-6 py-3.5 font-medium text-bg transition-[opacity,transform] duration-(--dur-micro) ease-expo active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-30"
              >
                {t.next}
                <span aria-hidden className="transition-transform duration-(--dur-micro) ease-expo group-hover:translate-x-1 group-active:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1 rtl:group-active:-translate-x-1">
                  →
                </span>
              </button>
            </div>
          )}
        </form>
      </ViewTransition>
    </div>
  );
}
