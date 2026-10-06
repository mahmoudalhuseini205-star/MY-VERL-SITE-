# Copy review: VERL Systems site

This file covers every word on the site; design and code are unchanged apart from two details listed at the end.
Every claim on the site still comes from `about.md`. Every Turkish line is a draft: **[TR — Mahmud to check]**.

The rules each line was checked against: headlines ≤ 8 words, body sentences ≤ 20 words, paragraphs ≤ 3 sentences. No hype, no exclamation marks, no rhetorical questions. No "not X but Y", no triple adjectives, no banned words, no dashes inside sentences. A script checked all 280+ strings per language for these.

The Mono section labels (`01 — CAPABILITIES`) keep their dash because design.md §4 defines that format. They are labels, not sentences.

---

## Key lines: options and picks

### Hero headline
| | Option | |
|---|---|---|
| A | We build the systems your business runs on. | **Pick** |
| B | Websites, automation and AI that keep working. | |
| C | Digital systems, built to run your business. | |

**Why A:** this is the approved line in about.md §9. "Runs on" says what the business depends on, and no competitor's site can claim that word for word.
TR: *İşinizin üzerinde çalıştığı sistemleri kuruyoruz.* (about.md, unchanged)

### Hero subline
| | Option | |
|---|---|---|
| A | Websites, automation and AI from one accountable studio. We design them, build them and keep them running. | **Pick** |
| B | Websites, automation and AI, designed, engineered and supported by one accountable studio. | (before) |
| C | One studio designs, builds and supports the websites, automation and AI behind your business. | |

**Why A:** it gives the outcome (they keep running) and the accountable studio, without the old line's stack of three past participles.
TR: *Web siteleri, otomasyon ve yapay zekâ, tek bir sorumlu stüdyodan. Tasarlıyor, kuruyor ve çalışır durumda tutuyoruz.*

### Statement (Home 01)
| | Option | |
|---|---|---|
| A | Most of what your team does by hand every day can run as a system. | **Pick** |
| B | Every task a person repeats by hand is a system waiting to be built. | |
| C | Your business should keep working when no one is watching. | |

**Why A:** the old line was a "should not X, should Y" contrast. A names the client's real situation (manual daily work), and "most" keeps it honest.
TR: *Ekibinizin her gün elle yaptığı işlerin çoğu kendi kendine çalışan bir sisteme dönüşebilir.*
Note: at 15 words it is longer than a headline. It is the one manifesto sentence design.md asks for, so it was held to the 20-word body limit instead.

### Capabilities headline (Home 02)
| | Option | |
|---|---|---|
| A | Web, automation and AI in one system. | **Pick** |
| B | Three capabilities, built to work as one. | |
| C | Three capabilities. One connected system. | (before) |

**Why A:** it names the three capabilities instead of counting them.
TR: *Web, otomasyon ve yapay zekâ tek sistemde.*

### Capability titles
Kept: **Web platforms · Automation and integrations · AI systems** (TR: *Web platformları · Otomasyon ve entegrasyonlar · Yapay zekâ sistemleri*).
Options considered: "Websites / Automations / AI assistants" (too narrow, it reduces VERL to single services) and "Platforms / Integrations / Intelligence" (vague).
**Why keep:** these are the names in about.md §3. They are also the page URLs and appear in the /start choices, so changing them would make the wording inconsistent across the site.

### Work headline (Home 03)
| | Option | |
|---|---|---|
| A | Projects and demo systems. | **Pick** |
| B | Selected work. | (before) |
| C | What we've built. | |

**Why A:** it tells the truth up front, that some of the work is demos.
TR: *Projeler ve demo sistemler.*

### Approach headline (Home 04)
| | Option | |
|---|---|---|
| A | Four phases, each ending with a deliverable. | **Pick** |
| B | Designed first. Then built. | (before; kept on /approach) |
| C | We draw the system before we build it. | (used as the /approach principle) |

**Why A:** a specific promise (something in your hands after every phase) that the section then proves line by line.
TR: *Her biri teslimatla biten dört aşama.*

### Standards headline (Home 05)
| | Option | |
|---|---|---|
| A | What we commit to. | **Pick** |
| B | What you can count on. | (before) |
| C | One promise, kept on every project. | |

**Why A:** short, and it still works as more standards are confirmed. C would break as soon as a second one is added.
TR: kept *Size verdiğimiz söz.* (still singular while only one standard is live)

