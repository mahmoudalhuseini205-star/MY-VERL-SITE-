import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPagesCopy, hasLocale, pageMeta } from "@/lib/i18n";
import { PageTransition } from "@/components/motion/PageTransition";
import { LineMask } from "@/components/motion/LineMask";
import { StartBrief } from "@/components/sections/StartBrief";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/content/site";

export async function generateMetadata({ params }: PageProps<"/[locale]/start">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return pageMeta(locale, "/start", getPagesCopy(locale).start.meta);
}

// The conversion path: a short brief that ends in WhatsApp (CLAUDE.md §6), plus a direct WhatsApp shortcut.
export default async function StartPage({ params }: PageProps<"/[locale]/start">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getPagesCopy(locale).start;

  return (
    <PageTransition>
      <section className="relative isolate">
        <div
          aria-hidden
          data-ambient-start
          className="blueprint-bg absolute inset-x-0 top-0 -z-10 h-[70vh] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <div className="container-site grid gap-12 pt-16 pb-24 md:grid-cols-12 md:gap-6 md:pt-24 md:pb-32">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <p className="t-label text-muted">{t.eyebrow}</p>
              <LineMask lines={[t.title]} className="t-h1 mt-6 text-balance" />
              <p className="t-body-l mt-8 text-muted">{t.body}</p>
              <div className="mt-10 border-t border-border pt-6">
                <p className="t-label text-muted">{t.direct.lead}</p>
                <Button
                  variant="secondary"
                  href={whatsappUrl(t.direct.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  {t.direct.label}
                </Button>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <StartBrief t={t} />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
