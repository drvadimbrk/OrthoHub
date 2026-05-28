---
phase: "01"
plan: "01-skeleton"
subsystem: "frontend"
tags: [html, css, hero, nav, skeleton, PRP, orthohub]
dependency_graph:
  requires: []
  provides: [index.html]
  affects: [all-subsequent-plans]
tech_stack:
  added:
    - HTML5 single-file architecture
    - Google Fonts: Playfair Display (headings) + DM Sans (body)
    - Inline CSS via <style> block in <head>
    - Deferred JS via <script> block before </body>
  patterns:
    - Single-file: all CSS inlined, all JS inlined
    - CSS custom properties (--color-*, --font-*, --max-width)
    - BEM-inspired class naming (.hero__title, .top-bar__phone, etc.)
    - Responsive via media queries (1024px, 768px, 480px)
key_files:
  created:
    - index.html
  modified: []
decisions:
  - "Use #1A1A2E (deep navy) + #E8B86D (warm gold) + #000000 (nav bar) color palette — extracted from live orthohub.ro kit CSS (post-4.css)"
  - "Hero background is white (#FFFFFF) with dark text — matches live site section background, not dark mode"
  - "Fonts: Playfair Display for h1 (58px/700), DM Sans for body/CTAs — extracted from live site Elementor kit"
  - "Hero image column is a placeholder div; actual assets/hero.webp added in Plan 03"
metrics:
  duration: "~15 minutes"
  completed: "2026-05-07"
  tasks: 2
  files: 1
---

# Phase 1 Plan 01: Skeleton Summary

**One-liner:** Single-file HTML5 skeleton with black sticky nav, white hero section, and gold CTA buttons — colors and fonts extracted verbatim from live orthohub.ro Elementor CSS.

## What Was Built

Created `index.html` at `C:\Users\fraul\Documents\Orthohub\index.html` — a valid, browser-openable HTML5 document (543 lines) containing:

### Task 1: HTML5 Shell + Nav Bar

- Valid `<!DOCTYPE html>` with `<html lang="ro">`, `<meta charset="UTF-8">`, viewport meta
- Google Fonts: Playfair Display + DM Sans loaded via `<link>` tags in `<head>`
- Single `<style>` block in `<head>` with complete inlined CSS (no external .css files)
- Sticky top bar (`header.top-bar`) with:
  - Brand name "OrthoHub" (Playfair Display, left side)
  - Address: "Calea Călărașilor 179, Sector 3, București" (center-left)
  - Clickable phone: `<a href="tel:+40729077770">+40 729 077 770</a>` (right, gold accent)
  - Booking CTA button linking to Calendly (right)
- Single `<script>` block before `</body>` (empty, ready for future JS)

### Task 2: Hero Section

- `<section class="hero">` with two-column flex layout (text left, image placeholder right)
- `<h1>` with verbatim Romanian heading: "Tratează-ți sursa durerii"
- Subtitle paragraph verbatim: "PRP este soluția naturală care regenerează sănătatea articulară..."
- Three value props with gold checkmark icons (SVG data-URI):
  - "Programare rapidă"
  - "Consultație individuală"
  - "Rezultate vizibile instant"
- Gold CTA button linking to `https://calendly.com/vadim-brk/30min` with text "Programează-te singur"
- Placeholder div for hero image (assets/hero.webp — added in Plan 03)
- Section placeholder comments for Plans 02+ sections

## Colors Extracted from Live Site (orthohub.ro)

Source file: `https://orthohub.ro/wp-content/uploads/elementor/css/post-4.css` (Elementor kit global CSS)

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-primary` | `#1A1A2E` | Deep navy — main dark color, text, button text |
| `--color-secondary` | `#16213E` | Darker navy — secondary backgrounds |
| `--color-text-light` | `#F0EDE8` | Warm off-white — text on dark backgrounds |
| `--color-accent` | `#E8B86D` | Warm gold — CTAs, phone link, checkmark icons |
| `--color-accent-hover` | `#d4a45a` | Darker gold — CTA hover state |
| `--color-nav-bg` | `#000000` | Pure black — sticky header background |
| `--color-hero-bg` | `#FFFFFF` | White — hero section background |
| `--color-muted` | `#555565` | Dark muted — subtitle/paragraph text |

