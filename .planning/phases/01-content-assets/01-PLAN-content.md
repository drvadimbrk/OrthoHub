---
id: 01-content
wave: 2
depends_on:
  - 01-skeleton
files_modified:
  - index.html
autonomous: true
requirements:
  - CONT-02
  - CONT-04
  - CONT-05
  - CONT-06
  - CONT-07
  - CONT-08

must_haves:
  truths:
    - "All 18 conditions are listed verbatim in Romanian"
    - "Doctor bio for Dr. Bârcă Vadim with credentials and expertise areas is present"
    - "Three PRP treatment steps (Recoltare → Centrifugare → Injecție ghidată ecografic) are present"
    - "At least 4 patient testimonials with reviewer names and review text are present"
    - "All 7 FAQ questions and their full answers are present verbatim"
    - "Footer contains credit text and contact information"
  artifacts:
    - path: "index.html"
      provides: "Conditions section with 18+ items"
      contains: "gonartroză"
    - path: "index.html"
      provides: "Doctor bio section"
      contains: "Dr. Bârcă Vadim"
    - path: "index.html"
      provides: "FAQ section"
      contains: "Ce este PRP"
    - path: "index.html"
      provides: "Testimonials section"
      contains: "Toma"
  key_links:
    - from: "FAQ section"
      to: "All 7 questions"
      via: "accordion or static list items"
      pattern: "Ce este PRP"
    - from: "Doctor section"
      to: "Expertise list"
      via: "unordered list items"
      pattern: "Chirurgia minim invazivă"
    - from: "Conditions section"
      to: "18 condition items"
      via: "list or grid items"
      pattern: "Fasciită plantară"
---

<objective>
Add all body content sections to index.html, building on the Walking Skeleton from Plan 01. This plan delivers the complete below-fold content: conditions list, PRP treatment process, doctor profile, testimonials, FAQ, booking CTA banner, and footer — all with verbatim Romanian text sourced from the live site.

Purpose: Complete the content reproduction so that the page is functionally identical to orthohub.ro in all its text and section structure. After this plan, the only missing elements are the downloaded images (Plan 03).

Output: index.html with all sections rendered and styled, using image placeholder divs where actual downloaded images will go in Plan 03.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/phases/01-content-assets/01-skeleton-SUMMARY.md
@.planning/phases/01-content-assets/01-CONTEXT.md

## Prerequisite

Plan 01 (skeleton) must be complete. index.html already contains nav bar + hero section + inlined CSS + deferred JS block. This plan APPENDS sections by replacing the placeholder comments.

## Content to Implement (verbatim from live site)

### Section Order (from live site)
1. Conditions Treated (18 items)
2. PRP Process (3 steps)
3. Doctor Bio
4. Testimonials
5. FAQ (7 questions)
6. CTA / Booking banner
7. Footer

### Conditions List (all 18 — verbatim)
Artroza de genunchi (gonartroză), Rupturi parțiale de coafă rotatorie, Epicondilită laterală, Epicondilită medială, Tendinopatia coafei rotatorilor, Tendinopatia ahiliană, Fasciită plantară, Leziuni de ischiogambieri, Bursită de șold, Tendinopatie gluteală, Tendinopatie patelară, Tendinopatie de cvadriceps, Artroza de șold (coxartroză), Artroza de umăr, Artroza de gleznă, Artroza policelui (rizartroză), Tendinopatie de pumn, Tendinopatie de gleznă

### PRP Process Steps (verbatim)
1. Recoltare — "Preluăm mică cantitate de sânge din brațul tău"
2. Centrifugare — "Concentrăm trombocitele"
3. Injecție ghidată ecografic

### Doctor Bio (verbatim)
Name: Dr. Bârcă Vadim
Title: Medic Specialist Ortopedie și Traumatologie
Bio text: "Parcursul meu în medicină a început în anul 2009 la Universitatea de Medicină și Farmacie din Craiova, fiind urmat de o etapă esențială de formare ca medic rezident în Ortopedie și Traumatologie în centrul universitar Târgu Mureș."
Expertise areas:
- Chirurgia minim invazivă a șoldului cu protezare prin incizii minime
- Chirurgia mâinii sub anestezie locală
- Ecografie Musculoscheletală și Intervenții Ghidate (2025)
- Medicină Regenerativă utilizând resursele proprii ale organismului

