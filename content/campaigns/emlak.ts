// Real-estate outreach campaign → /c/emlak. Not linked from nav, footer or sitemap (CLAUDE.md §8).
// [TR draft] — Mahmud must check every Turkish line before publishing.
const tr = {
  meta: {
    title: "Emlak ofisleri için talep sistemleri — VERL Systems",
    description: "Emlak ofisinizin kaçırdığı her müşteri talebini yakalayan sistemler.",
  },
  intro: {
    lines: ["Gece gelen mesajlara sabah", "cevap veriyorsanız, o müşteri", "çoktan başka bir ofisi aradı."],
    body: "VERL Systems, emlak ofisinizin kaçırdığı her müşteri talebini yakalayan sistemler kurar.",
  },
  problem: {
    index: "01 — Sorun",
    title: "Talepler geliyor. Takip eden yok.",
    intro:
      "Talepler ilan sitelerinden, Instagram’dan ve WhatsApp’tan geliyor. Geç ya da hiç verilmeyen cevaplar yüzünden çoğu yan ofise gidiyor.",
    points: [
      "Talepler beş farklı yerden geliyor.",
      "Kimse onları takip etmiyor.",
      "Geri dönüşler unutuluyor.",
      "Bu ay kaç müşteri kaybettiğinizi bilmiyorsunuz.",
    ],
  },
  demo: {
    index: "02 — Demo",
    title: "Emlak ofislerine uyarlanabilen bir demo sistem.",
    intro: "Gerçek bir müşteri projesi değil. Sistemin nasıl çalıştığını gösteren bir demo.",
  },
  processIndex: "03 — Süreç",
};

const en: typeof tr = {
  meta: {
    title: "Lead systems for real-estate offices — VERL Systems",
    description: "Systems that catch every lead your real-estate office is losing.",
  },
  intro: {
    lines: ["A lead writes at 23:00.", "Nobody answers until morning."],
    body: "By then they’ve called the next office. We build the systems that catch every lead your office is losing.",
  },
  problem: {
    index: "01 — Problem",
    title: "The leads come in. Nobody keeps track.",
    intro:
      "Leads come from listing sites, Instagram and WhatsApp. Slow or missed replies send many of them to the office next door.",
    points: [
      "Leads arrive from five places.",
      "Nobody tracks them.",
      "Follow-ups are forgotten.",
      "You have no idea how many clients you lost this month.",
    ],
  },
  demo: {
    index: "02 — Demo",
    title: "A demo system that can be adapted for real-estate offices.",
    intro: "Not a client project. A demo that shows how the system works.",
  },
  processIndex: "03 — Process",
};

// [AR — Mahmud to check] Arabic draft.
const ar: typeof tr = {
  meta: {
    title: "أنظمة الطلبات للمكاتب العقارية — VERL Systems",
    description: "أنظمة تلتقط كل طلب يفوت مكتبك العقاري.",
  },
  intro: {
    lines: ["يكتب عميل في الحادية عشرة ليلاً.", "ولا يرد أحد حتى الصباح."],
    body: "عندها يكون قد اتصل بالمكتب التالي. نبني الأنظمة التي تلتقط كل طلب يفوت مكتبك.",
  },
  problem: {
    index: "01 — المشكلة",
    title: "الطلبات تصل. ولا أحد يتابعها.",
    intro:
      "تصل الطلبات من مواقع الإعلانات وإنستغرام وواتساب. والردود المتأخرة أو الغائبة ترسل كثيراً منها إلى المكتب المجاور.",
    points: [
      "الطلبات تصل من خمسة أماكن.",
      "لا أحد يتابعها.",
      "المتابعات تُنسى.",
      "لا تعرف كم عميلاً خسرت هذا الشهر.",
    ],
  },
  demo: {
    index: "02 — نظام تجريبي",
    title: "نظام تجريبي يمكن تكييفه للمكاتب العقارية.",
    intro: "ليس مشروعاً لعميل، بل نظام تجريبي يوضّح كيف يعمل النظام.",
  },
  processIndex: "03 — المراحل",
};

const campaign = {
  slug: "emlak",
  studies: ["real-estate-platform"], // case studies shown in the demo block
  tr,
  en,
  ar,
};

export default campaign;
