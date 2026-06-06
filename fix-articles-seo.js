/**
 * OrthoHub — Bulk article SEO fixer
 * Fixes: canonical URLs, og:url, og:site_name, og:image,
 *        breadcrumb JSON-LD, author meta, nav back-link
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'articole');
const OG_IMAGE = 'https://orthohub.ro/assets/og-image.webp';

const ARTICLES = [
  {
    file: 'articol-prp-acid-hialuronic-cortizon.html',
    slug: 'articol-prp-acid-hialuronic-cortizon',
    title: 'PRP, Acid Hialuronic sau Cortizon? Ce Spun Studiile Științifice',
    hasOrthoHubNav: false,
    noindex: false,
  },
  {
    file: 'articol-prp-ortobiologice-birca-OPTIMIZED.html',
    slug: 'articol-prp-ortobiologice-birca-OPTIMIZED',
    title: 'Tratamente Ortobiologice PRP: Alternativă la Operație',
    hasOrthoHubNav: true,
    noindex: false,
  },
  {
    file: 'articol-prp-ortobiologice-birca.html',
    slug: 'articol-prp-ortobiologice-birca-OPTIMIZED', // canonical points to OPTIMIZED
    title: 'Tratamente Ortobiologice PRP',
    hasOrthoHubNav: true,
    noindex: true, // duplicate — suppress from index
  },
  {
    file: 'articol-prp-ortopedie.html',
    slug: 'articol-prp-ortopedie',
    title: 'PRP în Ortopedie: Ce Este, Cum Funcționează și Când Este Recomandat',
    hasOrthoHubNav: false,
    noindex: false,
  },
  {
    file: 'infiltratii-intraarticulare-orthohub.html',
    slug: 'infiltratii-intraarticulare-orthohub',
    title: 'Infiltrații Intraarticulare & Periarticulare',
    hasOrthoHubNav: true,
    noindex: false,
  },
  {
    file: 'literatura-ortobiologice-dr-birca.html',
    slug: 'literatura-ortobiologice-dr-birca',
    title: 'Studii Clinice Ortobiologice: PRP, Unde de Șoc, Terapii Regenerative',
    hasOrthoHubNav: false,
    noindex: false,
  },
  {
    file: 'orthohub-coxartroza-prp-acid-hialuronic.html',
    slug: 'orthohub-coxartroza-prp-acid-hialuronic',
    title: 'Tratament Coxartroză București: Infiltrații PRP și Acid Hialuronic',
    hasOrthoHubNav: true,
    noindex: false,
  },
  {
    file: 'orthohub-supraspinos-prp.html',
    slug: 'orthohub-supraspinos-prp',
    title: 'Ruptura Parțială de Supraspinos: PRP + Kinetoterapie',
    hasOrthoHubNav: true,
    noindex: false,
  },
  {
    file: 'prp-24-intrebari-orthohub.html',
    slug: 'prp-24-intrebari-orthohub',
    title: '24 Întrebări Esențiale despre Infiltrația PRP',
    hasOrthoHubNav: true,
    noindex: false,
  },
  {
    file: 'prp-genunchi-bucuresti-dr-birca.html',
    slug: 'prp-genunchi-bucuresti-dr-birca',
    title: 'Injecții PRP pentru Durerea de Genunchi și Articulații în București',
    hasOrthoHubNav: false,
    noindex: false,
  },
  {
    file: 'prp-vs-celule-stem-vs-exozomi.html',
    slug: 'prp-vs-celule-stem-vs-exozomi',
    title: 'PRP vs. Celule Stem vs. Exozomi: Ghidul Complet',
    hasOrthoHubNav: true,
    noindex: false,
  },
  {
    file: 'sanatatea-articulatiilor-dupa-40-ani.html',
    slug: 'sanatatea-articulatiilor-dupa-40-ani',
    title: 'Sănătatea Articulațiilor după 40 de Ani: Ghid Complet',
    hasOrthoHubNav: true,
    noindex: false,
  },
  {
    file: 'terapie-exozomi-articulara.html',
    slug: 'terapie-exozomi-articulara',
    title: 'Terapia cu Exozomi pentru Articulații',
    hasOrthoHubNav: true,
    noindex: false,
  },
];

// Minimal nav bar to inject into articles that lack an OrthoHub link
const BACK_NAV = `
<!-- OrthoHub back-navigation injected for SEO internal linking -->
<div style="background:#080808;padding:12px 28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;font-family:system-ui,sans-serif;position:sticky;top:0;z-index:200;border-bottom:1px solid rgba(201,169,110,.18);">
  <a href="https://orthohub.ro" style="font-size:17px;font-weight:500;color:#F5F0E8;text-decoration:none;letter-spacing:-.01em;">← <em style="font-style:italic;">OrthoHub</em></a>
  <div style="display:flex;align-items:center;gap:14px;">
    <a href="tel:+40729077770" style="font-size:13px;color:#C9A96E;text-decoration:none;font-weight:500;">+40 729 077 770</a>
    <a href="https://calendly.com/vadim-brk/30min" target="_blank" rel="noopener" style="background:#C9A96E;color:#080808;padding:9px 20px;border-radius:4px;font-size:13px;font-weight:600;text-decoration:none;white-space:nowrap;">Programează-te</a>
  </div>
</div>`;

// WhatsApp floating widget for articles
const WA_WIDGET = `
<!-- WhatsApp floating widget -->
<a href="https://wa.me/40729077770" target="_blank" rel="noopener noreferrer" aria-label="Contactează-ne pe WhatsApp" style="position:fixed;bottom:24px;right:24px;width:58px;height:58px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,.5);z-index:9999;text-decoration:none;animation:waPulse 2.8s ease-in-out infinite;">
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.469 2.027 7.773L0 32l8.437-2.007A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 01-6.773-1.853l-.485-.288-5.005 1.191 1.235-4.872-.317-.5A13.255 13.255 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.92c-.398-.2-2.357-1.163-2.722-1.295-.365-.133-.631-.2-.897.2-.266.399-1.031 1.295-1.264 1.561-.232.266-.464.3-.862.1-.398-.2-1.68-.619-3.2-1.975-1.183-1.055-1.981-2.357-2.213-2.755-.232-.399-.025-.614.174-.812.179-.178.398-.465.597-.697.2-.233.266-.399.399-.665.133-.266.066-.499-.033-.698-.1-.2-.897-2.157-1.229-2.953-.324-.775-.652-.67-.897-.682-.232-.011-.498-.014-.764-.014-.266 0-.698.1-1.064.499-.365.398-1.396 1.364-1.396 3.322 0 1.957 1.429 3.848 1.628 4.114.2.266 2.813 4.295 6.817 6.024.953.412 1.696.657 2.276.841.956.304 1.827.261 2.515.158.767-.114 2.357-.963 2.689-1.894.332-.93.332-1.727.232-1.894-.1-.167-.365-.266-.763-.465z"/></svg>
</a>
<style>@keyframes waPulse{0%,100%{box-shadow:0 4px 20px rgba(37,211,102,.5)}50%{box-shadow:0 4px 32px rgba(37,211,102,.8),0 0 0 8px rgba(37,211,102,.1)}}</style>`;

let fixed = 0, skipped = 0;

for (const art of ARTICLES) {
  const filePath = path.join(DIR, art.file);
  if (!fs.existsSync(filePath)) { console.log(`MISSING: ${art.file}`); skipped++; continue; }

  let html = fs.readFileSync(filePath, 'utf8');
  const canonicalUrl = `https://orthohub.ro/articole/${art.slug}`;

  // ── 1. Canonical URL ──────────────────────────────────────────
  if (/rel=["']canonical["']/.test(html)) {
    // Pattern: rel="canonical" href="..."
    html = html.replace(
      /(rel=["']canonical["'][^>]*href=["'])[^"']*(['"][^>]*>)/g,
      `$1${canonicalUrl}$2`
    );
    // Pattern: href="..." rel="canonical"
    html = html.replace(
      /(href=["'])[^"']*(['"][^>]*rel=["']canonical["'][^>]*>)/g,
      `$1${canonicalUrl}$2`
    );
  } else {
    // No canonical at all — inject after <meta name="robots"
    if (html.includes('name="robots"')) {
      html = html.replace(
        /(<meta[^>]+name=["']robots["'][^>]*>)/i,
        `$1\n  <link rel="canonical" href="${canonicalUrl}" />`
      );
    } else {
      // Fall back: inject before </head>
      html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
    }
  }

  // ── 2. og:url ────────────────────────────────────────────────
  if (/property=["']og:url["']/.test(html)) {
    html = html.replace(
      /(property=["']og:url["'][^>]*content=["'])[^"']*(['"][^>]*>)/g,
      `$1${canonicalUrl}$2`
    );
    html = html.replace(
      /(content=["'])[^"']*(['"][^>]*property=["']og:url["'][^>]*>)/g,
      `$1${canonicalUrl}$2`
    );
  } else {
    html = html.replace(
      /(<meta[^>]+property=["']og:type["'][^>]*>)/i,
      `$1\n  <meta property="og:url" content="${canonicalUrl}" />`
    );
  }

  // ── 3. og:site_name ──────────────────────────────────────────
  if (!/property=["']og:site_name["']/.test(html)) {
    html = html.replace(
      /(<meta[^>]+property=["']og:type["'][^>]*>)/i,
      `$1\n  <meta property="og:site_name" content="OrthoHub" />`
    );
  } else {
    html = html.replace(
      /(property=["']og:site_name["'][^>]*content=["'])[^"']*(['"][^>]*>)/g,
      `$1OrthoHub$2`
    );
  }

  // ── 4. og:image ──────────────────────────────────────────────
  if (!/property=["']og:image["']/.test(html)) {
    html = html.replace(
      /(<meta[^>]+property=["']og:type["'][^>]*>)/i,
      `$1\n  <meta property="og:image" content="${OG_IMAGE}" />\n  <meta property="og:image:width" content="1200" />\n  <meta property="og:image:height" content="630" />`
    );
  }

  // ── 5. og:locale ─────────────────────────────────────────────
  if (!/property=["']og:locale["']/.test(html)) {
    html = html.replace(
      /(<meta[^>]+property=["']og:type["'][^>]*>)/i,
      `$1\n  <meta property="og:locale" content="ro_RO" />`
    );
  }

  // ── 6. author meta ───────────────────────────────────────────
  if (!/name=["']author["']/.test(html)) {
    html = html.replace(
      /(<meta[^>]+name=["']robots["'][^>]*>)/i,
      `$1\n  <meta name="author" content="Dr. Bîrcă Vadim – OrthoHub" />`
    );
  }

  // ── 7. Breadcrumb JSON-LD ─────────────────────────────────────
  if (!html.includes('"BreadcrumbList"')) {
    const breadcrumb = `  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "OrthoHub", "item": "https://orthohub.ro"},
      {"@type": "ListItem", "position": 2, "name": "Articole", "item": "https://orthohub.ro/#articole"},
      {"@type": "ListItem", "position": 3, "name": "${art.title}", "item": "${canonicalUrl}"}
    ]
  }
  </script>`;
    html = html.replace('</head>', `${breadcrumb}\n</head>`);
  }

  // ── 8. noindex for duplicate ─────────────────────────────────
  if (art.noindex) {
    html = html.replace(
      /(<meta[^>]+name=["']robots["'][^>]*content=["'])[^"']*(['"][^>]*>)/i,
      `$1noindex, follow$2`
    );
    html = html.replace(
      /(content=["'])[^"']*(['"][^>]*name=["']robots["'][^>]*>)/i,
      `$1noindex, follow$2`
    );
  }

  // ── 9. Back-nav for articles missing OrthoHub link ──────────
  if (!art.hasOrthoHubNav && html.includes('<body>')) {
    html = html.replace('<body>', `<body>\n${BACK_NAV}`);
  } else if (!art.hasOrthoHubNav && html.includes('<body ')) {
    html = html.replace(/(<body[^>]*>)/, `$1\n${BACK_NAV}`);
  }

  // ── 10. WhatsApp widget (if not already present) ─────────────
  if (!html.includes('wa.me/40729077770') && !html.includes('wa.me/?')) {
    html = html.replace('</body>', `${WA_WIDGET}\n</body>`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✓ Fixed: ${art.file}${art.noindex ? ' [noindex]' : ''}`);
  fixed++;
}

console.log(`\nDone: ${fixed} files fixed, ${skipped} skipped.`);
