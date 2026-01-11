"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket, ArrowRight } from "lucide-react";

/**
 * PROCESS EXECUTION PIPELINE
 *
 * Design Philosophy: "The Assembly Line"
 * - Horizontal flow (left-to-right progression)
 * - Product delivery timeline (not marketing fluff)
 * - Measurable phases with deliverables
 * - Technical aesthetic matching Hero/Services
 * - Glassmorphism + grid pattern consistency
 *
 * Layout: Horizontal scrolling timeline
 * - 4 phases with clear inputs/outputs
 * - Progress indicators
 * - Delivery checkpoints
 */

interface Phase {
  number: string;
  title: string;
  duration: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  checkpoint: string;
}

const phases: Phase[] = [
  {
    number: "01",
    title: "Analyse & Strategie",
    duration: "Tag 1-2",
    icon: Search,
    description: "Performance Audit, Competitor Analysis, Tech Stack Recommendation. Keine Workshop-Theater, nur Zahlen.",
    deliverables: [
      "Lighthouse Audit Report",
      "Competitor Benchmark",
      "Tech Stack Blueprint",
      "Project Timeline"
    ],
    checkpoint: "Go/No-Go Decision"
  },
  {
    number: "02",
    title: "Design & Prototyping",
    duration: "Tag 3-7",
    icon: Palette,
    description: "High-Fidelity Figma Prototyp. Conversion-optimiert, DSGVO-ready. 2 Revision-Runden inklusive.",
    deliverables: [
      "Figma Design System",
      "Desktop + Mobile Screens",
      "Component Library",
      "Style Guide"
    ],
    checkpoint: "Design Sign-Off"
  },
  {
    number: "03",
    title: "Development & Testing",
    duration: "Tag 8-14",
    icon: Code,
    description: "Next.js 15 Build, Performance-Optimierung, SEO-Setup. GitHub Access, tägliche Updates, Staging Preview.",
    deliverables: [
      "GitHub Repository",
      "Staging Environment",
      "Performance Tests",
      "Security Audit"
    ],
    checkpoint: "QA Approval"
  },
  {
    number: "04",
    title: "Launch & Monitoring",
    duration: "Tag 15",
    icon: Rocket,
    description: "Production Deployment, DNS-Setup, Analytics-Integration. 30 Tage Hotline, 47min Response Time.",
    deliverables: [
      "Live Production Site",
      "Monitoring Dashboard",
      "Analytics Setup",
      "30d Support Plan"
    ],
    checkpoint: "Project Complete"
  }
];

export function ProcessExecutionPipeline() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Top Fade Transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0E27] to-transparent pointer-events-none z-10" />

      {/* Technical Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #06B6D4 1px, transparent 1px),
            linear-gradient(to bottom, #06B6D4 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Der Ablauf</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
          >
            Von Konzept zu Launch.<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              In 15 Werktagen.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Keine endlosen Meetings. Keine &quot;es dauert noch&quot;-Emails.
            Klare Phasen, messbare Deliverables, feste Deadlines.
          </motion.p>
        </div>

        {/* Timeline - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="relative">

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="absolute top-16 left-full w-8 h-px bg-gradient-to-r from-cyan-500/50 to-transparent hidden lg:block" />
                )}

                {/* Phase Card */}
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">

                  {/* Phase Number */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                      <phase.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-4xl font-black text-white/10 font-mono">{phase.number}</span>
                  </div>

                  {/* Phase Info */}
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                    <span className="text-xs font-mono text-cyan-400">{phase.duration}</span>
                  </div>

                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-6">
                    {phase.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400" />
                        <span className="text-xs text-gray-500">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Checkpoint */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-white">{phase.checkpoint}</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto -mx-6 px-6 scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-[320px] sm:w-[360px]"
                >
                  <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-sm">

                    {/* Phase Number */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                        <phase.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-4xl font-black text-white/10 font-mono">{phase.number}</span>
                    </div>

                    {/* Phase Info */}
                    <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                      <span className="text-xs font-mono text-cyan-400">{phase.duration}</span>
                    </div>

                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2 mb-6">
                      {phase.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400" />
                          <span className="text-xs text-gray-500">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Checkpoint */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-semibold text-white">{phase.checkpoint}</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            &quot;Und wenn was schief geht?&quot;<br />
            Dann fixen wir es. 47 Minuten Response Time. Garantiert.
          </p>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-10" />

    </section>
  );
}
