"use client";

import { motion } from "framer-motion";

/**
 * Trust Badges Bar
 *
 * Subtle strip showing:
 * ✨ Tech stack logos
 * ✨ Trust signals
 * ✨ Animated scroll effect
 *
 * Inspiration: Vercel, Linear
 */

const trustItems = [
  { text: "Next.js 15", color: "text-gray-400" },
  { text: "•", color: "text-gray-600" },
  { text: "TypeScript", color: "text-gray-400" },
  { text: "•", color: "text-gray-600" },
  { text: "React 19", color: "text-gray-400" },
  { text: "•", color: "text-gray-600" },
  { text: "Tailwind CSS", color: "text-gray-400" },
  { text: "•", color: "text-gray-600" },
  { text: "DSGVO-Konform", color: "text-cyan-400" },
  { text: "•", color: "text-gray-600" },
  { text: "Performance-First", color: "text-cyan-400" },
  { text: "•", color: "text-gray-600" },
  { text: "100% Transparent", color: "text-cyan-400" },
];

export function TrustBadgesBar() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden border-y border-white/5">
      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0E27] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0E27] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Content */}
      <motion.div
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex items-center gap-6 whitespace-nowrap"
      >
        {/* Duplicate items for seamless loop */}
        {[...trustItems, ...trustItems, ...trustItems].map((item, index) => (
          <span key={index} className={`text-sm md:text-base font-medium ${item.color}`}>
            {item.text}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
