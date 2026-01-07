"use client";

import { useState } from "react";
import Link from "next/link";

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
      <header className="sticky top-0 z-50 bg-[#0A0E27] border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px] lg:h-[88px]">

            {/* LEFT: Brand Block */}
            <Link href="/" className="flex flex-col -space-y-1">
              <div className="text-xl lg:text-2xl font-black tracking-tight text-white">
                MB SOLUTIONS
              </div>
              <div className="text-[10px] lg:text-xs font-semibold text-cyan-400 tracking-wide">
                Revenue Machines
              </div>
            </Link>

            {/* CENTER-RIGHT: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/services"
                className="text-sm font-medium text-gray-300 hover:text-white underline-offset-4 decoration-2 hover:underline transition-all"
              >
                Leistungen
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-gray-300 hover:text-white underline-offset-4 decoration-2 hover:underline transition-all"
              >
                Projekte
              </Link>
              <Link
                href="#methode"
                className="text-sm font-medium text-gray-300 hover:text-white underline-offset-4 decoration-2 hover:underline transition-all"
              >
                Methode
              </Link>
            </nav>

            {/* RIGHT: CTA (Desktop) */}
            <Link
              href="/contact"
              className="hidden lg:block px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold text-sm transition-all duration-200"
            >
              Kontakt
            </Link>

            {/* RIGHT: Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-sm font-bold text-white tracking-wider"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "CLOSE" : "MENU"}
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
            className="absolute bottom-12 px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold text-lg"
          >
            Kontakt
          </Link>
        </div>
      )}
    </>
  );
}
