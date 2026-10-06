// The only place the contact details live (CLAUDE.md §6).
// Social links: not provided yet — leave them out entirely.
export const WHATSAPP_NUMBER = "905312885044";
export const PHONE_DISPLAY = "+90 531 288 50 44";
export const PHONE_HREF = `tel:+${WHATSAPP_NUMBER}`;
export const EMAIL = "verl.hq@gmail.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;

// Used by the /start brief and the direct "message us" link.
export const whatsappUrl = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Founder portrait for /company and the Home company section. Shows a blueprint placeholder until the file exists.
export const FOUNDER_PORTRAIT = {
  src: "/company/mahmud.jpg",
  width: 1024,
  height: 1024,
  alt: {
    tr: "VERL Systems kurucusu Mahmud",
    en: "Mahmud, founder of VERL Systems",
    ar: "محمود، مؤسس VERL Systems",
  },
  label: "Founder — Portrait",
};

// Absolute base for canonical URLs and the sitemap. Vercel sets the production host;
// no domain is invented here (waiting for Mahmud).
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
