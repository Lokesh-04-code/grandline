"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="section-padding">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M60%200L0%200%200%2060%22%20fill%3D%22none%22%20stroke%3D%22%2371C9CE%22%20stroke-width%3D%220.3%22%2F%3E%3C%2Fsvg%3E')] opacity-20" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#71C9CE] blur-[100px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#A6E3E9] blur-[80px] opacity-15" />

          {/* Content */}
          <div className="relative z-10 py-16 sm:py-20 px-6 sm:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Don&apos;t Leave Your Future<br className="hidden sm:block" /> to <span className="text-[#71C9CE]">Guesswork</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto">
              Let us help you find the right engineering college — one that matches your goals, budget, and potential.
            </p>
            <a
              href="mailto:grandline@aeaeatech.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#71C9CE] to-[#48999d] text-white font-bold text-lg shadow-lg shadow-[#71C9CE]/30 hover:shadow-xl hover:shadow-[#71C9CE]/40 transition-all active:scale-95 group"
            >
              Get My College List
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-400">
              <Clock className="w-4 h-4 text-[#71C9CE]" />
              Takes less than 2 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
