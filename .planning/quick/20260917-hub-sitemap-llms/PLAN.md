---
slug: hub-sitemap-llms
date: 2026-09-17
status: complete
---

# Task 11 — articles hub, homepage section, sitemap, llms.txt

Goal: all 34 articles in /articole are discoverable from the hub, the homepage, sitemap.xml and llms.txt.

1. articole/index.html
   - Replace the 12-card grid with 34 cards grouped by topic (Genunchi, Șold și coapsă, Umăr, Mână și încheietură, PRP și terapii regenerative, English).
   - Topic jump links; group h2, card h3.
   - ItemList numberOfItems 34.
   - Drop dates from the cards (the new pages have no real publication dates).
2. index.html #articole: 12 cards, 6 visible + 6 behind "load more", covering every body region. Keep the "Vezi toate articolele" link.
3. sitemap.xml: 34 article URLs (+ homepage and hub), with hreflang-free entries and lastmod 2026-09-17.
4. llms.txt: article list regrouped by topic, 34 links.
5. Verify: every /articole link resolves, JSON parses, and a desktop + mobile screenshot of the hub.
