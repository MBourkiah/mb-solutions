"use client";

import { motion } from "framer-motion";
import { Code2, Server, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * MB-Solutions Modern Services
 *
 * 3 Service-Karten mit:
 * - Bild-Platzhalter pro Karte
 * - Clean Layout
 * - Feature-Listen
 * - CTA-Links
 */

export function ServicesModern() {
  const services = [
    {
      slug: "webentwicklung",
      icon: <Code2 className="w-7 h-7" />,
      title: "Webentwicklung",
      subtitle: "Next.js & React",
      description:
        "Performante, skalierbare Webanwendungen mit modernsten Technologien. Von Landing Pages bis zu komplexen SaaS-Plattformen.",
      image: "/placeholder-service-web.webp",
      features: [
        "Next.js 14+ mit App Router",
        "SEO-optimiert & Performance-First",
        "Responsive Design (Mobile-First)",
        "API-Integration & Backend",
      ],
      color: "cyan",
    },
    {
      slug: "it-services",
      icon: <Server className="w-7 h-7" />,
      title: "IT-Services",
      subtitle: "Infrastructure & Support",
      description:
        "Zuverlässige technische Infrastruktur für Ihren Geschäftsbetrieb. Server-Setup, Cloud-Migration, Monitoring und kontinuierlicher Support.",
      image: "/placeholder-service-infrastructure.webp",
      features: [
        "Cloud-Infrastruktur (AWS, Vercel)",
        "24/7 System-Monitoring",
        "Automatisierte Backup-Strategien",
        "Security Audits & Updates",
      ],
      color: "blue",
    },
    {
      slug: "digitalisierung",
      icon: <Rocket className="w-7 h-7" />,
      title: "Digitalisierung",
      subtitle: "Automation & Integration",
      description:
        "Prozess-Automatisierung, API-Integrationen und digitale Workflows. Wir bringen Ihre analogen Prozesse effizient ins digitale Zeitalter.",
      image: "/placeholder-service-automation.webp",
      features: [
        "Workflow-Automatisierung",
        "Custom API-Entwicklung",
        "Datenbank-Design & Optimierung",
        "Tool-Integrationen (CRM, ERP)",
      ],
      color: "purple",
    },
  ];

  return (
    <section id="leistungen" className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Top Fade - Smooth Transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0E27] to-transparent pointer-events-none z-20" />

      {/* Full-Width Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      {/* Subtle Grid Pattern - Full Width */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Ambient Glow Effects */}
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
            <span className="text-sm font-semibold text-gray-300">Unsere Leistungen</span>
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
            Von der ersten Zeile Code bis zum laufenden Betrieb. Wir decken die komplette
            technische Wertschöpfungskette ab.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  subtitle,
  description,
  image,
  features,
  color,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  color: string;
  index: number;
}) {
  const colors: Record<string, string> = {
    cyan: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20",
    blue: "from-blue-500/10 to-blue-500/5 border-blue-500/20",
    purple: "from-purple-500/10 to-purple-500/5 border-purple-500/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl"
    >
      {/* Hover Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02]">
        <Image
          src={image}
          alt={`${title} Visual`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors[color]} opacity-40 group-hover:opacity-30 transition-opacity duration-500`} />

        {/* Icon Badge - Larger */}
        <div className="absolute top-6 left-6 p-4 rounded-2xl bg-[#0F1629]/90 backdrop-blur-xl border border-white/10 shadow-xl">
          <div className="text-white">{icon}</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col p-10">
        {/* Title */}
        <div className="mb-5">
          <h3 className="text-3xl font-black text-white mb-2 leading-tight">{title}</h3>
          <p className="text-sm font-semibold text-cyan-400 tracking-wide uppercase">{subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-base text-gray-300 mb-8 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Link */}
        <Link
          href="#kontakt"
          className="inline-flex items-center gap-2 text-base font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mt-auto group/link"
        >
          <span>Beratung anfragen</span>
          <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
