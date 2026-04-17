# SKSD Project Documentation
## Sri Kanukondaraya Swamy Devasthanam — Official Temple Website

> **Purpose of this document:** This is the **single source of truth** for any AI model or developer working on this project in a new session. Read this ENTIRE document before touching any code. It tells you exactly what the project is, what has been built, what every file does, and what (if anything) remains to do.

---

## 🔴 MANDATORY RULE FOR ALL AI MODELS

**After completing ANY user request — no exceptions — update this file (`SKSD_Project.md`) before ending your response.**

Specifically:
- **Section 12 (Change Log)**: Add a new entry with today's date, description of what was done, and the files modified.
- **Section 4 (Page Inventory)**: Update status if any page changed.
- **Section 13 (Project State Summary)**: Update if overall project state changed (e.g., new features, new pending items).

> The user works across multiple IDEs. This document is the ONLY reliable way to hand off context between sessions. A task that does not update this file is an **incomplete task**.

---


## ⚡ MANDATORY — Read These Documents First

| # | Document | Path | Purpose |
|---|---|---|---|
| 1 | **SKSD_Project.md** | `d:\SKSDevasthanams\skrd\SKSD_Project.md` | **This file** — tech stack, complete status, change log |
| 2 | **SKS_PRD.md** | `d:\SKSDevasthanams\skrd\SKS_PRD.md` | Original redesign vision & page blueprints |
| 3 | **SKSD_History.md** | `d:\SKSDevasthanams\skrd\SKSD_History.md` | **ONLY accurate source** of temple content/history |
| 4 | **images.md** | `d:\SKSDevasthanams\skrd\images.md` | All required images with AI prompts and target folders |

> ⚠️ **SKSD_History.md is the authoritative content source.** Never invent temple history, theology, or deity descriptions. All content must come from SKSD_History.md.

> 🚫 **No donation features.** `/donate` redirects to `/`. Do not add donation UI anywhere.

---

## 1. Project Overview

| Property | Value |
|---|---|
| **Project Name** | Sri Kanukondaraya Swamy Devasthanam (SKSD) |
| **Temple Full Name** | Sri Kanukondaraya Swamy Devasthanam |
| **Deity** | Sri Kanukondaraya Swamy (manifestation of Lord Maha Vishnu) |
| **Short Name** | KRS Devasthanam |
| **Domain** | `https://kanugondatemple.com` |
| **Repo Location** | `d:\SKSDevasthanams\skrd\` |
| **Framework** | Next.js 16.2.2 (App Router) |
| **Language** | TypeScript |
| **Styling** | TailwindCSS v4 (`@import "tailwindcss"` in globals.css) |
| **Output Mode** | **Static Export** (`output: 'export'` in next.config.ts) |
| **Build Output** | `d:\SKSDevasthanams\skrd\out\` |
| **Runtime** | Node.js 20 |

### Key Temple Facts (from SKSD_History.md)
- **Deity**: Sri Kanukondaraya Swamy = Manifestation of Lord Maha Vishnu (Lord Venkateswara Swamy). This is a **god temple (male deity)**, NOT a Goddess temple.
- **The Devara Eddu**: The Sacred Ox is NOT Nandi (Shiva's vehicle). It is a direct living manifestation (Vibhavarupa) of Lord Vishnu — "The Walking God."
- **Sacred Confluence**: Temple where Vaishnavism and Shaivism unite; Maha Shivaratri is the grandest festival.
- **Origin**: 3 miraculous steps taken by Sacred Ox during 19th-century drought — from Mulakalacheruvu → Kalavagunta → Kaligiri Konda → Pedakanti Palli.
- **Location**: Pedakanti Palli (Village), Gangadhara Nellore Mandal, Chittoor District, Andhra Pradesh — 517125.
- **Govt**: Under AP Endowment Department since 10.03.1977.
- **Reconstruction**: Rs. 7 Crore project on 2-acre site (started 2020, completing 2028). Grand festival celebrations **temporarily suspended**.
- **Thalakattu**: 1,200+ registered devotees.
  - **Phone**: None published — Email-only policy (no phone number on website)
  - **WhatsApp**: None published — Email-only policy
  - **Website Email**: hello@cjkdigitalsolutions.com

---

## 2. Tech Stack & Dependencies

### Core
- **Next.js 16.2.2** — App Router, static export
- **React 19.2.4** + **react-dom 19.2.4**
- **TypeScript 5+**

### Styling
- **TailwindCSS v4** via `@tailwindcss/postcss`
- Custom design tokens in `app/globals.css` under `@theme {}`
- Design system: **"Kumkum Dusk"** — deep sacred maroon background `#1A0808`, gold `#D4AF37`, saffron `#E8690A` (upgraded from original black `#0E0A07` in Session 15)
- Fonts: Cinzel Decorative (display), EB Garamond (serif body), Inter (heading/UI), Noto Serif Telugu (Telugu text)

