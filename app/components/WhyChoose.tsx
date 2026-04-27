"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, BarChart3, Globe, UserCog } from "lucide-react";

const points = [
  { icon: Heart, title: "Your Best Interest First", desc: "We recommend what's best for YOU—not what earns us commissions." },
  { icon: BarChart3, title: "Data-Backed Insights", desc: "Every recommendation is backed by real placement data and college metrics." },
  { icon: Globe, title: "Multi-Language Support", desc: "Access guidance in Telugu, Hindi, English, Tamil, Kannada & more." },
  { icon: UserCog, title: "Real Human Guidance", desc: "Talk to real counselors—not chatbots. Personalized advice you can trust." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function WhyChoose() {
  return (
    <section id="why-choose" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CBF1F5]/30 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Why Choose <span className="text-[#71C9CE]">Grandline</span>?</h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">What makes us different from every other college listing website.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {points.map((p) => (
            <motion.div key={p.title} variants={item} className="glass-card rounded-2xl p-6 flex gap-4 hover:shadow-lg hover:shadow-[#A6E3E9]/20 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#71C9CE] to-[#48999d] flex items-center justify-center shrink-0 shadow-md shadow-[#71C9CE]/20 group-hover:scale-105 transition-transform">
                <p.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
