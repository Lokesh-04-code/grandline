"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserRound, Building2, Headset, Clock } from "lucide-react";

const steps = [
  { num: "01", icon: UserRound, title: "Fill Your Profile", desc: "Share your rank, budget, preferred location, and career interests." },
  { num: "02", icon: Building2, title: "Get Matched Colleges", desc: "Our algorithm shortlists the best colleges tailored to your profile." },
  { num: "03", icon: Headset, title: "Get Expert Guidance", desc: "Connect with counselors for personalized advice and final decision." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CBF1F5]/30 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">How It <span className="text-[#71C9CE]">Works</span></h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">Three simple steps to find your dream engineering college.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative max-w-5xl mx-auto">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[4.5rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-[#A6E3E9] via-[#71C9CE] to-[#A6E3E9] z-0" />

          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.15 }} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-white glass-card flex items-center justify-center mb-5 shadow-lg shadow-[#A6E3E9]/20 border-2 border-[#A6E3E9]/40">
                <s.icon className="w-7 h-7 text-[#71C9CE]" />
              </div>
              <span className="text-xs font-bold text-[#71C9CE] tracking-widest uppercase mb-2">Step {s.num}</span>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-10 flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
          <Clock className="w-4 h-4 text-[#71C9CE]" />
          Takes less than 2 minutes
        </motion.div>
      </div>
    </section>
  );
}