### Key Libraries
- **Framer Motion 12.38.0** — page animations
- **canvas-confetti 1.9.4** — installed but unused (Donate page disabled)
- **@serwist/next 9.5.7** — Service Worker / PWA
- **@next/third-parties** — Google Analytics via `<GoogleAnalytics>`

### Analytics
- Google Analytics 4 via `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable
- Custom `logEvent()` helper in `lib/analytics.ts`
- Conditionally loaded only when env var is set (no breakage in development)

---

## 3. Bilingual System (CRITICAL — READ CAREFULLY)

The site is **fully bilingual: English (EN) and Telugu (TE)**. The language system is custom-built.

### Architecture
| File | Role |
|---|---|
| `lib/LanguageContext.tsx` | React Context with `LanguageProvider`, `useLanguage()` hook, `useBilingualText()` hook |
| `locales/en.json` | English locale keys |
| `locales/te.json` | Telugu locale keys (must mirror en.json structure exactly) |

### How it works
1. `LanguageProvider` wraps the entire app (via `ClientLayout.tsx`)
2. Language stored in `localStorage` key `sksd_locale` — **persists across pages and sessions**
3. When Telugu is active: `html` element gets `lang="te"` attribute and `lang-te` CSS class
4. `lang-te` class in `globals.css` triggers Noto Serif Telugu font for all body text
5. Components access language via `const { t, locale } = useLanguage()`
6. Pattern in every component: `const isTe = locale === "te";`
7. Bilingual data objects (e.g., in `data/timings.ts`) use `{ en: "...", te: "..." }` and are read via `useBilingualText()` hook

### Standard Localization Pattern
```tsx
// At top of every client component:
const { t, locale } = useLanguage();
const isTe = locale === "te";

// Static strings:
{isTe ? "తెలుగు వచనం" : "English text"}

// Locale keys (from en.json / te.json):
{t.nav.home}

