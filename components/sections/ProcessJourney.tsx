"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket, BarChart } from "lucide-react";

/**
 * MB-Solutions Process Journey Section
 *
 * Horizontal Timeline statt vertical:
 * - 5 Schritte im Entwicklungsprozess
 * - Connector Lines zwischen Steps
 * - Hover-Effects & Animations
 * - Full-Width Layout
 *
 * NO standard vertical timeline!
 */

interface ProcessStep {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Beratung & Analyse",
    description: "Wir verstehen Ihre Anforderungen und analysieren Ihre bestehende Infrastruktur.",
    duration: "1-2 Tage",
  },
  {
    number: "02",
    icon: Palette,
    title: "Konzept & Design",
    description: "Entwicklung eines maßgeschneiderten Konzepts mit modernem UI/UX Design.",
    duration: "3-5 Tage",
  },
  {
    number: "03",
    icon: Code,
    title: "Entwicklung",
    description: "Agile Entwicklung mit regelmäßigen Updates und Code-Reviews.",
    duration: "2-4 Wochen",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Testing & Launch",
    description: "Umfassende Tests, Performance-Optimierung und erfolgreicher Launch.",
    duration: "3-5 Tage",
  },
  {
    number: "05",
    icon: BarChart,
    title: "Support & Wartung",
    description: "Kontinuierliche Betreuung, Updates und Performance-Monitoring.",
    duration: "Laufend",
  },
];

export function ProcessJourney() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1629] via-[#0A0E27] to-[#0F1629]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-4xl" />
      <div className="absolute bottom-1/3 -right-32 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-4xl" />

      <div className="relative z-10 w-full max-w-10xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">

        {/* Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl"
          >
            <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">
              Unser Prozess
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mb-4 leading-tight tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em'
            }}
          >
            Von der Idee zur erfolgreichen Umsetzung
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed font-light"
          >
            Unser strukturierter Entwicklungsprozess garantiert transparente Kommunikation und termingerechte Lieferung.
          </motion.p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-[72px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 backdrop-blur-xl transition-all duration-300">

                    {/* Icon Circle - Positioned to overlap line */}
                    <div className="relative z-10 w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-cyan-400" />

                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Step Number */}
                    <div className="absolute top-4 right-4 text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed text-center mb-4">
                      {step.description}
                    </p>

                    {/* Duration Badge */}
                    <div className="flex justify-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400">
                        {step.duration}
                      </span>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>

                  {/* Arrow Connector - Only between steps (not after last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[72px] -right-3 w-6 h-0.5">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="h-full bg-gradient-to-r from-cyan-500/50 to-blue-500/50 origin-left"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-400 mb-4">
            Durchschnittliche Projektdauer: <span className="text-white font-semibold">3-6 Wochen</span>
          </p>
          <p className="text-sm text-gray-500">
            * Abhängig von Projektumfang und Komplexität
          </p>
        </motion.div>

      </div>
    </section>
  );
}
