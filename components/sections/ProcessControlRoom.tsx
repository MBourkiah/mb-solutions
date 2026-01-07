"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket, BarChart, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

/**
 * PROCESS CONTROL ROOM - TERMINAL-STYLE WORKFLOW
 *
 * Design Philosophy: Control Room Pipeline
 * - Terminal/Command-Line aesthetic
 * - Horizontal flow (wie eine CI/CD Pipeline)
 * - Einheitliches Cyan-Farbschema
 * - Technisches Grid-Pattern
 * - Status-Badges wie bei Services
 * - Seamless transition von Services Section
 *
 * Layout: Horizontal Process Timeline
 * - 5 Steps als Pipeline-Stages
 * - Terminal-Style Status Bars
 * - Connecting Lines zwischen Steps
 * - Mobile: Vertical Stack
 */

interface ProcessStage {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  status: "READY" | "ACTIVE" | "COMPLETE";
}

const stages: ProcessStage[] = [
  {
    id: "discovery",
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    subtitle: "Strategie & Analyse",
    description: "Wir analysieren Ihre Anforderungen, Zielgruppe und technische Infrastruktur.",
    deliverables: ["Requirements Doc", "Tech Stack Audit", "Timeline Blueprint"],
    duration: "1-2 Tage",
    status: "READY",
  },
  {
    id: "design",
    number: "02",
    icon: Palette,
    title: "Design",
    subtitle: "UI/UX & Prototyping",
    description: "Conversion-optimiertes Design mit Fokus auf User Experience und Brand Identity.",
    deliverables: ["Wireframes", "High-Fidelity Mockups", "Design System"],
    duration: "3-5 Tage",
    status: "ACTIVE",
  },
  {
    id: "development",
    number: "03",
    icon: Code,
    title: "Development",
    subtitle: "Agile Implementation",
    description: "Clean Code, Git-Workflow, regelmäßige Updates. Zero Technical Debt.",
    deliverables: ["Feature Branches", "Code Reviews", "Weekly Demos"],
    duration: "2-4 Wochen",
    status: "ACTIVE",
  },
  {
    id: "testing",
    number: "04",
    icon: Rocket,
    title: "Testing & Launch",
    subtitle: "QA & Deployment",
    description: "Performance-Tests, Security-Audits, SEO-Optimierung. Dann: Production Deploy.",
    deliverables: ["Test Reports", "Performance Audit", "Launch Checklist"],
    duration: "3-5 Tage",
    status: "READY",
  },
  {
    id: "support",
    number: "05",
    icon: BarChart,
    title: "Support",
    subtitle: "Monitoring & Optimization",
    description: "24/7 Uptime-Monitoring, Performance-Tracking, kontinuierliche Verbesserungen.",
    deliverables: ["Analytics Dashboard", "Monthly Reports", "Priority Support"],
    duration: "Laufend",
    status: "COMPLETE",
  },
];

export function ProcessControlRoom() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">

      {/* Background - Same as Services */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Top Fade Transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0E27] to-transparent pointer-events-none z-10" />

      {/* Technical Grid Pattern (Same as Services) */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #06B6D4 1px, transparent 1px),
            linear-gradient(to bottom, #06B6D4 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">

          {/* System Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-xl shadow-lg shadow-cyan-500/20"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-cyan-300 tracking-wide uppercase font-mono">
              Process Pipeline
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
            Vom Briefing zum Launch
          </motion.h2>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed"
          >
            Strukturierter Workflow. Transparente Kommunikation. Null Überraschungen.
          </motion.p>
        </div>

        {/* Process Pipeline - Horizontal Timeline */}
        <div className="relative">

          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-500/40 to-cyan-500/20" />

          {/* Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Glow on Hover */}
                  <div className="absolute -inset-2 bg-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-3xl blur-2xl transition-opacity duration-500" />

                  {/* Stage Card */}
                  <div className="relative h-full p-6 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col">

                    {/* Status Bar (Terminal Style) */}
                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          stage.status === "ACTIVE" ? "bg-cyan-400" :
                          stage.status === "COMPLETE" ? "bg-green-400" :
                          "bg-gray-500"
                        }`} />
                        <span className={`text-xs font-mono tracking-wider ${
                          stage.status === "ACTIVE" ? "text-cyan-400" :
                          stage.status === "COMPLETE" ? "text-green-400" :
                          "text-gray-500"
                        }`}>
                          {stage.status}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-gray-500">STAGE {stage.number}</span>
                    </div>

                    {/* Icon Badge (Positioned to touch connecting line) */}
                    <div className="relative z-10 mb-5 -mt-2">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/15 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>

                    {/* Large Step Number (Background) */}
                    <div className="absolute top-6 right-6 text-6xl font-black text-white/5 pointer-events-none">
                      {stage.number}
                    </div>

                    {/* Title + Subtitle */}
                    <div className="mb-4 text-center">
                      <h3 className="text-xl font-black text-white tracking-tight mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-cyan-400 font-semibold">
                        {stage.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-5 text-center">
                      {stage.description}
                    </p>

                    {/* Deliverables (Checklist Style) */}
                    <div className="space-y-2 mb-5">
                      {stage.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Duration Badge */}
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        <span className="text-xs font-mono text-cyan-400 font-bold">
                          {stage.duration}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Arrow Connector (Between Cards) */}
                  {index < stages.length - 1 && (
                    <div className="hidden lg:block absolute top-[72px] -right-3 z-20">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                      >
                        <ArrowRight className="w-6 h-6 text-cyan-500/60" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 sm:mt-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-black/40 backdrop-blur-2xl border border-white/10 text-center">
              <div className="text-4xl font-black text-white tabular-nums mb-2">3-6</div>
              <div className="text-sm text-gray-400">Wochen Ø Projektdauer</div>
            </div>
            <div className="p-6 rounded-xl bg-black/40 backdrop-blur-2xl border border-white/10 text-center">
              <div className="text-4xl font-black text-white tabular-nums mb-2">100%</div>
              <div className="text-sm text-gray-400">Transparenz & Updates</div>
            </div>
            <div className="p-6 rounded-xl bg-black/40 backdrop-blur-2xl border border-white/10 text-center">
              <div className="text-4xl font-black text-white tabular-nums mb-2">24/7</div>
              <div className="text-sm text-gray-400">Post-Launch Support</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-400 mb-6 font-medium">
            Bereit für Ihr Projekt? Starten wir mit Phase 1: Discovery.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-base text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
          >
            <span>Projekt starten</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-10" />

    </section>
  );
}
