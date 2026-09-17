---
type: quick
slug: copy-new-articles
created: 2026-09-17
---
# Quick Task 1: Copy the 24 missing articles into articole/

Copy every HTML file under "Articole site/" that isn't already in articole/, flattening subfolders and using lowercase kebab-case names.
Constraints: read-only on "Articole site/"; never overwrite the existing articles in articole/.

## Steps
1. For each source HTML: slug = lowercase basename, CamelCase split into kebab-case.
2. Skip it if articole/<slug>.html already exists (the 12 published articles).
3. Copy the file byte-for-byte (no content changes; restyling and SEO happen in later tasks).
4. Verify: 36 article files + index.html; the source tree is unchanged.
