---
id: 01-assets
wave: 3
depends_on:
  - 01-content
files_modified:
  - index.html
  - assets/hero.webp
  - assets/dr-vadim-birca.webp
  - assets/prp-therapy.webp
autonomous: true
requirements:
  - CONT-01
  - ASSET-01
  - ASSET-02
  - ASSET-03
  - ASSET-04
  - ASSET-05
  - ASSET-06

must_haves:
  truths:
    - "assets/ directory exists and contains at least 3 image files"
    - "Hero image is referenced with a <link rel=preload> in <head>"
    - "Hero image <img> tag has explicit width and height attributes and does NOT have loading=lazy"
    - "All below-fold images have loading=lazy attribute"
    - "All <img> tags have descriptive alt text in Romanian"
    - "index.html references images as assets/filename.webp (relative paths)"
  artifacts:
    - path: "assets/"
      provides: "Local image storage directory"
    - path: "assets/hero.webp"
      provides: "Hero/above-fold image in WebP format (or original if cwebp unavailable)"
    - path: "assets/dr-vadim-birca.webp"
      provides: "Doctor photo in WebP format"
    - path: "index.html"
      provides: "img tags with width, height, alt, and lazy-load attributes"
      contains: "loading=\"lazy\""
    - path: "index.html"
      provides: "Preload link for hero image"
      contains: "rel=\"preload\""
  key_links:
    - from: "index.html <link rel=preload>"
      to: "assets/hero.webp"
      via: "href attribute"
      pattern: "preload.*assets/"
    - from: "<img> tags in below-fold sections"
      to: "assets/ image files"
      via: "src attribute with relative path"
      pattern: "src=\"assets/"
---

<objective>
Download all images from orthohub.ro into an assets/ directory, convert them to WebP format where possible, and replace all placeholder image divs in index.html with proper `<img>` tags bearing explicit dimensions, descriptive Romanian alt text, appropriate lazy-loading, and a preload link for the hero image.

Purpose: Complete the pixel-perfect reproduction — after this plan the page looks identical to orthohub.ro with all images present. This also delivers all asset-related performance primitives (preload, lazy-load, explicit dimensions) needed by Phase 2 SEO work.

Output: assets/ directory with all images in WebP (or original if cwebp unavailable), index.html updated with real img tags replacing placeholder divs, <link rel="preload"> for hero image in head.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/phases/01-content-assets/01-content-SUMMARY.md
@.planning/phases/01-content-assets/01-CONTEXT.md

## Prerequisite

Plans 01 and 02 complete. index.html has all sections with image placeholder divs/comments:
- Hero section: `<!-- Hero image placeholder — assets added in Plan 03 -->`
- PRP process steps 2 and 3: placeholder comments for process images
- Doctor section: `<!-- Doctor photo placeholder — Plan 03 replaces with: ... -->`

## Image URLs from live site (confirmed from fetch)

| Filename to save as | Source URL | Section | Above/Below fold |
|--------------------|------------|---------|-----------------|
| hero.webp | https://orthohub.ro/wp-content/uploads/2026/04/ChatGPT-Image-Apr-23-2026-05_04_56-AM-e1776909935734.png | Hero | ABOVE fold — no lazy-load |
| prp-therapy.webp | https://orthohub.ro/wp-content/uploads/2026/04/Gemini_Generated_Image_1f3tc21f3tc21f3t-e1777378123198.png | PRP process | Below fold — lazy-load |
| dr-vadim-birca.webp | https://orthohub.ro/wp-content/uploads/2026/04/dr-vadim-birca-752x1024.png | Doctor bio | Below fold — lazy-load |

Note: The doctor image URL contains its natural dimensions in the filename: 752x1024.

## WebP Conversion Rule (D-08)
- Check if cwebp is installed: `cwebp -version`
- If available: convert each PNG to WebP at 85% quality: `cwebp -q 85 input.png -o output.webp`
- If not available: save the original .png files in assets/ but name them with .webp extension is WRONG — keep them as .png and update src attributes accordingly. Add HTML comment: `<!-- TODO: Convert to WebP when cwebp available — currently PNG -->`
- Do NOT block on this. Ship with originals if needed.

