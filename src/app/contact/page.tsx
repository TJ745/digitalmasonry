import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { Mail, MapPin, Clock, Calendar } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with DigitalMasonry. Book a free discovery call or send us a message about your digital product needs.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: "text-indigo-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: null,
    color: "text-violet-400",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon - Fri, 9am - 6pm PST",
    href: null,
    color: "text-emerald-400",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 right-1/4 w-125 h-100 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold tracking-widest text-indigo-300 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {siteConfig.availability}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Let&apos;s build something
            <br />
            <span className="gradient-text">extraordinary.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project. We respond to every inquiry within 24
            hours and offer free discovery calls to explore if we&apos;re a
            great fit.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Contact info */}
            <div className="space-y-6">
              {/* Book a call CTA */}
              <div className="glass rounded-2xl p-6 space-y-4 border border-indigo-500/20">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center">
                  <Calendar size={18} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Book a Discovery Call
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    30-minute free call to discuss your project, timeline, and
                    budget. No commitment required.
                  </p>
                </div>
                <Button variant="gradient" className="w-full" asChild>
                  <Link
                    href={siteConfig.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Call
                    <Calendar size={15} />
                  </Link>
                </Button>
              </div>

              {/* Contact details */}
              <div className="glass rounded-2xl p-6 space-y-5">
                <h3 className="text-base font-bold text-white">
                  Contact Details
                </h3>
                {contactDetails.map(
                  ({ icon: Icon, label, value, href, color }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={14} className={color} />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500 mb-0.5">
                          {label}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-zinc-300 hover:text-white transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm text-zinc-300">{value}</span>
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>

              {/* Process note */}
              <div className="glass rounded-2xl p-6 space-y-3">
                <h3 className="text-sm font-bold text-white">
                  What happens next?
                </h3>
                <ol className="space-y-3">
                  {[
                    "We review your message within 24h",
                    "We schedule a free discovery call",
                    "We send a detailed proposal",
                    "Project kickoff within 1 week",
                  ].map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-zinc-400"
                    >
                      <span className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-400 font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