### Testimonials (verbatim)
- Toma: "Un doctor foarte bun! Are rabdare, rezolva repede problemele pacientilor, are resursele necesare și este foarte intelegator."
- Flory Trofin: "După tratament, am putut să scap de dureri la umăr. Explică pe înțelesul tuturor, urmărește evoluția pacientului, caută cel mai bun tratament."
- Dana Nanu: "Mi-a făcut o injecție la genunchi și pot merge. Nu mai puteam merge de o lună în acel picior."
- belghir gabriel: "Am fost foarte plăcut surprins să nu simt absolut nimic, nici în timpul intervenției, nici după."

### FAQ (7 questions — verbatim questions and full answers)
Q1: Ce este PRP și cum funcționează pentru articulații și mușchi?
A1: "PRP (Plasmă Îmbogățită cu Trombocite) este un tratament regenerativ care folosește propriul tău sânge. Dintr-o probă recoltată, extragem plasma bogată în factori de creștere și o reinjectăm direct în zona afectată. Acești factori stimulează repararea fără intervenție chirurgicală."

Q2: Câte ședințe de PRP sunt necesare?
A2: "În majoritatea cazurilor, protocolul standard implică 3 ședințe, la interval de 2–4 săptămâni. Severitatea și răspunsul individual determină necesitatea unui ciclu complet și eventual reluare după 6–12 luni."

Q3: PRP doare? Cum decurge procedura?
A3: "Procedura este minim invazivă. Se recoltează 10–30 ml de sânge, similar unui analize de rutină. Proba este centrifugată, apoi injectată sub ghidaj ecografic cu disconfort minimal."

Q4: Cât durează până apar rezultatele PRP?
A4: "Primele îmbunătățiri apar de obicei între 3 și 6 săptămâni de la prima ședință. Efectul maxim se observă la 3–6 luni după finalizarea protocolului."

Q5: Există riscuri sau efecte secundare la PRP?
A5: "Deoarece plasma provine din propriul tău sânge, riscul de reacții alergice este practic zero. Efectele secundare minore includ ușoară durere locală, umflătură sau vânătaie care dispar în 2–3 zile."

Q6: Este nevoie de repaus după injecția PRP?
A6: "Recomandăm evitarea efortului fizic intens 48–72 de ore după procedură. Activitățile zilnice normale se reiau a doua zi."

Q7: Pentru ce afecțiuni musculoscheletale este recomandat PRP?
A7: "PRP este indicat pentru: gonartroza, tendinite cronice, fasciită plantară, dureri de umăr, coxartroză, leziuni musculare și ligamentare, hernie de disc în faze incipiente, și recuperare post-accidentare sportivă."

### Key Facts (live site — embed in relevant sections)
- "100% natural"
- "Precizie ecografică"
- "Susținut de știință - Peste 40 de studii clinice"
- "Pleci acasă în aceeași zi"

## Architecture Rules (from CONTEXT.md)
- D-03: Romanian text verbatim — no paraphrasing
- D-04: All CSS in existing `<style>` block in `<head>` — append, do not add a second `<style>` tag
- D-05: All JS in existing `<script>` block at end of `<body>`
- D-09: img tags get explicit width + height (use placeholder values now — actual dimensions set in Plan 03)
- D-10: Hero images no lazy-load; all images in this section ARE below fold → use loading="lazy"
</context>

<tasks>

