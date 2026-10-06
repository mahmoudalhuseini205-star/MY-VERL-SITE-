"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import tr from "@/content/tr/common";
import en from "@/content/en/common";
import ar from "@/content/ar/common";
import { applyTheme } from "@/lib/theme";
import { PageIntro } from "@/components/sections/PageIntro";
import { Button } from "@/components/ui/Button";

// not-found receives no params, so the language comes from the URL ("/en/…", "/ar/…" or Turkish at "/").
export default function NotFound() {
  const locale = usePathname()?.match(/^\/(en|ar)(?=\/|$)/)?.[1] as "en" | "ar" | undefined;
  const t = (locale ? { en, ar }[locale] : tr).notFound;
  useEffect(applyTheme, []);
  return (
    <PageIntro eyebrow="404" lines={t.lines} body={t.body}>
      <Button href={locale ? `/${locale}` : "/"} variant="secondary">
        {t.home}
      </Button>
    </PageIntro>
  );
}
