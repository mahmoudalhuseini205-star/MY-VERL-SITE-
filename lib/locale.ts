// Locale helpers with no copy imports, so client components can use them without shipping every
// language's text to the browser. Server code imports lib/i18n, which re-exports these.
export const locales = ["tr", "en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// Arabic reads right to left; set on <html dir>.
export const dir = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

// Turkish lives at "/", the others under "/en" and "/ar".
export const localePath = (locale: Locale, path = "/") =>
  locale === "tr" ? path : path === "/" ? `/${locale}` : `/${locale}${path}`;

export const pad = (n: number) => String(n).padStart(2, "0");

// Per-page title/description + hreflang alternates for every language.
export const pageMeta = (locale: Locale, path: string, m: { title: string; description: string }) => ({
  ...m,
  alternates: {
    canonical: localePath(locale, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localePath(l, path)])),
      "x-default": localePath("tr", path),
    },
  },
});
