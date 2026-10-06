// Copy this file to content/work/<slug>.ts, fill it, then add one import line in content/work/index.ts.
// Demo → isDemo: true, describe what the system does, no results.
// Real client → isDemo: false, results only with numbers Mahmud provides.
// Optional chapters (problem, flow, build, results) are skipped when left out.
import type { CaseStudy } from "./types";

const study: CaseStudy = {
  slug: "",
  isDemo: true,
  name: { tr: "", en: "", ar: "" },
  summary: { tr: "", en: "", ar: "" },
  sector: { tr: "", en: "", ar: "" },
  type: { tr: "", en: "", ar: "" },
  capabilities: [],
  cover: { src: "/work/<slug>/cover.png", width: 1600, height: 1000, alt: { tr: "", en: "", ar: "" }, label: "<Name> — Cover" },
  screens: [],
  does: [],
};

export default study;