## Explicit Dimensions (D-09)
- Hero image: inspect the downloaded file dimensions. Use actual dimensions.
- Doctor photo: 752x1024 (from filename — verify against actual file)
- PRP therapy image: inspect after download to determine actual dimensions

## Alt Text in Romanian (Claude's Discretion per CONTEXT.md)
Required: descriptive, keyword-rich in Romanian. Examples:
- Hero: `alt="Tratament PRP pentru dureri articulare și musculare la clinica OrthoHub București"`
- Doctor: `alt="Dr. Bârcă Vadim, medic specialist ortopedie și traumatologie, clinica OrthoHub București"`
- PRP therapy: `alt="Procedură PRP – centrifugare plasmă bogată în trombocite pentru tratament regenerativ"`

## Architecture Rules (from CONTEXT.md decisions)
- D-07: Download images to assets/ directory
- D-08: Convert to WebP if cwebp available; else keep original format and note it
- D-09: Explicit width + height on every <img>
- D-10: Hero images — no loading="lazy"; below-fold — loading="lazy"
- ASSET-05: Hero/above-fold image preloaded with <link rel="preload" as="image"> in <head>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Download images and create assets/ directory</name>
  <files>assets/hero.webp, assets/prp-therapy.webp, assets/dr-vadim-birca.webp</files>
  <read_first>
    - Fetch https://orthohub.ro to confirm there are no additional images beyond the three identified (Google reviews logo is a third-party asset — skip it; the three content images are the primary set)
    - Check if cwebp is installed by running: cwebp -version
    - Check if assets/ directory exists at C:\Users\fraul\Documents\Orthohub\assets\
  </read_first>
  <action>
    1. Create the assets/ directory if it does not exist:
    ```powershell
    New-Item -ItemType Directory -Path 'C:\Users\fraul\Documents\Orthohub\assets' -Force
    ```

    2. Download each image using PowerShell Invoke-WebRequest or curl:
    ```powershell
    # Hero image
    Invoke-WebRequest -Uri "https://orthohub.ro/wp-content/uploads/2026/04/ChatGPT-Image-Apr-23-2026-05_04_56-AM-e1776909935734.png" -OutFile "C:\Users\fraul\Documents\Orthohub\assets\hero-orig.png"

    # PRP therapy image
    Invoke-WebRequest -Uri "https://orthohub.ro/wp-content/uploads/2026/04/Gemini_Generated_Image_1f3tc21f3tc21f3t-e1777378123198.png" -OutFile "C:\Users\fraul\Documents\Orthohub\assets\prp-therapy-orig.png"

    # Doctor photo
    Invoke-WebRequest -Uri "https://orthohub.ro/wp-content/uploads/2026/04/dr-vadim-birca-752x1024.png" -OutFile "C:\Users\fraul\Documents\Orthohub\assets\dr-vadim-birca-orig.png"
    ```

    3. Check if cwebp is available:
    ```powershell
    try { cwebp -version; $cwebp = $true } catch { $cwebp = $false }
    ```

    4a. IF cwebp IS available, convert all three to WebP at 85% quality:
    ```powershell
    cwebp -q 85 "assets\hero-orig.png" -o "assets\hero.webp"
    cwebp -q 85 "assets\prp-therapy-orig.png" -o "assets\prp-therapy.webp"
    cwebp -q 85 "assets\dr-vadim-birca-orig.png" -o "assets\dr-vadim-birca.webp"
    # Delete originals after successful conversion
    Remove-Item "assets\*-orig.png"
    ```

    4b. IF cwebp is NOT available, rename originals to their final names (keeping .png extension):
    ```powershell
    Rename-Item "assets\hero-orig.png" "hero.png"
    Rename-Item "assets\prp-therapy-orig.png" "prp-therapy.png"
    Rename-Item "assets\dr-vadim-birca-orig.png" "dr-vadim-birca.png"
    # Note: HTML references will use .png extension in this case
    ```

    5. Inspect actual dimensions of each downloaded image using PowerShell:
    ```powershell
    Add-Type -AssemblyName System.Drawing
    $imgs = @("hero","prp-therapy","dr-vadim-birca")
    foreach ($name in $imgs) {
      $file = Get-ChildItem "C:\Users\fraul\Documents\Orthohub\assets\$name.*" | Select-Object -First 1
      $img = [System.Drawing.Image]::FromFile($file.FullName)
      "$name: $($img.Width)x$($img.Height)"
      $img.Dispose()
    }
    ```
    Record the actual dimensions — they are required for Task 2 img tag attributes.

    6. After download, verify files exist and are non-zero size:
    ```powershell
    Get-ChildItem 'C:\Users\fraul\Documents\Orthohub\assets\' | Select-Object Name, Length
    ```
  </action>
  <verify>
    <automated>powershell.exe -Command "Get-ChildItem 'C:\Users\fraul\Documents\Orthohub\assets\' | Where-Object { $_.Length -gt 0 } | Measure-Object | Select-Object -ExpandProperty Count"</automated>
  </verify>
  <acceptance_criteria>
    - Directory C:\Users\fraul\Documents\Orthohub\assets\ exists
    - assets\ contains at least 3 files with non-zero size
    - File named hero.webp OR hero.png exists in assets\
    - File named dr-vadim-birca.webp OR dr-vadim-birca.png exists in assets\
    - File named prp-therapy.webp OR prp-therapy.png exists in assets\
    - No files ending in -orig.png remain in assets\ (originals cleaned up)
    - Actual pixel dimensions of each image are recorded (printed to console or noted for Task 2)
  </acceptance_criteria>
  <done>All three images downloaded to assets/ directory. WebP conversion applied if cwebp available, otherwise original PNGs retained. Actual image dimensions known and ready for Task 2.</done>
