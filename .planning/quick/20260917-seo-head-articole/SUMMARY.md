---
type: quick
slug: seo-head-articole
status: complete
completed: 2026-09-17
---
# Summary: SEO head for all 34 articles

- All 34 pages: canonical and og:url → https://orthohub.ro/articole/<slug>. Added robots (index, follow, max-image-preview:large), author "Dr. Vadim Bîrca", og:type article, og:site_name, og:locale (en_GB on the 2 EN pages), og:image with width, height and alt, twitter:card and twitter:image.
- Previous canonicals pointed to root paths, www.orthohub.ro, exemplu.ro, yourdomain.com or "#". 3 pages had no canonical at all.
- og:image: the old values pointed to missing /img/*.jpg files. They now use existing webps chosen by topic (knee, hip, shoulder, hamstring, doctor portrait, generic PRP). Per-article images are still pending (Task 12).
- JSON-LD: each page now has one @graph containing:
  - the page node (@id #webpage) with author and reviewedBy → #physician and publisher → #clinic
  - a single BreadcrumbList (Acasă → Articole → page)
  - the page's own FAQPage, MedicalCondition, MedicalProcedure and MedicalTest nodes
  - WebSite, MedicalClinic and Physician copied verbatim from index.html
- Removed from JSON-LD: duplicate breadcrumbs, per-page clinic and physician copies with placeholder addresses (ADRESA_EXACTA_AICI, 030000), dead image and logo URLs, drbirca.ro, and links to nonexistent hub pages.
- Pages with no date got datePublished 2026-09-17.
- Name spelling standardised to "Bîrca" (the homepage form). meta keywords keep the ASCII "Birca".
- Checks: every block parses; each page has exactly 1 of canonical, robots, og:image, og:url, og:title, og:description, twitter:card and JSON-LD; the link checker passes on all 34.
- Known gap: the clinic logo (copied from the homepage) is /assets/og-image.webp, which does not exist yet → Task 12.
- scripts/fix-articles-seo.js is marked superseded.
- Tool: scratchpad seo.js; backups are in scratchpad/bak9.
