"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Server, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * HERO SECTION - "SYSTEM EXHIBITION" FRAMEWORK
 *
 * Design Philosophy: Demonstration over Persuasion
 * - Asymmetric layout (60/40) - text-first, not centered
 * - Background image with gradient overlay
 * - Services list instead of terminal
 * - No testimonials → Operational guarantees instead
 * - No marketing language → Factual system description
 * - Editorial restraint → Whitespace is intentional
 */

const services = [
  {
    icon: Code2,
    title: "Webdesign",
    description: "Next.js Web-Anwendungen mit 98+ Performance Score"
  },
  {
    icon: Server,
    title: "IT-Services",
    description: "Cloud-Infrastruktur, CI/CD, Monitoring & Support"
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description: "SEO, Analytics-Setup & Conversion-Optimierung"
  }
];

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
      {/* LAYER 2: GRADIENT VIGNETTE (Text Contrast) */}
      {/* ============================================ */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 35% 45%, transparent 0%, rgba(5, 8, 18, 0.85) 100%),
            linear-gradient(to right, rgba(10, 14, 39, 0.95) 0%, rgba(10, 14, 39, 0.6) 50%, transparent 70%)
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
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-32 lg:py-40">

        {/* Asymmetric Grid: 60% Text | 40% Services */}
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
              style={{
                textShadow: '0 2px 40px rgba(0, 0, 0, 0.9), 0 0 60px rgba(6, 182, 212, 0.2)'
              }}
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
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
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
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  Operating Standards
                </span>
              </div>

              <div className="space-y-4 max-w-xl">
                {/* Standard 1 */}
                <div className="flex items-baseline gap-4 text-sm sm:text-base">
                  <span className="text-gray-400 min-w-[180px]">Response Time</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
                  <span className="text-cyan-400 font-mono font-semibold">&lt; 47 Minuten</span>
                </div>

                {/* Standard 2 */}
                <div className="flex items-baseline gap-4 text-sm sm:text-base">
                  <span className="text-gray-400 min-w-[180px]">Code Ownership</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
                  <span className="text-white font-semibold">Vollständig</span>
                </div>

                {/* Standard 3 */}
                <div className="flex items-baseline gap-4 text-sm sm:text-base">
                  <span className="text-gray-400 min-w-[180px]">Performance Target</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
                  <span className="text-cyan-400 font-mono font-semibold">98+ Lighthouse</span>
                </div>

                {/* Standard 4 */}
                <div className="flex items-baseline gap-4 text-sm sm:text-base">
                  <span className="text-gray-400 min-w-[180px]">Deployment Timeline</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
                  <span className="text-white font-semibold">15 Werktage</span>
                </div>

                {/* Standard 5 */}
                <div className="flex items-baseline gap-4 text-sm sm:text-base">
                  <span className="text-gray-400 min-w-[180px]">GitHub Access</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
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
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-base text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
              >
                <span>Projekt anfragen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA - Text Link */}
              <Link
                href="#ablauf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
              >
                <span>Ablauf ansehen</span>
                <span className="text-gray-500">(2 Min.)</span>
              </Link>
            </motion.div>

          </div>

          {/* ============================================ */}
          {/* RIGHT: SERVICES LIST (2 columns = 40%) */}
          {/* ============================================ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="space-y-6">

              {/* Services Header */}
              <div className="mb-8">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Leistungen
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white">
                  Drei Systeme.<br />
                  Ein Ziel: Mehr Umsatz.
                </h2>
              </div>

              {/* Services Cards */}
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-cyan-500/30 backdrop-blur-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-cyan-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>

        {/* Mobile Services - Simplified for small screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:hidden mt-12 space-y-4"
        >
          <div className="mb-6">
            <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Leistungen
              </span>
            </div>
            <h2 className="text-xl font-black text-white">
              Drei Systeme. Ein Ziel: Mehr Umsatz.
            </h2>
          </div>

          {services.map((service) => (
            <div
              key={service.title}
              className="p-5 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex-shrink-0">
                  <service.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-20" />

    </section>
  );
}
