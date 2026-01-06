"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * Project Spotlight - NEU
 *
 * Featured Case Study Showcase
 * Zeigt konkrete Erfolge & baut Social Proof auf
 */

export function ProjectSpotlight() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Darker Background Panel */}
      <div className="absolute inset-0 bg-[#080B1F]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Heavy Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl"
          >
            <span className="text-xs font-medium text-cyan-400 tracking-wide uppercase">
              Featured Project
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Erfolgsgeschichten unserer Kunden
          </motion.h2>
        </div>

        {/* Main Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl">
            {/* Massive Glow behind card */}
            <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-50" />

            {/* Project Mockup/Screenshot */}
            <div className="relative aspect-[21/9] bg-gradient-to-br from-white/[0.08] to-white/[0.02] overflow-hidden">
              <Image
                src="/placeholder-project-featured.webp"
                alt="Featured Project Mockup"
                fill
                className="object-cover"
                sizes="(max-width: 1536px) 100vw, 1536px"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B1F] via-transparent to-transparent" />
            </div>

            {/* Content Below */}
            <div className="relative p-8 md:p-12">
              {/* Client Logo (optional) */}
              <div className="mb-6">
                <div className="inline-block px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10">
                  <span className="text-sm font-bold text-gray-400">TechRetail GmbH</span>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                E-Commerce Platform mit 98/100 Lighthouse Score
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl">
                Wir haben für TechRetail eine komplett neue E-Commerce-Plattform gebaut.
                Ergebnis: 250% mehr Traffic, 98/100 Lighthouse Score und 40% höhere Conversion Rate.
              </p>

              {/* Impact Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8 max-w-2xl">
                <MetricCard
                  icon={<TrendingUp className="w-6 h-6" />}
                  value="+250%"
                  label="Traffic"
                  color="cyan"
                />
                <MetricCard
                  icon={<Zap className="w-6 h-6" />}
                  value="98/100"
                  label="Lighthouse"
                  color="green"
                />
                <MetricCard
                  icon={<Target className="w-6 h-6" />}
                  value="+40%"
                  label="Conversion"
                  color="purple"
                />
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "TypeScript", "Stripe", "Vercel", "Prisma"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 text-base font-bold text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <span>Ähnliches Projekt starten</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Alternative: Wenn keine Case Study vorhanden */}
        {/*
        <div className="text-center py-20">
          <h3 className="text-3xl font-black text-white mb-4">
            Bereit für Ihr Projekt?
          </h3>
          <p className="text-lg text-gray-400 mb-8">
            Ihre Success Story könnte hier stehen.
          </p>
          <Link href="#kontakt" className="...">
            Projekt starten
          </Link>
        </div>
        */}
      </div>
    </section>
  );
}

function MetricCard({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}) {
  const colors: Record<string, string> = {
    cyan: "text-cyan-400 border-cyan-500/20 from-cyan-500/10 to-cyan-500/5",
    green: "text-green-400 border-green-500/20 from-green-500/10 to-green-500/5",
    purple: "text-purple-400 border-purple-500/20 from-purple-500/10 to-purple-500/5",
  };

  return (
    <div
      className={`p-4 rounded-xl bg-gradient-to-br ${colors[color]} border ${colors[color].split(' ')[1]} text-center`}
    >
      <div className={`mb-2 ${colors[color].split(' ')[0]} mx-auto w-fit`}>{icon}</div>
      <div className="text-2xl md:text-3xl font-black text-white mb-1">{value}</div>
      <div className="text-xs text-gray-400 font-medium">{label}</div>
    </div>
  );
}
