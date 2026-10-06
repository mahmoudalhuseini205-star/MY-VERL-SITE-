// [TR — Mahmud to check] Every Turkish line here is a draft.
import type { Capability } from "./types";

const capability: Capability = {
  slug: "ai-systems",
  index: "03",
  title: { tr: "Yapay zekâ sistemleri", en: "AI systems", ar: "أنظمة الذكاء الاصطناعي" },
  outcome: {
    tr: "İşletmenizin kendi bilgileriyle soruları yanıtlayan, talepleri ayıklayan, randevu veren ve rapor hazırlayan asistanlar.",
    en: "Assistants that answer, qualify, book and report, using your business’s own information.",
    ar: "مساعدون يجيبون، ويفرزون الطلبات، ويحجزون المواعيد، ويعدّون التقارير، اعتماداً على معلومات نشاطك نفسه.",
  },
  intro: {
    tr: "Yapay zekâ asistanları ve ajanları kendi bilgilerinizle çalışır ve gerçek araçlarınıza bağlanır. Neyi üstleneceklerini ve işi ne zaman bir kişiye devredeceklerini biz tanımlarız.",
    en: "AI assistants and agents work from your own information and connect to your real tools. We define what they handle and when they hand over to a person.",
    ar: "يعمل المساعدون والوكلاء الأذكياء من معلوماتك أنت ويرتبطون بأدواتك الفعلية. نحدّد ما يتولّونه ومتى يسلّمون العمل إلى شخص.",
  },
  tags: [
    { tr: "Asistanlar", en: "Assistants", ar: "المساعدون" },
    { tr: "Ajanlar", en: "Agents", ar: "الوكلاء" },
    { tr: "Bilgi tabanı", en: "Knowledge base", ar: "قاعدة المعرفة" },
    { tr: "Araçlarınıza bağlı", en: "Connected to your tools", ar: "مرتبط بأدواتك" },
  ],
  mini: [
    { tr: "Soru", en: "Question", ar: "السؤال" },
    { tr: "Yapay zekâ", en: "AI", ar: "الذكاء الاصطناعي" },
    { tr: "İşlem", en: "Action", ar: "الإجراء" },
  ],
  includes: [
    {
      title: { tr: "Asistanlar", en: "Assistants", ar: "المساعدون" },
      body: {
        tr: "Müşteri sorularını sizin bilgilerinizle, sizin üslubunuzla ve müşterinin dilinde yanıtlar.",
        en: "Answer client questions from your own information, in your tone and in the client’s language.",
        ar: "يجيبون عن أسئلة العملاء من معلوماتك، بأسلوبك، وبلغة العميل.",
      },
    },
    {
      title: { tr: "Ön eleme ve randevu", en: "Qualification and booking", ar: "الفرز والحجز" },
      body: {
        tr: "Doğru soruları sorar, talepleri ayıklar ve gerçek takviminize randevu yazar.",
        en: "Ask the right questions, sort requests and book into the real calendar.",
        ar: "يطرحون الأسئلة الصحيحة، ويفرزون الطلبات، ويحجزون في التقويم الفعلي.",
      },
    },
    {
      title: { tr: "Ekip için ajanlar", en: "Agents for the team", ar: "وكلاء للفريق" },
      body: {
        tr: "İşletmenin kendi verisinden özetler, taslaklar ve raporlar hazırlar.",
        en: "Prepare summaries, drafts and reports from the business’s own data.",
        ar: "يعدّون الملخّصات والمسودّات والتقارير من بيانات النشاط نفسه.",
      },
    },
    {
      title: { tr: "Kişiye devir", en: "Hand-off to a person", ar: "التسليم إلى شخص" },
      body: {
        tr: "Sistemin ne zaman geri çekilip işi bir kişiye bırakacağı net kurallarla belirlenir.",
        en: "Clear rules decide when the system steps back and a person takes over.",
        ar: "قواعد واضحة تحدّد متى يتراجع النظام ويتولّى شخص العمل.",
      },
    },
  ],
  flow: [
    { tr: "Gelen soru", en: "Incoming question", ar: "سؤال وارد" },
    { tr: "İşletme bilgisi", en: "Business knowledge", ar: "معلومات النشاط" },
    { tr: "Model: OpenAI / Claude", en: "Model: OpenAI / Claude", ar: "النموذج: OpenAI / Claude" },
    { tr: "Araçlarınızda işlem", en: "Action in your tools", ar: "إجراء في أدواتك" },
    { tr: "Gerektiğinde kişiye devir", en: "Hand-off to a person when needed", ar: "التسليم إلى شخص عند الحاجة" },
  ],
  notes: [
    {
      tr: "OpenAI ve Claude modelleri üzerine kurulur; model, işe göre seçilir.",
      en: "Built on OpenAI and Claude models, chosen per task.",
      ar: "مبنية على نماذج OpenAI وClaude، ويُختار النموذج حسب المهمة.",
    },
    {
      tr: "Yanıtlar işletmenin kendi belge ve verilerine dayanır.",
      en: "Answers are grounded in the business’s own documents and data.",
      ar: "تستند الإجابات إلى وثائق النشاط وبياناته.",
    },
    {
      tr: "Her asistanın sınırları tanımlıdır ve bir kişiye devir yolu vardır.",
      en: "Every assistant has defined limits and a path to hand over to a person.",
      ar: "لكل مساعد حدود محدّدة وطريق واضح لتسليم العمل إلى شخص.",
    },
  ],
};

export default capability;
