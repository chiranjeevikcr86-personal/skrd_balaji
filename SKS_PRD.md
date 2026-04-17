# SKS_PRD.md — Product Requirements Document
## Sri Kanukondaraya Swamy Devasthanam — World-Class Temple Website Redesign

> **Document Purpose:** This is the master PRD for transforming the current website into the world's finest Hindu temple website. Every design decision, every page, every content block is defined here. This is the reference document before writing a single line of code.

> **No Donation features** will be added anywhere in this project.

---

## 1. THE VISION

### What We Are Building
The **Sri Kanukondaraya Swamy Devasthanam** website must be the **undisputed #1 temple website in the world** — not just for India, but globally. When a devotee opens this website, they must feel:

> *"I have just arrived at the gates of the temple itself."*

The experience must be sacred, cinematic, immersive, and deeply Telugu-rooted. Every pixel must radiate **divinity, trust, and heritage**.

### The Soul of This Temple (From SKSD_History.md — The Source of Truth)
This is not a generic Hindu temple. It has a **unique, 1,000-year-old identity**:

1. **Sri Kanukondaraya Swamy** is a **manifestation of Lord Maha Vishnu (Lord Venkateswara Swamy)** — this is a **God temple, not a Goddess temple**.
2. The **Devara Eddu (Sacred Ox)** is not Nandi (Shiva's vehicle). Here, the Sacred Ox **IS** Lord Vishnu manifested — the "Walking God."
3. The temple is a **Sacred Confluence** — where Vaishnavism and Shaivism unite (they celebrate Maha Shivaratri with great grandeur).
4. The origin story: **Three Miraculous Steps** taken by the Sacred Ox across Chittoor district during a devastating 19th-century drought.
5. The temple is **currently being rebuilt** — a Rs. 7 Crore, 2-acre government project completing in 2028.
6. Under **AP Endowment Department** since 10.03.1977, managed by a government-appointed Executive Officer.

---

## 2. DESIGN IDENTITY

### 2.1 Visual Theme: "Divine Presence"
The website must feel like you are **standing inside the temple at golden hour** — warm, glowing, sacred, alive.

| Token | Value | Reason |
|---|---|---|
| **Primary Saffron** | `#E8690A` | Sacred fire, offering flame |
| **Divine Gold** | `#D4AF37` | Temple lamps, divine light |
| **Deep Crimson** | `#8B1A1A` | Kumkum, auspicious red |
| **Temple Dark** | `#0E0A07` | Night sky at temple, depth |
| **Ivory / Cream** | `#FBF7F0` | Jasmine, purity, white flowers |
| **Lotus Pink** | `#C45C7B` | Lotus offering to the Lord |
| **Sacred Teal** | `#1A5C6B` | Peacock feather (Lord Vishnu) |

### 2.2 Typography
| Role | Font | Source |
|---|---|---|
| **Display (Temple Name / Headings)** | `Cinzel Decorative` | Google Fonts — regal, timeless |
| **Body / History Paragraphs** | `EB Garamond` | Elegant serif, scripture-like |
| **Telugu Text** | `Noto Serif Telugu` | Authentic, beautiful Telugu |
| **UI Labels / Navigation** | `Inter` | Modern, clean readability |

### 2.3 Background & Atmosphere
- **Homepage Hero**: Full-screen God image OR golden mandala with divine light rays (placeholder until image is ready)
- **Section Backgrounds**: Alternating deep dark (`#0E0A07`) and warm ivory (`#FBF7F0`) — no plain white
- **Texture Overlays**: Subtle lotus / mandala watermarks, ancient stone textures as background overlays
- **Particle Effects**: Floating golden "deepam" (lamp light) particles drifting upward on hero section
- **Divine Light Rays**: Subtle CSS light beam animation from above, like temple sanctum light

### 2.4 Animation Philosophy
| Animation | Location | Type |
|---|---|---|
| Floating glow pulse on logo | Navbar | CSS animation |
| Parallax scroll on hero | Homepage | Framer Motion / CSS |
| Fade-in-up per section | All pages | Framer Motion `useInView` |
| Staggered text reveal | History/story sections | Framer Motion stagger |
| Lamp flicker | Footer deepam icons | CSS keyframe |
| Sacred particle drift | Hero background | CSS / Canvas particles |
| Number roll-up | Stats (1000+ years, 60 acres) | Framer Motion counter |
| Step reveal on scroll | Three Steps page | Scroll-triggered animation |

---

## 3. NAVIGATION REDESIGN

### 3.1 New Page Structure

#### Pages to KEEP & Redesign:
| Page | Route | Status |
|---|---|---|
| **Home** | `/` | Redesign completely |
| **About & History** | `/about` | Replace content with SKSD_History.md |
| **The Walking God (Devara Eddu)** | `/devara-eddu` | **NEW PAGE — Most important** |
| **The Three Steps** | `/three-steps` | **NEW PAGE — Origin story** |
| **Darshan & Timings** | `/timings` | Keep + add reconstruction notice |
| **Sevas** | `/sevas` | Keep + style improvements |
| **Gallery** | `/gallery` | Keep + add Sacred Ox category |
| **Contact** | `/contact` | Keep + update all info |

#### Pages / Sections to REMOVE from Navigation:
| Item | Reason |
|---|---|
| `/live` (Live Darshan) | Temple under reconstruction — not operational |
| `/donate` (Donation page) | No donation features in this project |
| Terms/Privacy from main nav | Move to footer-only links |

### 3.2 Navbar Design Specs
- **Sticky top**, transparent → dark glassmorphism on scroll
- **Logo left**: Sacred Ox silhouette icon + temple name (2 lines in Cinzel Decorative)
  - Line 1 (white): `Sri Kanukondaraya Swamy`
  - Line 2 (saffron/gold): `Devasthanam`
- **Desktop Nav Links** (right): Home | About | Walking God | Three Steps | Timings | Sevas | Gallery | Contact
- **Language Toggle**: Globe icon + "English" / "తెలుగు"
- **Mobile**: Hamburger → slide-in drawer with temple mandala watermark

---

## 4. PAGE-BY-PAGE BLUEPRINT

### 4.1 HOME PAGE (`/`)

**Atmosphere**: Cinematic, sacred, immersive. The homepage IS the temple entrance.

#### Hero Section
- Background: God image (Lord Venkateswara / Sri Kanukondaraya Swamy form) — full screen
- Overlay: semi-transparent dark gradient for text readability
- Badge: `Est. Ancient Times · Pedakanti Palli, Chittoor`
- H1 Gold: `Sri Kanukondaraya`
- H1 White: `Swamy Devasthanam`
- Telugu: `శ్రీ కనుకొండరాయ స్వామి దేవస్థానం`
- Subtext: *"A Manifestation of Sri Lord Venkateswara Swamy"*
- CTAs: `[ View Darshan Timings ]` `[ Book a Seva ]`
- Floating golden particles in background

#### Section 2: "Not Just a Temple — The Lord Walks Among Us"
- 3 Icon feature cards on dark background:
  1. 🐂 **The Walking God** — "The Sacred Ox is Lord Vishnu himself, not a vehicle"
  2. 🕉 **Sacred Confluence** — "Where Vaishnavism and Shaivism unite in divine harmony"
  3. ⏳ **1,000 Years of Grace** — "An unbroken tradition of devotion since ancient times"

#### Section 3: The Three Steps — Map Preview
- Visual journey showing the 3 locations in Chittoor:
  - Step 1: Kalavagunta → Step 2: Kaligiri Konda → Step 3: Pedakanti Palli (Final Destination)
- CTA: `[ Read the Sacred Journey → ]`

#### Section 4: The Devara Eddu Preview
- Large feature section: Image of Sacred Ox (left) + text (right)
- Headline: *"The Walking God — Lord Vishnu Among His People"*
- 2 lines of description + CTA: `[ Discover the Sacred Ox → ]`

#### Section 5: Reconstruction Notice
- Full-width banner, elegant (not jarring):
  > "🔷 The main temple is currently undergoing a historic Rs. 7 Crore government-sanctioned reconstruction (2020–2028). Grand festival celebrations are temporarily suspended."

#### Section 6: Contact Strip
- One-line: Address | Phone | WhatsApp button | Get Directions

---

### 4.2 ABOUT & HISTORY PAGE (`/about`)

**Remove ALL placeholder content. Replace 100% with SKSD_History.md content.**

#### Sections:
1. **Page Hero**: Dark hero — "Our Sacred Heritage — 1,000 Years of Devotion"
2. **The Eternal Identity**: Lord Vishnu as the Sacred Ox — unique theology explained
3. **Sacred Confluence**: Vaishnavism + Shaivism unity; Maha Shivaratri significance
4. **The Ancestral Foundation**: Chinna Kamasani lineage; 60 acres land donation
5. **Government Guardianship**: AP Endowment Dept since 10.03.1977; EO management
6. **Reconstruction (2020–2028)**: Rs. 7 Crore; 2-acre site; Thalakattu (1,200+ devotees)
7. **Maha Shivaratri**: Grand celebrations (suspended during reconstruction)
8. **Timeline Visual**: Ancient origins → 19th century exodus → 1933 → 1977 → 2020 → 2028

#### Design Notes:
- Scripture-style gold pull quotes for key statements
- Alternating image-left / text-right layout
- Drop-cap first letter on each major section

---

### 4.3 THE WALKING GOD — DEVARA EDDU PAGE (`/devara-eddu`) — NEW

**The crown jewel of this website. Nothing like this exists on any temple website in the world.**

#### Sections:
1. **Cinematic Hero**: Full-screen image of Sacred Ox — title: *"The Walking God"*
   - Subtitle: *"The Supreme Presence of Lord Vishnu Among His People"*
2. **The Divine Distinction**: Theological explanation — Ox is Vishnu, not Nandi
3. **The Five Sacred Signs of the Devara Eddu** (5 cards with icons):
   - 🗓 **Saturday Cycle**: Born on Saturday, passes on Saturday
   - 🥛 **Spiritual Purity at Birth**: Refuses milk if household is impure
   - 💭 **The Divine Dream**: Location revealed to Chinna Kamasani lineage
   - 🌸 **The Acceptance Ritual**: Pooja, coconuts, flowers — formal ceremony
   - 🎪 **The 3rd Year Velpu Utsavam**: Grand consecration festival
4. **Three Historical Phases Timeline**:
   - Phase 1: Era of Foundation (1933–1955) — 22 years; First documented Velpu Utsavam June 18, 1933
   - Phase 2: The Golden Era (1987–2004) — Born June 1, 1987; 18 years; Maha Shanti Yajnam Nov 27, 2005
   - Phase 3: The Brief Blessing (2014–2015) — Oct 25, 2014; passed from lung failure; reaffirmed tradition
5. **The Mall — Sacred Memorial** (Maredupalli Village, 500m from temple):
   - Pallaru Chekka concept: Cow + Ox + Tiger + Devotee in divine peace
   - Ancestral Graveyard (Samadhi) — where Sacred Oxen are laid to rest

---

### 4.4 THE THREE STEPS PAGE (`/three-steps`) — NEW

#### Sections:
1. **Hero**: Journey header — *"The Divine Exodus — How Lord Kanukondaraya Found His Home"*
2. **The Great Exodus**: 19th century drought in Mulakalacheruvu (Annamayya District)
3. **Three Steps Interactive Reveal** (scroll-triggered, one step at a time):
   - **Step 1 — Kalavagunta**, Penumuru Mandal, Chittoor
     - *"The Landing of Divine Grace"* — first signal of the Sacred Ox's presence
   - **Step 2 — Kaligiri Konda**, Penumuru Mandal, Chittoor
     - *"The Miraculous Leap"* — Ox leaped from plains to hilltop; footprint on peak
   - **Step 3 — Pedakanti Palli**
     - *"The Chosen Land"* — drought broke the moment this footprint was made; water and abundance returned
4. **The Chosen Land**: Why the Lord settled here; the community's founding
5. **Simple Map Graphic**: Chittoor district showing the 3 step locations

---

### 4.5 DARSHAN & TIMINGS PAGE (`/timings`)

- Real-time open/closed badge based on current IST time
- Morning: 5:30 AM – 12:00 PM | Evening: 4:00 PM – 8:30 PM
- Reconstruction notice: "Timings may vary during reconstruction. Contact WhatsApp to confirm."
- Puja schedule table
- WhatsApp CTA for confirmation

---

### 4.6 SEVAS PAGE (`/sevas`)

- Archana, Abhishekam, Homam, Kalyanam, Annadanam, Special Puja
- Each seva: Name (EN + Telugu), offering amount, duration, available days
- Book via WhatsApp
- Reconstruction note: "Some sevas may not be available during reconstruction."

---

### 4.7 GALLERY PAGE (`/gallery`)

New categories added:
- Temple | **Deity / God** | **Sacred Ox (Devara Eddu)** | Festivals | **The Mall** | History

Design: Dark masonry grid, lightbox, smooth filter transitions.

---

### 4.8 CONTACT PAGE (`/contact`)

All real data from `templeInfo.ts`:
- Address: Pedakanti Palli (Village), Gangadhara Nellore Mandal, Chittoor District, AP - 517125
- Phone: +91-9703076742 | WhatsApp: same
- Email: chiranjeevi.kcr@gmail.com
- AP Endowment Dept management note
- Google Maps embed (Chittoor area)

---

## 5. FOOTER

- Logo + name + tagline: *"A Manifestation of Sri Lord Venkateswara Swamy"*
- Quick links to all pages
- Contact info + WhatsApp
- © 2026 Sri Kanukondaraya Swamy Devasthanam | Privacy | Terms
- Deep dark background + mandala watermark + gold glow

---

## 6. CONTENT TO REMOVE FROM CURRENT WEBSITE

| Current Content | Action |
|---|---|
| Generic "ancient temple" placeholder history | ❌ Remove — replace with SKSD_History.md |
| `deityContent` — "Lord Raya Swami" placeholder | ❌ Remove — rewrite with accurate theology |
| Priest photos / priest data (placeholder) | ❌ Remove — section removed until real data available |
| Festival placeholder data (random dates) | ❌ Remove — replace with reconstruction notice |
| Live Darshan from navigation | ❌ Remove from nav |
| Any remaining donation references | ❌ Remove |
| Generic "Kanugonda village" location text | ✅ Already fixed — use correct address |

---

## 7. SEO KEYWORDS TO TARGET

Primary: `Kanukondaraya Swamy temple`, `Devara Eddu temple Chittoor`, `Walking God Vishnu Ox`, `Pedakanti Palli temple`
Secondary: `Sacred Ox Vishnu manifestation`, `Three Steps divine journey Chittoor`, `Pallaru Chekka`, `Velpu Utsavam`, `ancient Telugu temple`

---

## 8. PHASED IMPLEMENTATION

### Phase 1 — Foundation & Branding
- Update `globals.css` — full Divine Presence color system + new fonts
- Update `data/` files with SKSD_History.md content
- Update `locales/en.json` and `locales/te.json` with all new copy
- Redesign Navbar + Footer

### Phase 2 — Homepage Transformation
- Cinematic hero + particles
- "Lord Walks Among Us" 3-card section
- Three Steps preview
- Devara Eddu preview
- Reconstruction banner
- Contact strip

### Phase 3 — New Pages
- Build `/devara-eddu` (The Walking God — flagship page)
- Build `/three-steps` (origin story)
- Rewrite `/about` with full SKSD_History.md content

### Phase 4 — Existing Page Polish
- `/timings` redesign
- `/sevas` redesign
- `/gallery` redesign (add Sacred Ox category)
- `/contact` redesign

### Phase 5 — Imagery Placement
- Place all God images from `images.md`
- Place Sacred Ox images
- Add texture overlays, mandala backgrounds
- Hero particle system

### Phase 6 — Telugu & Bilingual
- Full Telugu translations for all new content
- Font rendering verification

### Phase 7 — SEO & Launch
- Metadata updates per page
- JSON-LD refinement
- Lighthouse performance audit
- Deploy

---

*Last updated: 2026-04-15 | Source of Truth: SKSD_History.md*
