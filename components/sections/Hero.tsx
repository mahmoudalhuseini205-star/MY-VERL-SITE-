import type { CSSProperties } from "react";
import { getCopy, getHomeCopy, localePath, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { LineMask } from "@/components/motion/LineMask";
import { HeroScene } from "@/components/motion/HeroScene";

const at = (d: string) => ({ "--d": d }) as CSSProperties;

// Home 1 — "The monument" (DESIGN.md §4, §5, §6). The copy is server HTML (the LCP element); the layered
// photograph around it is progressive enhancement. Eyebrow, sub-line and CTA rise in behind the headline.
export function Hero({ locale }: { locale: Locale }) {
  const t = getHomeCopy(locale).hero;
  return (
    <HeroScene>
      <div className="md:max-w-[44rem]">
        <p className="rise t-label text-muted">{t.eyebrow}</p>
        <LineMask lines={t.lines} className="t-display hero-title mt-5 md:mt-8" />
        <p className="rise t-body-l mt-6 max-w-[42ch] md:mt-8" style={at("0.4s")}>
          {t.sub}
        </p>
        <div className="rise mt-8 md:mt-10" style={at("0.52s")}>
          <Button href={localePath(locale, "/start")}>{getCopy(locale).cta}</Button>
        </div>
      </div>
    </HeroScene>
  );
}
