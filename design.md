# Design System: VERL Systems

> Source of truth for every screen, component and animation on the VERL Systems site.
> Read this file fully before building or changing any UI.

---

## 1. Visual Theme & Atmosphere

A quiet, architectural studio that builds machines. The interface feels like a well-lit concrete gallery at dusk: warm sand surfaces, deep ink type, one burning terracotta accent, and motion that behaves like precision hardware — weighty, deliberate, never bouncy or playful.

- **Density:** 4 / 10 — "Gallery Airy". Generous whitespace. Content earns its space.
- **Variance:** 7 / 10 — "Offset Asymmetric". Split layouts, off-center compositions, strong left alignment.
- **Motion:** 8 / 10 — "Cinematic Choreography". The site itself is the portfolio piece: every section enters with intent, the hero runs a living system architecture, and the case studies animate the data flow. Motion is heavy on desktop and scaled down on mobile (see §7).

The single feeling to leave behind: *"These people build serious systems, and they sweat the details."*

---

## 2. Color Palette & Roles

Four brand colors. No new hues are ever introduced. Every extra shade (borders, muted text, hover states) is derived from these four through opacity or mixing.

| Token | Name | Hex | Role |
|---|---|---|---|
| `--ink` | **Black Ink** | `#0B0C10` | Primary text (light), canvas (dark) |
| `--titanium` | **Titanium** | `#1F2833` | Secondary surfaces, dark cards, secondary text |
| `--sand` | **Sand** | `#DFD6C2` | Canvas (light), primary text (dark) |
| `--ember` | **Ember** | `#D97D54` | The single accent: CTAs, active states, focus, data highlights |

### Light Theme — PRIMARY (default)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#DFD6C2` | Page canvas |
| `--surface` | `color-mix(in srgb, #DFD6C2 82%, #FFFFFF)` | Raised panels, inputs |
| `--surface-inverse` | `#1F2833` | Dark feature blocks inside the light page |
| `--text` | `#0B0C10` | Headlines, body |
| `--text-muted` | `rgba(11,12,16,0.64)` | Descriptions, metadata (≈5.8:1) |
| `--border` | `rgba(11,12,16,0.12)` | 1px structural lines |
| `--accent` | `#D97D54` | **Fill only** — never text on sand |
| `--on-accent` | `#0B0C10` | Text on Ember buttons (≈6.5:1) |

### Dark Theme — SECONDARY
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B0C10` | Page canvas |
| `--surface` | `#1F2833` | Cards, panels, inputs |
| `--surface-inverse` | `#DFD6C2` | Light feature blocks inside the dark page |
| `--text` | `#DFD6C2` | Headlines, body (≈13:1) |
| `--text-muted` | `rgba(223,214,194,0.64)` | Descriptions, metadata (≈6:1) |
| `--border` | `rgba(223,214,194,0.12)` | 1px structural lines |
| `--accent` | `#D97D54` | Fills **and** text/links (≈6.5:1 on ink) |
| `--on-accent` | `#0B0C10` | Text on Ember buttons |

### The Ember Rule (critical)
- **Light theme:** Ember is **never** used as text color on Sand (contrast ≈2:1, unreadable). Use it as a fill (buttons, badges, progress lines, chart strokes, the logo underline). Links on light are Ink with an Ember underline.
- **Dark theme:** Ember can be text, link, icon, or fill.
- Ember covers **at most ~5%** of any viewport. Scarcity is what makes it feel expensive.
- Banned: `#000000`, `#FFFFFF` as a surface, any gradient between brand colors on text, any glow.

---

## 3. Typography Rules

- **Display & Body:** `Schibsted Grotesk` (Google Fonts). Weights: 400, 500, 600.
- **Mono:** `IBM Plex Mono`. For metrics, timestamps, labels, section indices (`01 / 04`), code, and every number in a case study.
- **Arabic (Gulf phase, later):** `IBM Plex Sans Arabic` paired with Schibsted Grotesk. Not loaded in phase 1.
- **Turkish check:** verify `ğ ş ı İ ç ö ü` render correctly in both weights before launch.

