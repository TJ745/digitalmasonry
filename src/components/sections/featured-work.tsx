"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/site";

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-32" aria-label="Featured work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Work"
            title="Products we've"
            titleHighlight="shipped."
            description="Real results for real companies. From funded startups to scaling enterprises."
            align="left"
          />
          <Button variant="outline" size="lg" asChild className="shrink-0">
            <Link href="/work">
              All Projects <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.filter((p) => p.featured).slice(0, 3).map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
