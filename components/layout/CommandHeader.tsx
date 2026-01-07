"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Zap, Menu, X } from "lucide-react";

export function CommandHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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

  return (
    <>
      {/* DESKTOP: Floating Command Bar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[600px] px-4"
      >
        <nav
          className={`
            relative flex items-center justify-between h-12 px-6 rounded-full
            border transition-all duration-500
            ${
              scrolled
                ? "bg-black/80 backdrop-blur-2xl border-white/20 shadow-xl shadow-black/40"
                : "bg-black/20 backdrop-blur-xl border-white/10"
            }
          `}
        >
          {/* Left: Brand Icon */}
          <Link href="/" className="flex items-center group">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <span className="text-[10px] font-black text-white">MB</span>
            </div>
          </Link>

          {/* Center: Navigation Tokens */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
            <Link
              href="#systeme"
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
            >
              Systeme
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="#ablauf"
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
            >
              Ablauf
            </Link>
          </div>

          {/* Right: CTA */}
          <Link
            href="/contact"
            className="group flex items-center gap-1.5 px-4 py-1.5 bg-white text-black rounded-full text-sm font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-white/20 transition-all"
          >
            <span>Projekt starten</span>
            <Zap className="w-3.5 h-3.5 group-hover:text-cyan-600 transition-colors" />
          </Link>
        </nav>
      </motion.header>

      {/* MOBILE: Custom Compact Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10"
      >
        <div className="flex items-center justify-between h-14 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <span className="text-xs font-black text-white">MB</span>
            </div>
          </Link>

          {/* Right Cluster */}
          <div className="flex items-center gap-3">
            {/* Compact CTA */}
            <Link
              href="/contact"
              className="flex items-center gap-1 px-3 py-1.5 bg-white text-black rounded-full text-xs font-bold"
            >
              Start
              <Zap className="w-3 h-3" />
            </Link>

            {/* Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE: Bottom Sheet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A0E27] border-t border-white/10 rounded-t-3xl"
            >
              <div className="p-8 pb-12 space-y-6">
                {/* Navigation Items */}
                <div className="space-y-4">
                  <Link
                    href="#systeme"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    Systeme
                  </Link>
                  <Link
                    href="#ablauf"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    Ablauf
                  </Link>
                </div>

                {/* Footer Info */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-500">
                    Verfügbar für neue Projekte
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Reaktionszeit: &lt;47 Min.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