</task>

<task type="auto">
  <name>Task 2: Wire images into index.html with preload, lazy-load, dimensions, and alt text</name>
  <files>index.html</files>
  <read_first>
    - index.html (read full current state — locate all placeholder image comments added in Plan 01 Task 2 and Plan 02 Task 1)
    - Check assets/ directory to confirm actual filenames and extensions (.webp vs .png)
    - Use the actual dimensions determined in Task 1 (or fallback values: hero=1200x800, doctor=752x1024, prp-therapy=800x600 if inspection failed)
  </read_first>
  <action>
    1. Determine actual file extension: check if assets/hero.webp exists (WebP conversion succeeded) or assets/hero.png (fallback). Use the correct extension in all src attributes.

    2. Add hero image preload to `<head>` — insert immediately after the Google Fonts `<link>` tags and before `</head>`:
    ```html
    <link rel="preload" href="assets/hero.webp" as="image" type="image/webp">
    <!-- If PNG fallback: <link rel="preload" href="assets/hero.png" as="image" type="image/png"> -->
    ```

    3. Replace hero image placeholder div/comment in the hero section with actual img tag (NO loading="lazy" — above fold per D-10):
    ```html
    <img
      src="assets/hero.webp"
      alt="Tratament PRP pentru dureri articulare și musculare la clinica OrthoHub București"
      width="[ACTUAL_WIDTH_FROM_TASK_1]"
      height="[ACTUAL_HEIGHT_FROM_TASK_1]"
      class="hero__img"
      fetchpriority="high"
    >
    ```
    Use the actual pixel dimensions recorded in Task 1. Do not use placeholder values without at least a good-faith estimate.

    4. Replace the PRP therapy image placeholder in the process section with img tag (below fold — add loading="lazy"):
    ```html
    <img
      src="assets/prp-therapy.webp"
      alt="Procedură PRP – centrifugare plasmă bogată în trombocite pentru tratament regenerativ"
      width="[ACTUAL_WIDTH]"
      height="[ACTUAL_HEIGHT]"
      loading="lazy"
      class="process__img"
    >
    ```

    5. Replace the doctor photo placeholder comment in the doctor section with actual img tag (below fold — add loading="lazy"):
    ```html
    <img
      src="assets/dr-vadim-birca.webp"
      alt="Dr. Bârcă Vadim, medic specialist ortopedie și traumatologie, clinica OrthoHub București"
      width="752"
      height="1024"
      loading="lazy"
      class="doctor__photo-img"
    >
    ```

    6. Add CSS for images to the existing `<style>` block:
    ```css
    .hero__img { width: 100%; height: auto; display: block; }
    .process__img { width: 100%; height: auto; display: block; border-radius: 8px; }
    .doctor__photo-img { width: 100%; height: auto; display: block; border-radius: 12px; }
    /* Prevent layout shift: reserve space using aspect-ratio or explicit height */
    .hero__image { aspect-ratio: [ACTUAL_WIDTH] / [ACTUAL_HEIGHT]; overflow: hidden; }
    ```

    7. Verify no orphaned placeholder comments remain for images:
    ```powershell
    Select-String -Path 'C:\Users\fraul\Documents\Orthohub\index.html' -Pattern '<!-- (Hero|Doctor|process) image placeholder'
    ```
    Should return no matches.

    8. Final file size check — ensure total HTML file is under 500KB:
    ```powershell
    (Get-Item 'C:\Users\fraul\Documents\Orthohub\index.html').Length / 1KB
    ```
  </action>
  <verify>
    <automated>powershell.exe -Command "Select-String -Path 'C:\Users\fraul\Documents\Orthohub\index.html' -Pattern 'loading=\"lazy\"' | Measure-Object | Select-Object -ExpandProperty Count"</automated>
  </verify>
  <acceptance_criteria>
    - index.html contains `<link rel="preload"` with `href="assets/hero` (preload of hero image)
    - index.html contains `as="image"` on the preload link
    - index.html contains at least 2 occurrences of `loading="lazy"` (doctor and PRP therapy images)
    - index.html does NOT contain `loading="lazy"` on the hero `<img>` tag
    - index.html contains `fetchpriority="high"` on the hero `<img>` tag
    - index.html contains `src="assets/hero.webp"` OR `src="assets/hero.png"` (whichever format was saved)
    - index.html contains `src="assets/dr-vadim-birca.webp"` OR `src="assets/dr-vadim-birca.png"`
    - index.html contains `src="assets/prp-therapy.webp"` OR `src="assets/prp-therapy.png"`
    - All three `<img>` tags have explicit `width` attribute with a numeric value
    - All three `<img>` tags have explicit `height` attribute with a numeric value
    - All three `<img>` tags have non-empty `alt` attribute containing Romanian text
    - Hero `<img>` alt contains `București` (keyword-rich)
    - Doctor `<img>` alt contains `Dr. Bârcă Vadim`
    - index.html does NOT contain `<!-- Hero image placeholder` (placeholder cleaned up)
    - index.html does NOT contain `<!-- Doctor photo placeholder` (placeholder cleaned up)
    - index.html HTML file size is less than 500KB (500 * 1024 bytes)
  </acceptance_criteria>
  <done>All images wired into index.html. Hero image is preloaded and not lazy-loaded. Below-fold images use loading="lazy". All img tags have explicit dimensions and descriptive Romanian alt text. No placeholder comments remain. Page is visually complete.</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| External image download (orthohub.ro) | Images fetched from live site during build — one-time download, stored locally |
