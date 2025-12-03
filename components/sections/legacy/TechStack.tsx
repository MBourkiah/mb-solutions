"use client";

import { motion } from "framer-motion";

/**
 * MB-Solutions Tech Stack Showcase - NEU
 *
 * Animated Logo Marquee mit 2 Reihen:
 * - Row 1: Scrollt nach rechts →
 * - Row 2: Scrollt nach links ←
 *
 * Zeigt Enterprise-Tech-Expertise & baut Trust
 * Inspiration: Vercel, Linear
 */

const techStack = {
  row1: [
    { name: "Next.js", logo: "/logos/nextjs.svg" },
    { name: "React", logo: "/logos/react.svg" },
    { name: "TypeScript", logo: "/logos/typescript.svg" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
    { name: "Framer Motion", logo: "/logos/framer.svg" },
    { name: "Vercel", logo: "/logos/vercel.svg" },
  ],
  row2: [
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "Prisma", logo: "/logos/prisma.svg" },
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "Docker", logo: "/logos/docker.svg" },
    { name: "GitHub", logo: "/logos/github.svg" },
  ],
};

export function TechStack() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      {/* Single Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl"
          >
            <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">
              Enterprise Tech Stack
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Gebaut mit den besten Tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed font-light"
          >
            Modernste Technologien für maximale Performance und Zuverlässigkeit.
          </motion.p>
        </div>

        {/* Logo Marquees */}
        <div className="space-y-8">
          {/* Row 1 - Scroll Right → */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-right gap-12 md:gap-16">
              {/* Duplicate for seamless loop */}
              {[...techStack.row1, ...techStack.row1, ...techStack.row1].map((tech, i) => (
                <LogoCard key={`row1-${i}`} {...tech} />
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Left ← */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-left gap-12 md:gap-16">
              {/* Duplicate for seamless loop */}
              {[...techStack.row2, ...techStack.row2, ...techStack.row2].map((tech, i) => (
                <LogoCard key={`row2-${i}`} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes marquee-right {
          from {
            transform: translateX(-33.333%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }

        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }

        .animate-marquee-right:hover,
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function LogoCard({ name }: { name: string }) {
  return (
    <div className="group relative flex-shrink-0">
      <div className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-sm">
        {/* Hover Glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Logo Placeholder */}
        <div className="relative w-20 h-10 md:w-24 md:h-12 flex items-center justify-center">
          {/* Temporary: Text placeholder until logos added */}
          <span className="text-sm md:text-base font-bold text-gray-400 group-hover:text-white transition-colors duration-300 opacity-40 group-hover:opacity-100">
            {name}
          </span>

          {/* Uncomment when logos are available:
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300"
          />
          */}
        </div>

        {/* Tooltip on hover */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-[#0F1629] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <span className="text-xs font-medium text-white">{name}</span>
        </div>
      </div>
    </div>
  );
}
