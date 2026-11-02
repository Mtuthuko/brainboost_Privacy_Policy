---
name: Brain Boost Privacy Policy
description: The app's own level path, framing a calm, exact legal text.
colors:
  boost-violet: "#4A17C4"
  tile-violet: "#5B21D6"
  tile-highlight: "#6D33E8"
  link-violet: "#5520C8"
  night: "#1A0B3D"
  brain-pink: "#FF5FAE"
  pink-light: "#FFB8DD"
  pink-deep: "#D61F7A"
  xp-gold: "#FFC83D"
  gold-light: "#FFE39A"
  gold-mid: "#E0A92A"
  gold-deep: "#B07A12"
  lilac: "#CDBDFF"
  paper: "#F7F4FF"
  card: "#FFFFFF"
  tint: "#EEE7FF"
  rule: "#D9CFF6"
  node-line: "#7C5CE0"
  ink: "#1C1433"
  ink-2: "#4B4268"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Bricolage Fallback, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 2rem + 5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, Bricolage Fallback, Arial, sans-serif"
    fontSize: "clamp(1.4375rem, 1.1rem + 1.2vw, 1.875rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Fallback, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Fallback, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.3
rounded:
  chip: "10px"
  card: "16px"
  panel: "24px"
  contact: "28px"
  node: "9px"
  tile: "30%"
  pill: "999px"
spacing:
  sp-1: "4px"
  sp-2: "8px"
  sp-3: "12px"
  sp-4: "16px"
  sp-5: "24px"
  sp-6: "32px"
  sp-7: "48px"
  sp-8: "64px"
  sp-9: "88px"
  sp-10: "120px"
components:
  level-tile:
    backgroundColor: "{colors.tile-violet}"
    textColor: "#FFFFFF"
    rounded: "{rounded.tile}"
    size: "56px"
  email-pill:
    backgroundColor: "{colors.xp-gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "52px"
    padding: "0 22px"
  meta-card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.panel}"
    padding: "24px 28px"
  lede:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "28px 32px"
---

# Design System: Brain Boost Privacy Policy

Everything lives in one file, `index.html` (one inline `<style>`), plus `assets/`. The tokens
are the CSS custom properties at the top of that `<style>` block. Change a colour or a size
there and the whole page follows.

## Overview

**Creative North Star: "The Level Path."** The policy already speaks the app's language:
eleven numbered parts, read in order, like levels. So the frame becomes the app's level path,
built from one object, the **Brain Boost tile** (a violet squircle with a pink brain and gold):

- The big tile in the masthead is the app icon made physical, in real CSS 3D. It turns toward
  you as you start to scroll.
- Small tiles number every section, map the contents and show where you are.
- Reaching the contact panel completes the path in gold.

Inside that frame the reading column stays a calm document: a very legible font, dark ink on
lavender paper, about 73 characters per line, and every word of the policy exactly as written.

The game lives only in **shape, colour and state**. There is no game copy anywhere: no "level",
"XP", "complete" or "well done", and no badges or claims.

Key characteristics:
- Flat violet masthead with a 96px title and the 3D Boost Tile.
- A sticky contents rail on desktop and a level path down the right edge on phones.
- Light theme only. It prints cleanly, works with JavaScript off, and makes no third-party requests.

## Colors

Violet and gold come from the app; the paper is a cool lavender, not cream.

| Token | Hex | Use |
|---|---|---|
| `--bb-violet` | #4A17C4 | masthead, contact panel, table header band |
| `--bb-tile` | #5B21D6 | level tiles, current node, path fill |
| `--bb-link` | #5520C8 | links, focus ring on light grounds |
| `--bb-night` | #1A0B3D | footer, round buttons |
| `--bb-pink` | #FF5FAE | brain enamel (graphics only) |
| `--bb-pink-lt` | #FFB8DD | pink text on violet; text selection |
| `--bb-pink-deep` | #D61F7A | ring around the current node, link hover underline |
| `--bb-gold` | #FFC83D | specks, passed nodes, the e-mail pill, focus ring on dark grounds |
| `--bb-gold-lt` | #FFE39A | gold text on night (footer link) |
| `--bb-lilac` | #CDBDFF | quiet text on violet and night |
| `--bb-paper` / `--bb-card` / `--bb-tint` | #F7F4FF / #FFFFFF / #EEE7FF | page, cards, lede and upcoming nodes |
| `--bb-ink` / `--bb-ink-2` | #1C1433 / #4B4268 | text / labels |

Rules that keep the contrast honest (every text pair is 4.5:1 or better):
- Never put pink or gold **text** on paper (they fail at 2.6:1 and 1.4:1). Gold text only on night.
- Never put link violet on night (2.1:1).
- Never put text on a gradient. Masthead, contact panel and table header are flat fills.
- Show state with fill, ring and weight together, never colour alone.

