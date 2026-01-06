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

      {/* Subtle Ambient Glow Effects - Reduced opacity for better readability */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] animate-glow-pulse"
           style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-[100px] animate-glow-pulse"
           style={{ animationDelay: '1.5s' }} />

      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center space-y-10 md:space-y-12">

          {/* Status Badge - Enhanced with pulse animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.05] border border-cyan-500/20 backdrop-blur-xl mx-auto relative group hover:bg-white/[0.08] hover:border-cyan-500/40 transition-all duration-300"
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400 relative z-10" />
            </motion.div>
            <span className="text-sm font-semibold text-white relative z-10">Verfügbar für neue Projekte</span>
          </motion.div>

          {/* Massive Headline - Enhanced gradient and shadow */}
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
            <span className="block text-white" style={{ textShadow: '0 2px 40px rgba(6, 182, 212, 0.15)' }}>
              Digitale Lösungen,
            </span>
            <span
              className="block mt-2 relative"
              style={{
                background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 40%, #8B5CF6 80%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 80px rgba(6, 182, 212, 0.3)',
              }}
            >
              die performen
            </span>
          </motion.h1>

          {/* Subheadline - Enhanced with better contrast */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-300 leading-relaxed max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}
          >
            Next.js Webentwicklung und IT-Services für mittelständische Unternehmen in{" "}
            <span className="text-cyan-400 font-semibold">Köln</span>.{" "}
            <span className="text-white font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text">
              ⚡ 30% schneller. 100% skalierbar. DSGVO-sicher.
            </span>
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
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-cyan-500/60 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Leistungen ansehen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust Signals - Enhanced size and visibility */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8"
          >
            <motion.div
              className="flex items-center gap-3 group cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 relative z-10" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg group-hover:bg-cyan-400/40 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-semibold text-white">⚡ Ø 47 Min.</span>
                <span className="text-xs text-gray-500">Reaktionszeit</span>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 group cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 relative z-10" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg group-hover:bg-cyan-400/40 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-semibold text-white">98+ Score</span>
                <span className="text-xs text-gray-500">Lighthouse</span>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 group cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 relative z-10" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg group-hover:bg-cyan-400/40 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-semibold text-white">100% Ready</span>
                <span className="text-xs text-gray-500">DSGVO-konform</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Fade - Smooth Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none" />

      {/* Scroll Indicator - Enhanced with mouse icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-gray-400 group hover:text-cyan-400 transition-colors"
        >
          <div className="text-xs font-semibold tracking-wider uppercase">Scroll</div>
          {/* Mouse Icon */}
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2 relative">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-current rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
