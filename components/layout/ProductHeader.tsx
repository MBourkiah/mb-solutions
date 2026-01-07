"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Timer, Zap, MapPin } from "lucide-react";

export function ProductHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      {/* TOP STATUS BAR - Terminal UI */}
      <div className="border-b border-cyan-500/20 bg-black/40 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 flex items-center justify-between text-xs font-mono">
            {/* Left: System Status */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 uppercase tracking-wider">ONLINE</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-cyan-400">
                <Zap className="w-3 h-3" />
                <span>127 DEPLOYMENTS</span>
              </div>
            </div>

            {/* Right: Location */}
            <div className="flex items-center gap-1.5 text-gray-400">
              <MapPin className="w-3 h-3" />
              <span>KÖLN, DE</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <div className="border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">

            {/* Logo - Icon-first design */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Gradient Box with MB Initials */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center font-black text-white text-sm"
              >
                MB
              </motion.div>
              {/* "Solutions" text - only on sm+ */}
              <span className="hidden sm:block text-white font-bold text-lg tracking-tight">
                Solutions
              </span>
            </Link>

            {/* Navigation + Metrics */}
            <div className="flex items-center gap-6 lg:gap-8">

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                <Link
                  href="/projects"
                  className="group relative text-sm font-medium text-gray-300 hover:text-cyan-400 uppercase tracking-wider transition-colors"
                >
                  <span>Projekte</span>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -bottom-1 left-0 w-1 h-1 bg-cyan-400 rounded-full"
                  />
                </Link>
                <Link
                  href="/methode"
                  className="group relative text-sm font-medium text-gray-300 hover:text-cyan-400 uppercase tracking-wider transition-colors"
                >
                  <span>Methode</span>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -bottom-1 left-0 w-1 h-1 bg-cyan-400 rounded-full"
                  />
                </Link>
              </nav>

              {/* Live Metrics Badges */}
              <div className="hidden lg:flex items-center gap-3 border-l border-white/10 pl-6">
                {/* Performance Score */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-xs font-mono text-green-400">98.4</span>
                </div>
                {/* Response Time */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  <Timer className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs font-mono text-cyan-400">1.7s</span>
                </div>
              </div>

              {/* CTA Button with Shimmer Effect */}
              <Link
                href="/contact"
                className="relative group px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold uppercase tracking-wider overflow-hidden hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Projekt Starten
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Shimmer effect */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                  }}
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
