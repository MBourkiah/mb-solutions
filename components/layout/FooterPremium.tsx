"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ChevronUp, Linkedin, Github, Twitter } from "lucide-react";

/**
 * MB-Solutions Premium Footer - Full Width Edition
 *
 * Minimalistisches Premium Design:
 * ✨ Full-width edge-to-edge Layout
 * ✨ Monochrome Palette (Cyan/White)
 * ✨ Premium Spacing & Whitespace
 * ✨ Glassmorphism effects
 * ✨ Clean, organized layout
 * ✨ Smooth animations
 */

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const navigationLinks = [
  { label: "Start", href: "/" },
  { label: "Über uns", href: "/about" },
  { label: "Leistungen", href: "/services" },
  { label: "Projekte", href: "#projekte" },
  { label: "Kontakt", href: "/contact" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
  { label: "Cookie-Richtlinie", href: "/cookie-richtlinie" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
  { label: "Twitter", href: "#", icon: Twitter },
];

export function FooterPremium() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0E27] border-t border-white/5">
      {/* Top Glow Divider - Subtle */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.2) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Content - Full Width */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 sm:py-20 md:py-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 xl:gap-20">
            {/* BRANDING COLUMN */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              {/* Logo */}
              <Link href="/" className="inline-block group">
                <div className="h-9 flex items-center">
                  <Image
                    src="/logo.svg"
                    alt="MB-Solutions"
                    width={180}
                    height={45}
                    className="h-9 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </Link>

              {/* Description */}
              <p className="text-base text-gray-400 leading-relaxed max-w-sm font-light">
                Professionelle Webentwicklung und IT-Services für mittelständische Unternehmen.
                Performance-optimiert, DSGVO-konform.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* NAVIGATION COLUMN */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/80">
                Navigation
              </h3>
              <ul className="space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* LEGAL COLUMN */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/80">
                Rechtliches
              </h3>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CONTACT COLUMN */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/80">
                Kontakt
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:kontakt@mb-solutions.biz"
                    className="text-base text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2.5 group"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      kontakt@mb-solutions.biz
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+491234567890"
                    className="text-base text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2.5 group"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      +49 123 456 7890
                    </span>
                  </a>
                </li>
                <li>
                  <div className="text-base text-gray-400 inline-flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <span>Deutschland, Regional</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/5 py-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-base text-gray-400 font-light">
                © {currentYear} MB-Solutions. Alle Rechte vorbehalten.
              </p>
              <p className="text-sm text-gray-500 mt-2 font-light">
                Entwickelt mit{" "}
                <span className="text-cyan-400">Next.js</span> und{" "}
                <span className="text-cyan-400">TypeScript</span>
              </p>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 text-base text-gray-400 hover:text-cyan-400 transition-all duration-300"
              aria-label="Zum Seitenanfang"
            >
              <span className="hidden sm:inline font-medium">Zum Seitenanfang</span>
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
