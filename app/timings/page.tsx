import type { Metadata } from "next";
import TimingsPageClient from "./TimingsPageClient";

export const metadata: Metadata = {
  title: "Darshan & Timings | Daily Puja Schedule & Festival Calendar",
  description:
    "View the complete darshan timings, morning & evening puja schedule, special day schedule, and upcoming festival calendar for Sri Kanukondaraya Swamy Devasthanam, Pedakanti Palli, Chittoor, Andhra Pradesh. Live temple open/closed status.",
  keywords: [
    "Kanukondaraya Swamy timings",
    "darshan timings Chittoor temple",
    "temple puja schedule",
    "Pedakanti Palli temple timings",
    "morning darshan",
    "evening darshan",
    "temple opening hours Andhra Pradesh",
    "festival schedule 2026",
  ],
  openGraph: {
    title: "Darshan & Timings | Sri Kanukondaraya Swamy Devasthanam",
    description:
      "Daily darshan schedule, special puja timings, and festival calendar. Morning: 5:30 AM – 12:00 PM | Evening: 4:00 PM – 8:30 PM. Open all 7 days.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Sri Kanukondaraya Swamy Devasthanam — Darshan Timings" }],
  },
};

export default function TimingsPage() {
  return <TimingsPageClient />;
}
