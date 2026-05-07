# Requirements: OrthoHub Landing Page — SEO-Optimized Rebuild

**Defined:** 2026-05-07
**Core Value:** A single index.html that loads fast, ranks first for local PRP searches in Bucharest, and converts visitors into booked consultations.

## v1 Requirements

### Content Reproduction

- [ ] **CONT-01**: index.html reproduces the full visual layout of orthohub.ro (sections, colors, typography, spacing)
- [ ] **CONT-02**: All text content from orthohub.ro is faithfully reproduced (headings, body copy, CTA labels, FAQ answers)
- [ ] **CONT-03**: Navigation, phone number (+40 729 077 770), and address (Calea Călărașilor 179, Sector 3) are present and correct
- [ ] **CONT-04**: Doctor profile section (Dr. Bârcă Vadim) and credentials are fully reproduced
- [ ] **CONT-05**: Patient testimonials/reviews section is reproduced
- [ ] **CONT-06**: Treatment steps (blood collection → centrifugation → injection) section is reproduced
- [ ] **CONT-07**: Conditions list (18+ conditions) is reproduced
- [ ] **CONT-08**: FAQ section with all questions and answers is reproduced
- [ ] **CONT-09**: Booking CTAs (Calendly link + phone) are present and functional

### Assets

- [ ] **ASSET-01**: All images from orthohub.ro are downloaded and stored locally in an `assets/` folder
- [ ] **ASSET-02**: All images are converted to WebP format with appropriate quality settings
- [ ] **ASSET-03**: All images have explicit `width` and `height` attributes to prevent CLS
- [ ] **ASSET-04**: Images have descriptive, keyword-rich `alt` attributes in Romanian
- [ ] **ASSET-05**: Hero/above-fold image is preloaded with `<link rel="preload">`
- [ ] **ASSET-06**: Below-fold images use `loading="lazy"`

### On-Page SEO

- [ ] **SEO-01**: `<html lang="ro">` attribute set correctly
- [ ] **SEO-02**: Title tag is optimized: primary keyword + brand + location (≤60 chars)
- [ ] **SEO-03**: Meta description is compelling and keyword-rich (≤160 chars), includes city
- [ ] **SEO-04**: Canonical tag set to `https://orthohub.ro`
- [ ] **SEO-05**: Heading hierarchy is correct: single H1 with primary keyword, H2s for sections, H3s for subsections
- [ ] **SEO-06**: Primary keyword "tratament PRP București" (or equivalent) appears in H1, first paragraph, and naturally throughout body
- [ ] **SEO-07**: Local keywords integrated: "PRP Sector 3", "PRP București", "medic ortoped București"
- [ ] **SEO-08**: Geo meta tags added: `geo.region`, `geo.placename`, `geo.position`, `ICBM`
- [ ] **SEO-09**: `robots` meta tag set to `index, follow`
- [ ] **SEO-10**: Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale` (ro_RO)
- [ ] **SEO-11**: Twitter Card meta tags added
- [ ] **SEO-12**: `hreflang="ro"` + `hreflang="x-default"` added for language targeting
- [ ] **SEO-13**: Internal anchor links use descriptive text (no "click here")
- [ ] **SEO-14**: Phone number is clickable `tel:` link for mobile users

### Structured Data (Schema.org JSON-LD)

- [ ] **SCHM-01**: `MedicalBusiness` (or `Physician`) JSON-LD with name, address, telephone, openingHours, geo coordinates
- [ ] **SCHM-02**: `LocalBusiness` schema includes `@type: MedicalClinic`, `priceRange`, `servesCuisine` equivalent fields
- [ ] **SCHM-03**: `FAQPage` JSON-LD covering all FAQ items on the page
- [ ] **SCHM-04**: `Person` schema for Dr. Bârcă Vadim with jobTitle, worksFor, medicalSpecialty
- [ ] **SCHM-05**: `AggregateRating` schema if patient review scores are available
- [ ] **SCHM-06**: `BreadcrumbList` schema for the page

### Performance & Core Web Vitals

- [ ] **PERF-01**: Critical CSS is inlined in `<head>`; no render-blocking stylesheets
- [ ] **PERF-02**: All JavaScript is deferred or async
- [ ] **PERF-03**: Page passes Core Web Vitals thresholds: LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] **PERF-04**: Total page weight (HTML + inlined assets) < 500KB uncompressed
- [ ] **PERF-05**: Font loading uses `font-display: swap`
- [ ] **PERF-06**: `<meta name="viewport" content="width=device-width, initial-scale=1">` is set

### Deployment Artifacts

- [ ] **DEPL-01**: `sitemap.xml` is created with correct URL (https://orthohub.ro) and lastmod date
- [ ] **DEPL-02**: `robots.txt` allows all crawlers and references sitemap URL
- [ ] **DEPL-03**: `_headers` file (Netlify) or equivalent sets security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Content-Security-Policy`
- [ ] **DEPL-04**: `_redirects` or `netlify.toml` ensures HTTP → HTTPS redirect
- [ ] **DEPL-05**: All files deploy as a valid static site (index.html + assets/ + sitemap.xml + robots.txt)

## v2 Requirements

### Analytics & Tracking

- **ANLT-01**: Google Analytics 4 snippet integrated
- **ANLT-02**: Google Search Console verification meta tag added
- **ANLT-03**: Conversion event tracking for Calendly booking clicks
- **ANLT-04**: Call tracking for tel: link clicks

### Extended SEO

- **XSEO-01**: Blog/article section for long-tail keyword targeting
- **XSEO-02**: Multilingual version (RO + EN) with proper hreflang
- **XSEO-03**: Google Business Profile link integration

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend / server logic | Static file only — no dynamic functionality |
| CMS or admin panel | Single-file deployment, no content management needed |
| Multi-page structure | Landing page only; single conversion funnel |
| Paid ads / Google Ads | Organic SEO only per project scope |
| New copywriting | Existing Romanian copy reproduced as-is |
| Chat widget / live support | Not part of current site; out of scope |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CONT-01–09 | Phase 1 | Pending |
| ASSET-01–06 | Phase 1 | Pending |
| SEO-01–14 | Phase 2 | Pending |
| SCHM-01–06 | Phase 2 | Pending |
| PERF-01–06 | Phase 2 | Pending |
| DEPL-01–05 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 40 total
- Mapped to phases: 40
- Unmapped: 0 ✓

---
*Requirements defined: 2026-05-07*
*Last updated: 2026-05-07 after initial definition*
