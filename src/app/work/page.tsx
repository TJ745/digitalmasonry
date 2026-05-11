import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/final-cta";
import { WorkGrid } from "./work-grid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and portfolio — real projects, real results. See how DigitalMasonry delivers exceptional digital products.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold tracking-widest text-violet-300 uppercase">
            <span className="w-1 h-1 rounded-full bg-violet-400" />
            Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Products built with
            <br />
            <span className="gradient-text">precision and craft.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We measure success by the outcomes we create — not just the code we ship.
            Here&apos;s a selection of the work we&apos;re most proud of.
          </p>
        </div>
      </section>

      <WorkGrid />
      <FinalCTA />
    </div>
  );
}
