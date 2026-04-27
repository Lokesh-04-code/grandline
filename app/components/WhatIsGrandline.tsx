"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Globe } from "lucide-react";

const languages = ["Telugu", "Hindi", "English", "Tamil", "Kannada", "Malayalam"];

export default function WhatIsGrandline() {
  return (
    <section id="what-is-grandline" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            What is AEAEA&apos;s <span className="text-[#71C9CE]">Grandline</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A platform built to simplify your college decision. Watch our explainer video to understand how we help thousands of students find their perfect fit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-card shadow-xl shadow-[#A6E3E9]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E3FDFD] via-[#CBF1F5] to-[#A6E3E9]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center mb-6 shadow-lg border border-white/70 cursor-not-allowed"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#71C9CE] ml-1" />
              </motion.div>
              <p className="text-lg sm:text-xl font-bold text-slate-800 mb-2 text-center">🎥 Multilingual explainer videos coming soon</p>
              <p className="text-sm sm:text-base text-slate-600 mb-6 text-center">Available soon in Telugu, Hindi, English & more</p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {languages.map((lang) => (
                  <span key={lang} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/50 backdrop-blur border border-white/70 text-xs sm:text-sm font-medium text-slate-600 cursor-default">
                    <Globe className="w-3 h-3 text-[#71C9CE]" />
                    {lang}
                  </span>
                ))}
              </div>
              <a href="#final-cta" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#71C9CE] to-[#48999d] text-white font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95 group">
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
