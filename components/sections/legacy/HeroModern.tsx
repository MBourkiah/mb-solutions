"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, CheckCircle2, Award, Rocket, Star, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * MB-Solutions Perfect Full-Width Hero
 *
 * Enterprise-Level Hero mit:
 * - min-h-screen für maximale Präsenz
 * - Full-width edge-to-edge Layout
 * - Massive Typography & Premium Spacing
 * - Multiple Ambient Glow Effects
 * - Floating Stat Cards mit Animationen
 * - Split-Layout: Content + Visual
 * - Glassmorphism & Depth Effects
 */

export function HeroModern() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] lg:min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 lg:pt-0">
      {/* Full-Width Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#0F1629] to-[#0A0E27]" />

      {/* Subtle Grid Pattern - Full Width */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Ambient Glow Effects - Multiple Layers */}
      <div className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

      {/* Content Container - Responsive */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* LEFT: Content Block - 7 Columns */}
          <div className="col-span-12 lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">Verfügbar für neue Projekte</span>
            </motion.div>

            {/* H1 - Responsive Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[1.05] sm:leading-[1.02]"
              style={{ letterSpacing: '-0.03em' }}
            >
              <span className="block text-white mb-1 sm:mb-2">Digitale</span>
              <span className="block text-white mb-1 sm:mb-2">Lösungen,</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                die performen
              </span>
            </motion.h1>

            {/* Subheadline - Responsive */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed font-light max-w-3xl"
            >
              Next.js Webentwicklung und IT-Services für mittelständische Unternehmen.{" "}
              <span className="text-white font-semibold">Performance-optimiert. Skalierbar. DSGVO-konform.</span>
            </motion.p>

            {/* CTA Buttons - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5"
            >
              <Link
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg text-white shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="whitespace-nowrap">Kostenlose Tech-Analyse</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#leistungen"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300"
              >
                <span>Leistungen ansehen</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>

            {/* Trust Signals - Responsive */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 pt-2 sm:pt-4"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-gray-400">Antwort in {"<2h"}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-gray-400">98+ Lighthouse Score</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-gray-400">DSGVO-Ready</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Hero Visual - 5 Columns - FLOATING GLASS CARD */}
          <div className="col-span-12 lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative w-full"
            >
              {/* Glow Halo Behind Everything */}
              <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/30 via-blue-500/25 to-purple-500/30 rounded-[3rem] blur-[120px] opacity-70 animate-pulse"
                   style={{ animationDuration: '4s' }} />

              {/* Floating Glass Card Container */}
              <div className="relative p-3 rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-2xl">

                {/* Image Container Inside Glass */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder-hero.webp"
                    alt="MB-Solutions - Next.js Entwicklung und IT-Services"
                    fill
                    className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    quality={95}
                  />
                  {/* Color Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/15 mix-blend-overlay" />
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                </div>

              </div>

              {/* Floating Stats - Positioned Outside Glass Card */}
              {/* Stat 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -25, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 1 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="absolute -top-6 -left-6 p-4 rounded-2xl bg-[#0F1629]/95 backdrop-blur-xl border border-white/10 shadow-2xl z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">5+</div>
                    <div className="text-xs text-gray-400 font-medium">Jahre</div>
                  </div>
                </div>
              </motion.div>

              {/* Stat 2 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, 20, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 1.2 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }
                }}
                className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-[#0F1629]/95 backdrop-blur-xl border border-white/10 shadow-2xl z-10"
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-white mb-1">98/100</div>
                  <div className="text-xs text-gray-400 font-medium mb-2">Performance</div>
                  <div className="flex justify-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                    <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                    <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                    <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                    <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                  </div>
                </div>
              </motion.div>

              {/* Stat 3 - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -15, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 1.4 },
                  y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
                }}
                className="absolute -top-6 -right-6 p-4 rounded-2xl bg-[#0F1629]/95 backdrop-blur-xl border border-white/10 shadow-2xl z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                    <Rocket className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">50+</div>
                    <div className="text-xs text-gray-400 font-medium">Projekte</div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Fade - Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <div className="text-xs font-medium tracking-wider uppercase">Scroll</div>
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
