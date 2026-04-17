import type { Metadata } from "next";
import ThreeStepsClient from "./ThreeStepsClient";

export const metadata: Metadata = {
  title: "The Three Sacred Steps — Divine Origin | Sri Kanukondaraya Swamy Devasthanam",
  description:
    "The miraculous three steps of the Devara Eddu across Chittoor — Kalavagunta, Kaligiri Konda, and Pedakanti Palli — that ended the Great Drought of the 19th Century. The divine origin story of Sri Kanukondaraya Swamy Devasthanam.",
  keywords: [
    "Three Steps", "Kalavagunta", "Kaligiri Konda", "Pedakanti Palli",
    "Great Drought", "Devara Eddu journey", "Kanukondaraya Swamy origin",
    "Chittoor temple history",
  ],
  openGraph: {
    title: "The Three Sacred Steps — Divine Origin | Sri Kanukondaraya Swamy Devasthanam",
    description: "Three miraculous footsteps of the Sacred Ox across Chittoor that ended the Great Drought of the 19th Century. A sacred journey preserved for 1,000+ years.",
    images: [{ url: "/images/three-steps/step3-pedakanti-palli.jpg", width: 1200, height: 700, alt: "Pedakanti Palli — The Chosen Land" }],
  },
};

export default function ThreeStepsPage() {
  return <ThreeStepsClient />;
}
