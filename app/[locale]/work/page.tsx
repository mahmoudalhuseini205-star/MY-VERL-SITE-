import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPagesCopy, hasLocale, pageMeta } from "@/lib/i18n";
import { caseStudies } from "@/content/work";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageIntro } from "@/components/sections/PageIntro";
import { Work } from "@/components/sections/Work";
import { FinalCta } from "@/components/sections/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[locale]/work">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return pageMeta(locale, "/work", getPagesCopy(locale).work.meta);
}

// All case studies: real projects and demo systems (each demo carries its badge).
export default async function WorkPage({ params }: PageProps<"/[locale]/work">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getPagesCopy(locale).work;

  return (
    <PageTransition>
      <PageIntro
        eyebrow={t.eyebrow}
        lines={t.lines}
        body={t.body}
        aside={<p className="t-metric">{String(caseStudies.length).padStart(2, "0")}</p>}
      />
      <Work locale={locale} inverse={false} t={{ index: `01 — ${t.list}`, title: "", intro: "" }} />
      <FinalCta locale={locale} />
    </PageTransition>
  );
}
