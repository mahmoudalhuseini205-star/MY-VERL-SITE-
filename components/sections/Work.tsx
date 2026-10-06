import { ArrowLink } from "@/components/ui/ArrowLink";
import { localePath, type Locale } from "@/lib/i18n";
import type { CaseStudy } from "@/content/work/types";
import { caseStudies } from "@/content/work";
import { WorkTile } from "@/components/ui/WorkTile";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "./SectionHead";

// Full-bleed inverse block: the "chapter" in the page (DESIGN.md §5). Tiles alternate 7 / 5.
// /work renders it on the page canvas (inverse={false}) so the list page has no dark chapter break.
export function Work({
  locale,
  t,
  studies = caseStudies,
  inverse = true,
}: {
  locale: Locale;
  t: { index: string; title: string; intro: string; all?: string };
  studies?: CaseStudy[];
  inverse?: boolean;
}) {
  return (
    <section aria-labelledby="work-title" className={inverse ? "block-inverse" : undefined}>
      <div className="container-site section-y">
        {t.title ? (
          <SectionHead index={t.index} title={t.title} intro={t.intro} id="work-title" />
        ) : (
          <Reveal>
            <h2 id="work-title" className="t-label text-muted">
              {t.index}
            </h2>
          </Reveal>
        )}

        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12 md:gap-6">
          {studies.map((study, i) => (
            <Reveal key={study.slug} className={i % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-40"}>
              <WorkTile study={study} locale={locale} />
            </Reveal>
          ))}
        </div>

        {t.all && (
          <Reveal className="mt-16 border-t border-border pt-8 md:mt-24">
            <ArrowLink href={localePath(locale, "/work")}>{t.all}</ArrowLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}
