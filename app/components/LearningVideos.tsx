"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { title: "NAAC & NIRF Explained", desc: "Understand accreditation & rankings" },
  { title: "Top Branches in 2025", desc: "Which branches are in demand?" },
  { title: "Scholarship Guide", desc: "How to find & apply for scholarships" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function LearningVideos() {
  return (
    <section id="learning-videos" className="section-padding">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Learning <span className="text-[#71C9CE]">Videos</span></h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">Free educational content to help you make informed decisions.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((v) => (
            <motion.div key={v.title} variants={item} className="glass-card rounded-2xl overflow-hidden group hover:shadow-lg hover:shadow-[#A6E3E9]/20 transition-all hover:-translate-y-1">
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-[#E3FDFD] via-[#CBF1F5] to-[#A6E3E9]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/50 backdrop-blur flex items-center justify-center border border-white/70 cursor-not-allowed">
                    <Play className="w-6 h-6 text-[#71C9CE] ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-800/80 text-white text-xs font-semibold backdrop-blur-sm">
                  Coming Soon
                </div>
              </div>
              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-slate-800 mb-1">{v.title}</h3>
                <p className="text-sm text-slate-500">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
