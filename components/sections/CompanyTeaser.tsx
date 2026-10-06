import { ArrowLink } from "@/components/ui/ArrowLink";
import { localePath, type Locale } from "@/lib/i18n";
import { FOUNDER_PORTRAIT } from "@/content/site";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { WorkImage } from "@/components/ui/WorkImage";
import { Reveal } from "@/components/motion/Reveal";

// Home 8 — founder portrait + two lines + link to /company (about.md §7, third person).
export function CompanyTeaser({
  locale,
  t,
}: {
  locale: Locale;
  t: { index: string; lines: string[]; link: string };
}) {
  const [lead, rest] = t.lines;
  return (
    <section aria-label={t.index} className="container-site section-y">
      <div className="grid items-end gap-12 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-4">
          <div className="overflow-hidden rounded-3xl border border-border">
            <WorkImage image={FOUNDER_PORTRAIT} locale={locale} sizes="(min-width: 768px) 30vw, 100vw" />
          </div>
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-7 md:col-start-6">
          <SectionIndex>{t.index}</SectionIndex>
          <p className="t-h2 mt-8 max-w-[22ch] text-balance">{lead}</p>
          <p className="t-body-l mt-6 text-muted">{rest}</p>
          <ArrowLink href={localePath(locale, "/company")} className="mt-10">{t.link}</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
