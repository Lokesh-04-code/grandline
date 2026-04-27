"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Explore Colleges", href: "#services" },
  { label: "Resources", href: "#learning-videos" },
  { label: "Podcasts", href: "#podcasts" },
  { label: "Contact", href: "#footer" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-md shadow-[#A6E3E9]/20"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-3 md:py-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <Image
              src="/logo.png"
              alt="AEAEA's Grandline"
              width={128}
              height={128}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-800">
              AEAEA&apos;s <span className="text-[#71C9CE]">Grandline</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 hover:text-[#71C9CE] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#71C9CE] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#final-cta"
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl active:scale-95 group"
          >
            Get Guidance
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#A6E3E9]/20 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-slate-800" />
            ) : (
              <Menu className="w-6 h-6 text-slate-800" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-72 h-full bg-white/95 backdrop-blur-xl shadow-2xl lg:hidden no-scrollbar overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 border-b border-[#A6E3E9]/30">
                <span className="font-bold text-slate-800">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-[#A6E3E9]/20"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>
              <div className="flex flex-col p-5 gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="py-3 px-4 rounded-xl text-slate-700 font-medium hover:bg-[#E3FDFD] hover:text-[#71C9CE] transition-all"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="#final-cta"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 transition-all"
                >
                  Get Guidance
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
