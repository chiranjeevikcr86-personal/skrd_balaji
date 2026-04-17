import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Temple Gallery | Photos & Videos of Sri Kanukondaraya Swamy Devasthanam",
  description:
    "Explore the sacred beauty of Sri Kanukondaraya Swamy Devasthanam through our photo and video gallery. View the temple architecture, sacred Devara Eddu, festival celebrations, and Pallaru Chekka — Pedakanti Palli, Chittoor, Andhra Pradesh.",
  keywords: [
    "Kanukondaraya Swamy temple photos",
    "Devara Eddu images",
    "Pedakanti Palli temple gallery",
    "Chittoor Hindu temple pictures",
    "Pallaru Chekka",
    "temple festival photos Andhra Pradesh",
  ],
  openGraph: {
    title: "Gallery | Sri Kanukondaraya Swamy Devasthanam",
    description:
      "Sacred photos and videos from Sri Kanukondaraya Swamy Devasthanam — the Walking God temple in Pedakanti Palli, Chittoor.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Sri Kanukondaraya Swamy Devasthanam Gallery" }],
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