| assets/ directory | Local files served directly; no server-side processing |
| img src attributes | All paths are relative and hardcoded — no dynamic src construction |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-03-01 | Information Disclosure | Image download from orthohub.ro | accept | Images are downloaded once at build time. No live proxying or dynamic fetching at runtime. After download, the static site serves local files only. No ongoing data leak to third parties at runtime. |
| T-03-02 | Tampering | assets/ image files | accept | Static files served directly. No server-side code processes image requests. Integrity depends on the static host (Netlify/GitHub Pages) — both provide HTTPS. Acceptable for Phase 1. |
| T-03-03 | Denial of Service | Large image files in assets/ | mitigate | WebP conversion at 85% quality (Task 1) reduces file size. If cwebp unavailable and original PNGs are large (>500KB each), Phase 2 PERF tasks will apply further optimization. Add note in SUMMARY if any single image exceeds 300KB. |
| T-03-04 | Spoofing | preload href attribute | accept | Hero image preload uses a relative path (`assets/hero.webp`) — no absolute URL or cross-origin request. Cannot be spoofed at the HTML level without modifying the source file. |
| T-03-05 | Injection | alt text content | accept | Alt text is hardcoded by the author at build time. No user input is interpolated into alt attributes. No injection risk. |
| T-03-06 | Elevation of Privilege | Path traversal via img src | accept | All img src values are relative paths confined to `assets/` directory. No user-controlled input reaches src attributes. Path traversal is not applicable to static HTML. |
</threat_model>

