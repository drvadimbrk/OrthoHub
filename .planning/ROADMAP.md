# ROADMAP: OrthoHub Landing Page — SEO-Optimized Rebuild

**Project:** OrthoHub Landing Page SEO Rebuild  
**Defined:** 2026-05-07  
**Mode:** MVP  
**Granularity:** Coarse (3 phases)

## Phases

- [ ] **Phase 1: Content & Assets** - Reproduce orthohub.ro design and download, optimize, embed all images locally
- [ ] **Phase 2: SEO & Structured Data** - Implement on-page SEO, JSON-LD schemas, and Core Web Vitals optimization
- [ ] **Phase 3: Deployment** - Create sitemap, robots.txt, security headers, and validation for static hosting

## Phase Details

### Phase 1: Content & Assets

**Goal:** Deliver a faithful, pixel-perfect reproduction of orthohub.ro with all images optimized, embedded locally, and ready for SEO enhancements. Mode: MVP

**Depends on:** Nothing (first phase)

**Requirements:** CONT-01, CONT-02, CONT-03, CONT-04, CONT-05, CONT-06, CONT-07, CONT-08, CONT-09, ASSET-01, ASSET-02, ASSET-03, ASSET-04, ASSET-05, ASSET-06

**Success Criteria** (what must be TRUE):
  1. Visual layout matches orthohub.ro exactly — sections, colors, typography, spacing all reproduced
  2. All text content (headings, body, CTAs, FAQ) is present and identical to source
  3. All images are downloaded, converted to WebP, and embedded locally with correct dimensions
  4. Navigation, contact info (+40 729 077 770), and address (Calea Călărașilor 179, Sector 3) are functional and prominent
  5. Booking CTAs (Calendly + direct phone) are clickable and direct users correctly

**Plans:** TBD

---

### Phase 2: SEO & Structured Data

**Goal:** Implement comprehensive on-page SEO, JSON-LD structured data, and performance optimization to achieve top Google rankings for local PRP searches in Bucharest. Mode: MVP

**Depends on:** Phase 1

**Requirements:** SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, SEO-06, SEO-07, SEO-08, SEO-09, SEO-10, SEO-11, SEO-12, SEO-13, SEO-14, SCHM-01, SCHM-02, SCHM-03, SCHM-04, SCHM-05, SCHM-06, PERF-01, PERF-02, PERF-03, PERF-04, PERF-05, PERF-06

**Success Criteria** (what must be TRUE):
  1. Meta tags optimized: title ≤60 chars, description ≤160 chars, both include primary keyword "tratament PRP" + location "București"
  2. Heading hierarchy correct: single H1 with primary keyword, H2s for sections, H3s for subsections
  3. All 6 JSON-LD schemas implemented (MedicalBusiness, LocalBusiness, FAQPage, Person, AggregateRating, BreadcrumbList) and validate without errors
  4. Page passes Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
  5. Critical CSS inlined, all JS deferred, total page weight < 500KB uncompressed

**Plans:** TBD

**UI hint:** yes

---

### Phase 3: Deployment

**Goal:** Create deployment-ready artifacts (sitemap, robots.txt, security headers, redirects) and validate the complete static site for production launch. Mode: MVP

**Depends on:** Phase 2

**Requirements:** DEPL-01, DEPL-02, DEPL-03, DEPL-04, DEPL-05

**Success Criteria** (what must be TRUE):
  1. `sitemap.xml` is generated with correct URL (https://orthohub.ro) and valid XML structure
  2. `robots.txt` allows all crawlers and correctly references sitemap.xml
  3. Security headers configured (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, CSP) via `_headers` or `netlify.toml`
  4. HTTP → HTTPS redirect enforced via `_redirects` or `netlify.toml`
  5. Complete static site deploys successfully to Netlify/Vercel/GitHub Pages with all assets, config, and validation passing

**Plans:** TBD

---

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1 - Content & Assets | 0/? | Not started | — |
| 2 - SEO & Structured Data | 0/? | Not started | — |
| 3 - Deployment | 0/? | Not started | — |

---

## Coverage Summary

**Total v1 requirements:** 40  
**Mapped to phases:** 40  
**Unmapped:** 0 ✓

All requirements are accounted for with zero orphans.
