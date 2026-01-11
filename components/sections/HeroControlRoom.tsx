"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * HERO SECTION - Clean & Modern with Dashboard Showcase
 *
 * Design Philosophy:
 * - Minimalist approach - less is more
 * - Focus on strong typography
 * - Asymmetric layout (text left, dashboard showcase right)
 * - Background with dramatic contrast
 * - Single strong CTA
 * - Real dashboard image with grain texture overlay
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

          {/* RIGHT: Dashboard Showcase - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 hidden lg:block"
          >
            {/* Floating Dashboard Image */}
            <div className="relative">

              {/* Main Dashboard Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.6,
                }}
                className="relative"
              >
                {/* Dashboard Image with Grain Texture Overlay */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/30 border border-white/20 backdrop-blur-xl">

                  {/* Dashboard Image */}
                  <div className="relative">
                    <Image
                      src="/images/hero/hero-dashboard.webp"
                      alt="Performance Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                      priority
                      quality={95}
                    />

                    {/* Grain Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none">
                      <Image
                        src="/images/grain-texture.png"
                        fill
                        className="object-cover"
                        alt=""
                        quality={100}
                      />
                    </div>
                  </div>

                </div>

                {/* Ambient Glow Behind Dashboard */}
                <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/20 rounded-3xl blur-[80px] -z-10 opacity-60" />

              </motion.div>

              {/* Floating Pulse Animation */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-12 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-[100px] -z-20"
              />

            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-30" />

    </section>
  );
}
