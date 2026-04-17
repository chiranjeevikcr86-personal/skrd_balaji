import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About the Temple — History, Heritage & the Sacred Ox | Sri Kanukondaraya Swamy Devasthanam",
  description:
    "Discover the 1,000-year heritage of Sri Kanukondaraya Swamy Devasthanam — the only temple in India where Lord Maha Vishnu manifests as a Living Sacred Ox (Devara Eddu). Learn the divine story of the Three Steps, the Chinna Kamasani lineage, and the ₹7 Crore reconstruction.",
  openGraph: {
    title: "About | Sri Kanukondaraya Swamy Devasthanam — The Walking God",
    description:
      "The miraculous origin, sacred history, and living divinity of Sri Kanukondaraya Swamy Devasthanam — where Lord Vishnu walks as the Sacred Ox.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
