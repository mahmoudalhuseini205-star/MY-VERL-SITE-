// [TR — Mahmud to check] Every Turkish line here is a draft.
const pages = {
  // Shared closing block (Home section 08 and every inner page).
  finalCta: {
    index: "Başlangıç",
    lines: ["Ne kurmak istediğinizi", "anlatın."],
    body: "Beş kısa soru. Cevaplarınız WhatsApp’ta hazır bir mesaj olarak açılır; yanıtımızı oradan alırsınız.",
  },
  capabilities: {
    meta: {
      title: "Yetkinlikler | VERL Systems",
      description: "Birlikte çalışmak üzere tasarlanan web platformları, otomasyonlar ve yapay zekâ sistemleri.",
    },
    eyebrow: "Yetkinlikler",
    lines: ["Web, otomasyon ve", "yapay zekâ,", "tek bir sistemde."],
    body: "Her yetkinlik tek başına iş görür. Fark, üçü veriyi paylaşıp işi birbirine devrettiğinde ortaya çıkar.",
    connect: {
      index: "Birlikte",
      title: "Üçü bir arada böyle çalışır.",
      body: "Bağlantılı bir akış örneği. Her işletme farklıdır; sizinkini Plan aşamasında birlikte çizeriz.",
      flow: [
        "Müşteri sizi internette bulur",
        "Web sayfası talebini karşılar",
        "Otomasyon talebi kaydeder ve ekibe haber verir",
        "Yapay zekâ asistanı soruları yanıtlar ve randevu verir",
        "Ekip her şeyi tek bir yerden görür",
      ],
    },
    detail: {
      eyebrow: "Yetkinlik",
      includes: "Neleri kapsar",
      build: "Nasıl kuruyoruz",
      related: "İlgili işler",
      others: "Diğer yetkinlikler",
      all: "Tüm yetkinlikler",
    },
  },
  work: {
    meta: {
      title: "İşler | VERL Systems",
      description: "VERL Systems’in kurduğu gerçek müşteri projeleri ve demo sistemler.",
    },
    eyebrow: "İşler",
    lines: ["Kurduğumuz", "sistemler."],
    body: "Müşteri projeleri ve demo sistemler. Demolar bir sistemin ne yaptığını gösterir. Sonuçlar yalnızca gerçek müşterilerden gelir.",
    list: "Projeler",
  },
  approach: {
    meta: {
      title: "Yaklaşım | VERL Systems",
      description: "Keşif, plan, kurulum ve sürdürme: her aşamada ne olduğu ve size ne teslim edildiği.",
    },
    eyebrow: "Yaklaşım",
    lines: ["Önce plan,", "sonra kurulum."],
    body: "Her proje aynı dört aşamadan geçer. Her aşama elinizde kalan bir teslimatla biter; sonraki aşama onun üzerine kurulur.",
    what: "Bu aşamada",
    phases: [
      [
        "İşletmeniz ve hedefleriniz üzerine ilk görüşme",
        "Kullandığınız araçlara ve işin aralarında nasıl ilerlediğine bakış",
        "Zamanın elle harcandığı ve müşterilerin kaybolduğu noktaların tespiti",
      ],
      [
        "Sistemin adım adım akış şeması olarak çizilmesi",
        "Yazılı kapsam: nelerin kurulacağı, nelerin kurulmayacağı",
        "Net aşamaları olan bir takvim",
      ],
      [
        "Görebileceğiniz ve deneyebileceğiniz kısa aşamalarla kurulum",
        "Yayından önce gerçek senaryolarla test",
        "Ancak her bağlantı çalıştığında yayın",
      ],
      [
        "Yayından sonra sistemin izlenmesi",
        "Bir şey dikkat gerektirdiğinde destek",
        "Sistemin kullanımına göre iyileştirmeler",
      ],
    ],
    principle: {
      index: "İlke",
      title: "Kurmadan önce çiziyoruz.",
      body: "Bir sistemdeki hataların çoğu kâğıt üzerinde yakalanabilir. Plan aşamasında akışı sizinle gözden geçirir, kapsamda anlaşırız.",
    },
  },
  company: {
    meta: {
      title: "Şirket | VERL Systems",
      description: "VERL Systems, Türkiye, Orta Doğu ve Avrupa’daki işletmeler için web platformları, otomasyonlar ve yapay zekâ sistemleri kuran, kurucusunun yönettiği bir stüdyodur.",
    },
    eyebrow: "Şirket",
    lines: ["Kurucusunun", "yönettiği bir", "sistem stüdyosu."],
    body: "İşletmelerin üzerinde çalıştığı web platformlarını, otomasyonları ve yapay zekâ sistemlerini tasarlayıp kuruyoruz. Türkiye, Orta Doğu ve Avrupa’daki işletmelerle uzaktan ve yerinde çalışıyoruz.",
    positioning: {
      index: "01 — Ne yapıyoruz",
      title: "Üç yetkinlik, tek bir teklif.",
      body: "Bir web sitesi, otomasyon ya da asistan, etrafındaki her şeye bağlandığında en çok işe yarar. Bu yüzden üçünü birlikte sunuyoruz. Sektör fark etmeksizin, elle yapılan işi artırmadan büyümek isteyen işletmelerle çalışıyoruz.",
    },
    founder: {
      index: "02 — Kurucu",
      // about.md §7
      lines: [
        "VERL Systems’i kurucusu Mahmud yönetiyor.",
        "Her projeyi ilk görüşmeden teslime kadar bizzat yürütür. Sisteminizi tasarlayan ve kuran kişiyle doğrudan çalışırsınız.",
      ],
      name: "Mahmud",
      role: "Kurucu",
    },
    principles: {
      index: "03 — İlkeler",
      items: [
        {
          title: "Baştan bağlantılı.",
          body: "Her parçayı birlikte çalışacağı araçlarla planlarız; hiçbir şey elle kopyalanmaz.",
        },
        {
          title: "Kanıt gerçek müşterilerden gelir.",
          body: "Yalnızca gerçek müşterilerden gelen rakamları paylaşırız. Her demo sistem, demo olarak işaretlenir.",
        },
        {
          title: "Çalışmak için kurulur.",
          body: "Yayından sonraki günü düşünerek tasarlarız: net bir yapı, izlenen bir sistem ve yeniden kurmadan yapılabilen değişiklikler.",
        },
        {
          title: "İşçiliğimizi burada görebilirsiniz.",
          body: "Bu siteyi kendimiz tasarladık ve kurduk. Sizinkini nasıl kuracağımızın ilk örneği bu.",
        },
      ],
    },
    standards: { index: "04 — Standartlar", title: "Size verdiğimiz söz." },
    facts: {
      index: "05 — Bilgiler",
      items: [
        { label: "Hizmet bölgesi", value: "Türkiye, Orta Doğu, Avrupa" },
        { label: "Çalışma biçimi", value: "Yerinde ve uzaktan" },
        { label: "Diller", value: "Türkçe, İngilizce, Arapça" },
      ],
      phone: "Telefon",
      email: "E-posta",
    },
  },
  start: {
    meta: {
      title: "Proje başlatın | VERL Systems",
      description: "Beş kısa soruyla projenizi anlatın. Özetiniz WhatsApp’ta hazır açılır.",
    },
    eyebrow: "Proje başlatın",
    title: "Projenizi beş kısa soruyla anlatın.",
    body: "Cevaplarınız WhatsApp’ta hazır bir mesaj olarak açılır. Bu sitede hiçbir bilgi kaydedilmez.",
    // Shortcut for visitors who would rather just write.
    direct: {
      lead: "Soruları geçmek mi istiyorsunuz?",
      label: "WhatsApp’tan doğrudan yazın",
      message: "Merhaba VERL Systems, bir proje hakkında konuşmak istiyorum.",
    },
    step: "Adım",
    of: "/",
    back: "Geri",
    next: "İleri",
    edit: "Düzenle",
    optional: "isteğe bağlı",
    needs: {
      question: "Neye ihtiyacınız var?",
      helper: "Bir veya birden fazla seçin.",
      options: {
        web: "Web platformu",
        automation: "Otomasyon",
        ai: "Yapay zekâ sistemi",
        unsure: "Henüz emin değilim",
      },
    },
    business: {
      question: "İşletmenizden bahsedin.",
      name: "İşletme adı",
      link: "Web sitesi veya Instagram",
      linkHelper: "Varsa adresini ekleyin.",
    },
    goal: {
      question: "Neyi başarmak istiyorsunuz?",
      helper: "Birkaç cümle yeterli.",
    },
    timeline: {
      question: "Ne zaman başlamak istersiniz?",
      options: {
        asap: "En kısa sürede",
        months: "1–3 ay içinde",
        later: "Bu yılın ilerleyen aylarında",
        flexible: "Esnek",
      },
    },
    person: {
      question: "Adınız nedir?",
      name: "Adınız",
    },
    summary: {
      title: "Özetiniz",
      helper: "Bu mesaj WhatsApp’ta hazır olarak açılır. Göndermeden önce kontrol edebilirsiniz.",
      send: "WhatsApp’ta açın",
    },
    message: {
      greeting: "Merhaba VERL Systems, bir proje başlatmak istiyorum.",
      needs: "İhtiyaç",
      business: "İşletme",
      link: "Web sitesi / Instagram",
      goal: "Hedef",
      timeline: "Zaman",
      name: "Ad",
    },
  },
};

export default pages;
