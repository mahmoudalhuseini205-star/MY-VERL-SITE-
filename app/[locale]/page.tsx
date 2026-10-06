import { notFound } from "next/navigation";
import { getCopy, getHomeCopy, hasLocale, localePath } from "@/lib/i18n";
import { PageTransition } from "@/components/motion/PageTransition";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Seam } from "@/components/sections/Seam";
import { CapabilityPanels } from "@/components/sections/Capabilities";
import { Work } from "@/components/sections/Work";
import { Approach } from "@/components/sections/Approach";
import { Standards } from "@/components/sections/Standards";
import { SystemMap } from "@/components/sections/SystemMap";
import { CompanyTeaser } from "@/components/sections/CompanyTeaser";
import { HomeClose } from "@/components/sections/HomeClose";

// Home — the company (DESIGN.md §5 section order).
export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getHomeCopy(locale);
  const common = getCopy(locale);

  return (
    <PageTransition>
      <Hero locale={locale} />
      <Statement index={t.statement.index} lines={t.statement.lines} nodes={t.statement.nodes} />
      <Seam
        index={t.capabilities.index}
        title={t.capabilities.title}
        intro={t.capabilities.intro}
        labels={t.seam}
      />
      <section aria-labelledby="capabilities-title" className="container-site section-y">
        <CapabilityPanels locale={locale} />
      </section>
      <Work locale={locale} t={t.work} />
      <Approach
        index={t.approach.index}
        title={t.approach.title}
        phases={common.approach.phases}
        receive={common.approach.receive}
        link={{ href: localePath(locale, "/approach"), label: t.approach.link }}
      />
      <Standards index={t.standards.index} title={t.standards.title} items={common.standards} />
      <SystemMap index={t.system.index} title={t.system.title} intro={t.system.intro} scenarios={t.system.scenarios} />
      <CompanyTeaser locale={locale} t={t.company} />
      <HomeClose locale={locale} number="08" />
    </PageTransition>
  );
}
