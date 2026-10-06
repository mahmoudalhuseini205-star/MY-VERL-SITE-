// [TR — Mahmud to check] Every Turkish line here is a draft.
import type { Capability } from "./types";

const capability: Capability = {
  slug: "automation",
  index: "02",
  title: { tr: "Otomasyon ve entegrasyonlar", en: "Automation and integrations", ar: "الأتمتة والتكامل" },
  outcome: {
    tr: "İşletmenizin zaten kullandığı araçları birbirine bağlıyor, aradaki elle yapılan işi ortadan kaldırıyoruz.",
    en: "We connect the tools your business already uses and remove the manual work between them.",
    ar: "نربط الأدوات التي يستخدمها نشاطك أصلاً، ونلغي العمل اليدوي بينها.",
  },
  intro: {
    tr: "WhatsApp, CRM, takvimler, tablolar, ödeme ve randevu araçları. Bunları birbirine bağlıyoruz; ekibinizin her gün tekrarladığı adımlar kendiliğinden işler.",
    en: "WhatsApp, CRM, calendars, spreadsheets, payment and booking tools. We connect them so the steps your team repeats every day run on their own.",
    ar: "واتساب وCRM والتقاويم وجداول البيانات وأدوات الدفع والحجز. نربطها معاً فتعمل الخطوات التي يكرّرها فريقك كل يوم من تلقاء نفسها.",
  },
  tags: [
    { tr: "WhatsApp", en: "WhatsApp", ar: "واتساب" },
    { tr: "CRM", en: "CRM", ar: "CRM" },
    { tr: "Takvim ve randevu", en: "Calendars and booking", ar: "التقاويم والحجوزات" },
    { tr: "Raporlar", en: "Reports", ar: "التقارير" },
  ],
  mini: [
    { tr: "Tetikleyici", en: "Trigger", ar: "المُشغِّل" },
    { tr: "Akış", en: "Workflow", ar: "سير العمل" },
    { tr: "Araçlar", en: "Tools", ar: "الأدوات" },
  ],
  includes: [
    {
      title: { tr: "Araç entegrasyonları", en: "Tool integrations", ar: "ربط الأدوات" },
      body: {
        tr: "WhatsApp, CRM, takvim, tablo, ödeme ve randevu araçları birbirine bağlanır; veri kendi kendine doğru yere gider.",
        en: "WhatsApp, CRM, calendar, spreadsheet, payment and booking tools are connected, so data moves to the right place on its own.",
        ar: "تُربط أدوات واتساب وCRM والتقويم وجداول البيانات والدفع والحجز، فتنتقل البيانات إلى مكانها الصحيح وحدها.",
      },
    },
    {
      title: { tr: "İş akışı otomasyonu", en: "Workflow automation", ar: "أتمتة سير العمل" },
      body: {
        tr: "Onaylar, hatırlatmalar, takipler ve devirler her seferinde aynı şekilde, otomatik olarak çalışır.",
        en: "Confirmations, reminders, follow-ups and hand-offs run automatically, the same way every time.",
        ar: "التأكيدات والتذكيرات والمتابعات والتسليمات تعمل تلقائياً، وبالطريقة نفسها في كل مرة.",
      },
    },
    {
      title: { tr: "Bildirim ve yönlendirme", en: "Notifications and routing", ar: "التنبيهات والتوجيه" },
      body: {
        tr: "Doğru kişi, doğru konudan doğru anda haberdar olur.",
        en: "The right person hears about the right thing at the right moment.",
        ar: "يعرف الشخص المناسب بالأمر المناسب في اللحظة المناسبة.",
      },
    },
    {
      title: { tr: "Raporlama", en: "Reporting", ar: "التقارير" },
      body: {
        tr: "Kullandığınız araçlardan düzenli özetler hazırlanır; kimsenin bunları elle derlemesi gerekmez.",
        en: "Regular summaries are pulled from the tools you use, without anyone compiling them by hand.",
        ar: "تُعَدّ ملخّصات دورية من الأدوات التي تستخدمها، دون أن يجمعها أحد يدوياً.",
      },
    },
  ],
  flow: [
    { tr: "Tetikleyici", en: "Trigger", ar: "المُشغِّل" },
    { tr: "Kurallar", en: "Rules", ar: "القواعد" },
    { tr: "Bağlı araçlar", en: "Connected tools", ar: "الأدوات المرتبطة" },
    { tr: "Bildirim", en: "Notification", ar: "التنبيه" },
    { tr: "Kayıt ve rapor", en: "Log and report", ar: "السجل والتقرير" },
  ],
  notes: [
    {
      tr: "İş akışları n8n üzerinde kurulur; her adım görünür ve değiştirilebilir.",
      en: "Workflows are built in n8n, with every step visible and editable.",
      ar: "يُبنى سير العمل على n8n، وكل خطوة فيه ظاهرة وقابلة للتعديل.",
    },
    {
      tr: "Entegrasyonlar, WhatsApp Business API dahil, her aracın resmî API’si üzerinden yapılır.",
      en: "Integrations use each tool’s official API, including the WhatsApp Business API.",
      ar: "يتم الربط عبر الواجهات الرسمية (API) لكل أداة، بما فيها WhatsApp Business API.",
    },
    {
      tr: "Her iş akışı yayına alınmadan önce gerçek senaryolarla test edilir.",
      en: "Every workflow is tested against real scenarios before it goes live.",
      ar: "يُختبر كل سير عمل بسيناريوهات حقيقية قبل تشغيله.",
    },
  ],
};

export default capability;
