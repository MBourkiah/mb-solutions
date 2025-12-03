"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Clock, Code2, Server, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

/**
 * MB-Solutions Hero Variants - 3 Einzigartige Optionen
 *
 * VARIANTE 1: Authority Command - Zentriert, Text-dominant, keine Bilder
 * VARIANTE 2: Performance Metrics - Split-Layout mit animierten Live-Metriken
 * VARIANTE 3: Future Vision - Immersive Full-Screen mit 3D-Effekten
 *
 * Alle Varianten:
 * ✨ Ohne Referenzen, aber maximale Autorität
 * ✨ Vercel/Linear/Stripe-Niveau
 * ✨ Einzigartige Designs
 * ✨ Mobile-optimiert
 */

// ============================================
// VARIANTE 1: AUTHORITY COMMAND
// Zentriert, Text-dominant, pure Autorität
// ============================================
export function HeroAuthorityCommand() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-32">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Enterprise-Ready Infrastructure</span>
        </motion.div>

        {/* Headline - Massive */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8"
          style={{
            letterSpacing: '-0.04em',
          }}
        >
          <span className="block text-white">Infrastruktur,</span>
          <span className="block text-white">die Ihr Wachstum</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            nicht limitiert
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Next.js Development, IT-Services und technische Infrastruktur für mittelständische Unternehmen.{" "}
          <span className="text-white font-semibold">Performance-optimiert. Skalierbar. DSGVO-konform.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#kontakt"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-base text-white shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <Zap className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Tech-Analyse starten</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#leistungen"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300"
          >
            <span>Leistungen entdecken</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Trust Signals - Inline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span>Antwort in {"<2h"}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span>DSGVO-konform</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span>Regional verfügbar</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span>Full-Service Support</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent" />
    </section>
  );
}

// ============================================
// VARIANTE 2: PERFORMANCE METRICS
// Split-Layout mit animierten Live-Metriken
// ============================================
export function HeroPerformanceMetrics() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-32">
      {/* Background Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">Performance-First Approach</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              <span className="block text-white">Webentwicklung,</span>
              <span className="block text-white">die messbar</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                besser ist
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl"
            >
              Technische Exzellenz trifft auf mittelstandsgerechte IT-Services.
              Wir bauen digitale Infrastruktur, die <span className="text-white font-semibold">performt, skaliert und überzeugt</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-base text-white shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                <span>Kostenlose Beratung</span>
              </Link>

              <Link
                href="#prozess"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <span>Unser Prozess</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <TrustBadge icon={<Clock />} text="<2h Response" />
              <TrustBadge icon={<Shield />} text="DSGVO-Ready" />
              <TrustBadge icon={<Server />} text="99.9% Uptime" />
            </motion.div>
          </div>

          {/* RIGHT: Performance Metrics Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Metrics Container */}
            <div className="space-y-4">
              <MetricCard
                icon={<Code2 className="w-6 h-6 text-cyan-400" />}
                label="Lighthouse Score"
                value="98"
                suffix="/100"
                delay={0.6}
                color="cyan"
              />
              <MetricCard
                icon={<TrendingUp className="w-6 h-6 text-blue-400" />}
                label="Performance Boost"
                value="3.2x"
                suffix="schneller"
                delay={0.8}
                color="blue"
              />
              <MetricCard
                icon={<Shield className="w-6 h-6 text-green-400" />}
                label="Security Score"
                value="A+"
                suffix="Rating"
                delay={1.0}
                color="green"
              />
              <MetricCard
                icon={<Server className="w-6 h-6 text-purple-400" />}
                label="Uptime Guarantee"
                value="99.9"
                suffix="%"
                delay={1.2}
                color="purple"
              />
            </div>

            {/* Ambient Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl opacity-30 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent" />
    </section>
  );
}

// ============================================
// VARIANTE 3: FUTURE VISION
// Immersive Full-Screen mit 3D-Effekten
// ============================================
export function HeroFutureVision() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* 3D Floating Elements */}
      <FloatingElement
        className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-2xl"
        duration={15}
        rotate={15}
      />
      <FloatingElement
        className="absolute bottom-32 right-32 w-24 h-24 bg-blue-500/10 rounded-full"
        duration={12}
        rotate={-20}
      />
      <FloatingElement
        className="absolute top-1/2 right-20 w-20 h-20 bg-purple-500/10 rounded-xl"
        duration={18}
        rotate={10}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 mb-10 rounded-full bg-white/[0.05] border border-white/20 backdrop-blur-2xl shadow-2xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-5 h-5 text-cyan-400" />
          </motion.div>
          <span className="text-base font-bold text-white">Next-Generation Development</span>
        </motion.div>

        {/* Headline - Ultra Massive */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] mb-10"
          style={{
            letterSpacing: '-0.05em',
            textShadow: '0 0 80px rgba(6, 182, 212, 0.3)',
          }}
        >
          <span className="block text-white">Die Zukunft</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 40%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ist digital
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-2xl md:text-3xl text-gray-200 font-light mb-14 max-w-4xl mx-auto leading-relaxed"
        >
          Wir bauen die technische Infrastruktur für Ihr Unternehmen.{" "}
          <span className="font-semibold text-white">Performance. Sicherheit. Skalierbarkeit.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
        >
          <Link
            href="#kontakt"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl font-black text-lg text-white shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-110 transition-all duration-500 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            <span className="relative z-10">Beratungstermin sichern</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Trust Stats - Inline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-12 text-center"
        >
          <div>
            <div className="text-4xl font-black text-cyan-400 mb-2">98/100</div>
            <div className="text-sm text-gray-400 font-medium">Performance</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div>
            <div className="text-4xl font-black text-blue-400 mb-2">{"<2h"}</div>
            <div className="text-sm text-gray-400 font-medium">Response Zeit</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div>
            <div className="text-4xl font-black text-green-400 mb-2">100%</div>
            <div className="text-sm text-gray-400 font-medium">DSGVO</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div>
            <div className="text-4xl font-black text-purple-400 mb-2">24/7</div>
            <div className="text-sm text-gray-400 font-medium">Monitoring</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27]/50 to-transparent" />
    </section>
  );
}

// ============================================
// HELPER COMPONENTS
// ============================================

// Trust Badge (für Variante 2)
function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10">
      <div className="text-gray-400">{icon}</div>
      <span className="text-sm font-medium text-gray-300">{text}</span>
    </div>
  );
}

// Metric Card (für Variante 2)
interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  suffix: string;
  delay: number;
  color: 'cyan' | 'blue' | 'green' | 'purple';
}

function MetricCard({ icon, label, value, suffix, delay, color }: MetricCardProps) {
  const colors = {
    cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30',
    blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30',
    green: 'from-green-500/20 to-green-500/5 border-green-500/30',
    purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br ${colors[color]} border backdrop-blur-xl`}
    >
      <div className="flex-shrink-0 p-3 rounded-xl bg-white/5">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-400 font-medium mb-1">{label}</div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black text-white">{value}</span>
          <span className="text-sm text-gray-400 font-semibold">{suffix}</span>
        </div>
      </div>
    </motion.div>
  );
}

// Floating Element (für Variante 3)
function FloatingElement({
  className,
  duration,
  rotate,
}: {
  className: string;
  duration: number;
  rotate: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -30, 0],
        rotate: [0, rotate, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
