import type { Metadata } from "next";
import { AboutContent } from "./about-content";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind DigitalMasonry — engineers who think like founders, building digital products that scale.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutContent />
      <FinalCTA />
    </div>
  );
}
