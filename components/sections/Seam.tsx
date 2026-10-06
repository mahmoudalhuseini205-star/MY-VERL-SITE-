import Image from "next/image";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { SeamStage } from "@/components/motion/SeamStage";

const ID = "capabilities-title";

// Home 3 — "The seam", the page's peak and the opening of the Capabilities chapter (DESIGN.md §5, §6).
// Scroll pushes the camera into the gap between the V's arms, an Ember line draws down the seam, then it
// splits into the three capabilities. The chapter heading lands on the final frame.
export function Seam({
  index,
  title,
  intro,
  labels,
}: {
  index: string;
  title: string;
  intro: string;
  labels: string[];
}) {
  return (
    <SeamStage label={ID}>
      <Image src="/home/seam-wide.webp" alt="" aria-hidden width={2560} height={1706} sizes="100vw" className="seam-wide" />
      <Image src="/home/seam-close.webp" alt="" aria-hidden width={2400} height={2000} sizes="100vw" className="seam-close" />
      <div aria-hidden className="seam-shade" />

      <span aria-hidden className="seam-line" />
      <svg aria-hidden className="seam-branches" viewBox="0 0 100 22" preserveAspectRatio="none" fill="none">
        {["M50 0 C50 11 20 9 20 22", "M50 0 L50 22", "M50 0 C50 11 80 9 80 22"].map((d) => (
          <path key={d} d={d} className="stroke-accent" strokeWidth={2} vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <ul className="seam-labels">
        {labels.map((l) => (
          <li key={l} className="t-label">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            {l}
          </li>
        ))}
      </ul>

      <div className="seam-copy container-site">
        <SectionIndex>{index}</SectionIndex>
        <h2 id={ID} className="t-h1 mt-6 max-w-[16ch] text-balance">
          {title}
        </h2>
        <p className="t-body-l mt-6 max-w-[40ch] text-muted">{intro}</p>
      </div>
    </SeamStage>
  );
}
