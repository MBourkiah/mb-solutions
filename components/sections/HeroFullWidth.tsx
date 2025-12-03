"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

/**
 * MB-Solutions Hero Section - Text-First Approach
 *
 * Modern, Centered Hero:
 * - Text-First (kein ablenkender Side-Content)
 * - Zentriertes Layout
 * - Massive, impactful Typography
 * - Subtile visuelle Effekte (Grid, Glow)
 * - Fokus auf Message & CTAs
 * - Clean, Professional, Performance-optimiert
 *
 * Inspiration: Vercel, Linear, Stripe, Tailwind CSS
 */

export function HeroFullWidth() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-Width Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#0F1629] to-[#0A0E27]" />

      {/* Animated Grid Pattern - Full Width */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Subtle Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-5xl animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-5xl animate-glow-pulse"
           style={{ animationDelay: '3s' }} />

      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center space-y-10 md:space-y-12">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mx-auto"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300">Verfügbar für neue Projekte</span>
          </motion.div>

          {/* Massive Headline - Centered */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-black leading-[1.05] tracking-tight mx-auto"
            style={{
              fontSize: 'clamp(2.75rem, 9vw, 6.5rem)',
              letterSpacing: '-0.04em',
              maxWidth: '90%'
            }}
          >
            <span className="block text-white">Digitale Lösungen,</span>
            <span
              className="block mt-2"
              style={{
                background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              die performen
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-300 leading-relaxed max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}
          >
            Next.js Webentwicklung und IT-Services für mittelständische Unternehmen.{" "}
            <span className="text-white font-semibold">Performance-optimiert. Skalierbar. DSGVO-konform.</span>
          </motion.p>

          {/* CTA Buttons - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 rounded-2xl font-bold text-lg text-white shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              <Zap className="w-5 h-5" />
              <span>Kostenlose Tech-Analyse</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#leistungen"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300"
            >
              <span>Leistungen ansehen</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Trust Signals - Centered */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-6"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-sm md:text-base text-gray-400">Antwort in {"<2h"}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-sm md:text-base text-gray-400">98+ Lighthouse Score</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-sm md:text-base text-gray-400">DSGVO-Ready</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Fade - Smooth Transition to next section */}
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
