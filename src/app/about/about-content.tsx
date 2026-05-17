"use client";

import { motion } from "framer-motion";
import { Code2, Users, Target, Zap, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const values = [
  {
    icon: Code2,
    title: "Engineering Excellence",
    description:
      "We hold ourselves to the same engineering standards as top-tier tech companies. Clean architecture, comprehensive tests, and maintainable code aren't optional — they're our baseline.",
    color: "from-indigo-500/20 to-blue-500/20",
    textColor: "text-indigo-400",
  },
  {
    icon: Target,
    title: "Outcome Obsessed",
    description:
      "We don't measure success by lines of code shipped. We measure it by the business outcomes we create — more users, higher conversion, greater revenue.",
    color: "from-emerald-500/20 to-teal-500/20",
    textColor: "text-emerald-400",
  },
  {
    icon: Users,
    title: "Radical Transparency",
    description:
      "No surprise invoices. No excuses. You'll always know what we're working on, why, and when it'll be done. Weekly updates, shared project boards, and honest timelines.",
    color: "from-violet-500/20 to-purple-500/20",
    textColor: "text-violet-400",
  },
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description:
      "We move fast because we've refined our process across 10+ projects. Rapid delivery doesn't mean shortcuts — it means accumulated expertise applied efficiently.",
    color: "from-amber-500/20 to-orange-500/20",
    textColor: "text-amber-400",
  },
];

const timeline = [
  {
    year: "Apr, 2024",
    title: "Founded",
    description:
      "Started as a two-person consultancy focused on React applications for Series A startups.",
  },
  {
    year: "Mar, 2025",
    title: "First SaaS Launch",
    description:
      "Shipped our first SaaS platform from scratch, growing to 1,000 users in 60 days.",
  },
  {
    year: "May, 2025",
    title: "Mobile Practice",
    description:
      "Expanded into React Native mobile development, shipping 2 apps across iOS and Android.",
  },
  {
    year: "Jun, 2025",
    title: "Team of 5",
    description:
      "Grew to a 5-person remote team across 3 countries. 10+ projects delivered.",
  },
  {
    year: "Aug, 2025",
    title: "AI Integration Practice",
    description:
      "Launched our AI integration practice, building some of the earliest production LLM products.",
  },
  {
    year: "Oct, 2025",
    title: "Enterprise Clients",
    description:
      "Onboarded first Fortune 40+ clients, delivering enterprise-grade platforms at scale.",
  },
  {
    year: "Feb, 2026",
    title: "10+ Projects",
    description:
      "Hit the milestone of 10+ shipped projects with a 99% client satisfaction rate.",
  },
];

const team = [
  {
    name: "Ahmed Riaz",
    role: "Co-Founder & CEO",
    bio: "The driving force behind DigitalMasonry. Ahmed leads client relationships, product strategy, and business operations — making sure every project ships on time and exceeds expectations.",
    initials: "AR",
    color: "from-indigo-500 to-violet-600",
  },
  {
    name: "Talha Jamil",
    role: "Co-Founder & Full-Stack Developer",
    bio: "Talha architects and builds the backbone of every product we ship. From database design to API development and frontend integration, he owns the full stack with a focus on clean, maintainable code.",
    initials: "TJ",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Rohail Tariq",
    role: "Frontend Developer",
    bio: "Rohail turns designs into fast, pixel-perfect interfaces. He specialises in React and TypeScript and has a sharp eye for detail — if something looks off by a pixel, he'll catch it.",
    initials: "RT",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Sohail Jabbar",
    role: "UX/UI Designer",
    bio: "Sohail designs the experiences users actually enjoy. He handles everything from wireframes and user flows to polished Figma prototypes, always keeping usability and conversion at the centre.",
    initials: "SJ",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Haseeb",
    role: "Mobile App Developer",
    bio: "Haseeb builds the mobile side of our products. He works primarily in React Native and has shipped apps across iOS and Android — from booking systems to real-time multiplayer experiences.",
    initials: "H",
    color: "from-amber-500 to-orange-600",
  },
];

const whyUs = [
  "We've built and sold our own products — we think like founders",
  "Senior engineers on every project, no bait-and-switch",
  "Full IP ownership — you own every line of code",
  "12-month warranty on all delivered work",
  "Transparent pricing with no surprise invoices",
  "Remote-first with async-friendly communication",
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full bg-emerald-500/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold tracking-widest text-emerald-300 uppercase">
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
            Our Story
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            We build like engineers.
            <br />
            <span className="gradient-text">We think like founders.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            DigitalMasonry was born from frustration with agencies that
            over-promise, under-deliver, and treat software as a commodity. We
            built the studio we always wished existed.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <SectionHeading
                eyebrow="Mission"
                title="Software that moves"
                titleHighlight="businesses forward."
                align="left"
              />
              <p className="text-zinc-400 leading-relaxed">
                Most software projects fail not because of bad technology
                &mdash; they fail because of misaligned incentives, unclear
                communication, and teams that don&apos;t understand the business
                they&apos;re building for.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                We&apos;ve fixed that. Every engineer at DigitalMasonry has
                founded, grown, or operated a product business. We understand
                what&apos;s at stake because we&apos;ve been in your seat.
              </p>
              <div className="glass rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Code2 size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">
                    Our guarantee
                  </p>
                  <p className="text-sm text-zinc-500">
                    If we don&apos;t deliver to spec, we fix it at no charge.
                    Every engagement includes a 12-month warranty on all
                    delivered work.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass rounded-2xl p-8 space-y-4"
            >
              <h3 className="text-lg font-bold text-white mb-6">
                Why teams choose us
              </h3>
              {whyUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-zinc-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Values"
            title="Principles that guide"
            titleHighlight="everything we do."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass rounded-2xl p-7 flex gap-5 group hover:border-white/15 transition-all duration-300"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center bg-linear-to-br ${value.color} border border-white/10 shrink-0`}
                  >
                    <Icon size={20} className={value.textColor} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="History"
            title="Two years of"
            titleHighlight="shipping great software."
          />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex items-start gap-8 pb-10 last:pb-0"
              >
                {/* Connector: top-6 = this badge's center, -bottom-6 = next badge's center */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-linear-to-b from-indigo-500/40 to-violet-500/20" />
                )}

                {/* Year badge */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 rounded-xl border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center text-center">
                    <span className="text-xs font-bold text-indigo-400">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2.5 space-y-1">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Team"
            title="The people behind"
            titleHighlight="the code."
            description="Senior engineers, designers, and product thinkers — all with real startup experience."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-white/15 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${member.color} flex items-center justify-center text-white text-lg font-bold shadow-lg`}
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-indigo-400 mb-2">{member.role}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
