"use client";

import React, { useState, useCallback } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { sevas, SevaCategory } from "@/data/sevas";
import type { Seva } from "@/data/sevas";
import { templeInfo } from "@/data/templeInfo";



const CATEGORY_ICONS: Record<string, string> = {
  all: "🕉️",
  archana: "🌸",
  abhishekam: "🪔",
  special: "✨",
  annadanam: "🍚",
};

const CATEGORY_COLORS: Record<string, string> = {
  archana: "from-pink-500/20 to-rose-500/10 border-pink-500/30",
  abhishekam: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
  special: "from-purple-500/20 to-violet-500/10 border-purple-500/30",
  annadanam: "from-green-500/20 to-emerald-500/10 border-green-500/30",
};

const DAY_COLORS: Record<string, string> = {
  Mon: "bg-saffron-500/15 text-saffron-600",
  Tue: "bg-saffron-500/15 text-saffron-600",
  Wed: "bg-saffron-500/15 text-saffron-600",
  Thu: "bg-saffron-500/15 text-saffron-600",
  Fri: "bg-gold-500/20 text-gold-700",
  Sat: "bg-maroon-500/15 text-maroon-700",
  Sun: "bg-maroon-500/15 text-maroon-700",
};

export default function SevasPage() {
  const { t, locale } = useLanguage();
  const isTe = locale === "te";
  const [activeCategory, setActiveCategory] = useState<SevaCategory>("all");

  const st = (t as unknown as { sevas: Record<string, string> }).sevas ?? {};

  const categories: Array<{ id: SevaCategory; label: string }> = [
    { id: "all", label: st.all ?? "All Sevas" },
    { id: "archana", label: st.archana ?? "Archana" },
    { id: "abhishekam", label: st.abhishekam ?? "Abhishekam" },
    { id: "special", label: st.special ?? "Special Pujas" },
    { id: "annadanam", label: st.annadanam ?? "Annadanam" },
  ];

  const filteredSevas =
    activeCategory === "all"
      ? sevas
      : sevas.filter((s) => s.category === activeCategory);

  const allDaysLabel = st.allDays ?? "All Days";

  const isAllDays = useCallback((days: string[]) => days.length === 7, []);

  return (
    <main style={{ minHeight: "100vh", background: "#1A0808" }}>
      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden" style={{ background: "linear-gradient(to bottom, #1E0A08, #1A0808)" }}>
        <div className="absolute inset-0 mandala-bg" style={{ opacity: 0.20 }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.35em] mb-3" style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
            {isTe ? "పవిత్ర ఆచారాన్ని బుక్ చేయండి" : "Book a Sacred Ritual"}
          </p>
          <h1 className="animate-fade-in-up mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.5rem)", color: "white" }}>
            {isTe ? <>ఆలయ <span className="text-metallic-gold">సేవలు</span></> : <>Temple <span className="text-metallic-gold">Sevas</span></>}
          </h1>
          <div className="divider-premium w-40 mx-auto mb-5" />
          <p className="text-sm max-w-xl mx-auto mb-10" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
            {st.subtitle ?? "Book sacred rituals and offerings for divine blessings"}
          </p>

          {/* How to book CTA strip */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            {[
              { step: "1", text: st.ctaStep1 ?? "Choose your preferred seva" },
              { step: "2", text: st.ctaStep2 ?? 'Click "Book via Email"' },
              { step: "3", text: st.ctaStep3 ?? "Send the message with your name & date" },
              { step: "4", text: st.ctaStep4 ?? "Our priest confirms your booking" },
            ].map(({ step, text }) => (
              <div key={step} className="rounded-xl p-3 flex items-start gap-2"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <span className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg,#E8690A,#D4AF37)" }}>{step}</span>
                <p className="text-xs leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky z-30 backdrop-blur-md" style={{ top: "64px", background: "rgba(14,10,7,0.90)", borderBottom: "1px solid rgba(212,175,55,0.12)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: activeCategory === id ? "linear-gradient(135deg,#E8690A,#D4AF37)" : "rgba(255,255,255,0.05)",
                  color: activeCategory === id ? "white" : "rgba(251,247,240,0.55)",
                  border: activeCategory === id ? "none" : "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <span>{CATEGORY_ICONS[id]}</span>
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Seva Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSevas.map((seva, idx) => {
            const colorClass =
              CATEGORY_COLORS[seva.category] ??
              "from-saffron-500/20 to-gold-500/10 border-saffron-500/30";

            return (
              <div
                key={seva.id}
                className="group flip-card h-[420px] animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flip-card-inner w-full h-full relative shadow-sm hover:shadow-[0_12px_40px_rgba(255,136,17,0.15)] rounded-2xl">
                  
                  {/* Front Face */}
                  <article className="flip-card-front absolute inset-0 bg-white rounded-2xl border flex flex-col overflow-hidden">
                    {/* Card top gradient */}
                    <div
                      className={`h-2 shrink-0 bg-gradient-to-r ${
                        seva.category === "archana"
                          ? "from-pink-400 to-rose-500"
                          : seva.category === "abhishekam"
                          ? "from-blue-400 to-cyan-500"
                          : seva.category === "special"
                          ? "from-purple-400 to-violet-500"
                          : "from-green-400 to-emerald-500"
                      }`}
                    />

                    <div className="p-6 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl bg-gray-50 w-12 h-12 flex items-center justify-center rounded-full border border-gray-100">
                            {CATEGORY_ICONS[seva.category]}
                          </span>
                          <div>
                            <h2 className="font-heading font-bold text-temple-dark text-lg leading-tight">
                              {seva.name[locale]}
                            </h2>
                            <span
                              className={`inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full font-medium capitalize ${
                                seva.category === "archana"
                                  ? "bg-pink-100 text-pink-700"
                                  : seva.category === "abhishekam"
                                  ? "bg-blue-100 text-blue-700"
                                  : seva.category === "special"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-green-100 text-green-700"
                              }`}
                            >
                              {st[seva.category] ?? seva.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing Focus */}
                      <div className="mt-2 mb-6 bg-ivory-50 rounded-xl p-4 text-center border border-ivory-200">
                        <p className="text-3xl font-bold font-heading text-metallic-gold">
                          {seva.currency}{seva.price}
                        </p>
                      </div>

                      {/* Description Snippet */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {seva.description[locale]}
                      </p>

                      <div className="mt-auto text-center border-t border-gray-100 pt-4">
                        <span className="text-saffron-500 font-medium text-sm flex items-center justify-center gap-2 group-hover:text-saffron-600">
                          {isTe ? "వివరాలు చూడండి" : "View Details"} <span className="text-lg group-hover:rotate-180 transition-transform duration-500">↻</span>
                        </span>
                      </div>
                    </div>
                  </article>

                  {/* Back Face */}
                  <article className="flip-card-back absolute inset-0 bg-temple-dark rounded-2xl border border-saffron-500/30 flex flex-col overflow-hidden">
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-gold-400 font-heading tracking-wider text-xs uppercase mb-4 text-center">
                        {isTe ? "సేవ వివరాలు" : "Seva Details"}
                      </h3>
                      
                      <div className="space-y-3 mb-6 flex-1 text-ivory-300">
                        {/* Duration */}
                        <div className="flex items-center gap-3 text-sm">
                          <span className="w-6 text-center text-gold-500">⏳</span>
                          <span className="font-medium text-white/50 w-20 shrink-0">{st.duration ?? "Duration"}</span>
                          <span className="text-white">{seva.duration[locale]}</span>
                        </div>
                        {/* Time Slots */}
                        <div className="flex items-start gap-3 text-sm">
                          <span className="w-6 text-center text-gold-500 pt-0.5">🕐</span>
                          <span className="font-medium text-white/50 w-20 shrink-0">{st.timeSlots ?? "Slots"}</span>
                          <div className="flex flex-wrap gap-1.5">
                            {seva.timeSlots.map((slot) => (
                              <span key={slot} className="bg-white/10 px-2 py-0.5 rounded text-white text-xs">
                                {slot}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Available Days */}
                        <div className="flex items-start gap-3 text-sm">
                          <span className="w-6 text-center text-gold-500 pt-0.5">📅</span>
                          <span className="font-medium text-white/50 w-20 shrink-0">{st.availableDays ?? "Days"}</span>
                          <div className="flex flex-wrap gap-1.5">
                            {isAllDays(seva.availableDays) ? (
                              <span className="text-green-400 font-medium text-xs">{allDaysLabel}</span>
                            ) : (
                              seva.availableDays.map((day) => (
                                <span key={day} className="bg-saffron-500/20 text-saffron-300 px-2 py-0.5 rounded text-xs">
                                  {day}
                                </span>
                              ))
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Email Book Button */}
                      <a
                        href={`mailto:${templeInfo.email}?subject=${encodeURIComponent(`Seva Booking: ${seva.name[locale]}`)}` }
                        className="w-full mt-auto flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-heading font-semibold text-sm transition-all duration-300 btn-shimmer"
                        style={{ background: "linear-gradient(135deg, #E8690A, #D4AF37)", boxShadow: "0 4px 14px rgba(232,105,10,0.35)" }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {isTe ? "ఇమెయిల్ ద్వారా బుక్ చేయండి" : "Book via Email"}
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-8 rounded-2xl p-4 flex items-start gap-3" style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.18)" }}>
          <span className="text-xl shrink-0">ℹ️</span>
          <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
            {st.note ?? "Note: Booking confirmation is subject to availability. Please contact the temple for specific dates."}
          </p>
        </div>

        {/* Contact CTA */}
        <div className="mt-8">
          <a
            href={`mailto:${templeInfo.email}`}
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl text-white font-heading font-semibold transition-all duration-300 hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #E8690A, #D4AF37)", boxShadow: "0 4px 20px rgba(232,105,10,0.30)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {isTe ? "మీకు ప్రశ్నలు ఉన్నాయా? ఇమెయిల్ పంపండి" : "Have Questions? Email Us"} — {templeInfo.email}
          </a>
        </div>
      </section>
    </main>
  );
}
