"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Zap, Timer, TrendingUp, CheckCircle, Star } from "lucide-react";

/**
 * TRUST & EXPERTISE SECTION
 *
 * Visual Design: "Dark Spotlight Grid"
 * - Very dark background (#050812) for maximum contrast
 * - Bento grid layout with varying card sizes
 * - Dramatic bottom-left spotlight
 * - Floating metric cards
 * - No centered header, content-first approach
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

const guarantees = [
  "47min Response Time garantiert",
  "Source Code Ownership (kein Vendor Lock-in)",
  "100% TypeScript (Type Safety)",
  "Performance Budget Enforcement",
  "Automated Testing Pipeline",
  "Production Monitoring 24/7"
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

      {/* Very Dark Background */}
      <div className="absolute inset-0 bg-[#050812]" />

      {/* Dramatic Bottom-Left Spotlight */}
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-tr from-purple-600/20 via-blue-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(6, 182, 212, 0.6) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12">

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Large Metric Card - Spans 8 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-10 rounded-3xl bg-gradient-to-br from-white/[0.1] to-white/[0.03] border border-white/20 backdrop-blur-xl relative overflow-hidden"
          >
            {/* Gradient Orb */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/20 rounded-full blur-[100px]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 mb-6">
                <Star className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-mono text-purple-300 uppercase tracking-wider">Trust Metrics</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                Zahlen statt<br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Marketing-Versprechen.
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-10 max-w-2xl">
                Keine &quot;Wir sind die Besten&quot;-Claims. Nur messbare Ergebnisse aus echten Projekten.
              </p>

              {/* Metrics Grid - 2x2 within this card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="relative group"
                  >
                    <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-400/40 backdrop-blur-sm transition-all duration-300">
                      <metric.icon className="w-8 h-8 text-cyan-400 mb-4" />
                      <div className="text-5xl font-black text-white mb-2">
                        <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1">{metric.label}</h3>
                      <p className="text-xs text-gray-500">{metric.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Card - Spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/20 backdrop-blur-xl"
          >
            <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
            <p className="text-sm text-gray-400 mb-6">
              Enterprise-Grade Technologien
            </p>

            {/* Compact Tech Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.04 }}
                  className="aspect-square p-3 rounded-xl bg-black/30 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex items-center justify-center group"
                  title={tech.name}
                >
                  <div className="text-lg font-black text-white/30 group-hover:text-cyan-400 transition-colors">
                    {tech.name.substring(0, 2)}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-xs text-gray-500 italic">
              Production-ready & aktiv gewartet
            </div>
          </motion.div>

          {/* Guarantees Card - Spans 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white">Garantien</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{guarantee}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote Card - Spans 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 text-[200px] font-black text-white/5 leading-none">&quot;</div>

            <div className="relative">
              <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                Kein Vendor Lock-in. Kein &quot;wir melden uns&quot;. Kein Marketing-Blabla. Nur Code, der funktioniert.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
                <div>
                  <div className="text-sm font-bold text-white">Die MB-Solutions Philosophie</div>
                  <div className="text-xs text-gray-500">Since 2020</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-10" />

    </section>
  );
}
