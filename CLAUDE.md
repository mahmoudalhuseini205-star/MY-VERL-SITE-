# CLAUDE.md — VERL Systems Website

Instructions for Claude Code working on this project. Read this file and `design.md` before every task. Read `about.md` before writing any copy.

---

## 1. Who you are working with

- The owner is **Mahmud**, founder of VERL Systems (İskenderun, Hatay, Türkiye).
- He is **not a programmer**. He does not read JavaScript or TypeScript. He runs you from the Claude Desktop App on **Windows**.
- After every task, explain in **2–4 short sentences of Levantine Arabic**: what changed, where to see it, and the exact command to preview it. No code explanations unless he asks.
- When something needs his decision (a photo, a phone number, a wording choice), stop and ask one clear question instead of guessing.
- Never say a task is done until you have run the build and checked it.

## 2. What this project is

The company website of **VERL Systems**, a founder-led digital systems company that designs, builds and maintains web platforms, automations and AI systems.

This is a **company site, not a landing page for one offer.** It must feel like the site of a serious, established firm.

The site has three jobs, in this order:
1. **Trust.** Within seconds a visitor believes VERL is a real, capable company.
2. **Breadth.** VERL builds connected systems across web, automation and AI — never narrowed to one service, one product or one sector.
3. **Craft.** The site's own design and motion are the first proof of quality.

The conversion path is the `/start` project brief, which ends by opening WhatsApp with the brief prefilled.

Sector-specific campaign pages live under `/c/[slug]`, are excluded from navigation, footer and sitemap, and never shape the main site's messaging.

## 3. Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** with design tokens as CSS variables (from `design.md` §2)
- **Motion** (motion.dev) for animation, **Lenis** for desktop smooth scroll
- Fonts: `Schibsted Grotesk` + `IBM Plex Mono` via `next/font`
- i18n: route-based, Turkish is default (`/`), English under `/en`, Arabic (RTL) under `/ar`. Copy lives in `content/tr/*.ts`, `content/en/*.ts` and `content/ar/*.ts` — never hardcode copy inside components. Use logical Tailwind classes (`ms-`/`me-`/`start-`/`end-`) so RTL works.
- Case studies are data files in `content/work/` rendered by one template.
- Deploy: Vercel.

Keep it simple. Do not add a library when the platform or an existing dependency already does the job. No CMS, no database, no backend in phase 1.

## 4. Commands (Windows)

```
npm install        # first time only
npm run dev        # preview at http://localhost:3000
npm run build      # must pass before any task is "done"
npm run lint
```

## 5. Folder structure

```
app/
  [locale]/
    page.tsx                     Home
    capabilities/page.tsx        Capabilities overview
    capabilities/[slug]/page.tsx Capability template
    work/page.tsx                All work
    work/[slug]/page.tsx         Case study template
    approach/page.tsx            How we work
    company/page.tsx             Company + founder + standards
    start/page.tsx               Project brief
    c/[slug]/page.tsx            Campaign pages (hidden from nav)
components/
  ui/          Buttons, badges, section index, theme toggle, choice chips
  motion/      Reveal, LineMask, Counter, FlowDiagram, SystemArchitecture
  sections/    Hero, Statement, Capabilities, Work, Approach, Standards, Tech, Company, CTA
content/
  tr/  en/        All copy
  capabilities/   One file per capability
  work/           One file per case study
  campaigns/      One file per campaign page
  site.ts         Phone, email, WhatsApp messages, social links
public/
  work/        Optimized mockup images (AVIF/WebP)
```

## 6. Non-negotiable rules

### Honesty (brand-critical)
- **Never invent** metrics, client names, testimonials, team members, partner logos, or awards.
- Every demo project shows the `DEMO SYSTEM` badge on its tile and page.
- Demo case studies describe what the system does. Business results appear only for real clients, using numbers Mahmud provides.
- If a section needs proof that doesn't exist yet, leave it out and tell Mahmud. Never fill it with placeholder claims that could ship.

### Contact
- The WhatsApp number and social links live only in `content/site.ts`.
  - `WHATSAPP_NUMBER = "905312885044"` (Türkiye, international format, no `+` or spaces — this is the format `wa.me` requires)
  - Display format on the page: `+90 531 288 50 44`
  - Social links: not ready yet. Leave them out entirely until Mahmud provides them — no placeholder icons.
  - Business email: `verl.hq@gmail.com` (`EMAIL` in `content/site.ts`), shown in footer, mobile menu and /company.
- The primary CTA everywhere is **"Start a project" / "Proje başlatın"** → `/start`.
- `/start` is a multi-step brief (one question per step): what they need (Web platform / Automation / AI system / Not sure yet — multi-select) → business name and website/Instagram → what they want to achieve (short text) → timeline → name. The final step shows a summary and opens `https://wa.me/905312885044?text=<encoded summary>` in the visitor's language. No backend, nothing stored.
- Budget ranges are not included until Mahmud defines them.
- One primary CTA per viewport. No other forms.

### Design
- Follow `design.md` exactly: tokens, the Ember rule, typography scale, layouts, motion tokens, anti-patterns.
- Light theme is the default. Dark theme must be fully supported on every page.
- Any new component must work in both themes, in TR and EN, at 375px wide, and with reduced motion.

### Performance
- LCP < 2.5s on mobile. The hero headline renders as text before any animation code runs.
- Animate only `transform` and `opacity` (and SVG stroke-dashoffset).
- Images: `next/image`, explicit sizes, AVIF/WebP.
- Before finishing a UI task, run `npm run build` and check there are no layout shifts or console errors.

## 7. Brand voice (for all copy you write)

Read `about.md` for positioning. Summary:

- **Company voice:** calm, confident, precise — an established firm, not a salesman. Speak about outcomes (time saved, work removed, clients served), not features. Never lead with one pain point or one sector on company pages. Sector-specific problem copy is allowed only on `/c/` campaign pages.
- **Turkish:** always formal `siz`, plain and natural, never stiff or translated-sounding. Turkish copy you write is a draft — flag it for Mahmud to check.
- **Technical depth** appears only inside case studies under "Nasıl kurduk / How we built it".
- No exclamation marks in headlines. No hype. Confidence comes from calm, specific sentences.
- Studio voice is "biz / we". The founder speaks as "ben / I" only on the About page and the founder section.

### Banned words
EN: elevate, seamless, unleash, next-gen, cutting-edge, revolutionize, game-changer, empower, synergy, leverage, world-class
TR: yenilikçi, dijital dönüşüm, geleceğe taşıyoruz, son teknoloji, çığır açan, eşsiz, mükemmel çözümler, sınırları zorlayan

## 8. Workflows

**Add a case study:** copy `content/work/_template.ts` → fill fields (set `isDemo: true` for demos) → add images to `public/work/<slug>/` → it appears automatically on Home and at `/work/<slug>`.

**Add a campaign page (e.g. /c/klinik):** add a file in `content/campaigns/`; the `c/[slug]` template renders it. Keep it out of nav, footer and sitemap (`noindex` optional, ask Mahmud).

**Add a capability:** add a file in `content/capabilities/`; it appears on Home, /capabilities and its own page.

**Change a color, font or spacing:** change the token in one place (CSS variables). Never hardcode a hex value in a component.

## 9. Definition of done

- [ ] `npm run build` passes
- [ ] Works in light + dark, TR + EN
- [ ] Checked at 375px and 1440px
- [ ] Reduced-motion checked
- [ ] No invented claims, no banned words
- [ ] Short Levantine Arabic summary sent to Mahmud

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single- code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only yuseour own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