// Bilingual data objects:
const getText = useBilingualText();
getText(timing.title) // returns timing.title.te or timing.title.en based on locale
```

### SSR Safety
- `LanguageProvider` always renders with `locale = "en"` on the server
- `useEffect` reads `localStorage` on client mount only — prevents hydration mismatch
- The `lang-te` CSS class and `html[lang]` are applied client-side only

---

## 4. Complete Page Inventory & Status

### ✅ ALL PAGES COMPLETE — FULLY BILINGUAL

| Route | File(s) | Status | Notes |
|---|---|---|---|
| `/` | `app/page.tsx` | ✅ Complete + Bilingual | Hero, Balaji Connection section, Identity (3 photo cards), Three Steps, Gallery, Sevas, CTA sections |
| `/about` | `app/about/page.tsx` + `AboutPageClient.tsx` | ✅ Complete + Bilingual | Hero, origin story, phases, ancestral legacy, reconstruction banner |
| `/devara-eddu` | `app/devara-eddu/page.tsx` + `DevaraEdduClient.tsx` | ✅ Complete + Bilingual | The Walking God full story page |
| `/three-steps` | `app/three-steps/page.tsx` + `ThreeStepsClient.tsx` | ✅ Complete + Bilingual | Three sacred steps journey page |
| `/timings` | `app/timings/page.tsx` + `TimingsPageClient.tsx` | ✅ Complete + Bilingual | Daily/special/festival schedule, live status widget |
| `/sevas` | `app/sevas/page.tsx` | ✅ Complete + Bilingual | Seva booking via **Email** (no WhatsApp), flip cards |
| `/gallery` | `app/gallery/page.tsx` + `GalleryPageClient.tsx` | ✅ Complete + Bilingual | Masonry grid, lightbox, 15 real temple photos |
| `/contact` | `app/contact/page.tsx` + `ContactPageClient.tsx` | ✅ Complete + Bilingual | Google Maps, address, **Email-only** CTA (no phone/WhatsApp) |
| `/donate` | `app/donate/page.tsx` | ⛔ Disabled | Server-side redirects to `/` |
| `/live` | `app/live/page.tsx` | ⛔ Hidden | Not in nav. Temple under reconstruction, no live events |
| `/offline` | `app/offline/page.tsx` | ✅ PWA fallback | Shown when offline |
| `/privacy` | `app/privacy/page.tsx` | ✅ Static | Footer link only |
| `/terms` | `app/terms/page.tsx` | ✅ Static | Footer link only |

### Shared Components — Status

| Component | File | Status |
|---|---|---|
| Navbar | `components/Navbar.tsx` | ✅ Complete + Bilingual — Namalu SVG logo, dropdown with real photo thumbnails |
| Footer | `components/Footer.tsx` | ✅ Complete + Bilingual — Namalu SVG logo, email-only contact |
| ClientLayout | `components/ClientLayout.tsx` | ✅ Wraps app in LanguageProvider + Navbar + Footer |
| ~~WhatsApp FAB~~ | ~~`components/WhatsAppFAB.tsx`~~ | ⛔ **DELETED** — WhatsApp removed from site (Session 11/18) |
| CookieBanner | `components/CookieBanner.tsx` | ✅ GDPR consent banner |
| ScrollProgress | `components/ScrollProgress.tsx` | ✅ Fixed top progress bar |
| Primitives | `components/ui/Primitives.tsx` | ✅ Button, SectionHeading, Card — Namalu SVG in section dividers |

---

## 5. Data Files

| File | Content | Bilingual? |
|---|---|---|
| `data/templeInfo.ts` | Address, email (hello@cjkdigitalsolutions.com), Google Maps embed URL. **No phone, no WhatsApp, no social links** — Email-only policy enforced | ✅ `address: {en, te}` |
| `data/timings.ts` | Daily schedule, special day schedule — `title: {en, te}` | ✅ All bilingual |
| `data/festivals.ts` | 8 festivals — `name: {en, te}`, `description: {en, te}`, `duration: {en, te}` | ✅ All bilingual |
| `data/sevas.ts` | Seva offerings — `name: {en, te}`, `description: {en, te}`, `duration: {en, te}` | ✅ All bilingual |
| `data/gallery.ts` | 15 real temple gallery items across 5 categories — `caption: {en, te}` | ✅ All bilingual |
| `data/priests.ts` | Placeholder priest data | ⚠️ Placeholder — not displayed in UI |
| `data/donations.ts` | ⛔ Disabled | Not used |
| `data/live.ts` | YouTube placeholder | ⛔ Not used (page hidden) |

---

## 6. Locale Files

### Structure (both files must mirror each other exactly)

```
locales/
├── en.json   — English
└── te.json   — Telugu
```

### Key sections in both files:
- `nav` — Navbar labels (home, about, timings, sevas, gallery, contact, devaraEddu, threeSteps)
- `hero` — Homepage hero section
- `identity` — Temple identity section
- `about` — About page labels
- `timings` — Timings page labels (dailySchedule, specialSchedule, festivalSchedule, etc.)
- `sevas` — Sevas page labels (all, archana, abhishekam, special, annadanam, bookWhatsApp, note, etc.)
- `gallery` — Gallery page labels (all, temple, deity, festival, events, videos, close, prev, next)
- `contact` — Contact page labels (address, phone, whatsapp, visitingHours, getDirections, callNow, etc.)
- `devaraEddu` — The Walking God page labels
- `threeSteps` — Three Steps page labels

> ⚠️ **TypeScript enforces that te.json mirrors en.json exactly.** If you add a new key to en.json, add the same key to te.json or TypeScript will error.

---

## 7. SEO Configuration

### Root Layout (`app/layout.tsx`)
- `metadataBase`: `https://kanugondatemple.com`
- Title template: `"%s | Sri Kanukondaraya Swamy Devasthanam"`
- Full OG tags, Twitter cards, robots allow all
- **JSON-LD Structured Data**: `HinduTemple` + `TouristAttraction` + `WebSite` + `BreadcrumbList`
- PWA meta tags: manifest, apple-touch-icon, theme color

### Per-Page Metadata — All Complete
| Page | Title | OG Image | Keywords |
|---|---|---|---|
| `/` | ✅ Full title + description | `/images/og-image.jpg` | ✅ 12 keywords |
| `/about` | ✅ Full | `/images/og-image.jpg` | ✅ |
| `/devara-eddu` | ✅ Full | `/images/devara-eddu/devara-eddu-hero.jpg` | ✅ 8 keywords |
| `/three-steps` | ✅ Full | `/images/three-steps/step3-pedakanti-palli.jpg` | ✅ 8 keywords |
| `/timings` | ✅ Full | `/images/og-image.jpg` | ✅ 8 keywords |
| `/sevas` | ✅ Full (in layout.tsx) | `/images/og-image.jpg` | ✅ |
| `/gallery` | ✅ Full | `/images/og-image.jpg` | ✅ 6 keywords |
| `/contact` | ✅ Full | `/images/og-image.jpg` | ✅ 6 keywords |

