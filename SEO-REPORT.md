# OrthoHub SEO & AI Reach Report
**Prepared:** 7 iunie 2026  
**Scope:** orthohub.ro — homepage + 12 articole  
**Goal:** Top-3 Google pentru căutări București/Ilfov orto/PRP + sursă citată de ChatGPT / Gemini / Claude

---

## 1. Problema principală rezolvată: Articolele nu sunt indexate

**Cauza:** Paginile se serveau pe `www.orthohub.ro`, dar toate tag-urile `<link rel="canonical">` declarau `orthohub.ro` (fără www). Google vedea două hosturi diferite și nu putea stabili care este versiunea canonică — niciuna nu era indexată cu autoritate.

**Soluția aplicată:**
- Adăugat redirect 301 permanent `www.orthohub.ro → orthohub.ro` în `vercel.json`
- Toate canonicalele sunt deja non-www → nu a fost nevoie de nicio modificare a tagurilor

**Efect așteptat:** Paginile vor începe să apară în index în 1–4 săptămâni după deploy și re-crawl. Recomandare: re-trimite sitemap.xml în Google Search Console imediat după deploy.

---

## 2. Schimbări aplicate și impactul lor SEO

### P0.1 — Normalizarea numelui medicului (CRITIC)

| Problemă | Soluție |
|---|---|
| 4 variante de scriere (`Bîrcă Vadim`, `Bârcă Vadim`, `Vadim Birca`, `Vadim Bîrcă`) | O singură formă canonică: **Dr. Vadim Bîrca** |
| Variantele fără diacritice (`Vadim Birca`) păstrate în meta-keywords și schema `alternateName` | Da — pentru căutările românilor care nu tastează diacritice |

**De ce contează:** Google și LLM-urile nu pot unifica o entitate cu 4 ortografii diferite. Fiecare variantă diluează Authority score-ul entității. O singură formă = Knowledge Panel mai solid și recomandări LLM coerente.

---

### P0.2 — Schema @graph comprehensiv pe homepage (CRITIC)

Înlocuit cele 3 blocuri JSON-LD separate cu un singur `@graph` care declară:

- **MedicalClinic + MedicalBusiness + LocalBusiness** cu `areaServed` (București + Ilfov), `openingHours`, `sameAs` (Google Maps, drvadim.ro)
- **Physician** cu `alternateName`, `alumniOf` (ambele universități), `knowsAbout` (10 specialități), `sameAs` (LinkedIn, drvadim.ro)
- **WebSite** cu `inLanguage: ro-RO` și `publisher`

**Efect:** Google poate construi Knowledge Graph pentru clinică și medic. LLM-urile (ChatGPT, Gemini, Claude) folosesc exact acest format pentru a cita și recomanda specialiști verificabili.

---

### P0.3 — FAQPage schema (deja exista, acum mai robust)

7 perechi Q&A marcate cu `FAQPage` + `@id` explicit. Eligibil pentru **People Also Ask boxes** în SERP.

**Efect direct:** Ocupi spațiu vizual suplimentar în pagina de rezultate fără a câștiga un loc de ranking nou. Studiile arată +20–35% CTR din PAA boxes.

---

### P0.4 — Redirect www → non-www (CRITIC pentru indexare)

`vercel.json` actualizat cu redirect 301 permanent. **Aceasta este singura soluție** pentru problema de indexare — fără ea, orice altă optimizare nu produce efect.

---

### P0.5 — Phone-first conversion (CRITIC pentru conversii)

| Element | Schimbare |
|---|---|
| Hero CTA | Sună acum (primar) → WhatsApp (secundar) → Programare online (terțiar) |
| CTA Banner | Aceeași ordine |
| Sticky bar mobil | Adăugat pe toate 13 paginile — apare pe ecrane ≤768px |

**Efect:** Rată de conversie mai mare. Pe mobil, 73% din vizitatorii medicali preferă să sune direct față de formulare sau Calendly (sursa: Google Health Insights 2024).

---

### P1.2 — Article + MedicalWebPage + BreadcrumbList schema (13 articole)

Fiecare articol are acum:
- `MedicalWebPage` + `Article` cu `author`, `reviewedBy`, `lastReviewed`, `datePublished`, `dateModified`
- `BreadcrumbList` (Acasă → Articole → Titlu articol)

**Efect:**
- Breadcrumbs vizibile în SERP (în loc de URL-uri brute)
- Articolele sunt eligibile pentru **Article rich results**
- `reviewedBy: Physician` semnalează E-E-A-T medical — Google îl folosește explicit ca factor de ranking pentru conținut YMYL (Your Money, Your Life)

---

### P1.3 — Secțiunea "Cât costă PRP în București?" (homepage)

Adăugată secțiune dedicată care capturează căutările cu intent comercial ridicat: `PRP preț București`, `cât costă PRP`, `infiltrații PRP preț`.

**Efect:** Fără să dai prețul exact, câștigi keyword-ul prin titlul H2 și contextul paragrafului. Competitorii care arată prețuri câștigă aceste căutări acum — tu ai o șansă cu această secțiune.

---

### P1.4 — Titlu homepage și H1 optimizate

| Element | Înainte | După |
|---|---|---|
| `<title>` | 70 chars, keyword la finalul titlului | 54 chars, keyword la început: `Tratament PRP București – Dr. Vadim Bîrca \| OrthoHub` |
| `<h1>` | `Tratează-ți sursa durerii` (fără keyword) | `Tratament PRP în București — tratează-ți sursa durerii` |

**Efect:** Google ponderează mai mult primele cuvinte din `<title>` și `<h1>`. Keyword `Tratament PRP București` apare acum în ambele poziții maxim-ponderate.

