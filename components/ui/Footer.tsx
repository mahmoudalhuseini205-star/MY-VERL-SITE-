import { getCopy, type Locale } from "@/lib/i18n";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF, whatsappUrl } from "@/content/site";
import { NavLinks } from "./NavLinks";
import { TextLink } from "./TextLink";
import { Wordmark } from "./Wordmark";

// Wordmark + tagline · the same nav · phone, WhatsApp, email · ©. No social links until Mahmud provides them;
// campaign pages are never linked here.
export function Footer({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  return (
    <footer className="border-t border-border">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:gap-6 md:py-20">
        <div className="md:col-span-5">
          <Wordmark locale={locale} />
          <p className="t-h3 mt-6 max-w-[18ch] font-medium">{t.footer.tagline}</p>
        </div>
        <div className="md:col-span-3">
          <p className="t-label text-muted">{t.nav.label}</p>
          <NavLinks locale={locale} t={t.nav} vertical className="mt-3" />
        </div>
        <div className="flex flex-col gap-3 md:col-span-4">
          <p className="t-label text-muted">{t.footer.phone}</p>
          <TextLink href={PHONE_HREF} dir="ltr" className="self-start font-mono">
            {PHONE_DISPLAY}
          </TextLink>
          <TextLink href={whatsappUrl(t.footer.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="self-start">
            {t.footer.whatsapp}
          </TextLink>
          <p className="t-label mt-5 text-muted">{t.footer.email}</p>
          <TextLink href={EMAIL_HREF} className="self-start font-mono">
            {EMAIL}
          </TextLink>
        </div>
      </div>
      <div className="container-site flex flex-wrap items-center justify-between gap-4 border-t border-border py-6">
        <p className="t-label text-muted">© {new Date().getFullYear()} VERL Systems</p>
        <p className="t-label text-muted">{t.footer.location}</p>
      </div>
    </footer>
  );
}