### Sitemap (`app/sitemap.ts`)
All 10 public routes included with priorities:
- `/` — priority 1.0, weekly
- `/devara-eddu` — priority 0.95, monthly
- `/three-steps` — priority 0.90, monthly
- `/timings` — priority 0.90, weekly
- `/about` — priority 0.85, monthly
- `/sevas` — priority 0.85, monthly
- `/contact` — priority 0.80, monthly
- `/gallery` — priority 0.75, weekly
- `/privacy` — priority 0.20, yearly
- `/terms` — priority 0.20, yearly

### Robots (`app/robots.ts`)
- Allow all crawlers
- Points to `https://kanugondatemple.com/sitemap.xml`

---

## 8. Deployment Configuration

### Hosting Platform: **Vercel** (switched from Netlify in Session 19)

### Build & Output
```bash
npm run build   # Generates static site in /out directory
```
- Output: `out/` — **16 pages, ~14 MB static export**
- Every page is pre-rendered as static HTML
- `/out/` is **NOT committed to git** — Vercel builds it on their servers

### Deployment Files
| File | Purpose |
|---|---|
| `vercel.json` | Vercel config — `/donate` redirect, security headers, cache headers |
| `next.config.ts` | `output: 'export'`, `trailingSlash: true`, `removeConsole: true` in production |

### How to Deploy (Git-connected — auto deploys on every push)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub → import `skrd_balaji` repo
3. Leave all settings as default → click **Deploy**
4. Add custom domain `kanugondatemple.com` in Project Settings → Domains
5. Every `git push` to `main` auto-deploys ✅

### Live URL
- Vercel URL: `skrd-balaji.vercel.app` (or custom name assigned by Vercel)
- Custom domain (pending): `kanugondatemple.com`

### Environment Variables (set in Vercel dashboard → Project → Settings → Environment Variables)
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID (e.g., `G-XXXXXXXXXX`) |

---

## 9. Post-Launch Checklist (PENDING)

These tasks are not code changes — they require external accounts:

- [ ] **Google Search Console**: Add property → verify → submit sitemap (`/sitemap.xml`)
- [ ] **Force-index key pages**: `/`, `/devara-eddu`, `/three-steps` via URL Inspection tool
- [ ] **Google Analytics**: Create GA4 property → get Measurement ID → add to Netlify env vars
- [ ] **Google Business Profile**: Claim listing for temple → add website URL → add photos
- [ ] **Real images**: Replace placeholder image stubs in `public/images/` with actual temple photos (see `images.md` for specs)

---

## 10. Known Placeholders & Future Work

| Item | Location | Status |
|---|---|---|
| Hero image | `public/images/hero-deity.jpg` | ✅ Real photo placed |
| OG image | `public/images/og-image.jpg` | ✅ Placed |
| Devara Eddu photos | `public/images/devara-eddu/` | ✅ **6 real photos** — hero, portrait, balaji, with-mother, calf, acceptance-ritual |
| Three Steps photos | `public/images/three-steps/` | ✅ **3 real photos** — step1-kalavagunta, step2-kaligiri-konda, step3-pedakanti-palli |
| Gallery photos | `public/images/gallery/` | ✅ **3 real photos** — gopuram, sanctum, maha-shivaratri |
| Deity photos | `public/images/deity/` | ✅ **2 photos** — deity-blessing, deity-closeup |
| The Mall photos | `public/images/the-mall/` | ✅ **2 real photos** — pallaru-chekka, the-mall-sacred-ground |
| Priest data | `data/priests.ts` | ⚠️ Placeholder — not displayed in UI |
| Live stream | `app/live/` | ⏳ YouTube ID when temple events resume post-reconstruction |

> All images now use **real temple photography**. The `images.md` file contains historical AI-generation prompts but all images have been replaced with actual photos.

---

## 11. Development Commands

```bash
# Start dev server (already running)
npm run dev

# Type check (run after any component change)
npx tsc --noEmit

# Production build
npm run build

# Lint
npm run lint
```

---

## 12. Complete Change Log

### Session 1 — Initial Setup / Content Correction (2026-04-15)
- Fixed temple name (was wrong) across all files
- Updated `data/templeInfo.ts` with correct phone, address, deity info
- Removed FestivalTicker and PWAProvider from layout
- Set `/donate` to redirect to `/`
- Removed `/live` from navigation
- Updated `public/manifest.json` with correct temple name

