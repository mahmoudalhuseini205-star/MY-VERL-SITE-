import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { getCopy, getPagesCopy, hasLocale, localePath, pad, pageMeta } from "@/lib/i18n";
import { capabilities, getCapability } from "@/content/capabilities";
import { caseStudies } from "@/content/work";
import { PageTransition } from "@/components/motion/PageTransition";
import { FlowDiagram } from "@/components/motion/FlowDiagram";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionHead } from "@/components/sections/SectionHead";
import { Work } from "@/components/sections/Work";
import { FinalCta } from "@/components/sections/FinalCta";

export const dynamicParams = false;

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/capabilities/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const c = getCapability(slug);
  if (!hasLocale(locale) || !c) return {};
  return pageMeta(locale, `/capabilities/${slug}`, {
    title: `${c.title[locale]} | VERL Systems`,
    description: c.outcome[locale],
  });
}

// Capability template: hero, what it includes, how we build it (flow diagram), related work, CTA.
export default async function CapabilityPage({ params }: PageProps<"/[locale]/capabilities/[slug]">) {
  const { locale, slug } = await params;
  const c = getCapability(slug);
  if (!hasLocale(locale) || !c) notFound();
  const t = getPagesCopy(locale);
  const d = t.capabilities.detail;
  const related = caseStudies.filter((s) => s.capabilities.includes(c.slug));
  const others = capabilities.filter((o) => o.slug !== c.slug);

  return (
    <PageTransition>
      <PageIntro
        eyebrow={
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <ArrowLink href={localePath(locale, "/capabilities")} back className="-my-3 text-muted">
              {d.all}
            </ArrowLink>
            <span>
              {d.eyebrow} {c.index} / {pad(capabilities.length)}
            </span>
          </div>
        }
        heading={
          <ViewTransition name={`cap-${c.slug}`} share="text-morph" default="none">
            <h1 className="t-display max-w-[14ch] text-balance">{c.title[locale]}</h1>
          </ViewTransition>
        }
        body={c.intro[locale]}
        aside={
          <ul className="flex flex-wrap gap-2 md:flex-col md:items-start">
            {c.tags.map((tag) => (
              <li key={tag.en} className="t-label rounded-full border border-border px-3 py-1.5 text-muted">
                {tag[locale]}
              </li>
            ))}
          </ul>
        }
      >
        <Button href={localePath(locale, "/start")}>{getCopy(locale).cta}</Button>
      </PageIntro>

      <section aria-labelledby="includes-title" className="container-site section-y">
        <SectionHead index={`01 — ${d.includes}`} title={c.outcome[locale]} id="includes-title" />
        <div className="mt-14 grid gap-x-6 gap-y-12 md:mt-20 md:grid-cols-12">
          {c.includes.map((item, i) => (
            <Reveal
              key={item.title.en}
              delay={(i % 2) * 0.08}
              className={`border-t border-border pt-8 md:col-span-4 ${i % 2 === 0 ? "md:col-start-5" : "md:col-start-9"}`}
            >
              <p className="t-label text-muted">{pad(i + 1)}</p>
              <h3 className="t-h3 mt-4">{item.title[locale]}</h3>
              <p className="t-body mt-3 text-muted">{item.body[locale]}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="build-title" className="container-site section-y pt-0 md:pt-0">
        <div className="grid gap-12 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-4">
            <SectionIndex>{`02 — ${d.build}`}</SectionIndex>
            <h2 id="build-title" className="sr-only">
              {d.build}
            </h2>
            <ol className="mt-8 flex flex-col">
              {c.notes.map((n, i) => (
                <li key={n.en} className="flex gap-5 border-t border-border py-5">
                  <span className="t-label pt-1 text-muted">{pad(i + 1)}</span>
                  <p className="t-body">{n[locale]}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            <FlowDiagram steps={c.flow.map((s) => s[locale])} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <Work
          locale={locale}
          studies={related}
          t={{ index: `03 — ${d.related}`, title: t.work.lines.join(" "), intro: "" }}
        />
      )}

      <section aria-labelledby="others-title" className="container-site section-y">
        <Reveal>
          <SectionIndex>{`${related.length > 0 ? "04" : "03"} — ${d.others}`}</SectionIndex>
          <h2 id="others-title" className="sr-only">
            {d.others}
          </h2>
        </Reveal>
        <ul className="mt-8 grid md:grid-cols-2 md:gap-6">
          {others.map((o) => (
            <li key={o.slug}>
              <Reveal>
                <Link
                  href={localePath(locale, `/capabilities/${o.slug}`)}
                  transitionTypes={["nav-forward"]}
                  className="group flex items-start justify-between gap-6 border-t border-border py-8"
                >
                  <span>
                    <span className="t-label text-muted">{o.index}</span>
                    <ViewTransition name={`cap-${o.slug}`} share="text-morph" default="none">
                      <span className="t-h2 mt-3 block">{o.title[locale]}</span>
                    </ViewTransition>
                    <span className="t-body mt-3 block text-muted">{o.outcome[locale]}</span>
                  </span>
                  <span
                    aria-hidden
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-border transition-transform duration-(--dur-element) ease-expo group-hover:-rotate-45 rtl:-scale-x-100 rtl:group-hover:rotate-45"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <FinalCta locale={locale} />
    </PageTransition>
  );
}
