# AI Agent Instructions — Sri Kanukondaraya Swamy Devasthanam Website

## 🔴 MANDATORY RULE — UPDATE SKSD_Project.md AFTER EVERY TASK

**After completing ANY user request — no matter how small — you MUST update `SKSD_Project.md`.**

This includes:
- Appending the change to **Section 12 (Change Log)** with date, what was changed, and which files were modified
- Updating **Section 4 (Page Inventory)** if any page status changed
- Updating **Section 13 (Project State Summary)** if the overall state changed

**Do not consider a task complete until `SKSD_Project.md` is updated.**

The user works across multiple IDEs and sessions. This document is the ONLY reliable handoff between sessions.

---

## ⚡ START HERE — Before Writing a Single Line of Code

**Read `SKSD_Project.md` completely.** It is the single source of truth for this project.

Path: `d:\SKSDevasthanams\skrd\SKSD_Project.md`

---

## Project in One Sentence

This is the **fully bilingual (English/Telugu) official website** for Sri Kanukondaraya Swamy Devasthanam — an ancient Hindu temple in Pedakanti Palli, Chittoor, Andhra Pradesh. It is built with **Next.js 16 (App Router, static export)**, TailwindCSS v4, and TypeScript.

## Current State (as of 2026-04-17)

**✅ LAUNCH READY.** Every page is built, fully bilingual, and visually polished.

- 8 main pages: Home, About, Devara Eddu, Three Steps, Timings, Sevas, Gallery, Contact
- All pages bilingual EN/TE — language persists via localStorage
- Production build clean: `npm run build` → `out/` directory → 16 pages, ~14 MB
- SEO complete: sitemap, robots.txt, per-page metadata, JSON-LD schema
- Deployment config: `vercel.json` (redirects, security headers, cache headers)
- **Contact policy**: Email-only (`hello@cjkdigitalsolutions.com`) — no phone, WhatsApp, or social media
- **Branding**: "Kumkum Dusk" deep maroon theme + Namalu SVG logo throughout
- **Images**: 19 real temple photos across 5 folders — all actively used

## Critical Rules

1. **Never invent temple content.** All temple history, deity descriptions, story content MUST come from `SKSD_History.md`.
2. **Always maintain bilingual parity.** Any new string must have both EN and TE versions. Pattern: `const isTe = locale === "te"; {isTe ? "తెలుగు" : "English"}`
3. **No donation features.** `/donate` redirects to `/`. Do not add any donation UI.
4. **Static export only.** `output: 'export'` in `next.config.ts`. Do NOT use server-side features like `getServerSideProps`, API routes, or server actions.
5. **Match the design system.** Background `#1A0808` (Kumkum Dusk maroon), gold `#D4AF37`, saffron `#E8690A`. All design tokens are in `app/globals.css` under `@theme {}`. Namalu SVG used as logo/divider ornament throughout.
6. **Run TypeScript check after changes:** `npx tsc --noEmit`

## Key Files to Know

| File | What it does |
|---|---|
| `lib/LanguageContext.tsx` | `LanguageProvider`, `useLanguage()`, `useBilingualText()` hooks |
| `locales/en.json` + `locales/te.json` | Locale key strings — must always be in sync |
| `app/globals.css` | Design system tokens, animations, `lang-te` class for Telugu font |
| `data/templeInfo.ts` | Address, email (hello@cjkdigitalsolutions.com), Google Maps URL. **No phone/WhatsApp** |
| `data/timings.ts` | Daily + special + festival schedule |
| `data/sevas.ts` | Seva offerings — booking via **Email** (no WhatsApp) |
| `data/festivals.ts` | Festival calendar |
| `data/gallery.ts` | 15 real temple gallery items |

## Next.js Version Warning

This project uses **Next.js 16.2.2**. APIs and conventions may differ from your training data. Check `node_modules/next/dist/docs/` if unsure about an API.
