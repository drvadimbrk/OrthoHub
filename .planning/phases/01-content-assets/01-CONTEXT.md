# Phase 1: Content & Assets - Context

**Gathered:** 2026-05-07
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver a pixel-perfect, single-file HTML reproduction of orthohub.ro with all images downloaded, converted to WebP, and embedded locally. The output is a working `index.html` + `assets/` folder that faithfully replicates the live site's visual design, all text content, navigation, CTAs, and media — ready for SEO enhancements in Phase 2.

</domain>

<decisions>
## Implementation Decisions

### Development Philosophy
- **D-01:** User wants to get straight into building. Make pragmatic technical choices and build first — user will correct mistakes afterwards. Do not over-analyze or stall on ambiguity.

### Content Acquisition
- **D-02:** The agent MUST fetch the live orthohub.ro website to extract accurate content. Use WebFetch to retrieve the current HTML and identify all text, headings, section structure, contact info, testimonials, FAQ, conditions list, and CTAs. Do not make up content — source it from the live site.
- **D-03:** All Romanian text must be copied verbatim as it appears on the live site — no paraphrasing, no translation, no summarization.

### Styling Architecture
- **D-04:** All CSS goes directly in a `<style>` block in `<head>` of `index.html` from day 1. No separate .css files. This is the final delivery format for the single-file page.
- **D-05:** All JavaScript (Calendly widget, any interaction) goes in a `<script>` block at end of `<body>` or deferred inline. No external .js files.
- **D-06:** Use Google Fonts via `<link>` tag (not self-hosted) for Phase 1. Phase 2 handles font performance optimization.

### Image Handling
- **D-07:** Download all images from orthohub.ro directly using available fetch/download tools. Store in `assets/` directory.
- **D-08:** Convert images to WebP using cwebp CLI if available. If cwebp is not installed, keep images in their original format and add a note — Phase 2 can handle conversion. Do NOT block on tooling availability.
- **D-09:** Set explicit `width` and `height` attributes on every `<img>` tag matching the actual rendered dimensions.
- **D-10:** Hero/above-fold images: use real dimensions, do not lazy-load. Below-fold images: add `loading="lazy"`.

### Booking & CTAs
- **D-11:** For the Calendly booking CTA: inspect the live orthohub.ro page to extract the actual Calendly embed URL or link. If the Calendly URL cannot be determined from the HTML, use `https://calendly.com/orthohub` as a placeholder and add an HTML comment: `<!-- TODO: Replace with actual Calendly URL -->`.
- **D-12:** Phone CTA must use `href="tel:+40729077770"` — the number is +40 729 077 770.
- **D-13:** Address (Calea Călărașilor 179, Sector 3, București) must be present and identical to the source.

### Claude's Discretion
- Exact responsive breakpoints and media query values — match the live site as closely as possible
- Color palette extraction — pick exact hex values from the live site or use closest approximation
- Animation/transition effects — include if present on live site, omit if complex/ambiguous
- Exact font weight/size values — match visual appearance of live site
- Image quality settings for WebP conversion (use 80-85% quality as default)
- Alt text wording — must be descriptive and keyword-rich in Romanian, exact wording is Claude's call

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

No external specs or ADRs — this phase reproduces a live website.

### Source of Truth
- Live site: `https://orthohub.ro` — the primary source for ALL content, layout, images, colors, typography, and structure. Fetch before writing any HTML.

### Project Requirements
- `.planning/REQUIREMENTS.md` — CONT-01 through CONT-09 and ASSET-01 through ASSET-06 are the acceptance criteria for this phase
- `.planning/ROADMAP.md` — Phase 1 success criteria define what "done" looks like

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None — this is a fresh project with no existing code.

### Established Patterns
- None yet — this phase establishes the patterns.

### Integration Points
- `index.html` is the root deliverable; all subsequent phases modify it in-place.
- `assets/` directory holds all images; path references in HTML must be relative (`assets/image.webp`).

</code_context>

<specifics>
## Specific Ideas

- Doctor: Dr. Bârcă Vadim, Orthopedic & Trauma Specialist
- Phone: +40 729 077 770
- Address: Calea Călărașilor 179, Sector 3, București
- Service: PRP (Platelet-Rich Plasma) injections for musculoskeletal conditions
- Conditions list: 18+ conditions (exact list from live site)
- Contact section must be prominent — phone clickable, address visible in header or footer
- Booking flow: Calendly widget/link + phone — both must be functional

</specifics>

<deferred>
## Deferred Ideas

None — user stated they want to build immediately and correct afterwards. All scoped items are implementation decisions, not deferred capabilities.

</deferred>

---

*Phase: 1-content-assets*
*Context gathered: 2026-05-07*
