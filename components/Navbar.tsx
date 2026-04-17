"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { logEvent } from "@/lib/analytics";

export default function Navbar() {
  const [isOpen, setIsOpen]         = useState(false);   // mobile drawer
  const [storyOpen, setStoryOpen]   = useState(false);   // story dropdown
  const [scrolled, setScrolled]     = useState(false);
  const pathname                    = usePathname();
  const { t, locale, toggleLocale } = useLanguage();
  const storyRef                    = useRef<HTMLDivElement>(null);
  const isTe                        = locale === "te";

  /* scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close drawer + dropdown on route change */
  useEffect(() => { setIsOpen(false); setStoryOpen(false); }, [pathname]);

  /* close story dropdown when clicking outside */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (storyRef.current && !storyRef.current.contains(e.target as Node)) {
        setStoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* lock body when mobile drawer open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* ─── Active check ─── */
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  /* Is any story page active (used to highlight the "Story" dropdown button) */
  const isStoryActive = ["/devara-eddu", "/three-steps"].some(h => pathname === h);

  /* ─── Link style helper ─── */
  const linkStyle = (active: boolean) => ({
    fontFamily: "var(--font-heading)",
    color: active ? "#E8690A" : "rgba(255,255,255,0.72)",
    fontWeight: active ? 700 : 500,
    letterSpacing: "0.02em",
    fontSize: "0.875rem",
    position: "relative" as const,
  });

  return (
    <>
      {/* ═══════════════════════════ NAVBAR ═══════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? "shadow-[0_4px_32px_rgba(0,0,0,0.55)]" : ""
        }`}
        style={{
          background: scrolled ? "rgba(14,10,7,0.97)" : "rgba(14,10,7,0.82)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(212,175,55,0.14)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[68px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E8690A] to-[#D4AF37]" />
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-6 h-6 select-none">
                  {/* Left white arc — Shanku mark */}
                  <ellipse cx="14.5" cy="20" rx="3.8" ry="10.5" fill="rgba(255,255,255,0.97)" transform="rotate(-6 14.5 20)"/>
                  {/* Right white arc — Shanku mark */}
                  <ellipse cx="25.5" cy="20" rx="3.8" ry="10.5" fill="rgba(255,255,255,0.97)" transform="rotate(6 25.5 20)"/>
                  {/* Center crimson line — Padma mark */}
                  <ellipse cx="20" cy="21.5" rx="2.4" ry="7.5" fill="#CC1200"/>
                  {/* Tiny gold top dot */}
                  <circle cx="20" cy="9.5" r="1.8" fill="rgba(255,255,255,0.85)"/>
                </svg>
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                  Sri Kanukondaraya
                </p>
                <p className="text-[#D4AF37] text-[11px] tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  Swamy Devasthanam
                </p>
              </div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden lg:flex items-center gap-1">

              {/* Home */}
              <NavLink href="/" active={isActive("/")} style={linkStyle(isActive("/"))}>
                {t.nav.home}
              </NavLink>

              {/* Divider */}
              <Divider />

              {/* About */}
              <NavLink href="/about" active={isActive("/about")} style={linkStyle(isActive("/about"))}>
                {t.nav.about}
              </NavLink>

              {/* ─── Story Dropdown ─── */}
              <Divider />
              <div ref={storyRef} className="relative">
                <button
                  onClick={() => setStoryOpen(v => !v)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/5 group"
                  style={{
                    ...linkStyle(isStoryActive),
                    color: isStoryActive ? "#D4AF37" : "rgba(255,255,255,0.72)",
                    fontWeight: isStoryActive ? 700 : 500,
                  }}
                >
                  {/* Small sparkle icon */}
                  <span className="text-[#D4AF37] text-xs">✦</span>
                  <span>{isTe ? "పవిత్ర కథ" : "Sacred Story"}</span>
                  <svg
                    className={`w-3.5 h-3.5 text-[#D4AF37]/70 transition-transform duration-200 ${storyOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown panel — horizontal */}
                {storyOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-2xl overflow-hidden"
                    style={{
                      width: "480px",
                      background: "rgba(14,10,7,0.98)",
                      border: "1px solid rgba(212,175,55,0.25)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(212,175,55,0.06)",
                    }}
                  >
                    {/* Panel header */}
                    <div className="px-5 py-2.5" style={{ borderBottom: "1px solid rgba(212,175,55,0.12)" }}>
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.22em]"
                        style={{ color: "rgba(212,175,55,0.55)", fontFamily: "var(--font-heading)" }}
                      >
                        {isTe ? "దివ్య కథనాలు" : "Divine Narratives"}
                      </p>
                    </div>

                    {/* Two cards side by side */}
                    <div className="grid grid-cols-2 divide-x" style={{ borderColor: "rgba(255,255,255,0.06)" }}>

                      {/* Walking God */}
                      <Link
                        href="/devara-eddu"
                        onClick={() => setStoryOpen(false)}
                        className="flex flex-col gap-3 p-5 transition-all duration-200 hover:bg-[#D4AF37]/06 group/wg"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                            style={{ border: "1px solid rgba(212,175,55,0.35)", boxShadow: "0 0 10px rgba(212,175,55,0.12)" }}>
                            <Image
                              src="/images/devara-eddu/devara-eddu-portrait.jpg"
                              alt="Devara Eddu"
                              width={40} height={40}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span
                            className="text-sm font-bold"
                            style={{
                              fontFamily: "var(--font-heading)",
                              color: pathname === "/devara-eddu" ? "#D4AF37" : "rgba(255,255,255,0.92)",
                            }}
                          >
                            {isTe ? "నడిచే దేవుడు" : "The Walking God"}
                          </span>
                          {pathname === "/devara-eddu" && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          )}
                        </div>
                        <p
                          className="text-xs leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.40)", fontFamily: "var(--font-serif)" }}
                        >
                          {isTe
                            ? "దేవర ఎద్దు — విష్ణువు యొక్క సజీవ అభివ్యక్తి"
                            : "Devara Eddu — The Sacred Ox as the living presence of Lord Vishnu"}
                        </p>
                        <span
                          className="text-xs font-semibold flex items-center gap-1 transition-all duration-200 group-hover/wg:gap-2"
                          style={{ color: pathname === "/devara-eddu" ? "#D4AF37" : "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}
                        >
                          {isTe ? "చదవండి" : "Read story"} →
                        </span>
                      </Link>

                      {/* Three Steps */}
                      <Link
                        href="/three-steps"
                        onClick={() => setStoryOpen(false)}
                        className="flex flex-col gap-3 p-5 transition-all duration-200 hover:bg-[#D4AF37]/06 group/ts"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                            style={{ border: "1px solid rgba(232,105,10,0.35)", boxShadow: "0 0 10px rgba(232,105,10,0.10)" }}>
                            <Image
                              src="/images/three-steps/step3-pedakanti-palli.jpg"
                              alt="Three Sacred Steps"
                              width={40} height={40}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span
                            className="text-sm font-bold"
                            style={{
                              fontFamily: "var(--font-heading)",
                              color: pathname === "/three-steps" ? "#D4AF37" : "rgba(255,255,255,0.92)",
                            }}
                          >
                            {isTe ? "మూడు అడుగులు" : "The Three Steps"}
                          </span>
                          {pathname === "/three-steps" && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          )}
                        </div>
                        <p
                          className="text-xs leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.40)", fontFamily: "var(--font-serif)" }}
                        >
                          {isTe
                            ? "చిత్తూరు అంతటా మూడు పవిత్ర అడుగులు — 19వ శతాబ్దం కరువును ముగించిన దివ్య పయనం"
                            : "Three miraculous steps across Chittoor that ended the Great Drought of the 19th century"}
                        </p>
                        <span
                          className="text-xs font-semibold flex items-center gap-1 transition-all duration-200 group-hover/ts:gap-2"
                          style={{ color: pathname === "/three-steps" ? "#D4AF37" : "rgba(212,175,55,0.60)", fontFamily: "var(--font-heading)" }}
                        >
                          {isTe ? "చదవండి" : "Read story"} →
                        </span>
                      </Link>

                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              <Divider />

              {/* Timings */}
              <NavLink href="/timings" active={isActive("/timings")} style={linkStyle(isActive("/timings"))}>
                {t.nav.timings}
              </NavLink>

              {/* Sevas */}
              <NavLink
                href="/sevas"
                active={isActive("/sevas")}
                style={linkStyle(isActive("/sevas"))}
              >
                {(t.nav as Record<string,string>).sevas ?? "Sevas"}
              </NavLink>

              {/* Gallery */}
              <NavLink href="/gallery" active={isActive("/gallery")} style={linkStyle(isActive("/gallery"))}>
                {t.nav.gallery}
              </NavLink>

              {/* Contact — styled as a button */}
              <Link
                href="/contact"
                className="ml-1 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: isActive("/contact") ? "linear-gradient(135deg,#E8690A,#D4AF37)" : "rgba(232,105,10,0.12)",
                  border: "1px solid rgba(232,105,10,0.40)",
                  color: isActive("/contact") ? "#fff" : "#E8690A",
                  letterSpacing: "0.02em",
                }}
              >
                {t.nav.contact}
              </Link>
            </div>

            {/* ── Right — Language + Hamburger ── */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => { toggleLocale(); logEvent("language_toggle", { new_language: locale === "en" ? "te" : "en" }); }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "rgba(212,175,55,0.10)",
                  border: "1px solid rgba(212,175,55,0.30)",
                  color: "#D4AF37",
                }}
                aria-label="Toggle language"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={1.8} />
                  <path strokeLinecap="round" strokeWidth={1.8} d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
                <span className={locale === "en" ? "font-telugu" : ""}>
                  {locale === "en" ? "తెలుగు" : "English"}
                </span>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsOpen(v => !v)}
                className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <span className={`w-5 h-0.5 bg-[#E8690A] rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`w-5 h-0.5 bg-[#E8690A] rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`w-5 h-0.5 bg-[#E8690A] rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════ MOBILE OVERLAY ═══════════════════════ */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* ═══════════════════════ MOBILE DRAWER ════════════════════════ */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "#1A0808", borderLeft: "1px solid rgba(212,175,55,0.15)" }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E8690A] to-[#D4AF37] flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <ellipse cx="14.5" cy="20" rx="3.8" ry="10.5" fill="rgba(255,255,255,0.97)" transform="rotate(-6 14.5 20)"/>
                <ellipse cx="25.5" cy="20" rx="3.8" ry="10.5" fill="rgba(255,255,255,0.97)" transform="rotate(6 25.5 20)"/>
                <ellipse cx="20" cy="21.5" rx="2.4" ry="7.5" fill="#CC1200"/>
                <circle cx="20" cy="9.5" r="1.8" fill="rgba(255,255,255,0.85)"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-xs font-bold" style={{ fontFamily: "var(--font-display)" }}>Sri Kanukondaraya</p>
              <p className="text-[#D4AF37] text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>Devasthanam</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-24 px-3 pt-3">

          {/* General */}
          <MobileGroup label={isTe ? "అన్వేషించండి" : "General"}>
            <MobileLink href="/"       label={t.nav.home}  active={isActive("/")} />
            <MobileLink href="/about"  label={t.nav.about} active={isActive("/about")} />
          </MobileGroup>

          {/* Sacred Story */}
          <MobileGroup label={isTe ? "పవిత్ర కథ" : "Sacred Story"} gold>
            <MobileLink href="/devara-eddu" label={isTe ? "నడిచే దేవుడు" : "The Walking God"} active={isActive("/devara-eddu")} icon="🐂" gold />
            <MobileLink href="/three-steps" label={isTe ? "మూడు అడుగులు" : "The Three Steps"} active={isActive("/three-steps")} icon="👣" gold />
          </MobileGroup>

          {/* Plan Visit */}
          <MobileGroup label={isTe ? "సందర్శనం" : "Plan Your Visit"}>
            <MobileLink href="/timings" label={t.nav.timings}                                                       active={isActive("/timings")} />
            <MobileLink href="/sevas"   label={(t.nav as Record<string,string>).sevas ?? "Sevas"}                   active={isActive("/sevas")} />
            <MobileLink href="/gallery" label={t.nav.gallery}                                                       active={isActive("/gallery")} />
            <MobileLink href="/contact" label={t.nav.contact}                                                       active={isActive("/contact")} />
          </MobileGroup>

          <div className="mx-3 my-4 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <p className="text-center font-telugu text-[#D4AF37]/50 text-sm">శ్రీ కనుకొండరాయ స్వామి దేవస్థానం</p>
        </div>
      </div>
    </>
  );
}

/* ─────────────── Small reusable sub-components ─────────────── */

function NavLink({ href, active, style, children }: {
  href: string; active: boolean; style: React.CSSProperties; children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/5"
      style={style}
    >
      {children}
      {/* Active underline */}
      {active && (
        <span
          className="absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full"
          style={{ background: "linear-gradient(90deg,#E8690A,#D4AF37)" }}
        />
      )}
    </Link>
  );
}

function Divider() {
  return <span className="w-px h-4 mx-0.5 shrink-0" style={{ background: "rgba(212,175,55,0.18)" }} />;
}

function MobileGroup({ label, children, gold }: { label: string; children: React.ReactNode; gold?: boolean }) {
  return (
    <div className="mb-2">
      <p
        className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em]"
        style={{ color: gold ? "rgba(212,175,55,0.55)" : "rgba(255,255,255,0.30)", fontFamily: "var(--font-heading)" }}
      >
        {label}
      </p>
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: gold ? "rgba(212,175,55,0.04)" : "rgba(255,255,255,0.02)",
          border: gold ? "1px solid rgba(212,175,55,0.14)" : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function MobileLink({ href, label, active, icon, gold }: {
  href: string; label: string; active: boolean; icon?: string; gold?: boolean
}) {
  const activeColor = gold ? "#D4AF37" : "#E8690A";
  const activeBg    = gold ? "rgba(212,175,55,0.12)" : "rgba(232,105,10,0.12)";
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200"
      style={{
        fontFamily: "var(--font-heading)",
        color: active ? activeColor : "rgba(255,255,255,0.72)",
        background: active ? activeBg : "transparent",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        fontWeight: active ? 600 : 400,
      }}
    >
      {icon && <span className="text-base shrink-0">{icon}</span>}
      {label}
      {active && <span className="ml-auto w-1.5 h-1.5 rounded-full shrink-0" style={{ background: activeColor }} />}
    </Link>
  );
}
