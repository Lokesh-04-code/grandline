"use client";

import React from "react";
import { motion } from "framer-motion";
import { School, Compass, GitBranch, UserCheck, ClipboardCheck } from "lucide-react";

const services = [
  { icon: School, title: "College Selection", desc: "Data-driven college recommendations based on your unique profile." },
  { icon: Compass, title: "Career Guidance", desc: "Understand career paths and which branches align with your goals." },
  { icon: GitBranch, title: "Branch Selection Help", desc: "Choose the right branch based on market demand and your interests." },
  { icon: UserCheck, title: "1:1 Counseling", desc: "Personal sessions with experts who understand your situation." },
  { icon: ClipboardCheck, title: "Admission Support", desc: "End-to-end help with applications, documents, and deadlines." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our <span className="text-[#71C9CE]">Services</span></h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to make a confident college decision—under one roof.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((s) => (
            <motion.div key={s.title} variants={item} className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg hover:shadow-[#A6E3E9]/20 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-[#E3FDFD] flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#71C9CE] group-hover:to-[#48999d] transition-all">
                <s.icon className="w-6 h-6 text-[#71C9CE] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
