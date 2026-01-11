"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * STATEMENT HEADER - Modern & Clean
 *
 * Desktop:
 * - Glassmorphism background
 * - Logo left, nav center, CTA right
 * - Scroll-based background opacity
 *
 * Mobile:
 * - Slide-in menu from right
 * - Full-height overlay
 * - Animated menu items
 */

export function StatementHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#systeme", label: "Leistungen" },
    { href: "#ablauf", label: "Prozess" },
    { href: "/projekte", label: "Projekte" },
  ];

  return (
    <>
      {/* DESKTOP & MOBILE HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
            : "bg-black/20 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* LEFT: Logo */}
            <Link href="/" className="flex items-center group relative z-10">
              <Image
                src="/logo.svg"
                alt="MB-Solutions"
                width={180}
                height={45}
                priority
                className="h-8 lg:h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* CENTER: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors group"
                >
                  <span>{link.label}</span>
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* RIGHT: Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-sm text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              <span>Starten</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all relative z-10"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </motion.header>

      {/* MOBILE: Slide-in Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel - Slide from Right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm z-50 bg-gradient-to-br from-[#0A0E27] to-[#050812] border-l border-white/10 shadow-2xl"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-white/10">
                <Image
                  src="/logo.svg"
                  alt="MB-Solutions"
                  width={160}
                  height={40}
                  className="h-8 w-auto opacity-90"
                />
              </div>

              {/* Menu Content */}
              <div className="flex flex-col justify-between h-[calc(100%-80px)]">

                {/* Navigation Links */}
                <nav className="flex flex-col p-6 gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-4 rounded-xl text-white font-bold text-lg hover:bg-white/5 transition-colors group"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom CTA */}
                <div className="p-6 border-t border-white/10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-black text-base text-white shadow-lg shadow-cyan-500/30"
                    >
                      <span>Projekt starten</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 text-center"
                  >
                    <p className="text-xs text-gray-400 mb-1">Oder direkt anrufen</p>
                    <a href="tel:+491234567890" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                      +49 123 456 7890
                    </a>
                  </motion.div>
                </div>

              </div>

              {/* Accent Glow */}
              <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-cyan-500/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
