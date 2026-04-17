"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { liveConfig } from "@/data/live";
import { templeInfo } from "@/data/templeInfo";
import Link from "next/link";

export default function LivePageClient() {
  const { locale } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isLive = liveConfig.isLive;
  const streamUrl = isLive && liveConfig.currentStreamId
    ? `https://www.youtube.com/embed/${liveConfig.currentStreamId}?autoplay=1&rel=0`
    : liveConfig.youtubeChannelId !== "UC_XXXXXXXXXX"
    ? `https://www.youtube.com/embed/live_stream?channel=${liveConfig.youtubeChannelId}&rel=0`
    : null;


  return (
    <main className="min-h-screen bg-temple-dark">
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-saffron-500 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-red-600 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          {/* Live / Offline indicator */}
          <div className="flex justify-center mb-6">
            {isLive ? (
              <span className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 rounded-full px-5 py-2 text-sm font-heading font-semibold">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                LIVE NOW
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-ivory-400 rounded-full px-5 py-2 text-sm font-heading">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                {locale === "te" ? "ప్రత్యక్ష ప్రసారం లేదు" : "Stream Offline"}
              </span>
            )}
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 via-gold-400 to-saffron-500">
              {locale === "te" ? "లైవ్ దర్శనం" : "Live Darshan"}
            </span>
          </h1>

          <p className="text-ivory-300 text-lg max-w-2xl mx-auto">
            {locale === "te"
              ? "శ్రీ కనుగొండ రాయస్వామి దేవాలయంలో ప్రత్యక్ష దర్శనాన్ని యూట్యూబ్ ద్వారా వీక్షించండి"
              : "Watch live darshan of Sri Kanukondaraya Swamy Devasthanam via YouTube streaming"}
          </p>

          {/* Time display */}
          <div className="mt-4 text-ivory-400 font-heading text-sm">
            {currentTime.toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })}{" "}
            IST
          </div>
        </div>
      </section>

      {/* Video Player Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {isLive && streamUrl ? (
          /* Live Stream Player */
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-900/30 border border-red-500/20">
            {/* Live badge overlay */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold font-heading shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                LIVE
              </span>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={streamUrl}
                title="Live Darshan — Sri Kanukondaraya Swamy Devasthanam"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          /* Offline State */
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="aspect-video flex flex-col items-center justify-center text-center p-8">
              {/* Animated temple icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-saffron-500/20 to-gold-500/10 border border-saffron-500/30 flex items-center justify-center">
                  <span className="text-5xl">🕉</span>
                </div>
                <div className="absolute -inset-2 rounded-full border border-saffron-500/10 animate-ping" />
              </div>

              <h2 className="text-white font-heading font-bold text-2xl md:text-3xl mb-3">
                {locale === "te"
                  ? "ప్రత్యక్ష దర్శనం ప్రస్తుతం అందుబాటులో లేదు"
                  : "Live Darshan is not currently available"}
              </h2>

              <p className="text-ivory-300 max-w-md mb-6">
                {locale === "te"
                  ? "ప్రత్యక్ష ప్రసారాలకు దయచేసి షెడ్యూల్ చూడండి. మేము ముఖ్యమైన పూజలు మరియు పండుగ కార్యక్రమాలను ప్రత్యక్షంగా ప్రసారం చేస్తాము."
                  : "Please check the schedule below for upcoming live streams. We broadcast important pujas and festival events live."}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${templeInfo.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-heading font-semibold transition-all duration-300 hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #E8690A, #D4AF37)" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {locale === "te" ? "దర్శన సమయం అడగండి" : "Ask About Darshan"}
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Live Schedule Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
            {locale === "te" ? "లైవ్ షెడ్యూల్" : "Live Stream Schedule"}
          </h2>
          <p className="text-ivory-400">
            {locale === "te"
              ? "క్రింది సమయాల్లో ప్రత్యక్ష ప్రసారం అందుబాటులో ఉంటుంది"
              : "Live streams are available at the following times"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveConfig.schedule.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-saffron-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500/30 to-gold-500/20 flex items-center justify-center text-lg">
                  📿
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-sm group-hover:text-saffron-400 transition-colors">
                    {locale === "te" ? item.title.te : item.title.en}
                  </h3>
                  <span className="text-xs text-saffron-400/70">{item.day}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-ivory-300 text-sm">
                <svg className="w-4 h-4 text-saffron-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item.time}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center bg-gradient-to-r from-saffron-900/30 to-gold-900/20 border border-saffron-500/20 rounded-2xl p-8">
          <div className="text-4xl mb-4">🕉</div>
          <h3 className="font-heading font-bold text-white text-xl mb-2">
            {locale === "te" ? "మరిన్ని వివరాలకు సంప్రదించండి" : "Contact Us for More Details"}
          </h3>
          <p className="text-ivory-300 mb-6 max-w-md mx-auto">
            {locale === "te"
              ? "ప్రత్యక్ష దర్శన సమయాలు మరియు ప్రత్యేక కార్యక్రమాల గురించి ఇమెయిల్ ద్వారా సంప్రదించండి."
              : "Contact us via email for live darshan schedules and special event information."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:${templeInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-heading font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E8690A, #D4AF37)" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {templeInfo.email}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-saffron-500/30 text-saffron-400 hover:bg-saffron-500/10 font-heading font-semibold transition-all duration-300"
            >
              {locale === "te" ? "సంప్రదించండి" : "Contact Temple"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
