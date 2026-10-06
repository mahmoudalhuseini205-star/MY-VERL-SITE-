import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPagesCopy, hasLocale, localePath, pageMeta } from "@/lib/i18n";
import { capabilities } from "@/content/capabilities";
import { PageTransition } from "@/components/motion/PageTransition";
import { FlowDiagram } from "@/components/motion/FlowDiagram";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { PageIntro } from "@/components/sections/PageIntro";
import { CapabilityPanels } from "@/components/sections/Capabilities";
import { FinalCta } from "@/components/sections/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[locale]/capabilities">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return pageMeta(locale, "/capabilities", getPagesCopy(locale).capabilities.meta);
}

// Overview of the three capabilities, then how they combine into one system.
export default async function CapabilitiesPage({ params }: PageProps<"/[locale]/capabilities">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getPagesCopy(locale).capabilities;

  return (
    <PageTransition>
      <PageIntro
        eyebrow={t.eyebrow}
        lines={t.lines}
        body={t.body}
        aside={
          <ol className="flex flex-col">
            {capabilities.map((c) => (
              <li key={c.slug} className="border-t border-border">
                <Link
                  href={localePath(locale, `/capabilities/${c.slug}`)}
                  transitionTypes={["nav-forward"]}
                  className="flex min-h-12 items-center gap-4 py-3 text-muted transition-colors hover:text-text"
                >
                  <span className="t-label">{c.index}</span>
                  <span className="font-medium">{c.title[locale]}</span>
                </Link>
              </li>
            ))}
          </ol>
        }
      />

      <section aria-label={t.eyebrow} className="container-site section-y">
        <CapabilityPanels locale={locale} />
      </section>

      <section aria-labelledby="connect-title" className="container-site section-y pt-0 md:pt-0">
        <div className="grid gap-12 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-5">
            <SectionIndex>{`04 — ${t.connect.index}`}</SectionIndex>
            <h2 id="connect-title" className="t-h2 mt-6 max-w-[18ch] text-balance">
              {t.connect.title}
            </h2>
            <p className="t-body-l mt-6 text-muted">{t.connect.body}</p>
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <FlowDiagram steps={t.connect.flow} />
          </div>
        </div>
      </section>

      <FinalCta locale={locale} />
    </PageTransition>
  );
}
