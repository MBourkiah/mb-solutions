"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Check } from "lucide-react";
import Link from "next/link";

/**
 * MB-Solutions Hero Section V10 - ULTIMATE EDITION
 *
 * Variante A: "FLOATING TECH CANVAS"
 * H1 Option 1: "Digitale Lösungen, die wirklich performen"
 *
 * Based on: HERO-ULTIMATE-DESIGN-GUIDE.md
 * Level: Vercel/Linear/Stripe Standard
 *
 * Features:
 * ✨ 50/50 Split Layout
 * ✨ Floating Image mit Glassmorphism
 * ✨ Massive Typography (72px)
 * ✨ Precision Spacing (exakt nach Guide)
 * ✨ Premium Animations
 * ✨ Floating Badges
 * ✨ Ambient Glow Effects
 */

export function HeroSectionV10() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: '90vh',
        paddingTop: '120px', // Top Margin: 120px
        paddingBottom: '160px', // Bottom Padding: 160px
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background Gradient Orbs */}
      <BackgroundOrbs />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* ============================================ */}
          {/* LEFT COLUMN (6 cols) - TEXT DOMAIN */}
          {/* ============================================ */}
          <div className="lg:col-span-6 space-y-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2
              }}
              className="inline-flex items-center gap-2 mb-8"
              style={{
                padding: '12px 20px',
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 15, 0, -15, 0],
                  scale: [1, 1.1, 1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </motion.div>
              <span
                className="font-semibold text-cyan-400"
                style={{
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                }}
              >
                Next.js Performance-Expertise
              </span>
            </motion.div>

            {/* H1 - MASSIVE TYPOGRAPHY */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4
              }}
              className="mb-10"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(40px, 5vw, 72px)',
                lineHeight: 1.1,
                letterSpacing: '-2px',
                maxWidth: '680px',
              }}
            >
              <span className="block text-white">
                Digitale Lösungen,
              </span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.3))',
                }}
              >
                die wirklich performen
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.6
              }}
              className="mb-12"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '540px',
              }}
            >
              Next.js Entwicklung, IT-Services & Digitalisierung für wachsende Unternehmen.{' '}
              <span style={{ fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)' }}>
                Performance-optimiert. DSGVO-konform. Regional.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8
              }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              {/* Primary CTA */}
              <PrimaryCTA />

              {/* Secondary CTA */}
              <SecondaryCTA />
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.0
              }}
              className="flex flex-wrap gap-6"
            >
              <TrustBadge text="Antwort in 2h" />
              <TrustBadge text="DSGVO-konform" />
              <TrustBadge text="Aus der Region" />
              <TrustBadge text="50+ Projekte" />
            </motion.div>
          </div>

          {/* ============================================ */}
          {/* RIGHT COLUMN (6 cols) - VISUAL CANVAS */}
          {/* ============================================ */}
          <div className="lg:col-span-6 relative">
            <FloatingImageContainer />
          </div>
        </div>
      </div>

      {/* Bottom Fade Out */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '160px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 14, 39, 0.5) 100%)',
        }}
      />
    </section>
  );
}

