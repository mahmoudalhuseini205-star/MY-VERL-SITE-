import { SectionIndex } from "@/components/ui/SectionIndex";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollWords } from "@/components/motion/ScrollWords";
import { BlueprintStage } from "@/components/motion/BlueprintStage";

// Home 2 — one manifesto sentence; its words light up as it scrolls through (DESIGN.md §5),
// set on the Blueprint next to the system architecture (DESIGN.md §4).
export function Statement({ index, lines, nodes }: { index: string; lines: string[]; nodes: string[] }) {
  return (
    <BlueprintStage nodes={nodes}>
      <Reveal>
        <SectionIndex>{index}</SectionIndex>
      </Reveal>
      <ScrollWords lines={lines} className="t-h1 mt-8 md:mt-10 md:text-[clamp(2rem,3.4vw,3.25rem)]" />
      <Reveal delay={0.3}>
        <span aria-hidden className="mt-12 block h-0.5 w-16 bg-accent" />
      </Reveal>
    </BlueprintStage>
  );
}
