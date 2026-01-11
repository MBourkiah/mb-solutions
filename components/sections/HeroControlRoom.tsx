"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * HERO SECTION - Multi-Service Focus
 *
 * Design Philosophy:
 * - Presents all three services equally (Webdesign, IT-Services, Marketing)
 * - Less technical, more business-focused
 * - Clean, professional, welcoming
 * - Background with proper contrast
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
      {/* LAYER 2: GRADIENT VIGNETTE */}
      {/* ============================================ */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, rgba(5, 8, 18, 0.9) 100%),
            linear-gradient(to bottom, rgba(10, 14, 39, 0.7) 0%, rgba(10, 14, 39, 0.9) 100%)
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
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">

        {/* Centered Content */}
        <div className="text-center max-w-5xl mx-auto">

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-500/20 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-cyan-100">Verfügbar für neue Projekte</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8"
          >
            <span
              className="block text-white"
              style={{
                textShadow: '0 2px 40px rgba(0, 0, 0, 0.9), 0 0 60px rgba(6, 182, 212, 0.2)'
              }}
            >
              Ihre digitale Präsenz.
            </span>
            <span
              className="block mt-2"
              style={{
                background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 80px rgba(6, 182, 212, 0.4)'
              }}
            >
              Professionell umgesetzt.
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Von modernem Webdesign über zuverlässige IT-Infrastruktur bis zu
            zielgerichtetem Online-Marketing – alles aus einer Hand.
          </motion.p>

          {/* Three Service Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {/* Service 1: Webdesign */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-cyan-500/30 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Webdesign</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Moderne, responsive Websites und Web-Anwendungen, die Ihre Marke perfekt repräsentieren
              </p>
            </div>

            {/* Service 2: IT-Services */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-blue-500/30 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">IT-Services</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Zuverlässige Cloud-Infrastruktur, Hosting, Wartung und technischer Support für Ihren digitalen Erfolg
              </p>
            </div>

            {/* Service 3: Marketing */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/30 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Marketing</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                SEO-Optimierung, Analytics-Setup und datengetriebene Strategien für messbare Online-Erfolge
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-lg text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              <span>Kostenloses Erstgespräch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#systeme"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
            >
              <span>Leistungen entdecken</span>
            </Link>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span>Antwort &lt; 2 Stunden</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Transparente Festpreise</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Persönlicher Ansprechpartner</span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-20" />

    </section>
  );
}
