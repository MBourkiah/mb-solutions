"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * MB-Solutions Ultimate Header
 *
 * Enterprise-Level Navigation:
 * ✨ Optimized 4-point navigation structure
 * ✨ Micro-trust elements (response time, status)
 * ✨ Premium glassmorphism design
 * ✨ Unique mobile menu experience
 * ✨ Subtle authority signals
 *
 * Inspired by: Vercel, Linear, Tailwind Labs - aber einzigartig
 */

const navLinks = [
  {
    name: "Webdesign",
    href: "/webdesign-koeln",
    submenu: [
      { name: "WordPress Agentur", href: "/webdesign-koeln/wordpress-agentur-koeln" },
      { name: "React Entwicklung", href: "/webdesign-koeln/react-entwicklung-koeln" },
      { name: "Shopify Agentur", href: "/webdesign-koeln/shopify-agentur-koeln" },
      { name: "Responsive Webdesign", href: "/webdesign-koeln/responsive-webdesign" },
    ]
  },
  {
    name: "IT-Services",
    href: "/it-services-koeln",
    submenu: [
      { name: "IT-Support", href: "/it-services-koeln/it-support-koeln" },
      { name: "Cloud Services", href: "/it-services-koeln/cloud-services-koeln" },
      { name: "IT-Sicherheit", href: "/it-services-koeln/it-sicherheit-koeln" },
      { name: "Microsoft 365", href: "/it-services-koeln/microsoft-365-koeln" },
    ]
  },
  {
    name: "Marketing",
    href: "/marketing-agentur-koeln",
    submenu: [
      { name: "SEO Agentur", href: "/marketing-agentur-koeln/seo-agentur-koeln" },
      { name: "Local SEO", href: "/marketing-agentur-koeln/local-seo-koeln" },
      { name: "Google Ads", href: "/marketing-agentur-koeln/google-ads-koeln" },
      { name: "Content Marketing", href: "/marketing-agentur-koeln/content-marketing-koeln" },
    ]
  },
  { name: "Über uns", href: "/about" },
  { name: "Kontakt", href: "/contact" },
];

export function HeaderUltimate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Detect scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
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
      {/* MAIN HEADER - Floating Design */}
      {/* ============================================ */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.nav
            animate={{
              backgroundColor: isScrolled
                ? "rgba(15, 22, 41, 0.85)"
                : "rgba(15, 22, 41, 0.5)",
              backdropFilter: isScrolled ? "blur(24px)" : "blur(16px)",
              borderColor: isScrolled
                ? "rgba(255, 255, 255, 0.12)"
                : "rgba(255, 255, 255, 0.08)",
            }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl border shadow-2xl overflow-hidden"
          >
            {/* Top glow line */}
            {isScrolled && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
              />
            )}

            {/* 3-Column Grid Layout - Responsive */}
            <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 md:h-20 px-4 md:px-6 lg:px-8 gap-2 md:gap-4 lg:gap-8">

              {/* ============================================ */}
              {/* COLUMN 1: LOGO - Left */}
              {/* ============================================ */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative group"
              >
                <Link href="/" className="flex items-center">
                  <div className="h-7 md:h-9 flex items-center">
                    <Image
                      src="/logo.svg"
                      alt="MB-Solutions"
                      width={180}
                      height={45}
                      priority
                      className="h-7 md:h-9 w-auto object-contain"
                    />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </Link>
              </motion.div>

              {/* ============================================ */}
              {/* COLUMN 2: NAVIGATION - Center (TRUE CENTER!) */}
              {/* ============================================ */}
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="hidden lg:flex items-center justify-center"
              >
                <div className="flex items-center gap-1">
                  {navLinks.map((link, index) => (
                    <NavLink
                      key={link.href}
                      link={link}
                      index={index}
                      hoveredMenu={hoveredMenu}
                      setHoveredMenu={setHoveredMenu}
                    />
                  ))}
                </div>
              </motion.nav>

              {/* ============================================ */}
              {/* COLUMN 3: CTA + MOBILE MENU - Right */}
              {/* ============================================ */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center gap-2 md:gap-3 justify-end"
              >
                {/* CTA Button - Tablet & Desktop */}
                <Link
                  href="/contact"
                  className="hidden md:inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-xs md:text-sm text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                >
                  <Zap className="w-4 h-4" />
                  <span className="hidden md:inline">Projekt starten</span>
                  <span className="md:hidden">Kontakt</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* ============================================ */}
      {/* MOBILE MENU - Unique Design */}
      {/* ============================================ */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

// ============================================
// NAVIGATION LINK COMPONENT WITH MEGA MENU
// ============================================
interface NavLinkProps {
  link: { name: string; href: string; submenu?: Array<{ name: string; href: string }> };
  index: number;
  hoveredMenu: string | null;
  setHoveredMenu: (name: string | null) => void;
}

function NavLink({ link, index, hoveredMenu, setHoveredMenu }: NavLinkProps) {
  const hasSubmenu = link.submenu && link.submenu.length > 0;
  const isHovered = hoveredMenu === link.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay: 0.4 + index * 0.08,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative"
      onMouseEnter={() => hasSubmenu && setHoveredMenu(link.name)}
      onMouseLeave={() => hasSubmenu && setHoveredMenu(null)}
    >
      <Link
        href={link.href}
        className="group relative px-4 py-2 text-[15px] font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2"
      >
        <span className="relative z-10">{link.name}</span>

        {/* Hover underline */}
        <motion.span
          className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
        />

        {/* Hover background */}
        <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </Link>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {hasSubmenu && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-[#0F1629]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
          >
            {/* Top glow */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="p-2">
              {link.submenu!.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================
// MOBILE MENU COMPONENT - Unique Experience
// ============================================
interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#0A0E27]/95 backdrop-blur-2xl z-40 xl:hidden"
          />

          {/* Menu Panel - Unique Center Design */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-24 left-4 right-4 sm:left-auto sm:right-8 sm:w-96 bg-[#0F1629]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50 xl:hidden overflow-hidden"
          >
            {/* Top glow */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="flex flex-col">
              {/* Navigation Links */}
              <nav className="p-4">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={{
                    animate: {
                      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                    },
                  }}
                  className="space-y-2"
                >
                  {navLinks.map((link) => (
                    <MobileNavLink
                      key={link.href}
                      link={link}
                      onClick={() => setIsOpen(false)}
                    />
                  ))}
                </motion.div>
              </nav>

              {/* CTA Button */}
              <div className="p-4 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-300"
                >
                  <span>Projekt starten</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Mobile Nav Link
interface MobileNavLinkProps {
  link: { name: string; href: string };
  onClick?: () => void;
}

function MobileNavLink({ link, onClick }: MobileNavLinkProps) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={link.href}
        onClick={onClick}
        className="group flex items-center justify-between px-5 py-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
      >
        <span className="text-lg font-medium">{link.name}</span>
        <motion.div
          className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.div>
      </Link>
    </motion.div>
  );
}