### Session 2 — Full Site Redesign (2026-04-15)
- Created `SKS_PRD.md` — full redesign product requirements document
- Implemented "Divine Presence" dark design system in `app/globals.css`
- Redesigned Navbar with new nav links: Devara Eddu, Three Steps, Timings, Sevas, Gallery, Contact
- Redesigned Footer with temple identity, Sacred Story links, Darshan timings quick-ref, Connect column
- Built new homepage (`app/page.tsx`) — Hero, Identity, Three Steps preview, Gallery preview, Sevas preview, Contact CTA
- Built `/devara-eddu` page — The Walking God full story with 6 content sections, hero, closing CTA
- Built `/three-steps` page — Three sacred steps journey with step-by-step layout, map section, historical context
- Updated Sevas page with flip-card design and WhatsApp booking integration
- Updated Gallery page with masonry grid, lightbox, and video section
- Updated Contact page with Google Maps embed and full contact cards

### Session 3 — Bilingual Localization Phase A: Infrastructure (2026-04-15)
- Built `lib/LanguageContext.tsx` — LanguageProvider, useLanguage hook, useBilingualText hook
- Added `locales/en.json` and `locales/te.json` — full bilingual key structure
- Added `lang-te` CSS class to `globals.css` for Noto Serif Telugu font activation
- Updated Navbar language toggle — persists via localStorage
- Localized Navbar labels via `t.nav.*`

### Session 4 — Bilingual Localization Phase B: Page by Page (2026-04-15 → 2026-04-16)
All pages fully localized in this order:
1. **Homepage** (`app/page.tsx`) — hero, identity, three steps CTA
2. **Devara Eddu** (`DevaraEdduClient.tsx`) — entire page rewritten with `isTe` pattern
3. **Three Steps** (`ThreeStepsClient.tsx`) — entire page rewritten with `isTe` pattern
4. **About** (`AboutPageClient.tsx`) — entire page rewritten (hero, origin, phases, legacy, reconstruction banner, CTA)
5. **Timings** (`TimingsPageClient.tsx`) — hero eyebrow, h1, "Featured" badge + `t.timings.*` keys
6. **Sevas** (`app/sevas/page.tsx`) — eyebrow, h1, card labels, "View Details", "Seva Details"
7. **Gallery** (`GalleryPageClient.tsx`) — eyebrow, h1, "Temple Videos" heading
8. **Contact** (`ContactPageClient.tsx`) — eyebrow, h1, all contact labels
9. **Footer** (`components/Footer.tsx`) — all section headings, Sacred Story links, Darshan quick-ref, reconstruction notice, copyright, tagline
10. **Navbar** (`components/Navbar.tsx`) — all nav labels

### Session 5 — Phase 7: SEO & Launch Prep (2026-04-16)
- Enriched metadata for `/timings`, `/gallery`, `/contact` — full titles, keywords, OG images
- Fixed sitemap: added `/devara-eddu` and `/three-steps` (were missing)
- Updated sitemap priorities (story pages rank highest after homepage)
- Created `netlify.toml` — build config, security headers, cache headers, `/donate` redirect
- Created `public/_headers` — Netlify/plain host header rules
- Updated `next.config.ts` — `removeConsole: true` in production
- Final production build: ✅ **16 pages, 200 files, 14 MB, zero errors**

### Session 6 — Documentation Update & Mandatory Rule (2026-04-16)
- Complete rewrite of `SKSD_Project.md` — accurate current state across all 13 sections
- Added mandatory rule: **SKSD_Project.md must be updated after every task**, in both `SKSD_Project.md` and `AGENTS.md`
- Updated `AGENTS.md` — full project brief for any fresh AI session, with mandatory update rule at top
- Updated `README.md` — reflects launch-ready status and correct page list
- Files modified: `SKSD_Project.md`, `AGENTS.md`, `README.md`

### Session 7 — Navbar Fixes & Custom Cursor Removal (2026-04-16)
- **Bug fix**: "The Walking God" nav tab was always appearing highlighted (gold border) even when on other pages — caused by the `highlight: true` prop rendering a permanent gold border style. Removed `highlight` prop entirely; active state now purely controlled by `isActive()`.
- **Bug fix**: `isActive()` now uses **exact match for `/`** and `pathname === href` for sub-pages — prevents false positives on prefix matching.
- **Feature**: Complete Navbar Desktop redesign — nav links now grouped in **3 distinct pill containers**:
  - Pill 1 (subtle glass): Home, About
  - Pill 2 (gold-tinted): Sacred Story label + Walking God, Three Steps
  - Pill 3 (subtle glass): Timings, Sevas, Gallery, Contact
  - Active tab filled with saffron gradient (main/visit) or gold gradient (story) — unambiguous visual state
