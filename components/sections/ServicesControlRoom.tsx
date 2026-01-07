"use client";

import { motion } from "framer-motion";
import { Code2, Server, Zap, ArrowRight, TrendingUp, Timer, Activity } from "lucide-react";
import Link from "next/link";

/**
 * SERVICES CONTROL ROOM
 *
 * Design Philosophy: "Mission Control Dashboard"
 * - 3 System Cards (side-by-side on desktop, stacked on mobile)
 * - Terminal-style status bars with pulse indicators
 * - Live metrics grid (2×2 per service)
 * - CSS/SVG abstract visuals (no IDEOGRAM needed)
 * - Glassmorphism cards with hover effects
 * - Fully responsive (mobile → tablet → desktop)
 */

interface ServiceSystem {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    color: string;
    icon: React.ElementType;
  }[];
  features: string[];
  gradient: string;
  visualColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  ctaText: string;
  ctaLink: string;
}

const systems: ServiceSystem[] = [
  {
    id: "webdev",
    icon: Code2,
    title: "Web Development System",
    tagline: "Umsatzmaschinen, keine Visitenkarten",
    description: "Next.js Enterprise-Anwendungen mit 98+ Performance Score. Conversion-optimiert, SEO-ready, DSGVO-konform.",
    metrics: [
      { label: "Performance", value: "98.4", color: "text-cyan-400", icon: TrendingUp },
      { label: "Ø ROI", value: "+340%", color: "text-green-400", icon: Activity },
      { label: "Load Time", value: "1.7s", color: "text-blue-400", icon: Timer },
      { label: "Uptime", value: "99.9%", color: "text-purple-400", icon: Activity },
    ],
    features: ["Next.js 15", "Sub-2s Load", "SEO-Ready", "DSGVO", "Headless CMS", "A/B Testing"],
    gradient: "from-cyan-500 to-blue-500",
    visualColors: {
      primary: "#06B6D4",
      secondary: "#3B82F6",
      accent: "#8B5CF6",
    },
    ctaText: "System aktivieren",
    ctaLink: "/contact?service=webdev",
  },
  {
    id: "it-services",
    icon: Server,
    title: "IT Infrastructure System",
    tagline: "Ihre Infrastruktur läuft. Immer.",
    description: "Cloud-Migration, Server-Management, 24/7-Monitoring. Wir sorgen dafür, dass nichts brennt.",
    metrics: [
      { label: "Uptime", value: "99.9%", color: "text-green-400", icon: Activity },
      { label: "Response", value: "47 Min", color: "text-cyan-400", icon: Timer },
      { label: "Incidents", value: "0.02%", color: "text-blue-400", icon: TrendingUp },
      { label: "Automation", value: "87%", color: "text-purple-400", icon: Activity },
    ],
    features: ["Cloud Migration", "24/7 Monitor", "Backup & Recovery", "Security", "DevOps", "Incident Response"],
    gradient: "from-blue-500 to-purple-500",
    visualColors: {
      primary: "#3B82F6",
      secondary: "#8B5CF6",
      accent: "#10B981",
    },
    ctaText: "System aktivieren",
    ctaLink: "/contact?service=it",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Process Automation System",
    tagline: "Was Maschinen machen können, machen Maschinen",
    description: "Workflows automatisieren, APIs verbinden, Zeit zurückgewinnen. Bis zu 40h/Monat Zeitersparnis.",
    metrics: [
      { label: "Time Saved", value: "40h", color: "text-purple-400", icon: Timer },
      { label: "Error Rate", value: "-95%", color: "text-green-400", icon: TrendingUp },
      { label: "Integrations", value: "47+", color: "text-pink-400", icon: Activity },
      { label: "Workflows", value: "24/7", color: "text-cyan-400", icon: Activity },
    ],
    features: ["API Integration", "Workflow Builder", "Data Sync", "Email Auto", "Reporting Bots", "Custom Scripts"],
    gradient: "from-purple-500 to-pink-500",
    visualColors: {
      primary: "#8B5CF6",
      secondary: "#EC4899",
      accent: "#06B6D4",
    },
    ctaText: "System aktivieren",
    ctaLink: "/contact?service=automation",
  },
];

