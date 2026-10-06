import type { Text } from "@/content/work/types";

export type CapabilitySlug = "web-platforms" | "automation" | "ai-systems";

export type Capability = {
  slug: CapabilitySlug;
  index: string; // "01"
  title: Text;
  outcome: Text; // one sentence, shown on the panel
  intro: Text; // page hero body
  tags: Text[]; // 3–4 Mono tags
  mini: [Text, Text, Text]; // three nodes of the panel's mini flow
  includes: { title: Text; body: Text }[];
  flow: Text[]; // "How we build it" flow diagram
  notes: Text[]; // technical layer next to the flow
};
