"use client";

import React, { useState, useEffect } from "react";
import { useLanguage, useBilingualText } from "@/lib/LanguageContext";
import { PremiumSectionHeading, PremiumCard, Badge } from "@/components/ui/Primitives";
import { dailyTimings, specialTimings } from "@/data/timings";
import { festivals } from "@/data/festivals";

function getTempleStatus(timings: typeof dailyTimings) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  for (const timing of timings) {
    const [startH, startM] = timing.startTime.split(":").map(Number);
    const [endH, endM] = timing.endTime.split(":").map(Number);
    const start = startH * 60 + startM;
    const end = endH * 60 + endM;

    if (
      currentMinutes >= start &&
      currentMinutes < end &&
      !timing.title.en.toLowerCase().includes("closed")
    ) {
      return { isOpen: true, currentSession: timing };
    }
  }

  // Find next opening
  const openTimings = timings.filter(
    (t) => !t.title.en.toLowerCase().includes("closed")
  );
  for (const timing of openTimings) {
    const [startH, startM] = timing.startTime.split(":").map(Number);
    const start = startH * 60 + startM;
    if (start > currentMinutes) {
      return { isOpen: false, nextOpening: timing };
    }
  }

  // Wrap to next day
  return { isOpen: false, nextOpening: openTimings[0] };
}

