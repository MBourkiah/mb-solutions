"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket, BarChart, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface TimelineStep {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  value: string;
  outcomes: string[];
  duration: string;
}

const steps: TimelineStep[] = [
  {
    id: "discovery",
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    value: "Wir verstehen Ihr Geschäft, bevor wir Code schreiben.",
    outcomes: [
      "Klare Anforderungen statt vager Briefings",
      "Technische Machbarkeit & Risiko-Check"
    ],
    duration: "1–2 Tage",
  },
  {
    id: "design",
    number: "02",
    icon: Palette,
    title: "Design",
    value: "Prototypen, die Ihr Team validieren kann – vor der Entwicklung.",
    outcomes: [
      "Klickbare Mockups statt statischer Screenshots",
      "Design System mit wiederverwendbaren Komponenten"
    ],
    duration: "3–5 Tage",
  },
  {
    id: "development",
    number: "03",
    icon: Code,
    title: "Development",
    value: "Code, der skaliert. Tests, die schützen.",
    outcomes: [
      "Wöchentliche Demos mit echtem Fortschritt",
      "Performance-Optimierung ab Tag 1"
    ],
    duration: "2–4 Wochen",
  },
  {
    id: "launch",
    number: "04",
    icon: Rocket,
    title: "Testing & Launch",
    value: "Kein \"Soft Launch\". Wir gehen live, wenn alles bereit ist.",
    outcomes: [
      "Security Audit & Load Testing",
      "Rollback-Plan & Monitoring-Setup"
    ],
    duration: "3–5 Tage",
  },
  {
    id: "support",
    number: "05",
    icon: BarChart,
    title: "Support",
    value: "Wir bleiben, nachdem Sie live sind.",
    outcomes: [
      "24/7 Uptime-Monitoring",
      "Monatliche Performance-Reports"
    ],
    duration: "Laufend",
  },
];

function TimelineNode({ isActive, index }: { isActive: boolean; index: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative z-10"
    >
      {/* Outer ring */}
      <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
        isActive
          ? "border-cyan-400 bg-cyan-400 shadow-lg shadow-cyan-500/50"
          : "border-gray-600 bg-[#0A0E27]"
      }`}>
        {/* Inner dot (fills when active) */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-full h-full rounded-full bg-cyan-400 animate-pulse"
          />
        )}
      </div>
    </motion.div>
  );
}

export function ProcessExecutionPipeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background - Matches Services/Hero */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Top Fade Transition (seamless from previous section) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0E27] to-transparent pointer-events-none z-10" />

      {/* Subtle Grid Pattern - More visible than before */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #06B6D4 1px, transparent 1px),
            linear-gradient(to bottom, #06B6D4 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Container - Wider on desktop */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Execution Pipeline
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Von der Idee zum Launch –<br className="hidden sm:block" /> in 3–6 Wochen
            </h2>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Strukturierter Prozess. Transparente Kommunikation. Messbare Ergebnisse.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container - 2-column grid on desktop */}
        <div className="relative">

          {/* Vertical Line - hidden on lg+ (2-column layout doesn't need central line) */}
          <div className="absolute left-[7px] lg:hidden top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/20 via-cyan-500/40 to-cyan-500/20" />

          {/* Timeline Steps - 2 columns on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-8 lg:gap-y-10">
            {steps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative flex gap-4 lg:gap-5"
                >
                  {/* Timeline Node (left side) - mobile only */}
                  <div className="flex-shrink-0 pt-1 lg:hidden">
                    <TimelineNode isActive={true} index={index} />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1">
                    <div className="group relative p-5 lg:p-6 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 h-full">

                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          {/* Icon Badge - smaller on desktop */}
                          <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                            <StepIcon className="w-5 h-5 lg:w-5 lg:h-5 text-cyan-400" />
                          </div>

                          {/* Title + Number */}
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-xs font-mono text-gray-500">
                                STEP {step.number}
                              </span>
                            </div>
                            <h3 className="text-lg lg:text-xl font-bold text-white">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="hidden sm:block flex-shrink-0">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-xs font-mono text-cyan-400 whitespace-nowrap">
                            {step.duration}
                          </span>
                        </div>
                      </div>

                      {/* Duration Badge (mobile only) */}
                      <div className="sm:hidden mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-xs font-mono text-cyan-400">
                          {step.duration}
                        </span>
                      </div>

                      {/* Value Statement */}
                      <p className="text-gray-300 text-sm lg:text-base mb-4 leading-relaxed">
                        {step.value}
                      </p>

                      {/* Outcomes (Checklist) */}
                      <div className="space-y-2.5">
                        {step.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-xs lg:text-sm text-gray-400 leading-relaxed">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Background Step Number (subtle) */}
                      <div className="absolute top-3 right-3 text-6xl lg:text-7xl font-black text-white/[0.02] pointer-events-none select-none">
                        {step.number}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust Row - "What You Get" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 lg:mt-20 p-6 lg:p-8 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 backdrop-blur-xl"
        >
          <h3 className="text-lg lg:text-xl font-bold text-white mb-5 text-center sm:text-left">
            Was Sie erwarten können
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Benefit 1 */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <BarChart className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm mb-0.5">Wöchentliche Updates</div>
                <div className="text-xs text-gray-400">Live-Status, keine Überraschungen</div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm mb-0.5">Geteiltes Project Board</div>
                <div className="text-xs text-gray-400">Voller Zugriff auf Fortschritt</div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm mb-0.5">Messbare Ziele</div>
                <div className="text-xs text-gray-400">Performance-Metriken ab Tag 1</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 lg:mt-14 text-center"
        >
          <p className="text-gray-400 text-sm lg:text-base mb-5">
            Bereit für Ihr Projekt? Starten Sie mit Phase 1: Discovery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-base overflow-hidden hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Projekt starten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>

            {/* Secondary CTA */}
            <a
              href="#discovery"
              className="px-7 py-3.5 rounded-xl border border-white/10 text-white font-semibold text-base hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-300"
            >
              Ablauf ansehen
            </a>
          </div>
        </motion.div>

      </div>

      {/* Bottom Fade Transition (to next section) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-10" />
    </section>
  );
}
