"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Users, Zap, Shield } from "lucide-react";
import Link from "next/link";

/**
 * CONVERSION-OPTIMIZED HERO SECTION
 *
 * Design Philosophy:
 * - Clarity > Aesthetics
 * - Benefit-driven messaging
 * - Instant comprehension in 3 seconds
 * - Strong social proof
 * - Clear value proposition
 * - Prominent, specific CTAs
 *
 * Conversion Elements:
 * ✅ Pain-point focused headline
 * ✅ Specific, quantified benefits
 * ✅ Service clarity strip
 * ✅ Strong trust indicators
 * ✅ Dual CTA strategy (primary + low-friction)
 * ✅ Cologne local focus for SEO + relevance
 */

export function HeroConversion() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-[#0A0E27] via-[#0D1229] to-[#0A0E27]">

      {/* Subtle background pattern - non-distracting */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.4) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Ambient glow - subtle, professional */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-4xl">

          {/* Location Badge - SEO + Trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-cyan-100">Digitalagentur in Köln</span>
          </motion.div>

          {/* Main Headline - Pain-point focused */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight mb-6"
          >
            <span className="text-white">
              Ihre Website verliert Kunden?
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Wir machen das anders.
            </span>
          </motion.h1>

          {/* Value Proposition - Specific, quantified */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8"
          >
            Schnelle Websites, zuverlässige IT und messbare Marketing-Erfolge für mittelständische Unternehmen in Köln.{" "}
            <span className="text-white font-semibold">Ohne Agentur-Bullshit.</span>
          </motion.p>

          {/* Key Benefits - Scannable, specific */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-3 mb-10"
          >
            {[
              "98+ Lighthouse Score garantiert",
              "Antwort innerhalb 2 Stunden",
              "100% DSGVO-konform"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-200 font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Section - Dual strategy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            {/* Primary CTA - Specific, low-friction */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-base text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-200"
            >
              <Zap className="w-5 h-5" />
              <span>Kostenloses Erstgespräch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Secondary CTA - Social proof driven */}
            <Link
              href="#projekte"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-200"
            >
              <span>Referenzen ansehen</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Trust Bar - Compact, scannable */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-gray-400">
                <span className="text-white font-semibold">4.9/5</span> bei Google
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-gray-400">
                <span className="text-white font-semibold">50+</span> zufriedene Kunden
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">
                <span className="text-white font-semibold">ISO 27001</span> zertifiziert
              </span>
            </div>
          </motion.div>
        </div>

        {/* Service Highlight Strip - Instant clarity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl"
        >
          {[
            {
              title: "Webdesign & Entwicklung",
              description: "Next.js, React, WordPress – schnell, modern, konvertierend",
              icon: "🎨"
            },
            {
              title: "IT-Services & Support",
              description: "Proaktive Betreuung, Cloud-Migration, Microsoft 365",
              icon: "⚙️"
            },
            {
              title: "Marketing & SEO",
              description: "Local SEO, Google Ads, Content – messbare Ergebnisse",
              icon: "📈"
            }
          ].map((service, i) => (
            <div
              key={i}
              className="group p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
            >
              <div className="text-2xl mb-3">{service.icon}</div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient - smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none" />
    </section>
  );
}
