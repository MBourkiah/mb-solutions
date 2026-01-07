"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Timer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * CONTROL ROOM HERO + HEADER SYSTEM
 *
 * Design Philosophy: "The Control Room"
 * - Header floats INSIDE hero (not above)
 * - Full-width, edge-to-edge system
 * - Asymmetric layout: 55% text, 45% visual
 * - Deep atmospheric background
 * - Floating performance dashboard
 * - Feels like a product, not an agency
 *
 * Visual Layers:
 * 1. Background image (dark tech environment)
 * 2. Gradient vignette (text contrast)
 * 3. Content (text + dashboard panel)
 * 4. Grain texture (premium feel)
 * 5. Floating header (control bar)
 */

export function HeroControlRoom() {
  const [perfScore, setPerfScore] = useState(98.4);
  const [loadTime, setLoadTime] = useState(1.8);

  // Simulate live metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setPerfScore(prev => Math.min(99.9, prev + (Math.random() * 0.3 - 0.1)));
      setLoadTime(prev => Math.max(1.2, Math.min(2.1, prev + (Math.random() * 0.2 - 0.1))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen min-h-screen flex items-center overflow-hidden">

      {/* ============================================ */}
      {/* LAYER 1: BACKGROUND IMAGE */}
      {/* ============================================ */}
      <div className="absolute inset-0 z-0">
        {/* Hero Background - ACTIVE */}
        <Image
          src="/images/hero-bg.png"
          fill
          className="object-cover"
          alt=""
          priority
          quality={90}
        />
      </div>

      {/* ============================================ */}
      {/* LAYER 2: ENHANCED GRADIENT VIGNETTE (Perfect Text Contrast) */}
      {/* ============================================ */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 35% 45%, transparent 0%, rgba(5, 8, 18, 0.85) 100%),
            linear-gradient(to right, rgba(10, 14, 39, 0.95) 0%, rgba(10, 14, 39, 0.6) 50%, transparent 70%)
          `
        }}
      />

      {/* ============================================ */}
      {/* LAYER 4: GRAIN TEXTURE OVERLAY */}
      {/* ============================================ */}
      <div className="absolute inset-0 z-30 opacity-[0.06] mix-blend-overlay pointer-events-none">
        {/* Grain Texture - ACTIVE (IDEOGRAM Image #2) - Increased to 6% for visible premium effect */}
        <Image
          src="/images/grain-texture.png"
          fill
          className="object-cover"
          alt=""
          quality={100}
        />
      </div>

      {/* ============================================ */}
      {/* LAYER 5: FLOATING HEADER (Control Bar) */}
      {/* ============================================ */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 z-50"
      >
        <nav className="relative">
          {/* Top Status Bar - Only on Desktop */}
          <div className="hidden lg:block bg-black/40 backdrop-blur-xl border-b border-cyan-500/20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-between h-8 text-xs">
                {/* Left: System Status */}
                <div className="flex items-center gap-4 font-mono text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-cyan-400">⚡</span>
                    <span>127 DEPLOYMENTS</span>
                  </div>
                </div>
                {/* Right: Location */}
                <div className="font-mono text-gray-500">
                  <span className="text-cyan-400">📍</span> KÖLN, DE
                </div>
              </div>
            </div>
          </div>

          {/* Main Nav Bar */}
          <div className="bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-2xl border-b border-white/10">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-between h-16">

                {/* Logo - Original zurück */}
                <Link href="/" className="flex items-center group">
                  <Image
                    src="/logo.svg"
                    alt="MB-Solutions"
                    width={140}
                    height={35}
                    priority
                    className="h-7 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6">
                  <Link
                    href="/projects"
                    className="group flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Projekte</span>
                  </Link>
                  <Link
                    href="#methode"
                    className="group flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Methode</span>
                  </Link>

                  {/* Live Metrics Display */}
                  <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-md">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-xs font-mono text-white">98.4</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-md">
                      <Timer className="w-3 h-3 text-cyan-400" />
                      <span className="text-xs font-mono text-white">1.7s</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-bold text-sm hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                >
                  <Zap className="w-4 h-4" />
                  <span>Projekt starten</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Mobile: CTA + Menu */}
                <div className="flex lg:hidden items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-bold text-sm"
                  >
                    <span>Start</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ============================================ */}
      {/* LAYER 3: MAIN CONTENT (Text + Dashboard) */}
      {/* ============================================ */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-32 lg:py-40">

        {/* Asymmetric Grid: 55% Text | 45% Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT: TEXT ZONE (7 columns = ~58%) */}
          <div className="lg:col-span-7 space-y-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-500/20 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-cyan-100">Verfügbar für neue Projekte</span>
            </motion.div>

            {/* Headline - Enhanced text shadows for perfect readability */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
            >
              <span
                className="block text-white"
                style={{
                  textShadow: '0 2px 40px rgba(0, 0, 0, 0.9), 0 0 60px rgba(6, 182, 212, 0.2)'
                }}
              >
                Wir bauen keine Websites.
              </span>
              <span
                className="block mt-2"
                style={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 80px rgba(6, 182, 212, 0.4)'
                }}
              >
                Wir bauen Umsatzmaschinen.
              </span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              Unter 2 Sekunden Ladezeit. Conversion-optimiertes Design.{" "}
              <span className="text-white font-semibold">Null Agentur-Theater.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-lg text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                <span>Live-Demo ansehen</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#methode"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
              >
                <span>Unsere Methode</span>
              </Link>
            </motion.div>

            {/* Trust Line - Specific, measurable metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-sm"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-white font-semibold">+340% ROI</span>
                <span className="text-gray-500">Ø bei Kunden</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-cyan-400" />
                <span className="text-white font-semibold">47 Min.</span>
                <span className="text-gray-500">Reaktionszeit</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <span className="text-white font-medium">127 Live-Projekte</span>
            </motion.div>

          </div>

          {/* RIGHT: FLOATING DASHBOARD PANEL (5 columns = ~42%) */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div
              className="relative"
              style={{ transform: 'perspective(1000px) rotateY(-2deg)' }}
            >

              {/* Dashboard Panel Container */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl">

                {/* Panel Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Live Performance
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400 font-medium">LIVE</span>
                  </div>
                </div>

                {/* Main Metric - Performance Score */}
                <motion.div
                  key={perfScore}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  className="mb-8"
                >
                  <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tabular-nums mb-2">
                    {perfScore.toFixed(1)}
                  </div>
                  <div className="text-sm text-gray-400 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>Lighthouse Score</span>
                  </div>
                </motion.div>

                {/* Simulated Graph Placeholder */}
                <div className="mb-6 h-32 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-4 flex items-end justify-between gap-2">
                  {/* Simulated bar chart */}
                  {[85, 92, 88, 95, 91, 98, 94, 97, 99, 98].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.05 }}
                      className="flex-1 bg-gradient-to-t from-cyan-400 to-blue-400 rounded-sm origin-bottom opacity-60"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                {/* Metric Cards Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Load Time Card */}
                  <motion.div
                    key={loadTime}
                    initial={{ scale: 1.02 }}
                    animate={{ scale: 1 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Timer className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-gray-400">Load Time</span>
                    </div>
                    <div className="text-2xl font-black text-white tabular-nums">
                      {loadTime.toFixed(1)}s
                    </div>
                  </motion.div>

                  {/* Uptime Card */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-gray-400">Uptime</span>
                    </div>
                    <div className="text-2xl font-black text-white">
                      99.9%
                    </div>
                  </div>
                </div>

                {/* Bottom Note */}
                <p className="mt-6 text-xs text-gray-500 italic">
                  "Aber kann man das messen?"<br />
                  Ja. Genau das ist der Punkt.
                </p>

              </div>

              {/* Floating Shadow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10 opacity-50" />

            </div>
          </motion.div>

        </div>

        {/* Mobile Dashboard - Simplified metrics for small screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:hidden mt-12 grid grid-cols-2 gap-4"
        >
          <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
            <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tabular-nums mb-2">
              {perfScore.toFixed(1)}
            </div>
            <div className="text-xs text-gray-400">Lighthouse Score</div>
          </div>
          <div className="p-5 rounded-xl bg-white/[0.05] border border-white/10">
            <div className="text-4xl font-black text-white tabular-nums mb-2">
              {loadTime.toFixed(1)}s
            </div>
            <div className="text-xs text-gray-400">Load Time</div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-20" />

    </section>
  );
}
