import Link from "next/link";
import { ViewTransition } from "react";
import { localePath, type Locale } from "@/lib/i18n";
import type { CaseStudy } from "@/content/work/types";
import { DemoBadge } from "./DemoBadge";
import { WorkImage } from "./WorkImage";
import { Parallax } from "@/components/motion/Parallax";

export const workMeta = (s: CaseStudy, locale: Locale) =>
  [s.sector[locale], s.year, s.type[locale]].filter(Boolean).join(" · ");

// DESIGN.md §6 effect 8: image drifts with scroll and scales in its clip, Mono label slides up, arrow turns -45°.
// The image is the shared element that morphs into the case study hero (effect 10).
export function WorkTile({ study, locale, className = "" }: { study: CaseStudy; locale: Locale; className?: string }) {
  return (
    <Link
      href={localePath(locale, `/work/${study.slug}`)}
      transitionTypes={["nav-forward"]}
      className={`group block transition-transform duration-(--dur-micro) ease-expo active:scale-[0.99] ${className}`}
    >
      <div className="relative overflow-hidden rounded-3xl border border-border">
        <Parallax>
          <ViewTransition name={`work-${study.slug}`} share="morph" default="none">
            <div className="transition-transform duration-900 ease-expo group-hover:scale-[1.03]">
              <WorkImage image={study.cover} locale={locale} sizes="(min-width: 768px) 60vw, 100vw" />
            </div>
          </ViewTransition>
        </Parallax>
        {study.isDemo && (
          <div className="absolute top-4 start-4">
            <DemoBadge />
          </div>
        )}
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h3 className="t-h3">{study.name[locale]}</h3>
          <div className="mt-2 overflow-hidden">
            <p className="t-label text-muted transition-transform duration-(--dur-element) ease-expo md:translate-y-full md:group-hover:translate-y-0 md:group-focus-visible:translate-y-0">
              {workMeta(study, locale)}
            </p>
          </div>
          <p className="t-body mt-3 text-muted">{study.summary[locale]}</p>
        </div>
        <span
          aria-hidden
          className="grid size-11 shrink-0 place-items-center rounded-full border border-border transition-transform duration-(--dur-element) ease-expo group-hover:-rotate-45 rtl:group-hover:rotate-45"
        >
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="rtl:-scale-x-100">
            <path d="M1 6h9.5M6.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
