import type { Metadata } from "next";
import LivePageClient from "./LivePageClient";

export const metadata: Metadata = {
  title: "Live Darshan | Sri Kanukondaraya Swamy Devasthanam",
  description:
    "Watch live darshan of Sri Kanukondaraya Swamy Devasthanam on YouTube. Join thousands of devotees in live streaming of morning darshan, abhishekam, aarti and special festival events.",
};

export default function LivePage() {
  return <LivePageClient />;
}
