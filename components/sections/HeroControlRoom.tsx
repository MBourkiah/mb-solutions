"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * HERO SECTION - Multi-Service Focus
 *
 * Design Philosophy:
 * - Strong contrast for readability
 * - Bold service presentation
 * - Clear visual hierarchy
 * - Professional, welcoming
 */

export function HeroControlRoom() {
  return (
    <section className="relative w-screen min-h-screen flex items-center overflow-hidden">

      {/* ============================================ */}
      {/* LAYER 1: BACKGROUND IMAGE */}
      {/* ============================================ */}
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

      {/* ============================================ */}
      {/* LAYER 2: STRONG GRADIENT OVERLAY (Better Contrast) */}
      {/* ============================================ */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(10, 14, 39, 0.7) 0%, rgba(5, 8, 18, 0.95) 100%),
            linear-gradient(to bottom, rgba(10, 14, 39, 0.85) 0%, rgba(5, 8, 18, 0.95) 100%)
          `
        }}
      />

      {/* ============================================ */}
      {/* LAYER 3: GRAIN TEXTURE OVERLAY */}
      {/* ============================================ */}
      <div className="absolute inset-0 z-30 opacity-[0.06] mix-blend-overlay pointer-events-none">
        <Image
          src="/images/grain-texture.png"
          fill
          className="object-cover"
          alt=""
          quality={100}
        />
      </div>

      {/* ============================================ */}
      {/* LAYER 4: MAIN CONTENT */}
      {/* ============================================ */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-28 lg:py-36">

        {/* Centered Content */}
        <div className="text-center max-w-6xl mx-auto">

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 backdrop-blur-sm mb-10"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-cyan-100">Verfügbar für neue Projekte</span>
          </motion.div>

          {/* Main Headline - Larger, Bolder */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6"
          >
            <span
              className="block text-white"
              style={{
                textShadow: '0 4px 60px rgba(0, 0, 0, 0.9), 0 0 80px rgba(6, 182, 212, 0.3)'
              }}
            >
              Ihre digitale Präsenz.
            </span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 100px rgba(6, 182, 212, 0.5)'
              }}
            >
              Professionell umgesetzt.
            </span>
          </motion.h1>

          {/* Subline - Closer spacing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-200 leading-relaxed mb-16 max-w-4xl mx-auto font-medium"
          >
            Von modernem Webdesign über zuverlässige IT-Infrastruktur bis zu
            zielgerichtetem Online-Marketing – alles aus einer Hand.
          </motion.p>

          {/* Three Service Pillars - Larger, More Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
          >
            {/* Service 1: Webdesign */}
            <div className="group p-10 rounded-3xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] border border-white/20 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] shadow-2xl hover:shadow-cyan-500/20">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/40 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Webdesign</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                Moderne, responsive Websites und Web-Anwendungen, die Ihre Marke perfekt repräsentieren
              </p>
            </div>

            {/* Service 2: IT-Services */}
            <div className="group p-10 rounded-3xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] border border-white/20 hover:border-blue-400/50 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] shadow-2xl hover:shadow-blue-500/20">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-400/40 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">IT-Services</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                Zuverlässige Cloud-Infrastruktur, Hosting, Wartung und technischer Support für Ihren digitalen Erfolg
              </p>
            </div>

            {/* Service 3: Marketing */}
            <div className="group p-10 rounded-3xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] border border-white/20 hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] shadow-2xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400/40 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Marketing</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                SEO-Optimierung, Analytics-Setup und datengetriebene Strategien für messbare Online-Erfolge
              </p>
            </div>
          </motion.div>

          {/* CTAs - Clearer Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12"
          >
            {/* Primary CTA - More Prominent */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-black text-xl text-white shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-[1.05] transition-all duration-300"
            >
              <span>Kostenloses Erstgespräch</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA - Subtle */}
            <Link
              href="#systeme"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-bold text-lg text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
            >
              <span>Leistungen entdecken</span>
            </Link>
          </motion.div>

          {/* Trust Signals - In Professional Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-5 rounded-2xl bg-white/[0.06] border border-white/20 backdrop-blur-sm shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
              <span className="text-white font-bold">Antwort &lt; 2 Stunden</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              <span className="text-white font-bold">Transparente Festpreise</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
              <span className="text-white font-bold">Persönlicher Ansprechpartner</span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-20" />

    </section>
  );
}
