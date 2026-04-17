import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact & Directions | Visit Sri Kanukondaraya Swamy Devasthanam",
  description:
    "Contact Sri Kanukondaraya Swamy Devasthanam in Pedakanti Palli, Gangadhara Nellore Mandal, Chittoor District, Andhra Pradesh. Get phone number, WhatsApp, address, and Google Maps directions to the temple.",
  keywords: [
    "Kanukondaraya Swamy temple contact",
    "Pedakanti Palli temple address",
    "temple phone number Chittoor",
    "how to reach Kanukondaraya temple",
    "temple directions Google Maps",
    "Gangadhara Nellore Mandal temple",
  ],
  openGraph: {
    title: "Contact & Directions | Sri Kanukondaraya Swamy Devasthanam",
    description:
      "Find us at Pedakanti Palli Village, Gangadhara Nellore Mandal, Chittoor District, Andhra Pradesh — 517125. Call or WhatsApp us to plan your visit.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Sri Kanukondaraya Swamy Devasthanam — Contact & Location" }],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
