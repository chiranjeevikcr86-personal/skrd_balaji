import type { Metadata } from "next";
import DevaraEdduClient from "./DevaraEdduClient";

export const metadata: Metadata = {
  title: "The Walking God — Devara Eddu | Sri Kanukondaraya Swamy Devasthanam",
  description:
    "Discover the sacred Devara Eddu — the living manifestation of Lord Maha Vishnu at Sri Kanukondaraya Swamy Devasthanam. Learn about the Walking God, the divine ox that is not Nandi but Lord Vishnu himself in physical form.",
  keywords: [
    "Devara Eddu", "Walking God", "Sacred Ox", "Lord Vishnu manifestation",
    "Kanukondaraya Swamy", "Vibhavarupa", "Chinna Kamasani", "Velpu Utsavam",
  ],
  openGraph: {
    title: "The Walking God — Devara Eddu | Sri Kanukondaraya Swamy Devasthanam",
    description: "The Sacred Devara Eddu — a living, breathing manifestation of Lord Maha Vishnu. Born on a Saturday. A divine miracle that walks among His people.",
    images: [{ url: "/images/devara-eddu/devara-eddu-hero.jpg", width: 1920, height: 1080, alt: "The Sacred Devara Eddu" }],
  },
};

export default function DevaraEdduPage() {
  return <DevaraEdduClient />;
}
