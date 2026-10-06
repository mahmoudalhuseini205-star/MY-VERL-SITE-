// DEMO system, built as a proposal for a real-estate office (name kept out until the office agrees).
// Mahmud must confirm each item in `does` and the stack.
// [TR — Mahmud to check] Every Turkish line here is a draft.
import type { CaseStudy } from "./types";

const study: CaseStudy = {
  slug: "real-estate-platform",
  isDemo: true,
  name: { tr: "Emlak ofisi web platformu", en: "Real-estate office platform", ar: "منصّة ويب لمكتب عقاري" },
  summary: {
    tr: "Bir emlak ofisi için iki dilli web sitesi. Ziyaretçi ne aradığını dört adımda anlatır, talep hazır bir mesaj olarak ofisin WhatsApp’ına düşer.",
    en: "A bilingual website for a real-estate office. Visitors describe what they need in four steps and the request lands on the office’s WhatsApp, ready to answer.",
    ar: "موقع بلغتين لمكتب عقاري. يصف الزائر ما يبحث عنه في أربع خطوات، ويصل الطلب إلى واتساب المكتب كرسالة جاهزة للرد.",
  },
  sector: { tr: "Emlak", en: "Real estate", ar: "العقارات" },
  type: { tr: "Web + Otomasyon", en: "Web + Automation", ar: "ويب + أتمتة" },
  capabilities: ["web-platforms", "automation"],
  liveUrl: { tr: "https://maj-r-gayr-menkul.vercel.app/", en: "https://maj-r-gayr-menkul.vercel.app/en/", ar: "https://maj-r-gayr-menkul.vercel.app/" },
  cover: {
    src: "/work/real-estate-platform/cover.png",
    width: 1600,
    height: 1000,
    alt: { tr: "Emlak ofisi web sitesinin açılış ekranı", en: "Real-estate office website, opening screen", ar: "شاشة الافتتاح في موقع المكتب العقاري" },
    label: "Demo — Cover",
  },
  flow: [
    { tr: "Ziyaretçi ev tipini seçer", en: "A visitor picks a type of home", ar: "يختار الزائر نوع العقار" },
    { tr: "İhtiyaç, bütçe ve zaman dört adımda sorulur", en: "Need, budget and timing are asked in four steps", ar: "يُسأل عن الحاجة والميزانية والتوقيت في أربع خطوات" },
    { tr: "Hazır talep WhatsApp’a düşer", en: "A ready request arrives on WhatsApp", ar: "يصل طلب جاهز إلى واتساب" },
    { tr: "Ofis doğrudan yanıt verir", en: "The office replies directly", ar: "يرد المكتب مباشرة" },
  ],
  walkthrough: [
    {
      image: {
        src: "/work/real-estate-platform/step-01.png",
        width: 750,
        height: 1624,
        alt: { tr: "Talep formunun ilk adımı: hizmet seçimi", en: "Request form, step one: choosing a service", ar: "نموذج الطلب، الخطوة الأولى: اختيار الخدمة" },
        label: "Demo — Step 01",
      },
      title: { tr: "Ne istediğini seçer", en: "Picks what they need", ar: "يختار ما يحتاجه" },
      body: {
        tr: "Kiralık, satın alma, satış, kiraya verme, mülk yönetimi ya da danışmanlık. Seçim tek dokunuşla yapılır.",
        en: "Rent, buy, sell, let, property management or a callback. One tap makes the choice.",
        ar: "استئجار أو شراء أو بيع أو تأجير أو إدارة عقار أو استشارة. يتم الاختيار بلمسة واحدة.",
      },
    },
    {
      image: {
        src: "/work/real-estate-platform/step-02.png",
        width: 750,
        height: 1624,
        alt: { tr: "Emlak tipi, oda sayısı ve bütçe alanları", en: "Property type, rooms and budget fields", ar: "حقول نوع العقار وعدد الغرف والميزانية" },
        label: "Demo — Step 02",
      },
      title: { tr: "Ayrıntıları girer", en: "Adds the details", ar: "يضيف التفاصيل" },
      body: {
        tr: "Emlak tipi, şehir, oda sayısı, bütçe ve taşınma zamanı. Form yalnızca seçilen hizmete uyan alanları gösterir.",
        en: "Property type, city, rooms, budget and move-in date. The form shows only the fields that fit the chosen service.",
        ar: "نوع العقار والمدينة وعدد الغرف والميزانية وموعد الانتقال. ويعرض النموذج فقط الحقول المناسبة للخدمة المختارة.",
      },
    },
    {
      image: {
        src: "/work/real-estate-platform/step-03.png",
        width: 750,
        height: 1624,
        alt: { tr: "İletişim tercihi ve KVKK onayı", en: "Preferred contact method and KVKK consent", ar: "طريقة التواصل المفضّلة والموافقة على KVKK" },
        label: "Demo — Step 03",
      },
      title: { tr: "Nasıl aranacağını seçer", en: "Chooses how to be contacted", ar: "يختار طريقة التواصل" },
      body: {
        tr: "Ad, telefon ve isteğe bağlı e-posta girilir. Müşteri WhatsApp ya da telefon aramasını seçer ve KVKK onayını verir.",
        en: "Name, phone and an optional email. The customer picks WhatsApp or a phone call and gives KVKK consent.",
        ar: "الاسم والهاتف وبريد إلكتروني اختياري. يختار العميل واتساب أو مكالمة هاتفية ويوافق على KVKK.",
      },
    },
    {
      image: {
        src: "/work/real-estate-platform/step-04.png",
        width: 750,
        height: 1624,
        alt: { tr: "Özet ekranı ve WhatsApp ile gönder düğmesi", en: "Summary screen and the Send on WhatsApp button", ar: "شاشة الملخّص وزر الإرسال عبر واتساب" },
        label: "Demo — Step 04",
      },
      title: { tr: "Özeti kontrol edip gönderir", en: "Checks the summary and sends it", ar: "يراجع الملخّص ويرسله" },
      body: {
        tr: "Tüm cevaplar tek ekranda görünür. Gönder düğmesi WhatsApp’ı mesaj yazılmış olarak açar.",
        en: "Every answer appears on one screen. The send button opens WhatsApp with the message already written.",
        ar: "تظهر كل الإجابات في شاشة واحدة. ويفتح زر الإرسال واتساب والرسالة مكتوبة مسبقاً.",
      },
    },
    {
      image: {
        src: "/work/real-estate-platform/step-05.png",
        width: 750,
        height: 1624,
        alt: { tr: "Mesajı kopyala ve ara seçenekleri", en: "Copy message and call options", ar: "خيارا نسخ الرسالة والاتصال" },
        label: "Demo — Step 05",
      },
      title: { tr: "Talep yolda kaybolmaz", en: "The request is never lost", ar: "لا يضيع الطلب" },
      body: {
        tr: "WhatsApp açılmazsa mesaj ekranda kalır. Müşteri onu tek dokunuşla kopyalar ya da ofisi doğrudan arar.",
        en: "If WhatsApp doesn’t open, the message stays on screen. The customer copies it in one tap or calls the office directly.",
        ar: "إن لم يُفتح واتساب تبقى الرسالة على الشاشة. ينسخها العميل بلمسة واحدة أو يتصل بالمكتب مباشرة.",
      },
    },
  ],
  build: {
    stack: ["Astro", "Vercel"],
    notes: [
      {
        tr: "Sayfalar statik olarak üretilir; site telefonda da hızlı açılır.",
        en: "Pages are generated as static files, so the site opens fast on a phone.",
        ar: "تُولَّد الصفحات كملفات ثابتة، فيفتح الموقع بسرعة على الهاتف.",
      },
      {
        tr: "Harita yalnızca ziyaretçi dokunduğunda yüklenir.",
        en: "The map loads only when the visitor taps it.",
        ar: "لا تُحمَّل الخريطة إلا حين يلمسها الزائر.",
      },
      {
        tr: "Talep formu hiçbir veri saklamaz; özet doğrudan WhatsApp mesajı olarak açılır.",
        en: "The request form stores nothing; the summary opens directly as a WhatsApp message.",
        ar: "نموذج الطلب لا يحفظ أي بيانات؛ ويُفتح الملخّص مباشرة كرسالة واتساب.",
      },
    ],
  },
  screens: [
    {
      src: "/work/real-estate-platform/desktop.png",
      width: 1600,
      height: 1000,
      alt: { tr: "Ev tipleri ve galeriler, masaüstü", en: "Home types and galleries on desktop", ar: "أنواع العقارات والمعارض على شاشة الكمبيوتر" },
      label: "Demo — Screen 01",
    },
    {
      src: "/work/real-estate-platform/mobile-1.png",
      width: 750,
      height: 1624,
      alt: { tr: "Açılış ekranı, telefon", en: "Opening screen on a phone", ar: "شاشة الافتتاح على الهاتف" },
      label: "Demo — Screen 02",
    },
    {
      src: "/work/real-estate-platform/mobile-2.png",
      width: 750,
      height: 1624,
      alt: { tr: "Dört adımlı talep formu, telefon", en: "Four-step request form on a phone", ar: "نموذج الطلب ذو الخطوات الأربع على الهاتف" },
      label: "Demo — Screen 03",
    },
  ],
  does: [
    {
      tr: "Altı ev tipini örnek fotoğraf galerileriyle gösterir. Her galeriden o tip için WhatsApp’tan soru sorulur.",
      en: "Shows six home types in example photo galleries. Each gallery has a button to ask about that type on WhatsApp.",
      ar: "يعرض ستة أنواع من العقارات في معارض صور نموذجية. ومن كل معرض يمكن السؤال عن هذا النوع عبر واتساب.",
    },
    {
      tr: "Kiralama, satın alma, satış, kiraya verme, yönetim ve danışmanlık taleplerini dört adımda toplar.",
      en: "Collects rent, buy, sell, let, management and consultation requests in four steps.",
      ar: "يجمع طلبات الاستئجار والشراء والبيع والتأجير والإدارة والاستشارة في أربع خطوات.",
    },
    {
      tr: "Semt kartlarından o bölgedeki ilanlar WhatsApp’tan sorulur.",
      en: "Area cards let visitors ask about listings in that district on WhatsApp.",
      ar: "تتيح بطاقات الأحياء السؤال عن العروض في كل منطقة عبر واتساب.",
    },
    {
      tr: "Harita yalnızca istenince yüklenir ve Google Haritalar’da açılır.",
      en: "The map loads only when asked for and opens in Google Maps.",
      ar: "لا تُحمَّل الخريطة إلا عند طلبها، وتُفتح في خرائط Google.",
    },
    { tr: "Hazır talebi ofisin WhatsApp’ına gönderir.", en: "Sends the ready request to the office’s WhatsApp.", ar: "يرسل الطلب الجاهز إلى واتساب المكتب." },
    {
      tr: "Türkçe ve İngilizce, açık ve koyu temada çalışır.",
      en: "Works in Turkish and English, in light and dark themes.",
      ar: "يعمل بالتركية والإنجليزية، في الوضعين الفاتح والداكن.",
    },
  ],
};

export default study;
