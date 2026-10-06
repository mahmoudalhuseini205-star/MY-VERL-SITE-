import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { VMark } from "./VMark";

// Faceted V + "VERL" with the Ember underline as a fill (never Ember text).
export function Wordmark({ locale }: { locale: Locale }) {
  return (
    <Link href={localePath(locale)} aria-label="VERL Systems" dir="ltr" className="inline-flex min-h-11 items-center gap-2.5">
      <VMark underline={false} className="h-5 w-auto" />
      <span className="flex flex-col">
        <span className="text-xl font-semibold tracking-[0.08em] text-text">VERL</span>
        <span aria-hidden className="mt-0.5 h-0.5 w-full bg-accent" />
      </span>
    </Link>
  );
}
