"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * HERO SECTION - Minimalist Centered
 *
 * Design Philosophy:
 * - Maximum minimalism - less is more
 * - Focus on strong typography
 * - Centered single-column layout
 * - Background with dramatic contrast
 * - Single strong CTA with stats below
 * - No distracting visuals - pure content focus
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
      <div className="relative z-40 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">

        <div className="flex items-center justify-center min-h-[70vh]">

          {/* Centered Content */}
          <div className="max-w-4xl mx-auto text-center space-y-12">

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-xl">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-bold text-cyan-100 tracking-wide">Verfügbar für neue Projekte</span>
              </div>
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
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              Webdesign, IT-Services und Marketing aus einer Hand –
              für Unternehmen, die nicht nur online sein, sondern online wachsen wollen.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-black text-2xl text-white shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300"
              >
                <span>Projekt starten</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats Row - Closer to CTA, smaller text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap -mt-4"
            >
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-1">127</div>
                <div className="text-xs text-gray-400 font-medium">Projekte</div>
              </div>
              <div className="w-px h-10 bg-gray-700" />
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-1">&lt;47min</div>
                <div className="text-xs text-gray-400 font-medium">Response</div>
              </div>
              <div className="w-px h-10 bg-gray-700" />
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">98+</div>
                <div className="text-xs text-gray-400 font-medium">Performance</div>
              </div>
            </motion.div>

            {/* Services Tags - Subtle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center pt-4"
            >
              <span className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 font-medium">
                Webdesign & Development
              </span>
              <span className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 font-medium">
                Cloud Infrastructure
              </span>
              <span className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 font-medium">
                SEO & Analytics
              </span>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-30" />

    </section>
  );
}
