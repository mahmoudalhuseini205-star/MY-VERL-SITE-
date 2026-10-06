// Self-check for lib/brief.ts. Run: node --experimental-strip-types scripts/check-brief.mjs
import assert from "node:assert/strict";

const { briefMessage } = await import("../lib/brief.ts");
// Mirrors whatsappUrl() in content/site.ts.
const briefUrl = (b, l) => `https://wa.me/905312885044?text=${encodeURIComponent(briefMessage(b, l))}`;

const labels = {
  greeting: "Merhaba VERL Systems, bir proje başlatmak istiyorum.",
  needs: "İhtiyaç",
  business: "İşletme",
  link: "Web sitesi / Instagram",
  goal: "Hedef",
  timeline: "Zaman",
  name: "Ad",
};
const brief = {
  needs: ["Web platformu", "Otomasyon"],
  business: "Güneş & Oğulları",
  link: "  ",
  goal: "Randevuları\nkolaylaştırmak",
  timeline: "Esnek",
  name: "Ayşe",
};

const msg = briefMessage(brief, labels);
assert.equal(
  msg,
  "Merhaba VERL Systems, bir proje başlatmak istiyorum.\n\nİhtiyaç: Web platformu, Otomasyon\nİşletme: Güneş & Oğulları\nHedef: Randevuları\nkolaylaştırmak\nZaman: Esnek\nAd: Ayşe",
);
assert.ok(!msg.includes("Instagram:"), "empty optional field is omitted");

const url = briefUrl(brief, labels);
assert.ok(url.startsWith("https://wa.me/905312885044?text="));
assert.ok(!url.includes("&O") && url.includes("%26"), "& is encoded");
assert.equal(decodeURIComponent(url.split("?text=")[1]), msg, "round-trips with Turkish characters and newlines");

console.log("check-brief: ok");
