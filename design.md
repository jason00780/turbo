# JetsoEasy — Design System

Extracted via `hallmark study` from the live site (`https://vpsdemo.1ecst.ltd/jetsoeasy/`, source = owner's own site). This is a portable DNA sheet: tokens, typography, components, motion, and signature treatments for rebuilding the same visual identity on a new site.

---

## 1 · Design tokens

```css
:root {
  /* Core palette */
  --yellow: #f7d100;   /* brand anchor — deals, prices, CTAs, hard shadows */
  --ink:    #151813;   /* primary text / near-black with green undertone */
  --paper:  #fcfbf6;   /* page background — warm off-white */
  --cream:  #efeee6;   /* secondary surface */
  --line:   #e5e3d9;   /* hairline borders */
  --dark:   #20251e;   /* dark green-grey section surface */
  --muted:  #697068;   /* secondary / body text */
  --red:    #ad3b29;   /* deal / discount red */
  --green:  #336b47;   /* success green */

  /* Duotone photo-card placeholder pairs */
  --tone-sage:   #a9b666 / #334832;
  --tone-ember:  #d64e24 / #4c1e13;
  --tone-copper: #d99651 / #5e2920;
  --tone-sunset: #f18a59 / #86414c;
  --tone-plum:   #a23e5f / #3b243e;
  --tone-ocean:  #58a8a6 / #235068;

  /* Typography */
  --font-display: 'Noto Sans HK', sans-serif;
  --font-mono:    'DM Mono', monospace;

  /* Motion */
  --ease-out: cubic-bezier(.22,.8,.25,1);

  color: var(--ink);
  background: var(--paper);
  font-family: var(--font-display);
}
```

### Palette temperament

- **Paper band:** light, warm-neutral (`#fcfbf6`).
- **Accent:** yellow, used at **flood** footprint — not a timid highlight but the structural identity (brand mark, active states, CTA fill, solid offset shadows).
- **Rhythm:** alternate light paper sections with dark-green bands (`#20251e` / gradients from `#171c16`).
- **Rule:** never pure black, never pure white. Everything sits on warm or green-tinged neutrals.

---

## 2 · Typography

| Role | Face | Weight | Notes |
|---|---|---|---|
| Display | Noto Sans HK | 800–900 | tight tracking `-3px to -4.5px`, `line-height: 1.05`, `text-wrap: balance` |
| Body | Noto Sans HK | 400–500 | `line-height: 1.7–1.9` |
| Label / eyebrow | DM Mono | 400–500 | uppercase, `letter-spacing: .12–.25em` |
| Numerals / stats / prices | DM Mono | 400–500 | prices, counters, stat figures |

**Pairing logic:** heavy grotesque display + mono labels/numbers. Two families.

**Hard rules**

- No italic headings. Emphasis = `color: var(--yellow)` with `font-style: normal` on an `<em>`, never a slanted display face.
- Eyebrows precede section titles: `✦ JETSOEASY GROUP BUY` style.
- Display type wraps safely: `overflow-wrap: anywhere; min-width: 0`.

---

## 3 · Spacing & layout

- Section padding: generous `68px` desktop, `51px` mobile, using `clamp()` / `max(5vw, calc((100vw - 1220px)/2))` gutters.
- Content max-width: `1220px` (wide) / `1120px` / `720px` (checkout).
- Grid columns collapse: 3 → 2 → 1 (offer/restaurant grids use `minmax(0,1fr)`, never bare `1fr`).

---

## 4 · Component specs

### Buttons
- **Primary** — yellow fill, dark ink text, `font-weight: 900`, rounded `999px` pill.
- **Outline** — transparent, hairline border (on dark: `#77836e` border, white text, `#ffffff12` fill).
- **Claim** — `查看／搶購 →` / `立即領券 ↗` with trailing arrow glyph.
- **Hover:** `translateY(-1px to -2px)` + border → yellow, transition `.16–.18s`.

### Cards (offer / groupbuy / restaurant / menu)
- Photo-top archetype: `border: 1px solid var(--line)`, `border-radius: 16px`, white bg.
- **Hover:** `translateY(-4px)` lift + `border-color: #d5bb23` + soft shadow `0 18px 38px #20251e17`.
- Photo area uses a **duotone gradient** from a tone pair with a DM Mono label overlay.
- Price/discount block: red (`--red`) strong numeral + grey strikethrough `del`.

### Nav (N1 standard)
- Logo (brand mark "J" on yellow) + 6 inline links + CTA right.
- Active link: yellow underline/state. Mobile: hamburger toggle, links become full-width stacked.

### Hero (`hero-food-hero`)
- Split diptych: left copy + search card, right photo **mosaic**.
- Dark green bg + `radial-gradient` yellow glow + thin circle outlines (`border: 1px solid #f7d10042`).
- Search card: `border-radius: 22px 22px 22px 5px` (3 rounded, 1 sharp), **hard solid offset shadow** `box-shadow: 13px 15px 0 var(--yellow)`.
- Mosaic frame: `rotate(1.5deg)`, hairline border, dark glass fill.

### Footer
- Standard link footer (multi-column + social row on desktop). Hidden on mobile.

---

## 5 · Motion

- **Stack:** pure CSS — no framer-motion / gsap / lottie.
- **Carousel:** `transform: translateX` with `transition: .62s cubic-bezier(.22,.8,.25,1)`.
- **Microinteractions:** `.16–.2s` transitions; hover = lift + yellow border; carousel dots `scale(1.1)`.
- **Reveal:** static content, no scroll-triggered reveals by default.
- `prefers-reduced-motion: reduce` must disable all transitions.

---

## 6 · Signature treatments (do not drop these)

1. **Hard solid offset shadows** — `box-shadow: 13px 15px 0 var(--yellow)` (yellow, no blur) behind key cards.
2. **Sharp-corner radius trick** — `border-radius: 22px 22px 22px 5px` (one corner sharp).
3. **Rotated frames** — mosaic `1.5deg`, prize ticket `-4deg`, placeholder `-7deg`.
4. **Duotone placeholders** — 6 tone-pair gradients stand in for photos.
5. **DM Mono eyebrows** — uppercase, letter-spaced, `✦` prefix.
6. **Yellow emphasis** — `<em>` words in headings colored yellow, never italic.
7. **Circle outlines / orbs** — thin-ring circles and translucent orbs as background decoration.

---

## 7 · Anti-patterns to avoid

- `transition: all` (use scoped property transitions).
- Pure black / pure white fills.
- Italic display or header text.
- Invented metrics/claims (real numbers only, or `—` placeholders).
- Bare `1fr` grid tracks for image-bearing columns — use `minmax(0, 1fr)`.

---

*Source: owner's own live site. DNA only — extract the system, don't photocopy the pixels.*
