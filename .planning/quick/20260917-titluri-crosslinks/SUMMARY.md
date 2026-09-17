---
slug: titluri-crosslinks
status: complete
date: 2026-09-17
---
# Summary — Task 10

- Distinct intent for overlapping pages (title, meta description, og:title/og:description, JSON-LD webpage name/headline/description):
  - articol-leziune-menisc-prp-kineto → "Leziune de menisc: PRP + kinetoterapie vs artroscopie – ce arată studiile"
  - articol-gonartroza-prp → "Gonartroza (artroza genunchiului): cauze, simptome și tratament"
  - prp-genunchi-bucuresti-dr-birca → "Injecții PRP la genunchi în București: indicații, procedură, rezultate"
  - ruptura-de-menisc unchanged (decision guide). Stale "2025/2026" and county lists removed from these titles.
- `<aside class="oh-related" id="articole-similare">` added to 21 pages (EN pages link each other), replaced on prp-genunchi. All 33 articles now have exactly one.
- Menisc trio (ruptura / leziune-prp-kineto / studiu-10-ani) and knee pages (gonartroza / prp-genunchi / acid-hialuronic) cross-link.
- assets/article.css: guards against legacy page rules (aside sticky, h2 max-width/::before, a:hover underline).
- Verified: 1 title/og:title/related/footer/JSON-LD per page, JSON parses, 0 dead /articole links; visual check desktop + mobile.