## Typography

Two faces, both self-hosted in `assets/fonts/` (licences in `assets/fonts/OFL.txt`), so the page
never calls Google:

- **Bricolage Grotesque ExtraBold 800**: the title, subtitle, section heading words, tile
  numerals, meta values, table row names, contact heading and the e-mail pill. Never running text.
- **Atkinson Hyperlegible Next 400–700**: everything people read: body, lists, table cells,
  labels, contents labels, footer.

Sizes: title 52→96px, section headings 23→30px, contact heading 28→36px, lede 18.5→21px,
body 18px (17px on phones), labels 14px. Measured fallback fonts (`Bricolage Fallback`,
`Atkinson Fallback`) keep the layout still while the real fonts load.

Rules: no automatic hyphenation (`hyphens: manual`), balanced headings, `text-wrap: pretty` on
paragraphs, no `text-transform` on policy text, tabular numerals in dates, tables and tiles.

## Layout

- **Reading column:** 576px wide with 18px text (about 73 characters per line). Never wider.
- **≥1280px:** contents rail 240px + gap 72px + column 576px, centred (888px in all).
- **1100–1279px:** rail 216px + gap 48px + column 560px.
- **720–1099px:** one column; the contents become a two-column panel after the lede, and a
  "Back to contents" button appears once you scroll past it.
- **Under 720px:** the masthead stacks (tile, then title, then app name).
- **Under 600px:** the level path runs down the right edge, with one node per section.

**The companion's lane.** The butterfly cruises in a lane on the right edge. The page keeps a
right gutter wide enough that the lane never sits over policy text: below 1100px the gutter is
`clamp(46px, 7.5vw, 130px) + 28px`, and below 720px it is 50px. On phones the level path's track
sits on the lane itself: 30px into that 50px gutter, centred 21px in from the right edge of the
screen. If you change the gutter, move `.levels::before/::after`, `.levels .opener::after` and
`.contact::before` by the same amount.

Spacing follows an 8px rhythm (`--sp-1` to `--sp-10`). There is more space above a heading than
below it: 88px between sections on desktop (64px on phones), 18px under a heading.

## Elevation & Depth

Shadows always have an offset and a soft blur (`--sh-1` cards, `--sh-2` the meta card over the
masthead, `--sh-tile` the level tiles, `--sh-pill` the e-mail pill, `--sh-btn` the round buttons).
Real depth comes from CSS 3D, used in two places only: the masthead Boost Tile and the small
end tile on the contact panel.

## Shapes

One shape carries the brand: the **squircle tile**, `border-radius: 30%`. Section tiles (56px,
44px on phones), contents nodes (28px, 9px radius), the Boost Tile and the favicon all use it.
Other radii: 10px chips, 16px cards, 24px meta card and lede, 28px contact panel, full pill.
Sparks are four-pointed. Never use five-point stars (they read as ratings), ticks, shields or
ribbons: the tile must never look like a seal of approval.

## Components

- **Masthead** (`header.mast`): flat violet, the title (always "Privacy / Policy" on two lines),
  the app name in pink, and the Boost Tile art on the right (above on phones).
- **Boost Tile** (`.logo`): stacked layers in 3D: seven gold rims behind a violet enamel face, a
  pink brain, raised gold brain lines and a gold spark in front. `assets/boost.js` sets `--p`
  from 0 to 1 over the first 60% of a screen of scrolling; the tile turns and the gloss sweeps.
  `--p: 0` is the rest pose (also with reduced motion and with JavaScript off). Gold specks
  around it twinkle and drift in depth.
- **Meta card** (`.meta`): app name, the two dates and the contact e-mail, pulled up over the
  masthead. 4 across at ≥1280px, 2×2 below, stacked on small phones.
- **Lede** (`.highlight`): the opening promise in a tint panel.
- **Contents** (`nav.toc`): 12 rows (11 sections + the contact panel). Node states: upcoming
  (tint), current (violet with a pink ring, `aria-current="location"`), passed (gold), end
  (a brain node that turns gold at the contact panel). Numerals here have no full stop, so
  they never read as the legal headings.
- **Section opener** (`h2.opener`): a level tile plus the heading words. Keep this exact markup:
  `<h2 class="opener"><span class="lv">6<span class="dot">.</span></span> <span class="ht" data-perch>Data Sharing</span></h2>`.
  `.lv` must stay absolutely positioned (never flex or grid), so the heading still reads
  "6. Data Sharing" for screen readers, find-in-page and the legal-text check.
- **Data table** (`table.inv`): a real table with a violet header band. Under 600px each row
  becomes a card and the header row becomes a small legend.
