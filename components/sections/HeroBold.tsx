"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * BOLD ANTI-AGENCY HERO
 *
 * Design Philosophy:
 * - Break patterns, not follow them
 * - Asymmetric layout (left-heavy)
 * - Typography-first approach
 * - Live data widget (not static badges)
 * - Provocative, direct copy
 * - No bullshit, just results
 *
 * Why this converts:
 * ✅ Pattern interruption → attention
 * ✅ Confidence → trust
 * ✅ Specificity → credibility
 * ✅ Live data → proof
 * ✅ Clear CTA → action
 */

export function HeroBold() {
  const [deployCount, setDeployCount] = useState(127);
  const [avgScore, setAvgScore] = useState(98.4);

  // Simulate live data (replace with real API)
  useEffect(() => {
    const interval = setInterval(() => {
      setDeployCount(prev => prev + Math.floor(Math.random() * 3));
      setAvgScore(prev => Math.min(99.9, prev + (Math.random() * 0.2 - 0.1)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A0E27]">

      {/* Minimal background - just subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Accent glow - top right only */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">

        {/* Asymmetric Grid: 2/3 left, 1/3 right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* LEFT: Content (spans 2 columns on desktop) */}
          <div className="lg:col-span-2 space-y-8 md:space-y-10">

            {/* Headline - Massive, Bold, Opinionated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter">
                <span className="block text-gray-500">Keine</span>
                <span className="block text-gray-500">Marketing-Floskeln.</span>
                <span className="block text-white mt-2">
                  Nur Websites,
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  die verkaufen.
                </span>
              </h1>

              {/* Subline - Short, sharp */}
              <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl pl-1">
                Schnell. Messbar. <span className="text-white">Ohne Agentur-Theater.</span>
              </p>
            </motion.div>

            {/* CTA - Single, clear action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0A0E27] rounded-lg font-bold text-lg hover:bg-cyan-50 transition-all duration-200 hover:gap-4"
              >
                <span>Echte Zahlen sehen</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="#methode"
                className="inline-flex items-center gap-2 px-8 py-4 text-gray-400 font-semibold text-lg hover:text-white transition-colors"
              >
                <span>Wie wir arbeiten</span>
              </Link>
            </motion.div>

            {/* Social Proof - Minimal, specific */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 pt-4 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span>Köln</span>
              </div>
              <div className="w-px h-4 bg-gray-800" />
              <span>Seit 2019</span>
              <div className="w-px h-4 bg-gray-800" />
              <span className="text-white font-medium">50+ Projekte</span>
            </motion.div>

          </div>

          {/* RIGHT: Live Metric Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="sticky top-24 space-y-6">

              {/* Metric Card 1 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    Diesen Monat
                  </span>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <motion.div
                  key={deployCount}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  className="space-y-1"
                >
                  <div className="text-4xl font-black text-white tabular-nums">
                    {deployCount}
                  </div>
                  <div className="text-sm text-gray-400">
                    Deployments live
                  </div>
                </motion.div>
              </div>

              {/* Metric Card 2 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    Ø Performance
                  </span>
                  <div className="text-xs font-mono text-cyan-400">
                    Lighthouse
                  </div>
                </div>
                <motion.div
                  key={avgScore}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  className="space-y-1"
                >
                  <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tabular-nums">
                    {avgScore.toFixed(1)}
                  </div>
                  <div className="text-sm text-gray-400">
                    von 100 Punkten
                  </div>
                </motion.div>
              </div>

              {/* Provocation line */}
              <p className="text-xs text-gray-600 italic pl-1">
                "Aber kann man das messen?"<br />
                Ja. Genau das ist der Punkt.
              </p>

            </div>
          </motion.div>

        </div>

        {/* Mobile metric widget - simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:hidden mt-12 grid grid-cols-2 gap-4"
        >
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="text-3xl font-black text-white tabular-nums mb-1">
              {deployCount}
            </div>
            <div className="text-xs text-gray-500">Deployments</div>
          </div>
          <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/10">
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tabular-nums mb-1">
              {avgScore.toFixed(1)}
            </div>
            <div className="text-xs text-gray-500">Ø Speed</div>
          </div>
        </motion.div>

        {/* Scroll indicator - minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hidden md:block absolute bottom-12 left-12"
        >
          <div className="flex items-center gap-3 text-gray-600">
            <div className="text-xs font-mono uppercase tracking-wider">Scroll</div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-16 bg-gradient-to-b from-gray-600 to-transparent"
            />
          </div>
        </motion.div>

      </div>

    </section>
  );
}
