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
    <section id="leistungen" className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden">

      {/* Background - Same as Hero */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Smooth Gradient Fade from Hero (longer fade) */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#0A0E27] via-[#0A0E27]/80 to-transparent pointer-events-none z-10" />

      {/* Technical Grid Pattern (Control Room Aesthetic) - Subtle */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #06B6D4 1px, transparent 1px),
            linear-gradient(to bottom, #06B6D4 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Subtle Accent Glow - Top Center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-cyan-500/5 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Header - More spacious */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24">

          {/* System Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-xl"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-cyan-300 tracking-wider uppercase font-mono">
              Leistungen
            </span>
          </motion.div>

          {/* Headline - Balanced size */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mb-6 leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Drei Hochleistungs-Systeme.
          </motion.h2>

          {/* Supporting Line - Larger */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
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
                {/* "MOST POPULAR" Badge for Web Development */}
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/30">
                      <Zap className="w-3 h-3" />
                      Meistgewählt
                    </span>
                  </div>
                )}

                {/* Hover Glow (Cyan only) - Stronger for first card */}
                <div className={`absolute -inset-2 rounded-3xl blur-2xl transition-opacity duration-500 ${index === 0 ? 'bg-cyan-500/15 opacity-30 group-hover:opacity-100' : 'bg-cyan-500/10 opacity-0 group-hover:opacity-100'}`} />

                {/* Card Container - More Padding */}
                <div className="relative h-full p-8 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col">

                  {/* Status Bar (Terminal Style) - Unique per Service */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-xs font-mono text-cyan-400 tracking-wider">
                        {index === 0 ? "PRODUCTION" : index === 1 ? "STABLE" : "ACTIVE"}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-gray-500">
                      v{index === 0 ? "2.5" : index === 1 ? "2.4" : "2.3"}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/15 transition-colors">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                  </div>

                  {/* Title + Tagline */}
                  <div className="mb-5">
                    <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-cyan-400 font-semibold">
                      {capability.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-7">
                    {capability.description}
                  </p>

                  {/* Key Outcomes (2×1 Grid) - More Spacing */}
                  <div className="grid grid-cols-2 gap-4 mb-7">
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

                  {/* Deliverables (Transparent Chips) - Larger Text */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {capability.deliverables.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded text-sm text-gray-400 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors font-medium"
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

        {/* Bottom CTA - More Active Language */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-sm text-gray-400 mb-6 font-medium">
            Unsicher? Wir analysieren Ihren Use Case kostenlos.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl font-semibold text-base text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Kostenlose System-Analyse</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
