"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal();
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function DarkCard({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`rounded-2xl p-6 ${className}`}
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.15)", ...style }}>
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, accent }: { eyebrow: string; title: string; accent: string }) {
  return (
    <div className="text-center mb-12">
      <p className="text-xs uppercase tracking-[0.35em] mb-3" style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>{eyebrow}</p>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,4vw,2.6rem)", color: "white" }}>
        {title} <span className="text-metallic-gold">{accent}</span>
      </h2>
      <div className="divider-premium w-32 mx-auto mt-4" />
    </div>
  );
}

export default function AboutPageClient() {
  const { locale } = useLanguage();
  const isTe = locale === "te";

  const heroStats = isTe ? [
    { label: "సంవత్సరాల వారసత్వం", value: "1,000+" },
    { label: "ఎకరాల పవిత్ర భూమి", value: "60+" },
    { label: "కోట్ల పునర్నిర్మాణం", value: "₹7" },
    { label: "భక్త కుటుంబాలు", value: "1,200+" },
  ] : [
    { label: "Years of Heritage", value: "1,000+" },
    { label: "Acres of Sacred Land", value: "60+" },
    { label: "Crore Reconstruction", value: "₹7" },
    { label: "Devotee Families", value: "1,200+" },
  ];

  const originCards = isTe ? [
    {
      bordered: true,
      title: "దివ్య విశేషత",
      body: "హిందూ సంప్రదాయంలో, ఓకఱు సాధారణంగా మహా నంది — శివుని పవిత్ర వాహనంగా పూజించబడుతుంది. మా ఆలయం ఒక ప్రాచీన మరియు విభిన్నమైన సత్యాన్ని కాపాడుతుంది: ఇక్కడ, దేవర ఎద్దు వాహనం కాదు, కాని మహా విష్ణువు యొక్క నేరు, జీవంత అవతారం (విభవరూప).",
    },
    {
      bordered: false,
      title: "నడిచే దేవుడు",
      body: "ఇతర పుణ్యక్షేత్రాలు విగ్రహాలు లేదా సంకేతాలు కలిగి ఉంటే, పెదకంటి పల్లి భక్తులు ప్రభువు స్వయంగా పవిత్ర ఓకఱు రూపంలో వారి మధ్య నడుస్తాడని నమ్ముతారు. దేవర ఎద్దుని దర్శించడం అంటే శారీరక, శ్వాసిస్తున్న రూపంలో వెంకటేశ్వర స్వామి దర్శనం పొందడమే.",
    },
    {
      bordered: false,
      title: "పవిత్ర సంగమం",
      body: "మా ఆలయం విశ్వాసం యొక్క అపురూపమైన \"పవిత్ర సంగమం\"గా సేవ చేస్తుంది — హిందూ మతం యొక్క రెండు గొప్ప స్రవంతులు, వైష్ణవం మరియు శైవం, సామరస్యంగా కలిసే చోటు. శివుని సేవతో సంబంధించిన రూపంలో విష్ణువు యొక్క సర్వోచ్చ కృప నిండుతుంది.",
    },
  ] : [
    {
      bordered: true,
      title: "A Divine Distinction",
      body: "In the broader landscape of Hindu tradition, the Ox is almost universally revered as Maha Nandi — the sacred vehicle of Lord Shiva. Our temple preserves an ancient and distinct truth: here, the Devara Eddu is not a vehicle, but a direct, living manifestation (Vibhavarupa) of Lord Maha Vishnu.",
    },
    {
      bordered: false,
      title: "The Walking God",
      body: "While other shrines house statues or symbols, the devotees of Pedakanti Palli believe that the Lord Himself walks among them in the form of the Sacred Ox. To witness the Devara Eddu is to receive the Darshan of Lord Venkateswara in a physical, breathing form.",
    },
    {
      bordered: false,
      title: "The Sacred Confluence",
      body: "Our temple serves as a rare \"Sacred Confluence\" of faith — where the two great streams of Hinduism, Vaishnavism and Shaivism, meet in perfect harmony. It is a spiritual marvel where a form typically associated with Shiva's service is filled with the sovereign grace of Vishnu.",
    },
  ];

  const threeStepsData = isTe ? [
    {
      num: "01", name: "కాలవగుంట", loc: "పెనుమూరు మండలం, చిత్తూరు",
      img: "/images/three-steps/step1-kalavagunta.jpg",
      title: "దివ్య కృపకు ఆగమనం",
      text: "మొదటి అద్భుతమైన అడుగు కాలవగుంటలో పడింది. ఇక్కడ దేవర ఎద్దు తన ఉనికిని మొదట సూచించింది, వాక్కు-గ్రస్త ఉత్తర ప్రాంతం నుండి వలసకు శ్రీకారం చుట్టింది. ఈ స్థలం మొదటి ఆశకిరణాన్ని సూచిస్తుంది.",
    },
    {
      num: "02", name: "కాళగిరి కొండ", loc: "పెనుమూరు మండలం, చిత్తూరు",
      img: "/images/three-steps/step2-kaligiri-konda.jpg",
      title: "అద్భుతమైన దొంతర",
      text: "ప్రయాణం కొనసాగుతున్నప్పుడు, దేవర ఎద్దు కాళిగిరి కొండల దిగువకు చేరుకుంది. దివ్య శక్తి ప్రదర్శనలో, పవిత్ర ఓకఱు మైదానం నుండి నేరుగా కొండ శిఖరంపైకి అద్భుతమైన దొంతర వేసింది.",
    },
    {
      num: "03", name: "పెదకంటి పల్లి", loc: "గంగాధర నెల్లూరు మండలం, చిత్తూరు",
      img: "/images/three-steps/step3-pedakanti-palli.jpg",
      title: "ఎంచుకున్న భూమి",
      text: "మూడవ మరియు చివరి అడుగు పెదకంటి పల్లిలో పడింది. ఈ దివ్య అడుగు పడిన అదే క్షణంలో క్షామం విరిగింది. ఇది \"ఎంచుకున్న భూమి\"గా గుర్తించి, ప్రభువు ఇక్కడ నెలకొన్నాడు మరియు ప్రజలు ఆయన రక్షణలో తమ నివాసం నిర్మించుకున్నారు.",
    },
  ] : [
    {
      num: "01", name: "Kalavagunta", loc: "Penumuru Mandal, Chittoor",
      img: "/images/three-steps/step1-kalavagunta.jpg",
      title: "The Landing of Divine Grace",
      text: "The first miraculous step was taken in Kalavagunta. It was here that the Devara Eddu first signaled its presence, marking the beginning of the exodus from the drought-stricken north. This site represents the first spark of hope and the moment the Lord's grace touched the earth.",
    },
    {
      num: "02", name: "Kaligiri Konda", loc: "Penumuru Mandal, Chittoor",
      img: "/images/three-steps/step2-kaligiri-konda.jpg",
      title: "The Miraculous Leap",
      text: "As the journey continued, the Devara Eddu reached the base of the majestic Kaligiri hills. In a display of divine power, the Ox took a miraculous leap from the plains directly to the hilltop. This second imprint, etched into the high peaks, serves as a testament to the supernatural strength of the sacred guide.",
    },
    {
      num: "03", name: "Pedakanti Palli", loc: "Gangadhara Nellore Mandal, Chittoor",
      img: "/images/three-steps/step3-pedakanti-palli.jpg",
      title: "The Final Destination",
      text: "The third and final step was taken in Pedakanti Palli. At the exact moment this footprint was made, the drought broke, and the land was blessed with water and abundance. Recognizing this as the \"Chosen Land\", the Lord settled here, and the people established their home under His protection.",
    },
  ];

  const phases = isTe ? [
    {
      label: "దశ 1", era: "పునాది యుగం", years: "1933 – 1955", icon: "🏛️",
      color: "rgba(232,105,10,0.25)", border: "rgba(232,105,10,0.40)",
      facts: [
        "ఆధునిక వెల్పు ఉత్సవ సంప్రదాయాన్ని అధికారికంగా స్థాపించింది",
        "అత్యంత ప్రాచీన అధికారిక అభిలేఖం: జూన్ 18, 1933 నాటి పవిత్ర పండుగ ఆహ్వానం",
        "ఈ దేవర ఎద్దు 22 సంవత్సరాలు నమ్మకంగా సేవ చేసి 1955లో మరణించింది",
      ],
    },
    {
      label: "దశ 2", era: "స్వర్ణయుగం", years: "1987 – 2004", icon: "✨",
      color: "rgba(212,175,55,0.20)", border: "rgba(212,175,55,0.40)",
      facts: [
        "జూన్ 1, 1987న జన్మించింది — చిన్న కమాసాని పెద్దలచే గుర్తింపు పొందింది",
        "18 వైభవమైన సంవత్సరాలు ప్రభువుకు సేవ చేసింది — ప్రాంతీయ ఆధ్యాత్మిక ఉనికి పెరుగుదల కాలం",
        "నవంబర్ 27, 2005న మహా శాంతి యజ్ఞం నిర్వహించారు — వేలాది మంది చివరి నివాళి అర్పించారు",
      ],
    },
    {
      label: "దశ 3", era: "సంక్షిప్త ఆశీర్వాదం", years: "2014 – 2015", icon: "🕊️",
      color: "rgba(134,160,200,0.15)", border: "rgba(134,160,200,0.35)",
      facts: [
        "అక్టోబర్ 25, 2014న గుర్తింపు పొందింది — నవంబర్ 27, 2014న సేవలో చేర్చబడింది",
        "ఊపిరితిత్తుల వైఫల్యం కారణంగా సంవత్సరంలోనే మరణించింది",
        "అయినప్పటికీ సమాజం యొక్క పవిత్ర నిబద్ధతను పునరుద్ఘాటించింది",
      ],
    },
  ] : [
    {
      label: "Phase 1", era: "The Era of Foundation", years: "1933 – 1955", icon: "🏛️",
      color: "rgba(232,105,10,0.25)", border: "rgba(232,105,10,0.40)",
      facts: [
        "Officially established the modern Velpu Utsavam tradition",
        "Earliest formal archive: sacred festival invitation dated June 18, 1933",
        "This Devara Eddu served faithfully for 22 years before passing in 1955",
      ],
    },
    {
      label: "Phase 2", era: "The Golden Era", years: "1987 – 2004", icon: "✨",
      color: "rgba(212,175,55,0.20)", border: "rgba(212,175,55,0.40)",
      facts: [
        "Born on June 1, 1987 — identified by the Chinna Kamasani elders",
        "Served the Lord for 18 glorious years — a period of regional spiritual rise",
        "Maha Shanti Yajnam held Nov 27, 2005 — thousands paid final respects",
      ],
    },
    {
      label: "Phase 3", era: "The Brief Blessing", years: "2014 – 2015", icon: "🕊️",
      color: "rgba(134,160,200,0.15)", border: "rgba(134,160,200,0.35)",
      facts: [
        "Identified on Oct 25, 2014 — taken up into service Nov 27, 2014",
        "Tragically short-lived — passed due to lung failure within the year",
        "Yet it reaffirmed the community's sacred commitment to the tradition",
      ],
    },
  ];

  const legacyCards = isTe ? [
    {
      icon: "🌾",
      title: "60 ఎకరాలు దానం",
      body: "చిన్న కమాసాని వంశం 60 ఎకరాలకు పైగా భూమిని దానం చేసింది — పవిత్ర ఓకఱులకు సేవ మరియు ఆచారాలు ఆర్థిక భారం లేకుండా శాశ్వతంగా కొనసాగేలా ఆలయం యొక్క స్థిరత్వానికి పునాది వేశారు.",
    },
    {
      icon: "🏛️",
      title: "ప్రభుత్వ సంరక్షకత్వం",
      body: "మార్చి 10, 1977న, ఆంధ్రప్రదేశ్ ఎండోవ్‌మెంట్ విభాగం అధికారికంగా నిర్వహణ చేపట్టింది — పారదర్శకత మరియు వృత్తిపరమైన సంరక్షణతో చట్టపరంగా రక్షించబడిన నిర్వహణ నిర్ధారించింది.",
    },
    {
      icon: "🕉️",
      title: "మహా శివరాత్రి వేడుకలు",
      body: "వైష్ణవం మరియు శైవం మధ్య దివ్య వారధిని గౌరవిస్తూ ఆలయం మహా శివరాత్రిని భవ్యంగా జరుపుతుంది. గమనిక: 2020–2028 పునర్నిర్మాణ సమయంలో భవ్య వేడుకలు తాత్కాలికంగా నిలిపివేయబడ్డాయి.",
    },
  ] : [
    {
      icon: "🌾",
      title: "60 Acres Donated",
      body: "The foundation of the temple's sustainability was laid by the Chinna Kamasani lineage, who donated over 60 acres of land to ensure rituals and service to the Sacred Oxen would continue for eternity without financial burden.",
    },
    {
      icon: "🏛️",
      title: "Government Guardianship",
      body: "On March 10, 1977, the Andhra Pradesh Endowment Department formally assumed administration — ensuring legally protected management with transparency and professional preservation.",
    },
    {
      icon: "🕉️",
      title: "Maha Shivaratri Celebrations",
      body: "The temple celebrates Maha Shivaratri on a grand scale — honoring the divine bridge between Vaishnavism and Shaivism. Note: Grand celebrations are temporarily suspended during the 2020–2028 reconstruction.",
    },
  ];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: "80vh", background: "linear-gradient(to bottom, #160606, #1A0808)" }}>
        <div className="absolute inset-0">
          <Image src="/images/devara-eddu/devara-eddu-hero.jpg" alt="Sri Kanukondaraya Swamy — The Walking God"
            fill className="object-cover object-center" priority style={{ opacity: 0.35 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(22,6,6,0.35) 0%, rgba(26,8,8,0.70) 60%, #1A0808 100%)" }} />
        </div>
        <div className="absolute inset-0 mandala-bg" style={{ opacity: 0.12 }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 30% at 50% 10%, rgba(212,175,55,0.10) 0%, transparent 70%)" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-end"
          style={{ minHeight: "80vh", paddingBottom: "5rem", paddingTop: "8rem" }}>
          <p className="text-xs uppercase tracking-[0.35em] mb-4" style={{ color: "rgba(212,175,55,0.65)", fontFamily: "var(--font-heading)" }}>
            {isTe ? "ప్రాచీన వారసత్వం · జీవంత దైవత్వం" : "Ancient Heritage · Living Divinity"}
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,6vw,4.5rem)", color: "white", lineHeight: 1.15 }}>
            {isTe ? (
              <>శ్రీ కనుకొండరాయ <br /><span className="text-metallic-gold">స్వామి దేవస్థానం</span></>
            ) : (
              <>Sri Kanukondaraya <br /><span className="text-metallic-gold">Swamy Devasthanam</span></>
            )}
          </h1>
          <div className="divider-premium w-48 mx-auto my-6" />
          <p className="text-base max-w-2xl mx-auto" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.60)", lineHeight: 1.8 }}>
            {isTe
              ? "19వ శతాబ్దం మహాక్షామం నుండి పవిత్ర ఓకఱు యొక్క జీవంత రూపంలో శ్రీ వెంకటేశ్వర స్వామి యొక్క అవతారం — తన ప్రజల మధ్య నడుస్తూ."
              : "A manifestation of Sri Lord Venkateswara Swamy in the living form of the Sacred Ox — walking among His people since the Great Drought of the 19th Century."}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="px-5 py-3 rounded-xl text-center"
                style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.20)" }}>
                <p className="text-xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#D4AF37" }}>{stat.value}</p>
                <p className="text-xs mt-0.5" style={{ fontFamily: "var(--font-heading)", color: "rgba(251,247,240,0.50)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ORIGIN STORY ═══ */}
      <section style={{ background: "#1A0808", padding: "5rem 0" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow={isTe ? "శాశ్వత గుర్తింపు" : "The Eternal Identity"}
              title={isTe ? "విష్ణువు పవిత్ర" : "Lord Vishnu as the"}
              accent={isTe ? "ఓకఱుగా" : "Sacred Ox"}
            />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div className="space-y-5">
                {originCards.map((card, i) => (
                  <DarkCard key={i} style={card.bordered ? { borderLeft: "4px solid #E8690A" } : undefined}>
                    <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)", color: "#D4AF37" }}>{card.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.60)" }}>{card.body}</p>
                  </DarkCard>
                ))}
                <Link href="/devara-eddu" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold btn-shimmer"
                  style={{ background: "linear-gradient(135deg,#E8690A,#D4AF37)", color: "white", fontFamily: "var(--font-heading)" }}>
                  {isTe ? "దేవర ఎద్దు గురించి తెలుసుకోండి →" : "Learn About the Devara Eddu →"}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]" style={{ border: "1px solid rgba(212,175,55,0.20)" }}>
                  <Image src="/images/devara-eddu/devara-eddu-portrait.jpg"
                    alt="The Devara Eddu — Sacred Ox manifestation of Lord Vishnu"
                    fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,10,7,0.60) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(212,175,55,0.70)", fontFamily: "var(--font-heading)" }}>
                      {isTe ? "దేవర ఎద్దు" : "Devara Eddu"}
                    </p>
                    <p className="text-sm" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.70)" }}>
                      {isTe ? "మహా విష్ణువు యొక్క జీవంత అవతారం" : "The Living Manifestation of Lord Maha Vishnu"}
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl -z-10" style={{ border: "1px solid rgba(212,175,55,0.12)" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ THREE STEPS ═══ */}
      <section style={{ background: "#240F0F", padding: "5rem 0" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow={isTe ? "19వ శతాబ్దం · మహా వలస" : "19th Century · The Great Exodus"}
              title={isTe ? "దివ్య" : "The Divine"}
              accent={isTe ? "మూడు అడుగులు" : "Three Steps"}
            />
          </Reveal>
          <Reveal>
            <div className="mb-10 p-6 rounded-2xl" style={{ background: "rgba(232,105,10,0.06)", border: "1px solid rgba(232,105,10,0.20)" }}>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.60)" }}>
                {isTe
                  ? "19వ శతాబ్దంలో, ముళకలచెరువు (అన్నమయ్య జిల్లా) ప్రాంతం భయంకరమైన, ప్రాణాంతకమైన క్షామంలో చిక్కుకుంది. భూమి పగిలిపోయి, ప్రజలు నిరాశలో ఉన్నారు. శ్రీ వెంకటేశ్వర స్వామి పవిత్ర ఓకఱు రూపంలో తన కృపను వ్యక్తపరిచాడు — జీవితం మరియు నీరు వైపు సమాజాన్ని నడిపించడానికి."
                  : "Around the 19th Century, the region of Mulakalacheruvu (Annamayya District) was gripped by a catastrophic, life-threatening drought. As the earth cracked and the people despaired, Lord Venkateswara manifested His grace in the form of a Sacred Ox — the Devara Eddu — to lead the community toward life and water."}
              </p>
            </div>
          </Reveal>
          <div className="space-y-8">
            {threeStepsData.map((step, i) => (
              <Reveal key={step.num} delay={i * 120}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={`relative rounded-2xl overflow-hidden aspect-[16/9] ${i % 2 === 1 ? "lg:col-start-2" : ""}`}
                    style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
                    <Image src={step.img} alt={step.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,10,7,0.65) 0%, transparent 55%)" }} />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)", color: "rgba(212,175,55,0.25)" }}>{step.num}</span>
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#E8690A", fontFamily: "var(--font-heading)" }}>
                      {isTe ? `అడుగు ${step.num} · ${step.loc}` : `Step ${step.num} · ${step.loc}`}
                    </p>
                    <h3 className="mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "white" }}>{step.name}</h3>
                    <p className="text-sm mb-3" style={{ fontFamily: "var(--font-heading)", color: "rgba(212,175,55,0.75)" }}>{step.title}</p>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.58)" }}>{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10 text-center">
              <Link href="/three-steps" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                style={{ background: "rgba(212,175,55,0.10)", border: "1px solid rgba(212,175,55,0.30)", color: "#D4AF37", fontFamily: "var(--font-heading)" }}>
                {isTe ? "మూడు అడుగుల పూర్తి కథ చూడండి →" : "Explore the Full Story of Three Steps →"}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ THREE PHASES ═══ */}
      <section style={{ background: "#1E0A0A", padding: "5rem 0" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow={isTe ? "దాఖలైన పవిత్ర చరిత్ర" : "Documented Sacred History"}
              title={isTe ? "మూడు చారిత్రక" : "Three Historical"}
              accent={isTe ? "దశలు" : "Phases"}
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <Reveal key={phase.label} delay={i * 100}>
                <div className="h-full rounded-2xl p-6 flex flex-col" style={{ background: phase.color, border: `1px solid ${phase.border}` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{phase.icon}</span>
                    <div>
                      <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(251,247,240,0.45)", fontFamily: "var(--font-heading)" }}>{phase.label}</p>
                      <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-heading)", color: "rgba(212,175,55,0.90)" }}>{phase.years}</p>
                    </div>
                  </div>
                  <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "white" }}>{phase.era}</h3>
                  <ul className="space-y-2 flex-1">
                    {phase.facts.map((fact, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
                        <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#D4AF37" }} />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ANCESTRAL LEGACY ═══ */}
      <section style={{ background: "linear-gradient(135deg, #1E0A08, #1A0808)", padding: "5rem 0" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow={isTe ? "చిన్న కమాసాని వంశం" : "Chinna Kamasani Lineage"}
              title={isTe ? "పితృ" : "Ancestral"}
              accent={isTe ? "వారసత్వం" : "Legacy"}
            />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal>
              <div className="space-y-5">
                {legacyCards.map((card, i) => (
                  <DarkCard key={i}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg"
                        style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.25)" }}>
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1" style={{ fontFamily: "var(--font-heading)", color: "#D4AF37" }}>{card.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>{card.body}</p>
                      </div>
                    </div>
                  </DarkCard>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(212,175,55,0.20)" }}>
                <div className="relative aspect-square">
                  <Image src="/images/the-mall/pallaru-chekka.jpg"
                    alt="Pallaru Chekka — Universal Harmony under Lord Kanukondaraya Swamy"
                    fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,10,7,0.85) 0%, transparent 55%)" }} />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "white" }}>
                      {isTe ? "పల్లరు చెక్క" : "Pallaru Chekka"}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.60)" }}>
                      {isTe
                        ? "విశ్వ సమరసత — పులి, ఓకఱు, ఆవు మరియు భక్తుడు శ్రీ కనుకొండరాయ స్వామి కృపలో పరిపూర్ణ శాంతిలో ఉంటారు."
                        : "Universal harmony — the Tiger, Ox, Cow, and Devotee coexist in absolute peace under the grace of Lord Sri Kanukondaraya Swamy."}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ RECONSTRUCTION BANNER ═══ */}
      <section style={{ background: "#080603", padding: "4rem 0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(232,105,10,0.35)" }}>
              <div className="px-6 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, rgba(232,105,10,0.25), rgba(212,175,55,0.15))" }}>
                <span className="text-2xl">🏗️</span>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#E8690A", fontFamily: "var(--font-heading)" }}>
                    {isTe ? "నిర్మాణంలో ఉన్న ప్రాజెక్టు" : "Active Project"}
                  </p>
                  <h3 className="font-semibold" style={{ fontFamily: "var(--font-display)", color: "white" }}>
                    {isTe ? "ఆలయ పునర్నిర్మాణం" : "Grand Temple Reconstruction"}
                  </h3>
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-5" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="text-center p-4 rounded-xl" style={{ background: "rgba(232,105,10,0.08)", border: "1px solid rgba(232,105,10,0.20)" }}>
                  <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#E8690A" }}>₹7 Cr</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(251,247,240,0.50)", fontFamily: "var(--font-heading)" }}>
                    {isTe ? "ప్రభుత్వ అనుమతి" : "Government Sanctioned"}
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.20)" }}>
                  <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#D4AF37" }}>2 Acres</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(251,247,240,0.50)", fontFamily: "var(--font-heading)" }}>
                    {isTe ? "విస్తరించిన పవిత్ర స్థలం" : "Expanded Sacred Site"}
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ background: "rgba(134,200,134,0.06)", border: "1px solid rgba(134,200,134,0.18)" }}>
                  <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#86c486" }}>2028</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(251,247,240,0.50)", fontFamily: "var(--font-heading)" }}>
                    {isTe ? "ఆశించిన పూర్తి తేదీ" : "Expected Completion"}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-5">
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.50)" }}>
                  {isTe
                    ? "1,200+ భక్త కుటుంబాలు మరియు వేలాది సందర్శించే యాత్రికుల పెరుగుతున్న విశ్వాసానికి అనుగుణంగా, పెదకుంటపల్లిలోని అసలు ప్రధాన ఆలయాన్ని మొదటి నుండి పూర్తిగా నిర్మిస్తున్నారు. 2028 పూర్తి కావడం కొత్త యుగాన్ని ప్రారంభిస్తుంది."
                    : "To accommodate the growing faith of over 1,200 devotee families and thousands of visiting pilgrims, the original main temple in Pedakuntapalli is being entirely rebuilt from scratch. The 2028 completion will mark the beginning of a new era."}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ background: "#1A0808", padding: "4rem 0 5rem" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <h2 className="mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,3.5vw,2rem)", color: "white" }}>
                {isTe
                  ? <>మీ పవిత్ర <span className="text-metallic-gold">తీర్థయాత్ర</span> ప్రారంభించండి</>
                  : <>Begin Your Sacred <span className="text-metallic-gold">Journey</span></>}
              </h2>
              <p className="text-sm mb-8 max-w-lg mx-auto" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.50)" }}>
                {isTe
                  ? "శ్రీ కనుకొండరాయ స్వామి దేవస్థానానికి మీ తీర్థయాత్రను ప్లాన్ చేసుకోండి — పెదకంటి పల్లి, చిత్తూరు జిల్లా, ఆంధ్రప్రదేశ్."
                  : "Plan your pilgrimage to Sri Kanukondaraya Swamy Devasthanam — Pedakanti Palli, Chittoor District, Andhra Pradesh."}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/timings" className="px-7 py-3.5 rounded-xl text-sm font-semibold btn-shimmer"
                  style={{ background: "linear-gradient(135deg,#E8690A,#D4AF37)", color: "white", fontFamily: "var(--font-heading)" }}>
                  {isTe ? "దర్శన సమయాలు" : "Darshan Timings"}
                </Link>
                <Link href="/contact" className="px-7 py-3.5 rounded-xl text-sm font-semibold"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,175,55,0.25)", color: "#D4AF37", fontFamily: "var(--font-heading)" }}>
                  {isTe ? "దిశలు పొందండి" : "Get Directions"}
                </Link>
                <Link href="/devara-eddu" className="px-7 py-3.5 rounded-xl text-sm font-semibold"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(251,247,240,0.65)", fontFamily: "var(--font-heading)" }}>
                  {isTe ? "నడిచే దేవుని కలవండి" : "Meet the Walking God"}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
