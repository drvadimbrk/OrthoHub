---
type: quick
slug: restyle-carpal-cluster
status: complete
completed: 2026-09-17
---
# Summary: Restyle carpal-tunnel cluster (batch 1)

Restyled 6 pages to the OrthoHub shell: tunel-carpian-simptome, tunel-carpian-ecoghidat-vs-clasic, operatie-tunel-carpian-cost, diabet-zaharat-tunel-carpian, sindrom-metabolic-tunel-carpian, meralgie-parestezica.

- The 5 olive-template pages were converted with a script: token remap, Playfair/DM Sans, dark hero from the first section, gold buttons, black final CTA, and the oh- nav, crumbs, footer, WhatsApp button and call bar.
- meralgie-parestezica (teal landing template) was converted by hand:
  - dark hero, with the SVG recolored to the new palette
  - the photo placeholder now shows the real doctor webp
  - the Calendly widget points to calendly.com/vadim-brk/30min
  - its own header, footer and mobile bar were replaced by the shell
- Placeholders removed:
  - tunel-carpian-simptome: the Google reviews section (fake 4,9 score, [Nume pacient] ×3)
  - TODO comments in the page body
- Internal links now point to /articole/<slug>. /recuperare-tunel-carpian → /articole/tunel-carpian#interventie.
- Final CTA: the phone is a tel: link and the address is Calea Călărașilor 179, Sector 3.
- tunel-carpian: "Ofertă personalizată" → "6.000 lei", matching the cost page.
- Head SEO (canonical, og, schema) is unchanged. Task 9 handles it.
- Checked with desktop screenshots of simptome, cost, diabet and meralgie.
