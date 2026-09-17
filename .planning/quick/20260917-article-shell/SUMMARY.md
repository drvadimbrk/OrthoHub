---
status: complete
slug: article-shell
completed: 2026-09-17
---
# Summary: Unified article shell + sample

- New assets/article.css (~150 lines). Adds the "oh-" prefixed shell: nav, breadcrumb bar, related grid, CTA band, footer, WhatsApp float and mobile call bar, all with hub tokens.
- articole/tunel-carpian.html restyled as the reference page:
  - Fonts changed to Playfair Display / DM Sans, color tokens remapped to black/gold, dark hero, gold buttons, dark final CTA.
  - Own header, footer and float removed; shared shell nav, breadcrumb, footer, WhatsApp float and call bar added.
  - Placeholders removed:
    - photo slot → dr-barca-vadim-medic-ortoped-bucuresti.webp
    - credentials → real bio from the homepage #doctor section
    - "[Preț pachet]" → "Ofertă personalizată"
    - fake testimonials section deleted
    - "Sector 3" address TODO → Calea Călărașilor 179
  - Cluster links remapped to /articole/...; the 2 nonexistent links (recuperare, exercitii) replaced with real cluster articles.
- Verified: served locally with clean URLs, all assets return 200, desktop screenshot OK. Headless Edge renders no narrower than 492px, so real 390px QA still needs device emulation.
- Deferred to Task 9: head/SEO (canonical still orthohub.ro/tunel-carpian, og:image missing, schema BreadcrumbList).
