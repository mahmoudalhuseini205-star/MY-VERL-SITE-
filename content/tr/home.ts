// [TR — Mahmud to check] Every Turkish line here is a draft.
const home = {
  // about.md §9
  hero: {
    eyebrow: "VERL Systems · Web · Otomasyon · Yapay zekâ",
    lines: ["İşinizin üzerinde", "çalıştığı sistemleri", "kuruyoruz."],
    sub: "Web siteleri, otomasyon ve yapay zekâ, tek bir sorumlu stüdyodan. Tasarlıyor, kuruyor ve çalışır durumda tutuyoruz.",
  },
  statement: {
    index: "01 — İlke",
    lines: ["Ekibinizin her gün", "elle yaptığı işlerin çoğu", "kendi kendine çalışan", "bir sisteme dönüşebilir."],
    // [TR — Mahmud to check] architecture node labels
    nodes: ["WEB", "YAPAY ZEKÂ", "OTOMASYON", "CRM", "VERİ"],
  },
  capabilities: {
    index: "02 — Yetkinlikler",
    title: "Web, otomasyon ve yapay zekâ tek sistemde.",
    intro: "Her biri tek başına çalışır. Birlikte kurulduklarında veriyi paylaşır, araçlarınız arasındaki elle aktarımı ortadan kaldırırlar.",
  },
  // The three lines the seam splits into (Home 3).
  seam: ["Web", "Otomasyon", "Yapay zekâ"],
  work: {
    index: "03 — İşler",
    title: "Projeler ve demo sistemler.",
    intro: "Müşteri projeleri ve demo sistemler. Her demo açıkça işaretlenir; sonuçlar yalnızca gerçek müşterilerden gelir.",
    all: "Tüm işleri görün",
  },
  approach: {
    index: "04 — Yaklaşım",
    title: "Her biri teslimatla biten dört aşama.",
    link: "Aşamaların ayrıntıları",
  },
  standards: {
    index: "05 — Standartlar",
    title: "Size verdiğimiz söz.",
  },
  // Home 6 — interactive system map. Describes how a system works, never results.
  system: {
    index: "06 — Sistem",
    title: "Bir talep, baştan sona.",
    intro: "Bir senaryo seçin. Parçaların birbirine nasıl bağlandığını ve işi hangi adımda sistemin üstlendiğini görün.",
    scenarios: [
      {
        label: "Müşteri mesaj atar",
        steps: [
          { node: "WhatsApp", body: "Müşteri gece yarısı da yazabilir; hiçbir mesaj kaybolmaz." },
          { node: "Yapay zekâ asistanı", body: "Sık soruları yanıtlar ve müşterinin ne istediğini netleştirir." },
          { node: "Takvim", body: "Uygun saat seçilir, randevu takvime kendiliğinden işlenir." },
          { node: "Ekip", body: "Ekibinize kısa bir özetle birlikte bildirim gider." },
        ],
      },
      {
        label: "Web sitesinden talep gelir",
        steps: [
          { node: "Web sitesi", body: "Ziyaretçi formu doldurur ya da teklif ister." },
          { node: "CRM", body: "Talep, nereden geldiği bilgisiyle müşteri kaydına düşer." },
          { node: "Otomasyon", body: "Doğru kişiye atanır, ilk yanıt hemen gönderilir." },
          { node: "Takip", body: "Yanıt gelmezse hatırlatma kendiliğinden gider." },
        ],
      },
      {
        label: "Haftalık rapor hazırlanır",
        steps: [
          { node: "Veri", body: "Satış, randevu ve mesaj verileri tek bir yerde toplanır." },
          { node: "Otomasyon", body: "Rapor her hafta aynı saatte, kimse uğraşmadan hazırlanır." },
          { node: "Yapay zekâ", body: "Öne çıkan değişiklikleri kısa ve okunur bir özete çevirir." },
          { node: "Ekip", body: "Özet, ekibinizin zaten kullandığı kanala gönderilir." },
        ],
      },
    ],
  },
  company: {
    index: "07 — Şirket",
    // about.md §7
    lines: [
      "VERL Systems’i kurucusu Mahmud yönetiyor.",
      "Her projeyi ilk görüşmeden teslime kadar bizzat yürütür. Sisteminizi tasarlayan ve kuran kişiyle doğrudan çalışırsınız.",
    ],
    link: "Şirketi daha yakından tanıyın",
  },
};

export default home;
