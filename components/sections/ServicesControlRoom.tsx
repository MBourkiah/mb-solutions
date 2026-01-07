"use client";

import { motion } from "framer-motion";
import { Code2, Server, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * SERVICES CONTROL ROOM - MONOCHROME CYAN VERSION
 *
 * Design Philosophy: Clean, professional, übersichtlich
 * - Einheitliches Cyan-Farbschema (wie Hero)
 * - Reduzierte Metrics (2 statt 4)
 * - Keine bunten SVGs - nur Icon-Badges
 * - Transparente Feature-Chips
 * - Durchgängiger Dark Background
 * - Mobile-first responsive
 */

interface ServiceSystem {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  keyMetrics: {
    primary: { label: string; value: string };
    secondary: { label: string; value: string };
  };
  features: string[];
  ctaLink: string;
}

const systems: ServiceSystem[] = [
  {
    id: "webdev",
    icon: Code2,
    title: "Web Development",
    tagline: "Umsatzmaschinen, keine Visitenkarten",
    description: "Next.js Enterprise-Anwendungen mit 98+ Performance Score. Conversion-optimiert, SEO-ready, DSGVO-konform.",
    keyMetrics: {
      primary: { label: "Performance Score", value: "98.4" },
      secondary: { label: "Ø Load Time", value: "1.7s" },
    },
    features: ["Next.js 15", "Sub-2s Load", "SEO-Optimiert", "DSGVO-konform"],
    ctaLink: "/contact?service=webdev",
  },
  {
    id: "it-services",
    icon: Server,
    title: "IT Infrastructure",
    tagline: "Ihre Systeme laufen. Immer.",
    description: "Cloud-Migration, Server-Management, 24/7-Monitoring. Wir sorgen dafür, dass nichts brennt.",
    keyMetrics: {
      primary: { label: "Uptime Garantie", value: "99.9%" },
      secondary: { label: "Response Time", value: "47 Min" },
    },
    features: ["Cloud Migration", "24/7 Monitor", "Backup & Recovery", "Security Audits"],
    ctaLink: "/contact?service=it",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Process Automation",
    tagline: "Was Maschinen können, machen Maschinen",
    description: "Workflows automatisieren, APIs verbinden, Zeit zurückgewinnen. Bis zu 40h/Monat Zeitersparnis.",
    keyMetrics: {
      primary: { label: "Zeit gespart", value: "40h/Mo" },
      secondary: { label: "Error Reduction", value: "-95%" },
    },
    features: ["API Integration", "Workflow Builder", "Data Sync", "Email Automation"],
    ctaLink: "/contact?service=automation",
  },
];

export function ServicesControlRoom() {
  return (
    <section id="leistungen" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Consistent Background (same as Hero) */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Subtle Cyan Glow (nicht zu stark) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-cyan-500/3 rounded-full blur-4xl" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-xl"
          >
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-cyan-100 tracking-wide uppercase font-mono">
              Unsere Systeme
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mb-4 sm:mb-5 leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Drei Hochleistungs-Systeme
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed"
          >
            Messbare Resultate statt Marketing-Theater. Wählen Sie Ihr System.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {systems.map((system, index) => {
            const Icon = system.icon;

            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Subtle Glow on Hover (only cyan) */}
                <div className="absolute -inset-2 bg-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-3xl blur-2xl transition-opacity duration-500" />

                {/* Main Card */}
                <div className="relative p-5 sm:p-6 md:p-7 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">

                  {/* Status Bar (Terminal Style) - Cyan statt Grün */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-white/5">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-[10px] sm:text-xs font-mono text-cyan-400">SYSTEM ACTIVE</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono text-gray-500">v2.0</span>
                  </div>

                  {/* Icon Badge (statt bunten SVGs) */}
                  <div className="mb-4 sm:mb-5">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-cyan-400" />
                    </div>
                  </div>

                  {/* Title + Tagline */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1.5">
                      {system.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-400 font-semibold">
                      {system.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5 sm:mb-6">
                    {system.description}
                  </p>

                  {/* Key Metrics (2×1 Grid statt 2×2 - übersichtlicher) */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className="p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-2xl sm:text-3xl font-black text-white tabular-nums mb-1">
                        {system.keyMetrics.primary.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        {system.keyMetrics.primary.label}
                      </div>
                    </div>
                    <div className="p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-2xl sm:text-3xl font-black text-white tabular-nums mb-1">
                        {system.keyMetrics.secondary.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        {system.keyMetrics.secondary.label}
                      </div>
                    </div>
                  </div>

                  {/* Feature Chips (transparent statt bunt) */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                    {system.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 sm:px-2.5 py-1 rounded text-[10px] sm:text-xs text-gray-400 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button (einheitlich Cyan → Blue) */}
                  <Link
                    href={system.ctaLink}
                    className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-xs sm:text-sm text-white hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Zap className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    <span>System aktivieren</span>
                    <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </Link>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <p className="text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6">
            Nicht sicher, welches System Sie benötigen?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl font-semibold text-sm sm:text-base text-white backdrop-blur-xl transition-all duration-300"
          >
            <span>Kostenlose System-Analyse</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
