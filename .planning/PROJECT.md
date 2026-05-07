# OrthoHub Landing Page — SEO-Optimized Rebuild

## What This Is

A production-grade, single-file static landing page for **orthohub.ro** — Dr. Bârcă Vadim's PRP therapy clinic in Bucharest. The page faithfully reproduces the visual design and content of the current site, enhanced with comprehensive on-page SEO optimizations targeting the highest Google rankings for PRP therapy searches in Romania (Bucharest focus).

## Core Value

A single `index.html` that loads fast, ranks first for local PRP searches in Bucharest, and converts visitors into booked consultations.

## Context

- **Domain:** orthohub.ro → will point DNS to new static host (Netlify / Vercel / GitHub Pages)
- **Doctor:** Dr. Bârcă Vadim, Orthopedic & Trauma Specialist, Calea Călărașilor 179, Sector 3, București
- **Service:** PRP (Platelet-Rich Plasma) injections for 18+ musculoskeletal conditions
- **Phone:** +40 729 077 770
- **Booking:** Calendly + direct phone
- **Target market:** Romania, Bucharest — Romanian-language and potentially bilingual (RO/EN)

## Goals

1. **Faithful reproduction** — Match current orthohub.ro design, copy, structure, and branding exactly
2. **SEO audit + implementation** — Identify and fix every on-page SEO gap for top Romanian Google rankings
3. **Performance** — All images downloaded, compressed, and converted to WebP; fast TTFB, Core Web Vitals green
4. **Deployment-ready** — Single `index.html` with inlined CSS/JS, self-contained, deployable to static hosts

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Fetch and reproduce orthohub.ro HTML structure, design, and content in index.html
- [ ] Download, compress, and convert all images to WebP; embed locally
- [ ] Run full SEO analysis (technical, on-page, local, structured data)
- [ ] Implement all SEO findings: meta tags, title, OG tags, canonical, lang attribute, hreflang
- [ ] Add LocalBusiness + MedicalBusiness JSON-LD structured data (Schema.org)
- [ ] Implement FAQ schema for the FAQ section
- [ ] Add breadcrumb and review schemas where applicable
- [ ] Optimize for Core Web Vitals (LCP, CLS, FID/INP)
- [ ] Add sitemap.xml and robots.txt
- [ ] Inline critical CSS; defer non-critical assets
- [ ] Implement proper heading hierarchy (H1→H2→H3)
- [ ] Geo-target for Bucharest: geo meta tags, local keywords in copy
- [ ] Add HTTPS-ready canonical URL (https://orthohub.ro)
- [ ] Verify mobile responsiveness and viewport meta tag
- [ ] Add Open Graph + Twitter Card meta tags for social sharing

### Out of Scope

- Backend / server-side logic — static file only
- CMS or admin interface — not needed for single-page deployment
- Multi-page site structure — single landing page only
- Paid ads / Google Ads integration — organic SEO only
- Multilingual content creation — existing Romanian copy is used as-is

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Single index.html | Simplest to deploy on static hosts; no build toolchain needed | — Pending |
| Static hosting (Netlify/Vercel/GitHub Pages) | Free tier, global CDN, HTTPS auto-provisioned | — Pending |
| WebP images embedded locally | Fast loads + modern format = better Core Web Vitals | — Pending |
| JSON-LD over microdata | Google-recommended; doesn't require HTML changes to structured data | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-07 after initialization*
