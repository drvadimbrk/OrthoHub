---
slug: hub-sitemap-llms
date: 2026-09-17
status: complete
---

# Task 11 summary

- articole/index.html: 34 cards in 6 topic groups (Genunchi 7, Șold și coapsă 4, Umăr 2, Mână și încheietură 9, PRP/regenerative 10, In English 2).
  - Topic jump chips at the top; group h2, card h3; EN group lang="en".
  - Dates removed from the cards. H1 and intro widened beyond PRP.
  - ItemList JSON-LD now has numberOfItems 34.
- index.html #articole: 12 cards (6 visible + 6 behind load-more) covering knee, menisc, carpal tunnel, shoulder, hip, comparisons and diagnostics. The link now reads "Vezi toate cele 34 articole medicale".
- sitemap.xml: 36 URLs (home, hub, 34 articles), lastmod 2026-09-17.
- llms.txt: 34 article links grouped by topic, each with a one-line summary.
- Verified:
  - JSON-LD parses on the hub and the homepage; 0 dead /articole links.
  - Screenshots at 1280px and 520px look right.
- Headless Edge has a minimum viewport of 492px, so screenshots narrower than that crop the layout. This explains the earlier "cut nav CTA" note; it is not a bug.
- Script: scratchpad t11.js; backups in scratchpad bak11/.
