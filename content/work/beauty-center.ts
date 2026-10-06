// DEMO system for a beauty and skin-care center (name kept out, like the real-estate demo).
// Separate from salon.ts, which is the real client project. Mahmud must confirm each item in `does`.
// The live site shows client and satisfaction numbers; they are kept out of every screenshot here.
// No `build` chapter until the stack is confirmed.
// [TR — Mahmud to check] Every Turkish line here is a draft.
import type { CaseStudy } from "./types";

const study: CaseStudy = {
  slug: "beauty-center",
  isDemo: true,
  name: { tr: "Güzellik merkezi web sitesi", en: "Beauty center website", ar: "موقع لمركز تجميل" },
  summary: {
    tr: "Bir güzellik ve cilt bakım merkezi için web sitesi. Müşteri hizmeti, günü ve saati seçer; randevu talebi hazır bir mesaj olarak merkezin WhatsApp’ına düşer.",
    en: "A website for a beauty and skin-care center. Clients pick a treatment, a day and a time, and the booking request lands on the center’s WhatsApp as a ready message.",
    ar: "موقع لمركز تجميل وعناية بالبشرة. تختار العميلة الخدمة واليوم والساعة، ويصل طلب الحجز إلى واتساب المركز كرسالة جاهزة.",
  },
  sector: { tr: "Güzellik", en: "Beauty", ar: "التجميل" },
  type: { tr: "Web sitesi", en: "Website", ar: "موقع إلكتروني" },
  capabilities: ["web-platforms"],
  liveUrl: {
    tr: "https://denizdamlaguzellik-beuty-web2.vercel.app/",
    en: "https://denizdamlaguzellik-beuty-web2.vercel.app/",
    ar: "https://denizdamlaguzellik-beuty-web2.vercel.app/",
  },
  cover: {
    src: "/work/beauty-center/cover.png",
    width: 1600,
    height: 1000,
    alt: { tr: "Güzellik merkezi web sitesinin açılış ekranı", en: "Beauty center website, opening screen", ar: "شاشة الافتتاح في موقع مركز التجميل" },
    label: "Demo — Cover",
  },
  flow: [
    { tr: "Müşteri randevu düğmesine dokunur", en: "A client taps the booking button", ar: "تلمس العميلة زر الحجز" },
    { tr: "Hizmet, gün ve saat seçilir", en: "Treatment, day and time are chosen", ar: "تُختار الخدمة واليوم والساعة" },
    { tr: "Hazır talep WhatsApp’a düşer", en: "A ready request arrives on WhatsApp", ar: "يصل طلب جاهز إلى واتساب" },
    { tr: "Merkez randevuyu onaylar", en: "The center confirms the appointment", ar: "يؤكّد المركز الموعد" },
  ],
  walkthrough: [
    {
      image: {
        src: "/work/beauty-center/step-01.png",
        width: 750,
        height: 1624,
        alt: { tr: "Açılış ekranında Hemen Randevu Al düğmesi", en: "The booking button on the opening screen", ar: "زر الحجز في شاشة الافتتاح" },
        label: "Demo — Step 01",
      },
      title: { tr: "Randevu düğmesine dokunur", en: "Taps the booking button", ar: "تلمس زر الحجز" },
      body: {
        tr: "Hemen Randevu Al düğmesi açılış ekranında ve menüde durur. Köşedeki WhatsApp düğmesi her an görünür.",
        en: "The booking button sits on the opening screen and in the menu. A WhatsApp button stays in the corner at all times.",
        ar: "زر الحجز موجود في شاشة الافتتاح وفي القائمة، وزر واتساب ظاهر في الزاوية طوال الوقت.",
      },
    },
    {
      image: {
        src: "/work/beauty-center/step-02.png",
        width: 750,
        height: 1624,
        alt: { tr: "Ad ve telefon alanlarında uyarı mesajları", en: "Name and phone fields with their error messages", ar: "حقلا الاسم والهاتف مع رسائل التنبيه" },
        label: "Demo — Step 02",
      },
      title: { tr: "Adını ve telefonunu yazar", en: "Enters a name and phone number", ar: "تكتب الاسم ورقم الهاتف" },
      body: {
        tr: "İki alan zorunludur. Bilgi eksik ya da hatalıysa form bunu alanın hemen altında açıkça yazar.",
        en: "Both fields are required. If something is missing or wrong, the form says so right under the field.",
        ar: "الحقلان إلزاميان. وإن كانت معلومة ناقصة أو خاطئة، يوضّح النموذج ذلك تحت الحقل مباشرة.",
      },
    },
    {
      image: {
        src: "/work/beauty-center/step-03.png",
        width: 750,
        height: 1624,
        alt: { tr: "Hizmet, tarih ve saat seçimi", en: "Choosing the treatment, date and time", ar: "اختيار الخدمة والتاريخ والساعة" },
        label: "Demo — Step 03",
      },
      title: { tr: "Hizmeti, günü ve saati seçer", en: "Picks the treatment, day and time", ar: "تختار الخدمة واليوم والساعة" },
      body: {
        tr: "Cilt bakımı, lazer epilasyon, bölgesel incelme ya da kalıcı makyaj listeden seçilir. Geçmiş bir tarih seçilemez ve isteğe bağlı not eklenebilir.",
        en: "Skin care, laser hair removal, body shaping or permanent makeup is picked from a list. Past dates can’t be chosen, and an optional note can be added.",
        ar: "تُختار العناية بالبشرة أو إزالة الشعر بالليزر أو نحت الجسم أو المكياج الدائم من قائمة. لا يمكن اختيار تاريخ مضى، ويمكن إضافة ملاحظة اختيارية.",
      },
    },
    {
      image: {
        src: "/work/beauty-center/step-04.png",
        width: 750,
        height: 1624,
        alt: { tr: "WhatsApp ile Randevuyu Onayla düğmesi", en: "The Confirm on WhatsApp button", ar: "زر تأكيد الموعد عبر واتساب" },
        label: "Demo — Step 04",
      },
      title: { tr: "Randevuyu WhatsApp’tan gönderir", en: "Sends the booking on WhatsApp", ar: "ترسل الحجز عبر واتساب" },
      body: {
        tr: "Düğme WhatsApp’ı tüm bilgiler yazılı olarak açar. Merkez talebi tek mesajda görür ve randevuyu onaylar.",
        en: "The button opens WhatsApp with every detail already written. The center sees the request in one message and confirms it.",
        ar: "يفتح الزر واتساب وكل التفاصيل مكتوبة. يرى المركز الطلب في رسالة واحدة ويؤكّد الموعد.",
      },
    },
  ],
  screens: [
    {
      src: "/work/beauty-center/desktop.png",
      width: 1600,
      height: 1000,
      alt: { tr: "Online randevu bölümü, masaüstü", en: "Online booking section on desktop", ar: "قسم الحجز الإلكتروني على شاشة الكمبيوتر" },
      label: "Demo — Screen 01",
    },
    {
      src: "/work/beauty-center/mobile-1.png",
      width: 750,
      height: 1624,
      alt: { tr: "Açılış ekranı, telefon", en: "Opening screen on a phone", ar: "شاشة الافتتاح على الهاتف" },
      label: "Demo — Screen 02",
    },
    {
      src: "/work/beauty-center/mobile-2.png",
      width: 750,
      height: 1624,
      alt: { tr: "Randevu formu, telefon", en: "Booking form on a phone", ar: "نموذج الحجز على الهاتف" },
      label: "Demo — Screen 03",
    },
  ],
  does: [
    {
      tr: "Dört ana hizmeti ve her birinin neleri kapsadığını anlatır.",
      en: "Presents four core treatments and what each one covers.",
      ar: "يعرض أربع خدمات رئيسية وما تشمله كل منها.",
    },
    {
      tr: "Randevu talebini tek ekranda toplar ve hazır bir mesaj olarak WhatsApp’a gönderir.",
      en: "Collects a booking request on one screen and sends it to WhatsApp as a ready message.",
      ar: "يجمع طلب الحجز في شاشة واحدة ويرسله إلى واتساب كرسالة جاهزة.",
    },
    {
      tr: "Çalışma saatlerini, dokununca aranan telefonu ve yol tarifini aynı yerde gösterir.",
      en: "Shows opening hours, a tap-to-call number and directions in one place.",
      ar: "يعرض ساعات العمل ورقم هاتف يُتصل به بلمسة والاتجاهات في مكان واحد.",
    },
    {
      tr: "Açık ve koyu temada, telefonda ve masaüstünde çalışır.",
      en: "Works in light and dark themes, on phone and desktop.",
      ar: "يعمل في الوضعين الفاتح والداكن، على الهاتف والكمبيوتر.",
    },
  ],
};

export default study;
