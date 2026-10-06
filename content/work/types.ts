import type { Locale } from "@/lib/i18n";
import type { CapabilitySlug } from "@/content/capabilities/types";

export type Text = Record<Locale, string>;

// Put the file in public/<src>; PNG/JPG is fine, next/image serves AVIF/WebP.
// Until the file exists the page shows a blueprint placeholder carrying `label` (e.g. "SALON — SCREEN 01").
export type WorkImage = { src: string; width: number; height: number; alt: Text; label: string };

type Base = {
  slug: string;
  name: Text;
  summary: Text; // one line, shown on the tile and under the page title
  sector: Text;
  year?: string;
  type: Text;
  capabilities: CapabilitySlug[]; // drives "Related work" on capability pages
  liveUrl?: Text; // "View live site" link on the case study, per locale
  cover: WorkImage;
  problem?: Text; // in the client's own words — leave out until real
  flow?: Text[]; // nodes of the flow diagram, in order
  walkthrough?: { image: WorkImage; title: Text; body: Text }[]; // "How a customer uses it": one real screen per step
  build?: { stack: string[]; notes: Text[] }; // "How we built it" — leave out until real
  screens: WorkImage[];
  note?: Text; // shown when chapters are still missing
};

// Honesty rule (CLAUDE.md §6): a demo describes what the system does and can never carry results.
export type CaseStudy =
  | (Base & { isDemo: true; does: Text[]; results?: never })
  | (Base & { isDemo: false; does?: Text[]; results?: { value: string; label: Text }[] });
