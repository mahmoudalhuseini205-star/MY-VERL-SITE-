// DEMO system. Mahmud must confirm the demo really does each item in `does` and uses the listed stack.
// [TR — Mahmud to check] Every Turkish line here is a draft.
import type { CaseStudy } from "./types";

const study: CaseStudy = {
  slug: "lead-response-system",
  isDemo: true,
  name: { tr: "Talep karşılama ve yanıt sistemi", en: "Inquiry intake and response system", ar: "نظام استقبال الطلبات والرد عليها" },
  summary: {
    tr: "Web sayfasından gelen talepleri ön eler, WhatsApp’ta hemen yanıtlar ve her birini doğru kişiye yönlendirir.",
    en: "Qualifies inquiries from a web page, replies on WhatsApp right away and routes each one to the right person.",
    ar: "يفرز الطلبات القادمة من صفحة الويب، ويرد عليها فوراً على واتساب، ويوجّه كل طلب إلى الشخص المناسب.",
  },
  sector: { tr: "Hizmet işletmeleri", en: "Service businesses", ar: "الأنشطة الخدمية" },
  type: { tr: "Web + Otomasyon", en: "Web + Automation", ar: "ويب + أتمتة" },
  capabilities: ["web-platforms", "automation"],
  cover: {
    src: "/work/lead-response-system/cover.png",
    width: 1600,
    height: 1000,
    alt: { tr: "Talep karşılama sistemi ekranları", en: "Inquiry intake system screens", ar: "شاشات نظام استقبال الطلبات" },
    label: "Demo — Cover",
  },
  problem: {
    tr: "Talepler birden fazla kanaldan geliyor. Birinin her birini okuması, aynı soruları sorması ve elle iletmesi gerekiyor. Bu da çoğu zaman geç oluyor.",
    en: "Inquiries arrive through more than one channel. Someone has to read each one, ask the same questions and pass it on by hand, often late.",
    ar: "تصل الطلبات من أكثر من قناة. وعلى أحدهم أن يقرأ كل طلب، ويطرح الأسئلة نفسها، وينقله يدوياً، وغالباً بعد فوات الوقت.",
  },
  flow: [
    { tr: "Ziyaretçi talep sayfasına gelir", en: "A visitor lands on the inquiry page", ar: "يصل الزائر إلى صفحة الطلب" },
    { tr: "İhtiyaç, zaman ve ayrıntılar sorulur", en: "Need, timing and details are asked", ar: "يُسأل عن الحاجة والتوقيت والتفاصيل" },
    { tr: "Hazır talep WhatsApp’a düşer", en: "A ready inquiry arrives on WhatsApp", ar: "يصل طلب جاهز إلى واتساب" },
    { tr: "Anında yanıt gider", en: "An instant reply goes out", ar: "يُرسل رد فوري" },
    { tr: "Talep doğru kişiye yönlendirilir", en: "The inquiry is routed to the right person", ar: "يُوجَّه الطلب إلى الشخص المناسب" },
  ],
  build: {
    stack: ["Next.js", "n8n", "WhatsApp Business API"],
    notes: [
      {
        tr: "Talep sayfası Next.js ile kurulur; her gönderim bir n8n iş akışını başlatır.",
        en: "The inquiry page is built with Next.js; each submission starts an n8n workflow.",
        ar: "صفحة الطلب مبنية بـ Next.js، وكل إرسال يبدأ سير عمل في n8n.",
      },
      {
        tr: "Mesajlar WhatsApp Business API üzerinden gönderilir ve alınır.",
        en: "Messages are sent and received through the WhatsApp Business API.",
        ar: "تُرسل الرسائل وتُستقبل عبر WhatsApp Business API.",
      },
      {
        tr: "Yönlendirme kuralları tek bir yerde tutulur ve kod yazmadan değiştirilebilir.",
        en: "Routing rules live in one place and can be changed without writing code.",
        ar: "قواعد التوجيه محفوظة في مكان واحد ويمكن تغييرها دون كتابة كود.",
      },
    ],
  },
  screens: [
    {
      src: "/work/lead-response-system/page-desktop.png",
      width: 1600,
      height: 1000,
      alt: { tr: "Talep sayfası, masaüstü", en: "Inquiry page on desktop", ar: "صفحة الطلب على شاشة الكمبيوتر" },
      label: "Demo — Screen 01",
    },
    {
      src: "/work/lead-response-system/page-mobile.png",
      width: 750,
      height: 1624,
      alt: { tr: "Talep sayfası, telefon", en: "Inquiry page on a phone", ar: "صفحة الطلب على الهاتف" },
      label: "Demo — Screen 02",
    },
    {
      src: "/work/lead-response-system/whatsapp.png",
      width: 750,
      height: 1624,
      alt: { tr: "WhatsApp’ta anında yanıt ve sorular", en: "Instant reply and questions on WhatsApp", ar: "رد فوري وأسئلة على واتساب" },
      label: "Demo — Screen 03",
    },
  ],
  does: [
    {
      tr: "Ziyaretçiye ihtiyacını, zamanlamasını ve ayrıntıları sorar.",
      en: "Asks each visitor about their need, timing and details.",
      ar: "يسأل كل زائر عن حاجته وتوقيته والتفاصيل.",
    },
    {
      tr: "Hazır talebi doğrudan işletmenin WhatsApp’ına gönderir.",
      en: "Sends the ready inquiry straight to the business’s WhatsApp.",
      ar: "يرسل الطلب الجاهز مباشرة إلى واتساب النشاط.",
    },
    {
      tr: "Mesai dışında gelen mesaja da anında yanıt verir.",
      en: "Replies instantly, including outside working hours.",
      ar: "يرد فوراً، حتى خارج ساعات العمل.",
    },
    { tr: "Talebi doğru kişiye yönlendirir.", en: "Routes the inquiry to the right person.", ar: "يوجّه الطلب إلى الشخص المناسب." },
  ],
};

export default study;
