import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowUpRight } from "lucide-react";
import { projects } from "@/constants/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const { name, industry, description, technologies, results, color, caseStudy } = project;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-linear-to-br ${color} blur-3xl opacity-40 pointer-events-none`} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Work
          </Link>

          <div className="space-y-4">
            <Badge variant="outline" className="text-xs">
              {industry}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              {name}
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          {/* Key results strip */}
          <div className="flex flex-wrap gap-3 pt-2">
            {results.map((result) => (
              <div
                key={result}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-400"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                {result}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32 space-y-16">

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
            Overview
          </h2>
          <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
            {caseStudy.overview}
          </p>
        </section>

        <div className="w-full h-px bg-white/6" />

        {/* Solution */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
            Our Approach
          </h2>
          <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
            {caseStudy.solution}
          </p>
        </section>

        <div className="w-full h-px bg-white/6" />

        {/* Features + Tech — 2 col on desktop */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Key features */}
          <div className="space-y-5">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
              Key Features
            </h2>
            <ul className="space-y-3">
              {caseStudy.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-zinc-300 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="space-y-5">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white/6" />

        {/* Impact metrics */}
        <section className="space-y-6">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
            Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {caseStudy.impact.map((item) => (
              <div
                key={item.metric}
                className="glass rounded-2xl p-6 space-y-2 text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-white">
                  {item.metric}
                </div>
                <p className="text-sm text-zinc-500 leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-white/6" />

        {/* CTA */}
        <section className="glass rounded-2xl p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-lg font-bold text-white">
              Interested in a similar project?
            </h2>
            <p className="text-sm text-zinc-500">
              Let&apos;s talk about what we can build together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Start a Project
                <ArrowUpRight size={16} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href={siteConfig.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
