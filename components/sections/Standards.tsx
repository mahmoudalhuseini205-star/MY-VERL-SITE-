import { pad } from "@/lib/i18n";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "./SectionHead";

// Confirmed commitments only (about.md §6). Unconfirmed standards are not rendered at all.
export function Standards({
  index,
  title,
  items,
}: {
  index: string;
  title: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section aria-labelledby="standards-title" className="container-site section-y">
      <SectionHead index={index} title={title} id="standards-title" />
      <ol className="mt-14 md:mt-20">
        {items.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 0.08} className="grid gap-4 border-t border-border py-10 md:grid-cols-12 md:gap-6 md:py-14">
              <span className="t-label text-muted md:col-span-4">{pad(i + 1)}</span>
              <div className="md:col-span-8">
                <h3 className="t-h1 max-w-[18ch]">{s.title}</h3>
                <p className="t-body-l mt-6 text-muted">{s.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
