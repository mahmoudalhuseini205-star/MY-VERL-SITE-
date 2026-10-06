import { SectionIndex } from "@/components/ui/SectionIndex";
import { Reveal } from "@/components/motion/Reveal";

// Editorial section opener: Mono index top-left (DESIGN.md §4), headline + intro on the right 8 columns.
export function SectionHead({
  index,
  title,
  intro,
  id,
  children,
}: {
  index: string;
  title: string;
  intro?: string;
  id?: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="grid gap-6 md:grid-cols-12">
      <div className="md:col-span-4">
        <SectionIndex>{index}</SectionIndex>
      </div>
      <div className="md:col-span-8">
        <h2 id={id} className="t-h2 max-w-[24ch] text-balance">
          {title}
        </h2>
        {intro && <p className="t-body-l mt-6 text-muted">{intro}</p>}
        {children}
      </div>
    </Reveal>
  );
}
