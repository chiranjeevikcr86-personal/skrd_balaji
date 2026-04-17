"use client";

import React from "react";
import { useLanguage, useBilingualText } from "@/lib/LanguageContext";
import { Button, Card } from "@/components/ui/Primitives";
import { templeInfo } from "@/data/templeInfo";
import { dailyTimings } from "@/data/timings";

export default function ContactPageClient() {
  const { t, locale } = useLanguage();
  const getText = useBilingualText();
  const isTe = locale === "te";

  const mapsDirectionUrl = `https://www.google.com/maps/dir/?api=1&destination=${templeInfo.mapCoordinates.lat},${templeInfo.mapCoordinates.lng}`;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden" style={{ background: "linear-gradient(to bottom, #1E0A08, #1A0808)" }}>
        <div className="absolute inset-0 mandala-bg" style={{ opacity: 0.20 }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-xs uppercase tracking-[0.35em] mb-3" style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
            {isTe ? "మీ సందర్శనం ప్లాన్ చేయండి" : "Plan Your Visit"}
          </p>
          <h1 className="animate-fade-in-up mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.5rem)", color: "white" }}>
            {isTe ? <>సంపర్కించండి <span className="text-metallic-gold">&amp; దిశలు</span></> : <>Contact <span className="text-metallic-gold">&amp; Directions</span></>}
          </h1>
          <div className="divider-premium w-40 mx-auto mb-5" />
          <p className="text-sm max-w-xl mx-auto" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ background: "#1A0808", padding: "4rem 0 5rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Contact Details */}
            <div className="space-y-5">
              {/* Address Card */}
              <div className="p-6 sm:p-7 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: "linear-gradient(135deg,rgba(232,105,10,0.2),rgba(212,175,55,0.15))", border: "1px solid rgba(212,175,55,0.20)" }}>📍</div>
                  <div>
                    <h3 className="font-semibold text-base mb-2" style={{ fontFamily: "var(--font-heading)", color: "rgba(212,175,55,0.90)" }}>{t.contact.address}</h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.58)" }}>{getText(templeInfo.address)}</p>
                    <a href={mapsDirectionUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: "#E8690A", fontFamily: "var(--font-heading)" }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      {t.contact.getDirections}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 sm:p-7 rounded-2xl" style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.20)" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: "linear-gradient(135deg,rgba(212,175,55,0.15),rgba(232,105,10,0.10))", border: "1px solid rgba(212,175,55,0.25)" }}>✉️</div>
                  <div>
                    <h3 className="font-semibold text-base mb-1" style={{ fontFamily: "var(--font-heading)", color: "rgba(212,175,55,0.90)" }}>
                      {isTe ? "ఇమెయిల్" : "Email"}
                    </h3>
                    <p className="text-xs mb-3" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.45)" }}>
                      {isTe ? "మీ ప్రశ్నలకు మేము సమాధానం ఇస్తాము" : "We will respond to your queries"}
                    </p>
                    <a href={`mailto:${templeInfo.email}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
                      style={{ background: "linear-gradient(135deg,#E8690A,#D4AF37)", color: "white", fontFamily: "var(--font-heading)" }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {templeInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="p-6 sm:p-7 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <h3 className="font-semibold text-base mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)", color: "rgba(212,175,55,0.90)" }}>🕐 {t.contact.visitingHours}</h3>
                <div className="space-y-2.5">
                  {dailyTimings
                    .filter((t) => !t.title.en.toLowerCase().includes("closed"))
                    .map((timing, index) => (
                      <div key={index} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <span className="text-sm" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>{getText(timing.title)}</span>
                        <span className="text-sm font-semibold" style={{ color: "#E8690A", fontFamily: "var(--font-heading)" }}>{timing.startTime} - {timing.endTime}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Right: Google Maps */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(212,175,55,0.18)" }}>
                <div className="px-6 py-4" style={{ background: "linear-gradient(135deg,#E8690A,#D4AF37)" }}>
                  <h3 className="font-semibold text-white flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>📍 {t.contact.locationTitle}</h3>
                </div>
                <div className="aspect-[4/3] sm:aspect-[16/10]">
                  <iframe
                    src={templeInfo.mapEmbedUrl}
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Temple Location"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4" style={{ background: "rgba(14,10,7,0.95)" }}>
                  <a href={mapsDirectionUrl} target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] btn-shimmer"
                    style={{ background: "linear-gradient(135deg,#E8690A,#D4AF37)", fontFamily: "var(--font-heading)" }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    {t.contact.getDirections}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
