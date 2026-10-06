import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCopy, getPagesCopy, hasLocale, pad, pageMeta } from "@/lib/i18n";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { LineReveal } from "@/components/motion/LineReveal";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { PageIntro } from "@/components/sections/PageIntro";
import { FinalCta } from "@/components/sections/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[locale]/approach">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return pageMeta(locale, "/approach", getPagesCopy(locale).approach.meta);
}

// The four phases in depth (about.md §5): what happens, and what the client receives at the end of each.
export default async function ApproachPage({ params }: PageProps<"/[locale]/approach">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getPagesCopy(locale).approach;
  const common = getCopy(locale).approach;

  return (
    <PageTransition>
      <PageIntro
        eyebrow={t.eyebrow}
        lines={t.lines}
        body={t.body}
        aside={
          <ol className="flex flex-col">
            {common.phases.map((p, i) => (
              <li key={p.title} className="flex items-center gap-4 border-t border-border py-3">
                <span className="t-label text-muted">{pad(i + 1)}</span>
                <span className="font-medium">{p.title}</span>
              </li>
            ))}
          </ol>
        }
      />

      <div className="container-site section-y">
        {common.phases.map((p, i) => (
          <section
            key={p.title}
            aria-labelledby={`phase-${i}`}
            className="grid gap-10 border-t border-border py-14 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-6 md:py-24"
          >
            <Reveal className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <p aria-hidden className="t-metric">
                  {pad(i + 1)}
                </p>
                <h2 id={`phase-${i}`} className="t-h2 mt-6">
                  {p.title}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-7 md:col-start-6">
              <p className="t-h3 font-medium">{p.body}</p>
              <p className="t-label mt-12 text-muted">{t.what}</p>
              <ul className="mt-4 flex flex-col">
                {t.phases[i].map((item) => (
                  <li key={item} className="flex gap-4 border-t border-border py-4">
                    <span aria-hidden className="mt-[0.7rem] h-px w-4 shrink-0 bg-text/40" />
                    <span className="t-body">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="card mt-10 flex items-start gap-4 px-6 py-5">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <p>
                  <span className="t-label block text-muted">{common.receive}</span>
                  <span className="t-h3 mt-2 block font-medium">{p.deliverable}</span>
                </p>
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      <section aria-label={t.principle.title} className="block-inverse">
        <div className="container-site section-y grid gap-10 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-4">
            <SectionIndex>{`05 — ${t.principle.index}`}</SectionIndex>
          </Reveal>
          <div className="md:col-span-8">
            <LineReveal as="h2" lines={[t.principle.title]} className="t-h1" />
            <Reveal delay={0.1}>
              <p className="t-body-l mt-8 text-muted">
                {t.principle.body}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta locale={locale} />
    </PageTransition>
  );
}
