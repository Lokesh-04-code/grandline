"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic, Play } from "lucide-react";

const podcasts = [
  { college: "JNTUH", speaker: "Prof. Ramesh Kumar", topic: "Campus Life & Placements" },
  { college: "VIT-AP", speaker: "Dr. Priya Sharma", topic: "Research Opportunities" },
  { college: "CBIT Hyderabad", speaker: "Alumni Panel", topic: "Industry Connections" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Podcasts() {
  return (
    <section id="podcasts" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CBF1F5]/30 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">College <span className="text-[#71C9CE]">Podcasts</span></h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">Hear directly from professors, alumni, and students about real college experiences.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {podcasts.map((p) => (
            <motion.div key={p.college} variants={item} className="glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-[#A6E3E9]/20 transition-all hover:-translate-y-1 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#71C9CE] to-[#48999d] flex items-center justify-center shrink-0 shadow-md">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{p.college}</h3>
                  <p className="text-xs text-slate-500">{p.speaker}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">{p.topic}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#71C9CE] uppercase tracking-wide">Coming Soon</span>
                <button disabled className="w-10 h-10 rounded-full bg-[#E3FDFD] flex items-center justify-center cursor-not-allowed opacity-60">
                  <Play className="w-4 h-4 text-[#71C9CE] ml-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
