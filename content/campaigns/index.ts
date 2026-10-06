import emlak from "./emlak";

// New campaign: copy emlak.ts, then add one import line here. The c/[slug] template renders it.
export const campaigns = [emlak];

export type Campaign = typeof emlak;

export const getCampaign = (slug: string) => campaigns.find((c) => c.slug === slug);