// ============================================
// BACKGROUND ORBS
// ============================================
function BackgroundOrbs() {
  return (
    <>
      {/* Orb 1 - Top Right (Cyan) */}
      <motion.div
        animate={{
          x: [0, 30, 60, 30, 0],
          y: [0, -20, 0, 20, 0],
          opacity: [0.02, 0.04, 0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Orb 2 - Bottom Left (Blue) */}
      <motion.div
        animate={{
          x: [0, -40, -80, -40, 0],
          y: [0, 30, 0, -30, 0],
          opacity: [0.015, 0.035, 0.015, 0.035, 0.015],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 5,
        }}
        className="absolute pointer-events-none"
        style={{
          bottom: '15%',
          left: '5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </>
  );
}

// ============================================
// PRIMARY CTA
// ============================================
function PrimaryCTA() {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      <Link
        href="/contact"
        className="group relative inline-flex items-center gap-2 overflow-hidden"
        style={{
          padding: '16px 32px',
          background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: 600,
          color: '#FFFFFF',
          boxShadow: '0 4px 14px rgba(6, 182, 212, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(6, 182, 212, 0.3)';
        }}
      >
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />

        <Calendar className="w-5 h-5 relative z-10" />
        <span className="relative z-10">Tech-Call buchen</span>
        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

// ============================================
// SECONDARY CTA
// ============================================
function SecondaryCTA() {
  return (
    <motion.div
      whileHover={{ x: 4 }}
    >
      <Link
        href="#services"
        className="group inline-flex items-center gap-2"
        style={{
          padding: '16px 32px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          fontSize: '16px',
          fontWeight: 600,
          color: 'rgba(255, 255, 255, 0.9)',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
        }}
      >
        <span>Leistungen ansehen</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

// ============================================
// TRUST BADGE
// ============================================
function TrustBadge({ text }: { text: string }) {
  return (
    <motion.div
      className="flex items-center gap-2 group cursor-default"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'rgba(6, 182, 212, 0.1)',
          border: '1px solid rgba(6, 182, 212, 0.2)',
        }}
      >
        <Check className="w-3 h-3 text-cyan-400" />
      </div>
      <span
        className="text-sm transition-colors group-hover:text-white"
        style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontWeight: 400,
        }}
      >
        {text}
      </span>
    </motion.div>
  );
}

// ============================================
// FLOATING IMAGE CONTAINER
// ============================================
function FloatingImageContainer() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5
      }}
      className="relative"
      style={{
        width: '100%',
        maxWidth: '540px',
        height: '680px',
        margin: '0 auto',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        scale: 1.02,
        rotateX: 2,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      {/* Floating Frame - Glassmorphism */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          padding: '16px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          backdropFilter: 'blur(40px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 100px rgba(6, 182, 212, 0.1)',
          transform: 'translateZ(20px)',
        }}
      >
        {/* Image Container */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
          }}
        >
          {/* Placeholder - Replace with actual image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <div
                className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
                  boxShadow: '0 20px 40px rgba(6, 182, 212, 0.5)',
                }}
              >
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <p className="text-sm text-gray-400 max-w-xs mx-auto">
                Hero-Bild: Futuristic Tech Canvas<br/>
                (Generiere mit KI-Prompt aus Guide)
              </p>
            </div>
          </div>

          {/* Replace with:
          <Image
            src="/images/hero-tech-canvas.png"
            alt="MB-Solutions Technologie Visualisierung"
            fill
            className="object-cover"
            style={{ opacity: 0.95 }}
            priority
          />
          */}

          {/* Overlay Gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(10, 14, 39, 0.6) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Floating Badge - Top Right */}
        <FloatingBadge
          position={{ top: '-16px', right: '-16px' }}
          delay={1.2}
          duration={3}
        >
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 bg-white rounded-full"
              style={{
                animation: 'pulse 2s infinite',
              }}
            />
            <span className="text-xs font-bold text-white">98/100</span>
          </div>
          <div className="text-[10px] text-white/80">Performance</div>
        </FloatingBadge>

        {/* Floating Badge - Bottom Left */}
        <FloatingBadge
          position={{ bottom: '-16px', left: '-16px' }}
          delay={1.4}
          duration={4}
          color="#3B82F6"
        >
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-bold text-white">DSGVO-Ready</span>
          </div>
        </FloatingBadge>
      </div>

      {/* Ambient Glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          inset: '-60px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: -1,
        }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}

// ============================================
// FLOATING BADGE
// ============================================
interface FloatingBadgeProps {
  children: React.ReactNode;
  position: { top?: string; right?: string; bottom?: string; left?: string };
  delay: number;
  duration: number;
  color?: string;
}

function FloatingBadge({ children, position, delay, duration, color = '#06B6D4' }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.68, -0.55, 0.265, 1.55],
        delay,
      }}
      style={{
        position: 'absolute',
        ...position,
        padding: '10px 14px',
        background: `${color}e6`, // 90% opacity
        backdropFilter: 'blur(20px)',
        borderRadius: '10px',
        boxShadow: `0 10px 30px ${color}80, 0 0 0 1px ${color}80`,
        zIndex: 10,
      }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
