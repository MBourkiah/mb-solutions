"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, Zap, Star } from "lucide-react";

/**
 * MB-Solutions Trust & Expertise Section
 *
 * Split Layout:
 * - LEFT: Animated Metrics (Counter-Up Animations)
 * - RIGHT: Tech Badge Wall (Logo Grid)
 *
 * Social Proof & Trust Building
 */

interface Metric {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  gradient: string;
}

const metrics: Metric[] = [
  {
    icon: Award,
    value: 5,
    suffix: "+",
    label: "Jahre Erfahrung",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Erfolgreiche Projekte",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Zap,
    value: 98,
    suffix: "/100",
    label: "Ø Lighthouse Score",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Star,
    value: 100,
    suffix: "%",
    label: "Kundenzufriedenheit",
    gradient: "from-pink-500 to-cyan-500",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "AWS",
  "Docker",
  "Vercel",
  "GitHub",
  "Framer Motion",
];

// Counter Animation Hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { count, ref };
}

function MetricCard({ metric }: { metric: Metric }) {
  const { count, ref } = useCounter(metric.value);
  const Icon = metric.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 backdrop-blur-xl transition-all duration-300"
    >
      {/* Icon */}
      <div className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${metric.gradient} opacity-20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Animated Counter */}
      <div className="mb-2">
        <span className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
          {count}{metric.suffix}
        </span>
      </div>

      {/* Label */}
      <div className="text-sm md:text-base text-gray-400 font-medium">
        {metric.label}
      </div>

      {/* Hover Glow */}
      <div className={`absolute -inset-2 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300 -z-10`} />
    </motion.div>
  );
}

export function TrustExpertise() {
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

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-5xl" />

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
              Vertrauen & Expertise
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
            Zahlen, die für sich sprechen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed font-light"
          >
            Über Jahre hinweg haben wir uns das Vertrauen unserer Kunden erarbeitet – mit Expertise, Zuverlässigkeit und messbaren Ergebnissen.
          </motion.p>
        </div>

        {/* Split Layout: Metrics + Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>

          {/* RIGHT: Tech Badge Wall */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
                Enterprise Tech Stack
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Wir arbeiten mit modernen, bewährten Technologien, die Stabilität, Performance und Skalierbarkeit garantieren.
              </p>
            </motion.div>

            {/* Tech Badge Grid */}
            <div className="grid grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-square flex items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 backdrop-blur-xl transition-all duration-300"
                >
                  {/* Tech Name (Placeholder for Logo) */}
                  <span className="text-xs md:text-sm font-bold text-gray-400 group-hover:text-white transition-colors duration-300 text-center opacity-60 group-hover:opacity-100">
                    {tech}
                  </span>

                  {/* Hover Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Certifications / Awards (Optional) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold text-white">Zertifiziert & Geprüft</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Vercel Partner • AWS Certified • DSGVO-konform • ISO 27001 Standards
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
