import { LineMask } from "@/components/motion/LineMask";

// Inner page hero: Mono eyebrow, line-mask H1 (renders as text immediately), one sentence, optional CTA,
// optional aside on the right. A faint blueprint grid band ties every page back to the Home hero.
export function PageIntro({
  eyebrow,
  lines,
  heading,
  body,
  aside,
  small,
  children,
}: {
  eyebrow: React.ReactNode;
  lines?: string[];
  heading?: React.ReactNode; // replaces the line-mask H1 (e.g. a shared-element title)
  body: string;
  aside?: React.ReactNode;
  small?: boolean; // full-sentence headlines (campaign pages) use H1 size
  children?: React.ReactNode;
}) {
  return (
    <section data-ambient-start className="relative isolate overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="blueprint-bg absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />
      <div className="container-site grid gap-12 pt-16 pb-20 md:grid-cols-12 md:gap-6 md:pt-28 md:pb-32">
        <div className="md:col-span-8">
          <div className="t-label text-muted">{eyebrow}</div>
          <div className="mt-6 md:mt-8">{heading ?? <LineMask lines={lines ?? []} className={small ? "t-h1 max-w-[22ch]" : "t-display"} />}</div>
          <p className="t-body-l mt-8 text-muted">{body}</p>
          {children && <div className="mt-10">{children}</div>}
        </div>
        {aside && <div className="md:col-span-3 md:col-start-10 md:self-end">{aside}</div>}
      </div>
    </section>
  );
}
