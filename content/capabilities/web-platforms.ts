// [TR — Mahmud to check] Every Turkish line here is a draft.
import type { Capability } from "./types";

const capability: Capability = {
  slug: "web-platforms",
  index: "01",
  title: { tr: "Web platformları", en: "Web platforms", ar: "منصّات الويب" },
  outcome: {
    tr: "Ziyaretçiyi müşteriye dönüştürmek için kurulan web siteleri ve web uygulamaları.",
    en: "Websites and web apps built to turn visitors into clients.",
    ar: "مواقع وتطبيقات ويب مبنية لتحوّل الزائر إلى عميل.",
  },
  intro: {
    tr: "Kurumsal web siteleri, kampanya sayfaları ve web uygulamaları. Her biri arkasındaki araçlara bağlanır ve yayından sonra da bakımı yapılır.",
    en: "Company websites, campaign pages and web applications. Each one connects to the tools behind it and is maintained after launch.",
    ar: "مواقع الشركات وصفحات الحملات وتطبيقات الويب. يرتبط كل منها بالأدوات التي تقف خلفه، ونتولّى صيانته بعد الإطلاق.",
  },
  tags: [
    { tr: "Kurumsal siteler", en: "Company websites", ar: "مواقع الشركات" },
    { tr: "Kampanya sayfaları", en: "Campaign pages", ar: "صفحات الحملات" },
    { tr: "Web uygulamaları", en: "Web applications", ar: "تطبيقات الويب" },
    { tr: "Çok dilli yapı", en: "Multilingual", ar: "متعدّد اللغات" },
  ],
  mini: [
    { tr: "Ziyaretçi", en: "Visitor", ar: "الزائر" },
    { tr: "Sayfa", en: "Page", ar: "الصفحة" },
    { tr: "Talep", en: "Inquiry", ar: "الطلب" },
  ],
  includes: [
    {
      title: { tr: "Kurumsal web siteleri", en: "Company websites", ar: "مواقع الشركات" },
      body: {
        tr: "İşletmenin internetteki ana adresi: net bir yapı, her cihazda hızlı açılan sayfalar ve çalıştığınız her dilde içerik.",
        en: "The main home of the business online: a clear structure, fast on every device, in every language you work in.",
        ar: "العنوان الرئيسي للنشاط على الإنترنت: بنية واضحة، وصفحات سريعة على كل جهاز، ومحتوى بكل لغة تعمل بها.",
      },
    },
    {
      title: { tr: "Ürün ve kampanya sayfaları", en: "Product and campaign pages", ar: "صفحات المنتجات والحملات" },
      body: {
        tr: "Tek bir teklif ya da tek bir kitle için odaklı sayfalar. Hızlı yayına alınır ve sonuçları ölçülür.",
        en: "Focused pages for one offer or one audience, launched quickly and measured.",
        ar: "صفحات مركّزة لعرض واحد أو لجمهور واحد، تُطلق بسرعة وتُقاس نتائجها.",
      },
    },
    {
      title: { tr: "Web uygulamaları", en: "Web applications", ar: "تطبيقات الويب" },
      body: {
        tr: "Randevu, müşteri paneli ve iç raporlama ekranları. İşletmenizin çalışma şekline göre kurulan, tarayıcıda çalışan yazılımlar.",
        en: "Booking, client portals and internal dashboards. Software in the browser, shaped around how your business works.",
        ar: "الحجوزات وبوابات العملاء ولوحات التقارير الداخلية. برمجيات تعمل في المتصفح، مصمّمة حول طريقة عمل نشاطك.",
      },
    },
    {
      title: { tr: "Baştan bağlantılı", en: "Connected from the start", ar: "مترابط من البداية" },
      body: {
        tr: "Formlar, randevular ve talepler doğrudan kullandığınız araçlara akar. Elle kopyalanan hiçbir şey kalmaz.",
        en: "Forms, bookings and inquiries flow straight into the tools you already use. Nothing is copied by hand.",
        ar: "النماذج والحجوزات والطلبات تصل مباشرة إلى الأدوات التي تستخدمها، فلا يُنسخ شيء يدوياً.",
      },
    },
  ],
  flow: [
    { tr: "Yapı ve içerik", en: "Structure and content", ar: "البنية والمحتوى" },
    { tr: "Tasarım sistemi", en: "Design system", ar: "نظام التصميم" },
    { tr: "Geliştirme", en: "Build", ar: "التطوير" },
    { tr: "Araçlara bağlantı", en: "Connection to your tools", ar: "الربط بأدواتك" },
    { tr: "Yayın ve ölçüm", en: "Launch and measurement", ar: "الإطلاق والقياس" },
  ],
  notes: [
    {
      tr: "Next.js ile geliştirilir, Vercel üzerinde yayınlanır; mobil bağlantıda da hızlı açılır.",
      en: "Built with Next.js and deployed on Vercel, so pages load fast on mobile networks.",
      ar: "نطوّرها بـ Next.js وننشرها على Vercel، فتفتح الصفحات بسرعة حتى على شبكات الجوال.",
    },
    {
      tr: "Her sayfa her ekran boyutunda ve her dilde okunaklı ve erişilebilir olacak şekilde kurulur.",
      en: "Every page is built to be readable and accessible on every screen size and in every language.",
      ar: "تُبنى كل صفحة لتكون مقروءة وسهلة الوصول على كل حجم شاشة وبكل لغة.",
    },
    {
      tr: "İçerik, yeni sayfalar yeniden tasarım gerekmeden eklenebilecek şekilde yapılandırılır.",
      en: "Content is structured so new pages can be added without a redesign.",
      ar: "يُنظَّم المحتوى بحيث يمكن إضافة صفحات جديدة دون إعادة تصميم.",
    },
  ],
};

export default capability;
