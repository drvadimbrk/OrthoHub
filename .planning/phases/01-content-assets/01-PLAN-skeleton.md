---
id: 01-skeleton
wave: 1
depends_on: []
files_modified:
  - index.html
autonomous: true
requirements:
  - CONT-01
  - CONT-02
  - CONT-03
  - CONT-09

must_haves:
  truths:
    - "Opening index.html in a browser shows a styled page with navigation, address, phone number, and hero section"
    - "Phone number +40 729 077 770 is clickable as a tel: link"
    - "Calendly booking button is present and links to https://calendly.com/vadim-brk/30min"
    - "Hero heading 'Tratează-ți sursa durerii' is visible"
    - "Hero subheading and three value props are present verbatim"
    - "Address 'Calea Călărașilor 179, Sector 3, București' is present in the nav bar"
  artifacts:
    - path: "index.html"
      provides: "Valid HTML5 document, openable in any browser"
      min_lines: 80
      contains: "<!DOCTYPE html>"
    - path: "index.html"
      provides: "Inlined CSS in <head>"
      contains: "<style>"
    - path: "index.html"
      provides: "Navigation with phone CTA"
      contains: "tel:+40729077770"
  key_links:
    - from: "nav bar"
      to: "Calendly booking"
      via: "href link on CTA button"
      pattern: "calendly\\.com/vadim-brk/30min"
    - from: "hero section"
      to: "Calendly CTA"
      via: "anchor button in hero"
      pattern: "Programează-te singur"
---

## Phase Goal

**As a** clinic patient browsing on mobile, **I want to** land on a professional page that immediately shows me the treatment offered, how to book, and how to call the doctor, **so that** I can decide to book a consultation within seconds.

<objective>
Build the Walking Skeleton: a valid, browser-openable HTML5 file with navigation bar, hero section, and booking CTA — all populated with real content fetched from the live orthohub.ro site. No lorem ipsum. No placeholder structure. Real Romanian text from day one.

Purpose: Establish the single-file architecture (HTML + inlined CSS + deferred JS) that all subsequent plans build on. Deliver the above-fold experience that converts first-time visitors.

Output: index.html containing nav bar + hero section with complete inlined CSS and deferred JS block — deployable as a static page immediately.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/STATE.md
@.planning/phases/01-content-assets/01-CONTEXT.md

## Live Site Source

Fetch https://orthohub.ro before writing any HTML. All text content is sourced from the live site.

## Confirmed Content (from live site fetch — use verbatim)

**Calendly URL:** https://calendly.com/vadim-brk/30min
**Phone:** +40 729 077 770 → href="tel:+40729077770"
**Address:** Calea Călărașilor 179, Sector 3, București

**Hero heading:** Tratează-ți sursa durerii
**Hero subheading:** PRP este soluția naturală care regenerează sănătatea articulară și musculară. Bucură-te în sfârșit de mișcare fără durere, fără pastile și fără operații!
**Hero value props (list items):**
- Programare rapidă
- Consultație individuală
- Rezultate vizibile instant
**Hero CTA button text:** Programează-te singur

**Nav layout:** address left, phone right (both visible in top bar), logo/brand center, booking button

## Architecture Rules (from CONTEXT.md decisions)

- D-04: ALL CSS in `<style>` block in `<head>` — no external .css files
- D-05: ALL JS in `<script>` block at end of `<body>` — no external .js files
- D-06: Google Fonts via `<link>` tag in `<head>`
- D-12: Phone CTA must use href="tel:+40729077770"
- D-13: Address must read "Calea Călărașilor 179, Sector 3, București"
- D-11: Calendly URL = https://calendly.com/vadim-brk/30min (confirmed from live site)
</context>

<tasks>

