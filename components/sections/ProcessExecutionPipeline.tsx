"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * PROCESS EXECUTION PIPELINE
 *
 * Visual Design: "Subway Map Timeline"
 * - Lighter background for contrast
 * - Vertical flowing timeline with connecting line
 * - Alternating left-right card layout
 * - Large glowing icons
 * - Progress line visualization
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

      {/* Lighter Background for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1224] via-[#0A0E27] to-[#080B1A]" />

      {/* Diagonal Light Rays */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent rotate-12" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent -rotate-12" />
      </div>

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Section Header - Centered */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm mb-6"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-mono text-cyan-300 uppercase tracking-widest">Der Ablauf</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Von Konzept zu Launch.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              In 15 Werktagen.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Keine endlosen Meetings. Keine &quot;es dauert noch&quot;-Emails.
            Klare Phasen, messbare Deliverables, feste Deadlines.
          </motion.p>
        </div>

        {/* Timeline - Vertical Flow with Alternating Cards */}
        <div className="relative max-w-6xl mx-auto">

          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50 hidden lg:block" />

          {/* Phases */}
          <div className="space-y-24">
            {phases.map((phase, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`lg:grid lg:grid-cols-2 gap-16 items-center ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Card Side */}
                    <div className={isLeft ? '' : 'lg:col-start-2'}>
                      <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/20 hover:border-cyan-400/40 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-cyan-500/20">

                        {/* Gradient Accent Border */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50">
                            <phase.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-mono text-cyan-400 mb-1">{phase.duration}</div>
                            <h3 className="text-2xl font-black text-white">{phase.title}</h3>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {phase.description}
                        </p>

                        {/* Deliverables */}
                        <div className="space-y-3 mb-6">
                          {phase.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span className="text-sm text-gray-400">{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Checkpoint */}
                        <div className="pt-6 border-t border-white/10">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
                            <ArrowRight className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm font-semibold text-cyan-300">{phase.checkpoint}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Icon Side (Timeline Marker) */}
                    <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                        <div className="relative">
                          {/* Large Phase Number */}
                          <div className="text-[120px] font-black text-white/5 leading-none font-mono">
                            {phase.number}
                          </div>

                          {/* Timeline Node */}
                          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50 border-4 border-[#0A0E27]" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm">
            <p className="text-sm text-gray-400 italic max-w-xl">
              &quot;Und wenn was schief geht?&quot;<br />
              <span className="text-cyan-400 font-semibold not-italic">Dann fixen wir es. 47 Minuten Response Time. Garantiert.</span>
            </p>
          </div>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-10" />

    </section>
  );
}