- **Bug fix**: Removed `<CustomCursor />` from `ClientLayout.tsx` — eliminates the dot + circle cursor that was confusing users
- Files modified: `components/Navbar.tsx`, `components/ClientLayout.tsx`

### Session 8 — Navbar Final Redesign (2026-04-16)
- Complete rewrite of `components/Navbar.tsx` following user feedback ("topic by topic, user-friendly")
- **Design pattern**: Clean flat links + a **"Sacred Story" dropdown** that groups the two story pages
- Desktop layout: `Home | About | [Sacred Story ▾] | Timings | Sevas | Gallery | [Contact button]`
- "Sacred Story" dropdown opens as a floating card with 🐂 Walking God + 👣 Three Steps as rich menu items (with description subtitle each)
- **Active state**: Gold underline on active link — clear, unambiguous, not overwhelming
- **Contact**: Styled as a distinct saffron pill/button on the far right for immediate visibility
- Mobile drawer: Three labeled groups (General / Sacred Story / Plan Your Visit), each in its own card
- Dropdown closes on outside click and on navigation
- Files modified: `components/Navbar.tsx`

### Session 9 — Horizontal Dropdown (2026-04-16)
- Redesigned the "Sacred Story" dropdown from vertical stack to **wide horizontal 2-column layout** (480px wide)
- Two story items (Walking God, Three Steps) displayed **side by side** — each with emoji, title, description, and "Read story →" CTA
- "Read story →" arrow nudges on hover via group-hover for micro-interaction
- Files modified: `components/Navbar.tsx`

### Session 10 — Homepage Full Telugu Fix (2026-04-16)
- Fixed all hardcoded English strings on `app/page.tsx` that were not switching to Telugu
- **Three Steps cards**: place names (Kalavagunta/కాలవగుంట, Kaligiri Konda/కాళగిరి కొండ, Pedakanti Palli/పెదకంటి పల్లి), sub-region labels, and all three card descriptions now bilingual
- **Devara Eddu section**: eyebrow, title, pull-quote, main description paragraph, all 3 key facts (label+value), and CTA button fully bilingual
- **Gallery section**: eyebrow, title, and "View Full Gallery" button now bilingual
- **Sevas section**: eyebrow, title, seva card names/descriptions/durations (read from `.te` field in `sevas.ts`), and "View All Sevas" CTA now bilingual
- **Contact strip**: heading, address, both buttons ("Get Directions & Contact", "WhatsApp the Temple") now bilingual
- Files modified: `app/page.tsx`

### Session 11 — Remove WhatsApp/Phone, Update Email (2026-04-16)
- **Policy**: Temple contact is email-only — no phone number or WhatsApp displayed anywhere
- **Email updated**: `chiranjeevi.kcr@gmail.com` → `hello@cjkdigitalsolutions.com` everywhere
- **`data/templeInfo.ts`**: `phone`, `whatsapp`, `whatsappMessage` set to `null`; email updated
- **`components/ClientLayout.tsx`**: Removed `<WhatsAppFAB />` import and usage
- **`components/Footer.tsx`**: Removed phone row; replaced WhatsApp CTA with Email CTA (gold theme); address made bilingual
- **`app/page.tsx`**: Sevas CTA text changed to "View All Sevas"; WhatsApp button in contact strip replaced by Email button
- **`app/contact/ContactPageClient.tsx`**: Phone card + WhatsApp card replaced by a single Email card
- **`app/sevas/page.tsx`**: Removed `WHATSAPP_NUMBER` constant, `buildWhatsAppUrl` helper; "Book via WhatsApp" button → "Book via Email" (mailto with seva subject); bottom CTA bar replaced by single email CTA
- **`app/live/LivePageClient.tsx`**: Removed `buildWhatsAppUrl`; offline-state WhatsApp button → email button
- **`app/layout.tsx`**: JSON-LD `telephone` → `email: hello@cjkdigitalsolutions.com`

---

### Session 12 — Gallery Images + Deity Name Fix (2026-04-16)
- **Gallery images were blank**: All gallery items referenced `/images/gallery/` but files existed only in `/images/gallery_bkp/`. Copied all 12 images from `gallery_bkp/` into `gallery/` — images now display correctly
- **Deity name corrected**: "Sri Raya Swami" → "Sri Kanukondaraya Swamy" (full name, no short form)
- **Gender corrected**: Telugu captions "ప్రధాన దేవత" (feminine) → "ప్రధాన దేవుడు" (male); "ప్రత్యేక దేవత అలంకారం" → "శ్రీ కనుకొండరాయ స్వామి ప్రత్యేక అలంకారం"
- Files modified: `data/gallery.ts`; new files added: `public/images/gallery/` (12 image files)

