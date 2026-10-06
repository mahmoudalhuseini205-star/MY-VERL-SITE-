# REBUILD_PLAN — VERL Systems company site

Each box was ticked after it was built and checked on the production build with headless Chrome screenshots,
with zero console errors. Every page was seen in at least one theme/language/size, and light + dark, TR + EN,
375 + 1440 were each covered across the set. Not every page was shot in all 8 combinations. View-transition
animations and Lenis smoothing can't be seen in still screenshots, so they still need a check by hand in a browser.

## 1. Structure
- [x] Routes per CLAUDE.md §5 (`/`, `/capabilities`, `/capabilities/[slug]`, `/work`, `/work/[slug]`, `/approach`, `/company`, `/start`, `/c/[slug]`)
- [x] Header: wordmark · Capabilities · Work · Approach · Company · TR/EN · theme · Start a project
- [x] Mobile full-screen menu with line-mask reveal (Esc closes, scroll lock, focus return)
- [x] Footer: wordmark + tagline, nav, phone, ©
- [x] Old pages / components / copy deleted (`/about`, `/design-system`, Systems, Founder, about copy, old demo file)
- [x] Redirects: `/about` → `/company`, `/work/emlak-lead-system` → `/work/lead-response-system`, `/emlak` → `/c/emlak` (TR + EN)
- [x] `sitemap.xml` + `robots.txt` (no `/c/`)
- [x] Real-estate wording only in `/c/emlak` (noindex)
- [x] No direct WhatsApp button anywhere; WhatsApp opens only at the end of `/start`

## 2. Hero — The Blueprint
- [x] Canvas grid (theme tokens, major line every 4 cells, DPR ≤ 2)
- [x] Cursor spotlight, Ember intersections pulled toward cursor; idle / touch drift
- [x] Loop paused off-screen and when the tab is hidden
- [x] Faceted V (real logo geometry) assembles: construction lines → facets → Ember edges → underline, ≤ 1.4s
- [x] Facet shading follows the cursor
- [x] Nodes WEB · AUTOMATION · AI · CRM · DATA, paths, Ember packets loop (mobile: 3 nodes)
- [x] Tilt toward cursor (max 4°, desktop mouse only)
- [x] Copy from about.md §9, Mono eyebrow, one CTA, 7/5 split, mobile stacked
- [x] Headline is plain text at first paint
- [x] Reduced motion: static grid, V fully drawn, no loops
- [x] First-visit brand intro (once per session)
- [x] design.md §4 and §6 updated

## 3. Home
- [x] 1 Hero
- [x] 2 Statement (line-by-line reveal)
- [x] 3 Capabilities (7/5 + full-width panels, mini flow, links)
- [x] 4 Selected work (Titanium block, salon + demo with badge)
- [x] 5 Approach (4 phases + deliverables, pinned + Ember progress on desktop)
- [x] 6 Standards (confirmed item only)
- [x] 7 Technologies we use
- [x] 8 Company (portrait placeholder + two lines + link)
- [x] 9 Final CTA