- **Contact panel** (`#contact`): violet, centred, the small 3D end tile on its top edge, and the
  gold e-mail pill.
- **Footer** (`footer.foot`): night ground, copyright line and the effective date.
- **Chrome:** a skip link ("Skip to the policy"), "Back to contents" (under 1100px), and the
  living layer's pause button (bottom right). Both round buttons share the night fill, the gold
  icon and a gold hairline, and get a two-tone focus ring (gold inside a night halo) that shows
  on every ground.

## Motion

One authored moment, the level path, and nothing on the policy text itself:
- The Boost Tile turns with the scroll; specks twinkle only while on screen.
- The rail and the phone path fill as you read (220ms ease-out); nodes change state (180ms).
- The end tile rises in once, in 3D, when the contact panel comes into view.
- Anchor jumps scroll smoothly.

**One button stops everything.** `boost.js` mirrors the living layer's pause button onto
`<html class="motion-off">`, which stops the butterfly, the tile turn, the twinkle and smooth
scrolling. With `prefers-reduced-motion` the page starts paused. Nothing is ever hidden waiting
for an animation: all text is visible before any script runs, with JavaScript off and in print.
`boost.js` stores nothing and makes no network requests.

## Living layer

- **Character:** a calm **butterfly** (`calm: true`). Brain Boost is about growing level by level,
  and the butterfly is the creature of becoming. On a document, a resting butterfly is a bookmark.
- **Colours:** on paper the wings are tile violet `#5B21D6` with Brain Pink tips and gold-light
  spots; over violet or night it switches to pink-light wings with gold tips and white spots.
- **Where it rests:** only beside headings (`data-perch` on the title, on the 11 `.ht` heading
  words and on the contact heading). Never on paragraphs, the table, the meta card or the pill.
  No gold dust (`dust: false`), so nothing drifts over the text.
- **3D touches:** `data-tilt` (no glare) and `data-depth` on the Boost Tile and its specks,
  `data-reveal-3d` on the end tile, `data-magnetic` on the e-mail pill.
- **No `celebrate()`:** a privacy policy has no success moment, and the calm rule wins.
- **The kit** is `assets/living-layer.js`, a byte-identical copy of the shared kit (v1.2.0). Never
  edit it; copy a newer version over it to update.

**To change its options**, edit the JSON in the `data-living-layer` attribute on the kit's
`<script>` tag at the end of `index.html`:
- `character`: another creature (`bee`, `swallow`, `falcon`, `sunbird`, `firefly`, `spark`) or `none`.
- `size` (46px on desktop) and `mobileScale` (0.75, so 34.5px on phones). A bigger butterfly needs
  a wider phone gutter (see Layout).
- `colors` / `colorsOnDark`: the wing palette on light and dark grounds.
- `calm`, `dust`, `intro`, `introDelay`: behaviour. Keep `calm: true` and `dust: false` on this page.
- `toggle`: the pause button's position and colours.

## How to add a new page in this style

1. Copy `index.html` and keep the `<head>` (fonts, favicon) and the whole `<style>` block, or move
   the style block into `assets/site.css` and link it from both pages with a **relative** URL.
2. Keep the masthead and swap the title and subtitle. Keep exactly one `<h1>`.
3. Put content in `<main>`. For numbered parts, use the section opener markup above with ids
   `s1`, `s2` and so on, and list them in a `nav.toc` with bare numerals.
4. Use only the tokens. A new colour goes into `:root` first, with its contrast checked.
5. Add `data-perch` to a few short headings only, then load `assets/living-layer.js` and
   `assets/boost.js` at the end of `<body>`, both with `defer`, the kit first.
6. Every URL stays relative (`assets/...`, never `/assets/...`): GitHub Pages serves this site
   under `/brainboost_privacy_policy/`.

## Do's and Don'ts

- **Do** keep every word of the policy exactly as written, in the same order, with its `<strong>`
  emphasis. Changing the design is never a reason to touch the wording or the dates.
- **Do** keep the dates as they are unless the policy itself changes; §11 promises that
  "Last Updated" always reflects the real latest version.
- **Do** run the legal-text check, the accessibility check and the screenshots after any change.
- **Don't** add badges, ratings, "GDPR compliant"-style claims, cookie banners, analytics or
  third-party scripts. This page makes zero third-party requests and should stay that way.
- **Don't** put animation, opacity reveals or the companion on the policy text.
- **Don't** use emoji as icons. Icons are the inline SVG symbols in the sprite (`#bb-brain`,
  `#bb-folds`, `#bb-spark`, `#bb-mail`, `#bb-list-up`), drawn with one 1.75 stroke.
