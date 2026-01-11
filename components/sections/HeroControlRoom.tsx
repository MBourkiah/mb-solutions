"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * HERO SECTION - Clean & Modern with Visual Showcase
 *
 * Design Philosophy:
 * - Minimalist approach - less is more
 * - Focus on strong typography
 * - Asymmetric layout (text left, 3D visual showcase right)
 * - Background with dramatic contrast
 * - Single strong CTA
 * - 3D floating project previews (instead of static dashboard)
 */

export function HeroControlRoom() {
  return (
    <section className="relative w-screen min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          fill
          className="object-cover"
          alt=""
          priority
          quality={90}
        />
      </div>

      {/* Strong Dark Overlay for Maximum Contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#050812] via-[#0A0E27]/95 to-[#050812]/90" />

      {/* Grain Texture */}
      <div className="absolute inset-0 z-30 opacity-[0.08] mix-blend-overlay pointer-events-none">
        <Image
          src="/images/grain-texture.png"
          fill
          className="object-cover"
          alt=""
          quality={100}
        />
      </div>

      {/* Accent Glow - Top Right */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-[120px] pointer-events-none z-20" />

      {/* Main Content */}
      <div className="relative z-40 w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-32 lg:py-40">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT: Main Content - 7 columns */}
          <div className="lg:col-span-7 space-y-12">

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-bold text-cyan-100 tracking-wide">Verfügbar für neue Projekte</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
                <span className="block text-white">
                  Digitale Lösungen.
                </span>
                <span
                  className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Messbare Erfolge.
                </span>
              </h1>
            </motion.div>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Webdesign, IT-Services und Marketing aus einer Hand –
              für Unternehmen, die nicht nur online sein, sondern online wachsen wollen.
            </motion.p>

            {/* CTA + Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
            >
              {/* Single Strong CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-black text-xl text-white shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300"
              >
                <span>Projekt starten</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <div className="text-2xl font-black text-white">127</div>
                  <div className="text-gray-500 font-medium">Projekte</div>
                </div>
                <div className="w-px h-10 bg-gray-700" />
                <div>
                  <div className="text-2xl font-black text-white">&lt;47min</div>
                  <div className="text-gray-500 font-medium">Response</div>
                </div>
                <div className="w-px h-10 bg-gray-700" />
                <div>
                  <div className="text-2xl font-black text-cyan-400">98+</div>
                  <div className="text-gray-500 font-medium">Performance</div>
                </div>
              </div>
            </motion.div>

            {/* Services Tags - Subtle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 font-medium">
                Webdesign & Development
              </span>
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 font-medium">
                Cloud Infrastructure
              </span>
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 font-medium">
                SEO & Analytics
              </span>
            </motion.div>

          </div>

          {/* RIGHT: Visual Showcase - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 hidden lg:block"
          >
            {/* 3D Floating Screens Stack */}
            <div className="relative h-[600px]">

              {/* Screen 1 - Front (E-Commerce) */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 8 }}
                transition={{
                  duration: 1.2,
                  delay: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 3
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] z-30"
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/30 border border-white/20 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 ml-4 px-3 py-1 rounded-md bg-black/30 border border-white/10">
                      <span className="text-xs text-gray-400 font-mono">mb-solutions.de</span>
                    </div>
                  </div>

                  {/* Screen Content - Gradient Placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 relative overflow-hidden">
                    {/* Animated Grid Lines */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                      }} />
                    </div>

                    {/* Floating Metric Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/40 backdrop-blur-xl">
                      <div className="text-2xl font-black text-white">98+</div>
                      <div className="text-xs text-cyan-300">Performance</div>
                    </div>

                    {/* Content Bars Simulation */}
                    <div className="absolute bottom-6 left-6 right-6 space-y-3">
                      <div className="h-4 bg-white/20 rounded-lg w-3/4" />
                      <div className="h-4 bg-white/15 rounded-lg w-1/2" />
                      <div className="h-8 bg-gradient-to-r from-cyan-500/40 to-blue-600/40 rounded-xl w-32" />
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-20 bg-gradient-to-t from-cyan-500/30 to-transparent blur-2xl" />
                </div>
              </motion.div>

              {/* Screen 2 - Mid (Analytics Dashboard) */}
              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: 20 }}
                animate={{ opacity: 1, y: 100, rotateX: 12 }}
                transition={{
                  duration: 1.4,
                  delay: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 3
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[380px] z-20"
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/8 to-white/3">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                  </div>

                  <div className="aspect-[16/10] bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-pink-500/15 relative overflow-hidden">
                    {/* Chart Simulation */}
                    <div className="absolute inset-0 p-6 flex items-end gap-2">
                      <div className="flex-1 h-[40%] bg-blue-400/30 rounded-t-lg" />
                      <div className="flex-1 h-[70%] bg-cyan-400/30 rounded-t-lg" />
                      <div className="flex-1 h-[55%] bg-purple-400/30 rounded-t-lg" />
                      <div className="flex-1 h-[85%] bg-blue-400/30 rounded-t-lg" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Screen 3 - Back (Marketing Campaign) */}
              <motion.div
                initial={{ opacity: 0, y: 80, rotateX: 25 }}
                animate={{ opacity: 1, y: 200, rotateX: 16 }}
                transition={{
                  duration: 1.6,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 3
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[360px] z-10"
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/5 backdrop-blur-xl bg-gradient-to-br from-white/6 to-white/2">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-black/40 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                  </div>

                  <div className="aspect-[16/10] bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10" />
                </div>
              </motion.div>

              {/* Ambient Glow Effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/10 rounded-full blur-[100px] -z-10" />

            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-30" />

    </section>
  );
}
