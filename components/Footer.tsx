"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { templeInfo } from "@/data/templeInfo";
import { logEvent } from "@/lib/analytics";

export default function Footer() {
  const { t, locale } = useLanguage();

  const isTe = locale === "te";

  const exploreLinks = [
    { href: "/",            label: t.nav.home },
    { href: "/about",       label: t.nav.about },
    { href: "/gallery",     label: t.nav.gallery },
    { href: "/contact",     label: t.nav.contact },
  ];

  const sacredStoryLinks = [
    { href: "/devara-eddu",  label: isTe ? "నడిచే దేవుడు" : "The Walking God" },
    { href: "/three-steps",  label: isTe ? "మూడు అడుగులు" : "The Three Steps" },
  ];

  const visitLinks = [
    { href: "/timings", label: t.nav.timings },
    { href: "/sevas",   label: (t.nav as Record<string, string>).sevas ?? "Sevas" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#120404", borderTop: "1px solid rgba(212,175,55,0.12)" }}>
      {/* Gold gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      {/* Reconstruction notice */}
      <div style={{ background: "rgba(139,26,26,0.15)", borderBottom: "1px solid rgba(139,26,26,0.25)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <span className="w-2 h-2 rounded-full bg-[#E8690A] animate-pulse shrink-0" />
          <p className="text-white/70 text-xs sm:text-sm text-center" style={{ fontFamily: "var(--font-serif)" }}>
            <span className="text-[#E8690A] font-semibold">
              {isTe ? "ఆలయ పునర్నిర్మాణం (2020–2028):" : "Temple Reconstruction (2020–2028):"}
            </span>{" "}
            {isTe
              ? "రూ. 7 కోట్ల పట్టణం పునర్నిర్మాణ సమయంలో భవ్యమైన పండుగ వేడుకలు తాత్కాలికంగా నిలిపివేయబడ్డాయి."
              : "Grand festival celebrations are temporarily suspended during the Rs. 7 Crore rebuilding project."
            }
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* ─── Temple Identity (large col) ─── */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E8690A] to-[#D4AF37] flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                  <ellipse cx="14.5" cy="20" rx="3.8" ry="10.5" fill="rgba(255,255,255,0.97)" transform="rotate(-6 14.5 20)"/>
                  <ellipse cx="25.5" cy="20" rx="3.8" ry="10.5" fill="rgba(255,255,255,0.97)" transform="rotate(6 25.5 20)"/>
                  <ellipse cx="20" cy="21.5" rx="2.4" ry="7.5" fill="#CC1200"/>
                  <circle cx="20" cy="9.5" r="1.8" fill="rgba(255,255,255,0.85)"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Sri Kanukondaraya Swamy
                </p>
                <p className="text-[#D4AF37] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  Devasthanam
                </p>
              </div>
            </Link>

            {/* Telugu name */}
            <p className="font-telugu text-[#D4AF37]/60 text-base mb-4 leading-relaxed">
              శ్రీ కనుకొండరాయ స్వామి దేవస్థానం
            </p>

            {/* Description */}
            <p className="text-white/55 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              {isTe
                ? "మహా విష్ణువు యొక్క జీవంత అవతారం — పవిత్ర దేవర ఎద్దు, యెక్క మూడు దివ్య అడుగులు మహాక్షామాన్ని అంతం చేసి ఆంధ్రప్రదేశ్, చిత్తూరులో ఈ పవిత్ర భూమిని ఎంచుకున్నాయి."
                : "A living manifestation of Lord Maha Vishnu \u2014 the Sacred Devara Eddu whose three divine steps ended a great drought and chose this sacred land in Chittoor, Andhra Pradesh."
              }
            </p>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-sm text-white/50 mb-3">
              <svg className="w-4 h-4 text-[#E8690A] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{isTe ? templeInfo.address.te : templeInfo.address.en}</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5 text-sm">
              <svg className="w-4 h-4 text-[#E8690A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${templeInfo.email}`} className="text-white/55 hover:text-[#E8690A] transition-colors duration-200">
                {templeInfo.email}
              </a>
            </div>
          </div>

          {/* ─── Explore Links ─── */}
          <div className="lg:col-span-2">
            <h3 className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              {isTe ? "అన్వేషించండి" : "Explore"}
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#E8690A] transition-colors duration-200 text-sm flex items-center gap-2 group"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#E8690A] transition-colors duration-200 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Sacred Story Links ─── */}
          <div className="lg:col-span-3">
            <h3 className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              {isTe ? "పవిత్ర కథ" : "Sacred Story"}
            </h3>
            <ul className="space-y-3 mb-6">
              {sacredStoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors duration-200 text-sm flex items-center gap-2 group"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-200 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              {isTe ? "సందర్శనం ప్లాన్ చేయండి" : "Plan Visit"}
            </h3>
            <ul className="space-y-3">
              {visitLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#E8690A] transition-colors duration-200 text-sm flex items-center gap-2 group"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#E8690A] transition-colors duration-200 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Connect ─── */}
          <div className="lg:col-span-3">
            <h3 className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              {isTe ? "సంపర్కించండి" : "Connect"}
            </h3>

            {/* Email CTA */}
            <a
              href={`mailto:${templeInfo.email}`}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl mb-4 text-sm font-medium transition-all duration-300 group"
              style={{
                background: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.20)",
              }}
            >
              <svg className="w-5 h-5 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-[#D4AF37] text-sm font-semibold leading-tight">
                  {isTe ? "ఇమెయిల్ మాకు" : "Email Us"}
                </p>
                <p className="text-white/40 text-xs">
                  {templeInfo.email}
                </p>
              </div>
            </a>

            {/* Darshan timings quick ref */}
            <div className="rounded-xl p-4" style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.12)" }}>
              <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                {isTe ? "దర్శన సమయాలు" : "Darshan Timings"}
              </p>
              <div className="space-y-1.5 text-xs text-white/50" style={{ fontFamily: "var(--font-serif)" }}>
                <div className="flex justify-between">
                  <span>{isTe ? "ఉదయం" : "Morning"}</span>
                  <span className="text-white/70">5:30 AM – 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{isTe ? "సాయంత్రం" : "Evening"}</span>
                  <span className="text-white/70">4:00 PM – 8:30 PM</span>
                </div>
                <div className="mt-2 pt-2 border-t border-white/8">
                  <p className="text-[#E8690A]/70 text-[10px]">
                    {isTe ? "సప్తాహం 7 రోజులు · సంవత్సరమంతా తెరిచి ఉంటుంది" : "All 7 days · Open year‑round"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs text-center sm:text-left" style={{ fontFamily: "var(--font-heading)" }}>
              {isTe
                ? `\u00a9 ${currentYear} శ్రీ కనుకొండరాయ స్వామి దేవస్థానం. అన్ని హక్కులు సంరక్షించబడ్డాయి.`
                : `\u00a9 ${currentYear} Sri Kanukondaraya Swamy Devasthanam. All rights reserved.`
              }
            </p>
            <div className="flex items-center gap-4 text-xs text-white/30">
              <Link href="/privacy" className="hover:text-[#E8690A] transition-colors duration-200">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-[#E8690A] transition-colors duration-200">
                Terms
              </Link>
              <span>·</span>
              <span className="flex items-center gap-1">
                {isTe ? "భక్తుల కోసం భక్తితో తయారు చేయబడింది" : <>Made with <span className="text-[#E8690A]">❤</span> for devotees 🙏</>}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
