"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  GraduationCap,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative section-padding overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] bg-[#CBF1F5] opacity-50" />
        <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] bg-[#A6E3E9] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left — Text */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur border border-white/60 shadow-sm mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#71C9CE] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#71C9CE]" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wide">
              Now available for 2026 admissions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
          >
            Don&apos;t Risk Your Future with the{" "}
            <span className="text-[#71C9CE] relative inline-block">
              Wrong College Choice
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C50 2, 100 2, 150 6 S250 10, 298 4"
                  stroke="#71C9CE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Get personalized college recommendations, real placement insights,
            and expert guidance—all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6"
          >
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#71C9CE] to-[#48999d] text-white font-semibold shadow-lg shadow-[#71C9CE]/30 hover:shadow-xl hover:shadow-[#71C9CE]/40 transition-all active:scale-95 group"
            >
              Get Personalized Guidance
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#71C9CE] text-[#71C9CE] font-semibold hover:bg-[#71C9CE]/10 transition-all active:scale-95"
            >
              <Search className="w-4 h-4" />
              Explore Colleges
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-2 text-sm text-slate-500 justify-center lg:justify-start"
          >
            <Sparkles className="w-4 h-4 text-[#71C9CE]" />
            Helping students make confident college decisions
          </motion.p>
        </div>

        {/* Right — Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 w-full max-w-lg lg:max-w-xl"
        >
          <div className="relative">
            {/* Main illustration card */}
            <div className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#CBF1F5] blur-2xl opacity-60" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#A6E3E9] blur-2xl opacity-40" />

              {/* Student journey visual */}
              <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Confusion state */}
                <div className="flex items-center gap-4 w-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#E3FDFD] flex items-center justify-center shrink-0 border border-[#A6E3E9]/30">
                    <HelpCircle className="w-7 h-7 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-700">
                      Confused about colleges?
                    </p>
                    <p className="text-xs text-slate-500">
                      Too many options, no clear path
                    </p>
                  </div>
                </div>

                {/* Arrow down */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-6 bg-gradient-to-b from-slate-300 to-[#71C9CE]" />
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <GraduationCap className="w-6 h-6 text-[#71C9CE]" />
                  </motion.div>
                  <div className="w-px h-6 bg-gradient-to-b from-[#71C9CE] to-[#48999d]" />
                </div>

                {/* Clarity state */}
                <div className="flex items-center gap-4 w-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#71C9CE] to-[#48999d] flex items-center justify-center shrink-0 shadow-lg shadow-[#71C9CE]/30">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-700">
                      Get matched to the perfect college
                    </p>
                    <p className="text-xs text-slate-500">
                      Based on your rank, budget & goals
                    </p>
                  </div>
                </div>

                {/* Results preview */}
                <div className="w-full mt-2 space-y-2">
                  {["Top 3 matched colleges", "Verified placement data", "Expert recommendation"].map(
                    (text, i) => (
                      <motion.div
                        key={text}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.15 }}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/60 border border-white/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#71C9CE] shrink-0" />
                        <span className="text-sm text-slate-600">{text}</span>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-white shadow-lg text-xs font-semibold text-[#71C9CE] border border-[#A6E3E9]/30"
            >
              ✨ Free Guidance
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full bg-white shadow-lg text-xs font-semibold text-slate-600 border border-[#A6E3E9]/30"
            >
              2 min setup
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