## 4. Inner pages
- [x] /capabilities
- [x] /capabilities/web-platforms
- [x] /capabilities/automation
- [x] /capabilities/ai-systems
- [x] /work
- [x] /work/salon (real)
- [x] /work/lead-response-system (demo + badge)
- [x] /approach
- [x] /company
- [x] /start (5 steps → summary → WhatsApp with the brief in the visitor's language)
- [x] /c/emlak (campaign, noindex, not linked)

## 5. Motion & platform
- [x] View transitions: page crossfade, directional slides (list ↔ detail), work cover morph, capability title morph, /start step slides
- [x] Lenis on desktop pointers only
- [x] Every section has a Mono index + scroll reveal
- [x] `npm run build` + `npm run lint` clean; `node --experimental-strip-types scripts/check-brief.mjs` passes

---

## Waiting for Mahmud
Nothing below is shown on the site until you confirm it.

1. **Standards (about.md §6)** — only "One accountable person" is live. Confirm each before it is added:
   - You own it — the client owns the code, the accounts and the data.
   - Documented — every system is handed over with documentation.
   - Supported — a post-launch support period of how many days?
   - Fixed scope, clear price — written scope and a fixed quote for every project.
2. **Salon project** — name of the salon, year, live URL, the problem in the client's words, what exactly was built, stack, screenshots, and any real numbers (only if you have them). Until then the page shows "full case study is being prepared".
3. **Demo system** — confirm the demo really does each of the 4 items under "What the system does" and uses Next.js + n8n + WhatsApp Business API.
4. **Technologies list** — confirm you actually use all of: Next.js, Vercel, Supabase, n8n, WhatsApp Business API, OpenAI, Claude.
5. **Business email** — not shown anywhere yet.
6. **Social links** — not shown anywhere yet.
7. **Production domain** — sitemap/canonical URLs use Vercel's production URL automatically; tell me if you have a custom domain.
8. **/c/emlak** — currently `noindex` (hidden from Google). Keep it that way?
9. **Budget ranges** — not in the /start brief until you define them.

## Images needed
Put files at these paths (PNG/JPG is fine — they are converted to AVIF/WebP automatically). Until then a blueprint placeholder with the same label is shown.

| Path | Size | What |
|---|---|---|
| `public/company/mahmud.jpg` | 1200 × 1500 | Founder portrait |
| `public/work/salon/cover.png` | 1600 × 1000 | Salon website — cover mockup |
| `public/work/salon/desktop.png` | 1600 × 1000 | Salon — desktop screen |
| `public/work/salon/mobile-1.png` | 750 × 1624 | Salon — phone screen 1 |
| `public/work/salon/mobile-2.png` | 750 × 1624 | Salon — phone screen 2 |
| `public/work/lead-response-system/cover.png` | 1600 × 1000 | Demo — cover mockup |
| `public/work/lead-response-system/page-desktop.png` | 1600 × 1000 | Demo — inquiry page, desktop |
| `public/work/lead-response-system/page-mobile.png` | 750 × 1624 | Demo — inquiry page, phone |
| `public/work/lead-response-system/whatsapp.png` | 750 × 1624 | Demo — WhatsApp reply screen |
| `app/opengraph-image.png` (optional) | 1200 × 630 | Link preview image |

## Turkish copy to proofread
Every Turkish line on the site, by file. All are drafts — please mark anything that sounds stiff or translated.

### Header / menu (content/tr/common.ts)
- Ana menü

### content/tr/common.ts
- VERL Systems — Çalışmak için kurulan sistemler
- VERL Systems, işletmelerin üzerinde çalıştığı dijital sistemleri tasarlar ve kurar: web platformları, otomasyon ve yapay zekâ.
- İçeriğe geç
- Proje başlatın
- Yetkinlikler
- İşler
- Yaklaşım
- Şirket
- Menüyü aç
- Menüyü kapat
- Menü
- Açık / koyu tema
- Dil seçimi
- Çalışmak için kurulan sistemler.
- İskenderun, Hatay, Türkiye
- Telefon
- Teslim edilen
- Keşif
- İşletmeyi, kullandığı araçları ve zamanın ve müşterilerin nerede kaybolduğunu inceliyoruz.
- Kısa bir keşif özeti
- Plan
- Sistemi kurmadan önce tasarlıyoruz.
- Sistem planı: akış şeması, kapsam ve takvim
- Kurulum
- Kuruyor, gerçek senaryolarla test ediyor ve yayına alıyoruz.
- Çalışan sistem
- Sürdürme
- Yayından sonra sistemi izliyor, destekliyor ve geliştiriyoruz.
- Yayın sonrası destek
- Tek sorumlu kişi.
- Kurucu, her projeyi ilk görüşmeden teslime kadar bizzat yönetir.
- Sorun
- Sistem
- Nasıl kurduk
- Ekranlar
- Sistem ne yapar
- Sonuçlar
- Durum
- Sonraki proje
- Tüm işler
- Sizin işletmeniz için neyin kurulabileceğini konuşalım.
- Ayrıntılar

### content/tr/home.ts
- VERL Systems · Web · Otomasyon · Yapay zekâ
- İşinizin üzerinde
- çalıştığı sistemleri
- kuruyoruz.
- Web siteleri, otomasyon ve yapay zekâ — tek bir sorumlu stüdyo tarafından tasarlanır, kurulur ve desteklenir.
- 01 — İlke
- Bir işletme, elle yapılan işlerle
- ve hafızayla yürümemeli.
- Her gün çalışmak için kurulmuş
- sistemlerle yürümeli.
- 02 — Yetkinlikler
- Üç yetkinlik. Birbirine bağlı tek bir sistem.
- Her biri tek başına çalışabilir. Birlikte, bir işletmenin üzerinde çalıştığı sistemi oluştururlar.
- 03 — İşler
- Seçilmiş işler.
- Gerçek müşteri projeleri ve demo sistemler. Demo sistemler açıkça işaretlenir; sonuç rakamları yalnızca gerçek müşterilerden gelir.
- Tüm işler
- 04 — Yaklaşım
- Önce plan, sonra kurulum.
- Yaklaşımımızın ayrıntıları
- 05 — Standartlar
- Size verdiğimiz söz.
- 06 — Teknolojiler
- Kullandığımız teknolojiler.
- 07 — Şirket
- VERL Systems’i kurucusu Mahmud yönetiyor.
- Her proje ilk görüşmeden teslime kadar bizzat yürütülür; sisteminizi tasarlayan ve kuran kişiyle doğrudan çalışırsınız.
- Şirketi tanıyın

### content/tr/pages.ts
- Başlangıç
- Ne kurmak istediğinizi
- anlatın.
- Beş kısa soru. Sonunda özetiniz WhatsApp’ta hazır açılır; yanıtımızı oradan alırsınız.
- Yetkinlikler — VERL Systems
- Web platformları, otomasyon ve yapay zekâ sistemleri: tek bir sistem olarak tasarlanır ve kurulur.
- Yetkinlikler
- Web, otomasyon,
- yapay zekâ.
- Tek bir sistem.
- Her yetkinlik tek başına iş görür. Asıl fark, üçü aynı sistemin parçası olarak tasarlandığında ortaya çıkar.
- Birlikte
- Üçü bir arada nasıl çalışır?
- Örnek bir akış: web, otomasyon ve yapay zekâ aynı sistemde. Her işletmede adımlar farklıdır; plan aşamasında birlikte çizilir.
- Müşteri sizi internette bulur
- Talebi web sayfasında karşılanır
- Otomasyon talebi kaydeder ve ekibe haber verir
- Yapay zekâ asistanı soruları yanıtlar ve randevu alır
- Ekip her şeyi tek bir yerde görür
- Yetkinlik
- Neleri kapsar
- Nasıl kuruyoruz
- İlgili işler
- Diğer yetkinlikler
- Tüm yetkinlikler
- İşler — VERL Systems
- VERL Systems’in kurduğu gerçek müşteri projeleri ve demo sistemler.
- İşler
- Kurduğumuz
- sistemler.
- Gerçek müşteri projeleri ve demo sistemler. Demo sistemler açıkça işaretlenir ve yalnızca sistemin ne yaptığını anlatır; sonuç rakamları yalnızca gerçek müşterilerden gelir.
- Projeler
- Yaklaşım — VERL Systems
- Keşif, plan, kurulum ve sürdürme: her aşamada ne olduğu ve size ne teslim edildiği.
- Yaklaşım
- Önce plan,
- sonra kurulum.
- Her proje aynı dört aşamadan geçer. Her aşamanın sonunda elinizde somut bir şey olur; bir sonraki adıma onunla geçeriz.
- Bu aşamada
- İşletmeniz ve hedefleriniz üzerine ilk görüşme
- Kullandığınız araçlara ve işin aralarında nasıl ilerlediğine bakış
- Zamanın elle harcandığı ve müşterilerin kaybolduğu noktaların tespiti
- Sistemin adım adım akış şeması olarak çizilmesi
- Yazılı kapsam: nelerin kurulacağı, nelerin kurulmayacağı
- Net aşamaları olan bir takvim
- Görebileceğiniz ve deneyebileceğiniz kısa aşamalarla kurulum
- Yayından önce gerçek senaryolarla test
- Yarım bağlantı bırakmadan, özenli bir yayın
- Yayından sonra sistemin izlenmesi
- Bir şey dikkat gerektirdiğinde destek
- Sistemin kullanımına göre iyileştirmeler
- İlke
- Kurmadan önce çiziyoruz.
- Bir sistemin hatalarının çoğu kurulumdan önce, kâğıt üzerinde bulunur. Plan aşaması bu yüzden var: sistemi birlikte görür, kapsamı birlikte netleştiririz.
- Şirket — VERL Systems
- VERL Systems, kurucusu tarafından yönetilen bir dijital sistemler şirketidir.
- Şirket
- Bir dijital
- sistemler şirketi.
- VERL Systems, işletmelerin üzerinde çalıştığı dijital sistemleri tasarlar ve kurar: web platformları, otomasyon ve yapay zekâ.
- 01 — Ne yapıyoruz
- Tek bir hizmet değil, birbirine bağlı sistemler.
- Bir web sitesi, bir otomasyon ya da bir asistan, etrafındaki her şeye bağlandığında gerçekten işe yarar. Bu yüzden üç yetkinliği tek bir teklif olarak sunuyoruz. Tek bir sektörle sınırlı değiliz; elle yapılan işi azaltarak büyümek isteyen işletmelerle çalışıyoruz.
- 02 — Kurucu
- VERL Systems’i kurucusu Mahmud yönetiyor.
- Her proje ilk görüşmeden teslime kadar bizzat yürütülür; sisteminizi tasarlayan ve kuran kişiyle doğrudan çalışırsınız.
- Mahmud
- Kurucu
- 03 — İlkeler
- Parça değil, sistem.
- Bir web sitesi, otomasyon ya da asistan, etrafındaki her şeye bağlandığında en çok işe yarar.
- Söz değil, kanıt.
- Rakamlar yalnızca gerçek müşterilerden gelir. Demo sistemler her zaman demo olarak işaretlenir.
- Çalışmak için kurulur.
- Yayından sonraki günü düşünerek tasarlarız: net yapı, izlenen sistem, kolay değişiklik.
- İşçilik görünür.
- Kendi sitemizi nasıl kurduğumuz, sizinkini nasıl kuracağımızın ilk kanıtıdır.
- 04 — Standartlar
- Size verdiğimiz söz.
- 05 — Bilgiler
- İskenderun, Hatay, Türkiye
- Yerinde ve uzaktan
- Türkçe, İngilizce, Arapça
- Telefon
- Proje başlatın — VERL Systems
- Beş kısa soruyla projenizi anlatın. Özetiniz WhatsApp’ta hazır açılır.
- Proje başlatın
- Projenizi beş kısa soruyla anlatın.
- Sonunda özetiniz WhatsApp’ta hazır olarak açılır. Bu sitede hiçbir bilgi saklanmaz.
- Adım
- Geri
- İleri
- Düzenle
- isteğe bağlı
- Neye ihtiyacınız var?
- Bir veya birden fazla seçin.
- Web platformu
- Otomasyon
- Yapay zekâ sistemi
- Henüz emin değilim
- İşletmenizden bahsedin.
- İşletme adı
- Web sitesi veya Instagram
- Varsa adresini yazın.
- Neyi başarmak istiyorsunuz?
- Birkaç cümle yeterli.
- Ne zaman başlamak istersiniz?
- En kısa sürede
- 1–3 ay içinde
- Bu yıl içinde, daha sonra
- Esnek
- Son olarak, adınız?
- Adınız
- Özetiniz
- WhatsApp bu mesaj hazır olarak açılır. Göndermeden önce kontrol edebilirsiniz.
- WhatsApp’ta açın
- Merhaba VERL Systems, bir proje başlatmak istiyorum.
- İhtiyaç
- İşletme
- Web sitesi / Instagram
- Hedef
- Zaman
- Ad

### content/capabilities/web-platforms.ts
- Web platformları
- Hızlı, özenli ve ziyaretçiyi müşteriye dönüştürmek için kurulan web siteleri ve web uygulamaları.
- Kurumsal web siteleri, ürün ve kampanya sayfaları, web uygulamaları. Her biri daha büyük bir sistemin parçası olarak tasarlanır: arkasındaki araçlara bağlıdır, ölçülür ve yayından sonra da bakımı yapılır.
- Kurumsal siteler
- Kampanya sayfaları
- Web uygulamaları
- Çok dilli yapı
- Ziyaretçi
- Sayfa
- Talep
- Kurumsal web siteleri
- İşletmenin internetteki ana adresi: net bir yapı, her cihazda hızlı açılan sayfalar ve çalıştığınız her dilde içerik.
- Ürün ve kampanya sayfaları
- Tek bir teklif ya da tek bir kitle için odaklı sayfalar. Hızlı yayına alınır ve sonuçları ölçülür.
- Randevu, müşteri paneli, iç raporlama ekranları: işletmenin gerçek çalışma şekline göre kurulan, tarayıcıda çalışan yazılımlar.
- Baştan bağlantılı
- Formlar, randevular ve talepler doğrudan kullandığınız araçlara akar. Elle kopyalanan hiçbir şey kalmaz.
- Yapı ve içerik
- Tasarım sistemi
- Geliştirme
- Araçlara bağlantı
- Yayın ve ölçüm
- Next.js ile geliştirilir, Vercel üzerinde yayınlanır; mobil bağlantıda da hızlı açılır.
- Her sayfa her ekran boyutunda ve her dilde okunaklı ve erişilebilir olacak şekilde kurulur.
- İçerik, yeni sayfalar yeniden tasarım gerekmeden eklenebilecek şekilde yapılandırılır.

### content/capabilities/automation.ts
- Otomasyon ve entegrasyonlar
- İşletmenizin zaten kullandığı araçları birbirine bağlıyor, aradaki elle yapılan işi ortadan kaldırıyoruz.
- WhatsApp, CRM, takvimler, tablolar, ödeme ve randevu araçları. Bunları birbirine bağlıyor, her gün aynı şekilde tekrarlanan adımları sistemin kendisine bırakıyoruz.
- WhatsApp
- CRM
- Takvim ve randevu
- Raporlar
- Tetikleyici
- Akış
- Araçlar
- Araç entegrasyonları
- WhatsApp, CRM, takvim, tablo, ödeme ve randevu araçları birbirine bağlanır; veri kendi kendine doğru yere gider.
- İş akışı otomasyonu
- Onaylar, hatırlatmalar, takipler ve devirler her seferinde aynı şekilde, otomatik olarak çalışır.
- Bildirim ve yönlendirme
- Doğru kişi, doğru konudan doğru anda haberdar olur.
- Raporlama
- Kullandığınız araçlardan düzenli özetler hazırlanır; kimsenin bunları elle derlemesi gerekmez.
- Kurallar
- Bağlı araçlar
- Bildirim
- Kayıt ve rapor
- İş akışları n8n üzerinde kurulur; her adım görünür ve değiştirilebilir.
- Entegrasyonlar, WhatsApp Business API dahil, her aracın resmî API’si üzerinden yapılır.
- Her iş akışı yayına alınmadan önce gerçek senaryolarla test edilir.

### content/capabilities/ai-systems.ts
- Yapay zekâ sistemleri
- İşletmenin kendi bilgileriyle çalışan; soruları yanıtlayan, talepleri ayıklayan, randevu alan ve rapor hazırlayan asistanlar.
- Yapay zekâ asistanları ve ajanları, işletmenin kendi bilgisiyle çalışır ve gerçek araçlarına bağlanır. Ne yapacakları da, nerede durup işi bir kişiye bırakacakları da açıkça tanımlanır.
- Asistanlar
- Ajanlar
- Bilgi tabanı
- Araçlarınıza bağlı
- Soru
- Yapay zekâ
- İşlem
- Müşteri sorularını sizin bilgilerinizle, sizin üslubunuzla ve müşterinin dilinde yanıtlar.
- Ön eleme ve randevu
- Doğru soruları sorar, talepleri ayıklar ve gerçek takviminize randevu yazar.
- Ekip için ajanlar
- İşletmenin kendi verisinden özetler, taslaklar ve raporlar hazırlar.
- Kişiye devir
- Sistemin ne zaman geri çekilip işi bir kişiye bırakacağı net kurallarla belirlenir.
- Gelen soru
- İşletme bilgisi
- Model: OpenAI / Claude
- Araçlarınızda işlem
- Gerektiğinde kişiye devir
- OpenAI ve Claude modelleri üzerine kurulur; model, işe göre seçilir.
- Yanıtlar işletmenin kendi belge ve verilerine dayanır.
- Her asistanın sınırları tanımlıdır ve bir kişiye devir yolu vardır.

### content/work/salon.ts
- Güzellik salonu web sitesi
- Bir güzellik salonu için web sitesi. VERL Systems’in teslim ettiği ilk müşteri projesi.
- Güzellik
- Web sitesi
- web-platforms
- Web sitesi, masaüstü
- Web sitesi, telefon
- Projenin tam hikâyesi (ihtiyaç, kurulum ve ekranlar) hazırlanıyor.

### content/work/lead-response-system.ts
- Talep karşılama ve yanıt sistemi
- Web sayfasından gelen talepleri ön eleyen, WhatsApp’a ileten, anında yanıtlayan ve doğru kişiye yönlendiren bir sistem.
- Hizmet işletmeleri
- Web + Otomasyon
- web-platforms
- automation
- Talep karşılama sistemi ekranları
- Talepler birden fazla kanaldan geliyor. Birinin her birini okuması, aynı soruları sorması ve doğru kişiye iletmesi gerekiyor; çoğu zaman elle ve geç.
- Ziyaretçi talep sayfasına gelir
- İhtiyaç, zaman ve ayrıntılar sorulur
- Hazır talep WhatsApp’a düşer
- Anında yanıt gider
- Talep doğru kişiye yönlendirilir
- Talep sayfası Next.js ile kurulur; her gönderim bir n8n iş akışını başlatır.
- Mesajlar WhatsApp Business API üzerinden gönderilir ve alınır.
- Yönlendirme kuralları tek bir yerde tutulur ve kod yazmadan değiştirilebilir.
- Talep sayfası, masaüstü
- Talep sayfası, telefon
- WhatsApp’ta anında yanıt ve sorular
- Ziyaretçiye ihtiyacını, zamanlamasını ve ayrıntıları sorar.
- Hazır talebi doğrudan işletmenin WhatsApp’ına gönderir.
- Mesai dışında gelen mesaja da anında yanıt verir.
- Talebi doğru kişiye yönlendirir.

### content/campaigns/emlak.ts (only on /c/emlak)
- Emlak ofisleri için talep sistemleri — VERL Systems
- Emlak ofisinizin kaçırdığı her müşteri talebini yakalayan sistemler.
- Gece gelen mesajlara sabah
- cevap veriyorsanız, o müşteri
- çoktan başka bir ofisi aradı.
- VERL Systems, emlak ofisinizin kaçırdığı her müşteri talebini yakalayan sistemler kurar.
- 01 — Sorun
- Talepler geliyor. Takip eden yok.
- Talepler ilan sitelerinden, Instagram’dan ve WhatsApp’tan geliyor. Geç ya da hiç verilmeyen cevaplar yüzünden çoğu yan ofise gidiyor.
- Talepler beş farklı yerden geliyor.
- Kimse onları takip etmiyor.
- Geri dönüşler unutuluyor.
- Bu ay kaç müşteri kaybettiğinizi bilmiyorsunuz.
- 02 — Demo
- Emlak ofislerine uyarlanabilen bir demo sistem.
- Gerçek bir müşteri projesi değil. Sistemin nasıl çalıştığını gösteren bir demo.
- 03 — Süreç