export default function TimingsPageClient() {
  const { t, locale } = useLanguage();
  const getText = useBilingualText();
  const isTe = locale === "te";
  const [status, setStatus] = useState<ReturnType<typeof getTempleStatus> | null>(null);
  const [activeTab, setActiveTab] = useState<"daily" | "special" | "festivals">("daily");

  useEffect(() => {
    setStatus(getTempleStatus(dailyTimings));
    const interval = setInterval(
      () => setStatus(getTempleStatus(dailyTimings)),
      60000
    );
    return () => clearInterval(interval);
  }, []);

  const upcomingFestivals = [...festivals].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden" style={{ background: "linear-gradient(to bottom, #1E0A08, #1A0808)" }}>
        <div className="absolute inset-0 mandala-bg" style={{ opacity: 0.20 }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-xs uppercase tracking-[0.35em] mb-3" style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
            {isTe ? "రోజువారీ పవిత్ర సమయపట్టిక" : "Daily Sacred Schedule"}
          </p>
          <h1 className="animate-fade-in-up mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.5rem)", color: "white" }}>
            {isTe ? <>దర్శనం <span className="text-metallic-gold">&amp; సమయాలు</span></> : <>Darshan <span className="text-metallic-gold">&amp; Timings</span></>}
          </h1>
          <div className="divider-premium w-40 mx-auto mb-5" />
          <p className="text-sm max-w-xl mx-auto" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
            {t.timings.subtitle}
          </p>

          {/* Live Status Badge */}
          {status && (
            <div className="mt-8 animate-fade-in-up animation-delay-200 flex justify-center">
              <div
                className={`relative inline-flex items-center gap-4 px-8 py-4 rounded-full
                  backdrop-blur-md border shadow-2xl transition-all duration-300
                  ${
                  status.isOpen
                    ? "bg-green-500/10 border-green-400/30 shadow-[0_0_40px_rgba(34,197,94,0.15)]"
                    : "bg-red-500/10 border-red-400/30 shadow-[0_0_40px_rgba(239,68,68,0.15)]"
                }`}
              >
                {/* Status Dot with Glow */}
                <div className="relative flex h-4 w-4">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      status.isOpen ? "bg-green-400" : "bg-red-400"
                    }`}
                  />
                  <span
                    className={`relative inline-flex rounded-full h-4 w-4 ${
                      status.isOpen ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                </div>
                
                <div className="text-left flex flex-col">
                  <div className={`font-heading font-bold text-base tracking-wider uppercase ${
                    status.isOpen ? "text-green-400" : "text-red-400"
                  }`}>
                    {status.isOpen ? t.timings.open : t.timings.closed}
                  </div>
                  {status.isOpen && status.currentSession && (
                    <div className="text-ivory-100 text-xs sm:text-sm font-medium tracking-wide">
                      {getText(status.currentSession.title)} • {status.currentSession.startTime} - {status.currentSession.endTime}
                    </div>
                  )}
                  {!status.isOpen && status.nextOpening && (
                    <div className="text-ivory-100 text-xs sm:text-sm font-medium tracking-wide">
                      {t.timings.nextOpening}: {getText(status.nextOpening.title)} @ {status.nextOpening.startTime}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "#1A0808", padding: "4rem 0 5rem" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { key: "daily" as const, label: t.timings.dailySchedule },
              { key: "special" as const, label: t.timings.specialSchedule },
              { key: "festivals" as const, label: t.timings.festivalSchedule },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: activeTab === tab.key ? "linear-gradient(135deg,#E8690A,#D4AF37)" : "rgba(255,255,255,0.05)",
                  color: activeTab === tab.key ? "white" : "rgba(251,247,240,0.55)",
                  border: activeTab === tab.key ? "none" : "1px solid rgba(255,255,255,0.10)",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Daily Timings */}
          {activeTab === "daily" && (
            <div className="space-y-4 animate-fade-in">
              {dailyTimings.map((timing, index) => {
                const isClosed = timing.title.en.toLowerCase().includes("closed");
                return (
                  <div key={index}
                    style={{ background: isClosed ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.03)", border: `1px solid ${isClosed ? "rgba(255,255,255,0.05)" : "rgba(212,175,55,0.15)"}`, borderRadius: "1rem" }}
                    className={`p-5 sm:p-6 ${isClosed ? "opacity-50" : ""}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg shrink-0 ${
                          isClosed
                            ? "bg-gray-100 text-gray-400"
                            : "bg-gradient-to-br from-saffron-100 to-gold-100 text-saffron-600"
                        }`}>
                          {isClosed ? "🔒" : "🪔"}
                        </div>
                        <div>
                        <h3 className="font-semibold" style={{ fontFamily: "var(--font-heading)", color: "rgba(251,247,240,0.85)" }}>
                            {getText(timing.title)}
                          </h3>
                          {timing.description && (
                            <p className="text-sm mt-1" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.45)" }}>
                              {getText(timing.description)}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 sm:shrink-0 ml-16 sm:ml-0">
                        <Badge variant={isClosed ? "red" : "saffron"}>
                          🕐 {timing.startTime} - {timing.endTime}
                        </Badge>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Special Timings */}
          {activeTab === "special" && (
            <div className="space-y-4 animate-fade-in">
              {specialTimings.map((timing, index) => (
                <div key={index} className="p-5 sm:p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "1rem" }}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-saffron-100 flex items-center justify-center text-lg shrink-0">
                        ✨
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-temple-dark">
                          {getText(timing.title)}
                        </h3>
                        {timing.description && (
                          <p className="text-temple-dark/50 text-sm mt-1">
                            {getText(timing.description)}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {timing.days.map((day) => (
                            <span
                              key={day}
                              className="text-xs px-2 py-0.5 rounded bg-saffron-50 text-saffron-600 font-medium"
                            >
                              {day}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:shrink-0 ml-16 sm:ml-0">
                      <Badge variant="gold">
                        🕐 {timing.startTime} - {timing.endTime}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Festival Schedule */}
          {activeTab === "festivals" && (
            <div className="space-y-4 animate-fade-in">
              {upcomingFestivals.map((festival, index) => (
                <div key={index} className="p-5 sm:p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "1rem" }}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-maroon-100 to-saffron-100 flex items-center justify-center text-lg shrink-0">
                        🎉
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-temple-dark">
                          {getText(festival.name)}
                          {festival.highlight && (
                            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gold-100 text-gold-700">
                              ✨ {isTe ? "ప్రత్యేకం" : "Featured"}
                            </span>
                          )}
                        </h3>
                        <p className="text-temple-dark/50 text-sm mt-1 line-clamp-2">
                          {getText(festival.description)}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 sm:shrink-0 ml-16 sm:ml-0">
                      <Badge variant="maroon">
                        📅 {new Date(festival.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </Badge>
                      <span className="text-xs text-temple-dark/40">{getText(festival.duration)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Note */}
          <div className="mt-12 p-6 rounded-2xl" style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.18)" }}>
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">ℹ️</span>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
                {t.timings.timingsNote}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