<task type="auto">
  <name>Task 1: Fetch live site and build HTML5 shell + nav bar</name>
  <files>index.html</files>
  <read_first>
    - Fetch https://orthohub.ro to extract nav bar structure, color scheme, font choices, and any logo/brand markup
    - index.html does not yet exist — this task creates it from scratch
  </read_first>
  <action>
    1. Fetch https://orthohub.ro and extract: nav bar layout, brand name/logo, exact colors (background, text, accent), font families used, top-bar address/phone placement.

    2. Create index.html at the project root (C:\Users\fraul\Documents\Orthohub\index.html) as a valid HTML5 document with this structure:

    ```html
    <!DOCTYPE html>
    <html lang="ro">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>OrthoHub – Dr. Bârcă Vadim – Tratament PRP București</title>
      <!-- Google Fonts: extract exact font family from live site; default to Inter + Merriweather if undetectable -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
      <style>
        /* All CSS here — extract exact colors from live site */
        /* Color palette to extract from orthohub.ro (approximate if CSS vars not visible):
           - Primary dark background (likely dark navy or charcoal)
           - Accent color (likely teal, blue, or gold for medical CTA)
           - Text color (white on dark sections, dark on light)
           - Button background/hover states */
        /* Paste full extracted or faithfully-reproduced CSS for: reset, body, nav, top-bar */
      </style>
    </head>
    <body>
      <!-- Top info bar -->
      <div class="top-bar">
        <span class="top-bar__address">Calea Călărașilor 179, Sector 3, București</span>
        <a href="tel:+40729077770" class="top-bar__phone">+40 729 077 770</a>
      </div>
      <!-- Main navigation -->
      <nav class="navbar">
        <!-- Brand/logo extracted from live site -->
        <!-- Nav links if present on live site -->
        <a href="https://calendly.com/vadim-brk/30min" class="btn btn--primary nav__cta">Programează-te</a>
      </nav>

      <!-- Sections added in later tasks -->

      <script>
        // All JS here (Calendly and any interactions added in later plans)
      </script>
    </body>
    </html>
    ```

    3. Write the complete inlined CSS for: CSS reset (box-sizing, margin 0), body font/color/background, top-bar (flex row, address left + phone right, appropriate background — extract from live site), navbar (flex, brand name, links, CTA button with hover state).

    4. Use exact colors from the live site. If CSS variables are not visible, inspect background colors section-by-section: the site likely uses a dark hero background (deep navy or near-black), white/light text, and a warm accent (orange, teal, or blue) for CTAs. Match as closely as possible.

    5. Ensure the top-bar phone number renders as a clickable link: `<a href="tel:+40729077770">+40 729 077 770</a>`.
  </action>
  <verify>
    <automated>powershell.exe -Command "Select-String -Path 'C:\Users\fraul\Documents\Orthohub\index.html' -Pattern 'tel:\+40729077770' | Select-Object -First 1"</automated>
  </verify>
  <acceptance_criteria>
    - index.html exists at C:\Users\fraul\Documents\Orthohub\index.html
    - index.html contains `<!DOCTYPE html>`
    - index.html contains `<html lang="ro">`
    - index.html contains `<meta charset="UTF-8">`
    - index.html contains `<meta name="viewport"`
    - index.html contains `href="tel:+40729077770"`
    - index.html contains `Calea Călărașilor 179, Sector 3, București`
    - index.html contains `<style>` block inside `<head>` (no external CSS link to a .css file)
    - index.html contains `<script>` block (even if empty) before `</body>`
    - index.html contains Google Fonts `<link>` tag pointing to fonts.googleapis.com
    - index.html does NOT contain `href="style.css"` or any external stylesheet link (except Google Fonts)
  </acceptance_criteria>
  <done>Valid HTML5 document exists with top bar (address + clickable phone), navbar with booking CTA, inlined CSS, deferred JS block, and Google Fonts link.</done>
</task>

<task type="auto">
  <name>Task 2: Build hero section with real content and CTA</name>
  <files>index.html</files>
  <read_first>
    - index.html (read current state after Task 1 before modifying)
    - Fetch https://orthohub.ro to confirm hero image URL, hero layout (text left + image right vs full-width background), and exact CTA button styling
  </read_first>
  <action>
    1. Read the current index.html to find the correct insertion point (after `<nav>`, before `<script>`).

    2. Insert the hero section with verbatim Romanian text:

    ```html
    <section class="hero" id="hero">
      <div class="hero__content">
        <h1 class="hero__title">Tratează-ți sursa durerii</h1>
        <p class="hero__subtitle">PRP este soluția naturală care regenerează sănătatea articulară și musculară. Bucură-te în sfârșit de mișcare fără durere, fără pastile și fără operații!</p>
        <ul class="hero__props">
          <li>Programare rapidă</li>
          <li>Consultație individuală</li>
          <li>Rezultate vizibile instant</li>
        </ul>
        <a href="https://calendly.com/vadim-brk/30min" class="btn btn--primary hero__cta">Programează-te singur</a>
      </div>
      <div class="hero__image">
        <!-- Hero image placeholder — assets added in Plan 03 -->
        <!-- Image src will be: assets/hero.webp — dimensions set per D-09 -->
        <!-- Per D-10: hero image does NOT use loading="lazy" -->
      </div>
    </section>
    ```

    3. Add hero CSS to the existing `<style>` block (do not create a new style block — append inside the same block):
       - Hero section: full-width, flex or grid layout, min-height approx 80vh or 100vh matching live site
       - Text column: max-width ~50%, white/light text on dark background
       - h1: large font (extract exact size from live site — likely 48-64px desktop, 32-40px mobile)
       - Subtitle paragraph: lighter weight, appropriate line-height
       - Value props list: icon bullets or checkmarks if present on live site (use Unicode ✓ or CSS ::before as fallback)
       - CTA button: extract exact button color, padding, border-radius, font-weight from live site; include :hover state
       - Hero image area: right column, contains the hero image (placeholder div now, img tag added in Plan 03)
       - Responsive: at ≤768px, stack to single column (image below text or hidden)

    4. After the hero, add a placeholder comment for subsequent sections:
    ```html
    <!-- SECTION: Conditions — added in Plan 02 -->
    <!-- SECTION: PRP Process — added in Plan 02 -->
    <!-- SECTION: Doctor Profile — added in Plan 02 -->
    <!-- SECTION: Testimonials — added in Plan 02 -->
    <!-- SECTION: FAQ — added in Plan 02 -->
    <!-- SECTION: CTA Banner — added in Plan 02 -->
    <!-- SECTION: Footer — added in Plan 02 -->
    ```

    5. Verify the file opens in a browser and the hero text is readable. The page must look intentional — not an unstyled dump of text.
  </action>
  <verify>
    <automated>powershell.exe -Command "Select-String -Path 'C:\Users\fraul\Documents\Orthohub\index.html' -Pattern 'Tratează-ți sursa durerii' | Select-Object -First 1"</automated>
  </verify>
  <acceptance_criteria>
    - index.html contains `Tratează-ți sursa durerii` (verbatim, exact diacritics)
    - index.html contains `PRP este soluția naturală care regenerează sănătatea articulară și musculară`
    - index.html contains `Programare rapidă`
    - index.html contains `Consultație individuală`
    - index.html contains `Rezultate vizibile instant`
    - index.html contains `href="https://calendly.com/vadim-brk/30min"`
    - index.html contains `Programează-te singur`
    - index.html contains `class="hero` (hero section element present)
    - index.html contains `<h1` (exactly one H1 tag)
    - index.html does NOT contain `lorem ipsum` (case-insensitive)
    - index.html does NOT contain placeholder text like "PLACEHOLDER" or "TODO: add content"
  </acceptance_criteria>
  <done>Hero section visible in browser with verbatim Romanian heading, subheading, three value props, and working Calendly CTA button. Page is styled, intentional, and browser-deployable.</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| Third-party scripts (Calendly) | External JS loaded from calendly.com — untrusted third-party origin |
