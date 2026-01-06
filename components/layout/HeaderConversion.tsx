"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * CONVERSION-OPTIMIZED HEADER
 *
 * Design Principles:
 * - Clear, immediate CTA visibility
 * - Trust signal (phone number) always visible
 * - Simple, scannable navigation
 * - Premium but approachable feel
 * - Sticky with smart transparency
 * - Mobile-first interaction design
 *
 * Conversion Features:
 * ✅ Visible phone number (instant trust)
 * ✅ Prominent "Erstgespräch" CTA
 * ✅ Clean service navigation
 * ✅ No overwhelming dropdown menus
 * ✅ Lightweight, fast-loading
 */

const navLinks = [
  { name: "Leistungen", href: "/#leistungen" },
  { name: "Referenzen", href: "/projects" },
  { name: "Über uns", href: "/about" },
];

export function HeaderConversion() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* ============================================ */}
      {/* MAIN HEADER */}
      {/* ============================================ */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.nav
          animate={{
            backgroundColor: isScrolled
              ? "rgba(10, 14, 39, 0.95)"
              : "rgba(10, 14, 39, 0.7)",
            backdropFilter: isScrolled ? "blur(20px)" : "blur(12px)",
            borderBottomColor: isScrolled
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(255, 255, 255, 0.05)",
          }}
          transition={{ duration: 0.3 }}
          className="border-b"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-18">

              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <Image
                  src="/logo.svg"
                  alt="MB-Solutions"
                  width={160}
                  height={40}
                  priority
                  className="h-8 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* CTA Section - Desktop */}
              <div className="hidden md:flex items-center gap-4">
                {/* Phone Number - Trust Signal */}
                <a
                  href="tel:+4922112345678"
                  className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden lg:inline">0221 / 123 456 78</span>
                </a>

                {/* Primary CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-sm text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-200"
                >
                  <span>Erstgespräch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </motion.nav>
      </motion.header>

      {/* ============================================ */}
      {/* MOBILE MENU */}
      {/* ============================================ */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0A0E27]/98 backdrop-blur-xl z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 w-full max-w-sm mt-8"
            >
              <a
                href="tel:+4922112345678"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-lg text-white bg-white/10 border border-white/20"
              >
                <Phone className="w-5 h-5" />
                <span>0221 / 123 456 78</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-lg text-white"
              >
                <span>Kostenloses Erstgespräch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
