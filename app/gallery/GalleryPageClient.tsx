"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useLanguage, useBilingualText } from "@/lib/LanguageContext";
import { PremiumSectionHeading } from "@/components/ui/Primitives";
import { galleryItems, GalleryItem } from "@/data/gallery";

type FilterCategory = "all" | "temple" | "deity" | "festival" | "events" | "video";

export default function GalleryPageClient() {
  const { t, locale } = useLanguage();
  const getText = useBilingualText();
  const isTe = locale === "te";
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : activeFilter === "video"
      ? galleryItems.filter((item) => item.type === "video")
      : galleryItems.filter(
          (item) => item.category === activeFilter && item.type === "image"
        );

  const imageItems = filteredItems.filter((item) => item.type === "image");

  const openLightbox = useCallback(
    (item: GalleryItem, index: number) => {
      setLightboxItem(item);
      setLightboxIndex(index);
    },
    []
  );

  const closeLightbox = useCallback(() => {
    setLightboxItem(null);
  }, []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      const items = filteredItems.filter((i) => i.type === "image");
      const newIndex =
        direction === "next"
          ? (lightboxIndex + 1) % items.length
          : (lightboxIndex - 1 + items.length) % items.length;
      setLightboxIndex(newIndex);
      setLightboxItem(items[newIndex]);
    },
    [filteredItems, lightboxIndex]
  );

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: t.gallery.all },
    { key: "temple", label: t.gallery.temple },
    { key: "deity", label: t.gallery.deity },
    { key: "festival", label: t.gallery.festival },
    { key: "events", label: t.gallery.events },
    { key: "video", label: t.gallery.videos },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden" style={{ background: "linear-gradient(to bottom, #1E0A08, #1A0808)" }}>
        <div className="absolute inset-0 mandala-bg" style={{ opacity: 0.2 }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-xs uppercase tracking-[0.35em] mb-3 animate-fade-in" style={{ color: "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}>
            {isTe ? "పవిత్ర దృశ్యాలు" : "Sacred Visuals"}
          </p>
          <h1 className="animate-fade-in-up mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.5rem)", color: "white" }}>
            {isTe ? <>ఆలయ <span className="text-metallic-gold">గ్యాలరీ</span></> : <>Temple <span className="text-metallic-gold">Gallery</span></>}
          </h1>
          <div className="divider-premium w-40 mx-auto mb-5" />
          <p className="animate-fade-in-up animation-delay-100 text-sm max-w-xl mx-auto" style={{ fontFamily: "var(--font-serif)", color: "rgba(251,247,240,0.55)" }}>
            {t.gallery.subtitle}
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section style={{ background: "#1A0808", padding: "4rem 0 5rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: activeFilter === filter.key ? "linear-gradient(135deg,#E8690A,#D4AF37)" : "rgba(255,255,255,0.04)",
                  color: activeFilter === filter.key ? "white" : "rgba(251,247,240,0.55)",
                  border: activeFilter === filter.key ? "none" : "1px solid rgba(255,255,255,0.10)",
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Image Grid - Masonry */}
          {activeFilter !== "video" && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {(activeFilter === "all"
                ? galleryItems.filter((i) => i.type === "image")
                : imageItems
              ).map((item, index) => (
                <div
                  key={index}
                  className="break-inside-avoid group cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(212,175,55,0.10)" }}
                  onClick={() => openLightbox(item, index)}
                >
                  <div
                    className="w-full relative flex items-center justify-center"
                    style={{
                      background: "#110a05",
                      aspectRatio: item.caption.en.length % 2 === 0 ? "3/4" : "4/3",
                    }}
                  >
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail}
                        alt={getText(item.caption)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <span className="text-4xl block mb-2 opacity-30">📸</span>
                        <p className="text-xs" style={{ color: "rgba(212,175,55,0.50)", fontFamily: "var(--font-heading)" }}>
                          {getText(item.caption)}
                        </p>
                      </div>
                    )}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(14,10,7,0.90) 0%, transparent 60%)" }}>
                    <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                      {getText(item.caption)}
                    </p>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(212,175,55,0.20)", border: "1px solid rgba(212,175,55,0.30)" }}>
                      <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos Section */}
          {(activeFilter === "all" || activeFilter === "video") && (
            <div className={activeFilter === "all" ? "mt-12" : ""}>
              {activeFilter === "all" && (
                <div className="text-center mb-8">
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "white" }}>
                    {isTe ? <>ఆలయ <span className="text-metallic-gold">వీడియోలు</span></> : <>Temple <span className="text-metallic-gold">Videos</span></>}
                  </h2>
                  <div className="divider-premium w-32 mx-auto mt-3" />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryItems
                  .filter((item) => item.type === "video")
                  .map((item, index) => (
                    <div key={index} className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(212,175,55,0.15)", background: "#110a05" }}>
                      <div className="aspect-video" style={{ background: "#1A0808" }}>
                        {item.videoUrl && (
                          <iframe src={item.videoUrl} title={getText(item.caption)}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen loading="lazy" />
                        )}
                      </div>
                      <div className="p-4">
                        <p className="text-sm" style={{ color: "rgba(251,247,240,0.65)", fontFamily: "var(--font-heading)" }}>{getText(item.caption)}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Premium Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25
              flex items-center justify-center text-white transition-all hover:rotate-90 cursor-pointer
              border border-white/20 backdrop-blur-md"
            aria-label={t.gallery.close}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full
              bg-white/10 hover:bg-white/30 flex items-center justify-center text-white
              transition-all hover:-translate-x-1 cursor-pointer border border-white/20 backdrop-blur-md"
            aria-label={t.gallery.prev}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full
              bg-white/10 hover:bg-white/30 flex items-center justify-center text-white
              transition-all hover:translate-x-1 cursor-pointer border border-white/20 backdrop-blur-md"
            aria-label={t.gallery.next}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image content */}
          <div
            className="w-full max-w-6xl max-h-[85vh] mx-auto px-16 sm:px-24 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full relative rounded-xl shadow-[0_0_80px_rgba(255,136,17,0.15)] ring-1 ring-white/20">
              <div className="relative aspect-[16/9] md:aspect-[3/2] w-full bg-gradient-to-br from-temple-dark to-black
                flex items-center justify-center overflow-hidden rounded-xl">
                {lightboxItem.url ? (
                  <Image
                    src={lightboxItem.url}
                    alt={getText(lightboxItem.caption)}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                ) : (
                  <div className="text-center animate-pulse">
                    <span className="text-6xl block mb-4 opacity-50">📸</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-6 px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm self-center">
              <p className="text-center text-ivory-100 font-serif text-lg md:text-xl tracking-wide">
                {getText(lightboxItem.caption)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
