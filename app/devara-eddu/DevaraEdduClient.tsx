"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export default function DevaraEdduClient() {
  const { t, locale } = useLanguage();
  const te = (t.devaraEddu ?? {}) as Record<string, string>;
  const miraclesRef  = useReveal();
  const phasesRef    = useReveal();
  const mallRef      = useReveal();

  const isTe = locale === "te";

  const theologyPoints = isTe ? [
    { title: "వాహనం కాదు", body: "దేవర ఎద్దు శివుని వాహనం కాదు — ఇది మహా విష్ణువు యొక్క నేరు విభవరూప (జీవంత రూపం)." },
    { title: "పవిత్ర సంగమం", body: "వైష్ణవం మరియు శైవం ఏకమయ్యే చోటు. మహా శివరాత్రి ఇక్కడ వైభవంగా జరుపుతారు." },
    { title: "నడిచే దర్శనం", body: "పవిత్ర ఓకఱుని దర్శించడం అంటే శారీరక రూపంలో వెంకటేశ్వర స్వామి దర్శనం పొందడమే." },
  ] : [
    { title: "Not a Vahana", body: "The Devara Eddu is not Lord Shiva's mount — it is a direct Vibhavarupa (living form) of Lord Maha Vishnu." },
    { title: "Sacred Confluence", body: "Where Vaishnavism and Shaivism unite. Maha Shivaratri is celebrated grandly here." },
    { title: "The Walking Darshan", body: "To see the Sacred Ox is to receive the Darshan of Lord Venkateswara in physical form." },
  ];

  const miracles = isTe ? [
    { num: "01", icon: "🗓️", title: "శనివారం చక్రం", body: "పవిత్ర ఓకఱు శనివారం మాత్రమే జన్మిస్తుంది — మరియు శనివారం మాత్రమే మరణిస్తుంది — ప్రభువు యొక్క అతి విశేషమైన రోజన తన దివ్య కార్యాన్ని ప్రారంభించి ముగిస్తుంది." },
    { num: "02", icon: "🐄", title: "జన్మ సమయంలో పవిత్రత", body: "జన్మించిన వెంటనే, పవిత్ర దూడ పాలను తీసుకోవటానికి నిరాకరిస్తుంది. ఇల్లు ఆధ్యాత్మికంగా శుద్ధమైతే మాత్రమే, అర్చకుల పూజ తర్వాత అది తల్లి వద్దకు తిరిగి వస్తుంది." },
    { num: "03", icon: "💤", title: "దివ్య స్వప్నం", body: "ప్రభువు చిన్న కమాసాని వంశీకుల పెద్దలకు స్వప్నంలో దూడ స్థానాన్ని వెల్లడిస్తాడు. ఈ పురాతన వంశం ప్రభువు యొక్క ఎంచుకున్న పాత్రను గుర్తించే పవిత్ర బాధ్యతను వహిస్తుంది." },
    { num: "04", icon: "🥥", title: "అంగీకార కార్యక్రమం", body: "పెద్దలు దూడ ఇంటికి వెళ్ళి పూజ చేస్తారు, కొబ్బరికాయలు కొడతారు, పుష్పాలు అర్పిస్తారు. ఈ ఆచారం పూర్తయిన తర్వాత మాత్రమే దూడ తల్లి వద్దకు తిరిగి వచ్చి పాలు తాగుతుంది." },
    { num: "05", icon: "🪔", title: "మూడవ సంవత్సర వెల్పు ఉత్సవం", body: "గుర్తింపు మరియు అంగీకారం తర్వాత, ఓకఱు మూడవ సంవత్సరంలో భవ్యమైన వెల్పు ఉత్సవం జరుపుతారు — దాని దివ్య సేవా జీవితాన్ని అధికారికంగా ప్రారంభిస్తుంది." },
    { num: "06", icon: "✨", title: "జీవంత సాన్నిధ్యం", body: "ప్రభువు తన ప్రజల మధ్య నడుస్తాడు, తన భూమిని పర్యవేక్షిస్తాడు, తన ప్రజలను రక్షిస్తాడు — 19వ శతాబ్దం మహాక్షామం సమయంలో చేసినట్లే." },
  ] : [
    { num: "01", icon: "🗓️", title: "The Saturday Cycle", body: "The Sacred Ox is destined to be born only on a Saturday — and will eventually pass away only on a Saturday — bookending its divine mission on the Lord's most auspicious day." },
    { num: "02", icon: "🐄", title: "Spiritual Purity at Birth", body: "At birth, the sacred calf instinctively refuses to take milk. If the household is spiritually impure, the calf immediately departs. Even in a pure home, the calf refuses until the Pooja is performed by the elders." },
    { num: "03", icon: "💤", title: "The Divine Dream", body: "The Lord reveals the calf's specific location to the elders of the Chinna Kamasani lineage through prophetic dreams. This ancient lineage carries the sacred responsibility of recognizing the Lord's chosen vessel." },
    { num: "04", icon: "🥥", title: "The Acceptance Ritual", body: "The elders travel to the calf's home and perform a formal Pooja, break coconuts, and offer flowers. Only upon completion of this ceremony does the calf return to the Mother Cow and accept its milk." },
    { num: "05", icon: "🪔", title: "The 3rd Year Velpu Utsavam", body: "Once identified and accepted, a grand Velpu Utsavam is performed in the ox's third year — officially consecrating its life of service to the temple and the community for eternity." },
    { num: "06", icon: "✨", title: "The Living Presence", body: "The Lord walks among His people, surveys His lands, and protects His people — just as He did during the Great Drought of the 19th Century. The Devara Eddu is not symbolic. It is the Supreme Presence." },
  ];

  const phases = isTe ? [
    {
      phase: "దశ 1", years: "1933 – 1955", title: "పునాది యుగం", color: "#E8690A",
      image: "/images/devara-eddu/devara-eddu-acceptance-ritual.jpg", side: "right",
      facts: [
        "ఆధునిక వెల్పు ఉత్సవ సంప్రదాయాన్ని స్థాపించింది",
        "ఆలయ పత్రాలు జూన్ 18, 1933 నాటి పవిత్ర ఆహ్వానాన్ని కలిగి ఉన్నాయి — ఇది అత్యంత ప్రాచీన అధికారిక దస్తావేజు",
        "22 సంవత్సరాలు నమ్మకంగా సేవ చేసింది",
        "1955లో మరణించింది, విశ్వాసపు వారసత్వాన్ని వదిలి",
      ],
    },
    {
      phase: "దశ 2", years: "1987 – 2004", title: "స్వర్ణయుగం", color: "#D4AF37",
      image: "/images/devara-eddu/devara-eddu-hero.jpg", side: "left",
      facts: [
        "జూన్ 1, 1987న జన్మించింది — పెద్దలచే గుర్తింపు పొందింది",
        "18 సంవత్సరాలు వైభవంగా సేవ చేసింది",
        "మొత్తం ప్రాంతంలో ఆలయ ఆధ్యాత్మిక ప్రభావం గణనీయంగా పెరిగింది",
        "2004 చివరిలో మరణించిన తర్వాత, నవంబర్ 27, 2005న మహా శాంతి యజ్ఞం — వేలాది భక్తులు నిర్వహించిన పవిత్ర భూ స్థాపితం",
      ],
    },
    {
      phase: "దశ 3", years: "2014 – 2015", title: "సంక్షిప్త ఆశీర్వాదం", color: "#C45C7B",
      image: "/images/devara-eddu/devara-eddu-with-mother.jpg", side: "right",
      facts: [
        "అక్టోబర్ 25, 2014న గుర్తింపు పొందింది",
        "నవంబర్ 27, 2014న అధికారికంగా సేవలో చేర్చబడింది",
        "అదే సంవత్సరంలో ఊపిరితిత్తుల వైఫల్యం కారణంగా దురదృష్టవశాత్తూ మరణించింది",
        "సంక్షిప్తమైనప్పటికీ, సంప్రదాయం పట్ల సమాజ నిబద్ధతను పునరుద్ఘాటించింది",
      ],
    },
  ] : [
    {
      phase: "Phase 1", years: "1933 – 1955", title: "The Era of Foundation", color: "#E8690A",
      image: "/images/devara-eddu/devara-eddu-acceptance-ritual.jpg", side: "right",
      facts: [
        "Established the modern Velpu Utsavam tradition",
        "Temple archives contain the sacred invitation dated June 18, 1933 — the earliest formal documentation",
        "Served the community faithfully for 22 years",
        "Passed away in 1955, leaving a legacy of faith",
      ],
    },
    {
      phase: "Phase 2", years: "1987 – 2004", title: "The Golden Era", color: "#D4AF37",
      image: "/images/devara-eddu/devara-eddu-hero.jpg", side: "left",
      facts: [
        "Born on June 1, 1987 — recognized by the elders",
        "Served the Lord gloriously for 18 years",
        "Saw a significant rise in the temple's spiritual influence across the region",
        "Following passing in late 2004, a massive Maha Shanti Yajnam on Nov 27, 2005",
      ],
    },
    {
      phase: "Phase 3", years: "2014 – 2015", title: "The Brief Blessing", color: "#C45C7B",
      image: "/images/devara-eddu/devara-eddu-with-mother.jpg", side: "right",
      facts: [
        "Identified on October 25, 2014",
        "Officially taken into service on November 27, 2014",
        "Tragically passed away due to lung failure within the same year",
        "Though brief, reaffirmed the community's commitment to the tradition",
      ],
    },
  ];

  const mallSymbols = isTe ? [
    { icon: "🐂", label: "ఓకఱు", sub: "ప్రభువు యొక్క ఎంచుకున్న పాత్ర" },
    { icon: "🐄", label: "ఆవు", sub: "జీవం మరియు పోషణ యొక్క చిహ్నం" },
    { icon: "🐯", label: "పులి", sub: "ప్రకృతి యొక్క అడవి శక్తులు, శాంతిగా" },
    { icon: "🙏", label: "భక్తుడు", sub: "పూర్తి శరణాగతిలో ఆత్మ" },
  ] : [
    { icon: "🐂", label: "The Ox", sub: "The Lord's chosen vessel" },
    { icon: "🐄", label: "The Cow", sub: "Symbol of life & sustenance" },
    { icon: "🐯", label: "The Tiger", sub: "Wild forces of nature, at peace" },
    { icon: "🙏", label: "The Devotee", sub: "Soul in total surrender" },
  ];

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden" style={{ paddingBottom: "5rem" }}>
        <div className="absolute inset-0">
          <Image src="/images/devara-eddu/devara-eddu-hero.jpg" alt="Devara Eddu — The Sacred Walking God" fill priority className="object-cover" style={{ opacity: 0.40 }} sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,8,8,0.55) 0%, rgba(26,8,8,0.30) 40%, rgba(26,8,8,0.92) 85%, #1A0808 100%)" }} />
        </div>
        <div className="absolute top-0 inset-x-0 h-1/2 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.10) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ paddingTop: "9rem" }}>
          <div className="flex items-center gap-2 text-xs mb-8" style={{ color: "rgba(212,175,55,0.55)", fontFamily: "var(--font-heading)" }}>
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">{isTe ? "హోమ్" : "Home"}</Link>
            <span>/</span>
            <span style={{ color: "rgba(212,175,55,0.80)" }}>{isTe ? "నడిచే దేవుడు" : "The Walking God"}</span>
          </div>

          <p className="text-xs uppercase tracking-[0.35em] mb-4" style={{ color: "rgba(212,175,55,0.65)", fontFamily: "var(--font-heading)" }}>
            {te.heroEyebrow ?? "A Living Manifestation of Lord Maha Vishnu"}
          </p>
          <h1 className="mb-5 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5.5vw, 4rem)", color: "white" }}>
            {isTe ? (
              <>దేవర <span className="text-metallic-gold">ఎద్దు</span><br /><span style={{ fontSize: "0.65em", color: "rgba(255,255,255,0.75)" }}>నడిచే దేవుడు</span></>
            ) : (
              <>The <span className="text-metallic-gold">Devara Eddu</span><br /><span style={{ fontSize: "0.65em", color: "rgba(255,255,255,0.75)" }}>The Walking God</span></>
            )}
          </h1>
          <div className="divider-premium w-32 mb-8" />
          <p className="max-w-2xl text-base leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.60)", fontSize: "1.05rem" }}>
            {te.heroSubtitle ?? "Unlike any temple in India — here, Lord Vishnu does not reside in stone or painting. He walks among His people as a living, breathing Sacred Ox."}
          </p>
        </div>
      </section>

      {/* ══════════ THE UNIQUE IDENTITY ══════════ */}
      <section style={{ background: "#1A0808", padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative" style={{ border: "1px solid rgba(212,175,55,0.18)" }}>
                <Image src="/images/devara-eddu/devara-eddu-portrait.jpg" alt="Devara Eddu — Sacred White Ox" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,10,7,0.5) 0%, transparent 60%)" }} />
              </div>
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 rounded-tl-2xl" style={{ borderColor: "rgba(212,175,55,0.30)" }} />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 rounded-br-2xl" style={{ borderColor: "rgba(212,175,55,0.30)" }} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] mb-4" style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
                {te.theologyTitle ?? "A Divine Distinction"}
              </p>
              <h2 className="mb-5 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.3rem)", color: "white" }}>
                {isTe ? <>నంది కాదు — <span className="text-metallic-gold">మహా విష్ణువు</span></> : <>Not Nandi — <span className="text-metallic-gold">Lord Vishnu</span></>}
              </h2>
              <div className="divider-premium w-24 mb-8" />

              <div className="pull-quote mb-8">
                {isTe
                  ? "\"చాలా ఆలయాల్లో, ఓకఱు మహా నంది — శివుని పవిత్ర వాహనం. ఇక్కడ, దేవర ఎద్దు మహా విష్ణువు యొక్క నేరు జీవంత అవతారం (విభవరూప).\""
                  : "\"In most temples, the Ox is Maha Nandi — the sacred vehicle of Lord Shiva. Here, the Devara Eddu is a direct, living manifestation (Vibhavarupa) of Lord Maha Vishnu himself.\""}
              </div>

              <p className="leading-relaxed mb-6" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.58)", fontSize: "0.97rem" }}>
                {isTe
                  ? "ఈ ప్రాచీన మరియు విభిన్నమైన సత్యం — ఈ ఆలయంలో 1,000 సంవత్సరాలుగా రక్షించబడింది — శ్రీ కనుకొండరాయ స్వామి దేవస్థానాన్ని భారతదేశంలోని ప్రతి ఇతర ఓకఱు ఆరాధన సంప్రదాయం నుండి వేరుచేస్తుంది."
                  : "This ancient and distinct truth — preserved for over 1,000 years in this temple — sets the Sri Kanukondaraya Swamy Devasthanam apart from every other ox-venerating tradition in India."}
              </p>
              <p className="leading-relaxed mb-8" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.58)", fontSize: "0.97rem" }}>
                {isTe
                  ? "మా ఆలయం వైష్ణవం మరియు శైవం సామరస్యంగా కలిసే అపురూపమైన \"పవిత్ర సంగమం\"గా కూడా సేవ చేస్తుంది. మహా శివరాత్రి ఇక్కడ అపారమైన వైభవంతో జరుపుతారు."
                  : "Our temple also serves as a rare \"Sacred Confluence\" — where Vaishnavism and Shaivism meet in perfect harmony. We celebrate Maha Shivaratri with immense grandness to honor this divine bridge."}
              </p>

              {theologyPoints.map((pt, i) => (
                <div key={i} className="flex gap-4 mb-5">
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ background: "linear-gradient(to bottom, #E8690A, #D4AF37)", minHeight: "2.5rem" }} />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "rgba(212,175,55,0.90)", fontFamily: "var(--font-heading)" }}>{pt.title}</p>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.50)" }}>{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ MIRACLES & IDENTIFICATION ══════════ */}
      <section style={{ background: "linear-gradient(135deg, #110a05, #1a1008)", padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.35em] mb-3" style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
              {isTe ? "ప్రభువు ఎలా కనుగొనబడతాడు" : "How the Lord is Found"}
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "white" }} className="mb-4">
              {isTe
                ? <>{te.miraclesTitle ?? "గుర్తింపు యొక్క అద్భుతాలు"}</>
                : <>Miracles of <span className="text-metallic-gold">Identification</span></>}
            </h2>
            <div className="divider-premium w-40 mx-auto mb-6" />
            <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.50)" }}>
              {isTe
                ? "దేవర ఎద్దు సాధారణ జంతువు కాదు. దాని దైవత్వం నిర్దిష్ట అద్భుత ప్రవర్తనల ద్వారా ధృవీకరించబడుతుంది."
                : "The Devara Eddu is not a common animal. Its divinity is verified through specific miraculous behaviors — divine signs that distinguish the Lord's chosen vessel from all others."}
            </p>
          </div>

          <div ref={miraclesRef} className="reveal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {miracles.map((miracle, i) => (
              <div key={i} className="reveal-card card-sacred p-7 relative overflow-hidden group" style={{ animationDelay: `${i * 90}ms` }}>
                <div className="absolute top-3 right-4 font-bold text-4xl select-none pointer-events-none"
                  style={{ fontFamily: "var(--font-display)", color: "rgba(212,175,55,0.05)" }}>{miracle.num}</div>
                <div className="text-3xl mb-4">{miracle.icon}</div>
                <h3 className="font-semibold text-base mb-3" style={{ color: "#D4AF37", fontFamily: "var(--font-heading)" }}>{miracle.title}</h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.52)" }}>{miracle.body}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: "linear-gradient(90deg, #E8690A, #D4AF37)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ THE THREE HISTORICAL PHASES ══════════ */}
      <section style={{ background: "#240F0F", padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.35em] mb-3" style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
              {isTe ? "1933 నుండి దాఖలైన చరిత్ర" : "Documented History Since 1933"}
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "white" }} className="mb-4">
              {isTe
                ? <>{te.phasesTitle ?? "మూడు చారిత్రక దశలు"}</>
                : <>Three <span className="text-metallic-gold">Historical Phases</span></>}
            </h2>
            <div className="divider-premium w-40 mx-auto mb-6" />
            <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.50)" }}>
              {isTe
                ? "పవిత్ర ఓకఱు వంశం కేవలం ఒక కథ మాత్రమే కాదు — ఇది దివ్య సేవ యొక్క దాఖలైన చరిత్ర."
                : "The lineage of the Sacred Ox is not merely a story — it is a documented history of divine service, with village records and elder testimonies confirming the tradition was active well before the 1900s."}
            </p>
          </div>

          <div ref={phasesRef} className="reveal-grid relative">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, rgba(212,175,55,0.30), rgba(212,175,55,0.10))", transform: "translateX(-50%)" }} />
            {phases.map((phase, i) => (
              <div key={i} className="reveal-card relative lg:grid lg:grid-cols-2 gap-8 mb-16 pl-16 lg:pl-0" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="absolute left-6 lg:left-1/2 top-4 w-4 h-4 rounded-full border-2 bg-[#1A0808] z-10"
                  style={{ borderColor: phase.color, transform: "translate(-50%, -50%)" }} />
                {phase.side === "right" ? (
                  <div className="hidden lg:flex items-start justify-end pr-12">
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: phase.color, fontFamily: "var(--font-heading)" }}>{phase.phase}</p>
                      <p className="font-bold text-xl mb-1" style={{ color: "white", fontFamily: "var(--font-display)", fontSize: "1.2rem" }}>{phase.title}</p>
                      <p className="text-sm font-semibold" style={{ color: "rgba(251,247,240,0.50)", fontFamily: "var(--font-heading)" }}>{phase.years}</p>
                    </div>
                  </div>
                ) : (
                  <div className="hidden lg:block pl-12">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden relative" style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
                      <Image src={phase.image} alt={phase.title} fill className="object-cover" sizes="50vw" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,10,7,0.60) 0%, transparent 60%)" }} />
                    </div>
                  </div>
                )}
                {phase.side === "right" ? (
                  <div className="pl-0 lg:pl-12">
                    <div className="lg:hidden mb-4">
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: phase.color, fontFamily: "var(--font-heading)" }}>{phase.phase}</p>
                      <p className="font-bold text-xl mb-1" style={{ color: "white", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{phase.title}</p>
                      <p className="text-sm font-semibold mb-4" style={{ color: "rgba(251,247,240,0.50)", fontFamily: "var(--font-heading)" }}>{phase.years}</p>
                    </div>
                    <div className="aspect-[16/10] rounded-xl overflow-hidden relative mb-6" style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
                      <Image src={phase.image} alt={phase.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,10,7,0.60) 0%, transparent 60%)" }} />
                    </div>
                    <ul className="space-y-2.5">
                      {phase.facts.map((fact, fi) => (
                        <li key={fi} className="flex items-start gap-2.5 text-sm" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: phase.color }} />
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="pl-0 lg:pr-12 lg:text-right">
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: phase.color, fontFamily: "var(--font-heading)" }}>{phase.phase}</p>
                      <p className="font-bold text-xl mb-1" style={{ color: "white", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{phase.title}</p>
                      <p className="text-sm font-semibold mb-4" style={{ color: "rgba(251,247,240,0.50)", fontFamily: "var(--font-heading)" }}>{phase.years}</p>
                    </div>
                    <ul className="space-y-2.5 text-left lg:text-right">
                      {phase.facts.map((fact, fi) => (
                        <li key={fi} className="flex lg:flex-row-reverse items-start gap-2.5 text-sm" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: phase.color }} />
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ THE MALL & PALLARU CHEKKA ══════════ */}
      <section style={{ background: "linear-gradient(135deg, #110a05, #1a1008)", padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.35em] mb-3" style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
              {isTe ? "పవిత్ర స్మారక భూమి" : "The Sacred Memorial Ground"}
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "white" }} className="mb-4">
              {isTe
                ? <>మాల్ <span className="text-metallic-gold">&amp; పల్లరు చెక్క</span></>
                : <>The <span className="text-metallic-gold">Mall</span> &amp; Pallaru Chekka</>}
            </h2>
            <div className="divider-premium w-40 mx-auto" />
          </div>

          <div ref={mallRef} className="reveal-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="reveal-card">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden relative mb-6" style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
                <Image src="/images/the-mall/the-mall-sacred-ground.jpg" alt="The Mall — Sacred Memorial Ground" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,10,7,0.65) 0%, transparent 60%)" }} />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "rgba(212,175,55,0.70)", fontFamily: "var(--font-heading)" }}>
                    {isTe ? "ప్రధాన ఆలయానికి 500 మీ దూరంలో" : "Located 500m from the main temple"}
                  </p>
                  <p className="text-white font-bold" style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}>
                    {isTe ? "మారెడుపల్లి గ్రామం" : "Maredupalli Village"}
                  </p>
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "var(--font-display)", color: "#D4AF37", fontSize: "1.3rem" }}>
                {isTe ? "మాల్ — పవిత్ర పితృ భూమి" : "The Mall — Sacred Ancestral Ground"}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
                {isTe
                  ? "మారెడుపల్లి గ్రామంలో ప్రధాన ఆలయానికి కేవలం 500 మీటర్ల దూరంలో ఉన్న మాల్, చిన్న కమాసాని సమాజానికి ఆధ్యాత్మిక ఆధారంగా ఉంది. ఇది ప్రభువు యొక్క దివ్య దూతల భౌతిక అవశేషాలు విశ్రమించే పవిత్ర భూమి."
                  : "Located just 500 meters from the main temple in Maredupalli Village, The Mall serves as the spiritual anchor for the Chinna Kamasani community. It is the hallowed ground where the physical remains of the Lord's divine messengers rest."}
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
                {isTe
                  ? "ఇక్కడ ప్రతి సమాధి (ఖనన) అత్యున్నత గౌరవంతో చూడబడుతుంది — ఈ జంతువులు ప్రభువు యొక్క స్వంత దివ్య కుటుంబంలో భాగంగా పరిగణించబడతాయి."
                  : "Each Samadhi (burial) here is treated with the highest reverence — these animals are considered part of the Lord's own divine family."}
              </p>
            </div>

            <div className="reveal-card" style={{ animationDelay: "150ms" }}>
              <div className="aspect-[16/10] rounded-2xl overflow-hidden relative mb-6" style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
                <Image src="/images/the-mall/pallaru-chekka.jpg" alt="Pallaru Chekka — Universal Harmony" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,10,7,0.65) 0%, transparent 60%)" }} />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold" style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}>
                    {isTe ? "పల్లరు చెక్క" : "Pallaru Chekka"}
                  </p>
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "var(--font-display)", color: "#D4AF37", fontSize: "1.3rem" }}>
                {isTe ? "పల్లరు చెక్క — విశ్వ సమరసత" : "Pallaru Chekka — Universal Harmony"}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
                {isTe
                  ? "తరతరాలుగా అందజేయబడిన లోతైన ఆధ్యాత్మిక భావన — విశ్వ సమరసత యొక్క దివ్య స్థితిని చిత్రీకరిస్తుంది. శ్రీ కనుకొండరాయ స్వామి కృపలో, ప్రకృతి యొక్క అత్యంత వ్యతిరేక శక్తులు కూడా పరిపూర్ణ శాంతిలో ఉంటాయి."
                  : "A profound spiritual concept passed down through generations — depicting a divine state of universal harmony. Under the grace of Lord Sri Kanukondaraya Swamy, even the most opposing forces of nature exist in absolute peace."}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {mallSymbols.map((sym, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.12)" }}>
                    <span className="text-2xl">{sym.icon}</span>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "rgba(212,175,55,0.85)", fontFamily: "var(--font-heading)" }}>{sym.label}</p>
                      <p className="text-xs" style={{ color: "rgba(251,247,240,0.40)", fontFamily: "var(--font-serif)" }}>{sym.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CALF PHOTOS ══════════ */}
      <section style={{ background: "#1A0808", padding: "4rem 0" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "white" }}>
              {isTe
                ? <>{" "}<span className="text-metallic-gold">అంగీకార కార్యక్రమం</span></>
                : <>The <span className="text-metallic-gold">Acceptance Ritual</span></>}
            </h2>
            <p className="mt-3 text-sm" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.45)" }}>
              {isTe
                ? "చిన్న కమాసాని పెద్దల పూజ తర్వాత — దివ్య దూడ చివరకు తల్లి వద్దకు తిరిగి వచ్చి మొదటి పాలు తాగే పవిత్ర క్షణం."
                : "The sacred moment when the divine calf finally returns to its mother and accepts its first milk — after the Pooja by the Chinna Kamasani elders."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden relative" style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
              <Image src="/images/devara-eddu/devara-eddu-with-mother.jpg" alt="Sacred tiny calf with mother cow" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full" style={{ background: "rgba(14,10,7,0.75)", color: "rgba(212,175,55,0.80)", fontFamily: "var(--font-heading)", border: "1px solid rgba(212,175,55,0.20)" }}>
                {isTe ? "దివ్య దూడ & తల్లి" : "The Divine Calf & Mother"}
              </div>
            </div>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden relative" style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
              <Image src="/images/devara-eddu/devara-eddu-calf-drinking-milk.jpg" alt="Sacred calf drinking milk after acceptance ritual" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full" style={{ background: "rgba(14,10,7,0.75)", color: "rgba(212,175,55,0.80)", fontFamily: "var(--font-heading)", border: "1px solid rgba(212,175,55,0.20)" }}>
                {isTe ? "అంగీకార కార్యక్రమం తర్వాత" : "After the Acceptance Ritual"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA STRIP ══════════ */}
      <section style={{ background: "linear-gradient(135deg, #1a1008, #110a04)", padding: "4rem 0", borderTop: "1px solid rgba(212,175,55,0.10)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", color: "white" }}>
            {isTe
              ? <>మూడు <span className="text-metallic-gold">పవిత్ర అడుగులు</span> కనుగొనండి</>
              : <>Discover the <span className="text-metallic-gold">Three Sacred Steps</span></>}
          </h2>
          <p className="mb-8 text-sm" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.45)" }}>
            {isTe
              ? "దేవర ఎద్దు యొక్క అద్భుతమైన చిత్తూరు ప్రయాణం ఎలా మహాక్షామాన్ని ముగించిందో మరియు పెదకంటి పల్లిని ఎలా ఎంచుకుందో తెలుసుకోండి."
              : "Learn how the Devara Eddu's miraculous journey across Chittoor ended the Great Drought and chose Pedakanti Palli as the sacred, chosen land."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/three-steps"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm btn-shimmer transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E8690A, #D4AF37)", color: "white", fontFamily: "var(--font-heading)" }}>
              🐾 {isTe ? "మూడు పవిత్ర అడుగులు" : "The Three Sacred Steps"}
            </Link>
            <Link href="/timings"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(251,247,240,0.70)", fontFamily: "var(--font-heading)" }}>
              🕐 {isTe ? "దర్శన సమయాలు" : "Plan Your Darshan"}
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .reveal-card { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal-grid.is-visible .reveal-card { opacity: 1; transform: translateY(0); }
        .reveal-grid.is-visible .reveal-card:nth-child(1) { transition-delay: 0ms; }
        .reveal-grid.is-visible .reveal-card:nth-child(2) { transition-delay: 100ms; }
        .reveal-grid.is-visible .reveal-card:nth-child(3) { transition-delay: 200ms; }
        .reveal-grid.is-visible .reveal-card:nth-child(4) { transition-delay: 280ms; }
        .reveal-grid.is-visible .reveal-card:nth-child(5) { transition-delay: 360ms; }
        .reveal-grid.is-visible .reveal-card:nth-child(6) { transition-delay: 440ms; }
      `}</style>
    </>
  );
}
