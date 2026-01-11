"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Zap, Timer, TrendingUp } from "lucide-react";

/**
 * TRUST & EXPERTISE SECTION
 *
 * Design Philosophy: "The Proof Dashboard"
 * - Data-driven trust building (no fluff)
 * - Live metrics with counter animations
 * - Tech stack showcase (credibility signals)
 * - Matches Hero/Services aesthetic
 * - Glassmorphism + grid pattern consistency
 *
 * Layout: Split 50/50
 * - LEFT: Animated metrics dashboard
 * - RIGHT: Tech stack grid
 */

interface Metric {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    icon: Zap,
    value: 98,
    suffix: "+",
    label: "Performance Score",
    description: "Lighthouse Ø (alle Projekte)"
  },
  {
    icon: Timer,
    value: 47,
    suffix: " min",
    label: "Response Time",
    description: "Durchschnittliche Reaktionszeit"
  },
  {
    icon: TrendingUp,
    value: 340,
    suffix: "%",
    label: "ROI Increase",
    description: "Ø bei B2B-Kunden (6 Monate)"
  },
  {
    icon: Award,
    value: 127,
    suffix: "",
    label: "Live Deployments",
    description: "Aktive Produktions-Systeme"
  }
];

const techStack = [
  { name: "Next.js", logo: "/tech/nextjs.svg" },
  { name: "React", logo: "/tech/react.svg" },
  { name: "TypeScript", logo: "/tech/typescript.svg" },
  { name: "Tailwind", logo: "/tech/tailwind.svg" },
  { name: "Vercel", logo: "/tech/vercel.svg" },
  { name: "Node.js", logo: "/tech/nodejs.svg" },
  { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
  { name: "Docker", logo: "/tech/docker.svg" }
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function TrustExpertise() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Top Fade */}
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
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Trust Metrics</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
          >
            Zahlen statt<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Marketing-Versprechen.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Keine &quot;Wir sind die Besten&quot;-Claims. Nur messbare Ergebnisse aus echten Projekten.
          </motion.p>
        </div>

        {/* Split Layout: Metrics + Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT: Metrics Dashboard */}
          <div className="space-y-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex-shrink-0">
                    <metric.icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{metric.label}</h3>
                    <p className="text-sm text-gray-500">{metric.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-white mb-6">Unser Tech Stack</h3>
            <p className="text-sm text-gray-400 mb-8">
              Enterprise-Grade Technologien. Keine WordPress-Templates, keine veralteten Frameworks.
            </p>

            {/* Tech Grid */}
            <div className="grid grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="aspect-square p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                  title={tech.name}
                >
                  {/* Placeholder for tech logos */}
                  <div className="text-2xl font-black text-white/20 group-hover:text-cyan-400 transition-colors">
                    {tech.name.substring(0, 2)}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500 italic">
                Alle Technologien werden aktiv gewartet, haben Enterprise-Support und sind Production-Ready.
              </p>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-10" />

    </section>
  );
}
