"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, BarChart3, Globe, Shield, Code2 } from "lucide-react";

/**
 * Hero21st - Premium 3D Perspective Hero
 *
 * Verbesserungen v2:
 * - Realistischeres Dashboard-Preview mit mehr Details
 * - Stärkerer 3D-Effekt mit Schatten
 * - Animierter Pulse auf Status Badge
 * - Tech-Stack mit Icons statt nur Text
 * - Besseres Spacing zum Header
 * - Hover-Effekte auf Dashboard
 */

// Tech Stack mit Icons
const techStack = [
  { name: "Next.js", icon: Globe },
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Shield },
  { name: "Tailwind", icon: Zap },
  { name: "Node.js", icon: BarChart3 },
  { name: "Vercel", icon: TrendingUp },
];

export function Hero21st() {
  return (
    <div className="relative bg-[#0A0E27] text-white overflow-hidden">
      {/* Ambient Background Effects - Verstärkt */}
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-60 contain-strict hidden lg:block"
      >
        <div className="w-[40rem] h-[80rem] -translate-y-[50%] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(190,100%,60%,.12)_0,hsla(210,100%,50%,.04)_50%,hsla(220,100%,45%,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-72 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(190,100%,60%,.08)_0,hsla(210,100%,50%,.03)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-[50%] absolute right-0 top-0 w-72 rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(280,100%,60%,.06)_0,hsla(260,100%,50%,.03)_80%,transparent_100%)]" />
      </div>

      {/* Accent Glow - Verstärkt */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-bl from-cyan-500/15 via-blue-500/8 to-transparent rounded-full blur-[150px] pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 via-blue-500/5 to-transparent rounded-full blur-[120px] pointer-events-none z-[1]" />

      {/* Main Hero Section - Mehr Padding Top */}
      <section className="relative z-10">
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="relative z-10 mx-auto max-w-3xl text-center">

            {/* Status Badge - Mit verstärktem Pulse */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-10"
            >
              <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
                {/* Animated Pulse Ring */}
                <span className="absolute inset-0 rounded-full animate-ping bg-cyan-400/20" style={{ animationDuration: '2s' }} />
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-sm font-bold text-cyan-100 tracking-wide">
                  Verfügbar für neue Projekte
                </span>
              </div>
            </motion.div>

            {/* Headline - Größer */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-balance text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8"
            >
              <span className="block text-white mb-2">Digitale Lösungen.</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Messbare Erfolge.
              </span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg lg:text-xl text-gray-300 leading-relaxed"
            >
              Webdesign, IT-Services und Marketing aus einer Hand – für
              Unternehmen, die nicht nur online sein, sondern online wachsen
              wollen.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-lg text-white shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105 transition-all duration-300"
              >
                <span>Projekt starten</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 rounded-2xl font-semibold text-lg text-white transition-all duration-300"
              >
                <span>Leistungen entdecken</span>
                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap"
            >
              <div className="text-center group cursor-default">
                <div className="text-4xl font-black text-white mb-1 group-hover:scale-110 transition-transform">127</div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Projekte</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
              <div className="text-center group cursor-default">
                <div className="text-4xl font-black text-white mb-1 group-hover:scale-110 transition-transform">&lt;47min</div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Response</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
              <div className="text-center group cursor-default">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                  98+
                </div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Performance</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3D Perspective Dashboard Preview - VERBESSERT */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-7xl [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
        >
          <div className="[perspective:1500px] px-6 lg:px-20">
            <div className="[transform:rotateX(25deg)] hover:[transform:rotateX(15deg)] transition-transform duration-700">
              <div className="lg:h-[42rem] relative skew-x-[.32rad] hover:skew-x-[.28rad] transition-transform duration-700">

                {/* Dashboard Preview - Realistischer */}
                <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-[#0f1629] to-[#0a0e1a] overflow-hidden shadow-[0_0_100px_-20px_rgba(6,182,212,0.3)]">

                  {/* Browser Chrome - Premium */}
                  <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent">
                    <div className="flex gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                      <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                      <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white/5 border border-white/10">
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        <span className="text-sm text-gray-400 font-mono">mb-solutions.biz/dashboard</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-8 lg:p-10">

                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Analytics Dashboard</h3>
                        <p className="text-sm text-gray-500">Letzte 30 Tage • Echtzeit-Daten</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                          Live
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-sm">
                          Export
                        </div>
                      </div>
                    </div>

                    {/* Metrics Row - Verbessert */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                      {[
                        { label: "Website Traffic", value: "+284%", trend: "+12% vs. Vormonat", color: "cyan", icon: TrendingUp },
                        { label: "Conversions", value: "+127%", trend: "+8% vs. Vormonat", color: "blue", icon: Users },
                        { label: "Performance", value: "98/100", trend: "Lighthouse Score", color: "purple", icon: Zap },
                        { label: "Uptime", value: "99.9%", trend: "Letzte 90 Tage", color: "green", icon: Shield },
                      ].map((metric, i) => {
                        const Icon = metric.icon;
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-white/20 transition-colors group"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs text-gray-500 font-medium">{metric.label}</span>
                              <Icon className={cn(
                                "w-4 h-4",
                                metric.color === "cyan" && "text-cyan-400",
                                metric.color === "blue" && "text-blue-400",
                                metric.color === "purple" && "text-purple-400",
                                metric.color === "green" && "text-green-400"
                              )} />
                            </div>
                            <div
                              className={cn(
                                "text-3xl font-bold mb-1 group-hover:scale-105 transition-transform",
                                metric.color === "cyan" && "text-cyan-400",
                                metric.color === "blue" && "text-blue-400",
                                metric.color === "purple" && "text-purple-400",
                                metric.color === "green" && "text-green-400"
                              )}
                            >
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-600">{metric.trend}</div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Chart - Verbesserter Linien-Chart */}
                    <div className="rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 p-6">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-medium text-white">Traffic-Entwicklung</span>
                        <div className="flex gap-4 text-xs">
                          <span className="flex items-center gap-2"><span className="w-3 h-0.5 bg-cyan-400 rounded" />Besucher</span>
                          <span className="flex items-center gap-2"><span className="w-3 h-0.5 bg-purple-400 rounded" />Conversions</span>
                        </div>
                      </div>

                      {/* SVG Line Chart */}
                      <div className="h-40 relative">
                        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                          {/* Grid Lines */}
                          <defs>
                            <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
                            </linearGradient>
                          </defs>

                          {/* Cyan Area */}
                          <path
                            d="M0,80 Q50,70 100,50 T200,40 T300,25 T400,15 L400,100 L0,100 Z"
                            fill="url(#cyanGradient)"
                          />
                          {/* Cyan Line */}
                          <path
                            d="M0,80 Q50,70 100,50 T200,40 T300,25 T400,15"
                            fill="none"
                            stroke="rgb(6, 182, 212)"
                            strokeWidth="2"
                          />

                          {/* Purple Area */}
                          <path
                            d="M0,90 Q50,85 100,75 T200,65 T300,55 T400,45 L400,100 L0,100 Z"
                            fill="url(#purpleGradient)"
                          />
                          {/* Purple Line */}
                          <path
                            d="M0,90 Q50,85 100,75 T200,65 T300,55 T400,45"
                            fill="none"
                            stroke="rgb(168, 85, 247)"
                            strokeWidth="2"
                          />

                          {/* Data Points */}
                          <circle cx="100" cy="50" r="4" fill="rgb(6, 182, 212)" />
                          <circle cx="200" cy="40" r="4" fill="rgb(6, 182, 212)" />
                          <circle cx="300" cy="25" r="4" fill="rgb(6, 182, 212)" />
                          <circle cx="400" cy="15" r="4" fill="rgb(6, 182, 212)" />
                        </svg>

                        {/* X-Axis Labels */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600 pt-2">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mär</span>
                          <span>Apr</span>
                          <span>Mai</span>
                          <span>Jun</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section - Mit Icons */}
      <section className="relative z-10 py-20 border-t border-white/5">
        <div className="m-auto max-w-5xl px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-12"
          >
            Technologien, die wir einsetzen
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 sm:grid-cols-6 gap-4"
          >
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all cursor-default"
                >
                  <Icon className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-[5]" />
    </div>
  );
}

export default Hero21st;
