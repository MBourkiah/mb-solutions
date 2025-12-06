"use client";

/**
 * 404 Not Found Page - Premium Dark Design
 *
 * Design: Matches main site aesthetic (Vercel/Linear-inspired)
 * Features:
 * - Animated 404 number
 * - Glassmorphism effects
 * - Helpful navigation links
 * - Search suggestion (optional)
 */

import Link from "next/link";
import { ArrowLeft, Home, Search, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#0A0E27] text-white overflow-hidden flex items-center justify-center">
      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div
          className="absolute top-1/4 right-1/4 w-[800px] h-[800px] rounded-full blur-[180px]"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-[180px]"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Animated 404 Number */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-[280px] font-black bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-2xl">
              404
            </span>
          </div>
          <h1 className="relative text-[180px] sm:text-[220px] md:text-[280px] font-black leading-none tracking-tighter">
            <span className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              404
            </span>
          </h1>
        </div>

        {/* Glass Card with Content */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
              <FileQuestion className="w-10 h-10 text-cyan-400" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Seite nicht gefunden
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.
              <br />
              Keine Sorge – wir helfen Ihnen, den richtigen Weg zu finden.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {/* Primary CTA - Home */}
              <Link
                href="/"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Zur Startseite
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
              </Link>

              {/* Secondary CTA - Back */}
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5" />
                Zurück
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 text-sm text-white/40 bg-[#0A0E27]">
                  Beliebte Seiten
                </span>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/webdesign-koeln"
                className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-cyan-400 font-semibold mb-2 group-hover:translate-x-1 transition-transform duration-300">
                  Webdesign →
                </div>
                <p className="text-sm text-white/50">
                  Websites für Köln
                </p>
              </Link>

              <Link
                href="/it-services-koeln"
                className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-blue-400 font-semibold mb-2 group-hover:translate-x-1 transition-transform duration-300">
                  IT-Services →
                </div>
                <p className="text-sm text-white/50">
                  IT-Support & Cloud
                </p>
              </Link>

              <Link
                href="/marketing-agentur-koeln"
                className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-purple-400 font-semibold mb-2 group-hover:translate-x-1 transition-transform duration-300">
                  Marketing →
                </div>
                <p className="text-sm text-white/50">
                  SEO & Google Ads
                </p>
              </Link>
            </div>

            {/* Contact Link */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/50 mb-4">
                Brauchen Sie Hilfe? Kontaktieren Sie uns.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
              >
                Zum Kontaktformular
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-sm text-white/30">
          Fehlercode: 404 | Seite nicht gefunden
        </p>
      </div>
    </main>
  );
}
