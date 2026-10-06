import webPlatforms from "./web-platforms";
import automation from "./automation";
import aiSystems from "./ai-systems";

// New capability: add a file next to these, then one import line here.
// It appears on Home, /capabilities and at /capabilities/<slug>.
export const capabilities = [webPlatforms, automation, aiSystems];

export const getCapability = (slug: string) => capabilities.find((c) => c.slug === slug);
