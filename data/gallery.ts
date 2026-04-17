export interface GalleryItem {
  url: string;
  thumbnail: string;
  caption: { en: string; te: string };
  type: "image" | "video";
  videoUrl?: string;
  order: number;
  category: "temple" | "festival" | "deity" | "events";
}

export const galleryItems: GalleryItem[] = [

  // ── Temple Photos ──────────────────────────────────────────────
  {
    url: "/images/gallery/temple-gopuram.jpg",
    thumbnail: "/images/gallery/temple-gopuram.jpg",
    caption: { en: "Temple Gopuram", te: "ఆలయ గోపురం" },
    type: "image",
    order: 1,
    category: "temple",
  },
  {
    url: "/images/gallery/temple-sanctum.jpg",
    thumbnail: "/images/gallery/temple-sanctum.jpg",
    caption: { en: "Temple Inner Sanctum", te: "ఆలయ గర్భగుడి" },
    type: "image",
    order: 2,
    category: "temple",
  },

  // ── Deity Photos ───────────────────────────────────────────────
  {
    url: "/images/deity/deity-blessing.jpg",
    thumbnail: "/images/deity/deity-blessing.jpg",
    caption: { en: "Sri Kanukondaraya Swamy — Divine Blessings", te: "శ్రీ కనుకొండరాయ స్వామి — దివ్య ఆశీర్వాదాలు" },
    type: "image",
    order: 3,
    category: "deity",
  },
  {
    url: "/images/deity/deity-closeup.jpg",
    thumbnail: "/images/deity/deity-closeup.jpg",
    caption: { en: "Sri Kanukondaraya Swamy — Close View", te: "శ్రీ కనుకొండరాయ స్వామి — సన్నిహిత దర్శనం" },
    type: "image",
    order: 4,
    category: "deity",
  },

  // ── Devara Eddu — The Sacred Ox ────────────────────────────────
  {
    url: "/images/devara-eddu/devara-eddu-hero.jpg",
    thumbnail: "/images/devara-eddu/devara-eddu-hero.jpg",
    caption: { en: "Devara Eddu — The Sacred White Ox", te: "దేవర ఎద్దు — పవిత్ర తెల్ల ఎద్దు" },
    type: "image",
    order: 5,
    category: "deity",
  },
  {
    url: "/images/devara-eddu/devara-eddu-portrait.jpg",
    thumbnail: "/images/devara-eddu/devara-eddu-portrait.jpg",
    caption: { en: "Devara Eddu — Sacred Portrait", te: "దేవర ఎద్దు — పవిత్ర చిత్రం" },
    type: "image",
    order: 6,
    category: "deity",
  },
  {
    url: "/images/devara-eddu/devara-eddu-with-mother.jpg",
    thumbnail: "/images/devara-eddu/devara-eddu-with-mother.jpg",
    caption: { en: "Devara Eddu — Sacred Calf with Mother", te: "దేవర ఎద్దు — పవిత్ర దూడ తల్లితో" },
    type: "image",
    order: 7,
    category: "deity",
  },
  {
    url: "/images/devara-eddu/devara-eddu-calf-drinking-milk.jpg",
    thumbnail: "/images/devara-eddu/devara-eddu-calf-drinking-milk.jpg",
    caption: { en: "Sacred Calf Accepts Milk — After Acceptance Ritual", te: "అంగీకార కర్మ తర్వాత పవిత్ర దూడ పాలు తాగుట" },
    type: "image",
    order: 8,
    category: "events",
  },
  {
    url: "/images/devara-eddu/devara-eddu-acceptance-ritual.jpg",
    thumbnail: "/images/devara-eddu/devara-eddu-acceptance-ritual.jpg",
    caption: { en: "Devara Eddu — Acceptance Ritual (Velpu Utsavam)", te: "దేవర ఎద్దు — వేల్పు ఉత్సవం" },
    type: "image",
    order: 9,
    category: "events",
  },

  // ── The Three Sacred Steps ─────────────────────────────────────
  {
    url: "/images/three-steps/step1-kalavagunta.jpg",
    thumbnail: "/images/three-steps/step1-kalavagunta.jpg",
    caption: { en: "First Sacred Step — Kalavagunta", te: "మొదటి పవిత్ర అడుగు — కాలవగుంట" },
    type: "image",
    order: 10,
    category: "events",
  },
  {
    url: "/images/three-steps/step2-kaligiri-konda.jpg",
    thumbnail: "/images/three-steps/step2-kaligiri-konda.jpg",
    caption: { en: "Second Sacred Step — Kaligiri Konda", te: "రెండవ పవిత్ర అడుగు — కాళగిరి కొండ" },
    type: "image",
    order: 11,
    category: "events",
  },
  {
    url: "/images/three-steps/step3-pedakanti-palli.jpg",
    thumbnail: "/images/three-steps/step3-pedakanti-palli.jpg",
    caption: { en: "Third Sacred Step — Pedakanti Palli (The Chosen Land)", te: "మూడవ పవిత్ర అడుగు — పెదకంటి పల్లి (ఎంచుకున్న భూమి)" },
    type: "image",
    order: 12,
    category: "events",
  },

  // ── The Sacred Ground (The Mall) ───────────────────────────────
  {
    url: "/images/the-mall/pallaru-chekka.jpg",
    thumbnail: "/images/the-mall/pallaru-chekka.jpg",
    caption: { en: "Pallaru Chekka — Sacred Harmony Site", te: "పల్లారు చెక్క — పవిత్ర సమన్వయ స్థలం" },
    type: "image",
    order: 13,
    category: "temple",
  },
  {
    url: "/images/the-mall/the-mall-sacred-ground.jpg",
    thumbnail: "/images/the-mall/the-mall-sacred-ground.jpg",
    caption: { en: "The Mall — Sacred Open Ground", te: "ది మాల్ — పవిత్ర బహిరంగ ప్రాంగణం" },
    type: "image",
    order: 14,
    category: "temple",
  },

  // ── Festival ───────────────────────────────────────────────────
  {
    url: "/images/gallery/maha-shivaratri-celebration.jpg",
    thumbnail: "/images/gallery/maha-shivaratri-celebration.jpg",
    caption: { en: "Maha Shivaratri Celebration", te: "మహా శివరాత్రి వేడుక" },
    type: "image",
    order: 15,
    category: "festival",
  },
];
