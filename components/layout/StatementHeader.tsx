"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";

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
      {/* DESKTOP & MOBILE HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Slim Status Bar */}
        <div className="bg-black/30 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-6 text-[11px]">
              <div className="flex items-center gap-3 text-gray-500">
                <a href="mailto:kontakt@mb-solutions.de" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <span className="font-medium">kontakt@mb-solutions.de</span>
                </a>
                <div className="hidden sm:flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  <span className="font-medium">127 Projekte</span>
                </div>
              </div>
              <a href="tel:+4922112345678" className="text-gray-500 hover:text-cyan-400 font-medium transition-colors">
                +49 221 1234 5678
              </a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-gradient-to-b from-black/60 via-black/50 to-transparent backdrop-blur-2xl border-b border-white/5">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-14 lg:h-16">

              {/* LEFT: Logo */}
              <Link href="/" className="flex items-center group relative">
                <Image
                  src="/logo.svg"
                  alt="MB-Solutions"
                  width={160}
                  height={40}
                  priority
                  className="h-7 lg:h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity relative z-10"
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 blur-xl bg-cyan-500/0 group-hover:bg-cyan-500/20 transition-all duration-500 -z-10" />
              </Link>

              {/* CENTER: Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                <Link
                  href="/services"
                  className="group relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <span className="relative z-10">Leistungen</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-px bg-cyan-400 transition-all duration-300" />
                </Link>
                <Link
                  href="/projects"
                  className="group relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <span className="relative z-10">Projekte</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-px bg-cyan-400 transition-all duration-300" />
                </Link>
                <Link
                  href="#methode"
                  className="group relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <span className="relative z-10">Methode</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-px bg-cyan-400 transition-all duration-300" />
                </Link>
              </nav>

              {/* RIGHT: CTA */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Projekt starten
                <Zap className="w-4 h-4" />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE: Full-Screen Menu Overlay */}
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

          {/* CTA at Bottom */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute bottom-12 flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-cyan-500/30"
          >
            <span>Projekt starten</span>
            <Zap className="w-5 h-5" />
          </Link>
        </div>
      )}
    </>
  );
}