<task type="auto">
  <name>Task 1: Add conditions, PRP process, and doctor bio sections</name>
  <files>index.html</files>
  <read_first>
    - index.html (read full current state — specifically locate the placeholder comments added in Plan 01 Task 2 for insertion points)
    - Fetch https://orthohub.ro to confirm conditions section heading text, PRP process section heading, doctor section heading, and any icon/badge markup around the four key facts (100% natural, Precizie ecografică, etc.)
  </read_first>
  <action>
    1. Read index.html and locate `<!-- SECTION: Conditions — added in Plan 02 -->` comment.

    2. Replace the Conditions placeholder comment with the full conditions section:

    ```html
    <section class="conditions" id="afectiuni">
      <div class="container">
        <h2 class="section-title">Afecțiuni tratate cu PRP</h2>
        <!-- Fetch live site to confirm the exact section subtitle if present -->
        <ul class="conditions__grid">
          <li>Artroza de genunchi (gonartroză)</li>
          <li>Rupturi parțiale de coafă rotatorie</li>
          <li>Epicondilită laterală</li>
          <li>Epicondilită medială</li>
          <li>Tendinopatia coafei rotatorilor</li>
          <li>Tendinopatia ahiliană</li>
          <li>Fasciită plantară</li>
          <li>Leziuni de ischiogambieri</li>
          <li>Bursită de șold</li>
          <li>Tendinopatie gluteală</li>
          <li>Tendinopatie patelară</li>
          <li>Tendinopatie de cvadriceps</li>
          <li>Artroza de șold (coxartroză)</li>
          <li>Artroza de umăr</li>
          <li>Artroza de gleznă</li>
          <li>Artroza policelui (rizartroză)</li>
          <li>Tendinopatie de pumn</li>
          <li>Tendinopatie de gleznă</li>
        </ul>
      </div>
    </section>
    ```

    3. Replace the PRP Process placeholder comment with:

    ```html
    <section class="process" id="procedura">
      <div class="container">
        <h2 class="section-title">Cum funcționează tratamentul PRP</h2>
        <div class="process__steps">
          <div class="process__step">
            <div class="process__step-number">1</div>
            <h3>Recoltare</h3>
            <p>Preluăm mică cantitate de sânge din brațul tău</p>
          </div>
          <div class="process__step">
            <div class="process__step-number">2</div>
            <h3>Centrifugare</h3>
            <p>Concentrăm trombocitele</p>
            <!-- Image placeholder: assets/process-centrifuge.webp — Plan 03 adds actual img tag -->
          </div>
          <div class="process__step">
            <div class="process__step-number">3</div>
            <h3>Injecție ghidată ecografic</h3>
            <!-- Image placeholder: assets/process-injection.webp — Plan 03 adds actual img tag -->
          </div>
        </div>
        <div class="process__facts">
          <div class="process__fact">100% natural</div>
          <div class="process__fact">Precizie ecografică</div>
          <div class="process__fact">Susținut de știință — Peste 40 de studii clinice</div>
          <div class="process__fact">Pleci acasă în aceeași zi</div>
        </div>
      </div>
    </section>
    ```

    4. Replace the Doctor Profile placeholder comment with:

    ```html
    <section class="doctor" id="doctor">
      <div class="container">
        <div class="doctor__layout">
          <div class="doctor__photo">
            <!-- Doctor photo placeholder — Plan 03 replaces with:
                 <img src="assets/dr-vadim-birca.webp" alt="Dr. Bârcă Vadim, medic specialist ortopedie și traumatologie București" width="376" height="512" loading="lazy"> -->
          </div>
          <div class="doctor__bio">
            <h2>Dr. Bârcă Vadim</h2>
            <p class="doctor__title">Medic Specialist Ortopedie și Traumatologie</p>
            <p>Parcursul meu în medicină a început în anul 2009 la Universitatea de Medicină și Farmacie din Craiova, fiind urmat de o etapă esențială de formare ca medic rezident în Ortopedie și Traumatologie în centrul universitar Târgu Mureș.</p>
            <p>Stagiuri de pregătire în centre medicale prestigioase din Franța au reprezentat un moment definitoriu. Aplic zilnic valori de empatie profundă și tratare dedicată a pacienților.</p>
            <h3>Arii de Expertiză</h3>
            <ul class="doctor__expertise">
              <li>Chirurgia minim invazivă a șoldului cu protezare prin incizii minime</li>
              <li>Chirurgia mâinii sub anestezie locală</li>
              <li>Ecografie Musculoscheletală și Intervenții Ghidate (2025)</li>
              <li>Medicină Regenerativă utilizând resursele proprii ale organismului</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    ```

    5. Append CSS for all three sections to the existing `<style>` block:
       - `.container`: max-width (1200px or match live site), margin auto, horizontal padding
       - `.section-title`: font-size (extract from live), font-weight, margin-bottom
       - `.conditions__grid`: CSS grid, 3 columns desktop / 2 tablet / 1 mobile, list-style none
       - `.conditions__grid li`: card-style or plain list item with checkmark or icon — match live site
       - `.process__steps`: flex row, 3 equal columns with connecting arrows/numbers
       - `.process__step`: text-align center, step number badge (circular)
       - `.process__facts`: flex row, 4 badges/cards with bold text
       - `.doctor__layout`: flex or grid, two columns (photo left ~40%, bio right ~60%)
       - `.doctor__expertise li`: bullet list items
  </action>
  <verify>
    <automated>powershell.exe -Command "Select-String -Path 'C:\Users\fraul\Documents\Orthohub\index.html' -Pattern 'gonartroză','Fasciită plantară','Centrifugare','Dr\. Bârcă Vadim','Chirurgia minim invazivă' | Measure-Object | Select-Object -ExpandProperty Count"</automated>
  </verify>
  <acceptance_criteria>
    - index.html contains `gonartroză` (exact diacritics)
    - index.html contains `Fasciită plantară`
    - index.html contains `Tendinopatie de gleznă` (18th condition — all 18 present)
    - index.html contains `Centrifugare`
    - index.html contains `Injecție ghidată ecografic`
    - index.html contains `Peste 40 de studii clinice`
    - index.html contains `Dr. Bârcă Vadim`
    - index.html contains `Medic Specialist Ortopedie și Traumatologie`
    - index.html contains `Parcursul meu în medicină a început în anul 2009`
    - index.html contains `Chirurgia minim invazivă a șoldului`
    - index.html contains `Ecografie Musculoscheletală și Intervenții Ghidate`
    - index.html contains exactly one `<style>` block (not two or more)
  </acceptance_criteria>
  <done>Conditions section (18 items), PRP process (3 steps + 4 facts), and doctor bio section are present in index.html with verbatim Romanian text and styled via the inlined CSS block.</done>