<verification>
After Plan 03 completes, open index.html in a browser and perform a visual check:

1. Hero section: hero image renders (not broken image icon)
2. Doctor section: doctor photo renders
3. PRP process section: therapy image renders
4. No broken image placeholders or empty grey boxes
5. Page layout matches orthohub.ro design with images in place

Run final acceptance check:
```powershell
$html = Get-Content 'C:\Users\fraul\Documents\Orthohub\index.html' -Raw

# Check preload
if ($html -match 'rel="preload".*assets/hero') { "PASS: Hero preload" } else { "FAIL: Hero preload" }

# Check lazy loading present (but not on hero)
$lazyCount = ([regex]::Matches($html, 'loading="lazy"')).Count
if ($lazyCount -ge 2) { "PASS: lazy-load ($lazyCount occurrences)" } else { "FAIL: lazy-load" }

# Check alt text quality
if ($html -match 'alt=".*București.*"') { "PASS: Romanian alt text" } else { "FAIL: Romanian alt text" }

# Check assets exist
$assets = Get-ChildItem 'C:\Users\fraul\Documents\Orthohub\assets\' -ErrorAction SilentlyContinue
if ($assets.Count -ge 3) { "PASS: assets/ has $($assets.Count) files" } else { "FAIL: assets/ missing files" }

# Check file size
$size = (Get-Item 'C:\Users\fraul\Documents\Orthohub\index.html').Length
if ($size -lt 512000) { "PASS: HTML size $([math]::Round($size/1KB,1))KB < 500KB" } else { "WARN: HTML size $([math]::Round($size/1KB,1))KB" }
```
All five checks must return PASS.
</verification>

<success_criteria>
- assets/ directory contains exactly 3 image files (hero, prp-therapy, dr-vadim-birca)
- Images are in WebP format if cwebp was available; otherwise PNG with a note in SUMMARY
- Hero image preloaded via `<link rel="preload" as="image">` in `<head>`
- Hero `<img>` has `fetchpriority="high"`, explicit width/height, descriptive alt text, NO loading="lazy"
- Below-fold images (doctor photo, PRP therapy) have `loading="lazy"`, explicit width/height, descriptive Romanian alt text
- No placeholder image comments remain in index.html
- index.html size under 500KB
- Page opens in browser and all three images render correctly
</success_criteria>

<output>
After completion, create `.planning/phases/01-content-assets/01-assets-SUMMARY.md` with:
- Filenames and extensions of all assets saved (webp or png)
- Actual dimensions of each image (width x height)
- File sizes before and after WebP conversion (or note if cwebp was unavailable)
- Whether cwebp was available and used
- Any images that failed to download and fallback approach taken
- Final index.html file size in KB
- Confirmation: all Phase 1 requirements CONT-01 through CONT-09 and ASSET-01 through ASSET-06 are met
</output>
