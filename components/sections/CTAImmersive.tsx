"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

/**
 * CTA IMMERSIVE SECTION
 *
 * Design Philosophy: "The Final Push"
 * - Full-height centered conversion focus
 * - Dramatic lighting (center glow)
 * - Minimal distractions
 * - Clear dual CTA (primary + alternative)
 * - Matches overall aesthetic
 *
 * Layout: Centered single column
 * - Maximum focus on conversion
 * - Generous whitespace
 * - Strong visual hierarchy
 */

export function CTAImmersive() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background - Darker */}
      <div className="absolute inset-0 bg-[#050812]" />

      {/* Massive Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[1200px] h-[1200px] rounded-full blur-[200px]"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(59,130,246,0.2) 50%, rgba(139,92,246,0.15) 100%)'
          }}
        />
      </div>

      {/* Technical Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-8"
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Verfügbar für neue Projekte</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1]"
        >
          Bereit für ein System,<br />
          <span
            className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            das wirklich funktioniert?
          </span>
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Keine endlosen Discovery-Calls. Keine Pitch-Decks. Keine &quot;wir melden uns&quot;-Emails.
          <span className="block mt-2 text-white font-semibold">Nur ein ehrliches Gespräch über Ihr Projekt.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-lg text-white shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-[1.02] transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            <span>15-Min. Erstgespräch buchen</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="mailto:kontakt@mb-solutions.de"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-xl font-semibold text-lg text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 backdrop-blur-sm transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Oder per Email</span>
          </Link>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span>Antwort &lt; 2 Stunden</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Kostenlose Tech-Analyse</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Transparente Festpreise</span>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-xs text-gray-600 italic max-w-2xl mx-auto">
            &quot;Warum so direkt?&quot; — Weil wir keine Sales-Abteilung haben. Nur Entwickler, die ehrlich sagen,
            ob wir das richtige Team für Ihr Projekt sind. Spart Zeit. Für beide Seiten.
          </p>
        </motion.div>

      </div>

    </section>
  );
}
