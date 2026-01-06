"use client";

import { motion } from "framer-motion";
import { Calendar, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * MB-Solutions Modern CTA - Full Width Edition
 *
 * Premium Call-to-Action Section mit:
 * - Full-width edge-to-edge Layout
 * - Massive Typography (text-8xl)
 * - Premium Spacing & Whitespace
 * - Split-Layout: Content + Visual
 * - Monochrome Palette (Cyan/White)
 * - Smooth Transitions
 */

export function CTAModern() {
  return (
    <section id="kontakt" className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Top Fade - Smooth Transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0E27] to-transparent pointer-events-none z-20" />

      {/* Full-Width Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.2) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Ambient Glow Effects - Centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-cyan-500/10 via-blue-500/8 to-cyan-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT: Content */}
          <div>
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

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1.02]"
              style={{ letterSpacing: '-0.04em' }}
            >
              Bereit für den{" "}
              <span className="block">
                nächsten technologischen{" "}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Schritt?
                </span>
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-12 leading-relaxed font-light max-w-2xl"
            >
              Lassen Sie uns über Ihr Projekt sprechen. Kostenlose Erstberatung, keine
              Verpflichtungen, nur ehrliche technische Expertise.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 mb-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-lg text-white shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-6 h-6" />
                <span>Tech-Call buchen</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="mailto:info@mb-solutions.biz"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-semibold text-lg text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/30 backdrop-blur-xl transition-all duration-300"
              >
                <MessageSquare className="w-6 h-6" />
                <span>E-Mail schreiben</span>
              </Link>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-8 text-base text-gray-500"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Antwort in {"<2h"}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Keine Verpflichtung</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full max-w-[600px] mx-auto lg:ml-auto lg:mr-0">
              {/* Ambient Glow behind image */}
              <div className="absolute -inset-12 bg-gradient-to-br from-cyan-500/25 via-blue-500/25 to-cyan-500/25 rounded-3xl blur-[80px] opacity-60" />

              {/* Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-2xl">
                <Image
                  src="/placeholder-cta.webp"
                  alt="Contact & Collaboration Visual"
                  fill
                  className="object-cover"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
              </div>

              {/* Floating Badge - Animated */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 },
                  scale: { duration: 0.6, delay: 0.8 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                animate={{ y: [0, -12, 0] }}
                className="absolute -top-8 -right-8 p-6 rounded-2xl bg-[#0F1629]/95 backdrop-blur-xl border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                    <CheckCircle2 className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white whitespace-nowrap">{"<2h"}</div>
                    <div className="text-xs text-gray-400 font-medium">Response Zeit</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
