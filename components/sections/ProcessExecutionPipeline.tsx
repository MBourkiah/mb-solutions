"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket, BarChart, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

interface ProcessStep {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  benefit: string;
  outcomes: string[];
  duration: string;
}

const steps: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    benefit: "Wir verstehen Ihr Geschäft, bevor wir eine Zeile Code schreiben.",
    outcomes: [
      "Requirements-Workshop mit Entscheidungsträgern",
      "Technische Machbarkeit & Risiko-Assessment"
    ],
    duration: "1–2 Tage",
  },
  {
    id: "design",
    number: "02",
    icon: Palette,
    title: "Design",
    benefit: "Klickbare Prototypen statt Photoshop-Dateien.",
    outcomes: [
      "High-Fidelity Mockups in Figma",
      "Design System für konsistente Skalierung"
    ],
    duration: "3–5 Tage",
  },
  {
    id: "development",
    number: "03",
    icon: Code,
    title: "Development",
    benefit: "Sauberer Code, Performance-Tests, wöchentliche Demos.",
    outcomes: [
      "Agile Sprints mit Live-Zugriff aufs Staging",
      "Automatisierte Tests ab der ersten Commit"
    ],
    duration: "2–4 Wochen",
  },
  {
    id: "launch",
    number: "04",
    icon: Rocket,
    title: "Testing & Launch",
    benefit: "Wir gehen live, wenn alles funktioniert – nicht vorher.",
    outcomes: [
      "Security Audit & Load Testing",
      "Deployment mit Rollback-Plan"
    ],
    duration: "3–5 Tage",
  },
  {
    id: "support",
    number: "05",
    icon: BarChart,
    title: "Support",
    benefit: "Wir bleiben nach dem Launch an Ihrer Seite.",
    outcomes: [
      "24/7 Uptime-Monitoring",
      "Monatliche Performance-Reports"
    ],
    duration: "Laufend",
  },
];

export function ProcessExecutionPipeline() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background - Dark Navy */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Top Fade Transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0A0E27] to-transparent pointer-events-none z-10" />

      {/* Extremely Subtle Grid (3% opacity) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #06B6D4 1px, transparent 1px),
            linear-gradient(to bottom, #06B6D4 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Vertical Gradient Glow (Behind Timeline Rail - Desktop Only) */}
      <div className="hidden lg:block absolute left-0 top-1/4 bottom-1/4 w-[400px] opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 via-cyan-500/5 to-transparent blur-3xl" />
      </div>

      {/* Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Execution Pipeline
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Vom Briefing zum Launch –<br className="hidden sm:block" /> in 3–6 Wochen
            </h2>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Strukturierter Prozess. Transparente Kommunikation. Messbare Ergebnisse.
            </p>
          </motion.div>
        </div>

        {/* DESKTOP: Split Layout (Timeline + Detail Panel) */}
        <div className="hidden lg:grid lg:grid-cols-[320px_1fr] lg:gap-12 lg:items-start">

          {/* LEFT: Timeline Rail */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-8 bottom-8 w-[2px] bg-gradient-to-b from-cyan-500/30 via-cyan-500/50 to-cyan-500/30" />

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const Icon = step.icon;

                return (
                  <motion.button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                    className="relative w-full text-left group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Checkpoint Node - Smaller */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "border-cyan-400 bg-cyan-400 shadow-lg shadow-cyan-500/50"
                            : "border-gray-700 bg-[#0A0E27] group-hover:border-cyan-500/50"
                        }`}>
                          <span className={`text-xs font-bold font-mono transition-colors ${
                            isActive ? "text-[#0A0E27]" : "text-gray-500 group-hover:text-cyan-400"
                          }`}>
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Step Info */}
                      <div className="flex-1 min-w-0">
                        <div className={`font-bold text-sm mb-0.5 transition-colors ${
                          isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                        }`}>
                          {step.title}
                        </div>
                        <div className={`text-xs font-mono transition-colors ${
                          isActive ? "text-cyan-400" : "text-gray-600"
                        }`}>
                          {step.duration}
                        </div>
                      </div>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="w-1 h-8 bg-cyan-400 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10"
            >
              {/* Header - Compact */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
                <div className="flex items-center gap-4">
                  {/* Icon - Smaller */}
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <StepIcon className="w-7 h-7 text-cyan-400" />
                  </div>

                  {/* Title + Step Number */}
                  <div>
                    <div className="text-xs font-mono text-gray-500 mb-1">STEP {currentStep.number}</div>
                    <h3 className="text-2xl font-bold text-white">
                      {currentStep.title}
                    </h3>
                  </div>
                </div>

                {/* Duration Badge - Right Side */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 whitespace-nowrap">
                  <Clock className="w-3.5 h-3.5" />
                  {currentStep.duration}
                </span>
              </div>

              {/* Benefit Statement */}
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                {currentStep.benefit}
              </p>

              {/* Outcomes - More Compact */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                  Deliverables
                </div>
                {currentStep.outcomes.map((outcome, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-400 leading-relaxed">
                      {outcome}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Background Number */}
              <div className="absolute top-6 right-6 text-9xl font-black text-white/[0.02] pointer-events-none select-none">
                {currentStep.number}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* MOBILE: Vertical Accordion List */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <button
                  onClick={() => setActiveStep(isActive ? -1 : index)}
                  className="w-full text-left p-5 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-gray-500">STEP {step.number}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 whitespace-nowrap">
                      {step.duration}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-300 mb-3">{step.benefit}</p>
                        <div className="space-y-2">
                          {step.outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-gray-400">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* "What You Get" Strip - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-3 p-5 rounded-xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 border border-cyan-500/20"
        >
          {[
            { icon: BarChart, title: "Wöchentliche Updates", desc: "Live-Status" },
            { icon: CheckCircle2, title: "Geteiltes Projekt-Board", desc: "Voller Zugriff" },
            { icon: Clock, title: "Messbare Ziele ab Tag 1", desc: "KPIs tracken" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">{item.title}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm mb-5">
            Bereit für strukturierte Zusammenarbeit? Starten Sie mit Phase 1: Discovery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold overflow-hidden hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Projekt starten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
            <a href="#discovery" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors">
              Ablauf ansehen →
            </a>
          </div>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-10" />
    </section>
  );
}