| Level | Size | Weight | Tracking | Leading |
|---|---|---|---|---|
| Display | `clamp(2.75rem, 6vw, 5.5rem)` | 500 | `-0.035em` | 1.0 |
| H1 | `clamp(2.25rem, 4.5vw, 4rem)` | 500 | `-0.03em` | 1.05 |
| H2 | `clamp(1.75rem, 3vw, 2.75rem)` | 500 | `-0.02em` | 1.1 |
| H3 | `1.375rem` | 600 | `-0.01em` | 1.25 |
| Body L | `1.1875rem` | 400 | `0` | 1.6 |
| Body | `1rem` | 400 | `0` | 1.65 |
| Label (Mono) | `0.75rem` | 500 | `0.14em`, UPPERCASE | 1.4 |
| Metric (Mono) | `clamp(2.5rem, 5vw, 4rem)` | 500 | `-0.04em` | 1.0 |

Rules:
- Hierarchy comes from weight and color (`--text` vs `--text-muted`), not from screaming sizes.
- Body max width: `65ch`.
- Wide-tracked uppercase Mono labels sit above headlines as eyebrows (`SYSTEMS / 02`) — this echoes the brand stationery.
- Banned: Inter, system-ui as the brand face, any serif, any font weight above 600.

---

## 4. Component Stylings

**Buttons**
- *Primary:* Ember fill, Ink text, 999px radius, `14px 24px` padding, min height `48px`. Trailing arrow icon in a circle that slides `4px` right on hover. Active: `translateY(1px) scale(0.98)`. Only one primary button per viewport.
- *Secondary:* transparent, 1px `--border`, `--text`. Hover: border becomes `--text`.
- *Text link:* underline 1px offset 4px; underline scales from left on hover (`scaleX` 0→1).
- No glows, no gradients, no custom cursors.

**Cards** — used only when elevation means hierarchy (case study tiles, capability panels).
- Radius `24px`. 1px `--border`. Shadow tinted to the canvas: `0 24px 48px -24px rgba(11,12,16,0.25)` on light, none on dark (use border only).
- Image inside card: clipped, scales `1.03` on hover over 900ms.

**Inputs** (used only in the /start brief) — label above, helper below, focus ring 2px `--accent` (dark) / 2px `--text` + 2px Ember offset (light).

**Section index** — every major section carries a Mono index top-left (`01 — CAPABILITIES`). Builds the "engineered document" feel.

