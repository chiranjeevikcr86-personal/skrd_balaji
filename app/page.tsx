"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { ParticleField } from "@/components/ui/ParticleField";
import { sevas } from "@/data/sevas";

// ─── Tiny utility hook for intersection observer animations ───
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export default function HomePage() {
  const { t, locale } = useLanguage();
  const isTe = locale === "te";
  const previewSevas = sevas.slice(0, 3);

  const identityRef   = useReveal();
  const stepsRef      = useReveal();
  const galleryRef    = useReveal();
  const sevasRef      = useReveal();
  const contactRef    = useReveal();

  return (
    <>
      {/* ════════════════════════════════════════
          HERO — Cinematic Full-Screen
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background: dark temple gradient */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #1E0A08, #220E0E, #1A0808)" }} />

        {/* Hero image with very subtle overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-deity.jpg"
            alt="Sri Kanukondaraya Swamy — Lord Venkateswara manifestation"
            fill
            priority
            className="object-cover"
            style={{ opacity: 0.22 }}
            sizes="100vw"
          />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(10,7,4,0.7) 0%, rgba(14,10,7,0.5) 40%, rgba(14,10,7,0.95) 100%)" }} />
        </div>

        {/* Particles */}
        <ParticleField />

        {/* Sacred mandala tile */}
        <div className="absolute inset-0 mandala-bg" style={{ opacity: 0.25 }} />

        {/* Giant Om watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(180px,30vw,380px)", color: "rgba(212,175,55,0.03)", lineHeight: 1 }}>
            ॐ
          </span>
        </div>

        {/* Light rays from top */}
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none" aria-hidden="true">
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: "100%", maxWidth: "900px", height: "60%",
            background: "conic-gradient(from 175deg at 50% 0%, transparent 0deg, rgba(212,175,55,0.06) 3deg, transparent 7deg, transparent 13deg, rgba(232,105,10,0.04) 17deg, transparent 21deg, transparent 163deg, rgba(212,175,55,0.06) 167deg, transparent 171deg, transparent 177deg, rgba(232,105,10,0.04) 181deg, transparent 185deg)",
          }} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>

          {/* Badge */}
          <div className="animate-fade-in mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-[0.3em] uppercase"
              style={{ border: "1px solid rgba(212,175,55,0.30)", background: "rgba(212,175,55,0.08)", color: "rgba(212,175,55,0.85)", fontFamily: "var(--font-heading)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              {(t.home as Record<string, string>).heroBadge ?? "A Manifestation of Lord Venkateswara Swamy · Since 1,000+ Years"}
            </span>
          </div>

          {/* H1 */}
          <h1 className="animate-fade-in-up animation-delay-100 mb-4 leading-[1.08]"
            style={{ fontFamily: "var(--font-display)" }}>
            <span className="block text-metallic-gold"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}>
              Sri Kanukondaraya
            </span>
            <span className="block text-white/90 mt-2"
              style={{ fontSize: "clamp(1.6rem, 4.5vw, 3.5rem)" }}>
              Swamy Devasthanam
            </span>
          </h1>

          {/* Telugu subtitle — always shown in Telugu */}
          <p className="animate-fade-in animation-delay-200 font-telugu mb-6"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "rgba(245,148,31,0.70)" }}>
            శ్రీ కనుకొండరాయ స్వామి దేవస్థానం
          </p>

          {/* Divider */}
          <div className="animate-fade-in animation-delay-300 divider-premium w-60 mx-auto my-7" />

          {/* Tagline */}
          <p className="animate-fade-in-up animation-delay-300 max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "rgba(251,247,240,0.65)" }}>
            {(t.home as Record<string, string>).heroTagline ?? "Where the Lord Himself walks among His people — not in a statue, but in a living, breathing Sacred Ox."}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/devara-eddu"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm btn-shimmer transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E8690A, #D4AF37)", color: "white", fontFamily: "var(--font-heading)", boxShadow: "0 0 30px rgba(232,105,10,0.30)" }}>
              🐂 {(t.home as Record<string, string>).heroCtaPrimary ?? "Discover the Walking God"}
            </Link>
            <Link href="/timings"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/8"
              style={{ border: "1px solid rgba(255,255,255,0.20)", color: "rgba(251,247,240,0.80)", fontFamily: "var(--font-heading)" }}>
              🕐 {(t.home as Record<string, string>).heroCtaSecondary ?? "View Darshan Timings"}
            </Link>
          </div>
        </div>

        {/* Bottom cinematic fade — into dark */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to top, #1A0808, transparent)" }} />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-11 rounded-full flex items-start justify-center pt-2"
            style={{ border: "1px solid rgba(212,175,55,0.30)" }}>
            <div className="w-0.5 h-3 rounded-full bg-[#D4AF37]" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          RECONSTRUCTION NOTICE BANNER
      ════════════════════════════════════════ */}
      <div style={{ background: "rgba(139,26,26,0.20)", borderTop: "1px solid rgba(139,26,26,0.30)", borderBottom: "1px solid rgba(139,26,26,0.30)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-lg">🚧</span>
          <p className="text-center text-sm" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.70)" }}>
            <span style={{ color: "#E8690A", fontWeight: 600 }}>{(t.home as Record<string, string>).reconstructionNotice ?? "Temple Reconstruction Notice (2020–2028):"}</span>{" "}
            {(t.home as Record<string, string>).reconstructionText ?? "The temple is being rebuilt from scratch — a ₹7 Crore government project on 2 acres. Grand festival celebrations are temporarily suspended."}
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DEVARA EDDU — BALAJI CONNECTION FEATURE
          Image: /images/devara-eddu/devara-eddu-balaji.jpg
      ════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(to bottom, #1A0808, #240F0F)", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.40), transparent)" }} />
        <div className="absolute inset-0 mandala-bg" style={{ opacity: 0.15 }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(212,175,55,0.20)", boxShadow: "0 20px 80px rgba(0,0,0,0.40)" }}>
                <Image
                  src="/images/devara-eddu/devara-eddu-balaji.jpg"
                  alt="Devara Eddu with Shanku Chakram Namalu — The Balaji Connection"
                  width={720} height={500}
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/11" }}
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.04) 0%, transparent 60%, rgba(232,105,10,0.04) 100%)" }} />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 rounded-tl"
                style={{ borderColor: "rgba(212,175,55,0.50)" }} />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 rounded-br"
                style={{ borderColor: "rgba(212,175,55,0.50)" }} />
            </div>
            {/* Right — Content */}
            <div>
              <p className="text-xs uppercase tracking-[0.35em] mb-3"
                style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
                🔱 {isTe ? "బాలాజీ స్వరూపం" : "The Balaji Manifestation"}
              </p>
              <h2 className="mb-5"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)", color: "white", lineHeight: 1.15 }}>
                {isTe
                  ? <><span className="text-metallic-gold">శంఖు · చక్రం</span> తో నడిచే దేవుడు</>
                  : <><span className="text-metallic-gold">Shanku · Chakram</span> — The Living Balaji</>}
              </h2>
              <div className="divider-premium w-32 mb-6" />
              <p className="mb-6 leading-relaxed"
                style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.65)", fontSize: "1.05rem" }}>
                {isTe
                  ? "ఈ ఆలయం తిరుమల వేంకటేశ్వర స్వామి దేవాలయం యొక్క ప్రతిరూపంగా పరిగణించబడుతుంది. దేవర ఎద్దు శరీరంపై శంఖు, చక్రం మరియు నమాలు అనే పవిత్ర వైష్ణవ చిహ్నాలు కనిపిస్తాయి."
                  : "This temple is revered as a living replica of Tirumala Venkateswara (Balaji). The Devara Eddu bears sacred Vaishnava symbols — Shanku (conch), Chakram (discus) and Namalu (sacred tilak marks) — on its divine body, confirming its identity as a living manifestation."}
              </p>
              {/* Symbol chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: isTe ? "శంఖం" : "Shanku", sub: isTe ? "విజ్ఞాన శంఖం" : "Conch of Wisdom" },
                  { label: isTe ? "చక్రం" : "Chakram", sub: isTe ? "సుదర్శన చక్రం" : "Sudarshana Chakra" },
                  { label: isTe ? "నమాలు" : "Namalu", sub: isTe ? "వైష్ణవ చిహ్నాలు" : "Vaishnava Marks" },
                ].map((s, i) => (
                  <div key={i} className="px-4 py-2.5 rounded-xl"
                    style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)" }}>
                    <div className="text-sm font-semibold" style={{ color: "#D4AF37", fontFamily: "var(--font-heading)" }}>{s.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(251,247,240,0.45)" }}>{s.sub}</div>
                  </div>
                ))}
              </div>
              <Link href="/devara-eddu"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm btn-shimmer transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #E8690A, #D4AF37)", color: "white", fontFamily: "var(--font-heading)" }}>
                {isTe ? "దేవర ఎద్దు గురించి తెలుసుకోండి" : "Discover the Sacred Story"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)" }} />
      </section>

      {/* ════════════════════════════════════════
          THE WALKING GOD — Identity Section
      ════════════════════════════════════════ */}
      <section style={{ background: "#1A0808", padding: "6rem 0" }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.35em] mb-3"
              style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
              {(t.home as Record<string, string>).identityEyebrow ?? "A Unique Sacred Identity"}
            </p>
            <h2 className="mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)", color: "white" }}>
              {(t.home as Record<string, string>).identityTitle ?? "The"}{" "}
              <span className="text-metallic-gold">{(t.home as Record<string, string>).identityAccent ?? "Walking God"}</span>
            </h2>
            <div className="divider-premium w-40 mx-auto mb-6" />
            <p className="max-w-2xl mx-auto text-base leading-relaxed"
              style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
              {(t.home as Record<string, string>).identitySubtitle ?? "Unlike any other temple in India — here, Lord Vishnu does not reside in stone. He walks among His people as a living, breathing Sacred Ox."}
            </p>
          </div>

          {/* 3 identity cards */}
          <div ref={identityRef} className="reveal-group grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 — Not Nandi: use actual Devara Eddu photo */}
            <div className="reveal-card card-sacred p-8 text-center" style={{ animationDelay: "0ms" }}>
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2"
                  style={{ borderColor: "rgba(212,175,55,0.45)", boxShadow: "0 0 20px rgba(212,175,55,0.20)" }}>
                  <Image
                    src="/images/devara-eddu/devara-eddu-portrait.jpg"
                    alt="Devara Eddu — Sacred Ox"
                    width={80} height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-3 font-semibold text-lg" style={{ fontFamily: "var(--font-heading)", color: "#D4AF37" }}>
                {(t.home as Record<string, string>).identityCard1Title ?? "Not Nandi — Lord Vishnu"}
              </h3>
              <p className="leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)", fontSize: "0.95rem" }}>
                {(t.home as Record<string, string>).identityCard1Body ?? "In most temples, the Ox is Nandi — Lord Shiva's vehicle. Here, the Devara Eddu is a direct living manifestation (Vibhavarupa) of Lord Maha Vishnu himself. A truth preserved for over 1,000 years."}
              </p>
            </div>

            {/* Card 2 — He Walks Among You: devara-eddu-hero photo */}
            <div className="reveal-card card-sacred p-8 text-center" style={{ animationDelay: "100ms" }}>
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2"
                  style={{ borderColor: "rgba(212,175,55,0.45)", boxShadow: "0 0 20px rgba(212,175,55,0.20)" }}>
                  <Image
                    src="/images/devara-eddu/devara-eddu-hero.jpg"
                    alt="Devara Eddu Walking"
                    width={80} height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-3 font-semibold text-lg" style={{ fontFamily: "var(--font-heading)", color: "#D4AF37" }}>
                {(t.home as Record<string, string>).identityCard2Title ?? "He Walks Among You"}
              </h3>
              <p className="leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)", fontSize: "0.95rem" }}>
                {(t.home as Record<string, string>).identityCard2Body ?? "While other shrines house statues and symbols, Lord Kanukondaraya manifests in a physical, breathing form — surveying His lands and protecting His people, just as He did during the Great Drought."}
              </p>
            </div>

            {/* Card 3 — Sacred Confluence: devara-eddu-balaji photo (Balaji connection) */}
            <div className="reveal-card card-sacred p-8 text-center" style={{ animationDelay: "200ms" }}>
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2"
                  style={{ borderColor: "rgba(212,175,55,0.45)", boxShadow: "0 0 20px rgba(212,175,55,0.20)" }}>
                  <Image
                    src="/images/devara-eddu/devara-eddu-balaji.jpg"
                    alt="Sacred Confluence — Balaji Connection"
                    width={80} height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-3 font-semibold text-lg" style={{ fontFamily: "var(--font-heading)", color: "#D4AF37" }}>
                {(t.home as Record<string, string>).identityCard3Title ?? "Sacred Confluence"}
              </h3>
              <p className="leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)", fontSize: "0.95rem" }}>
                {(t.home as Record<string, string>).identityCard3Body ?? "Where Vaishnavism and Shaivism unite in harmony. The soul of Lord Vishnu fills a form associated with Shiva's tradition. Maha Shivaratri is celebrated with great grandeur here."}
              </p>
            </div>

          </div>


          <div className="text-center mt-10">
            <Link href="/devara-eddu"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: "#D4AF37", fontFamily: "var(--font-heading)" }}>
              {(t.home as Record<string, string>).identityLink ?? "Learn the full story of the Devara Eddu"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE THREE STEPS — Origin Story Preview
      ════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(135deg, #220A0A, #2A0F0F, #1A0808)", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.35em] mb-3"
              style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
              {(t.home as Record<string, string>).stepsEyebrow ?? "The Divine Origin Story"}
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)", color: "white" }} className="mb-4">
              {(t.home as Record<string, string>).stepsTitle ?? "The"}{" "}
              <span className="text-metallic-gold">{(t.home as Record<string, string>).stepsAccent ?? "Three Sacred Steps"}</span>
            </h2>
            <div className="divider-premium w-40 mx-auto mb-6" />
            <p className="max-w-2xl mx-auto text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
              {(t.home as Record<string, string>).stepsSubtitle ?? "During the Great Drought of the 19th Century, Lord Venkateswara manifested as the Sacred Ox and took three miraculous steps across Chittoor to lead His people to safety and water."}
            </p>
          </div>

          {/* Three steps timeline */}
          <div ref={stepsRef} className="reveal-group grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-[3.5rem] left-[16.666%] right-[16.666%] h-px"
              style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.15), rgba(212,175,55,0.40), rgba(212,175,55,0.15))" }} />

            {[
              {
                step: "01",
                place: isTe ? "కాలవగుంట" : "Kalavagunta",
                sub: isTe ? "పేన్నుమూరు మండలం, చిత్తూరు" : "Penumuru Mandal, Chittoor",
                image: "/images/three-steps/step1-kalavagunta.jpg",
                desc: isTe
                  ? "మొదటి అద్భుత అడుగు — దివ్య కృపయొక్క అవతరణ. పవిత్ర ఎద్దు మొదట ఇక్కడ తన ఉనికిని సూచించింది, కరువు-పీడిత ఉత్తరం నుండి నిష్క్రమణను ప్రారంభించింది."
                  : "The first miraculous step — the landing of Divine Grace. The Sacred Ox first signaled its presence here, beginning the exodus from the drought-stricken north.",
                delay: 0,
              },
              {
                step: "02",
                place: isTe ? "కాళగిరి కొండ" : "Kaligiri Konda",
                sub: isTe ? "పేన్నుమూరు మండలం, చిత్తూరు" : "Penumuru Mandal, Chittoor",
                image: "/images/three-steps/step2-kaligiri-konda.jpg",
                desc: isTe
                  ? "అద్భుతమైన జంప్. పవిత్ర ఎద్దు మైదానాల నుండి నేరుగా కొండపైకి దూకింది — దాని అతీంద్రియ, దివ్య స్వభావానికి నిదర్శనం."
                  : "The Miraculous Leap. The Sacred Ox leaped from the plains directly to the hilltop — a testament to its supernatural, celestial nature.",
                delay: 150,
              },
              {
                step: "03",
                place: isTe ? "పెదకంటి పల్లి" : "Pedakanti Palli",
                sub: isTe ? "గంగాధర నెల్లూరు మండలం" : "Gangadhara Nellore Mandal",
                image: "/images/three-steps/step3-pedakanti-palli.jpg",
                desc: isTe
                  ? "ఎంచుకున్న భూమి. ఈ చివరి అడుగు పడిన క్షణంలో, కరువు తొలగింది. ప్రభువు ఇక్కడ స్థిరపడ్డాడు — మరియు ప్రజలు ఆయన రక్షణలో తమ ఇంటిని నిర్మించుకున్నారు."
                  : "The Chosen Land. At the moment this final footprint was made, the drought broke. The Lord settled here — and the people made their home under His protection.",
                delay: 300,
              },
            ].map((step, i) => (
              <div key={i}
                className="reveal-card relative"
                style={{ animationDelay: `${step.delay}ms` }}>
                {/* Step number */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                    style={{ background: "linear-gradient(135deg, #E8690A, #D4AF37)", color: "white", fontFamily: "var(--font-heading)" }}>
                    {step.step}
                  </div>
                  <div className="h-px flex-1" style={{ background: "rgba(212,175,55,0.20)" }} />
                </div>

                {/* Step image */}
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-5 relative"
                  style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
                  <Image
                    src={step.image}
                    alt={step.place}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(14,10,7,0.7) 0%, transparent 60%)" }} />
                </div>

                {/* Step content */}
                <h3 className="mb-1 font-bold text-lg" style={{ fontFamily: "var(--font-display)", color: "white", fontSize: "1.1rem" }}>
                  {step.place}
                </h3>
                <p className="text-xs mb-3" style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
                  {step.sub}
                </p>
                <p className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/three-steps"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: "#D4AF37", fontFamily: "var(--font-heading)" }}>
              {isTe ? "పూర్తి మూడు అడుగుల యాత్ర చదవండి" : "Read the complete Three Steps journey"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE DEVARA EDDU — Sacred Ox Feature
      ════════════════════════════════════════ */}
      <section style={{ background: "#1E0A0A", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative row-span-2"
                style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
                <Image src="/images/devara-eddu/devara-eddu-hero.jpg"
                  alt="Devara Eddu — The Sacred White Ox" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,10,7,0.6) 0%, transparent 60%)" }} />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden relative"
                style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
                <Image src="/images/devara-eddu/devara-eddu-with-mother.jpg"
                  alt="Sacred calf with mother cow" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 20vw" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden relative"
                style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
                <Image src="/images/devara-eddu/devara-eddu-calf-drinking-milk.jpg"
                  alt="Sacred calf drinking milk after acceptance ritual" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 20vw" />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-xs uppercase tracking-[0.35em] mb-4"
                style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
                {isTe ? "సజీవ దైవం" : "The Living Deity"}
              </p>
              <h2 className="mb-5 leading-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.5rem)", color: "white" }}>
                {isTe ? "" : "The "}
                <span className="text-metallic-gold">{isTe ? "దేవర ఎద్దు" : "Devara Eddu"}</span>
              </h2>
              <div className="divider-premium w-24 mb-8" />

              {/* Pull quote from history */}
              <div className="pull-quote mb-8">
                {isTe
                  ? "\"శనివారం మాత్రమే జన్మించిన పవిత్ర ఎద్దు పుట్టినప్పుడు పాలు తాగడాన్ని నిరాకరిస్తుంది — ఇది ఏ యజమానికీ చెందినది కాదు, కేవలం శ్రీ కనుకొండరాయ స్వామి సేవకు మాత్రమే అని దివ్య సంకేతం.\""
                  : "\"Born only on a Saturday, the Sacred Ox refuses milk at birth — the divine sign that it belongs not to any owner, but solely to the service of Lord Sri Kanukondaraya Swamy.\""}
              </div>

              <p className="leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.58)", fontSize: "0.97rem" }}>
                {isTe
                  ? "దేవర ఎద్దు పవిత్ర అద్భుతాల ద్వారా గుర్తించబడుతుంది — ఒక ప్రవచన స్వప్నం చిన్న కమాసాని వంశపు పెద్దలకు దూడ యొక్క స్థానాన్ని వెల్లడిస్తుంది. పూజ మరియు కొబ్బరికాయ నైవేద్యాల అంగీకార కర్మ తర్వాత, దూడ చివరకు తన తల్లి దగ్గరకు తిరిగి వచ్చి పాలు తాగుతుంది."
                  : "The Devara Eddu is identified through sacred miracles — a prophetic dream reveals the calf's location to the elders of the Chinna Kamasani lineage. After the Acceptance Ritual of Pooja and coconut offerings, the calf finally returns to its mother and accepts milk."}
              </p>

              {/* Key facts */}
              <div className="space-y-3 mb-8">
                {[
                  {
                    label: isTe ? "జననం & మరణం" : "Born & passes away",
                    value: isTe ? "ఎల్లప్పుడూ శనివారం" : "Always on a Saturday",
                  },
                  {
                    label: isTe ? "మూడు నమోదిత దశలు" : "Three documented phases",
                    value: "1933, 1987, 2014",
                  },
                  {
                    label: isTe ? "వేల్పు ఉత్సవం" : "Velpu Utsavam",
                    value: isTe ? "3వ సంవత్సరం ప్రతిష్ఠా వేడుక" : "3rd year consecration ceremony",
                  },
                ].map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                    <span style={{ color: "rgba(251,247,240,0.50)", fontFamily: "var(--font-serif)" }}>
                      <strong style={{ color: "rgba(251,247,240,0.80)" }}>{fact.label}:</strong>{" "}{fact.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/devara-eddu"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm btn-shimmer transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #E8690A, #D4AF37)", color: "white", fontFamily: "var(--font-heading)" }}>
                {isTe ? "దేవర ఎద్దు పవిత్ర లోకంలోకి ప్రవేశించండి" : "Enter the Sacred World of the Devara Eddu"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          GALLERY PREVIEW
      ════════════════════════════════════════ */}
      <section style={{ background: "#110a05", padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.35em] mb-3"
              style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
              {isTe ? "పవిత్ర దృశ్యాలు" : "Sacred Visuals"}
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.3rem)", color: "white" }}>
              {isTe ? "" : "Temple "}<span className="text-metallic-gold">{isTe ? "దేవాలయ గ్యాలరీ" : "Gallery"}</span>
            </h2>
          </div>

          <div ref={galleryRef} className="reveal-group grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { src: "/images/gallery/temple-gopuram.jpg",           alt: "Temple Gopuram", span: "md:col-span-2 md:row-span-2" },
              { src: "/images/devara-eddu/devara-eddu-portrait.jpg", alt: "Sacred Devara Eddu" },
              { src: "/images/gallery/temple-sanctum.jpg",           alt: "Temple Inner Sanctum" },
              { src: "/images/the-mall/pallaru-chekka.jpg",          alt: "Pallaru Chekka — Sacred Harmony" },
              { src: "/images/devara-eddu/devara-eddu-acceptance-ritual.jpg", alt: "Acceptance Ritual" },
            ].map((img, i) => (
              <div key={i}
                className={`relative group overflow-hidden rounded-xl reveal-card ${img.span ?? ""}`}
                style={{ border: "1px solid rgba(212,175,55,0.10)", animationDelay: `${i * 80}ms` }}>
                <div className={`${i === 0 ? "aspect-square" : "aspect-[4/3]"} relative`}>
                  <Image src={img.src} alt={img.alt} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    style={{ background: "linear-gradient(to top, rgba(14,10,7,0.85) 0%, transparent 60%)" }}>
                    <p className="text-white text-xs font-medium" style={{ fontFamily: "var(--font-heading)" }}>{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300"
              style={{ border: "1px solid rgba(212,175,55,0.25)", color: "#D4AF37", fontFamily: "var(--font-heading)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(212,175,55,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              {isTe ? "పూర్తి గ్యాలరీ చూడండి →" : "View Full Gallery →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SEVAS PREVIEW
      ════════════════════════════════════════ */}
      <section style={{ background: "#1A0808", padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.35em] mb-3"
              style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
              {isTe ? "దివ్య సేవలు" : "Divine Services"}
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.3rem)", color: "white" }}>
              {isTe ? <><span className="text-metallic-gold">సేవ</span> బుక్ చేసుకోండి</> : <>Book a <span className="text-metallic-gold">Seva</span></>}
            </h2>
          </div>

          <div ref={sevasRef} className="reveal-group grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewSevas.map((seva, i) => (
              <div key={i}
                className="reveal-card card-sacred p-7 text-center group cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, rgba(232,105,10,0.15), rgba(212,175,55,0.15))", border: "1px solid rgba(212,175,55,0.20)" }}>
                  🪔
                </div>
                <h3 className="font-semibold text-base mb-2 text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {typeof seva.name === "object" ? (isTe ? seva.name.te : seva.name.en) : seva.name}
                </h3>
                <p className="text-xs leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.45)" }}>
                  {typeof seva.description === "object" ? (isTe ? seva.description.te : seva.description.en) : seva.description}
                </p>
                <p className="font-bold text-xl text-metallic-gold">
                  {seva.currency}{seva.price}
                </p>
                <p className="text-xs mt-1" style={{ color: "rgba(251,247,240,0.35)", fontFamily: "var(--font-heading)" }}>
                  {typeof seva.duration === "object" ? (isTe ? seva.duration.te : seva.duration.en) : seva.duration}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/sevas"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm btn-shimmer transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E8690A, #D4AF37)", color: "white", fontFamily: "var(--font-heading)" }}>
              {isTe ? "అన్ని సేవలు చూడండి" : "View All Sevas"}
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONTACT STRIP
      ════════════════════════════════════════ */}
      <section ref={contactRef} style={{ background: "linear-gradient(135deg, #1a0e06, #110a04)", padding: "4rem 0", borderTop: "1px solid rgba(212,175,55,0.10)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2.5vw, 2rem)", color: "white" }}>
            {isTe ? <><span className="text-metallic-gold">పవిత్ర సందర్శన</span>ను ప్లాన్ చేయండి</> : <>Plan Your <span className="text-metallic-gold">Sacred Visit</span></>}
          </h2>
          <p className="mb-8 text-sm" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.50)" }}>
            {isTe
              ? "పెదకంటి పల్లి (గ్రామం), గంగాధర నెల్లూరు మండలం, చిత్తూరు జిల్లా, ఆంధ్రప్రదేశ్ — 517125"
              : "Pedakanti Palli (Village), Gangadhara Nellore Mandal, Chittoor District, Andhra Pradesh — 517125"}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300"
              style={{ border: "1px solid rgba(212,175,55,0.25)", color: "#D4AF37", fontFamily: "var(--font-heading)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(212,175,55,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              📍 {isTe ? "దిశలు & సంప్రదింపు" : "Get Directions & Contact"}
            </Link>
            <a href="mailto:hello@cjkdigitalsolutions.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300"
              style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)", color: "#D4AF37", fontFamily: "var(--font-heading)" }}>
              ✉️ {isTe ? "మాకు ఇమెయిల్ చేయండి" : "Email Us"}
            </a>
          </div>
        </div>
      </section>

      {/* Reveal animation styles */}
      <style>{`
        .reveal-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-group.revealed .reveal-card {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-group.revealed .reveal-card:nth-child(1) { transition-delay: 0ms; }
        .reveal-group.revealed .reveal-card:nth-child(2) { transition-delay: 120ms; }
        .reveal-group.revealed .reveal-card:nth-child(3) { transition-delay: 240ms; }
        .reveal-group.revealed .reveal-card:nth-child(4) { transition-delay: 320ms; }
        .reveal-group.revealed .reveal-card:nth-child(5) { transition-delay: 400ms; }
      `}</style>
    </>
  );
}
