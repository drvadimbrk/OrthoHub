---
type: quick
slug: article-shell
created: 2026-09-17
---
# Quick Task 2: Unified article shell + sample page

1. Create assets/article.css. It holds the "oh-" prefixed shell: nav, breadcrumb bar, related-articles aside, CTA band, footer, WhatsApp float and mobile call bar. It uses the hub tokens (#080808 / #C9A96E / Playfair Display + DM Sans). The prefix stops collisions with each page's own component CSS.
2. Theming approach for each page:
   - Keep the page's own component CSS.
   - Swap its fonts for Playfair Display and DM Sans.
   - Remap its :root color tokens to the hub palette.
   - Remove its own header, nav, footer and floating widgets, then insert the shell.
3. Apply this to the sample page articole/tunel-carpian.html. Also fix its visible placeholders:
   - The empty photo slot gets the real doctor photo (webp).
   - The credentials, price and testimonial placeholders are removed or replaced with copy that isn't invented.
