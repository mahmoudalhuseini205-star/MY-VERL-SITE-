# BRIEF: VERL Systems home page

Partly interviewed (2026-10-04), partly authored under explicit delegation.

## Interview answers (Mahmud)

- **Direction:** photographic world with video ("عالم تصويري بفيديو"). Overrides design.md's "no video in phase 1" for the home page.
- **Scope:** home page only.
- **Section indices (`01 — Principle`) and em dashes in them:** keep as they are. Brand identity wins over the skill's ban.
- **The one moment:** delegated ("اختارها إنت").

## Authored under delegation (from about.md, design.md and the brand images in /asset)

1. **Vibe:** a concrete gallery at dusk. Monumental, quiet, exact. References: Tadao Ando's concrete, the brand stationery in `/asset` (dark facades, sand, one rust light), Blade Runner 2049's dusk palette.
2. **Journey:** company first → what we believe → the system lights up (peak) → what we build → proof → how we work → what we commit to → who leads it → start a project.
3. **Energy:** calm open, quiet statement, one big moment, then steady and precise, calm resolved close.
4. **Feeling:** see curve below.
5. **What no other site does:** the brand's Ember fold line becomes real light in a real place. Scroll turns it on, and it runs out of the photograph into the capabilities below.
6. **Aesthetic family:** premium-minimal, architectural. That's the brand as already defined.
7. **One world or scenes:** distinct scenes (photographic hero, peak clip, close still), not one continuous flight.
8. **Assets:** brand images in `/asset` (style reference only, they contain fake metrics and names so none of them ships). Everything photographic is generated.

## World preamble (verbatim in every prompt)

> Architectural photography, tilt-shift corrected verticals, wide 24mm, medium-format sharpness. A monumental faceted V-shaped structure of dark board-formed concrete, two leaning wedge arms that almost meet at the base, a narrow seam between them. Warm sand desert floor and pale sand-coloured sky at dusk. One warm terracotta light source low on the horizon, cool ambient fill, long soft shadows. Colour grade of sand (#DFD6C2), black ink (#0B0C10), titanium blue-grey (#1F2833) and one terracotta accent (#D97D54). Fine film grain, honest concrete texture, formwork lines, small imperfections. Long-exposure stillness, no people, no vehicles, no text, no logos. Photographic realism, NOT 3D render, NOT CGI, NOT clay, NOT illustration, no digital glow, no plastic sheen.

## Grammar

**Chaptered monument** (a named variant of chaptered editorial). Chapters keep the brand's Mono indices; the hero is a layered photographic plate instead of a bare title page, and exactly one chapter is a scrub. Why the others lost: filmic one-shot forbids the visible chapter indices Mahmud chose to keep; live surface would need a real running product; continuous world needs travel through a place; typographic poster drops the photography he asked for; gallery fits /work, not a company home; split stage has no two-sided argument here; cutlist is the wrong energy for a calm firm.

## Signature move: "The seam"

In the peak chapter the scroll scrubs a camera push into the seam of the concrete V. An SVG Ember trace registered to the seam in the footage draws itself from scroll progress, reaches the base and splits into three lines labelled WEB, AUTOMATION, AI that run out of the photograph and down into the capability panels below. The logo's fold line, made physical, then turned into the system.

## Feeling curve

| # | Chapter | Feeling | What causes it |
|---|---|---|---|
| 1 | Hero | Calm curiosity | Layered dusk plate: sky, the V monument and a foreground ledge move at different rates; the headline sits between sky and monument |
| 2 | Statement | Recognition | Plain sand ground, the manifesto lights up word by word. **Authored quiet** before the peak |
| 3 | The seam (PEAK) | Awe | Pinned scrub into the seam, the Ember light ignites and splits into three |
| 4 | Capabilities | Clarity | The three lines land in the three panels |
| 5 | Work | Proof | Full-bleed Titanium chapter, real project and labelled demo |
| 6 | Approach | Trust | Pinned phases with the Ember progress line |
| 7 | Standards · Tech · Company | Confidence | Compressed, plain, short |
| 8 | Close | Resolve | The same monument at night, the seam lit and still, one line, "Start a project" |

**Peak:** "you scroll and the camera walks into a giant concrete V until a line of fire runs down the crack and splits into the three things they build." Lives in chapter 3, largest span on the page (~3 viewport-heights).

**Tell-someone:** it's the site where you scroll into a concrete monument and the light inside it turns into their services.

**Authored silence:** chapter 2 is deliberately plain (no media) so the peak has something to arrive from.

## Assets plan (kie.ai)

| Asset | Type | Notes |
|---|---|---|
| hero-plate | still 16:9 + 9:16 | sky + sand floor only, empty centre-right for the monument |
| hero-monument | still 16:9 on flat chroma green, keyed to alpha | same light direction as the plate |
| hero-ledge | still 16:9 on chroma green, keyed | low concrete ledge across the bottom edge (foreground plane) |
| seam-start | still 16:9 | the monument from mid-distance, seam centred |
| seam clip | kling 5s push-in from seam-start | one continuous dolly toward the seam, terracotta light rising inside it |
| close-night | still 16:9 | same monument at night, seam glowing |

Planned spend at published rates: 6 stills × 28 + 1–2 clips × 160 ≈ 330–490 credits.

## As built (2026-10-04)

- **Assets:** generated by Mahmud in ChatGPT from PROMPTS.md (asset/1–8), cut, cropped and encoded to WebP in `public/home/` (≈1 MB total). No kie.ai spend.
- **Camera move without video:** the peak's push is two registered stills (seam-wide → seam-close) scaled around the seam point from scroll. Sharper and far lighter than an encoded scrub clip, and no video generator was needed. design.md's "no video" rule stays true.
- **Score:**

| Chapter | Device | Why |
|---|---|---|
| Hero | parallax planes + pointer depth | depth with a shared contact point, headline between plate and V |
| Statement | read-along words (existing) | authored quiet before the peak |
| The seam | pin + scroll-driven camera push + line draw | the peak, largest span (340svh) |
| Capabilities | reveal (existing) | the three lines land as three panels |
| Work | parallax tiles on Titanium (existing) | proof |
| Approach | pin + Ember progress (existing) | trust |
| Standards · Tech · Company | reveal (existing), short | confidence, compressed |
| Close | settle-in scale, hold | resolve |

- **Feel check (cold, from contact sheets):** hero: calm, curious · statement: quiet · seam: awe (the push, then the line switching on) · capabilities: clear · work/approach: steady · close: resolved, holds. Matches the intended curve. Changes made after the check: the close headline and the dark-theme hero were reading in the wrong colour (fixed), the peak scrim had a hard edge (softened), the three labels collided and hid under the scrim on 375px phones (respaced, raised).
- **Verified:** production build, lint, 0 console errors, no horizontal overflow; screenshots at 1440×900 (TR light, EN dark), 390×844 (TR, EN), 375×667 (TR, EN), reduced motion (desktop + phone).
- **Not verified:** a real phone (iOS Safari scroll/pinning), Lenis smoothing feel by hand, 60fps under CPU throttle.
