import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { getCopy, hasLocale, localePath, pad, pageMeta, type Locale } from "@/lib/i18n";
import { caseStudies, getCaseStudy } from "@/content/work";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { WorkImage } from "@/components/ui/WorkImage";
import { workMeta } from "@/components/ui/WorkTile";
import { FlowDiagram } from "@/components/motion/FlowDiagram";
import { LineMask } from "@/components/motion/LineMask";
import { Reveal } from "@/components/motion/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/work/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug);
  if (!hasLocale(locale) || !study) return {};
  return pageMeta(locale, `/work/${slug}`, {
    title: `${study.name[locale]} | VERL Systems`,
    description: study.summary[locale],
  });
}

function Chapter({ index, title, children }: { index: number; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-8 border-t border-border py-16 md:grid-cols-12 md:gap-6 md:py-24">
      <div className="md:col-span-4">
        <SectionIndex as="h2">{`${pad(index)} — ${title}`}</SectionIndex>
      </div>
      <Reveal className="min-w-0 md:col-span-8">{children}</Reveal>
    </section>
  );
}

// Case study template (DESIGN.md §5). Optional chapters are skipped and the rest renumber.
// Same-route navigation (case → next case) crossfades via key + name + share; arriving from a list slides.
export default async function CaseStudyPage({ params }: PageProps<"/[locale]/work/[slug]">) {
  const { locale: l, slug } = await params;
  const study = getCaseStudy(slug);
  if (!hasLocale(l) || !study) notFound();
  const locale: Locale = l;
  const t = getCopy(locale);
  const c = t.caseStudy;
  const next = caseStudies.length > 1 ? caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length] : null;

  const chapters = [
    study.problem && {
      title: c.problem,
      body: <p className="t-h2 max-w-[28ch] text-balance">{study.problem[locale]}</p>,
    },
    study.flow?.length && {
      title: c.system,
      body: <FlowDiagram steps={study.flow.map((s) => s[locale])} />,
    },
    study.walkthrough?.length && {
      title: c.walkthrough,
      body: (
        <ol className="flex flex-col">
          {study.walkthrough.map((s, i) => {
            const phone = s.image.height > s.image.width;
            return (
              <li
                key={s.image.src}
                className={`grid gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 ${phone ? "md:grid-cols-8" : ""}`}
              >
                <div className={phone ? "md:col-span-4" : ""}>
                  <span className="t-label text-muted">{pad(i + 1)}</span>
                  <p className="t-h3 mt-3 font-medium">{s.title[locale]}</p>
                  <p className="t-body mt-3 text-muted">{s.body[locale]}</p>
                </div>
                <div
                  className={`overflow-hidden rounded-3xl border border-border ${phone ? "max-w-[300px] md:col-span-4 md:max-w-[340px]" : ""}`}
                >
                  <WorkImage
                    image={s.image}
                    locale={locale}
                    sizes={phone ? "(min-width: 768px) 30vw, 300px" : "(min-width: 768px) 60vw, 100vw"}
                  />
                </div>
              </li>
            );
          })}
        </ol>
      ),
    },
    study.build && {
      title: c.build,
      body: (
        <>
          <ul className="flex flex-wrap gap-2">
            {study.build.stack.map((s) => (
              <li key={s} className="t-label rounded-full border border-border px-3 py-1.5">
                {s}
              </li>
            ))}
          </ul>
          <ol className="mt-8 flex flex-col">
            {study.build.notes.map((n, i) => (
              <li key={n.en} className="flex gap-5 border-t border-border py-5">
                <span className="t-label pt-1 text-muted">{pad(i + 1)}</span>
                <p className="t-body">{n[locale]}</p>
              </li>
            ))}
          </ol>
        </>
      ),
    },
    study.screens.length > 0 && {
      title: c.screens,
      body: (
        <div className="grid gap-6 md:grid-cols-12">
          {study.screens.map((img) => (
            <div
              key={img.src}
              className={`overflow-hidden rounded-3xl border border-border ${img.width > img.height ? "md:col-span-12" : "md:col-span-6"}`}
            >
              <WorkImage image={img} locale={locale} sizes="(min-width: 768px) 60vw, 100vw" />
            </div>
          ))}
        </div>
      ),
    },
    study.does?.length && {
      title: c.does,
      body: (
        <ol className="flex flex-col">
          {study.does.map((d, i) => (
            <li key={d.en} className="flex gap-6 border-b border-border py-6 first:pt-0">
              <span className="t-label pt-1.5 text-muted">{pad(i + 1)}</span>
              <p className="t-h3 font-medium">{d[locale]}</p>
            </li>
          ))}
        </ol>
      ),
    },
    !study.isDemo &&
      study.results?.length && {
        title: c.results,
        body: (
          <dl className="grid gap-10 sm:grid-cols-2">
            {study.results.map((r) => (
              <div key={r.value}>
                <dt className="t-metric">{r.value}</dt>
                <dd className="t-body mt-3 text-muted">{r.label[locale]}</dd>
              </div>
            ))}
          </dl>
        ),
      },
    study.note && {
      title: c.status,
      body: <p className="t-body-l text-muted">{study.note[locale]}</p>,
    },
  ].filter((ch) => !!ch);

  return (
    <ViewTransition
      key={slug}
      name="case-content"
      share="auto"
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-in" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-out" }}
      default="none"
    >
      <article className="container-site pt-12 md:pt-20">
        <header>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <ArrowLink href={localePath(locale, "/work")} back className="text-muted">
              {c.all}
            </ArrowLink>
            {study.isDemo && <DemoBadge />}
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-8">
              <LineMask lines={[study.name[locale]]} className="t-h1 text-balance" />
              <p className="t-body-l mt-6 text-muted">{study.summary[locale]}</p>
              {study.liveUrl && (
                <a
                  href={study.liveUrl[locale]}
                  target="_blank"
                  rel="noopener"
                  className="group mt-6 inline-flex min-h-11 items-center gap-4 text-accent-fg"
                >
                  <span className="t-label">{c.live}</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-(--dur-micro) ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              )}
            </div>
            <p className="t-label text-muted md:col-span-3 md:col-start-10 md:self-end md:text-end">
              {workMeta(study, locale)}
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border md:mt-16">
            <ViewTransition name={`work-${study.slug}`} share="morph" default="none">
              <div>
                <WorkImage image={study.cover} locale={locale} sizes="(min-width: 1360px) 1264px, 100vw" priority />
              </div>
            </ViewTransition>
          </div>
        </header>

        <div className="mt-16 md:mt-24">
          {chapters.map((ch, i) => (
            <Chapter key={ch.title} index={i + 1} title={ch.title}>
              {ch.body}
            </Chapter>
          ))}
        </div>

        <footer className="grid gap-12 border-t border-border py-16 md:grid-cols-12 md:gap-6 md:py-24">
          <div className="md:col-span-7">
            <h2 className="t-h2 max-w-[22ch] text-balance">{c.ctaTitle}</h2>
            <Button href={localePath(locale, "/start")} className="mt-10">
              {t.cta}
            </Button>
          </div>
          {next && (
            <Link
              href={localePath(locale, `/work/${next.slug}`)}
              transitionTypes={["nav-forward"]}
              className="group self-end md:col-span-4 md:col-start-9"
            >
              <span className="t-label text-muted">
                {c.next} <span aria-hidden className="inline-block rtl:-scale-x-100">→</span>
              </span>
              <span className="t-h3 mt-3 block transition-transform duration-(--dur-micro) ease-expo group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                {next.name[locale]}
              </span>
            </Link>
          )}
        </footer>
      </article>
    </ViewTransition>
  );
}
