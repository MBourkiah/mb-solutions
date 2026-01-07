"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket, BarChart, ArrowRight, CheckCircle2, Clock, ChevronLeft, ChevronRight } from "lucide-react";
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 400;
    const newScrollLeft = direction === 'left'
      ? scrollContainerRef.current.scrollLeft - scrollAmount
      : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background - Dark Navy */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Top Fade Transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0A0E27] to-transparent pointer-events-none z-10" />


      {/* Container - Full Width */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-14">
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

        {/* Horizontal Scrolling Timeline Container */}
        <div className="relative">

          {/* Scroll Buttons (Desktop only) */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white hover:bg-black/80 transition-all shadow-xl"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white hover:bg-black/80 transition-all shadow-xl"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Fade Gradients on sides */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0E27] to-transparent pointer-events-none z-20" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0E27] to-transparent pointer-events-none z-20" />

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-x-auto overflow-y-visible scrollbar-hide pb-4 -mb-4"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-6 lg:gap-8 px-4 lg:px-8 min-w-max">
              {steps.map((step, index) => {
                const StepIcon = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    {/* Card - Wider */}
                    <div className="w-[380px] sm:w-[420px] h-full p-7 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl shadow-black/20">

                      {/* Header */}
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-3">
                          {/* Icon */}
                          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                            <StepIcon className="w-6 h-6 text-cyan-400" />
                          </div>

                          {/* Step Number */}
                          <div>
                            <div className="text-xs font-mono text-gray-500 mb-1">STEP {step.number}</div>
                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </span>
                      </div>

                      {/* Benefit */}
                      <p className="text-sm text-gray-300 leading-relaxed mb-5">
                        {step.benefit}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5">
                        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                          Deliverables
                        </div>
                        {step.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-400 leading-relaxed">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Background Step Number */}
                      <div className="absolute top-4 right-4 text-8xl font-black text-white/[0.02] pointer-events-none select-none">
                        {step.number}
                      </div>
                    </div>

                    {/* Arrow Connector (Not on last item) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-7 -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-cyan-500/40" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Scroll Indicator (Mobile) */}
          <div className="lg:hidden flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-cyan-500/30"
              />
            ))}
          </div>
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

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
