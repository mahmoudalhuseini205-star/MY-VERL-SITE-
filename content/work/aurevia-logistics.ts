// DEMO system. Aurevia is a fictional brand. Mahmud must confirm each item in `does` and the stack.
// [TR — Mahmud to check] Every Turkish line here is a draft.
import type { CaseStudy } from "./types";

const study: CaseStudy = {
  slug: "aurevia-logistics",
  isDemo: true,
  name: { tr: "Aurevia — lojistik web platformu", en: "Aurevia — logistics platform", ar: "Aurevia — منصّة ويب للخدمات اللوجستية" },
  summary: {
    tr: "Türkiye’den Orta Doğu’ya yük taşıyan bir lojistik firması için üç dilli web platformu. Müşteri sevkiyatını dört adımda planlar ve tahmini bir fiyat aralığı görür.",
    en: "A three-language platform for a logistics firm shipping from Türkiye to the Middle East. Customers plan a shipment in four steps and see an estimated price range.",
    ar: "منصّة ويب بثلاث لغات لشركة لوجستية تنقل البضائع من تركيا إلى الشرق الأوسط. يخطّط العميل شحنته في أربع خطوات ويرى نطاق سعر تقديرياً.",
  },
  sector: { tr: "Lojistik", en: "Logistics", ar: "الخدمات اللوجستية" },
  type: { tr: "Web platformu", en: "Web platform", ar: "منصّة ويب" },
  capabilities: ["web-platforms"],
  liveUrl: { tr: "https://aurevia-ochre.vercel.app/tr/", en: "https://aurevia-ochre.vercel.app/en/", ar: "https://aurevia-ochre.vercel.app/en/" },
  cover: {
    src: "/work/aurevia-logistics/cover.png",
    width: 1600,
    height: 1000,
    alt: { tr: "Aurevia web sitesinin açılış ekranı", en: "Aurevia website, opening screen", ar: "شاشة الافتتاح في موقع Aurevia" },
    label: "Demo — Cover",
  },
  flow: [
    { tr: "Müşteri çıkış ve varış noktasını seçer", en: "The customer picks origin and destination", ar: "يختار العميل نقطة الانطلاق والوصول" },
    { tr: "Yük ve hizmet bilgileri girilir", en: "Cargo and service details are entered", ar: "تُدخل بيانات الشحنة والخدمة" },
    { tr: "Tahmini fiyat aralığı hesaplanır", en: "An estimated price range is calculated", ar: "يُحسب نطاق سعر تقديري" },
    { tr: "Özet WhatsApp ya da e-postayla gönderilir", en: "The summary is sent by WhatsApp or email", ar: "يُرسل الملخّص عبر واتساب أو البريد الإلكتروني" },
  ],
  walkthrough: [
    {
      image: {
        src: "/work/aurevia-logistics/step-01.png",
        width: 1600,
        height: 1000,
        alt: { tr: "Planlayıcının ilk adımı: çıkış ve varış noktası", en: "Planner step one: origin and destination", ar: "الخطوة الأولى في المخطِّط: نقطة الانطلاق والوصول" },
        label: "Demo — Step 01",
      },
      title: { tr: "Rotayı seçer", en: "Picks the route", ar: "يختار المسار" },
      body: {
        tr: "Çıkış noktası İstanbul ya da Mersin, varış dokuz şehirden biri. Şehir bağlantısından gelen müşteri varışı seçili bulur.",
        en: "Origin is Istanbul or Mersin, the destination one of nine cities. A customer arriving from a city link finds it already selected.",
        ar: "نقطة الانطلاق إسطنبول أو مرسين، والوجهة واحدة من تسع مدن. العميل القادم من رابط مدينة يجد الوجهة محدّدة مسبقاً.",
      },
    },
    {
      image: {
        src: "/work/aurevia-logistics/step-02.png",
        width: 1600,
        height: 1000,
        alt: { tr: "Yük türü, koli sayısı, ağırlık ve hacim", en: "Cargo type, package count, weight and volume", ar: "نوع الشحنة وعدد الطرود والوزن والحجم" },
        label: "Demo — Step 02",
      },
      title: { tr: "Yükü tanımlar", en: "Describes the cargo", ar: "يصف الشحنة" },
      body: {
        tr: "Yük türü, koli sayısı, ağırlık ve hacim girilir. Tehlikeli yük ve kişisel eşya manuel incelemeye ayrılır.",
        en: "Cargo type, package count, weight and volume. Hazardous goods and personal effects are set aside for manual review.",
        ar: "يُدخل نوع الشحنة وعدد الطرود والوزن والحجم. وتُحال البضائع الخطرة والأمتعة الشخصية إلى مراجعة يدوية.",
      },
    },
    {
      image: {
        src: "/work/aurevia-logistics/step-03.png",
        width: 1600,
        height: 1000,
        alt: { tr: "Taşıma modu ve teslim kapsamı", en: "Freight mode and delivery scope", ar: "طريقة الشحن ونطاق التسليم" },
        label: "Demo — Step 03",
      },
      title: { tr: "Taşıma şeklini seçer", en: "Chooses the service", ar: "يختار طريقة الشحن" },
      body: {
        tr: "Deniz, hava ya da kara yolu ve teslimin nerede biteceği seçilir. Emin olmayan müşteri sistemden öneri isteyebilir.",
        en: "Sea, air or road, and where delivery ends. A customer who isn’t sure can ask the planner to suggest a mode.",
        ar: "بحراً أو جواً أو براً، ومكان انتهاء التسليم. ويمكن للعميل غير المتأكد أن يطلب من النظام اقتراح الطريقة المناسبة.",
      },
    },
    {
      image: {
        src: "/work/aurevia-logistics/step-04.png",
        width: 1600,
        height: 1000,
        alt: { tr: "Tahmini fiyat aralığı ve sevkiyat özeti", en: "Estimated price range and shipment summary", ar: "نطاق السعر التقديري وملخّص الشحنة" },
        label: "Demo — Step 04",
      },
      title: { tr: "Tahmini fiyat aralığını görür", en: "Sees an estimated price range", ar: "يرى نطاق سعر تقديرياً" },
      body: {
        tr: "Aralık USD olarak, gerekçeleriyle birlikte gösterilir. Hesap tarayıcıda yapılır ve hiçbir veri gönderilmez.",
        en: "The range appears in USD with the reasons behind it. It is calculated in the browser and no data is sent.",
        ar: "يظهر النطاق بالدولار الأمريكي مع أسبابه. يُحسب داخل المتصفح ولا تُرسل أي بيانات.",
      },
    },
    {
      image: {
        src: "/work/aurevia-logistics/step-05.png",
        width: 1600,
        height: 1000,
        alt: { tr: "Özeti WhatsApp ya da e-postayla paylaşma", en: "Sharing the summary by WhatsApp or email", ar: "مشاركة الملخّص عبر واتساب أو البريد الإلكتروني" },
        label: "Demo — Step 05",
      },
      title: { tr: "Özeti ekibe iletir", en: "Sends the summary to the team", ar: "يرسل الملخّص إلى الفريق" },
      body: {
        tr: "Ad, şirket ve WhatsApp numarası eklenir. Özet WhatsApp ya da e-posta taslağı olarak açılır veya kopyalanır.",
        en: "Name, company and WhatsApp number are added. The summary opens as a WhatsApp or email draft, or is copied.",
        ar: "يُضاف الاسم والشركة ورقم واتساب. ويُفتح الملخّص كمسودّة على واتساب أو البريد الإلكتروني، أو يُنسخ.",
      },
    },
  ],
  build: {
    stack: ["Vite", "Vercel"],
    notes: [
      {
        tr: "Türkçe, İngilizce ve Arapça; Arapça sayfalar sağdan sola düzenlenir.",
        en: "Turkish, English and Arabic; Arabic pages are laid out right to left.",
        ar: "بالتركية والإنجليزية والعربية؛ والصفحات العربية مرتّبة من اليمين إلى اليسار.",
      },
      {
        tr: "Fiyat aralığı tarayıcıda hesaplanır; hiçbir veri sunucuya gönderilmez.",
        en: "The price range is calculated in the browser; no data is sent to a server.",
        ar: "يُحسب نطاق السعر داخل المتصفح؛ ولا تُرسل أي بيانات إلى خادم.",
      },
      {
        tr: "Şehir bağlantıları planlayıcıyı varış noktası seçili olarak açar.",
        en: "City links open the planner with the destination already selected.",
        ar: "روابط المدن تفتح المخطِّط والوجهة محدّدة مسبقاً.",
      },
    ],
  },
  screens: [
    {
      src: "/work/aurevia-logistics/desktop.png",
      width: 1600,
      height: 1000,
      alt: { tr: "Dört adımlı sevkiyat planlayıcı, masaüstü", en: "Four-step shipment planner on desktop", ar: "مخطِّط الشحن ذو الخطوات الأربع على شاشة الكمبيوتر" },
      label: "Demo — Screen 01",
    },
    {
      src: "/work/aurevia-logistics/mobile-1.png",
      width: 750,
      height: 1624,
      alt: { tr: "Açılış ekranı, telefon", en: "Opening screen on a phone", ar: "شاشة الافتتاح على الهاتف" },
      label: "Demo — Screen 02",
    },
    {
      src: "/work/aurevia-logistics/mobile-2.png",
      width: 750,
      height: 1624,
      alt: { tr: "Sevkiyat planlayıcı, telefon", en: "Shipment planner on a phone", ar: "مخطِّط الشحن على الهاتف" },
      label: "Demo — Screen 03",
    },
  ],
  does: [
    {
      tr: "Deniz, hava ve kara yolu hizmetlerini tek yerde anlatır.",
      en: "Presents sea, air and road freight in one place.",
      ar: "يعرض خدمات الشحن البحري والجوي والبري في مكان واحد.",
    },
    {
      tr: "Sevkiyatı dört adımda planlatır ve tahmini fiyat aralığını gerekçeleriyle gösterir.",
      en: "Plans a shipment in four steps and shows an estimated price range with its reasons.",
      ar: "يتيح تخطيط الشحنة في أربع خطوات، ويعرض نطاق سعر تقديرياً مع أسبابه.",
    },
    {
      tr: "Kayıt istemez. Hesap müşterinin kendi cihazında yapılır.",
      en: "Needs no sign-up. The calculation runs on the customer’s own device.",
      ar: "لا يحتاج إلى تسجيل. ويتم الحساب على جهاز العميل نفسه.",
    },
    { tr: "Örnek ticaret koridorlarını harita üzerinde gösterir.", en: "Shows sample trade corridors on a map.", ar: "يعرض ممرّات تجارية نموذجية على الخريطة." },
    {
      tr: "Planı WhatsApp ya da e-postayla ekibe hazır bir özet olarak iletir.",
      en: "Passes the plan to the team as a ready summary by WhatsApp or email.",
      ar: "ينقل الخطة إلى الفريق كملخّص جاهز عبر واتساب أو البريد الإلكتروني.",
    },
  ],
};

export default study;
