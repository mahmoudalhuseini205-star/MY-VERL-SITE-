import Link from "next/link";
import { ViewTransition } from "react";
import { getCopy, localePath, type Locale } from "@/lib/i18n";
import { capabilities } from "@/content/capabilities";
import type { Capability } from "@/content/capabilities/types";
import { Reveal } from "@/components/motion/Reveal";
import { MiniFlow } from "@/components/motion/MiniFlow";

function Arrow() {
  return (
    <span
      aria-hidden
      className="grid size-11 shrink-0 place-items-center rounded-full border border-border transition-transform duration-(--dur-element) ease-expo group-hover:-rotate-45 group-active:-rotate-45 rtl:group-hover:rotate-45 rtl:group-active:rotate-45"
    >
      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="rtl:-scale-x-100">
        <path d="M1 6h9.5M6.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </span>
  );
}

// Capability panel (DESIGN.md §4): Mono index, title, one-sentence outcome, Mono tags, mini flow, link.
// The title is a shared element that morphs into the capability page's H1.
function Panel({ c, locale, wide }: { c: Capability; locale: Locale; wide?: boolean }) {
  const more = getCopy(locale).more;
  const text = (
    <>
      <ViewTransition name={`cap-${c.slug}`} share="text-morph" default="none">
        <h3 className="t-h2 max-w-[16ch]">{c.title[locale]}</h3>
      </ViewTransition>
      <p className="t-body mt-5 text-muted">{c.outcome[locale]}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {c.tags.map((tag) => (
          <li key={tag.en} className="t-label rounded-full border border-border px-3 py-1.5 text-muted">
            {tag[locale]}
          </li>
        ))}
      </ul>
    </>
  );
  return (
    <Link
      href={localePath(locale, `/capabilities/${c.slug}`)}
      transitionTypes={["nav-forward"]}
      className="card group flex h-full flex-col p-6 transition-[border-color,transform] duration-(--dur-micro) ease-expo hover:border-text/30 active:scale-[0.99] md:p-10"
    >
      <div className="flex items-center justify-between">
        <span className="t-label text-muted">{c.index}</span>
        <span className="flex items-center gap-4">
          <span className="t-label text-muted max-md:sr-only">{more}</span>
          <Arrow />
        </span>
      </div>
      {wide ? (
        <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end md:gap-6">
          <div className="md:col-span-5">{text}</div>
          <div className="md:col-span-6 md:col-start-7">
            <MiniFlow nodes={c.mini.map((n) => n[locale])} />
          </div>
        </div>
      ) : (
        <>
          <div className="mt-10 md:mt-16">{text}</div>
          <div className="mt-auto pt-12">
            <MiniFlow nodes={c.mini.map((n) => n[locale])} />
          </div>
        </>
      )}
    </Link>
  );
}

// Three large asymmetric panels: 7 / 5, then one full-width panel. Never three equal cards (DESIGN.md §5).
export function CapabilityPanels({ locale }: { locale: Locale }) {
  const [a, b, c] = capabilities;
  return (
    <div className="grid gap-6 md:grid-cols-12">
      <Reveal className="md:col-span-7 md:min-h-[34rem]">
        <Panel c={a} locale={locale} />
      </Reveal>
      <Reveal delay={0.08} className="md:col-span-5 md:mt-24">
        <Panel c={b} locale={locale} />
      </Reveal>
      <Reveal className="md:col-span-12">
        <Panel c={c} locale={locale} wide />
      </Reveal>
    </div>
  );
}
