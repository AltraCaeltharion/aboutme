"use client";
import React from 'react';
import { motion } from "framer-motion";
import { profile, skills } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1 text-center md:text-left space-y-8 order-2 md:order-1">
          <div className="flex gap-3 justify-center md:justify-start items-center">
            <div className="w-12 h-[2px] bg-blue-500"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Introduction</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
            {profile.name}<span className="text-blue-600">.</span>
          </h1>

          <p className="max-w-md text-zinc-400 text-sm md:text-lg leading-relaxed font-light">
            {profile.intro}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-zinc-600 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center md:justify-start gap-5 pt-6">
            <button className="px-10 py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5">
              View Portfolio
            </button>
            <button className="px-10 py-4 bg-zinc-900 border border-zinc-800 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-zinc-800 transition-all">
              Contact Me
            </button>
          </div>
        </div>

        <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex-shrink-0 order-1 md:order-2 group">
          <motion.div
            initial={{ opacity: 0.5, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute -inset-4 bg-blue-600/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000"
          />

          <div className="relative w-full h-full rounded-full border-[1px] border-zinc-800 p-4 md:p-6 bg-zinc-900/20 backdrop-blur-3xl">
            <div className="w-full h-full rounded-full overflow-hidden border border-zinc-700/50 shadow-2xl bg-zinc-950">
              <motion.img
                src="/foto/live.gif"
                alt="Live Profile"
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.15 }}
                transition={{
                  opacity: { duration: 1 },
                  scale: { duration: 2, ease: "easeOut" }
                }}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/foto/foto-profile.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
