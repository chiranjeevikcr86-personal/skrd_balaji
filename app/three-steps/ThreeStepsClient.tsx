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

export default function ThreeStepsClient() {
  const { t, locale } = useLanguage();
  const ts = (t.threeSteps ?? {}) as Record<string, string>;
  const isTe = locale === "te";

  const step1Ref = useReveal();
  const step2Ref = useReveal();
  const step3Ref = useReveal();
  const ctaRef   = useReveal();

  const steps = isTe ? [
    {
      num: "01",
      name: ts.step1Name ?? "కాలవగుంట",
      sub: ts.step1Loc ?? "పెనుమూరు మండలం, చిత్తూరు",
      title: ts.step1Title ?? "దివ్య కృపకు ఆగమనం",
      image: "/images/three-steps/step1-kalavagunta.jpg",
      color: "#E8690A",
      telugu: "కలవగుంట",
      description: [
        "మొదటి అద్భుతమైన అడుగు కాలవగుంటలో పడింది. ఇక్కడ దేవర ఎద్దు తన ఉనికిని మొదట సూచించింది, వాక్కు-గ్రస్త ఉత్తర ప్రాంతం నుండి వలసకు శ్రీకారం చుట్టింది.",
        "ఈ స్థలం మొట్టమొదటి ఆశకిరణాన్ని సూచిస్తుంది — ప్రభువు కృప ఎండిన భూమిని తాకి, తన ప్రజలను జీవితం, నీరు మరియు భద్రత వైపు నడిపించిన క్షణం.",
        "వేయి సంవత్సరాలకు పైగా, భక్తులు ఈ భూమిని పవిత్రంగా భావిస్తున్నారు — సర్వోత్తమ ప్రభువు తన ప్రజల మధ్య నడవడానికి అవతరించిన ప్రదేశంగా.",
      ],
      significance: ts.step1Title ?? "మొదటి అడుగు — దివ్య జోక్యం ప్రారంభం",
    },
    {
      num: "02",
      name: ts.step2Name ?? "కాళగిరి కొండ",
      sub: ts.step2Loc ?? "పెనుమూరు మండలం, చిత్తూరు",
      title: ts.step2Title ?? "అద్భుతమైన దొంతర",
      image: "/images/three-steps/step2-kaligiri-konda.jpg",
      color: "#D4AF37",
      telugu: "కాళిగిరి కొండ",
      description: [
        "ప్రయాణం కొనసాగుతున్నప్పుడు, దేవర ఎద్దు ఘనమైన కాళిగిరి కొండల దిగువకు చేరుకుంది. సమాజానికి దర్శనమిస్తూ, పవిత్ర ఓకఱు మైదానం నుండి నేరుగా కొండ శిఖరంపైకి అద్భుతమైన దొంతర వేసింది.",
        "కాళిగిరి కొండ శిఖరంలో ముద్రించిన ఈ రెండవ అడుగు — పవిత్ర మార్గదర్శి యొక్క అతీంద్రియ శక్తి మరియు దైవిక స్వభావానికి శాశ్వత సాక్ష్యంగా నిలిచింది.",
        "నేటికీ, కొండ శిఖరం అపారమైన ఆధ్యాత్మిక శక్తి కలిగిన స్థలంగా గుర్తింపు పొందింది, ఇక్కడ భూమి మరియు దివ్యమైన సరిహద్దు దర్శకులందరి ముందు కరిగిపోయింది.",
      ],
      significance: ts.step2Title ?? "అద్భుతమైన దొంతర — అతీంద్రియ శక్తి వెల్లడి",
    },
    {
      num: "03",
      name: ts.step3Name ?? "పెదకంటి పల్లి",
      sub: ts.step3Loc ?? "గంగాధర నెల్లూరు మండలం, చిత్తూరు",
      title: ts.step3Title ?? "ఎంచుకొన్న భూమి",
      image: "/images/three-steps/step3-pedakanti-palli.jpg",
      color: "#C45C7B",
      telugu: "పెదకంటి పల్లి",
      description: [
        "మూడవ మరియు చివరి అడుగు పెదకంటి పల్లిలో పడింది. ఈ దివ్య అడుగు భూమిపై పడిన అదే క్షణంలో, సంవత్సరాలుగా ప్రాంతాన్ని గ్రసించిన మహాక్షామం చివరకు విరిగింది.",
        "నీరు వచ్చింది. వర్షం మరియు సమృద్ధితో భూమి ఆశీర్వదించబడింది. చీకటి రోజుల్లో పవిత్ర ఓకఱు వెంట వెళ్ళిన ప్రజలు దీన్ని అద్భుతంగా గుర్తించారు — ప్రభువు తన భూమిని ఎంచుకున్నారని.",
        "ఈ భూమిని ప్రభువు ఎంచుకున్న భూమిగా గుర్తించి, దేవర ఎద్దు ఇక్కడ శాశ్వతంగా నెలకొంది. ప్రజలు దాని దివ్య రక్షణలో తమ నివాసాన్ని ఏర్పరచుకున్నారు — శ్రీ కనుకొండరాయ స్వామి దేవస్థానం జన్మించింది.",
      ],
      significance: ts.step3Title ?? "చివరి అడుగు — క్షామం విరిగింది, ఎంచుకున్న భూమి",
    },
  ] : [
    {
      num: "01",
      name: "Kalavagunta",
      sub: "Penumuru Mandal, Chittoor",
      title: "The Landing of Divine Grace",
      image: "/images/three-steps/step1-kalavagunta.jpg",
      color: "#E8690A",
      telugu: "కలవగుంట",
      description: [
        "The first miraculous step was taken in Kalavagunta. It was here that the Devara Eddu first signaled its presence, marking the beginning of the exodus from the drought-stricken north.",
        "This site represents the very first spark of hope — the moment the Lord's grace touched the parched earth and set His people on a path toward life, water, and safety.",
        "For over a millennium, devotees have revered this ground as the place where a thousand-year promise began — where the Supreme Lord chose to descend and walk among His people.",
      ],
      significance: "First footprint — the beginning of divine intervention",
    },
    {
      num: "02",
      name: "Kaligiri Konda",
      sub: "Penumuru Mandal, Chittoor",
      title: "The Miraculous Leap",
      image: "/images/three-steps/step2-kaligiri-konda.jpg",
      color: "#D4AF37",
      telugu: "కాళిగిరి కొండ",
      description: [
        "As the journey continued, the Devara Eddu reached the base of the majestic Kaligiri hills. In a display of divine power witnessed by the community, the Sacred Ox took a miraculous leap from the plains directly to the hilltop.",
        "This second imprint — etched into the high peaks of Kaligiri Konda — serves as an eternal testament to the supernatural strength and celestial nature of the sacred guide.",
        "To this day, the hilltop is revered as a site of immense spiritual energy, where the boundary between the earthly and the divine was visibly dissolved in the sight of all who witnessed it.",
      ],
      significance: "Miraculous leap — supernatural power revealed",
    },
    {
      num: "03",
      name: "Pedakanti Palli",
      sub: "Gangadhara Nellore Mandal, Chittoor",
      title: "The Chosen Land",
      image: "/images/three-steps/step3-pedakanti-palli.jpg",
      color: "#C45C7B",
      telugu: "పెదకంటి పల్లి",
      description: [
        "The third and final step was taken in Pedakanti Palli. At the exact moment this divine footprint was made upon the earth, the Great Drought — which had gripped the region for years — finally broke.",
        "Water came. The land was blessed with rain and abundance. The people who had followed the Sacred Ox through their darkest days recognized this unambiguously as a miracle — as the Lord's own choosing of this land.",
        "Recognizing this sacred ground as the Lord's chosen land, the Devara Eddu settled here permanently. The people established their home under His divine protection — and the Sri Kanukondaraya Swamy Devasthanam was born.",
      ],
      significance: "Final footprint — drought breaks, the Chosen Land",
    },
  ];

  const contextStats = isTe ? [
    { icon: "📜", label: "1,000+ సంవత్సరాలు", sub: "ఈ సంప్రదాయం యొక్క ఆధ్యాత్మిక మూలాలు" },
    { icon: "🌵", label: "19వ శతాబ్దం", sub: "మహాక్షామం ముళకలచెరువును కొట్టింది" },
    { icon: "🐂", label: "3 అడుగులు", sub: "క్షామాన్ని అంతం చేయడానికి చిత్తూరు అంతటా" },
    { icon: "💧", label: "క్షామం విరిగింది", sub: "పెదకంటి పల్లిలో 3వ అడుగులో" },
  ] : [
    { icon: "📜", label: "1,000+ Years", sub: "Spiritual roots of this tradition" },
    { icon: "🌵", label: "19th Century", sub: "The Great Drought strikes Mulakalacheruvu" },
    { icon: "🐂", label: "3 Footsteps", sub: "Across Chittoor to end the drought" },
    { icon: "💧", label: "Drought Broken", sub: "At the 3rd step in Pedakanti Palli" },
  ];

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden" style={{ paddingBottom: "5rem" }}>
        <div className="absolute inset-0 grid grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <Image src={step.image} alt={step.name} fill className="object-cover" style={{ opacity: 0.35 }} sizes="33vw" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,8,8,0.75) 0%, rgba(26,8,8,0.40) 40%, rgba(26,8,8,0.95) 85%, #1A0808 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ paddingTop: "9rem" }}>
          <div className="flex items-center gap-2 text-xs mb-8" style={{ color: "rgba(212,175,55,0.55)", fontFamily: "var(--font-heading)" }}>
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">{isTe ? "హోమ్" : "Home"}</Link>
            <span>/</span>
            <span style={{ color: "rgba(212,175,55,0.80)" }}>{isTe ? "మూడు పవిత్ర అడుగులు" : "The Three Sacred Steps"}</span>
          </div>
          <p className="text-xs uppercase tracking-[0.35em] mb-4" style={{ color: "rgba(212,175,55,0.65)", fontFamily: "var(--font-heading)" }}>
            {ts.heroEyebrow ?? (isTe ? "దివ్య ఉద్భవ కథ · 19వ శతాబ్దం" : "The Divine Origin Story · 19th Century")}
          </p>
          <h1 className="mb-5 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5.5vw, 4rem)", color: "white" }}>
            {isTe
              ? <>{ts.heroTitle ?? "మూడు"} <span className="text-metallic-gold">{ts.heroAccent ?? "పవిత్ర అడుగులు"}</span></>
              : <>The Three <span className="text-metallic-gold">Sacred Steps</span></>}
          </h1>
          <div className="divider-premium w-32 mb-8" />
          <p className="max-w-2xl text-base leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.60)", fontSize: "1.05rem" }}>
            {ts.heroSubtitle ?? (isTe
              ? "19వ శతాబ్దం మహాక్షామం సమయంలో, శ్రీ వెంకటేశ్వర స్వామి పవిత్ర ఓకఱుగా అవతరించి చిత్తూరు అంతటా తన ప్రజలను భద్రత వైపు నడిపించాడు."
              : "During the Great Drought of the 19th Century, Lord Venkateswara manifested as the Sacred Ox and led His people to safety across Chittoor — one miraculous footprint at a time.")}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {steps.map((step) => (
              <a key={step.num} href={`#step-${step.num}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200"
                style={{ border: `1px solid ${step.color}40`, color: step.color, fontFamily: "var(--font-heading)", background: `${step.color}10` }}>
                <span className="font-bold">{step.num}</span>
                <span>{step.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CONTEXT — THE GREAT DROUGHT ══════════ */}
      <section style={{ background: "#1A0808", padding: "5rem 0" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.35em] mb-4" style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
                {isTe ? "19వ శతాబ్దం · ముళకలచెరువు, అన్నమయ్య జిల్లా" : "19th Century · Mulakalacheruvu, Annamayya District"}
              </p>
              <h2 className="mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)", color: "white" }}>
                {isTe
                  ? <>{ts.contextTitle ?? "మహాక్షామం"}</>
                  : <>The <span className="text-metallic-gold">Great Drought</span></>}
              </h2>
              <div className="divider-premium w-24 mb-8" />
              <p className="leading-relaxed mb-5" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.58)", fontSize: "0.97rem" }}>
                {isTe
                  ? "ఈ విశ్వాసం యొక్క ఆధ్యాత్మిక మూలాలు వేయి సంవత్సరాల కంటే ముందుకు వెళ్తాయి, కాని దేవర ఎద్దు యొక్క కీలక అవతారం చారిత్రక ప్రజా సహనశక్తితో లోతుగా ముడివడి ఉంది. 19వ శతాబ్దంలో, ముళకలచెరువు (అన్నమయ్య జిల్లా) ప్రాంతం భయంకరమైన, ప్రాణాంతకమైన క్షామంలో చిక్కుకుంది."
                  : "While the spiritual roots of this faith reach back over a millennium, the pivotal manifestation of the Devara Eddu is deeply tied to the historical resilience of the people. Around the 19th Century, the region of Mulakalacheruvu (Annamayya District) was gripped by a catastrophic, life-threatening drought."}
              </p>
              <p className="leading-relaxed mb-8" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.58)", fontSize: "0.97rem" }}>
                {isTe
                  ? "భూమి పగిలిపోయి, ప్రజలు నీరు లేక నిరాశలో ఉన్నారు. అపరిమిత కరుణతో శ్రీ వెంకటేశ్వర స్వామి పవిత్ర ఓకఱు రూపంలో తన కృపను వ్యక్తపరిచాడు. మరణం నుండి జీవితం, నీరు మరియు కొత్త ప్రారంభం వైపు సమాజాన్ని నడిపించడానికి దేవర ఎద్దు ప్రత్యక్షమైంది."
                  : "As the earth cracked and the people despaired with no water in sight, Lord Venkateswara — in His infinite compassion — manifested His grace in the form of a Sacred Ox. The Devara Eddu appeared to lead the community away from death and toward life, water, and a new beginning."}
              </p>
              <div className="pull-quote">
                {isTe
                  ? "\"మహా వలస ప్రారంభమైంది — మరియు ప్రభువు స్వయంగా ప్రతి అడుగు నడుస్తాడు.\""
                  : "\"The Great Exodus had begun — and the Lord Himself would walk every step of the way.\""}
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 gap-4">
              {contextStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.12)" }}>
                  <span className="text-2xl shrink-0">{stat.icon}</span>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#D4AF37", fontFamily: "var(--font-heading)" }}>{stat.label}</p>
                    <p className="text-xs" style={{ color: "rgba(251,247,240,0.45)", fontFamily: "var(--font-serif)" }}>{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ THE THREE STEPS — DETAILED ══════════ */}
      {steps.map((step, i) => {
        const refs = [step1Ref, step2Ref, step3Ref];
        const isEven = i % 2 === 0;
        return (
          <section key={step.num} id={`step-${step.num}`}
            style={{ background: isEven ? "#240F0F" : "#1A0808", padding: "5rem 0", borderTop: `1px solid ${step.color}18` }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div ref={refs[i]} className={`reveal-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                <div className={`reveal-card ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg"
                      style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`, color: "white", fontFamily: "var(--font-display)" }}>
                      {step.num}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest" style={{ color: `${step.color}`, fontFamily: "var(--font-heading)" }}>
                        {isTe ? `అడుగు ${step.num} / 3` : `Step ${step.num} of 3`}
                      </p>
                      <p className="text-xs" style={{ color: "rgba(251,247,240,0.40)", fontFamily: "var(--font-heading)" }}>{step.sub}</p>
                    </div>
                  </div>
                  <div className="aspect-[16/11] rounded-2xl overflow-hidden relative" style={{ border: `1px solid ${step.color}30` }}>
                    <Image src={step.image} alt={step.name} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,10,7,0.70) 0%, transparent 55%)" }} />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-telugu text-base mb-0.5" style={{ color: `${step.color}` }}>{step.telugu}</p>
                      <p className="font-bold" style={{ color: "white", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{step.name}</p>
                    </div>
                  </div>
                  <div className="mt-4 px-4 py-2.5 rounded-xl text-xs" style={{ background: `${step.color}10`, border: `1px solid ${step.color}25`, color: step.color, fontFamily: "var(--font-heading)" }}>
                    ✦ {step.significance}
                  </div>
                </div>

                <div className={`reveal-card ${!isEven ? "lg:order-1" : ""}`} style={{ animationDelay: "150ms" }}>
                  <h2 className="mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "white" }}>{step.name}</h2>
                  <p className="mb-2 font-bold" style={{ color: step.color, fontFamily: "var(--font-heading)", fontSize: "1.1rem" }}>{step.title}</p>
                  <p className="text-xs mb-6" style={{ color: "rgba(251,247,240,0.40)", fontFamily: "var(--font-heading)" }}>{step.sub}</p>
                  <div className="divider-premium w-24 mb-8" />
                  {step.description.map((para, pi) => (
                    <p key={pi} className="leading-relaxed mb-5 text-sm" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.57)", fontSize: "0.97rem" }}>{para}</p>
                  ))}
                  <div className="flex items-center gap-4 mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    {i > 0 && (
                      <a href={`#step-0${i}`} className="text-xs flex items-center gap-1.5 transition-opacity hover:opacity-70"
                        style={{ color: "rgba(251,247,240,0.40)", fontFamily: "var(--font-heading)" }}>
                        ← {isTe ? `అడుగు` : "Step"} {String(i).padStart(2, "0")} {steps[i - 1].name}
                      </a>
                    )}
                    {i < steps.length - 1 && (
                      <a href={`#step-0${i + 2}`} className="text-xs flex items-center gap-1.5 ml-auto transition-opacity hover:opacity-70"
                        style={{ color: step.color, fontFamily: "var(--font-heading)" }}>
                        {isTe ? `అడుగు` : "Step"} {String(i + 2).padStart(2, "0")} {steps[i + 1].name} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ══════════ JOURNEY SUMMARY ══════════ */}
      <section style={{ background: "#1A0808", padding: "5rem 0", borderTop: "1px solid rgba(212,175,55,0.10)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.8vw, 2rem)", color: "white" }}>
              {isTe
                ? <>{" "}<span className="text-metallic-gold">చిత్తూరు అంతటా</span> ప్రయాణం</>
                : <>The Journey <span className="text-metallic-gold">Across Chittoor</span></>}
            </h2>
            <p className="mt-3 text-sm" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.45)" }}>
              {isTe
                ? "మూడు దివ్య అడుగులు. ఒక అద్భుతమైన ప్రయాణం. విపత్తు నుండి రక్షించబడిన ప్రజలు."
                : "Three divine footprints. One miraculous journey. A people saved from catastrophe."}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-0">
            {steps.map((step, i) => (
              <React.Fragment key={step.num}>
                <div className="flex flex-col items-center text-center p-6 flex-1">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-4 animate-divine-glow"
                    style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`, color: "white", fontFamily: "var(--font-display)" }}>
                    {step.num}
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "white", fontFamily: "var(--font-display)" }}>{step.name}</h3>
                  <p className="text-xs mb-2" style={{ color: step.color, fontFamily: "var(--font-heading)" }}>{step.title}</p>
                  <p className="text-xs" style={{ color: "rgba(251,247,240,0.35)", fontFamily: "var(--font-serif)" }}>{step.sub}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <div className="w-16 h-px" style={{ background: "rgba(212,175,55,0.25)" }} />
                    <span className="text-[#D4AF37] text-lg px-1">→</span>
                    <div className="w-16 h-px" style={{ background: "rgba(212,175,55,0.25)" }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div ref={ctaRef} className="reveal-grid mt-10 rounded-2xl p-8 text-center" style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.18)" }}>
            <p className="text-4xl mb-4">💧</p>
            <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "#D4AF37", fontSize: "1.3rem" }}>
              {isTe ? "క్షామం విరిగింది" : "The Drought Broke"}
            </h3>
            <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
              {isTe
                ? "పెదకంటి పల్లిలో మూడవ అడుగు పడిన క్షణంలో — భూమి తెరుచుకుంది, నీరు వచ్చింది, మరియు భూమి సమృద్ధితో ఆశీర్వదించబడింది. ప్రభువు తన శాశ్వత నివాసాన్ని ఎంచుకున్నాడు. ప్రజలు తమ ఆశ్రయాన్ని కనుగొన్నారు."
                : "At the moment the third footprint was set in Pedakanti Palli — the earth opened, water came, and the land was blessed with abundance. The Lord had chosen His eternal home. The people had found their sanctuary."}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{ background: "linear-gradient(135deg, #1a1008, #110a04)", padding: "4rem 0", borderTop: "1px solid rgba(212,175,55,0.10)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", color: "white" }}>
            {isTe
              ? <>{ts.ctaTitle ?? "నడిచే దేవుని"} <span className="text-metallic-gold">కలవండి</span></>
              : <>Meet the <span className="text-metallic-gold">Walking God</span></>}
          </h2>
          <p className="mb-8 text-sm" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.45)" }}>
            {isTe
              ? "దేవర ఎద్దు యొక్క పూర్తి కథ తెలుసుకోండి — నంది కాదు, కాని మహా విష్ణువు యొక్క జీవంత అవతారం."
              : "Learn the full story of the Devara Eddu — the Sacred Ox who is not Nandi, but the living manifestation of Lord Maha Vishnu himself."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/devara-eddu"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm btn-shimmer transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E8690A, #D4AF37)", color: "white", fontFamily: "var(--font-heading)" }}>
              🐂 {isTe ? "దేవర ఎద్దు కథ" : "The Devara Eddu Story"}
            </Link>
            <Link href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(251,247,240,0.70)", fontFamily: "var(--font-heading)" }}>
              🏛️ {isTe ? "ఆలయ చరిత్ర" : "Temple History"}
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .reveal-card { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal-grid.is-visible .reveal-card { opacity: 1; transform: translateY(0); }
        .reveal-grid.is-visible .reveal-card:nth-child(1) { transition-delay: 0ms; }
        .reveal-grid.is-visible .reveal-card:nth-child(2) { transition-delay: 130ms; }
      `}</style>
    </>
  );
}
