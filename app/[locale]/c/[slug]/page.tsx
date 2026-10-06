import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCopy, hasLocale, localePath, pageMeta } from "@/lib/i18n";
import { campaigns, getCampaign } from "@/content/campaigns";
import { caseStudies } from "@/content/work";
import { Button } from "@/components/ui/Button";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageIntro } from "@/components/sections/PageIntro";
import { Problem } from "@/components/sections/Problem";
import { Work } from "@/components/sections/Work";
import { Approach } from "@/components/sections/Approach";
import { FinalCta } from "@/components/sections/FinalCta";

export const dynamicParams = false;

export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }));
}

// Campaign pages are outreach-only: noindex, and never in nav, footer or sitemap (CLAUDE.md §2, §8).
export async function generateMetadata({ params }: PageProps<"/[locale]/c/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const campaign = getCampaign(slug);
  if (!hasLocale(locale) || !campaign) return {};
  return { ...pageMeta(locale, `/c/${slug}`, campaign[locale].meta), robots: { index: false, follow: false } };
}

// Campaign template: sector problem copy is allowed here only. The CTA still goes to /start.
export default async function CampaignPage({ params }: PageProps<"/[locale]/c/[slug]">) {
  const { locale, slug } = await params;
  const campaign = getCampaign(slug);
  if (!hasLocale(locale) || !campaign) notFound();
  const t = campaign[locale];
  const common = getCopy(locale);

  return (
    <PageTransition>
      <PageIntro eyebrow="VERL Systems" lines={t.intro.lines} body={t.intro.body} small>
        <Button href={localePath(locale, "/start")}>{common.cta}</Button>
      </PageIntro>
      <Problem t={t.problem} />
      <Work locale={locale} t={t.demo} studies={caseStudies.filter((s) => campaign.studies.includes(s.slug))} />
      <Approach
        index={t.processIndex}
        title={common.nav.approach}
        phases={common.approach.phases}
        receive={common.approach.receive}
      />
      <FinalCta locale={locale} />
    </PageTransition>
  );
}
