---
type: quick
slug: restyle-final-8
status: complete
completed: 2026-09-17
---
# Summary: Restyle the last 8 articles

All 34 articles now use the shared shell (`grep -L oh-article` returns only the hub index.html).

**Changes in this batch:**
- EN regenerative page:
  - removed the "Patient Reviews" section (named testimonials, no source)
  - photo placeholder → doctor webp
  - wa.me/40XXXXXXXXX placeholders → real number
- prp-knee (EN):
  - drvadim.ro booking button → Calendly
  - 2 other drvadim.ro links dropped
  - "⭐ Verified Reviews" badge removed
- ruptura-de-menisc / studiu-menisc-10-ani:
  - schema address placeholders filled
  - links to nonexistent radiofrequency and Baker's cyst pages dropped
- gonartroza / menisc-kineto: dead #contact buttons → Calendly.
- tunel-carpian-simptome: deleted the commented-out aggregateRating schema (4.9 with reviewCount "NN").

**Checks:**
- Link check passes on all 34 pages.
- No placeholder classes remain.

**Flagged for the user** (unverified claims on the EN regenerative page, left unedited):
- "500+ international patients", "4.9★ Google Rating verified", "EU-Certified Specialist".
- The price table says PRP knee €110/session, but prp-knee-bucharest says €400/session.
