---
type: quick
slug: restyle-teal-batch
status: complete
completed: 2026-09-17
---
# Summary: Restyle teal/Fraunces batch (7 pages)

Pages restyled: amiloidoza-de-dializa, amiloidoza-sindrom-tunel-carpian, durere-sold-noaptea, ecografie-musculoscheletala, hidartroza-genunchi-artrita-psoriazica, leziune-hamstring-prp, tenosinovita-de-quervain.

**New tool** (scratchpad theme.js):
- Maps fonts to Playfair Display and DM Sans.
- Maps colors by hue and lightness onto the black/gold palette. Red and green are preserved.
- Removes elements with balanced tag matching, then inserts the shell.
- Remaps links using a table of dead URLs.
- Replaces [URL_CALENDLY] and removes TODO comments.

**Page-level changes:**
- ecografie + hamstring: removed the link to the nonexistent /assets/orthohub.css.
- ecografie: the missing /assets/img/dr-vadim-birca-ecografie.jpg is replaced by the real doctor webp, with an honest alt text.
- Links: /chist-baker/ dropped (no page). All other internal links resolve (link check passed).

**assets/article.css:**
- Resets that stop legacy nav{}/footer{} rules leaking into the shell.
- Global heading weight of 500.

**Design decision:** long-form editorial pages keep a light hero under the dark nav and crumbs. Landing-style pages get a dark hero.