## Fonts Identified from Live Site

Source file: `https://orthohub.ro/wp-content/uploads/elementor/css/post-4.css`

| Font | Family | Weight | Size | Usage |
|------|--------|--------|------|-------|
| Playfair Display | Serif | 700, 800 | 58px desktop / 42px tablet / 32px mobile | H1 headings |
| DM Sans | Sans-serif | 300, 400, 500, 600, 700 | 18px body / 17px props / 16px nav | Body, CTAs, nav |

## Architecture Confirmed

| Rule | Status |
|------|--------|
| D-04: All CSS in `<style>` in `<head>` | PASS — single style block, no external .css |
| D-05: All JS in `<script>` before `</body>` | PASS — single script block, no external .js |
| D-06: Google Fonts via `<link>` tag | PASS — DM Sans + Playfair Display |
| D-11: Calendly URL = https://calendly.com/vadim-brk/30min | PASS — confirmed from live site |
| D-12: Phone href="tel:+40729077770" | PASS |
| D-13: Address exact text | PASS |

## Deviations from Plan

### Minor Adjustments (within Claude's discretion per D-01)

**1. Hero heading marked up with span for accent color**
- Plan specified: `Tratează-ți sursa durerii` (flat text in h1)
- Implemented: `Tratează-ți sursa <span class="hero__title-accent">durerii</span>` — gold accent on "durerii"
- Reason: Live site uses this exact pattern (Elementor heading with colored span on last word)
- Impact: Purely cosmetic, no content change

**2. Address placed in `<address>` element inside nav**
- Plan specified: `<span class="top-bar__address">`
- Implemented: `<address class="top-bar__address">` with `font-style: normal`
- Reason: Semantic HTML5 improvement — `<address>` is the correct element for location info
- Impact: Zero visual change; improves accessibility and semantic correctness

**3. Hero image column contains placeholder div (not empty)**
- Plan specified: empty `<div class="hero__image">` with comments
- Implemented: div with styled `.hero__image-placeholder` child div
- Reason: Provides visual feedback in browser that the column exists (debugging/preview aid)
- Impact: No content change; placeholder will be replaced by `<img>` in Plan 03

## Known Stubs

| Stub | File | Location | Reason |
|------|------|----------|--------|
| Hero image placeholder | index.html | `.hero__image-placeholder` div | Real image (assets/hero.webp) added in Plan 03 |
| Logo image | index.html | `.top-bar__logo` (text fallback only) | Logo PNG/WebP downloaded in Plan 03 |

These stubs do NOT prevent the plan's goal from being achieved — the hero text, CTAs, and nav are fully functional.

## Threat Surface Scan

No new surface beyond plan's threat model:
- Static href attributes only (no dynamic URL construction)
- Inline script block is empty
- No user input fields on this plan
- Google Fonts CDN leaks page URL to Google — accepted (T-01-02, public page)

## Self-Check

### Created files exist:
- `C:\Users\fraul\Documents\Orthohub\index.html` — FOUND (543 lines)
- `.planning\phases\01-content-assets\01-skeleton-SUMMARY.md` — this file

### Acceptance criteria verified:
- `<!DOCTYPE html>` present — PASS
- `<html lang="ro">` present — PASS
- `<meta charset="UTF-8">` present — PASS
- `<meta name="viewport"` present — PASS
- `href="tel:+40729077770"` present — PASS
- "Calea Călărașilor 179, Sector 3, București" present — PASS
- `<style>` block in `<head>` — PASS (no external .css)
- `<script>` block before `</body>` — PASS
- Google Fonts `<link>` tag — PASS
- "Tratează-ți sursa durerii" (verbatim) — PASS
- Three value props verbatim — PASS
- "Programează-te singur" with Calendly href — PASS
- `class="hero"` present — PASS
- Exactly 1 `<h1>` tag — PASS (count: 1)
- No "lorem ipsum" — PASS
- No external .css link (besides Google Fonts) — PASS

## Self-Check: PASSED
