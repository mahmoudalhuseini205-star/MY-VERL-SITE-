// REAL client project (about.md §8). Only what is known is filled in.
// Waiting for Mahmud: salon name, year, live URL, the problem in the client's words,
// what was built, stack, screenshots and any real numbers. Missing chapters are skipped automatically.
// [TR — Mahmud to check] Every Turkish line here is a draft.
import type { CaseStudy } from "./types";

const study: CaseStudy = {
  slug: "salon",
  isDemo: false,
  name: { tr: "Güzellik salonu web sitesi", en: "Beauty salon website", ar: "موقع لصالون تجميل" },
  summary: {
    tr: "Bir güzellik salonu için web sitesi. VERL Systems’in teslim ettiği ilk müşteri projesi.",
    en: "A website for a beauty salon. The first client project VERL Systems delivered.",
    ar: "موقع لصالون تجميل. أول مشروع لعميل سلّمته VERL Systems.",
  },
  sector: { tr: "Güzellik", en: "Beauty", ar: "التجميل" },
  type: { tr: "Web sitesi", en: "Website", ar: "موقع إلكتروني" },
  capabilities: ["web-platforms"],
  cover: {
    src: "/work/salon/cover.png",
    width: 1600,
    height: 1000,
    alt: { tr: "Güzellik salonu web sitesi", en: "Beauty salon website", ar: "موقع صالون التجميل" },
    label: "Salon — Cover",
  },
  screens: [
    {
      src: "/work/salon/desktop.png",
      width: 1600,
      height: 1000,
      alt: { tr: "Web sitesi, masaüstü", en: "Website on desktop", ar: "الموقع على شاشة الكمبيوتر" },
      label: "Salon — Screen 01",
    },
    {
      src: "/work/salon/mobile-1.png",
      width: 750,
      height: 1624,
      alt: { tr: "Web sitesi, telefon", en: "Website on a phone", ar: "الموقع على الهاتف" },
      label: "Salon — Screen 02",
    },
    {
      src: "/work/salon/mobile-2.png",
      width: 750,
      height: 1624,
      alt: { tr: "Web sitesi, telefon", en: "Website on a phone", ar: "الموقع على الهاتف" },
      label: "Salon — Screen 03",
    },
  ],
  note: {
    tr: "Projenin tam hikâyesi (ihtiyaç, kurulum ve ekranlar) hazırlanıyor.",
    en: "The full case study (the brief, the build and the screens) is being prepared.",
    ar: "القصة الكاملة للمشروع (الاحتياج والبناء والشاشات) قيد الإعداد.",
  },
};

export default study;
