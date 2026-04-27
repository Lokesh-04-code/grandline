"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Podcasts", href: "#podcasts" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative pt-16 pb-8 border-t border-[#A6E3E9]/30">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5 group shrink-0">
              <Image
                src="/logo.png"
                alt="AEAEA Technologies"
                width={140}
                height={40}
                className="h-7 w-auto lg:h-8 object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_10px_rgba(113,201,206,0.15)]"
              />
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-lg sm:text-xl font-black tracking-tighter text-slate-900">
                  AEAEA&apos;s
                </span>
                <span className="text-lg sm:text-xl font-black tracking-tighter text-[#71C9CE]">
                  Grandline
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs mt-2">
              Helping engineering aspirants choose the right college with data-driven insights and expert guidance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-600 hover:text-[#71C9CE] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:grandline@aeaeatech.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#71C9CE] transition-colors">
                  <Mail className="w-4 h-4 text-[#71C9CE] shrink-0" />
                  grandline@aeaeatech.com
                </a>
              </li>
              <li>
                <a href="tel:+919440472314" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#71C9CE] transition-colors">
                  <Phone className="w-4 h-4 text-[#71C9CE] shrink-0" />
                  +91 94404 72314
                </a>
              </li>

            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a href="https://www.youtube.com/@aeaeatech" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-xl bg-[#E3FDFD] flex items-center justify-center hover:bg-[#CBF1F5] transition-colors group">
                <svg className="w-5 h-5 text-[#71C9CE] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/aeaea-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-[#E3FDFD] flex items-center justify-center hover:bg-[#CBF1F5] transition-colors group">
                <svg className="w-5 h-5 text-[#71C9CE] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate-600 hover:text-[#71C9CE] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-[#71C9CE] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#A6E3E9]/20 pt-6 text-center">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} AEAEA Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