### Session 13 — Gallery Replaced with Real Temple Photos (2026-04-16)
- **Removed 9 old stock images** from `public/images/gallery/` (all copied from `gallery_bkp/`) that were unrelated to the temple
- **Rebuilt `data/gallery.ts`** with 15 genuine temple items across 5 categories:
  - **Temple** (4): Gopuram, Inner Sanctum, Pallaru Chekka, The Mall Sacred Ground
  - **Deity** (4): Deity Blessing, Deity Closeup, Devara Eddu hero, Devara Eddu portrait
  - **Events** (6): Devara Eddu with mother, calf drinking milk, acceptance ritual, all 3 three-steps images
  - **Festival** (1): Maha Shivaratri Celebration
- Gallery now shows 15 real temple photos; the video placeholder was removed
- Files modified: `data/gallery.ts`; files deleted: 9 old images from `public/images/gallery/`

### Session 14 — Remove All Social Media Platforms (2026-04-16)
- **Policy**: Temple has no social media accounts — all Facebook, Instagram, YouTube, Twitter links removed from entire site
- **`data/templeInfo.ts`**: Deleted `socialLinks` object entirely (Facebook, Instagram, YouTube)
- **`components/Footer.tsx`**: Removed entire social icons row (3 icon buttons: FB, IG, YT)
- **`app/live/LivePageClient.tsx`**: Removed "Visit YouTube Channel" button from offline-state; replaced "Subscribe on YouTube" CTA section with "Contact Us" email CTA
- **`app/layout.tsx`**: Removed `twitter:` Open Graph card meta block
- **Verified**: `grep` search across all `.tsx`/`.ts` files — zero remaining `socialLinks`, `facebook.com`, `instagram.com`, `twitter.com` references
- TypeScript: ✅ zero errors after changes

