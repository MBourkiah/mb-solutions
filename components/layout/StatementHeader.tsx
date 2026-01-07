"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function StatementHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  if (typeof window !== "undefined") {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <>
      {/* DESKTOP & MOBILE HEADER - Minimal Top Strip */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-12 lg:h-14">

            {/* LEFT: Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.svg"
                alt="MB-Solutions"
                width={160}
                height={40}
                priority
                className="h-6 lg:h-7 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* CENTER: Minimal Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/services"
                className="px-3 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white transition-colors"
              >
                Leistungen
              </Link>
              <span className="text-gray-700">·</span>
              <Link
                href="/projects"
                className="px-3 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white transition-colors"
              >
                Projekte
              </Link>
              <span className="text-gray-700">·</span>
              <Link
                href="#methode"
                className="px-3 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white transition-colors"
              >
                Methode
              </Link>
            </nav>

            {/* RIGHT: Minimal CTA */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-1.5 text-[13px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              <span>Starten</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </header>

      {/* MOBILE: Full-Screen Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#0A0E27] flex flex-col justify-center items-center animate-in fade-in duration-200">
          <nav className="flex flex-col items-center gap-8">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors"
            >
              Leistungen
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors"
            >
              Projekte
            </Link>
            <Link
              href="#methode"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors"
            >
              Methode
            </Link>
          </nav>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute bottom-12 flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg"
          >
            <span>Projekt starten</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </>
  );
}
