"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, ShieldCheck, MessageCircle, LifeBuoy } from "lucide-react";

const solutions = [
  { icon: Target, title: "Personalized Recommendations", desc: "Colleges matched to your rank, budget, location, and career goals." },
  { icon: ShieldCheck, title: "Verified College Data", desc: "Accurate placement stats, infrastructure details, and student reviews." },
  { icon: MessageCircle, title: "Expert Counseling", desc: "Talk to experienced counselors who understand your unique situation." },
  { icon: LifeBuoy, title: "End-to-End Support", desc: "From shortlisting to admission—we're with you every step of the way." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Solution() {
  return (
    <section id="solution" className="section-padding">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">We Help You Make the <span className="text-[#71C9CE]">Right Choice</span></h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">Our platform takes the guesswork out of college selection with data, expertise, and personalized guidance.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s) => (
            <motion.div key={s.title} variants={item} className="glass-card rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-[#A6E3E9]/20 transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#71C9CE] to-[#48999d] flex items-center justify-center mb-5 shadow-lg shadow-[#71C9CE]/20 group-hover:scale-105 transition-transform">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
