import type { MetadataRoute } from "next";
import { localePath, locales } from "@/lib/i18n";
import { capabilities } from "@/content/capabilities";
import { caseStudies } from "@/content/work";
import { SITE_URL } from "@/content/site";

// Company pages only. Campaign pages (/c/…) are deliberately left out (CLAUDE.md §2).
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/capabilities",
    ...capabilities.map((c) => `/capabilities/${c.slug}`),
    "/work",
    ...caseStudies.map((s) => `/work/${s.slug}`),
    "/approach",
    "/company",
    "/start",
  ];
  // One entry per language version, each listing the other as an alternate.
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: SITE_URL + localePath(locale, path),
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, SITE_URL + localePath(l, path)])),
          "x-default": SITE_URL + localePath("tr", path),
        },
      },
    })),
  );
}