</task>

<task type="auto">
  <name>Task 2: Add testimonials, FAQ, CTA banner, and footer</name>
  <files>index.html</files>
  <read_first>
    - index.html (read full current state — locate remaining placeholder comments for Testimonials, FAQ, CTA Banner, Footer)
    - Fetch https://orthohub.ro to confirm: testimonial star ratings format (Google Reviews integration vs. static HTML), exact footer content, CTA banner heading/button text, and whether there are more than 4 testimonials to capture
  </read_first>
  <action>
    1. Read index.html and locate remaining placeholder comments.

    2. Replace the Testimonials placeholder with:

    ```html
    <section class="testimonials" id="recenzii">
      <div class="container">
        <h2 class="section-title">Ce spun pacienții</h2>
        <!-- Google Reviews logo placeholder — Plan 03 adds img tag -->
        <div class="testimonials__grid">
          <div class="testimonials__card">
            <div class="testimonials__stars">★★★★★</div>
            <p class="testimonials__text">"Un doctor foarte bun! Are rabdare, rezolva repede problemele pacientilor, are resursele necesare și este foarte intelegator."</p>
            <p class="testimonials__author">Toma</p>
          </div>
          <div class="testimonials__card">
            <div class="testimonials__stars">★★★★★</div>
            <p class="testimonials__text">"După tratament, am putut să scap de dureri la umăr. Explică pe înțelesul tuturor, urmărește evoluția pacientului, caută cel mai bun tratament."</p>
            <p class="testimonials__author">Flory Trofin</p>
          </div>
          <div class="testimonials__card">
            <div class="testimonials__stars">★★★★★</div>
            <p class="testimonials__text">"Mi-a făcut o injecție la genunchi și pot merge. Nu mai puteam merge de o lună în acel picior."</p>
            <p class="testimonials__author">Dana Nanu</p>
          </div>
          <div class="testimonials__card">
            <div class="testimonials__stars">★★★★★</div>
            <p class="testimonials__text">"Am fost foarte plăcut surprins să nu simt absolut nimic, nici în timpul intervenției, nici după."</p>
            <p class="testimonials__author">belghir gabriel</p>
          </div>
        </div>
      </div>
    </section>
    ```

    3. Replace the FAQ placeholder with all 7 questions and full answers:

    ```html
    <section class="faq" id="intrebari-frecvente">
      <div class="container">
        <h2 class="section-title">Întrebări frecvente</h2>
        <div class="faq__list">
          <div class="faq__item">
            <h3 class="faq__question">Ce este PRP și cum funcționează pentru articulații și mușchi?</h3>
            <p class="faq__answer">PRP (Plasmă Îmbogățită cu Trombocite) este un tratament regenerativ care folosește propriul tău sânge. Dintr-o probă recoltată, extragem plasma bogată în factori de creștere și o reinjectăm direct în zona afectată. Acești factori stimulează repararea fără intervenție chirurgicală.</p>
          </div>
          <div class="faq__item">
            <h3 class="faq__question">Câte ședințe de PRP sunt necesare?</h3>
            <p class="faq__answer">În majoritatea cazurilor, protocolul standard implică 3 ședințe, la interval de 2–4 săptămâni. Severitatea și răspunsul individual determină necesitatea unui ciclu complet și eventual reluare după 6–12 luni.</p>
          </div>
          <div class="faq__item">
            <h3 class="faq__question">PRP doare? Cum decurge procedura?</h3>
            <p class="faq__answer">Procedura este minim invazivă. Se recoltează 10–30 ml de sânge, similar unui analize de rutină. Proba este centrifugată, apoi injectată sub ghidaj ecografic cu disconfort minimal.</p>
          </div>
          <div class="faq__item">
            <h3 class="faq__question">Cât durează până apar rezultatele PRP?</h3>
            <p class="faq__answer">Primele îmbunătățiri apar de obicei între 3 și 6 săptămâni de la prima ședință. Efectul maxim se observă la 3–6 luni după finalizarea protocolului.</p>
          </div>
          <div class="faq__item">
            <h3 class="faq__question">Există riscuri sau efecte secundare la PRP?</h3>
            <p class="faq__answer">Deoarece plasma provine din propriul tău sânge, riscul de reacții alergice este practic zero. Efectele secundare minore includ ușoară durere locală, umflătură sau vânătaie care dispar în 2–3 zile.</p>
          </div>
          <div class="faq__item">
            <h3 class="faq__question">Este nevoie de repaus după injecția PRP?</h3>
            <p class="faq__answer">Recomandăm evitarea efortului fizic intens 48–72 de ore după procedură. Activitățile zilnice normale se reiau a doua zi.</p>
          </div>
          <div class="faq__item">
            <h3 class="faq__question">Pentru ce afecțiuni musculoscheletale este recomandat PRP?</h3>
            <p class="faq__answer">PRP este indicat pentru: gonartroza, tendinite cronice, fasciită plantară, dureri de umăr, coxartroză, leziuni musculare și ligamentare, hernie de disc în faze incipiente, și recuperare post-accidentare sportivă.</p>
          </div>
        </div>
      </div>
    </section>
    ```

    4. Replace the CTA Banner placeholder with:

    ```html
    <section class="cta-banner" id="programare">
      <div class="container">
        <h2>Programează-ți consultația</h2>
        <p>Fă primul pas spre mișcare fără durere. Alege metoda care ți se potrivește.</p>
        <div class="cta-banner__buttons">
          <a href="https://calendly.com/vadim-brk/30min" class="btn btn--primary">Programează online</a>
          <a href="tel:+40729077770" class="btn btn--secondary">Sună acum: +40 729 077 770</a>
        </div>
      </div>
    </section>
    ```

    5. Replace the Footer placeholder with:

    ```html
    <footer class="footer">
      <div class="container">
        <div class="footer__info">
          <p><strong>OrthoHub</strong> — Dr. Bârcă Vadim</p>
          <p>Calea Călărașilor 179, Sector 3, București</p>
          <p><a href="tel:+40729077770">+40 729 077 770</a></p>
        </div>
        <p class="footer__credit">Creeat cu &#128525; &amp; &#9749; de WebtasticAI</p>
      </div>
    </footer>
    ```

    6. Append CSS for all four new sections to the existing `<style>` block (append inside the SAME `<style>` tag — do not add a second `<style>` block):
       - `.testimonials__grid`: CSS grid, 2 columns desktop / 1 mobile
       - `.testimonials__card`: card with border/shadow, padding, background
       - `.testimonials__stars`: star color (gold #FFD700 or match live site)
       - `.faq__list`: stacked list
       - `.faq__item`: border-bottom separator, padding
       - `.faq__question`: h3 style, font-size, cursor (pointer if JS accordion on live site)
       - `.faq__answer`: body text, line-height, color
       - `.cta-banner`: full-width section, accent background, centered content, large heading
       - `.cta-banner__buttons`: flex row, gap between buttons
       - `.btn--secondary`: outlined or contrasting button style
       - `.footer`: dark background, padding top/bottom
       - `.footer__info p`: line-height, color
       - `.footer__credit`: small font-size, muted color
  </action>
  <verify>
    <automated>powershell.exe -Command "Select-String -Path 'C:\Users\fraul\Documents\Orthohub\index.html' -Pattern 'Ce este PRP','Câte ședințe','PRP doare','Cât durează','Există riscuri','repaus după','afecțiuni musculo' | Measure-Object | Select-Object -ExpandProperty Count"</automated>
  </verify>
  <acceptance_criteria>
    - index.html contains all 7 FAQ questions (the above grep returns count of 7)
    - index.html contains `Plasmă Îmbogățită cu Trombocite`
    - index.html contains `protocolul standard implică 3 ședințe`
    - index.html contains `10–30 ml de sânge`
    - index.html contains `3 și 6 săptămâni`
    - index.html contains `reacții alergice este practic zero`
    - index.html contains `48–72 de ore`
    - index.html contains `Toma` (testimonial author)
    - index.html contains `Flory Trofin`
    - index.html contains `Dana Nanu`
    - index.html contains `belghir gabriel`
    - index.html contains `Programează online`
    - index.html contains `Sună acum: +40 729 077 770`
    - index.html contains second `href="tel:+40729077770"` in footer (phone appears at least twice total)
    - index.html contains `WebtasticAI` (footer credit preserved)
    - index.html contains `</footer>` (footer element closed)
    - index.html contains exactly one `<style>` block (grep for `<style>` returns count of 1)
    - index.html contains no placeholder comments matching `<!-- SECTION:` (all replaced)
  </acceptance_criteria>
  <done>All sections present: testimonials (4 reviews verbatim), FAQ (7 questions with full answers verbatim), CTA booking banner with both Calendly and phone CTAs, and footer with contact info and credit. Page is complete content-wise — only images missing.</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| Third-party scripts (Calendly) | Calendly link in CTA banner — opens external calendar page |
| Static HTML content | All text is author-controlled, copied verbatim from live site |
| Patient review text | Testimonial text copied verbatim — no user-submitted content at build time |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-02-01 | Tampering | FAQ answer content | accept | Content is static HTML set at authoring time. No user input modifies FAQ content. No risk of runtime content injection. |
| T-02-02 | Information Disclosure | Footer credit (WebtasticAI) | accept | Third-party credit is present on the live site and preserved verbatim. No PII disclosed. |
| T-02-03 | Spoofing | CTA booking buttons (Calendly + tel:) | accept | Both CTAs use hardcoded URLs: https://calendly.com/vadim-brk/30min and tel:+40729077770. No dynamic URL construction from user input. |
| T-02-04 | Injection | Testimonial content rendering | mitigate | Testimonial text is hardcoded in HTML at authoring time. Rule: testimonial text MUST be HTML-escaped (use &amp; for & and no raw < > in testimonial strings). No runtime interpolation of review content from external sources. Verify: no `innerHTML` assignments using external data in `<script>` block. |
| T-02-05 | Denial of Service | Large conditions list DOM | accept | 18 list items is negligible DOM size. No performance risk. |
</threat_model>

<verification>
Open index.html in a browser after Plan 02 completes.

Expected result:
1. All sections visible when scrolling: conditions grid, PRP process steps, doctor bio, testimonials, FAQ, CTA banner, footer
2. 18 conditions listed (count items in browser)
3. FAQ shows all 7 questions
4. Doctor section shows "Dr. Bârcă Vadim" and expertise list
5. CTA banner has two buttons: "Programează online" and "Sună acum: +40 729 077 770"
6. Footer shows address and phone, plus WebtasticAI credit
7. No placeholder comments visible in rendered page
8. No unstyled content — all sections have appropriate visual treatment

Run content verification:
```powershell
$content = Get-Content 'C:\Users\fraul\Documents\Orthohub\index.html' -Raw
@("gonartroză", "Ce este PRP", "Toma", "Dr. Bârcă Vadim", "WebtasticAI", "Programează online") | ForEach-Object {
  if ($content -match $_) { "PASS: $_" } else { "FAIL: $_" }
}
```
All six must return PASS.
</verification>

<success_criteria>
- All 18 conditions present verbatim in Romanian
- 3 PRP process steps with exact text from live site
- Doctor bio with full credentials and 4 expertise areas
- 4 named testimonials with verbatim review text
- 7 FAQ entries with full question and answer text verbatim
- CTA banner with both booking options (Calendly + phone)
- Footer with address, phone, and WebtasticAI credit
- Entire page navigable by scrolling — all sections visible
- Only one `<style>` block, only one `<script>` block
- No placeholder comments remaining in HTML
</success_criteria>

<output>
After completion, create `.planning/phases/01-content-assets/01-content-SUMMARY.md` with:
- Confirmation all 18 conditions are present
- Confirmation all 7 FAQ entries are present
- Any content differences found between live site and what was reproduced
- Notes on FAQ accordion (JS needed or static expand — verify against live site)
- Line count of index.html after this plan
</output>
