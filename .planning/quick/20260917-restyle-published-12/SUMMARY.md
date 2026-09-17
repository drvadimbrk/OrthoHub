---
type: quick
slug: restyle-published-12
status: complete
completed: 2026-09-17
---
# Summary: Restyle the 12 previously published articles

**Pages restyled:** articol-prp-acid-hialuronic-cortizon, articol-prp-ortobiologice-birca, articol-prp-ortopedie, infiltratii-intraarticulare-orthohub, literatura-ortobiologice-dr-birca, orthohub-coxartroza-prp-acid-hialuronic, orthohub-supraspinos-prp, prp-24-intrebari-orthohub, prp-genunchi-bucuresti-dr-birca, prp-vs-celule-stem-vs-exozomi, sanatatea-articulatiilor-dupa-40-ani, terapie-exozomi-articulara.

**Verified on each page:**
- exactly 1 oh-call-bar, 1 oh-wa and 1 oh-related
- no waPulse and no back-nav left
- links check passes

**Page-level fixes:**
- literatura: 6 jeffreypengmd.com links dropped. The visible "Cuvinte cheie SEO" footer is gone along with the old footer.
- terapie-exozomi:
  - the portrait placeholder is replaced by the real doctor webp
  - the references paragraph is kept as its own section
  - a dead stickyBar script line is removed, since it would have thrown
- sanatatea / infiltratii / durere-umar: placeholder phone 0700 000 000 → +40 729 077 770.
- articol-prp-ortopedie: the #contact button (dead anchor) now points to Calendly.

**Tool changes:**
- Shell footer now has a medical disclaimer (RO/EN), also backfilled on the 14 earlier pages.
- Colors: only strongly saturated colors (s ≥ .4) map to gold. Muted slates map to warm greys, which fixed gold body text.
- Batches 4 and 5 were re-run from backups with this rule.