| Google Fonts CDN | External CSS/font files loaded from fonts.googleapis.com and fonts.gstatic.com |
| Static HTML content | No user input at this layer — content is author-controlled |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-01-01 | Tampering | Calendly href link | accept | Link points to verified Calendly URL (https://calendly.com/vadim-brk/30min) extracted from live site. No dynamic construction of URL from user input. Static href attribute — cannot be tampered at runtime without JS injection. |
| T-01-02 | Information Disclosure | Google Fonts `<link>` | accept | Google Fonts leak the page URL to Google servers on font load. Acceptable for a public landing page — no PII involved. Phase 3 can add Referrer-Policy header to limit. |
| T-01-03 | Spoofing | tel: link phone number | accept | Phone number is hardcoded static value — no user input or dynamic construction. No spoofing vector in this plan. |
| T-01-04 | Elevation of Privilege | Inline `<script>` block | mitigate | The inline script block is empty in this plan. No untrusted content is interpolated into the script block. Rule: all JS written in Plan 01 must be static — no `innerHTML` assignments using data fetched from external sources. Enforce via code review of script block contents. |
| T-01-05 | Denial of Service | Google Fonts CDN unavailability | accept | If Google Fonts CDN is down, the page falls back to system fonts. No functional breakage — just visual degradation. Acceptable for Phase 1. Phase 2 (PERF-05) can add font-display:swap and local fallbacks. |
</threat_model>

<verification>
Open index.html in a browser (double-click or `start index.html` in PowerShell from the project root).

Expected result:
1. Page loads without errors in browser console
2. Top bar shows address (Calea Călărașilor 179, Sector 3, București) and clickable phone (+40 729 077 770)
3. Navigation bar renders with booking CTA button
4. Hero section shows "Tratează-ți sursa durerii" as a large heading
5. Three value props (Programare rapidă, Consultație individuală, Rezultate vizibile instant) are listed
6. "Programează-te singur" button links to https://calendly.com/vadim-brk/30min
7. Page is styled (not unstyled HTML dump) — has background color, appropriate font, and visible layout

Run grep verification:
```powershell
Select-String -Path "C:\Users\fraul\Documents\Orthohub\index.html" -Pattern "tel:\+40729077770","Tratează-ți sursa durerii","calendly\.com/vadim-brk","Calea Călărașilor 179"
```
All four patterns must return a match.
</verification>

<success_criteria>
- index.html exists and is a valid HTML5 document
- Page opens in browser and shows styled nav + hero — no unstyled content
- Phone CTA uses href="tel:+40729077770"
- Hero heading is verbatim: "Tratează-ți sursa durerii"
- Calendly CTA links to https://calendly.com/vadim-brk/30min
- Address "Calea Călărașilor 179, Sector 3, București" is present in nav bar
- All CSS is inlined in `<style>` block (no external .css files)
- All JS is in `<script>` block (no external .js files except Google Fonts `<link>`)
</success_criteria>

<output>
After completion, create `.planning/phases/01-content-assets/01-skeleton-SUMMARY.md` with:
- Files created/modified
- Actual colors extracted from orthohub.ro
- Font families identified
- Any deviations from expected live site layout
- Calendly URL confirmed: https://calendly.com/vadim-brk/30min
</output>
