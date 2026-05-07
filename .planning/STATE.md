# STATE: OrthoHub Landing Page — SEO-Optimized Rebuild

**Initialized:** 2026-05-07  
**Project Code:** orthohub-landing-seo-rebuild  
**Mode:** MVP

---

## Project Reference

**Core Value:** A single index.html that loads fast, ranks first for local PRP searches in Bucharest, and converts visitors into booked consultations.

**What This Delivers:**
- Single-file static landing page (`index.html`) with inlined CSS/JS
- Faithful reproduction of orthohub.ro visual design and all content
- Comprehensive on-page SEO for local Bucharest PRP searches
- 18+ conditions, doctor profile, testimonials, FAQ, booking CTAs
- WebP-optimized images, Core Web Vitals green
- Production-ready for Netlify/Vercel/GitHub Pages

**Domain:** orthohub.ro  
**Doctor:** Dr. Bârcă Vadim, Orthopedic & Trauma Specialist  
**Service Focus:** PRP (Platelet-Rich Plasma) injections for musculoskeletal conditions  
**Contact:** +40 729 077 770, Calea Călărașilor 179, Sector 3, Bucharest

---

## Current Position

**Phase:** Phase 1 - Content & Assets  
**Status:** Ready to execute (3 plans)  
**Progress:** 0% (0/40 requirements complete)

```
████░░░░░░░░░░░░░░░░ 0%

Phase 1 (Content & Assets)     [████░░░░░░░░░░░░░░░░]  0/15
Phase 2 (SEO & Structured)     [░░░░░░░░░░░░░░░░░░░░]  0/26
Phase 3 (Deployment)           [░░░░░░░░░░░░░░░░░░░░]  0/5
```

**What's Next:** `/gsd-execute-phase 1` — 3 plans ready (skeleton → content → assets)

---

## Performance Metrics

| Metric | Target | Status |
|--------|--------|--------|
| Phase 1 completion | 100% (15/15 reqs) | Pending |
| Phase 2 completion | 100% (26/26 reqs) | Pending |
| Phase 3 completion | 100% (5/5 reqs) | Pending |
| Core Web Vitals | LCP < 2.5s, CLS < 0.1, INP < 200ms | Pending |
| Page weight | < 500KB uncompressed | Pending |
| Google ranking | 1st page for "tratament PRP București" | Pending |

---

## Accumulated Context

### Key Decisions Logged

| Decision | Rationale | Status |
|----------|-----------|--------|
| Single index.html | Simplest to deploy; no build toolchain | Committed |
| Static hosting | Free tier, CDN, HTTPS auto-provisioned | Committed |
| WebP images locally embedded | Fast loads + modern format | Committed |
| JSON-LD structured data | Google-recommended approach | Committed |

### Assumptions

- Current orthohub.ro is accessible for faithfully reproducing content and design
- All images on orthohub.ro are legally owned/licensed and can be republished
- Doctor's contact info and credentials are current and accurate
- Booking flow (Calendly + phone) will remain the only conversion paths
- No dynamic backend required for v1

### Blockers

None currently.

### Questions / TODOs

- [ ] Verify all images from orthohub.ro are legally reproducible
- [ ] Confirm final deployment host (Netlify vs Vercel vs GitHub Pages)
- [ ] Identify exact primary keyword phrase for Phase 2 SEO optimization

---

## Session Continuity

**Last Update:** 2026-05-07 (Phase 1 context gathered)  
**Next Action:** `/gsd-plan-phase 1` — context ready  
**Context Preserved:** PROJECT.md, REQUIREMENTS.md, ROADMAP.md, phases/01-content-assets/01-CONTEXT.md

---

## Quick Reference

**Project Structure:**
```
C:\Users\fraul\Documents\Orthohub\
├── .planning\
│   ├── PROJECT.md
│   ├── REQUIREMENTS.md
│   ├── ROADMAP.md (← you are here)
│   ├── STATE.md (← current file)
│   └── config.json
├── index.html (TBD - Phase 1)
├── assets/ (TBD - Phase 1)
├── sitemap.xml (TBD - Phase 3)
├── robots.txt (TBD - Phase 3)
└── _headers or netlify.toml (TBD - Phase 3)
```

**Contact Info Always Present:**
- Phone: +40 729 077 770 (clickable tel: link)
- Address: Calea Călărașilor 179, Sector 3, Bucharest

**v2 Requirements (out of scope for now):**
- Google Analytics 4 integration
- Google Search Console verification
- Blog/article section
- Multilingual (RO + EN)
- Google Business Profile integration
