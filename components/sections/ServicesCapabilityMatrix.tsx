"use client";

import { motion } from "framer-motion";
import { Code2, Server, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * SERVICES CAPABILITY MATRIX - PRODUCT-STYLE DESIGN
 *
 * Design Philosophy: SaaS Product Positioning
 * - Zero visual break from Hero (seamless transition)
 * - Services framed as "capabilities" not "offerings"
 * - Product-style language ("Configure", "Activate", "Deploy")
 * - Technical grid background (control room aesthetic)
 * - Outcome-driven content (measurable results)
 * - Single Cyan accent color (unified brand)
 *
 * Layout: Horizontal capability browser
 * - 3 capability cards in grid
 * - Hover micro-interactions
 * - Clear CTAs with action verbs
 * - Mobile-first responsive
 */

interface Capability {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  outcomes: {
    primary: { label: string; value: string };
    secondary: { label: string; value: string };
  };
  deliverables: string[];
  ctaText: string;
  ctaLink: string;
}

const capabilities: Capability[] = [
  {
    id: "revenue-machines",
    icon: Code2,
    title: "Web Development",
    tagline: "Umsatzmaschinen, keine Visitenkarten",
    description: "Next.js Enterprise-Systeme mit messbarer Performance. Conversion-optimiert, SEO-ready, DSGVO-konform.",
    outcomes: {
      primary: { label: "Performance Score", value: "98+" },
      secondary: { label: "Ladezeit", value: "<2s" },
    },
    deliverables: ["Next.js 15 App Router", "Sub-2s Load", "SEO-Optimiert", "DSGVO-konform"],
    ctaText: "System konfigurieren",
    ctaLink: "/contact?service=webdev",
  },
  {
    id: "infrastructure",
    icon: Server,
    title: "IT Infrastructure",
    tagline: "Ihre Systeme laufen. Immer.",
    description: "Cloud-Migration, Server-Management, 24/7-Monitoring. Null Downtime. Null Drama.",
    outcomes: {
      primary: { label: "Uptime", value: "99.9%" },
      secondary: { label: "Response", value: "47min" },
    },
    deliverables: ["Cloud Migration", "24/7 Monitor", "Backup & Recovery", "Security Audits"],
    ctaText: "Infrastruktur aktivieren",
    ctaLink: "/contact?service=it",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Process Automation",
    tagline: "Was Maschinen können, machen Maschinen",
    description: "Workflows automatisieren, APIs verbinden, Zeit zurückgewinnen. Bis zu 40h/Monat Zeitersparnis.",
    outcomes: {
      primary: { label: "Zeit gespart", value: "40h/Mo" },
      secondary: { label: "Fehlerrate", value: "-95%" },
    },
    deliverables: ["API Integration", "Workflow Builder", "Data Sync", "Email Automation"],
    ctaText: "Automation deployen",
    ctaLink: "/contact?service=automation",
  },
];

export function ServicesCapabilityMatrix() {
  return (
    <section id="leistungen" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">

      {/* Background - Same as Hero */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Technical Grid Pattern (Control Room Aesthetic) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #06B6D4 1px, transparent 1px),
            linear-gradient(to bottom, #06B6D4 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Subtle Radial Glow (Spotlight Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/[0.02] rounded-full blur-4xl" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">

          {/* System Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-xl"
          >
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-cyan-100 tracking-wide uppercase font-mono">
              Performance Layer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mb-4 sm:mb-5 leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Wählen Sie Ihre Performance-Ebene
          </motion.h2>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed"
          >
            Messbare Resultate. Keine Agentur-Floskeln. Nur Systeme, die funktionieren.
          </motion.p>
        </div>

        {/* Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Hover Glow (Cyan only) */}
                <div className="absolute -inset-2 bg-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-3xl blur-2xl transition-opacity duration-500" />

                {/* Card Container */}
                <div className="relative h-full p-6 sm:p-7 md:p-8 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col">

                  {/* Status Bar (Terminal Style) */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-xs font-mono text-cyan-400 tracking-wider">ONLINE</span>
                    </div>
                    <span className="text-xs font-mono text-gray-500">v2.5</span>
                  </div>

                  {/* Icon Badge */}
                  <div className="mb-5">
                    <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/15 transition-colors">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                  </div>

                  {/* Title + Tagline */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-cyan-400 font-semibold">
                      {capability.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {capability.description}
                  </p>

                  {/* Key Outcomes (2×1 Grid) */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-3xl font-black text-white tabular-nums mb-1">
                        {capability.outcomes.primary.value}
                      </div>
                      <div className="text-xs text-gray-500">
                        {capability.outcomes.primary.label}
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-3xl font-black text-white tabular-nums mb-1">
                        {capability.outcomes.secondary.value}
                      </div>
                      <div className="text-xs text-gray-500">
                        {capability.outcomes.secondary.label}
                      </div>
                    </div>
                  </div>

                  {/* Deliverables (Transparent Chips) */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {capability.deliverables.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded text-xs text-gray-400 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button (Product-Style Action Language) */}
                  <div className="mt-auto">
                    <Link
                      href={capability.ctaLink}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-sm text-white hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
                    >
                      <Zap className="w-4 h-4" />
                      <span>{capability.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

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
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-sm text-gray-500 mb-6">
            Nicht sicher, welches System Sie benötigen?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl font-semibold text-base text-white backdrop-blur-xl transition-all duration-300"
          >
            <span>Kostenlose System-Analyse</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
