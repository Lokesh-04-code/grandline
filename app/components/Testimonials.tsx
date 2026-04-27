"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Ravi Teja", college: "JNTUH Hyderabad", quote: "Grandline helped me understand which colleges actually have good placements. I would have joined the wrong college without their guidance." },
  { name: "Sneha Reddy", college: "VIT-AP University", quote: "The personalized recommendations were spot on. They matched my budget and career goals perfectly. Highly recommended!" },
  { name: "Arjun Prasad", college: "CBIT Hyderabad", quote: "I was confused between 10+ colleges. Grandline's expert counselor helped me narrow it down in just one session." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CBF1F5]/30 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Student <span className="text-[#71C9CE]">Stories</span></h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">Real students, real decisions, real impact.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={item} className="glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-[#A6E3E9]/20 transition-all hover:-translate-y-1 flex flex-col">
              <Quote className="w-8 h-8 text-[#A6E3E9] mb-4" />
              <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#71C9CE] to-[#48999d] flex items-center justify-center text-white text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.college}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
