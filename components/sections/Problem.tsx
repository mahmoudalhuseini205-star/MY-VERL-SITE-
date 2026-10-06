import type { Campaign } from "@/content/campaigns";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { Reveal } from "@/components/motion/Reveal";

// Campaign pages only (/c/…): one-pain-point blocks are banned on company pages (design.md §5).
// Asymmetric 5 / 7: statement left, the points right.
export function Problem({ t }: { t: Campaign["tr"]["problem"] }) {
  return (
    <section aria-labelledby="problem-title" className="container-site section-y">
      <div className="grid gap-12 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-5">
          <SectionIndex>{t.index}</SectionIndex>
          <h2 id="problem-title" className="t-h2 mt-6 text-balance">
            {t.title}
          </h2>
          <p className="t-body-l mt-6 text-muted">{t.intro}</p>
        </Reveal>

        <ol className="md:col-span-6 md:col-start-7">
          {t.points.map((point, i) => (
            <li key={point}>
              <Reveal delay={i * 0.08} className="flex gap-6 border-t border-border py-8 md:gap-10">
                <span className="t-label pt-1.5 text-muted">{String(i + 1).padStart(2, "0")}</span>
                <p className="t-h3 font-medium">{point}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