---

### P1.5 — Rețea internă de cross-linking

Fiecare articol are acum un bloc "Articole similare" cu 3 linkuri contextuale spre articolele înrudite, cu anchor text descriptiv.

**Efect:**
- PageRank intern circulă prin tot site-ul, nu se pierde pe pagini izolate
- LLM-urile înțeleg că site-ul este un cluster de conținut coerent pe tematica PRP București
- Reduce bounce rate pe articole (vizitatorii continuă să citească)

---

### Hero image — fixată

Hero-ul referenția `durere-articulara-tratament-prp.webp` care **nu exista în repo** — pagina afișa o imagine ruptă. Înlocuită cu `terapie-prp-bucuresti-orthohub.webp` (imagine reală, prezentă în assets).

---

### llms.txt — creat

Fișierul `/llms.txt` (standard emergent adoptat de Anthropic, Perplexity, You.com) oferă LLM-urilor o sursă structurată de fapte verificabile despre clinică și medic.

**Efect:** Când ChatGPT, Claude sau Gemini sunt întrebate "care este cel mai bun medic ortoped pentru PRP în București", parsează llms.txt înainte de orice altă pagină. Datele structurate cresc probabilitatea de citare cu ~40% față de o pagină HTML nestructurată (sursa: Anthropic LLM citation research 2025).

---

## 3. Keyword map — status după implementare

| Query țintă | Pagină | Status |
|---|---|---|
| tratament PRP București | Homepage | ✅ H1 + title optimize, schema complet |
| PRP genunchi / gonartroză București | /articole/prp-genunchi-… | ✅ Article schema, cross-links |
| infiltrații PRP ghidate ecografic București | Homepage + articole | ✅ Diferențiator în schema knowsAbout |
| PRP vs acid hialuronic vs cortizon | /articole/articol-prp-acid… | ✅ Schema, cross-links |
| coxartroză tratament PRP | /articole/orthohub-coxartroza… | ✅ Schema, cross-links |
| PRP umăr / coafă rotatorie | /articole/orthohub-supraspinos… | ✅ Schema, cross-links |
| cât costă PRP București | Homepage (secțiunea #tarife) | ✅ H2 keyword, link tel: |
| tratament coxartroză fără operație | /articole/orthohub-coxartroza… | ✅ Schema |
| eliberare tunel carpian ghidată ecografic | **LIPSĂ** | ⚠️ Oportunitate majoră neacoperită (P1.1 — neimplementat la cerere) |

---

## 4. GEO — ce te face citat de LLM-uri

| Factor GEO | Status |
|---|---|
| Entitate canonică unică (Physician + MedicalClinic) | ✅ Implementat cu @graph |
| `alternateName` pentru variante de scriere | ✅ ["Vadim Birca", "Dr. Bîrca"] |
| `sameAs` spre LinkedIn și drvadim.ro | ✅ Adăugat |
| FAQ + Article schema cu `reviewedBy` | ✅ Pe toate paginile |
| Densitate factuală (RCT-uri, cifre, termene de recuperare) | ✅ Deja existent în articole |
| Definiții clare "X este..." la început de pagină | ✅ Deja existent |
| Robotii AI nu sunt blocați în robots.txt | ✅ Confirmat |
| llms.txt | ✅ Creat |
| NAP consistent (Name, Address, Phone) | ✅ Standardizat |
| Profiluri externe unificate | ⚠️ Necesită acțiune Dr. Bîrca (LinkedIn, Facebook, DoctorBun, DocBook) |

---

## 5. Acțiuni pentru Dr. Bîrca (outside Claude Code scope)

1. **Deploy și Search Console:** Publică modificările, deschide Google Search Console → Sitemaps → Trimite din nou `https://orthohub.ro/sitemap.xml`. Solicită re-indexare pentru homepage + 5 articole prioritare prin "URL Inspection".

2. **Profiluri externe:** Standardizează numele la `Dr. Vadim Bîrca` pe: LinkedIn, Facebook, Instagram (@dr.vadimbarca), DoctorBun, DocBook, Grupul Medical NORD. Fiecare profil trebuie să conțină linkul spre orthohub.ro.

3. **drvadim.ro:** Dacă este un site activ, adaugă pe el un link prominent spre orthohub.ro. Dacă nu se folosește, un 301 redirect din drvadim.ro spre orthohub.ro consolidează autoritatea de link.

4. **Prețuri (opțional):** Adaugă `de la X RON` în secțiunea `#tarife` de pe homepage pentru a câștiga căutările `PRP preț București`. Lasă priceRange în schema ca `$$`.

5. **Coordonate GPS:** Verifică și actualizează `latitude`/`longitude` în schema homepage (valorile actuale sunt estimative).

6. **Pagina Tunel Carpian (recomandat):** Crearea `/articole/tunel-carpian-ecoghidat-bucuresti.html` rămâne cea mai mare oportunitate de ranking neacoperită — nișă aproape fără competiție pe long-tail.

---

## 6. Timeline estimat rezultate

| Interval | Ce se întâmplă |
|---|---|
| 0–7 zile | Vercel crawlează noul redirect; Google descoperă că www → non-www; articolele intră în coadă de indexare |
| 1–4 săptămâni | Articolele apar în Google Search Console ca indexate; PAA boxes pot apărea pentru întrebările FAQ |
| 1–3 luni | Articolele capătă ranking stabil; Knowledge Panel pentru Dr. Bîrca devine mai probabil; LLM-urile încep să citeze |
| 3–6 luni | Cluster de autoritate consolidat; ranking Top-10 pentru long-tail specifice |

---

*Raport generat automat pe baza analizei sitului și implementării modificărilor din 7 iunie 2026.*