// Abstract SVG Visual Component (per service)
function AbstractVisual({ colors }: { colors: { primary: string; secondary: string; accent: string } }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`grad-${colors.primary}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: colors.primary, stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: colors.secondary, stopOpacity: 0.2 }} />
        </linearGradient>
        <linearGradient id={`grad-${colors.secondary}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: colors.secondary, stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: colors.accent, stopOpacity: 0.2 }} />
        </linearGradient>
        <linearGradient id={`grad-${colors.accent}`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: colors.accent, stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: colors.primary, stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>

      {/* Abstract Geometric Shapes */}
      <motion.circle
        cx="80"
        cy="120"
        r="60"
        fill={`url(#grad-${colors.primary})`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.rect
        x="200"
        y="80"
        width="120"
        height="120"
        rx="12"
        fill={`url(#grad-${colors.secondary})`}
        initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 5 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.circle
        cx="300"
        cy="200"
        r="50"
        fill={`url(#grad-${colors.accent})`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />

      {/* Connection Lines (Abstract Network) */}
      <motion.line
        x1="80"
        y1="120"
        x2="220"
        y2="140"
        stroke={colors.primary}
        strokeWidth="2"
        strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.line
        x1="260"
        y1="200"
        x2="300"
        y2="200"
        stroke={colors.secondary}
        strokeWidth="2"
        strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />

      {/* Small Accent Circles (Data Points) */}
      <motion.circle cx="150" cy="80" r="6" fill={colors.accent} opacity="0.6" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="320" cy="100" r="6" fill={colors.primary} opacity="0.6" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
    </svg>
  );
}

export function ServicesControlRoom() {
  return (
    <section id="leistungen" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-[#0F1629] to-[#0A0E27]" />

      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-blue-500/5 rounded-full blur-4xl" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl"
          >
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-gray-400 tracking-wide uppercase font-mono">
              Unsere Systeme
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mb-3 sm:mb-4 leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Ihre digitale Kommando-Zentrale
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed"
          >
            Drei Hochleistungs-Systeme für maximalen Business-Impact. Keine Theater, nur Resultate.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                {/* Glow Effect on Hover */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${system.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-3xl transition-opacity duration-500`} />

                {/* Main Card */}
                <div className="relative p-4 sm:p-5 md:p-6 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">

                  {/* Status Bar (Terminal Style) */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-white/5">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-[10px] sm:text-xs font-mono text-green-400">SYSTEM ACTIVE</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono text-gray-500">v2.0.4</span>
                  </div>

                  {/* Visual Preview (Abstract SVG) */}
                  <div className="relative aspect-video mb-3 sm:mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-black/60 to-black/40">
                    <AbstractVisual colors={system.visualColors} />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br ${system.gradient} opacity-20 flex items-center justify-center border border-white/10 flex-shrink-0`}>
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-1 break-words">
                        {system.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-400 font-semibold">
                        {system.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 sm:mb-5">
                    {system.description}
                  </p>

                  {/* Metrics Grid (2×2) */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {system.metrics.map((metric) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={metric.label} className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors">
                          <div className="flex items-center gap-1.5 mb-1">
                            <MetricIcon className={`w-3 h-3 ${metric.color}`} />
                            <div className={`text-lg sm:text-xl md:text-2xl font-black ${metric.color} tabular-nums`}>
                              {metric.value}
                            </div>
                          </div>
                          <div className="text-[10px] sm:text-xs text-gray-500">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Feature Chips */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {system.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={system.ctaLink}
                    className={`w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${system.gradient} rounded-lg font-bold text-xs sm:text-sm text-white hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300`}
                  >
                    <Zap className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    <span>{system.ctaText}</span>
                    <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </Link>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 sm:mt-12 md:mt-16"
        >
          <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
            Nicht sicher, welches System Sie benötigen?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl font-semibold text-sm sm:text-base text-white backdrop-blur-xl transition-all duration-300"
          >
            <span>Kostenlose System-Analyse buchen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
