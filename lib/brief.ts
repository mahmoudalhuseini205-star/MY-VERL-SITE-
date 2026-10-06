// /start brief → WhatsApp message (CLAUDE.md §6). Pure and import-free, so scripts/check-brief.mjs can run it in Node.
export type Brief = {
  needs: string[]; // already-translated option labels
  business: string;
  link: string;
  goal: string;
  timeline: string;
  name: string;
};

export type BriefLabels = {
  greeting: string;
  needs: string;
  business: string;
  link: string;
  goal: string;
  timeline: string;
  name: string;
};

export function briefMessage(b: Brief, l: BriefLabels) {
  const rows: [string, string][] = [
    [l.needs, b.needs.join(", ")],
    [l.business, b.business],
    [l.link, b.link],
    [l.goal, b.goal],
    [l.timeline, b.timeline],
    [l.name, b.name],
  ];
  const body = rows
    .map(([label, value]) => [label, value.trim()])
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`);
  return [l.greeting, "", ...body].join("\n");
}
