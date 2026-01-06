"use client";

import { motion } from "framer-motion";
import { Target, FileCheck, Code2, Rocket, Clock, TrendingUp } from "lucide-react";

/**
 * MB-Solutions Process - Full Width Premium Edition
 *
 * Minimalistisches, elegantes Design:
 * - True Full-Width Layout (keine Container)
 * - Monochrome Palette (Cyan/White)
 * - Massive Whitespace
 * - Vertikale Timeline mit Minimal Design
 * - Nummerierte Steps ohne visuelle Überladung
 */

export function ProcessModern() {
  const steps = [
    {
      number: "01",
      title: "Technische Analyse",
      description:
        "Im kostenlosen Erstgespräch analysieren wir Ihre Anforderungen, bestehende Systeme und technische Ziele. Wir verstehen Ihre Vision und definieren klare, messbare Projektziele.",
      duration: "1-2 Tage",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Konzept & Planung",
      description:
        "Detaillierte System-Architektur, Tech-Stack-Definition und präzise Roadmap. Sie erhalten ein vollständiges Konzept mit transparentem Festpreis-Angebot und klaren Meilensteinen.",
      duration: "3-5 Tage",
      icon: <FileCheck className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Agile, sprint-basierte Entwicklung mit wöchentlichen Updates. Automatisierte Tests, Code Reviews und Performance-Optimierung garantieren höchste Qualität.",
      duration: "2-8 Wochen",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "Production Deployment auf Enterprise-Infrastruktur, kontinuierliches Performance-Monitoring und persönlicher Support für langfristigen Erfolg.",
      duration: "Ongoing",
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  return (
    <section id="prozess" className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0E27] to-transparent pointer-events-none z-20" />

      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.2) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Single Ambient Glow - Minimal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]" />

      {/* Content - True Full Width */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">

        {/* Header - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl"
          >
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-400">Unser Prozess</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1.02]"
            style={{ letterSpacing: '-0.04em' }}
          >
            Von der Idee zum Launch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-400 leading-relaxed font-light"
          >
            Strukturiert, transparent und effizient.
          </motion.p>
        </div>

        {/* Process Steps - Vertical Timeline */}
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  number,
  title,
  description,
  duration,
  icon,
  index,
}: {
  number: string;
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

        {/* Left/Right: Number + Title (alternating) */}
        <div className={`${isEven ? 'lg:text-right' : 'lg:text-left'} ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`inline-flex items-center gap-4 mb-6 ${isEven ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 text-cyan-400">
              {icon}
            </div>

            {/* Number */}
            <div className="text-8xl md:text-9xl font-black text-white/[0.03] leading-none" style={{ letterSpacing: '-0.05em' }}>
              {number}
            </div>
          </motion.div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            {title}
          </h3>
        </div>

        {/* Right/Left: Description + Duration (alternating) */}
        <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6 font-light">
            {description}
          </p>

          {/* Duration Badge - Minimal */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-400">{duration}</span>
          </div>
        </div>
      </div>

      {/* Connecting Line - Minimal */}
      {index < 3 && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute left-1/2 -translate-x-1/2 top-full w-px h-20 md:h-28 bg-gradient-to-b from-white/10 via-white/5 to-transparent origin-top"
        />
      )}
    </motion.div>
  );
}
