"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import Image from "next/image";

/**
 * MB-Solutions Modern About Section
 *
 * 2-Spalten Layout:
 * - Links: Über uns Text + Stats
 * - Rechts: Bild-Platzhalter
 */

export function AboutModern() {
  const stats = [
    {
      icon: <Target className="w-5 h-5" />,
      value: "98+",
      label: "Lighthouse Score",
      color: "cyan",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      value: "99.9%",
      label: "Uptime SLA",
      color: "blue",
    },
    {
      icon: <Users className="w-5 h-5" />,
      value: "<2h",
      label: "Response Zeit",
      color: "green",
    },
    {
      icon: <Award className="w-5 h-5" />,
      value: "100%",
      label: "DSGVO-konform",
      color: "purple",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Top Fade - Smooth Transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0E27] to-transparent pointer-events-none z-20" />

      {/* Full-Width Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Ambient Glow Effects - Enhanced */}
      <div className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-cyan-500/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] bg-blue-500/15 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl"
            >
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-gray-300">Über MB-Solutions</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1.05]"
              style={{ letterSpacing: '-0.03em' }}
            >
              Technische Exzellenz für den Mittelstand
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 mb-12"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Wir sind spezialisiert auf moderne Webentwicklung und IT-Services für mittelständische
                Unternehmen. Unser Fokus liegt auf{" "}
                <span className="text-white font-semibold">Performance, Skalierbarkeit und Zuverlässigkeit</span>.
              </p>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Mit Next.js, React und TypeScript entwickeln wir technische Lösungen auf Enterprise-Level
                – ohne Enterprise-Overhead. Persönlicher Service, transparente Kommunikation und
                messbare Ergebnisse stehen bei uns im Mittelpunkt.
              </p>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Von der ersten Codezeile bis zum produktiven Betrieb: Wir begleiten Sie durch den
                gesamten Entwicklungsprozess und darüber hinaus.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-5"
            >
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} index={index} />
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full max-w-[600px] mx-auto lg:ml-auto lg:mr-0">
              {/* Ambient Glow - Enhanced */}
              <div className="absolute -inset-12 bg-gradient-to-br from-cyan-500/25 via-blue-500/25 to-purple-500/25 rounded-3xl blur-[80px] opacity-60" />

              {/* Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-2xl">
                <Image
                  src="/placeholder-about.webp"
                  alt="Modern Office & Technology Setup"
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
              </div>

              {/* Floating Badge - Larger */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 },
                  scale: { duration: 0.6, delay: 0.8 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                animate={{ y: [0, -10, 0] }}
                className="absolute -bottom-8 -right-8 p-6 rounded-2xl bg-[#0F1629]/95 backdrop-blur-xl border border-white/10 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-xs text-gray-400 font-semibold whitespace-nowrap">
                    DSGVO-konform
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
  color,
  index,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  index: number;
}) {
  const colors: Record<string, string> = {
    cyan: "text-cyan-400 border-cyan-500/20 from-cyan-500/10 to-cyan-500/5",
    blue: "text-blue-400 border-blue-500/20 from-blue-500/10 to-blue-500/5",
    green: "text-green-400 border-green-500/20 from-green-500/10 to-green-500/5",
    purple: "text-purple-400 border-purple-500/20 from-purple-500/10 to-purple-500/5",
  };

  const colorClass = colors[color].split(' ')[0];
  const borderClass = colors[color].split(' ')[1];
  const gradientFrom = colors[color].split(' ')[2];
  const gradientTo = colors[color].split(' ')[3];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`group relative p-5 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} border ${borderClass} hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      {/* Hover Glow */}
      <div className={`absolute -inset-2 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />

      <div className="relative">
        <div className={`mb-3 ${colorClass}`}>{icon}</div>
        <div className="text-3xl font-black text-white mb-1">{value}</div>
        <div className="text-xs text-gray-400 font-medium leading-tight">{label}</div>
      </div>
    </motion.div>
  );
}
