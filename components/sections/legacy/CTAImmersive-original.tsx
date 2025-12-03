"use client";

import { motion } from "framer-motion";
import { Calendar, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

/**
 * CTA Immersive - REDESIGN
 *
 * Full-Screen Centered CTA
 * Dramatischer als Split-Layout
 * Klarer Focus auf Conversion
 */

export function CTAImmersive() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Darker Background */}
      <div className="absolute inset-0 bg-[#060913]" />

      {/* Massive Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[1200px] h-[1200px] rounded-full blur-[180px]"
          style={{
            background:
              'radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(59,130,246,0.3) 50%, rgba(139,92,246,0.3) 100%)',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl"
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-400">Verfügbar für neue Projekte</span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[1.02]"
          style={{ letterSpacing: '-0.04em' }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Bereit, Ihr nächstes
            <br />
            Projekt zu starten?
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 leading-relaxed font-light max-w-3xl mx-auto"
        >
          Kostenlose Tech-Beratung. Keine Verpflichtungen.
          <br />
          Nur ehrliche Expertise.
        </motion.p>

        {/* CTAs - Large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-4 px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 rounded-2xl shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-7 h-7" />
            <span>Tech-Call buchen</span>
            <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="mailto:info@mb-solutions.biz"
            className="inline-flex items-center justify-center gap-4 px-12 py-6 text-xl font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border-2 border-white/10 hover:border-cyan-500/50 rounded-2xl backdrop-blur-xl transition-all duration-300"
          >
            <MessageSquare className="w-7 h-7" />
            <span>E-Mail schreiben</span>
          </Link>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 text-gray-500"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span className="text-base">Antwort in {"<2h"}</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span className="text-base">Kostenlose Erstberatung</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span className="text-base">50+ erfolgreiche Projekte</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span className="text-base">100% DSGVO-konform</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
