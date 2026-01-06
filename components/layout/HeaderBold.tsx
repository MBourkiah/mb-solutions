"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * BOLD ANTI-AGENCY HEADER
 *
 * Design Philosophy:
 * - Control panel, not navbar
 * - Brutally minimal navigation
 * - Logo + 2 actions only
 * - No phone number (reduces trust theater)
 * - Mobile: Logo disappears, actions stay
 * - Fast, functional, focused
 *
 * Why this works:
 * ✅ Reduces decision paralysis
 * ✅ Forces content to do the selling
 * ✅ Pattern interruption
 * ✅ Confidence signal (less = more)
 */

export function HeaderBold() {
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
      {/* MAIN HEADER - CONTROL PANEL DESIGN */}
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
              ? "rgba(10, 14, 39, 0.98)"
              : "rgba(10, 14, 39, 0.7)",
            backdropFilter: isScrolled ? "blur(20px)" : "blur(12px)",
            borderBottomColor: isScrolled
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(255, 255, 255, 0.03)",
          }}
          transition={{ duration: 0.3 }}
          className="border-b"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex items-center justify-between h-14 md:h-16">

              {/* Logo - Hides on mobile to maximize space */}
              <Link href="/" className="hidden md:flex items-center group">
                <Image
                  src="/logo.svg"
                  alt="MB-Solutions"
                  width={160}
                  height={40}
                  priority
                  className="h-7 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </Link>

              {/* Desktop Actions - Minimal, just 2 buttons */}
              <div className="hidden md:flex items-center gap-3 ml-auto">
                <Link
                  href="/projects"
                  className="text-sm font-semibold text-gray-400 hover:text-white transition-colors px-4 py-2"
                >
                  Arbeit
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-white text-[#0A0E27] rounded-lg font-bold text-sm hover:bg-gray-100 transition-all duration-200"
                >
                  <span>Start</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile: Full-width action buttons */}
              <div className="flex md:hidden items-center justify-between w-full gap-3">
                <Link
                  href="/projects"
                  className="text-sm font-semibold text-gray-400 hover:text-white transition-colors px-3 py-2"
                >
                  Arbeit
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#0A0E27] rounded-lg font-bold text-sm"
                >
                  <span>Start</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Mobile menu toggle - minimal */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Menu"
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      </motion.header>

      {/* ============================================ */}
      {/* MOBILE MENU - MINIMAL */}
      {/* ============================================ */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0A0E27]/98 backdrop-blur-xl z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex flex-col items-start justify-center h-full gap-8 px-8">
            {[
              { name: "Arbeit sehen", href: "/projects" },
              { name: "Methode", href: "#methode" },
              { name: "Start", href: "/contact" },
            ].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Contact info - minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-sm text-gray-500"
            >
              <p>Köln · Seit 2019</p>
              <p className="text-white font-medium mt-1">0221 / 123 456 78</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
