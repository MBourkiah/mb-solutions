"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

/**
 * HERO SECTION - "SYSTEM EXHIBITION" FRAMEWORK
 *
 * Design Philosophy: Demonstration over Persuasion
 * - Asymmetric layout (60/40) - text-first, not centered
 * - No testimonials → Operational guarantees instead
 * - No marketing language → Factual system description
 * - Editorial restraint → Whitespace is intentional
 * - Filter, not funnel → Show reality, not pitch
 *
 * Trust Building:
 * - SLA-style operating standards (not promises)
 * - Code ownership guarantee
 * - Structural proof through transparency
 *
 * Anti-AI Checklist:
 * ✓ Not centered
 * ✓ No decorative icons
 * ✓ No testimonials
 * ✓ No urgency language
 * ✓ No "führend/innovativ" claims
 * ✓ No benefit bullet lists
 */

export function HeroControlRoom() {
  return (
    <section className="relative w-screen min-h-screen flex items-center overflow-hidden">

      {/* Dark Navy Base */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Subtle Gradient Vignette - Left Side Only */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 60% at 25% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 100%)
          `
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-32 lg:py-40">

        {/* Asymmetric Grid: 60% Text | 40% Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

          {/* ============================================ */}
          {/* LEFT: TEXT ZONE (3 columns = 60%) */}
          {/* ============================================ */}
          <div className="lg:col-span-3 space-y-10">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white max-w-3xl"
            >
              Wir bauen Web-Anwendungen.<br />
              <span className="text-gray-500">
                Keine Pitches. Keine Wartezeiten.
              </span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl"
            >
              Next.js-Systeme für Mittelständler, die keine Agentur-Theater wollen –
              messbare Performance, direkter Zugang zum Tech-Lead, volle Code-Ownership.
            </motion.p>

            {/* Operating Standards - SLA Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pt-6"
            >
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  Operating Standards
                </span>
              </div>

              <div className="space-y-4 max-w-xl">
                {/* Standard 1 */}
                <div className="flex items-baseline gap-4 text-sm sm:text-base">
                  <span className="text-gray-500 min-w-[180px]">Response Time</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent" />
                  <span className="text-cyan-400 font-mono font-semibold">&lt; 47 Minuten</span>
                </div>

                {/* Standard 2 */}
                <div className="flex items-baseline gap-4 text-sm sm:text-base">
                  <span className="text-gray-500 min-w-[180px]">Code Ownership</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent" />
                  <span className="text-white font-semibold">Vollständig</span>
                </div>

                {/* Standard 3 */}
                <div className="flex items-baseline gap-4 text-sm sm:text-base">
                  <span className="text-gray-500 min-w-[180px]">Performance Target</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent" />
                  <span className="text-cyan-400 font-mono font-semibold">98+ Lighthouse</span>
                </div>

                {/* Standard 4 */}
                <div className="flex items-baseline gap-4 text-sm sm:text-base">
                  <span className="text-gray-500 min-w-[180px]">Deployment Timeline</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent" />
                  <span className="text-white font-semibold">15 Werktage</span>
                </div>

                {/* Standard 5 */}
                <div className="flex items-baseline gap-4 text-sm sm:text-base">
                  <span className="text-gray-500 min-w-[180px]">GitHub Access</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent" />
                  <span className="text-white font-semibold">Ab Tag 1</span>
                </div>
              </div>

              {/* Fine Print */}
              <p className="mt-6 text-xs text-gray-600 italic max-w-md">
                Kein Vendor Lock-in. Kein &quot;wir melden uns&quot;. Sie besitzen den Code,
                die Infrastruktur und alle Zugänge von Anfang an.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-base hover:bg-gray-100 transition-all duration-300"
              >
                <span>Projekt anfragen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA - Text Link */}
              <Link
                href="#ablauf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-400 hover:text-white transition-colors text-base font-medium"
              >
                <span>Ablauf ansehen</span>
                <span className="text-gray-600">(2 Min.)</span>
              </Link>
            </motion.div>

          </div>

          {/* ============================================ */}
          {/* RIGHT: CODE/TERMINAL VISUAL (2 columns = 40%) */}
          {/* ============================================ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative">

              {/* Terminal Window Mock */}
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm shadow-2xl">

                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <Terminal className="w-4 h-4 text-gray-600 mr-2" />
                    <span className="text-xs font-mono text-gray-600">production-deploy</span>
                  </div>
                </div>

                {/* Terminal Content - File Structure */}
                <div className="font-mono text-sm space-y-3">
                  {/* Line 1 */}
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">$</span>
                    <span className="text-gray-500">npm run build</span>
                  </div>

                  {/* Line 2 */}
                  <div className="pl-5 text-gray-600">
                    <span className="text-cyan-400">✓</span> Compiled successfully
                  </div>

                  {/* Line 3 - File tree */}
                  <div className="pl-5 space-y-1.5 pt-2">
                    <div className="text-gray-600">
                      <span className="text-gray-700">├──</span> <span className="text-gray-500">app/</span>
                    </div>
                    <div className="text-gray-600 pl-5">
                      <span className="text-gray-700">├──</span> <span className="text-white">page.tsx</span>
                    </div>
                    <div className="text-gray-600 pl-5">
                      <span className="text-gray-700">├──</span> <span className="text-white">layout.tsx</span>
                    </div>
                    <div className="text-gray-600">
                      <span className="text-gray-700">├──</span> <span className="text-gray-500">components/</span>
                    </div>
                    <div className="text-gray-600 pl-5">
                      <span className="text-gray-700">└──</span> <span className="text-white">Hero.tsx</span>
                    </div>
                    <div className="text-gray-600">
                      <span className="text-gray-700">└──</span> <span className="text-gray-500">public/</span>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Performance</span>
                      <span className="text-cyan-400 font-semibold">98</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Accessibility</span>
                      <span className="text-green-400 font-semibold">100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Best Practices</span>
                      <span className="text-cyan-400 font-semibold">100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">SEO</span>
                      <span className="text-green-400 font-semibold">100</span>
                    </div>
                  </div>

                  {/* Deploy Success */}
                  <div className="pt-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs">Deployed to production</span>
                  </div>
                </div>

              </div>

              {/* Subtle Glow */}
              <div className="absolute -inset-6 bg-cyan-500/5 rounded-3xl blur-2xl -z-10" />

            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-20" />

    </section>
  );
}
