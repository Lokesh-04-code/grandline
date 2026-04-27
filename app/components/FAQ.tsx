"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is this service free?", a: "Yes! Our basic college recommendation and guidance service is completely free. We also offer premium 1:1 counseling sessions for students who want deeper, personalized support." },
  { q: "How do you recommend colleges?", a: "We use a data-driven approach combining your rank, budget, preferred location, branch interests, and career goals. Our algorithm cross-references verified placement data, faculty quality, and infrastructure to give you the best-fit recommendations." },
  { q: "Do you guarantee admission?", a: "We don't guarantee admissions as the final decision rests with the colleges and counseling processes. However, we significantly increase your chances by helping you make informed choices and guiding you through the admission process." },
  { q: "Can I choose my own college?", a: "Absolutely! Our recommendations are suggestions to help you decide. You always have the final say. We provide the data and expert opinion—you make the choice." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Frequently Asked <span className="text-[#71C9CE]">Questions</span></h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">Got questions? We&apos;ve got answers.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-5 h-5 text-[#71C9CE] shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-[#A6E3E9]/20 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
