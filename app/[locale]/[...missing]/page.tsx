import { notFound } from "next/navigation";

// Any unknown URL inside a locale renders [locale]/not-found.tsx, keeping the header, footer and fonts.
export const dynamicParams = true;

export default function Missing() {
  notFound();
}
