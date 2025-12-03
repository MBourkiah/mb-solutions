"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Code2, Server, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * MB-Solutions Interactive Services Section
 *
 * Horizontal Tab-Switcher statt statische Cards:
 * - 3 Services: Web Development, IT-Services, Automation
 * - Smooth Transitions zwischen Tabs
 * - Visual + Feature-Liste + Tech-Stack pro Service
 * - Full-Width Layout mit Content Bounds
 *
 * NO standard 3-column grid!
 */

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: "webdev",
    icon: Code2,
    title: "Web Development",
    subtitle: "Next.js Enterprise Lösungen",
    description: "Moderne, performante Webanwendungen mit Next.js 14, React und TypeScript. Server-Side Rendering, App Router und optimierte Performance für maximale Conversion.",
    features: [
      "Next.js 14 mit App Router",
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "98+ Lighthouse Score garantiert",
      "Responsive Design für alle Devices",
      "SEO-optimiert & DSGVO-konform",
      "Headless CMS Integration (Sanity, Contentful)",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/images/services/service-webdev.svg",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "it-services",
    icon: Server,
    title: "IT-Services",
    subtitle: "Cloud & Infrastructure",
    description: "Zuverlässige IT-Infrastruktur und Cloud-Lösungen. Von der Migration bis zur Wartung – wir sorgen für Stabilität und Sicherheit Ihrer Systeme.",
    features: [
      "Cloud Migration (AWS, Azure, Google Cloud)",
      "Server-Administration & Monitoring",
      "Backup & Disaster Recovery",
      "Netzwerk-Setup & VPN-Lösungen",
      "IT-Security & Compliance",
      "24/7 Support & Wartung",
    ],
    techStack: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "Nginx"],
    image: "/images/services/service-it.svg",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Prozess-Automation",
    subtitle: "Workflows & Integration",
    description: "Automatisierung repetitiver Aufgaben spart Zeit und reduziert Fehler. Wir entwickeln maßgeschneiderte Automatisierungslösungen für Ihre Prozesse.",
    features: [
      "Workflow-Automatisierung (Make, Zapier, n8n)",
      "API-Integration & Middleware",
      "Daten-Synchronisation zwischen Systemen",
      "Custom Scripts & Cronjobs",
      "E-Mail & Reporting Automation",
      "Prozess-Optimierung & Consulting",
    ],
    techStack: ["Make", "n8n", "Python", "Node.js", "REST APIs"],
    image: "/images/services/service-automation.svg",
    gradient: "from-purple-500 to-pink-500",
  },
];

export function ServicesInteractive() {
  const [activeTab, setActiveTab] = useState<string>("webdev");
  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section id="leistungen" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-[#0F1629] to-[#0A0E27]" />

      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-4xl" />

      <div className="relative z-10 w-full max-w-10xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">

        {/* Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl"
          >
            <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">
              Unsere Leistungen
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mb-4 leading-tight tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em'
            }}
          >
            Digitale Services für Ihr Business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed font-light"
          >
            Von der Konzeption bis zum Betrieb – wir begleiten Sie in allen Phasen Ihrer digitalen Transformation.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-3 mb-12 md:mb-16"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;

            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`
                  group relative px-6 py-4 rounded-2xl font-semibold text-sm md:text-base
                  transition-all duration-300
                  ${isActive
                    ? 'bg-white/[0.08] border-white/20 text-white shadow-lg'
                    : 'bg-white/[0.02] border-white/5 text-gray-400 hover:bg-white/[0.05] hover:text-gray-300'
                  }
                  border backdrop-blur-xl
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-cyan-400' : 'text-gray-500 group-hover:text-gray-400'}`} />
                  <span>{service.title}</span>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Service Content - Animated Switching */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
          >

            {/* LEFT: Service Visual */}
            <div className="relative">
              {/* Glow Behind Image */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${activeService.gradient} opacity-20 rounded-3xl blur-3xl`} />

              {/* Glass Card */}
              <div className="relative p-3 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent mix-blend-overlay" />
                </div>
              </div>
            </div>

            {/* RIGHT: Service Details */}
            <div className="space-y-6">
              {/* Icon + Subtitle */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeService.gradient} opacity-20 flex items-center justify-center border border-white/10`}>
                  {(() => {
                    const Icon = activeService.icon;
                    return <Icon className="w-7 h-7 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{activeService.title}</h3>
                  <p className="text-sm text-gray-400 font-medium">{activeService.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                {activeService.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {activeService.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {activeService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-medium text-gray-400 backdrop-blur-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="#kontakt"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r ${activeService.gradient} shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
              >
                <span>Jetzt anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
