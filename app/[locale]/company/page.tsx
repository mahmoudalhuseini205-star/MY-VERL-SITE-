import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCopy, getPagesCopy, hasLocale, localePath, pad, pageMeta } from "@/lib/i18n";
import { capabilities } from "@/content/capabilities";
import { EMAIL, EMAIL_HREF, FOUNDER_PORTRAIT, PHONE_DISPLAY, PHONE_HREF } from "@/content/site";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { TextLink } from "@/components/ui/TextLink";
import { WorkImage } from "@/components/ui/WorkImage";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionHead } from "@/components/sections/SectionHead";
import { Standards } from "@/components/sections/Standards";
import { FinalCta } from "@/components/sections/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[locale]/company">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return pageMeta(locale, "/company", getPagesCopy(locale).company.meta);
}

// Company: positioning (about.md §1), founder (§7), principles, standards (§6, confirmed only), facts (§2).
export default async function CompanyPage({ params }: PageProps<"/[locale]/company">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getPagesCopy(locale).company;
  const common = getCopy(locale);

  return (
    <PageTransition>
      <PageIntro eyebrow={t.eyebrow} lines={t.lines} body={t.body} />

      <section aria-labelledby="positioning-title" className="container-site section-y">
        <SectionHead index={t.positioning.index} title={t.positioning.title} intro={t.positioning.body} id="positioning-title" />
        <ol className="mt-14 grid md:mt-20 md:grid-cols-12 md:gap-6">
          {capabilities.map((c) => (
            <li key={c.slug} className="md:col-span-8 md:col-start-5">
              <Reveal>
                <Link
                  href={localePath(locale, `/capabilities/${c.slug}`)}
                  transitionTypes={["nav-forward"]}
                  className="group flex items-baseline gap-6 border-t border-border py-6"
                >
                  <span className="t-label text-muted">{c.index}</span>
                  <span className="t-h3 font-medium">{c.title[locale]}</span>
                  <span
                    aria-hidden
                    className="ms-auto transition-transform duration-(--dur-micro) ease-expo group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="founder-title" className="block-inverse">
        <div className="container-site section-y grid items-end gap-12 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-border">
              <WorkImage image={FOUNDER_PORTRAIT} locale={locale} sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-6 md:col-start-7">
            <SectionIndex>{t.founder.index}</SectionIndex>
            <p className="t-h2 mt-8 max-w-[22ch] text-balance">{t.founder.lines[0]}</p>
            <p className="t-body-l mt-6 text-muted">{t.founder.lines[1]}</p>
            <p id="founder-title" className="mt-10">
              <span className="block font-semibold">{t.founder.name}</span>
              <span className="t-label mt-1 block text-muted">{t.founder.role}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="principles-title" className="container-site section-y">
        <Reveal>
          <SectionIndex>{t.principles.index}</SectionIndex>
          <h2 id="principles-title" className="sr-only">
            {t.principles.index}
          </h2>
        </Reveal>
        <ol className="mt-10">
          {t.principles.items.map((p, i) => (
            <li key={p.title}>
              <Reveal className="grid gap-4 border-t border-border py-10 md:grid-cols-12 md:gap-6">
                <span className="t-label text-muted md:col-span-1">{pad(i + 1)}</span>
                <h3 className="t-h2 md:col-span-5 md:col-start-2">{p.title}</h3>
                <p className="t-body-l text-muted md:col-span-5 md:col-start-8">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <Standards index={t.standards.index} title={t.standards.title} items={common.standards} />

      <section aria-labelledby="facts-title" className="container-site section-y pt-0 md:pt-0">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-4">
            <SectionIndex>{t.facts.index}</SectionIndex>
            <h2 id="facts-title" className="sr-only">
              {t.facts.index}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-8">
            <dl className="grid sm:grid-cols-2">
              {[
                ...t.facts.items,
                {
                  label: t.facts.phone,
                  value: (
                    <TextLink href={PHONE_HREF} dir="ltr" className="font-mono">
                      {PHONE_DISPLAY}
                    </TextLink>
                  ),
                },
                {
                  label: t.facts.email,
                  value: (
                    <TextLink href={EMAIL_HREF} className="font-mono [overflow-wrap:anywhere]">
                      {EMAIL}
                    </TextLink>
                  ),
                },
              ].map((f) => (
                <div key={f.label} className="border-t border-border py-6 sm:pe-6">
                  <dt className="t-label text-muted">{f.label}</dt>
                  <dd className="t-h3 mt-3 font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <FinalCta locale={locale} />
    </PageTransition>
  );
}
