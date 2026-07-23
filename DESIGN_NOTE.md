# Ripplica Website — Design Philosophy Note

## Verdict

This site is a **Framer → Next.js port of a product-demo SaaS page**, not a brand-led company site. The strongest asset is the **Record → Review → Run** interactive demo and real B2B customer proof. The weakest is brand presence: Ripplica barely appears in the first viewport, tokens exist but aren’t used, and the story still sells one automation product while the company is reframing as a multi-industry AI builder.

---

## 1. What the current design believes

### Product over brand
The homepage is built to **prove the product works**, not to establish who Ripplica is.
- Hero promise: “Automate any webapp with just a simple video.”
- Centerpiece: interactive demo with live task switching
- Features explain *how agents behave*, not *what the company builds*
- Brand name lives mostly in the nav wordmark

**Philosophy signal:** *Show the workflow. Trust follows.*

### Demo as the argument
Unlike feature-card SaaS sites, Ripplica treats the demo as the thesis:
Record once → Review steps → Run forever.
That three-beat structure is the clearest design idea on the page. Everything else (logos, features, testimonials) supports it.

### Proof through density, not polish theater
Social proof is concrete and regional:
- Hospital, finance, supply chain, FMCG, startups
- Logo marquee + testimonial carousel + long-form case studies
- Product Hunt badges in the hero

**Philosophy signal:** *Real operators, real ops pain — not abstract “teams love us.”*

### Human, anti-busywork tone
Footer line (“Built for humans tired of busywork”) and the red status-dot subline (“Record it once. Never do it again.”) give the site a slightly wry, operator-first voice. It is not enterprise-corporate and not playful startup-cute.

### Faithful Framer geometry
Spacing (`pt-[208px]`, `max-w-[1180px]`, exact `text-[60px]`) reads as pixel-matched export fidelity. The design system (forest green, terracotta, warm cream) looks *intended* but the live UI still uses Framer hex one-offs (blue CTA `#5894ff`, gray copy `#7b7b86`, white panels).

**Philosophy signal:** *Preserve the marketed artifact; systematize later.*

---

## 2. Visual language (as shipped)

| Layer | Declared | Lived |
|-------|----------|--------|
| Ground | Warm cream `surface` `#FAF8F3` | Mostly white sections |
| Brand | Forest green `#215B4F` | Rarely used on homepage |
| Accent | Terracotta `#D86E3F` | Focus ring only |
| Type | Inter | Inter (generic SaaS) |
| Motion | CSS fade/slide + marquee | Quiet, purposeful |
| Layout | Wide container, split hero | Inset screenshot, not full-bleed |
| Cards | Soft gray panels | Used for features/demo/testimonials |

Atmosphere is **light, clean, illustration-led**. Not dark-mode, not purple-gradient AI cliché. That restraint is worth keeping.

---

## 3. Composition rules (current)

1. **Fixed chrome** — Navbar + Footer frame every page; main has `pt-[74px]`.
2. **Hero = split argument** — Copy left, product image right; tall first viewport.
3. **Proof band next** — Logo marquee immediately after hero.
4. **Product theater** — Demo section is the emotional peak.
5. **Capability bands** — Horizontal illustration + copy rows.
6. **Voice of customer** — Carousel close.

One job per section is already mostly true. The hero violates “brand first” and “hero budget” by loading Product Hunt badges into the first viewport and omitting the brand as a hero-level signal.

---

## 4. Messaging tension (why reframe is needed)

| Current site says | Company now wants to say |
|-------------------|--------------------------|
| One product: video → browser automation | A suite: marketing, browser automation, content, QA, voice AI |
| “Automate any webapp” | “AI tools for various industries” |
| Product Hunt social proof | 1000+ customers, VC-backed, gold medalists (IIT / BITS) |
| Meta: “digital experiences with clarity” | Operator AI company with pedigree + scale |

The design philosophy can stay (**proof-led, light, demo-capable, anti-busywork**), but the **narrative architecture** must shift from *single-product demo* to *company platform + credibility + product suite*.

---

## 5. Design principles to keep in the reframe

1. **Proof before poetry** — Logos, customer count, and concrete industries beat vague AI hype.
2. **One job per section** — Hero credibility → suite → depth → voice of customer.
3. **Use the real tokens** — Green / terracotta / cream should finally drive CTAs and accents (drop arbitrary blue).
4. **Keep motion quiet** — Entrance fades and marquee only; no glow theater.
5. **Preserve operator voice** — Direct, short, slightly human; no “revolutionize your workflow” sludge.
6. **Brand in the first viewport** — Ripplica must survive the “remove the nav” test.
7. **Suite without card clutter** — Product lines as a clear list or grid of *names + one line*, not five feature cards with shadows.

---

## 6. Design principles to change

1. Stop selling only Record/Review/Run as the whole company.
2. Move Product Hunt out of the hero (or demote below the fold).
3. Lead with company authority: **1000+ customers · VC-backed · IIT/BITS gold medalists**.
4. Make the five solution lines the second major beat.
5. Align meta, nav labels, and CTAs with the new story.

---

## 7. Target story architecture

```
Hero        → Who we are + why trust us (brand, scale, pedigree)
Logos       → Who already trusts us
Solutions   → What we build (5 AI lines)
Depth       → How one line works (keep demo for browser automation)
Voice       → What customers say
```

This keeps the site’s proof-led philosophy while reframing Ripplica as an **AI solutions company**, not a single automation widget.
