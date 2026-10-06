import type { CaseStudy } from "./types";
import realEstatePlatform from "./real-estate-platform";
import aureviaLogistics from "./aurevia-logistics";
import beautyCenter from "./beauty-center";

// Order here = order on Home and /work.
// salon.ts and lead-response-system.ts are kept for later; add them back once they have screens.
export const caseStudies: CaseStudy[] = [realEstatePlatform, aureviaLogistics, beautyCenter];

export const getCaseStudy = (slug: string) => caseStudies.find((s) => s.slug === slug);
