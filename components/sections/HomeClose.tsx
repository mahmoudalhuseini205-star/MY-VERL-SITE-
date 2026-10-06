import Image from "next/image";
import { getCopy, getPagesCopy, localePath, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { LineReveal } from "@/components/motion/LineReveal";
import { CloseStage } from "@/components/motion/CloseStage";

// Home 9 — the close (DESIGN.md §5): the same monument after dark, the seam lit and still. The page arrives
// here and stops. Inner pages keep the FinalCta card.
export function HomeClose({ locale, number }: { locale: Locale; number: string }) {
  const t = getPagesCopy(locale).finalCta;
  return (
    <CloseStage label={`${number} — ${t.index}`}>
      <Image src="/home/night.webp" alt="" aria-hidden width={2560} height={1440} sizes="(max-width: 767px) 200vw, 100vw" className="close-img" />
      <div className="close-copy container-site relative">
        <div className="md:max-w-[34rem]">
          <SectionIndex>{`${number} — ${t.index}`}</SectionIndex>
          <LineReveal as="h2" lines={t.lines} className="t-display mt-8" />
          <p className="t-body-l mt-8 text-muted">{t.body}</p>
          <Button href={localePath(locale, "/start")} className="mt-10">
            {getCopy(locale).cta}
          </Button>
        </div>
      </div>
    </CloseStage>
  );
}