### Session 15 — "Kumkum Dusk" Background Color Overhaul (2026-04-17)
- **Design rationale**: Black (#0E0A07) removed from all pages — replaced with deep sacred maroon "Kumkum Dusk" inspired by ancient South Indian temple brick walls lit by oil lamps; auspicious in Indian culture
- **New color system in `globals.css`**:
  - `--color-temple-dark: #1A0808` (Deep Sacred Maroon — was #0E0A07)
  - `--color-temple-mid: #240F0F` (was #1a1008)
  - `--color-temple-higher: #300F0F` (was #261808)
  - `body` base: `#120606` (slight variation for page base)
  - `glass-dark`, `card-sacred` updated to match maroon tones
- **Components updated**: `Footer.tsx` (`#120404`), `Navbar.tsx` (`#1A0808`)
- **ALL 8 pages updated**: `app/page.tsx`, `sevas/page.tsx`, `three-steps/`, `timings/`, `gallery/`, `contact/`, `devara-eddu/`, `about/` — all hardcoded inline colors replaced
- TypeScript: ✅ zero errors

### Session 16 — Walking God Icons Fixed + Balaji Section Added (2026-04-17)
- **Identity card icons fixed** in `app/page.tsx`:
  - Card 1 "Not Nandi": replaced 🐂 emoji with real circular photo (`/images/devara-eddu/devara-eddu-portrait.jpg`, gold-bordered circle)
  - Card 2 "He Walks Among You": replaced 🚶 with custom Devara Eddu SVG ox silhouette with Chakram mark (later replaced with real photo in Session 17)
  - Card 3 "Sacred Confluence": Om symbol in styled gold circle (later replaced with real photo in Session 17)
- **New "Balaji Connection" section** added to homepage (between Reconstruction Notice & Walking God):
  - Image (left): `devara-eddu-balaji.jpg` — Devara Eddu with Shanku, Chakram, Namalu
  - Content (right): Shanku · Chakram · Namalu symbol chips + bilingual description + CTA button
  - Fully bilingual (EN/TE)
- **Image placed**: `/public/images/devara-eddu/devara-eddu-balaji.jpg` ✅ (user created and saved)

### Session 17 — Full Image Consistency Fix (2026-04-17)
- **Navbar dropdown**: Replaced 🐂 and 👣 emojis with circular `next/image` thumbnails:
  - "The Walking God" → `devara-eddu-portrait.jpg` (gold border)
  - "The Three Steps" → `three-steps/step3-pedakanti-palli.jpg` (saffron border)
  - Added `import Image from "next/image"` to Navbar.tsx
- **Identity Cards**: Full consistency — all 3 cards now use identical `w-20 h-20 rounded-full border-2 gold` style:
  - Card 1: `devara-eddu-portrait.jpg` (face)
  - Card 2: `devara-eddu-hero.jpg` (walking/scene) — replaced SVG
  - Card 3: `devara-eddu-balaji.jpg` (Balaji connection) — replaced Om emoji
- **Image saved**: `/public/images/devara-eddu/devara-eddu-balaji.jpg` ✅
- TypeScript: ✅ zero errors

### Session 18 — Codebase & Image Cleanup (2026-04-17)
**Images deleted:**
- `public/images/gallery_bkp/` — entire folder (10 old generic stock images): deity-alankaram, devotees-darshan, evening-aarti, festival-celebration, main-deity, temple-front, temple-gopuram, temple-interior, temple-night, video-thumb — none referenced in any code

**Dead code deleted:**
- `components/WhatsAppFAB.tsx` — entire file (WhatsApp feature removed from site, component never imported)

**Code cleaned:**
- `data/templeInfo.ts` — removed `whatsapp: null` and `whatsappMessage: null` dead fields
- `components/ui/Primitives.tsx` — removed `whatsapp` variant from Button component type and variants map

**All remaining images are actively used** — verified by grep search across all .tsx/.ts files
TypeScript: ✅ zero errors after cleanup

### Session 18.5 — Namalu SVG Replaces Om Symbol (2026-04-17)
- **Design rationale**: Om (🕉) is generic to all Hindu deities. Namalu (Urdhva Pundra tilak) is the specific Vaishnava sacred mark — directly matching the Devara Eddu's body markings and Lord Vishnu's identity. More devotional, more specific to this temple.
- **Namalu SVG design**: Two white ellipse arcs (Shanku marks) flanking a crimson center stripe (Padma mark), with a small gold dot at top — all inside the saffron-to-gold gradient circle
- **Locations updated**:
  - `components/Navbar.tsx` — desktop logo circle + mobile drawer circle
  - `components/Footer.tsx` — footer logo circle
  - `components/ui/Primitives.tsx` — `SectionHeading` and `PremiumSectionHeading` divider ornaments (saffron/red colors, appears on all section headers site-wide)
- TypeScript: ✅ zero errors

### Session 19 — Switch Deployment Platform: Netlify → Vercel (2026-04-17)
- **Reason**: Netlify's Next.js Runtime plugin intercepted static export builds and failed to serve `_next/static/` chunks correctly across multiple deploy attempts
- **Created** `vercel.json` — `/donate` redirect (301), security headers (X-Frame-Options, CSP, Referrer-Policy), cache headers for images and `_next/static/`
- **Deleted** `netlify.toml` and `public/_headers` (Netlify-specific, no longer needed)
- **Restored** `/out/` to `.gitignore` — Vercel builds the static output on their servers
- **Removed** `out/` from git tracking (`git rm -r --cached out/`) — repo is clean again
- **GitHub repo**: `chiranjeevikcr86-personal/skrd_balaji` — connected to Vercel
- Files modified: `vercel.json` (new), `.gitignore`, removed `netlify.toml`, removed `public/_headers`

## 13. Project State Summary

```
OVERALL STATUS: ✅ LAUNCH READY — BUILD CLEAN

Pages:          16 routes all building successfully
Bilingual:      100% — every string on every page is EN/TE
TypeScript:     Zero errors (last check: 2026-04-17)
Build:          npm run build → exit code 0
Output:         out/ directory — 16 pages, ~14 MB (NOT in git — Vercel builds it)
Deployment:     Vercel — vercel.json config, GitHub auto-deploy on push
GitHub repo:    chiranjeevikcr86-personal/skrd_balaji (main branch)
SEO:            All pages have title, description, OG image, keywords
Sitemap:        10 public URLs with correct priorities
Schema:         HinduTemple JSON-LD structured data in root layout
Images:         19 real temple photos across 5 folders — all actively used
Contact policy: Email-only (hello@cjkdigitalsolutions.com) — no phone, no WhatsApp, no social media
Branding:       Kumkum Dusk maroon theme + Namalu SVG logo throughout

Pending (non-code):
  - DEPLOY TO VERCEL: vercel.com/new → import skrd_balaji → Deploy
  - Google Analytics Measurement ID (env var: NEXT_PUBLIC_GA_MEASUREMENT_ID in Vercel dashboard)
  - Google Search Console: verify domain + submit sitemap
  - Google Business Profile: claim + add website + photos
  - DNS: point kanugondatemple.com to Vercel (after deploying)
  - Live stream: YouTube ID when temple events resume (post-2028 reconstruction)
```
