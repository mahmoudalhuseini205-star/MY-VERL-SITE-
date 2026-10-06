import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Schibsted_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { dir, getCopy, hasLocale, locales, pageMeta } from "@/lib/i18n";
import { SITE_URL } from "@/content/site";
import { themeScript } from "@/lib/theme";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { InlineScript } from "@/components/ui/InlineScript";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { AmbientField } from "@/components/motion/AmbientField";
import { BrandIntro, introScript } from "@/components/motion/BrandIntro";
import "../globals.css";

// latin-ext carries ğ ş ı İ.
const sans = Schibsted_Grotesk({ variable: "--font-brand", subsets: ["latin", "latin-ext"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ variable: "--font-brand-mono", subsets: ["latin", "latin-ext"], weight: ["400", "500"] });
// Arabic glyphs only (design.md §2), used first on /ar (globals.css). Not preloaded and no Arial fallback,
// so Latin text falls through to the brand fonts and TR/EN pages never download it.
const arabic = IBM_Plex_Sans_Arabic({ variable: "--font-arabic", subsets: ["arabic"], weight: ["400", "500", "600"], preload: false, adjustFontFallback: false });

// Open and refresh always start at the top. Chrome decides restoration from the mode saved when the
// page is left, so "manual" is set on pagehide; back to "auto" once shown so in-app Back still restores.
const scrollScript = `(function(){try{var h=history;addEventListener("pagehide",function(){h.scrollRestoration="manual"});addEventListener("pageshow",function(){setTimeout(function(){h.scrollRestoration="auto"},0)})}catch(e){}})()`;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { metadataBase: new URL(SITE_URL), ...pageMeta(locale, "/", getCopy(locale).meta) };
}

// No layout-level <ViewTransition>: each page carries its own (PageTransition), otherwise page
// enter/exit would never fire. The header is isolated with view-transition-name instead.
export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getCopy(locale);

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      data-theme="light"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} ${arabic.variable}`}
    >
      <head>
        <InlineScript html={themeScript + ";" + scrollScript + ";" + introScript} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="t-label sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-3"
        >
          {t.skipToContent}
        </a>
        <BrandIntro />
        <AmbientField />
        <MotionProvider>
          <Header locale={locale} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer locale={locale} />
        </MotionProvider>
        <SmoothScroll />
      </body>
    </html>
  );
}
