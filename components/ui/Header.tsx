import { getCopy, localePath, type Locale } from "@/lib/i18n";
import { Button } from "./Button";
import { LocaleSwitch } from "./LocaleSwitch";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";
import { HeaderShell } from "./HeaderShell";

// Wordmark · Capabilities · Work · Approach · Company · TR/EN · theme · Start a project.
// The header CTA is secondary: each page's hero owns the single Ember button per viewport.
// HeaderShell names it for view transitions (stays still while pages change) and hides it on scroll down.
export function Header({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  return (
    <HeaderShell>
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-12">
          <Wordmark locale={locale} />
          <NavLinks locale={locale} t={t.nav} className="hidden md:block" />
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center gap-1 md:flex">
            <LocaleSwitch current={locale} label={t.languageSwitch} />
            <ThemeToggle label={t.themeToggle} />
          </div>
          <Button variant="secondary" href={localePath(locale, "/start")} className="min-h-11 px-4 py-2 text-sm md:ms-2">
            {t.cta}
          </Button>
          <MobileMenu
            locale={locale}
            t={t.nav}
            cta={t.cta}
            themeLabel={t.themeToggle}
            languageLabel={t.languageSwitch}
          />
        </div>
      </div>
    </HeaderShell>
  );
}