**The monument hero** (signature component, `components/motion/HeroScene.tsx`, images in `public/home/`, sources in `asset/1–8`). A photographic dusk scene in four planes, back to front: the empty plate (sky + sand), the headline (server HTML), a concrete V monument cut out with real alpha, and a concrete ledge close to the camera. Plate and V share one contact point on the horizon: they translate together and scale around it at different rates (plate 1→1.06, V 1→1.22 over the hero's scroll), so the V grows toward the visitor and never leaves the ground. The ledge rides with the page (fastest plane). Desktop mouse: planes shift sideways by depth (6 / 16 / 28px). Phones get their own composition: a low-horizon portrait plate, a smaller V under the copy.
- Ink type in both themes (`data-theme="light"` on the section): the photo is always dusk.
- Reduced motion: the opening frame, no scroll or pointer movement.

**Flow diagram** (used in case studies and capability pages) — nodes are rounded rectangles on `--surface`, connected by 1.5px paths in `--border`; the active path and moving "data packet" dot are Ember.

**Capability panel** — large panel per capability: Mono index (`01`), H2 title, one-sentence outcome, 3–4 Mono tags of what's included, a small animated flow preview, and a link to the capability page.

**Start brief (/start)** — multi-step form, one question per step, progress bar in Ember, large tap-target choice chips. Final step shows a summary and opens WhatsApp with the full brief prefilled. No backend.

**The Blueprint statement** (`components/motion/BlueprintStage.tsx`, Home section 2). The manifesto sits on a live engineering grid next to the system architecture: a section-wide `<canvas>` with 40px cells (every 4th line major) and a cursor spotlight (≈210px desktop, 150px mobile, eased 0.08 per frame) that lights intersections with a crosshair and an Ember dot leaning 6% toward the cursor. With no mouse, after 1.5s idle, or on touch, it drifts on a Lissajous path. Colours come from `--grid-rgb` / `--ember-rgb`, the canvas fades at its top and bottom edges, and the section is opaque (`--bg`) so the ambient field never doubles it. On the right, the faceted V from `vmark-geometry.ts` sits over its construction lines, lit from the cursor (Sand overlay by facet normal). Around it are Mono nodes WEB · AI · AUTOMATION · CRM · DATA (labels in `content/*/home.ts`; mobile shows the first three), joined by 1.5px quadratic paths through the V, each carrying one Ember packet. On desktop with a mouse it tilts toward the cursor (max 4°). The drawing assembles once when scrolled into view (`data-in`). Layout: text 7 / visual 5; on mobile the visual sits below the text. Node labels hold ≈10.5px on screen at any width.

**Demo badge** — every demo project carries a Mono pill `DEMO SYSTEM` in the top-left of its tile and page hero. Non-negotiable.

**Loading** — skeleton blocks matching final layout, shimmer via `translateX` gradient. No spinners.

---

## 5. Layout Principles

- Max width `1360px`, side gutters `clamp(1rem, 4vw, 3rem)`. 12-column CSS Grid, `24px` gap.
- Hero: headline left, the monument right (desktop); headline above the monument (mobile). Never centered.
- Feature rows: 2-column zig-zag or asymmetric 5 / 7 grids. **The 3-equal-cards row is banned.**
- Section vertical rhythm: `clamp(5rem, 12vw, 10rem)`.
- Alternate canvas blocks: light page → one full-bleed `--surface-inverse` (Titanium) block for the Work section → back to light. This creates the "chapter" feel without a second accent.
- No overlapping text and images. Each element owns its zone. Exceptions, all on Home: the hero planes, the seam chapter and the close, where type sits on photographs with a local scrim and is checked for contrast.
- Full-height sections use `min-height: 100dvh`, never `100vh`.

### Site map (scalable)
```
/                        Home — the company
/capabilities            Overview of the three capabilities
/capabilities/[slug]     web-platforms · automation · ai-systems
/work                    All case studies
/work/[slug]             One page per case study (real or demo)
/approach                How we work, phase by phase, with deliverables
/company                 Company, founder, standards
/start                   Start a project — multi-step brief → WhatsApp
/en/...                  English mirror of every route

Campaign pages (NOT in main navigation, NOT in footer):
/c/[slug]                e.g. /c/emlak — sector pages used only in outreach links
```
Main navigation: Capabilities · Work · Approach · Company · [Start a project]
New capabilities, case studies and campaign pages are added by duplicating templates — no redesign.

### Home section order
1. Hero — company headline + subline + the monument scene + "Start a project"
2. Statement — one large manifesto sentence about what VERL believes (systems over manual work), revealed line by line
3. The seam — the page's peak, and the Capabilities chapter heading. Then the three capability panels (asymmetric, not 3 equal cards)
4. Selected work — real project + demo systems (full-bleed Titanium block)
5. Approach — 4 phases with deliverables, pinned scroll
6. Standards — the confirmed commitments from about.md §6
7. Technologies we use — quiet monochrome row of tool logos (not "partners")
8. Company — founder portrait + two lines + link to /company
9. Close — the monument at night, seam lit, "Start a project" (inner pages keep the FinalCta card)

Banned on Home: any single sector, any single product demo (chat/form) as the main visual, problem-led sales copy about one pain point.

### Case study page template
1. Hero: project name, Mono meta row (`SECTOR · YEAR · TYPE`), `DEMO SYSTEM` badge if applicable, hero mockup
2. The problem (client's words, plain language)
3. The system — animated flow diagram
4. How we built it — technical layer (stack, integrations, decisions)
5. Screens — device mockups gallery
6. Results — real numbers only, in Mono. Demos show "what the system does", never business outcomes
7. Next case study → + CTA

---

## 6. Motion & Interaction — the signature layer

Motion is a core brand asset. It must look expensive and stay light.

### Engine & tokens
- Library: **Motion** (motion.dev, React) for components and scroll; **Lenis** for smooth scroll on desktop.
- Default spring: `{ type: "spring", stiffness: 100, damping: 20, mass: 1 }`.
- Snappy spring (buttons, toggles): `{ stiffness: 300, damping: 30 }`.
- CSS easing fallback: `cubic-bezier(0.22, 1, 0.36, 1)` ("expo-out").
- Durations: micro 180ms · element 600ms · section 900ms · hero sequence ≤ 1.6s total.
- Stagger: 70–90ms between siblings.
- Animate **only** `transform` and `opacity` (plus SVG `stroke-dashoffset` for path drawing). Never width, height, top, left, or box-shadow.

### Signature effects (build all of these)
1. **Brand intro (first visit only, 1.2s, pure CSS — `BrandIntro.tsx`):** a Titanium curtain; the V outline draws itself in two strokes (0–0.57s), the Ember underline slides in (0.4–0.7s), then the curtain lifts `translateY(-100%)` (0.75–1.2s). An inline head script sets `html[data-intro="on"]` once per session; repeat visits and reduced-motion users never see it. The page is already painted underneath; on a first visit `--intro-delay` (0.85s) pushes the hero animations to start as the curtain lifts.
2. **Hero headline line-mask reveal:** each line slides up from a clipped mask (`translateY(110%) → 0`), staggered 80ms. Pure CSS, so the headline is real text at first paint. Below the fold the same effect runs on scroll (`LineReveal`).
3. **Monument entrance (hero):** the V rises 4% and fades in (1.4s), the ledge slides up (1.2s), behind the headline lines. Pure CSS, so nothing waits for JS.
4. **Scroll reveals:** sections enter with `opacity 0→1, y 32→0`, children cascade. Trigger at 20% visibility, once.
5. **Flow diagram drawing:** paths draw on scroll (`stroke-dashoffset`), nodes scale `0.96→1` as the line reaches them, an Ember packet dot travels the active path in a perpetual loop.
6. **Pinned process section:** left column (title + step index) pins; right column scrolls through 4 steps; a vertical Ember progress line fills with `scaleY` tied to scroll.
7. **Metric counters:** Mono numbers count up when visible (real metrics only).
8. **Work tiles:** image scales inside its clip on hover, Mono label slides up from below, arrow rotates -45°.
9. **Theme switch:** View Transitions API circular reveal expanding from the toggle button.
10. **Page transitions:** shared-element transition from a work tile image into the case study hero (View Transitions API), fallback crossfade.
11. **Grain overlay:** fixed pseudo-element, SVG noise, opacity `0.035` (light) / `0.05` (dark). Never on a scrolling element.
12. **Primary button:** arrow circle nudges on hover, tactile press on active, and a light magnetic pull toward a mouse cursor (20% of the offset, snappy spring). On touch it leans toward the finger while pressed and floats slowly (±5px, 3.2s, `.float`); reduced motion inert — `Magnetic.tsx`.
13. **Hero supporting copy:** eyebrow, sub-line and CTA rise in (`opacity 0→1, y 16→0`) behind the headline lines (`.rise`, pure CSS).
14. **Statement read-along:** the manifesto's words light up from 20% to full opacity as the sentence scrolls through the viewport (`ScrollWords.tsx`, scroll-linked), beside the Blueprint architecture (§4). Its loop runs only on screen (`useLoopGate`). Reduced motion: static grid, the V fully drawn, no packets, spotlight or tilt.
15. **Header:** slides up while reading down, returns on any scroll up or keyboard focus; once scrolled it gets a frosted `--bg` layer and a border (`HeaderShell.tsx`).
16. **Approach focus:** on desktop the phase in reading position stays at full strength, the others dim to 35%, and the pinned index and phase title roll odometer-style.
17. **Work tile drift:** the cover drifts ±3.5% inside its clip with scroll (`Parallax.tsx`).
18. **/start:** a single-choice step (timeline) advances on its own 320ms after the choice.
19. **Ambient field (`AmbientField.tsx`, every page):** a fixed canvas behind the content continues the Blueprint below the hero — a faint 40px dot lattice (crosses on major intersections) drifting at 0.5× scroll with a slow breathing wave, a cursor spotlight that fades 2.5s after the mouse stops, and 3–6 Ember signals running along the grid lines with short fading trails (they lean toward the cursor, speed up with scroll, and a click on empty canvas sends four out). It fades in below any `[data-ambient-start]` element (Home hero, page intros, /start grid). Reduced motion: static lattice only.
20. **The seam (Home peak, `Seam.tsx` + `SeamStage.tsx`):** a 340svh section (300svh on phones) with a sticky stage. Scroll pushes the camera into the gap between the V's arms (wide shot scales 1→6 around the seam point), the close shot of the lit seam fades in, an Ember line draws down the seam, splits into three branches labelled Web · Automation · AI, and the Capabilities heading lands on the final frame. All motion is CSS reading `--p` (`useScrollVar`). The largest scroll span on the page; the Blueprint statement before it is the calm, technical counterpoint to the photographs. Reduced motion: no pin, final frame only.
21. **Close (`HomeClose.tsx`):** the monument at night settles from 1.08 to 1 as it scrolls in, then holds. On phones the photo sits below the copy and its sky continues as the section colour.

Reduced motion: scroll-linked elements carry `.rm-static`, which pins them to their end state with `!important` (the server-rendered inline style is never corrected on hydration).

### Performance budget (hard limits)
- LCP < 2.5s on a mid-range Android over 4G. The hero headline is the LCP element — it renders as text immediately; animation only enhances it.
- Animation JS (Motion + Lenis) code-split; no animation library loads before first paint.
- No video backgrounds in phase 1. Mockups are optimized AVIF/WebP with explicit dimensions.
- 60fps target: test with Chrome DevTools Performance panel at 4× CPU throttle.

### Accessibility
- `prefers-reduced-motion: reduce` → disable intro, smooth scroll, parallax, loops and counters; keep simple opacity fades (≤200ms).
- Perpetual loops pause when off-screen and when the tab is hidden.
- Every loop has no essential information that is only visible mid-animation.

---

## 7. Responsive Rules

- `< 768px`: every multi-column layout collapses to one column. No horizontal scroll, ever.
- Mobile motion is reduced: no Lenis smoothing on touch, no pinned sections except the Home seam (process becomes a stacked list with reveal), no pointer depth in the hero.
- The hero monument sits **below** the headline on mobile, on its own portrait plate.
- Touch targets ≥ 44px. Body text never below 16px.
- Nav: desktop horizontal links + theme toggle + language switch (`TR / EN`); mobile collapses to a full-screen menu that reveals links with the line-mask animation.

---

## 8. Anti-Patterns (Banned)

- Emojis anywhere on the site
- Inter font, any serif font
- Pure `#000000` or white surfaces
- Neon glows, outer glow shadows, gradient text
- More than one accent color; Ember as text on Sand
- Centered hero; 3 equal cards in a row
- Overlapping text and images (except the Home photographic scenes, §5)
- Custom mouse cursors
- "Scroll to explore", bouncing arrows, scroll chevrons
- Stock photos of people, fake team members, fake logos of "clients"
- Invented metrics or round fake numbers (`+342%`, `99.9%`)
- Testimonials that did not happen
- Demo projects without the `DEMO SYSTEM` badge
- Copy clichés: Elevate, Seamless, Unleash, Next-Gen, Cutting-edge, Yenilikçi, Dijital dönüşüm, Geleceğe taşıyoruz
- Any contact form other than the /start brief
- Positioning VERL as one service ("website agency", "WhatsApp bot") or one sector anywhere in the main site
- Linking campaign pages (/c/...) from navigation or footer
