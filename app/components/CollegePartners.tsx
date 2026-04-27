"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const colleges = [
  "JNTUH", "VIT-AP", "CBIT", "VNRVJIET", "MJCET",
  "GITAM", "CVR", "Mahindra Univ", "IIIT-H", "Vasavi",
  "BVRIT", "Anurag Univ",
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } };

export default function CollegePartners() {
  return (
    <section id="college-partners" className="section-padding">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Researched <span className="text-[#71C9CE]">Colleges</span></h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#71C9CE] shrink-0" />
            Verified institutions and researched colleges
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {colleges.map((name) => (
            <motion.div key={name} variants={item} className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-default">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CBF1F5] to-[#A6E3E9] flex items-center justify-center text-sm font-bold text-[#48999d]">
                {name.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-xs font-semibold text-slate-600 text-center leading-tight">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
