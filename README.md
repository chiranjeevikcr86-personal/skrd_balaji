# Sri Kanukondaraya Swamy Devasthanam — Official Temple Website

> **Live domain:** https://kanugondatemple.com

Official bilingual (English / Telugu) website for Sri Kanukondaraya Swamy Devasthanam, an ancient Hindu temple in Pedakanti Palli, Gangadhara Nellore Mandal, Chittoor District, Andhra Pradesh.

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16.2.2 (App Router, Static Export) |
| Language | TypeScript |
| Styling | TailwindCSS v4 |
| Fonts | Cinzel Decorative · EB Garamond · Inter · Noto Serif Telugu |
| PWA | Serwist (Service Worker) |
| Analytics | Google Analytics 4 (conditional) |

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, temple identity, three steps preview |
| `/about` | Temple history, origin story, reconstruction status |
| `/devara-eddu` | The Walking God — Devara Eddu story |
| `/three-steps` | Three Sacred Steps — divine origin journey |
| `/timings` | Daily darshan schedule, festivals, live status |
| `/sevas` | Seva booking via WhatsApp |
| `/gallery` | Photo gallery + videos |
| `/contact` | Address, phone, WhatsApp, Google Maps |

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npx tsc --noEmit   # Type check
npm run build      # Production build → /out
```

## Deployment

Static export — drag `out/` folder to Netlify, or connect Git repo.
`netlify.toml` is pre-configured with build settings and security headers.

## For AI Models / Developers

**Read `SKSD_Project.md` before making any changes.**
It contains the complete tech stack, page inventory, bilingual system documentation, and full change log.

**Content source:** All temple descriptions and history must come from `SKSD_History.md`.
