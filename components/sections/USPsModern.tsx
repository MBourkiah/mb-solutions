"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Clock,
  Lock,
  Server,
  Headphones,
  Rocket,
  FileCheck,
} from "lucide-react";

/**
 * MB-Solutions Modern USPs - Full Width Edition
 *
 * Enterprise-Level USP Section mit:
 * - Full-width edge-to-edge Layout
 * - Massive Typography (text-8xl)
 * - Premium Spacing & Ambient Glows
 * - 8 USP Cards mit Hover Effects
 * - Smooth Transitions
 */

export function USPsModern() {
  const usps = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance-First",
      description: "98+ Lighthouse Score als Standard. Optimiert für maximale Speed und Conversion.",
      color: "cyan",
      gradient: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Antwort in <2h",
      description: "Technischer Support, der wirklich da ist. Reaktionszeit unter 2 Stunden.",
      color: "blue",
      gradient: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DSGVO-konform",
      description: "100% deutsche Server, vollständige DSGVO-Compliance inklusive.",
      color: "green",
      gradient: "from-green-500/20 to-green-500/5",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-Level Sicherheit mit SSL, Backups und Security-Monitoring.",
      color: "purple",
      gradient: "from-purple-500/20 to-purple-500/5",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "99.9% Uptime",
      description: "Hochverfügbare Infrastruktur mit 24/7 System-Monitoring.",
      color: "orange",
      gradient: "from-orange-500/20 to-orange-500/5",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Persönlicher Support",
      description: "Ein fester Ansprechpartner für Ihr Projekt. Keine Warteschlangen.",
      color: "pink",
      gradient: "from-pink-500/20 to-pink-500/5",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Skalierbare Architektur",
      description: "Infrastruktur, die mit Ihrem Erfolg mitwächst. Von 100 auf 100k Nutzer.",
      color: "indigo",
      gradient: "from-indigo-500/20 to-indigo-500/5",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Transparente Dokumentation",
      description: "Vollständige Projektdokumentation und Code-Kommentare inklusive.",
      color: "emerald",
      gradient: "from-emerald-500/20 to-emerald-500/5",
    },
  ];

  return (
    <section id="expertise" className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
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

      {/* Ambient Glow Effects - Multiple Layers */}
      <div className="absolute top-1/3 left-0 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute top-2/3 right-0 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-gray-300">Warum MB-Solutions?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1.05]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Technologie, die überzeugt
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light"
          >
            Enterprise-Level Qualität für den Mittelstand. Keine Kompromisse bei
            Performance, Sicherheit und Service.
          </motion.p>
        </div>

        {/* USP Grid - Premium Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {usps.map((usp, index) => (
            <USPCard key={index} {...usp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function USPCard({
  icon,
  title,
  description,
  color,
  gradient,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
  index: number;
}) {
  const iconColors: Record<string, string> = {
    cyan: "text-cyan-400 border-cyan-500/30",
    blue: "text-blue-400 border-blue-500/30",
    green: "text-green-400 border-green-500/30",
    purple: "text-purple-400 border-purple-500/30",
    orange: "text-orange-400 border-orange-500/30",
    pink: "text-pink-400 border-pink-500/30",
    indigo: "text-indigo-400 border-indigo-500/30",
    emerald: "text-emerald-400 border-emerald-500/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 shadow-lg hover:shadow-2xl"
    >
      {/* Hover Glow Effect */}
      <div className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative text-center">
        {/* Icon Container */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${gradient} border ${iconColors[color]} ${iconColors[color].split(' ')[0]} shadow-xl`}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-black text-white mb-3 leading-tight">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
