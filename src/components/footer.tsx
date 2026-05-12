import Link from "next/link";
import { Layers, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/constants/site";

const footerLinks = {
  Services: [
    { label: "Website Development", href: "/services#website-development" },
    { label: "Web Applications", href: "/services#web-applications" },
    { label: "Mobile Apps", href: "/services#mobile-apps" },
    { label: "SaaS Products", href: "/services#saas-products" },
    { label: "AI Integrations", href: "/services#ai-integrations" },
    { label: "UI/UX Design", href: "/services#ui-ux-design" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socials = [
  { label: "X / Twitter", href: siteConfig.socials.twitter, abbr: "X" },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, abbr: "in" },
  { label: "GitHub", href: siteConfig.socials.github, abbr: "gh" },
  { label: "Dribbble", href: siteConfig.socials.dribbble, abbr: "db" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
              <div className="w-9 h-9 rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Layers size={17} className="text-white" />
              </div>
              <span className="font-bold text-white text-xl tracking-tight">
                Digital<span className="text-indigo-400">Masonry</span>
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Full-stack software studio building world-class digital products for startups and businesses.
            </p>

            <div className="space-y-2.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-zinc-400 hover:text-white transition-colors group/email"
              >
                <Mail size={14} className="text-zinc-600 group-hover/email:text-indigo-400 transition-colors" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2.5 text-sm text-zinc-500">
                <MapPin size={14} className="text-zinc-600" />
                {siteConfig.location}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ label, href, abbr }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200 text-xs font-bold"
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-wide">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA box */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">
                  {siteConfig.availability}
                </span>
              </div>
              <p className="text-sm text-zinc-300 font-medium leading-snug">
                Ready to build something great?
              </p>
              <a
                href={siteConfig.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors group/cta"
              >
                Book a discovery call
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} DigitalMasonry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-zinc-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
