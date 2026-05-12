"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-zinc-950/85 backdrop-blur-2xl shadow-2xl shadow-black/30"
            : "bg-transparent",
        )}
      >
        {/* Shimmer border-bottom — only visible when scrolled */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="absolute bottom-0 inset-x-0 h-px divider-shimmer origin-left"
            />
          )}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label={siteConfig.name}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/45 group-hover:scale-105 transition-all duration-300">
                <Image src="/logo.png" alt="alt" width={60} height={60} />
              </div>
              <span className="font-bold text-white text-[15px] tracking-tight">
                Digital<span className="text-indigo-400">Masonry</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                      active ? "text-white" : "text-zinc-400 hover:text-white",
                    )}
                  >
                    {/* Hover / active background */}
                    {active ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-white/8"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 35,
                        }}
                      />
                    ) : (
                      <span className="absolute inset-0 rounded-lg hover:bg-white/5 transition-colors duration-200" />
                    )}

                    {/* Active dot indicator */}
                    {active && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 35,
                        }}
                      />
                    )}

                    <span className="relative">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-zinc-400 hover:text-white"
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button
                size="sm"
                variant="gradient"
                asChild
                className="shadow-sm shadow-indigo-500/20"
              >
                <Link
                  href={siteConfig.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </Link>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu ──────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
              className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-zinc-950/95 backdrop-blur-xl border-l border-white/8 flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-white/8">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <Layers size={15} className="text-white" />
                  </div>
                  <span className="font-bold text-white">
                    Digital<span className="text-indigo-400">Masonry</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer nav */}
              <nav className="flex flex-col p-4 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                        pathname === link.href
                          ? "text-white bg-white/8 border border-white/8"
                          : "text-zinc-400 hover:text-white hover:bg-white/5",
                      )}
                    >
                      {pathname === link.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTAs */}
              <div className="p-5 border-t border-white/8 flex flex-col gap-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Start a Project</Link>
                </Button>
                <Button variant="gradient" className="w-full" asChild>
                  <Link
                    href={siteConfig.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Call
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Layout spacer */}
      <div className="h-16" />
    </>
  );
}
