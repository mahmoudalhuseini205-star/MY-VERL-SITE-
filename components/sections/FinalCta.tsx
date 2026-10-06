import { getCopy, getPagesCopy, localePath, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { VMark } from "@/components/ui/VMark";
import { Reveal } from "@/components/motion/Reveal";
import { LineReveal } from "@/components/motion/LineReveal";

// Closing "Start a project" block on Home and every inner page. The page's only Ember button in view.
export function FinalCta({ locale, number }: { locale: Locale; number?: string }) {
  const t = getPagesCopy(locale).finalCta;
  return (
    <section aria-label={t.index} className="container-site section-y">
      <Reveal className="card blueprint-bg relative overflow-hidden px-6 py-14 md:px-16 md:py-24">
        <div className="grid items-end gap-12 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-8">
            <SectionIndex>{number ? `${number} — ${t.index}` : t.index}</SectionIndex>
            <LineReveal as="h2" lines={t.lines} className="t-display mt-8" />
            <p className="t-body-l mt-8 text-muted">{t.body}</p>
            <Button href={localePath(locale, "/start")} className="mt-10">
              {getCopy(locale).cta}
            </Button>
          </div>
          <div className="hidden md:col-span-3 md:col-start-10 md:block">
            <VMark className="ms-auto w-full max-w-56" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
