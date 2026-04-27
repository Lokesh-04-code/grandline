"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Users, ShieldOff } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Thousands of Colleges", desc: "Thousands of engineering colleges—but no clear way to choose the right one." },
  { icon: TrendingDown, title: "Misleading Data", desc: "Placement data is often exaggerated or outdated, leading to wrong decisions." },
  { icon: Users, title: "Peer Pressure", desc: "Pressure from parents, friends, and coaching centers clouds your judgment." },
  { icon: ShieldOff, title: "No Proper Guidance", desc: "Most students don't have access to reliable, unbiased college counseling." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Problem() {
  return (
    <section id="problem" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CBF1F5]/30 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">The Problem with <span className="text-[#71C9CE]">College Selection</span></h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">Every year, lakhs of students face this struggle. Here&apos;s what makes it so hard.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-10">
          {problems.map((p) => (
            <motion.div key={p.title} variants={item} className="glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-[#A6E3E9]/20 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-[#E3FDFD] flex items-center justify-center mb-4 group-hover:bg-[#CBF1F5] transition-colors">
                <p.icon className="w-6 h-6 text-[#71C9CE]" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center text-lg sm:text-xl font-semibold text-slate-700 max-w-xl mx-auto">
          ⚠️ A wrong decision can impact your <span className="text-[#71C9CE] font-bold">entire career</span>.
        </motion.p>
      </div>
    </section>
  );
}
