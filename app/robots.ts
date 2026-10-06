import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/c/", "/en/c/", "/ar/c/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
