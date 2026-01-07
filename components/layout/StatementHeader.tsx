"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <header className="sticky top-0 z-50 bg-[#0A0E27]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* LEFT: Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.svg"
                alt="MB-Solutions"
                width={160}
                height={40}
                priority
                className="h-8 lg:h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* CENTER: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/services"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Leistungen
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Projekte
              </Link>
              <Link
                href="#methode"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Methode
              </Link>
            </nav>

            {/* RIGHT: CTA (Desktop) */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-sm hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              Projekt starten
            </Link>

            {/* RIGHT: Mobile Menu Toggle */}
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
            className="absolute bottom-12 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-cyan-500/30"
          >
            Projekt starten
          </Link>
        </div>
      )}
    </>
  );
}
