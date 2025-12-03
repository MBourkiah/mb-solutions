"use client";

import { motion } from "framer-motion";
import { Code2, Server, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * MB-Solutions Services - BENTO GRID REDESIGN
 *
 * Asymmetrisches Layout:
 * - Webentwicklung = LARGE (Hero Card)
 * - IT-Services = MEDIUM (Compact)
 * - Digitalisierung = WIDE (Horizontal)
 *
 * Inspiration: Apple, Linear, Notion
 */

export function ServicesBento() {
  return (
    <section id="leistungen" className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0E27] to-transparent pointer-events-none z-20" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {/* Header */}
        <div className="max-w-4xl mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-gray-300">Was wir bauen</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1.05]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Full-Service Technologie
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light"
          >
            Von der ersten Zeile Code bis zum laufenden Betrieb. Modernste Technologien für Ihren Erfolg.
          </motion.p>
        </div>

        {/* BENTO GRID - Asymmetrisch */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. WEBENTWICKLUNG - HERO CARD (Large, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 lg:row-span-2 group relative"
          >
            <div className="relative h-full flex flex-col rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl">
              {/* Hover Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image - Large */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02]">
                <Image
                  src="/placeholder-service-web.webp"
                  alt="Webentwicklung Next.js React"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-40 group-hover:opacity-30 transition-opacity duration-500" />

                {/* Icon Badge */}
                <div className="absolute top-6 left-6 p-4 rounded-2xl bg-[#0F1629]/90 backdrop-blur-xl border border-white/10 shadow-xl">
                  <Code2 className="w-7 h-7 text-cyan-400" />
                </div>
              </div>

              {/* Content - Spacious */}
              <div className="relative flex-1 flex flex-col p-8 lg:p-10">
                <div className="mb-4">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">
                    Webentwicklung
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 tracking-wide uppercase">
                    Next.js & React Experts
                  </p>
                </div>

                <p className="text-base lg:text-lg text-gray-300 mb-6 leading-relaxed">
                  Performante, skalierbare Webanwendungen mit modernsten Technologien. Von Landing Pages bis zu komplexen SaaS-Plattformen – optimiert für maximale Performance und Conversion.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Next.js 14+ mit App Router & Server Components</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>SEO-optimiert & Performance-First (98+ Lighthouse)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Responsive Design mit Mobile-First Approach</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>API-Integration & Full-Stack Development</span>
                  </li>
                </ul>

                {/* CTA */}
                <Link
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-base font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mt-auto group/link"
                >
                  <span>Projekt besprechen</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 2. IT-SERVICES - COMPACT CARD (Medium) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="group relative"
          >
            <div className="relative h-full flex flex-col rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl">
              {/* Hover Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image - Square */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02]">
                <Image
                  src="/placeholder-service-infrastructure.webp"
                  alt="IT-Services Infrastructure"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/10 opacity-40" />

                {/* Icon Badge */}
                <div className="absolute top-6 left-6 p-3 rounded-2xl bg-[#0F1629]/90 backdrop-blur-xl border border-white/10 shadow-xl">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
              </div>

              {/* Content - Compact */}
              <div className="relative flex-1 flex flex-col p-6">
                <div className="mb-3">
                  <h3 className="text-2xl font-black text-white mb-1 leading-tight">
                    IT-Services
                  </h3>
                  <p className="text-xs font-semibold text-blue-400 tracking-wide uppercase">
                    Infrastructure & Support
                  </p>
                </div>

                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  Zuverlässige technische Infrastruktur für Ihren Geschäftsbetrieb. Cloud, Monitoring, Support.
                </p>

                {/* Key Features - Icon only */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Cloud-Infrastruktur (AWS, Vercel)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>24/7 System-Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Security Audits & Updates</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-auto group/link"
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 3. DIGITALISIERUNG - WIDE CARD (Full width bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 group relative"
          >
            <div className="relative h-full rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl">
              {/* Hover Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Split Layout: Image Left | Content Right */}
              <div className="relative grid lg:grid-cols-[40%_60%] items-center">
                {/* Image Left */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02]">
                  <Image
                    src="/placeholder-service-automation.webp"
                    alt="Digitalisierung Automation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/10 opacity-40" />

                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 p-3 rounded-2xl bg-[#0F1629]/90 backdrop-blur-xl border border-white/10 shadow-xl">
                    <Rocket className="w-6 h-6 text-purple-400" />
                  </div>
                </div>

                {/* Content Right */}
                <div className="relative p-8 lg:p-10">
                  <div className="mb-4">
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">
                      Digitalisierung & Automation
                    </h3>
                    <p className="text-sm font-semibold text-purple-400 tracking-wide uppercase">
                      Prozesse optimieren & automatisieren
                    </p>
                  </div>

                  <p className="text-base lg:text-lg text-gray-300 mb-6 leading-relaxed">
                    Prozess-Automatisierung, API-Integrationen und digitale Workflows. Wir bringen Ihre analogen Prozesse effizient ins digitale Zeitalter.
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
                      API Integration
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
                      Workflow Automation
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
                      Database Design
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
                      CRM/ERP Integration
                    </span>
                  </div>

                  {/* CTA */}
                  <Link
                    href="#kontakt"
                    className="inline-flex items-center gap-2 text-base font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                  >
                    <span>Prozesse optimieren</span>
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
