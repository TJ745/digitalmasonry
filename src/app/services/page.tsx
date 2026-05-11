import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/final-cta";
import { ServiceCards } from "./service-cards";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack software development services — websites, web apps, mobile apps, SaaS products, UI/UX design, AI integrations, and more.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold tracking-widest text-indigo-300 uppercase">
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
            What We Do
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Every service you need to
            <br />
            <span className="gradient-text">build something great.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            From a single landing page to a fully-scaled SaaS platform — we cover the
            complete product lifecycle with senior-level engineering and design.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <ServiceCards />

      <FinalCTA />
    </div>
  );
}
