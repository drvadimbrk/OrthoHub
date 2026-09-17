---
type: quick
slug: seo-head-articole
created: 2026-09-17
---
# Quick Task 9: SEO head for all 34 articles

1. Canonical and og:url → https://orthohub.ro/articole/<slug>. Add robots index,follow, og:type article, og:site_name, og:locale (en_GB for EN pages), and author "Dr. Vadim Bîrca".
2. og:image → an existing webp (chosen by topic; fallback terapie-prp-bucuresti-orthohub.webp), with width, height and alt, plus twitter:card and twitter:image. Remove the head TODO comments.
3. JSON-LD: replace every block with a single @graph:
   - WebSite, MedicalClinic and Physician nodes copied from index.html, so each page carries identical, real clinic data.
   - The page node (MedicalWebPage, or the page's own type) with @id and url on /articole/<slug>; author and reviewedBy point to the physician, publisher to the clinic.
   - The page's own FAQPage, MedicalCondition, MedicalProcedure and MedicalTest nodes, kept with their URLs normalized. Unresolvable URLs and ratings/reviews are removed.
   - One BreadcrumbList: Acasă → Articole → page.
4. Name spelling: "Bîrca", as on the homepage.
5. Validate that every JSON-LD block parses and that no URL in it points to a missing local file.
