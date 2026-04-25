"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles, Network, ChevronRight } from "lucide-react";

export default function AEAEALandingPage() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#E3FDFD]" />;

  return (
    <div className="min-h-screen bg-[#E3FDFD] text-slate-800 font-sans overflow-hidden relative selection:bg-[#71C9CE] selection:text-white">
      
      {/* Ambient Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft animated gradients */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px] bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] opacity-40 mix-blend-multiply"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] bg-gradient-to-br from-[#A6E3E9] to-[#71C9CE] opacity-30 mix-blend-multiply"
        />
        
        {/* Mouse follow light effect */}
        <motion.div
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{ type: "spring", damping: 40, stiffness: 100, mass: 0.5 }}
          className="absolute w-[400px] h-[400px] rounded-full blur-[80px] bg-[#71C9CE] opacity-20 pointer-events-none"
        />
        
        {/* 3D Floating Shapes / Orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000), 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "linear" 
            }}
            className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_15px_3px_#A6E3E9]"
          />
        ))}

        {/* Tech Nodes / Neural Network lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#71C9CE" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 w-full flex items-center justify-between px-5 md:px-12 py-5 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#71C9CE] to-[#A6E3E9] flex shrink-0 items-center justify-center shadow-lg shadow-[#A6E3E9]/50 group-hover:scale-105 transition-transform duration-300">
            <Network className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-slate-800 truncate">
            AEAEA Technologies
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-600"
        >
          {['Solutions', 'Innovation', 'Contact'].map((item) => (
            <a key={item} href="#" className="hover:text-[#71C9CE] transition-colors relative group py-2">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#71C9CE] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="hidden sm:block"
        >
          <button className="px-5 sm:px-7 py-2 sm:py-3 rounded-full bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2 group">
            Notify Me
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm mb-8 sm:mb-10"
        >
          <span className="relative flex h-2 w-2 sm:h-3 sm:w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#71C9CE] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-[#71C9CE]"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-700 tracking-wide uppercase">Something extraordinary is launching soon</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-4 px-2"
        >
          AEAEA Technologies
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative inline-block mb-10"
        >
          <motion.h2 
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#71C9CE] via-[#48999d] to-[#71C9CE] pb-1 sm:pb-2 bg-[length:200%_auto]"
          >
            Coming Soon
          </motion.h2>
          <motion.div 
            className="absolute bottom-0 left-0 h-[3px] sm:h-[4px] bg-[#71C9CE] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-base sm:text-xl md:text-2xl text-slate-600 mb-10 sm:mb-14 leading-relaxed font-light px-4"
        >
          We are building next-generation intelligent solutions for the future. 
          <br className="hidden md:block" />
          <span className="font-medium text-[#71C9CE]">Building the future of smart digital experiences.</span>
        </motion.p>

        {/* Glassmorphism Email Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          whileHover={{ y: -5 }}
          className="w-full max-w-lg p-2.5 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(113,201,206,0.25)] relative overflow-hidden group"
        >
          {/* Animated glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl pointer-events-none" />
          
          <form onSubmit={(e) => e.preventDefault()} className="relative flex flex-col sm:block w-full">
            <div className="absolute left-5 top-5 sm:top-1/2 sm:-translate-y-1/2 text-[#71C9CE] hidden sm:block">
              <Mail className="w-6 h-6" />
            </div>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-4 sm:py-5 px-5 sm:pl-16 sm:pr-40 bg-white/60 rounded-xl outline-none text-slate-800 text-base sm:text-lg placeholder:text-slate-400 focus:bg-white/90 transition-all border border-transparent focus:border-[#71C9CE]/50 shadow-inner text-center sm:text-left mb-2 sm:mb-0"
              required
            />
            <button 
              type="submit"
              className="w-full sm:absolute sm:right-2 sm:top-2 sm:bottom-2 py-4 sm:py-0 sm:px-8 rounded-xl sm:rounded-lg bg-gradient-to-r from-[#71C9CE] to-[#48999d] text-white font-semibold hover:shadow-[0_0_20px_rgba(113,201,206,0.6)] transition-all flex items-center justify-center gap-2 group/btn active:scale-95"
            >
              Notify Me
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-8 text-center z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm font-medium text-slate-500 flex items-center justify-center gap-2"
        >
          <span>&copy; {new Date().getFullYear()} AEAEA Technologies. All rights reserved.</span>
          <Sparkles className="w-4 h-4 text-[#71C9CE]" />
        </motion.div>
      </footer>
    </div>
  );
}