### Final CTA
| | Option | |
|---|---|---|
| A | Tell us what you want to build. | **Pick** (unchanged) |
| B | Start with five short questions. | |
| C | Describe your project in two minutes. | (the time can't be backed up) |

Body: "Five short questions. Your answers open in WhatsApp as a ready message, and we reply there."

### Primary CTA
**Start a project / Proje başlatın** is unchanged. CLAUDE.md §6 fixes this wording.

### /company headline
| | Option | |
|---|---|---|
| A | A founder-led digital systems studio. | **Pick** |
| B | A digital systems company. | (before) |
| C | Systems built and run by one studio. | |

**Why A:** it uses about.md §2's own description ("Founder-led digital systems studio"), which is more specific than "company".
TR: *Kurucusunun yönettiği bir sistem stüdyosu.* "Dijital" was dropped so it fits on three lines at 1440px.

### /company positioning headline
| | Option | |
|---|---|---|
| A | Three capabilities, offered as one. | **Pick** |
| B | Not one service. Connected systems. | (before: a not-X-but-Y contrast) |
| C | Every part connects to the rest. | |

TR: *Üç yetkinlik, tek bir teklif.*

### Principles (/company)
| Before | After | Why |
|---|---|---|
| Systems, not single pieces. | Connected from the start. | Removes the contrast |
| Proof over promises. | Proof comes from real clients. | It now says where the proof comes from |
| Built to run. | Built to run. | Kept, it is the tagline |
| Craft is visible. | You can judge our craft here. | Points to the site itself as the evidence |

### UX copy (ux-copy pass)
| Element | Before | After | Why |
|---|---|---|---|
| Panel link | Learn more | See details | Says what happens next |
| Work link | All work | See all work | Starts with a verb |
| /start link helper | If you have one, add the address. | Add it if you have one. | Shorter, action first |
| /start last question | Finally, your name? | What's your name? | A real question; "Finally" adds nothing |
| Theme toggle label | Light / dark theme | Switch light or dark theme | Screen readers announce an action |
| Case study next link | Next case study | Next project | Shorter; demos aren't case studies |
| Page titles | X — VERL Systems | X \| VERL Systems | No dashes |

There is no error or empty state to write yet: /start disables "Next" until a step is answered, and the site has no other forms.

---

## Lines I'm least sure about

1. **"The working system and its documentation"** (Build phase deliverable). about.md §5 lists documentation as a deliverable, but the "Documented" standard in §6 is still waiting for your confirmation. If you don't hand over documentation on every project, change it back to "The working system".
2. **"He runs every project personally…"** uses "he", taken from how CLAUDE.md refers to you. Tell me if you prefer otherwise.
3. **"Most of what your team does by hand every day can run as a system."** It is a confident claim. "Most" keeps it honest, but you may want a softer "much of".
4. **Turkish /company headline** *Kurucusunun yönettiği bir sistem stüdyosu.* It reads correctly, but a native ear may prefer *Kurucu liderliğinde bir sistem stüdyosu*.
5. **Turkish statement** *…kendi kendine çalışan bir sisteme dönüşebilir.* Please check that "kendi kendine çalışan" sounds natural to a business owner, not machine-like.
6. **"Size teslim edilen"** (label above each deliverable) replaces "Teslim edilen". Check that it reads naturally as a small label.

---

## Not part of this pass

- `/c/emlak` campaign copy is unchanged. It is sector-specific outreach copy with its own rules.
- Image placeholder labels ("Salon — Cover") are internal labels that disappear once real images are added.

## Code touched (copy only)

- The case-study and capability page title templates use "|" instead of "—".
- `LineReveal`: on phones, multi-line headlines below the hero now flow as normal text and fade in, instead of forcing a line break that left single orphaned words ("team", "day", "çoğu"). On desktop the line-by-line reveal is unchanged. The hero headline already behaved this way (design.md §7).

Build passes, lint is clean, zero console errors. Headlines were checked at 375px and 1440px on Home, /capabilities, /company, /approach, /start and /work in both languages.

## Full table: English

Only lines that changed are marked **changed**; unchanged lines are listed so this doubles as the full copy inventory.


### Shared (header, footer, approach phases, standards, case-study labels)

| Key | Before | After | |
|---|---|---|---|
| `meta.title` | VERL Systems — Systems. Built to run. | VERL Systems \| Systems. Built to run. | **changed** |
| `meta.description` | VERL Systems designs and builds the digital systems businesses run on: web platforms, automation and AI. | We design and build the websites, automations and AI systems a business runs on, then keep them running. | **changed** |
| `skipToContent` | Skip to content | Skip to content |  |
| `cta` | Start a project | Start a project |  |
| `nav.label` | Main menu | Main menu |  |
| `nav.work` | Work | Work |  |
| `nav.approach` | Approach | Approach |  |
| `nav.company` | Company | Company |  |
| `nav.open` | Open menu | Open menu |  |
| `nav.close` | Close menu | Close menu |  |
| `nav.menu` | Menu | Menu |  |
| `themeToggle` | Light / dark theme | Switch light or dark theme | **changed** |
| `languageSwitch` | Language | Language |  |
| `footer.tagline` | Systems. Built to run. | Systems. Built to run. |  |
| `footer.location` | İskenderun, Hatay, Türkiye | İskenderun, Hatay, Türkiye |  |
| `footer.phone` | Phone | Phone |  |
| `approach.receive` | You receive | You receive |  |
| `approach.phases[0].title` | Discover | Discover |  |
| `approach.phases[0].body` | We study the business, its tools, and where time and clients are lost. | We study how your business works today, and where time and clients slip away. | **changed** |
| `approach.phases[0].deliverable` | A short discovery summary | A short discovery summary |  |
| `approach.phases[1].title` | Blueprint | Blueprint |  |
| `approach.phases[1].body` | We design the system before building it. | We draw the whole system and agree on the scope before anything is built. | **changed** |
| `approach.phases[1].deliverable` | A system blueprint: flow diagram, scope and timeline | A system blueprint: flow diagram, scope and timeline |  |
| `approach.phases[2].title` | Build | Build |  |
| `approach.phases[2].body` | We build, test with real scenarios, and launch. | We build in stages, test with real scenarios, then launch. | **changed** |
| `approach.phases[2].deliverable` | The working system | The working system and its documentation | **changed** |
| `approach.phases[3].title` | Run | Run |  |
| `approach.phases[3].body` | We monitor, support and improve the system after launch. | After launch we watch the system, fix what breaks and improve what gets used. | **changed** |
| `approach.phases[3].deliverable` | Post-launch support | A post-launch support period | **changed** |
| `standards[0].title` | One accountable person. | One accountable person. |  |
| `standards[0].body` | The founder leads every project from the first call to launch. | The founder leads every project from the first call to launch. You always talk to the person building your system. | **changed** |
| `caseStudy.problem` | The problem | The problem |  |
| `caseStudy.system` | The system | The system |  |
| `caseStudy.build` | How we built it | How we built it |  |
| `caseStudy.screens` | Screens | Screens |  |
| `caseStudy.does` | What the system does | What the system does |  |
| `caseStudy.results` | Results | Results |  |
| `caseStudy.status` | Status | Status |  |
| `caseStudy.next` | Next case study | Next project | **changed** |
| `caseStudy.all` | All work | All work |  |
| `caseStudy.ctaTitle` | Let’s talk about what could be built for your business. | Let’s map out what your business needs. | **changed** |
| `more` | Learn more | See details | **changed** |

### Home

| Key | Before | After | |
|---|---|---|---|
| `hero.eyebrow` | VERL Systems · Web · Automation · AI | VERL Systems · Web · Automation · AI |  |
| `hero.lines` | We build the / systems your / business runs on. | We build the / systems your / business runs on. |  |
| `hero.sub` | Websites, automation and AI — designed, engineered and supported by one accountable studio. | Websites, automation and AI from one accountable studio. We design them, build them and keep them running. | **changed** |
| `statement.index` | 01 — Principle | 01 — Principle |  |
| `statement.lines` | A business should not run / on manual work and memory. / It should run on systems / built to run every day. | Most of what your team / does by hand every day / can run as a system. | **changed** |
| `work.index` | 03 — Work | 03 — Work |  |
| `work.title` | Selected work. | Projects and demo systems. | **changed** |
| `work.intro` | Real client projects and demo systems. Demo systems are clearly labelled; result figures only come from real clients. | Client projects and demo systems. Every demo is labelled, and results come only from real clients. | **changed** |
| `work.all` | All work | See all work | **changed** |
| `approach.index` | 04 — Approach | 04 — Approach |  |
| `approach.title` | Designed first. Then built. | Four phases, each ending with a deliverable. | **changed** |
| `approach.link` | How we work, in detail | See how each phase works | **changed** |
| `standards.index` | 05 — Standards | 05 — Standards |  |
| `standards.title` | What you can count on. | What we commit to. | **changed** |
| `tech.index` | 06 — Technologies | 06 — Technologies |  |
| `tech.title` | Technologies we use. | Technologies we use. |  |
| `company.index` | 07 — Company | 07 — Company |  |
| `company.lines[0]` | VERL Systems is led by its founder, Mahmud. | VERL Systems is led by its founder, Mahmud. |  |
| `company.lines[1]` | Every project is run personally from the first conversation to launch — you work directly with the person who designs and builds your system. | He runs every project personally, from the first conversation to launch. You work directly with the person who designs and builds your system. | **changed** |
| `company.link` | About the company | More about the company | **changed** |

### Inner pages + /start + final CTA

| Key | Before | After | |
|---|---|---|---|
| `finalCta.index` | Start | Start |  |
| `finalCta.lines` | Tell us what / you want to build. | Tell us what / you want to build. |  |
| `finalCta.body` | Five short questions. At the end your brief opens in WhatsApp, ready to send, and we reply there. | Five short questions. Your answers open in WhatsApp as a ready message, and we reply there. | **changed** |
| `work.meta.title` | Work — VERL Systems | Work \| VERL Systems | **changed** |
| `work.meta.description` | Real client projects and demo systems built by VERL Systems. | Real client projects and demo systems built by VERL Systems. |  |
| `work.eyebrow` | Work | Work |  |
| `work.lines` | Systems / we’ve built. | Systems / we’ve built. |  |
| `work.body` | Real client projects and demo systems. Demo systems are clearly labelled and describe only what the system does; result figures only come from real clients. | Client projects and demo systems. A demo shows what a system does. Results come only from real clients. | **changed** |
| `work.list` | Projects | Projects |  |
| `approach.meta.title` | Approach — VERL Systems | Approach \| VERL Systems | **changed** |
| `approach.meta.description` | Discover, Blueprint, Build and Run: what happens in each phase and what you receive. | Discover, Blueprint, Build and Run: what happens in each phase and what you receive. |  |
| `approach.eyebrow` | Approach | Approach |  |
| `approach.lines` | Designed first. / Then built. | Designed first. / Then built. |  |
| `approach.body` | Every project goes through the same four phases. Each one ends with something concrete in your hands, and we move to the next step with it. | Every project moves through the same four phases. Each ends with a deliverable you keep, and the next phase builds on it. | **changed** |
| `approach.what` | In this phase | In this phase |  |
| `approach.phases[0][0]` | A first conversation about your business and its goals | A first conversation about your business and its goals |  |
| `approach.phases[0][1]` | A look at the tools you use and how work moves between them | A look at the tools you use and how work moves between them |  |
| `approach.phases[0][2]` | Finding where time is spent by hand and where clients are lost | Finding where time is spent by hand and where clients are lost |  |
| `approach.phases[1][0]` | The system drawn as a flow diagram, step by step | The system drawn as a flow diagram, step by step |  |
| `approach.phases[1][1]` | A written scope: what is built, and what is not | A written scope: what is built, and what is not |  |
| `approach.phases[1][2]` | A timeline with clear milestones | A timeline with clear milestones |  |
| `approach.phases[2][0]` | Built in short stages you can see and try | Built in short stages you can see and try |  |
| `approach.phases[2][1]` | Tested with real scenarios before launch | Tested with real scenarios before launch |  |
| `approach.phases[2][2]` | Launched with care, with nothing left half-connected | Launched only when every connection works | **changed** |
| `approach.phases[3][0]` | Monitoring after launch | Monitoring after launch |  |
| `approach.phases[3][1]` | Support when something needs attention | Support when something needs attention |  |
| `approach.phases[3][2]` | Improvements based on how the system is used | Improvements based on how the system is used |  |
| `approach.principle.index` | Principle | Principle |  |
| `approach.principle.title` | We draw it before we build it. | We draw it before we build it. |  |
| `approach.principle.body` | Most of a system’s mistakes can be found on paper, before anything is built. That is what the Blueprint phase is for: we see the system together and agree on the scope together. | Most mistakes in a system can be caught on paper. In the Blueprint phase we walk through the flow with you and agree on the scope. | **changed** |
| `company.meta.title` | Company — VERL Systems | Company \| VERL Systems | **changed** |
| `company.meta.description` | VERL Systems is a founder-led digital systems company. | VERL Systems is a founder-led digital systems studio in İskenderun, Türkiye. | **changed** |
| `company.eyebrow` | Company | Company |  |
| `company.lines[0]` | A digital | A founder-led | **changed** |
| `company.lines[1]` | systems company. | digital systems studio. | **changed** |
| `company.body` | VERL Systems designs and builds the digital systems businesses run on: web platforms, automation and AI. | We design and build the web platforms, automations and AI systems businesses run on. Based in İskenderun, working on-site and remotely. | **changed** |
| `company.positioning.index` | 01 — What we do | 01 — What we do |  |
| `company.positioning.title` | Not one service. Connected systems. | Three capabilities, offered as one. | **changed** |
| `company.positioning.body` | A website, an automation or an assistant is most useful when it is connected to everything around it. That is why we offer the three capabilities as one. We are not limited to one sector; we work with businesses that want to grow without adding more manual work. | A website, an automation or an assistant does most when it connects to everything around it. So we offer all three together. We work with businesses in any sector that want to grow without adding manual work. | **changed** |
| `company.founder.index` | 02 — Founder | 02 — Founder |  |
| `company.founder.lines[0]` | VERL Systems is led by its founder, Mahmud. | VERL Systems is led by its founder, Mahmud. |  |
| `company.founder.lines[1]` | Every project is run personally from the first conversation to launch — you work directly with the person who designs and builds your system. | He runs every project personally, from the first conversation to launch. You work directly with the person who designs and builds your system. | **changed** |
| `company.founder.name` | Mahmud | Mahmud |  |
| `company.founder.role` | Founder | Founder |  |
| `company.principles.index` | 03 — Principles | 03 — Principles |  |
| `company.principles.items[0].title` | Systems, not single pieces. | Connected from the start. | **changed** |
| `company.principles.items[0].body` | A website, an automation or an assistant is most useful when it is connected to everything around it. | We plan each piece with the tools it has to work with, so nothing gets copied by hand. | **changed** |
| `company.principles.items[1].title` | Proof over promises. | Proof comes from real clients. | **changed** |
| `company.principles.items[1].body` | Numbers only come from real clients. Demo systems are always labelled as demos. | We publish numbers only from real clients. Every demo system is labelled as a demo. | **changed** |
| `company.principles.items[2].title` | Built to run. | Built to run. |  |
| `company.principles.items[2].body` | We design for the day after launch: a clear structure, a monitored system, easy to change. | We design for the day after launch, with a clear structure, monitoring, and changes that need no rebuild. | **changed** |
| `company.principles.items[3].title` | Craft is visible. | You can judge our craft here. | **changed** |
| `company.principles.items[3].body` | The way our own site is built is the first proof of how we build yours. | We designed and built this site ourselves. It is the first example of how we would build yours. | **changed** |
| `company.standards.index` | 04 — Standards | 04 — Standards |  |
| `company.standards.title` | What you can count on. | What we commit to. | **changed** |
| `company.facts.index` | 05 — Facts | 05 — Facts |  |
| `company.facts.items[0].label` | Base | Base |  |
| `company.facts.items[0].value` | İskenderun, Hatay, Türkiye | İskenderun, Hatay, Türkiye |  |
| `company.facts.items[1].label` | Works | Working | **changed** |
| `company.facts.items[1].value` | On-site and remotely | On-site and remote | **changed** |
| `company.facts.items[2].label` | Languages | Languages |  |
| `company.facts.items[2].value` | Turkish, English, Arabic | Turkish, English, Arabic |  |
| `company.facts.phone` | Phone | Phone |  |
| `start.meta.title` | Start a project — VERL Systems | Start a project \| VERL Systems | **changed** |
| `start.meta.description` | Describe your project in five short questions. Your brief opens in WhatsApp, ready to send. | Describe your project in five short questions. Your brief opens in WhatsApp, ready to send. |  |
| `start.eyebrow` | Start a project | Start a project |  |
| `start.title` | Describe your project in five short questions. | Describe your project in five short questions. |  |
| `start.body` | At the end your brief opens in WhatsApp, ready to send. Nothing is stored on this site. | Your answers open in WhatsApp as a ready message. Nothing is saved on this site. | **changed** |
| `start.step` | Step | Step |  |
| `start.of` | / | / |  |
| `start.back` | Back | Back |  |
| `start.next` | Next | Next |  |
| `start.edit` | Edit | Edit |  |
| `start.optional` | optional | optional |  |
| `start.needs.question` | What do you need? | What do you need? |  |
| `start.needs.helper` | Choose one or more. | Choose one or more. |  |
| `start.needs.options.web` | Web platform | Web platform |  |
| `start.needs.options.automation` | Automation | Automation |  |
| `start.needs.options.ai` | AI system | AI system |  |
| `start.needs.options.unsure` | Not sure yet | Not sure yet |  |
| `start.business.question` | Tell us about your business. | Tell us about your business. |  |
| `start.business.name` | Business name | Business name |  |
| `start.business.link` | Website or Instagram | Website or Instagram |  |
| `start.business.linkHelper` | If you have one, add the address. | Add it if you have one. | **changed** |
| `start.goal.question` | What do you want to achieve? | What do you want to achieve? |  |
| `start.goal.helper` | A few sentences are enough. | A few sentences are enough. |  |
| `start.timeline.question` | When would you like to start? | When would you like to start? |  |
| `start.timeline.options.asap` | As soon as possible | As soon as possible |  |
| `start.timeline.options.months` | Within 1–3 months | Within 1–3 months |  |
| `start.timeline.options.later` | Later this year | Later this year |  |
| `start.timeline.options.flexible` | Flexible | Flexible |  |
| `start.person.question` | Finally, your name? | What’s your name? | **changed** |
| `start.person.name` | Your name | Your name |  |
| `start.summary.title` | Your brief | Your brief |  |
| `start.summary.helper` | WhatsApp opens with this message ready. You can review it before sending. | WhatsApp opens with this message ready. You can review it before sending. |  |
| `start.summary.send` | Open in WhatsApp | Open in WhatsApp |  |
| `start.message.greeting` | Hello VERL Systems, I’d like to start a project. | Hello VERL Systems, I’d like to start a project. |  |
| `start.message.needs` | Need | Need |  |
| `start.message.business` | Business | Business |  |
| `start.message.link` | Website / Instagram | Website / Instagram |  |
| `start.message.goal` | Goal | Goal |  |
| `start.message.timeline` | Timeline | Timeline |  |
| `start.message.name` | Name | Name |  |

### Capability: Web platforms

| Key | Before | After | |
|---|---|---|---|
| `title` | Web platforms | Web platforms |  |
| `outcome` | Websites and web applications that are fast, precise and built to turn visitors into clients. | Websites and web apps built to turn visitors into clients. | **changed** |
| `intro` | Company websites, product and campaign pages, and web applications. Each one is designed as part of a larger system — connected to the tools behind it, measured, and maintained after launch. | Company websites, campaign pages and web applications. Each one connects to the tools behind it and is maintained after launch. | **changed** |
| `tags[0]` | Company websites | Company websites |  |
| `tags[1]` | Campaign pages | Campaign pages |  |
| `tags[2]` | Web applications | Web applications |  |
| `tags[3]` | Multilingual | Multilingual |  |
| `mini[0]` | Visitor | Visitor |  |
| `mini[1]` | Page | Page |  |
| `mini[2]` | Inquiry | Inquiry |  |
| `includes[0].title` | Company websites | Company websites |  |
| `includes[0].body` | The main home of the business online: a clear structure, fast on every device, in every language you work in. | The main home of the business online: a clear structure, fast on every device, in every language you work in. |  |
| `includes[1].title` | Product and campaign pages | Product and campaign pages |  |
| `includes[1].body` | Focused pages for one offer or one audience, launched quickly and measured. | Focused pages for one offer or one audience, launched quickly and measured. |  |
| `includes[2].title` | Web applications | Web applications |  |
| `includes[2].body` | Booking, client portals, internal dashboards — software in the browser, built around how the business actually works. | Booking, client portals and internal dashboards. Software in the browser, shaped around how your business works. | **changed** |
| `includes[3].title` | Connected from the start | Connected from the start |  |
| `includes[3].body` | Forms, bookings and inquiries flow straight into the tools you already use. Nothing is copied by hand. | Forms, bookings and inquiries flow straight into the tools you already use. Nothing is copied by hand. |  |
| `flow[0]` | Structure and content | Structure and content |  |
| `flow[1]` | Design system | Design system |  |
| `flow[2]` | Build | Build |  |
| `flow[3]` | Connection to your tools | Connection to your tools |  |
| `flow[4]` | Launch and measurement | Launch and measurement |  |
| `notes[0]` | Built with Next.js and deployed on Vercel, so pages load fast on mobile networks. | Built with Next.js and deployed on Vercel, so pages load fast on mobile networks. |  |
| `notes[1]` | Every page is built to be readable and accessible on every screen size and in every language. | Every page is built to be readable and accessible on every screen size and in every language. |  |
| `notes[2]` | Content is structured so new pages can be added without a redesign. | Content is structured so new pages can be added without a redesign. |  |

### Capability: Automation

| Key | Before | After | |
|---|---|---|---|
| `title` | Automation and integrations | Automation and integrations |  |
| `outcome` | We connect the tools a business already uses and remove the manual work between them. | We connect the tools your business already uses and remove the manual work between them. | **changed** |
| `intro` | WhatsApp, CRM, calendars, spreadsheets, payment and booking tools. We connect them and hand the steps that repeat every day to the system itself. | WhatsApp, CRM, calendars, spreadsheets, payment and booking tools. We connect them so the steps your team repeats every day run on their own. | **changed** |
| `tags[0]` | WhatsApp | WhatsApp |  |
| `tags[1]` | CRM | CRM |  |
| `tags[2]` | Calendars and booking | Calendars and booking |  |
| `tags[3]` | Reports | Reports |  |
| `mini[0]` | Trigger | Trigger |  |
| `mini[1]` | Workflow | Workflow |  |
| `mini[2]` | Tools | Tools |  |
| `includes[0].title` | Tool integrations | Tool integrations |  |
| `includes[0].body` | WhatsApp, CRM, calendar, spreadsheet, payment and booking tools are connected, so data moves to the right place on its own. | WhatsApp, CRM, calendar, spreadsheet, payment and booking tools are connected, so data moves to the right place on its own. |  |
| `includes[1].title` | Workflow automation | Workflow automation |  |
| `includes[1].body` | Confirmations, reminders, follow-ups and hand-offs run automatically, the same way every time. | Confirmations, reminders, follow-ups and hand-offs run automatically, the same way every time. |  |
| `includes[2].title` | Notifications and routing | Notifications and routing |  |
| `includes[2].body` | The right person hears about the right thing at the right moment. | The right person hears about the right thing at the right moment. |  |
| `includes[3].title` | Reporting | Reporting |  |
| `includes[3].body` | Regular summaries are pulled from the tools you use, without anyone compiling them by hand. | Regular summaries are pulled from the tools you use, without anyone compiling them by hand. |  |
| `flow[0]` | Trigger | Trigger |  |
| `flow[1]` | Rules | Rules |  |
| `flow[2]` | Connected tools | Connected tools |  |
| `flow[3]` | Notification | Notification |  |
| `flow[4]` | Log and report | Log and report |  |
| `notes[0]` | Workflows are built in n8n, with every step visible and editable. | Workflows are built in n8n, with every step visible and editable. |  |
| `notes[1]` | Integrations use each tool’s official API, including the WhatsApp Business API. | Integrations use each tool’s official API, including the WhatsApp Business API. |  |
| `notes[2]` | Every workflow is tested against real scenarios before it goes live. | Every workflow is tested against real scenarios before it goes live. |  |

### Capability: AI systems

| Key | Before | After | |
|---|---|---|---|
| `title` | AI systems | AI systems |  |
| `outcome` | Assistants and agents that answer, qualify, book and report — trained on the business’s own information. | Assistants that answer, qualify, book and report, using your business’s own information. | **changed** |
| `intro` | AI assistants and agents work from the business’s own information and connect to its real tools. What they do — and where they stop and hand over to a person — is clearly defined. | AI assistants and agents work from your own information and connect to your real tools. We define what they handle and when they hand over to a person. | **changed** |
| `tags[0]` | Assistants | Assistants |  |
| `tags[1]` | Agents | Agents |  |
| `tags[2]` | Knowledge base | Knowledge base |  |
| `tags[3]` | Connected to your tools | Connected to your tools |  |
| `mini[0]` | Question | Question |  |
| `mini[1]` | AI | AI |  |
| `mini[2]` | Action | Action |  |
| `includes[0].title` | Assistants | Assistants |  |
| `includes[0].body` | Answer client questions from your own information, in your tone and in the client’s language. | Answer client questions from your own information, in your tone and in the client’s language. |  |
| `includes[1].title` | Qualification and booking | Qualification and booking |  |
| `includes[1].body` | Ask the right questions, sort requests and book into the real calendar. | Ask the right questions, sort requests and book into the real calendar. |  |
| `includes[2].title` | Agents for the team | Agents for the team |  |
| `includes[2].body` | Prepare summaries, drafts and reports from the business’s own data. | Prepare summaries, drafts and reports from the business’s own data. |  |
| `includes[3].title` | Hand-off to a person | Hand-off to a person |  |
| `includes[3].body` | Clear rules decide when the system steps back and a person takes over. | Clear rules decide when the system steps back and a person takes over. |  |
| `flow[0]` | Incoming question | Incoming question |  |
| `flow[1]` | Business knowledge | Business knowledge |  |
| `flow[2]` | Model: OpenAI / Claude | Model: OpenAI / Claude |  |
| `flow[3]` | Action in your tools | Action in your tools |  |
| `flow[4]` | Hand-off to a person when needed | Hand-off to a person when needed |  |
| `notes[0]` | Built on OpenAI and Claude models, chosen per task. | Built on OpenAI and Claude models, chosen per task. |  |
| `notes[1]` | Answers are grounded in the business’s own documents and data. | Answers are grounded in the business’s own documents and data. |  |
| `notes[2]` | Every assistant has defined limits and a path to hand over to a person. | Every assistant has defined limits and a path to hand over to a person. |  |

### Case study: Salon

| Key | Before | After | |
|---|---|---|---|
| `name` | Beauty salon website | Beauty salon website |  |
| `summary` | A website for a beauty salon. The first client project VERL Systems delivered. | A website for a beauty salon. The first client project VERL Systems delivered. |  |
| `sector` | Beauty | Beauty |  |
| `type` | Website | Website |  |
| `cover.alt` | Beauty salon website | Beauty salon website |  |
| `screens[0].alt` | Website on desktop | Website on desktop |  |
| `screens[1].alt` | Website on a phone | Website on a phone |  |
| `screens[2].alt` | Website on a phone | Website on a phone |  |
| `note` | The full case study (the brief, the build and the screens) is being prepared. | The full case study (the brief, the build and the screens) is being prepared. |  |

### Case study: Demo system

| Key | Before | After | |
|---|---|---|---|
| `name` | Inquiry intake and response system | Inquiry intake and response system |  |
| `summary` | A system that qualifies inquiries from a web page, delivers them to WhatsApp, replies instantly and routes each one to the right person. | Qualifies inquiries from a web page, replies on WhatsApp right away and routes each one to the right person. | **changed** |
| `sector` | Service businesses | Service businesses |  |
| `type` | Web + Automation | Web + Automation |  |
| `cover.alt` | Inquiry intake system screens | Inquiry intake system screens |  |
| `problem` | Inquiries arrive through more than one channel. Someone has to read each one, ask the same questions and pass it on — usually by hand, often late. | Inquiries arrive through more than one channel. Someone has to read each one, ask the same questions and pass it on by hand, often late. | **changed** |
| `flow[0]` | A visitor lands on the inquiry page | A visitor lands on the inquiry page |  |
| `flow[1]` | Need, timing and details are asked | Need, timing and details are asked |  |
| `flow[2]` | A ready inquiry arrives on WhatsApp | A ready inquiry arrives on WhatsApp |  |
| `flow[3]` | An instant reply goes out | An instant reply goes out |  |
| `flow[4]` | The inquiry is routed to the right person | The inquiry is routed to the right person |  |
| `build.notes[0]` | The inquiry page is built with Next.js; each submission starts an n8n workflow. | The inquiry page is built with Next.js; each submission starts an n8n workflow. |  |
| `build.notes[1]` | Messages are sent and received through the WhatsApp Business API. | Messages are sent and received through the WhatsApp Business API. |  |
| `build.notes[2]` | Routing rules live in one place and can be changed without writing code. | Routing rules live in one place and can be changed without writing code. |  |
| `screens[0].alt` | Inquiry page on desktop | Inquiry page on desktop |  |
| `screens[1].alt` | Inquiry page on a phone | Inquiry page on a phone |  |
| `screens[2].alt` | Instant reply and questions on WhatsApp | Instant reply and questions on WhatsApp |  |
| `does[0]` | Asks each visitor about their need, timing and details. | Asks each visitor about their need, timing and details. |  |
| `does[1]` | Sends the ready inquiry straight to the business’s WhatsApp. | Sends the ready inquiry straight to the business’s WhatsApp. |  |
| `does[2]` | Replies instantly, including outside working hours. | Replies instantly, including outside working hours. |  |
| `does[3]` | Routes the inquiry to the right person. | Routes the inquiry to the right person. |  |

## Full table: Turkish [TR — Mahmud to check]

Only lines that changed are marked **changed**; unchanged lines are listed so this doubles as the full copy inventory.


### Shared (header, footer, approach phases, standards, case-study labels)

| Key | Before | After | |
|---|---|---|---|
| `meta.title` | VERL Systems — Çalışmak için kurulan sistemler | VERL Systems \| Çalışmak için kurulan sistemler | **changed** |
| `meta.description` | VERL Systems, işletmelerin üzerinde çalıştığı dijital sistemleri tasarlar ve kurar: web platformları, otomasyon ve yapay zekâ. | İşletmenizin üzerinde çalıştığı web sitelerini, otomasyonları ve yapay zekâ sistemlerini tasarlıyor, kuruyor ve çalışır durumda tutuyoruz. | **changed** |
| `skipToContent` | İçeriğe geç | İçeriğe geç |  |
| `cta` | Proje başlatın | Proje başlatın |  |
| `nav.label` | Ana menü | Ana menü |  |
| `nav.work` | İşler | İşler |  |
| `nav.approach` | Yaklaşım | Yaklaşım |  |
| `nav.company` | Şirket | Şirket |  |
| `nav.open` | Menüyü aç | Menüyü aç |  |
| `nav.close` | Menüyü kapat | Menüyü kapat |  |
| `nav.menu` | Menü | Menü |  |
| `themeToggle` | Açık / koyu tema | Açık veya koyu temaya geç | **changed** |
| `languageSwitch` | Dil seçimi | Dil seçimi |  |
| `footer.tagline` | Çalışmak için kurulan sistemler. | Çalışmak için kurulan sistemler. |  |
| `footer.location` | İskenderun, Hatay, Türkiye | İskenderun, Hatay, Türkiye |  |
| `footer.phone` | Telefon | Telefon |  |
| `approach.receive` | Teslim edilen | Size teslim edilen | **changed** |
| `approach.phases[0].title` | Keşif | Keşif |  |
| `approach.phases[0].body` | İşletmeyi, kullandığı araçları ve zamanın ve müşterilerin nerede kaybolduğunu inceliyoruz. | İşinizin bugün nasıl yürüdüğünü, zamanın ve müşterilerin nerede kaybolduğunu inceliyoruz. | **changed** |
| `approach.phases[0].deliverable` | Kısa bir keşif özeti | Kısa bir keşif özeti |  |
| `approach.phases[1].title` | Plan | Plan |  |
| `approach.phases[1].body` | Sistemi kurmadan önce tasarlıyoruz. | Kurulum başlamadan sistemin tamamını çiziyor, kapsamı sizinle netleştiriyoruz. | **changed** |
| `approach.phases[1].deliverable` | Sistem planı: akış şeması, kapsam ve takvim | Sistem planı: akış şeması, kapsam ve takvim |  |
| `approach.phases[2].title` | Kurulum | Kurulum |  |
| `approach.phases[2].body` | Kuruyor, gerçek senaryolarla test ediyor ve yayına alıyoruz. | Aşama aşama kuruyor, gerçek senaryolarla test ediyor ve yayına alıyoruz. | **changed** |
| `approach.phases[2].deliverable` | Çalışan sistem | Çalışan sistem ve dokümantasyonu | **changed** |
| `approach.phases[3].title` | Sürdürme | Sürdürme |  |
| `approach.phases[3].body` | Yayından sonra sistemi izliyor, destekliyor ve geliştiriyoruz. | Yayından sonra sistemi izliyor, sorunları gideriyor ve kullanıldıkça geliştiriyoruz. | **changed** |
| `approach.phases[3].deliverable` | Yayın sonrası destek | Yayın sonrası destek süresi | **changed** |
| `standards[0].title` | Tek sorumlu kişi. | Tek sorumlu kişi. |  |
| `standards[0].body` | Kurucu, her projeyi ilk görüşmeden teslime kadar bizzat yönetir. | Kurucu, her projeyi ilk görüşmeden teslime kadar bizzat yönetir. Her zaman sisteminizi kuran kişiyle konuşursunuz. | **changed** |
| `caseStudy.problem` | Sorun | Sorun |  |
| `caseStudy.system` | Sistem | Sistem |  |
| `caseStudy.build` | Nasıl kurduk | Nasıl kurduk |  |
| `caseStudy.screens` | Ekranlar | Ekranlar |  |
| `caseStudy.does` | Sistem ne yapar | Sistem ne yapar |  |
| `caseStudy.results` | Sonuçlar | Sonuçlar |  |
| `caseStudy.status` | Durum | Durum |  |
| `caseStudy.next` | Sonraki proje | Sonraki proje |  |
| `caseStudy.all` | Tüm işler | Tüm işler |  |
| `caseStudy.ctaTitle` | Sizin işletmeniz için neyin kurulabileceğini konuşalım. | İşletmenizin neye ihtiyacı olduğunu birlikte çıkaralım. | **changed** |
| `more` | Ayrıntılar | Ayrıntıları görün | **changed** |

### Home

| Key | Before | After | |
|---|---|---|---|
| `hero.eyebrow` | VERL Systems · Web · Otomasyon · Yapay zekâ | VERL Systems · Web · Otomasyon · Yapay zekâ |  |
| `hero.lines` | İşinizin üzerinde / çalıştığı sistemleri / kuruyoruz. | İşinizin üzerinde / çalıştığı sistemleri / kuruyoruz. |  |
| `hero.sub` | Web siteleri, otomasyon ve yapay zekâ — tek bir sorumlu stüdyo tarafından tasarlanır, kurulur ve desteklenir. | Web siteleri, otomasyon ve yapay zekâ, tek bir sorumlu stüdyodan. Tasarlıyor, kuruyor ve çalışır durumda tutuyoruz. | **changed** |
| `statement.index` | 01 — İlke | 01 — İlke |  |
| `statement.lines` | Bir işletme, elle yapılan işlerle / ve hafızayla yürümemeli. / Her gün çalışmak için kurulmuş / sistemlerle yürümeli. | Ekibinizin her gün / elle yaptığı işlerin çoğu / kendi kendine çalışan / bir sisteme dönüşebilir. | **changed** |
| `work.index` | 03 — İşler | 03 — İşler |  |
| `work.title` | Seçilmiş işler. | Projeler ve demo sistemler. | **changed** |
| `work.intro` | Gerçek müşteri projeleri ve demo sistemler. Demo sistemler açıkça işaretlenir; sonuç rakamları yalnızca gerçek müşterilerden gelir. | Müşteri projeleri ve demo sistemler. Her demo açıkça işaretlenir; sonuçlar yalnızca gerçek müşterilerden gelir. | **changed** |
| `work.all` | Tüm işler | Tüm işleri görün | **changed** |
| `approach.index` | 04 — Yaklaşım | 04 — Yaklaşım |  |
| `approach.title` | Önce plan, sonra kurulum. | Her biri teslimatla biten dört aşama. | **changed** |
| `approach.link` | Yaklaşımımızın ayrıntıları | Aşamaların ayrıntıları | **changed** |
| `standards.index` | 05 — Standartlar | 05 — Standartlar |  |
| `standards.title` | Size verdiğimiz söz. | Size verdiğimiz söz. |  |
| `tech.index` | 06 — Teknolojiler | 06 — Teknolojiler |  |
| `tech.title` | Kullandığımız teknolojiler. | Kullandığımız teknolojiler. |  |
| `company.index` | 07 — Şirket | 07 — Şirket |  |
| `company.lines[0]` | VERL Systems’i kurucusu Mahmud yönetiyor. | VERL Systems’i kurucusu Mahmud yönetiyor. |  |
| `company.lines[1]` | Her proje ilk görüşmeden teslime kadar bizzat yürütülür; sisteminizi tasarlayan ve kuran kişiyle doğrudan çalışırsınız. | Her projeyi ilk görüşmeden teslime kadar bizzat yürütür. Sisteminizi tasarlayan ve kuran kişiyle doğrudan çalışırsınız. | **changed** |
| `company.link` | Şirketi tanıyın | Şirketi daha yakından tanıyın | **changed** |

### Inner pages + /start + final CTA

| Key | Before | After | |
|---|---|---|---|
| `finalCta.index` | Başlangıç | Başlangıç |  |
| `finalCta.lines` | Ne kurmak istediğinizi / anlatın. | Ne kurmak istediğinizi / anlatın. |  |
| `finalCta.body` | Beş kısa soru. Sonunda özetiniz WhatsApp’ta hazır açılır; yanıtımızı oradan alırsınız. | Beş kısa soru. Cevaplarınız WhatsApp’ta hazır bir mesaj olarak açılır; yanıtımızı oradan alırsınız. | **changed** |
| `work.meta.title` | İşler — VERL Systems | İşler \| VERL Systems | **changed** |
| `work.meta.description` | VERL Systems’in kurduğu gerçek müşteri projeleri ve demo sistemler. | VERL Systems’in kurduğu gerçek müşteri projeleri ve demo sistemler. |  |
| `work.eyebrow` | İşler | İşler |  |
| `work.lines` | Kurduğumuz / sistemler. | Kurduğumuz / sistemler. |  |
| `work.body` | Gerçek müşteri projeleri ve demo sistemler. Demo sistemler açıkça işaretlenir ve yalnızca sistemin ne yaptığını anlatır; sonuç rakamları yalnızca gerçek müşterilerden gelir. | Müşteri projeleri ve demo sistemler. Demolar bir sistemin ne yaptığını gösterir. Sonuçlar yalnızca gerçek müşterilerden gelir. | **changed** |
| `work.list` | Projeler | Projeler |  |
| `approach.meta.title` | Yaklaşım — VERL Systems | Yaklaşım \| VERL Systems | **changed** |
| `approach.meta.description` | Keşif, plan, kurulum ve sürdürme: her aşamada ne olduğu ve size ne teslim edildiği. | Keşif, plan, kurulum ve sürdürme: her aşamada ne olduğu ve size ne teslim edildiği. |  |
| `approach.eyebrow` | Yaklaşım | Yaklaşım |  |
| `approach.lines` | Önce plan, / sonra kurulum. | Önce plan, / sonra kurulum. |  |
| `approach.body` | Her proje aynı dört aşamadan geçer. Her aşamanın sonunda elinizde somut bir şey olur; bir sonraki adıma onunla geçeriz. | Her proje aynı dört aşamadan geçer. Her aşama elinizde kalan bir teslimatla biter; sonraki aşama onun üzerine kurulur. | **changed** |
| `approach.what` | Bu aşamada | Bu aşamada |  |
| `approach.phases[0][0]` | İşletmeniz ve hedefleriniz üzerine ilk görüşme | İşletmeniz ve hedefleriniz üzerine ilk görüşme |  |
| `approach.phases[0][1]` | Kullandığınız araçlara ve işin aralarında nasıl ilerlediğine bakış | Kullandığınız araçlara ve işin aralarında nasıl ilerlediğine bakış |  |
| `approach.phases[0][2]` | Zamanın elle harcandığı ve müşterilerin kaybolduğu noktaların tespiti | Zamanın elle harcandığı ve müşterilerin kaybolduğu noktaların tespiti |  |
| `approach.phases[1][0]` | Sistemin adım adım akış şeması olarak çizilmesi | Sistemin adım adım akış şeması olarak çizilmesi |  |
| `approach.phases[1][1]` | Yazılı kapsam: nelerin kurulacağı, nelerin kurulmayacağı | Yazılı kapsam: nelerin kurulacağı, nelerin kurulmayacağı |  |
| `approach.phases[1][2]` | Net aşamaları olan bir takvim | Net aşamaları olan bir takvim |  |
| `approach.phases[2][0]` | Görebileceğiniz ve deneyebileceğiniz kısa aşamalarla kurulum | Görebileceğiniz ve deneyebileceğiniz kısa aşamalarla kurulum |  |
| `approach.phases[2][1]` | Yayından önce gerçek senaryolarla test | Yayından önce gerçek senaryolarla test |  |
| `approach.phases[2][2]` | Yarım bağlantı bırakmadan, özenli bir yayın | Ancak her bağlantı çalıştığında yayın | **changed** |
| `approach.phases[3][0]` | Yayından sonra sistemin izlenmesi | Yayından sonra sistemin izlenmesi |  |
| `approach.phases[3][1]` | Bir şey dikkat gerektirdiğinde destek | Bir şey dikkat gerektirdiğinde destek |  |
| `approach.phases[3][2]` | Sistemin kullanımına göre iyileştirmeler | Sistemin kullanımına göre iyileştirmeler |  |
| `approach.principle.index` | İlke | İlke |  |
| `approach.principle.title` | Kurmadan önce çiziyoruz. | Kurmadan önce çiziyoruz. |  |
| `approach.principle.body` | Bir sistemin hatalarının çoğu kurulumdan önce, kâğıt üzerinde bulunur. Plan aşaması bu yüzden var: sistemi birlikte görür, kapsamı birlikte netleştiririz. | Bir sistemdeki hataların çoğu kâğıt üzerinde yakalanabilir. Plan aşamasında akışı sizinle gözden geçirir, kapsamda anlaşırız. | **changed** |
| `company.meta.title` | Şirket — VERL Systems | Şirket \| VERL Systems | **changed** |
| `company.meta.description` | VERL Systems, kurucusu tarafından yönetilen bir dijital sistemler şirketidir. | VERL Systems, İskenderun merkezli ve kurucusunun yönettiği bir dijital sistemler stüdyosudur. | **changed** |
| `company.eyebrow` | Şirket | Şirket |  |
| `company.lines[0]` | Bir dijital | Kurucusunun | **changed** |
| `company.lines[1]` | sistemler şirketi. | yönettiği bir | **changed** |
| `company.body` | VERL Systems, işletmelerin üzerinde çalıştığı dijital sistemleri tasarlar ve kurar: web platformları, otomasyon ve yapay zekâ. | İşletmelerin üzerinde çalıştığı web platformlarını, otomasyonları ve yapay zekâ sistemlerini tasarlayıp kuruyoruz. İskenderun merkezliyiz; yerinde ve uzaktan çalışıyoruz. | **changed** |
| `company.positioning.index` | 01 — Ne yapıyoruz | 01 — Ne yapıyoruz |  |
| `company.positioning.title` | Tek bir hizmet değil, birbirine bağlı sistemler. | Üç yetkinlik, tek bir teklif. | **changed** |
| `company.positioning.body` | Bir web sitesi, bir otomasyon ya da bir asistan, etrafındaki her şeye bağlandığında gerçekten işe yarar. Bu yüzden üç yetkinliği tek bir teklif olarak sunuyoruz. Tek bir sektörle sınırlı değiliz; elle yapılan işi azaltarak büyümek isteyen işletmelerle çalışıyoruz. | Bir web sitesi, otomasyon ya da asistan, etrafındaki her şeye bağlandığında en çok işe yarar. Bu yüzden üçünü birlikte sunuyoruz. Sektör fark etmeksizin, elle yapılan işi artırmadan büyümek isteyen işletmelerle çalışıyoruz. | **changed** |
| `company.founder.index` | 02 — Kurucu | 02 — Kurucu |  |
| `company.founder.lines[0]` | VERL Systems’i kurucusu Mahmud yönetiyor. | VERL Systems’i kurucusu Mahmud yönetiyor. |  |
| `company.founder.lines[1]` | Her proje ilk görüşmeden teslime kadar bizzat yürütülür; sisteminizi tasarlayan ve kuran kişiyle doğrudan çalışırsınız. | Her projeyi ilk görüşmeden teslime kadar bizzat yürütür. Sisteminizi tasarlayan ve kuran kişiyle doğrudan çalışırsınız. | **changed** |
| `company.founder.name` | Mahmud | Mahmud |  |
| `company.founder.role` | Kurucu | Kurucu |  |
| `company.principles.index` | 03 — İlkeler | 03 — İlkeler |  |
| `company.principles.items[0].title` | Parça değil, sistem. | Baştan bağlantılı. | **changed** |
| `company.principles.items[0].body` | Bir web sitesi, otomasyon ya da asistan, etrafındaki her şeye bağlandığında en çok işe yarar. | Her parçayı birlikte çalışacağı araçlarla planlarız; hiçbir şey elle kopyalanmaz. | **changed** |
| `company.principles.items[1].title` | Söz değil, kanıt. | Kanıt gerçek müşterilerden gelir. | **changed** |
| `company.principles.items[1].body` | Rakamlar yalnızca gerçek müşterilerden gelir. Demo sistemler her zaman demo olarak işaretlenir. | Yalnızca gerçek müşterilerden gelen rakamları paylaşırız. Her demo sistem, demo olarak işaretlenir. | **changed** |
| `company.principles.items[2].title` | Çalışmak için kurulur. | Çalışmak için kurulur. |  |
| `company.principles.items[2].body` | Yayından sonraki günü düşünerek tasarlarız: net yapı, izlenen sistem, kolay değişiklik. | Yayından sonraki günü düşünerek tasarlarız: net bir yapı, izlenen bir sistem ve yeniden kurmadan yapılabilen değişiklikler. | **changed** |
| `company.principles.items[3].title` | İşçilik görünür. | İşçiliğimizi burada görebilirsiniz. | **changed** |
| `company.principles.items[3].body` | Kendi sitemizi nasıl kurduğumuz, sizinkini nasıl kuracağımızın ilk kanıtıdır. | Bu siteyi kendimiz tasarladık ve kurduk. Sizinkini nasıl kuracağımızın ilk örneği bu. | **changed** |
| `company.standards.index` | 04 — Standartlar | 04 — Standartlar |  |
| `company.standards.title` | Size verdiğimiz söz. | Size verdiğimiz söz. |  |
| `company.facts.index` | 05 — Bilgiler | 05 — Bilgiler |  |
| `company.facts.items[0].label` | Merkez | Merkez |  |
| `company.facts.items[0].value` | İskenderun, Hatay, Türkiye | İskenderun, Hatay, Türkiye |  |
| `company.facts.items[1].label` | Çalışma şekli | Çalışma biçimi | **changed** |
| `company.facts.items[1].value` | Yerinde ve uzaktan | Yerinde ve uzaktan |  |
| `company.facts.items[2].label` | Diller | Diller |  |
| `company.facts.items[2].value` | Türkçe, İngilizce, Arapça | Türkçe, İngilizce, Arapça |  |
| `company.facts.phone` | Telefon | Telefon |  |
| `start.meta.title` | Proje başlatın — VERL Systems | Proje başlatın \| VERL Systems | **changed** |
| `start.meta.description` | Beş kısa soruyla projenizi anlatın. Özetiniz WhatsApp’ta hazır açılır. | Beş kısa soruyla projenizi anlatın. Özetiniz WhatsApp’ta hazır açılır. |  |
| `start.eyebrow` | Proje başlatın | Proje başlatın |  |
| `start.title` | Projenizi beş kısa soruyla anlatın. | Projenizi beş kısa soruyla anlatın. |  |
| `start.body` | Sonunda özetiniz WhatsApp’ta hazır olarak açılır. Bu sitede hiçbir bilgi saklanmaz. | Cevaplarınız WhatsApp’ta hazır bir mesaj olarak açılır. Bu sitede hiçbir bilgi kaydedilmez. | **changed** |
| `start.step` | Adım | Adım |  |
| `start.of` | / | / |  |
| `start.back` | Geri | Geri |  |
| `start.next` | İleri | İleri |  |
| `start.edit` | Düzenle | Düzenle |  |
| `start.optional` | isteğe bağlı | isteğe bağlı |  |
| `start.needs.question` | Neye ihtiyacınız var? | Neye ihtiyacınız var? |  |
| `start.needs.helper` | Bir veya birden fazla seçin. | Bir veya birden fazla seçin. |  |
| `start.needs.options.web` | Web platformu | Web platformu |  |
| `start.needs.options.automation` | Otomasyon | Otomasyon |  |
| `start.needs.options.ai` | Yapay zekâ sistemi | Yapay zekâ sistemi |  |
| `start.needs.options.unsure` | Henüz emin değilim | Henüz emin değilim |  |
| `start.business.question` | İşletmenizden bahsedin. | İşletmenizden bahsedin. |  |
| `start.business.name` | İşletme adı | İşletme adı |  |
| `start.business.link` | Web sitesi veya Instagram | Web sitesi veya Instagram |  |
| `start.business.linkHelper` | Varsa adresini yazın. | Varsa adresini ekleyin. | **changed** |
| `start.goal.question` | Neyi başarmak istiyorsunuz? | Neyi başarmak istiyorsunuz? |  |
| `start.goal.helper` | Birkaç cümle yeterli. | Birkaç cümle yeterli. |  |
| `start.timeline.question` | Ne zaman başlamak istersiniz? | Ne zaman başlamak istersiniz? |  |
| `start.timeline.options.asap` | En kısa sürede | En kısa sürede |  |
| `start.timeline.options.months` | 1–3 ay içinde | 1–3 ay içinde |  |
| `start.timeline.options.later` | Bu yıl içinde, daha sonra | Bu yılın ilerleyen aylarında | **changed** |
| `start.timeline.options.flexible` | Esnek | Esnek |  |
| `start.person.question` | Son olarak, adınız? | Adınız nedir? | **changed** |
| `start.person.name` | Adınız | Adınız |  |
| `start.summary.title` | Özetiniz | Özetiniz |  |
| `start.summary.helper` | WhatsApp bu mesaj hazır olarak açılır. Göndermeden önce kontrol edebilirsiniz. | Bu mesaj WhatsApp’ta hazır olarak açılır. Göndermeden önce kontrol edebilirsiniz. | **changed** |
| `start.summary.send` | WhatsApp’ta açın | WhatsApp’ta açın |  |
| `start.message.greeting` | Merhaba VERL Systems, bir proje başlatmak istiyorum. | Merhaba VERL Systems, bir proje başlatmak istiyorum. |  |
| `start.message.needs` | İhtiyaç | İhtiyaç |  |
| `start.message.business` | İşletme | İşletme |  |
| `start.message.link` | Web sitesi / Instagram | Web sitesi / Instagram |  |
| `start.message.goal` | Hedef | Hedef |  |
| `start.message.timeline` | Zaman | Zaman |  |
| `start.message.name` | Ad | Ad |  |
| `company.lines[2]` | (none) | sistem stüdyosu. | **changed** |

### Capability: Web platforms

| Key | Before | After | |
|---|---|---|---|
| `title` | Web platformları | Web platformları |  |
| `outcome` | Hızlı, özenli ve ziyaretçiyi müşteriye dönüştürmek için kurulan web siteleri ve web uygulamaları. | Ziyaretçiyi müşteriye dönüştürmek için kurulan web siteleri ve web uygulamaları. | **changed** |
| `intro` | Kurumsal web siteleri, ürün ve kampanya sayfaları, web uygulamaları. Her biri daha büyük bir sistemin parçası olarak tasarlanır: arkasındaki araçlara bağlıdır, ölçülür ve yayından sonra da bakımı yapılır. | Kurumsal web siteleri, kampanya sayfaları ve web uygulamaları. Her biri arkasındaki araçlara bağlanır ve yayından sonra da bakımı yapılır. | **changed** |
| `tags[0]` | Kurumsal siteler | Kurumsal siteler |  |
| `tags[1]` | Kampanya sayfaları | Kampanya sayfaları |  |
| `tags[2]` | Web uygulamaları | Web uygulamaları |  |
| `tags[3]` | Çok dilli yapı | Çok dilli yapı |  |
| `mini[0]` | Ziyaretçi | Ziyaretçi |  |
| `mini[1]` | Sayfa | Sayfa |  |
| `mini[2]` | Talep | Talep |  |
| `includes[0].title` | Kurumsal web siteleri | Kurumsal web siteleri |  |
| `includes[0].body` | İşletmenin internetteki ana adresi: net bir yapı, her cihazda hızlı açılan sayfalar ve çalıştığınız her dilde içerik. | İşletmenin internetteki ana adresi: net bir yapı, her cihazda hızlı açılan sayfalar ve çalıştığınız her dilde içerik. |  |
| `includes[1].title` | Ürün ve kampanya sayfaları | Ürün ve kampanya sayfaları |  |
| `includes[1].body` | Tek bir teklif ya da tek bir kitle için odaklı sayfalar. Hızlı yayına alınır ve sonuçları ölçülür. | Tek bir teklif ya da tek bir kitle için odaklı sayfalar. Hızlı yayına alınır ve sonuçları ölçülür. |  |
| `includes[2].title` | Web uygulamaları | Web uygulamaları |  |
| `includes[2].body` | Randevu, müşteri paneli, iç raporlama ekranları: işletmenin gerçek çalışma şekline göre kurulan, tarayıcıda çalışan yazılımlar. | Randevu, müşteri paneli ve iç raporlama ekranları. İşletmenizin çalışma şekline göre kurulan, tarayıcıda çalışan yazılımlar. | **changed** |
| `includes[3].title` | Baştan bağlantılı | Baştan bağlantılı |  |
| `includes[3].body` | Formlar, randevular ve talepler doğrudan kullandığınız araçlara akar. Elle kopyalanan hiçbir şey kalmaz. | Formlar, randevular ve talepler doğrudan kullandığınız araçlara akar. Elle kopyalanan hiçbir şey kalmaz. |  |
| `flow[0]` | Yapı ve içerik | Yapı ve içerik |  |
| `flow[1]` | Tasarım sistemi | Tasarım sistemi |  |
| `flow[2]` | Geliştirme | Geliştirme |  |
| `flow[3]` | Araçlara bağlantı | Araçlara bağlantı |  |
| `flow[4]` | Yayın ve ölçüm | Yayın ve ölçüm |  |
| `notes[0]` | Next.js ile geliştirilir, Vercel üzerinde yayınlanır; mobil bağlantıda da hızlı açılır. | Next.js ile geliştirilir, Vercel üzerinde yayınlanır; mobil bağlantıda da hızlı açılır. |  |
| `notes[1]` | Her sayfa her ekran boyutunda ve her dilde okunaklı ve erişilebilir olacak şekilde kurulur. | Her sayfa her ekran boyutunda ve her dilde okunaklı ve erişilebilir olacak şekilde kurulur. |  |
| `notes[2]` | İçerik, yeni sayfalar yeniden tasarım gerekmeden eklenebilecek şekilde yapılandırılır. | İçerik, yeni sayfalar yeniden tasarım gerekmeden eklenebilecek şekilde yapılandırılır. |  |

### Capability: Automation

| Key | Before | After | |
|---|---|---|---|
| `title` | Otomasyon ve entegrasyonlar | Otomasyon ve entegrasyonlar |  |
| `outcome` | İşletmenizin zaten kullandığı araçları birbirine bağlıyor, aradaki elle yapılan işi ortadan kaldırıyoruz. | İşletmenizin zaten kullandığı araçları birbirine bağlıyor, aradaki elle yapılan işi ortadan kaldırıyoruz. |  |
| `intro` | WhatsApp, CRM, takvimler, tablolar, ödeme ve randevu araçları. Bunları birbirine bağlıyor, her gün aynı şekilde tekrarlanan adımları sistemin kendisine bırakıyoruz. | WhatsApp, CRM, takvimler, tablolar, ödeme ve randevu araçları. Bunları birbirine bağlıyoruz; ekibinizin her gün tekrarladığı adımlar kendiliğinden işler. | **changed** |
| `tags[0]` | WhatsApp | WhatsApp |  |
| `tags[1]` | CRM | CRM |  |
| `tags[2]` | Takvim ve randevu | Takvim ve randevu |  |
| `tags[3]` | Raporlar | Raporlar |  |
| `mini[0]` | Tetikleyici | Tetikleyici |  |
| `mini[1]` | Akış | Akış |  |
| `mini[2]` | Araçlar | Araçlar |  |
| `includes[0].title` | Araç entegrasyonları | Araç entegrasyonları |  |
| `includes[0].body` | WhatsApp, CRM, takvim, tablo, ödeme ve randevu araçları birbirine bağlanır; veri kendi kendine doğru yere gider. | WhatsApp, CRM, takvim, tablo, ödeme ve randevu araçları birbirine bağlanır; veri kendi kendine doğru yere gider. |  |
| `includes[1].title` | İş akışı otomasyonu | İş akışı otomasyonu |  |
| `includes[1].body` | Onaylar, hatırlatmalar, takipler ve devirler her seferinde aynı şekilde, otomatik olarak çalışır. | Onaylar, hatırlatmalar, takipler ve devirler her seferinde aynı şekilde, otomatik olarak çalışır. |  |
| `includes[2].title` | Bildirim ve yönlendirme | Bildirim ve yönlendirme |  |
| `includes[2].body` | Doğru kişi, doğru konudan doğru anda haberdar olur. | Doğru kişi, doğru konudan doğru anda haberdar olur. |  |
| `includes[3].title` | Raporlama | Raporlama |  |
| `includes[3].body` | Kullandığınız araçlardan düzenli özetler hazırlanır; kimsenin bunları elle derlemesi gerekmez. | Kullandığınız araçlardan düzenli özetler hazırlanır; kimsenin bunları elle derlemesi gerekmez. |  |
| `flow[0]` | Tetikleyici | Tetikleyici |  |
| `flow[1]` | Kurallar | Kurallar |  |
| `flow[2]` | Bağlı araçlar | Bağlı araçlar |  |
| `flow[3]` | Bildirim | Bildirim |  |
| `flow[4]` | Kayıt ve rapor | Kayıt ve rapor |  |
| `notes[0]` | İş akışları n8n üzerinde kurulur; her adım görünür ve değiştirilebilir. | İş akışları n8n üzerinde kurulur; her adım görünür ve değiştirilebilir. |  |
| `notes[1]` | Entegrasyonlar, WhatsApp Business API dahil, her aracın resmî API’si üzerinden yapılır. | Entegrasyonlar, WhatsApp Business API dahil, her aracın resmî API’si üzerinden yapılır. |  |
| `notes[2]` | Her iş akışı yayına alınmadan önce gerçek senaryolarla test edilir. | Her iş akışı yayına alınmadan önce gerçek senaryolarla test edilir. |  |

### Capability: AI systems

| Key | Before | After | |
|---|---|---|---|
| `title` | Yapay zekâ sistemleri | Yapay zekâ sistemleri |  |
| `outcome` | İşletmenin kendi bilgileriyle çalışan; soruları yanıtlayan, talepleri ayıklayan, randevu alan ve rapor hazırlayan asistanlar. | İşletmenizin kendi bilgileriyle soruları yanıtlayan, talepleri ayıklayan, randevu veren ve rapor hazırlayan asistanlar. | **changed** |
| `intro` | Yapay zekâ asistanları ve ajanları, işletmenin kendi bilgisiyle çalışır ve gerçek araçlarına bağlanır. Ne yapacakları da, nerede durup işi bir kişiye bırakacakları da açıkça tanımlanır. | Yapay zekâ asistanları ve ajanları kendi bilgilerinizle çalışır ve gerçek araçlarınıza bağlanır. Neyi üstleneceklerini ve işi ne zaman bir kişiye devredeceklerini biz tanımlarız. | **changed** |
| `tags[0]` | Asistanlar | Asistanlar |  |
| `tags[1]` | Ajanlar | Ajanlar |  |
| `tags[2]` | Bilgi tabanı | Bilgi tabanı |  |
| `tags[3]` | Araçlarınıza bağlı | Araçlarınıza bağlı |  |
| `mini[0]` | Soru | Soru |  |
| `mini[1]` | Yapay zekâ | Yapay zekâ |  |
| `mini[2]` | İşlem | İşlem |  |
| `includes[0].title` | Asistanlar | Asistanlar |  |
| `includes[0].body` | Müşteri sorularını sizin bilgilerinizle, sizin üslubunuzla ve müşterinin dilinde yanıtlar. | Müşteri sorularını sizin bilgilerinizle, sizin üslubunuzla ve müşterinin dilinde yanıtlar. |  |
| `includes[1].title` | Ön eleme ve randevu | Ön eleme ve randevu |  |
| `includes[1].body` | Doğru soruları sorar, talepleri ayıklar ve gerçek takviminize randevu yazar. | Doğru soruları sorar, talepleri ayıklar ve gerçek takviminize randevu yazar. |  |
| `includes[2].title` | Ekip için ajanlar | Ekip için ajanlar |  |
| `includes[2].body` | İşletmenin kendi verisinden özetler, taslaklar ve raporlar hazırlar. | İşletmenin kendi verisinden özetler, taslaklar ve raporlar hazırlar. |  |
| `includes[3].title` | Kişiye devir | Kişiye devir |  |
| `includes[3].body` | Sistemin ne zaman geri çekilip işi bir kişiye bırakacağı net kurallarla belirlenir. | Sistemin ne zaman geri çekilip işi bir kişiye bırakacağı net kurallarla belirlenir. |  |
| `flow[0]` | Gelen soru | Gelen soru |  |
| `flow[1]` | İşletme bilgisi | İşletme bilgisi |  |
| `flow[2]` | Model: OpenAI / Claude | Model: OpenAI / Claude |  |
| `flow[3]` | Araçlarınızda işlem | Araçlarınızda işlem |  |
| `flow[4]` | Gerektiğinde kişiye devir | Gerektiğinde kişiye devir |  |
| `notes[0]` | OpenAI ve Claude modelleri üzerine kurulur; model, işe göre seçilir. | OpenAI ve Claude modelleri üzerine kurulur; model, işe göre seçilir. |  |
| `notes[1]` | Yanıtlar işletmenin kendi belge ve verilerine dayanır. | Yanıtlar işletmenin kendi belge ve verilerine dayanır. |  |
| `notes[2]` | Her asistanın sınırları tanımlıdır ve bir kişiye devir yolu vardır. | Her asistanın sınırları tanımlıdır ve bir kişiye devir yolu vardır. |  |

### Case study: Salon

| Key | Before | After | |
|---|---|---|---|
| `name` | Güzellik salonu web sitesi | Güzellik salonu web sitesi |  |
| `summary` | Bir güzellik salonu için web sitesi. VERL Systems’in teslim ettiği ilk müşteri projesi. | Bir güzellik salonu için web sitesi. VERL Systems’in teslim ettiği ilk müşteri projesi. |  |
| `sector` | Güzellik | Güzellik |  |
| `type` | Web sitesi | Web sitesi |  |
| `cover.alt` | Güzellik salonu web sitesi | Güzellik salonu web sitesi |  |
| `screens[0].alt` | Web sitesi, masaüstü | Web sitesi, masaüstü |  |
| `screens[1].alt` | Web sitesi, telefon | Web sitesi, telefon |  |
| `screens[2].alt` | Web sitesi, telefon | Web sitesi, telefon |  |
| `note` | Projenin tam hikâyesi (ihtiyaç, kurulum ve ekranlar) hazırlanıyor. | Projenin tam hikâyesi (ihtiyaç, kurulum ve ekranlar) hazırlanıyor. |  |

### Case study: Demo system

| Key | Before | After | |
|---|---|---|---|
| `name` | Talep karşılama ve yanıt sistemi | Talep karşılama ve yanıt sistemi |  |
| `summary` | Web sayfasından gelen talepleri ön eleyen, WhatsApp’a ileten, anında yanıtlayan ve doğru kişiye yönlendiren bir sistem. | Web sayfasından gelen talepleri ön eler, WhatsApp’ta hemen yanıtlar ve her birini doğru kişiye yönlendirir. | **changed** |
| `sector` | Hizmet işletmeleri | Hizmet işletmeleri |  |
| `type` | Web + Otomasyon | Web + Otomasyon |  |
| `cover.alt` | Talep karşılama sistemi ekranları | Talep karşılama sistemi ekranları |  |
| `problem` | Talepler birden fazla kanaldan geliyor. Birinin her birini okuması, aynı soruları sorması ve doğru kişiye iletmesi gerekiyor; çoğu zaman elle ve geç. | Talepler birden fazla kanaldan geliyor. Birinin her birini okuması, aynı soruları sorması ve elle iletmesi gerekiyor. Bu da çoğu zaman geç oluyor. | **changed** |
| `flow[0]` | Ziyaretçi talep sayfasına gelir | Ziyaretçi talep sayfasına gelir |  |
| `flow[1]` | İhtiyaç, zaman ve ayrıntılar sorulur | İhtiyaç, zaman ve ayrıntılar sorulur |  |
| `flow[2]` | Hazır talep WhatsApp’a düşer | Hazır talep WhatsApp’a düşer |  |
| `flow[3]` | Anında yanıt gider | Anında yanıt gider |  |
| `flow[4]` | Talep doğru kişiye yönlendirilir | Talep doğru kişiye yönlendirilir |  |
| `build.notes[0]` | Talep sayfası Next.js ile kurulur; her gönderim bir n8n iş akışını başlatır. | Talep sayfası Next.js ile kurulur; her gönderim bir n8n iş akışını başlatır. |  |
| `build.notes[1]` | Mesajlar WhatsApp Business API üzerinden gönderilir ve alınır. | Mesajlar WhatsApp Business API üzerinden gönderilir ve alınır. |  |
| `build.notes[2]` | Yönlendirme kuralları tek bir yerde tutulur ve kod yazmadan değiştirilebilir. | Yönlendirme kuralları tek bir yerde tutulur ve kod yazmadan değiştirilebilir. |  |
| `screens[0].alt` | Talep sayfası, masaüstü | Talep sayfası, masaüstü |  |
| `screens[1].alt` | Talep sayfası, telefon | Talep sayfası, telefon |  |
| `screens[2].alt` | WhatsApp’ta anında yanıt ve sorular | WhatsApp’ta anında yanıt ve sorular |  |
| `does[0]` | Ziyaretçiye ihtiyacını, zamanlamasını ve ayrıntıları sorar. | Ziyaretçiye ihtiyacını, zamanlamasını ve ayrıntıları sorar. |  |
| `does[1]` | Hazır talebi doğrudan işletmenin WhatsApp’ına gönderir. | Hazır talebi doğrudan işletmenin WhatsApp’ına gönderir. |  |
| `does[2]` | Mesai dışında gelen mesaja da anında yanıt verir. | Mesai dışında gelen mesaja da anında yanıt verir. |  |
| `does[3]` | Talebi doğru kişiye yönlendirir. | Talebi doğru kişiye yönlendirir. |  |