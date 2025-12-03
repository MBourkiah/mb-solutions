"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Clock,
  Code2,
  Server,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Lock,
  Headphones,
  Rocket,
  Target,
  FileCheck,
  Award,
  ArrowRight,
  MessageSquare,
  Calendar,
} from "lucide-react";
import Link from "next/link";

/**
 * MB-Solutions Homepage Sections
 *
 * Alle Sektionen für die Startseite:
 * ✨ USP-Sektion (8 USPs ohne Referenzen)
 * ✨ Leistungsübersicht (3 Hauptleistungen)
 * ✨ Social Proof OHNE echte Referenzen
 * ✨ Prozess-Sektion (4 Schritte)
 * ✨ Finaler CTA
 *
 * Design: Vercel/Linear-Level, maximale Autorität
 */

// ============================================
// USP-SEKTION (Warum MB-Solutions?)
// ============================================
export function USPSection() {
  const usps = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance-First",
      description: "98+ Lighthouse Score als Standard. Wir optimieren jede Millisekunde für maximale Conversion und User Experience.",
      color: "cyan",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Antwort in <2h",
      description: "Technischer Support, der wirklich da ist. Reaktionszeit unter 2 Stunden, auch an Werktagen nach Feierabend.",
      color: "blue",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "DSGVO-konform",
      description: "100% deutsche Server, vollständige DSGVO-Compliance und transparente Datenschutz-Dokumentation inklusive.",
      color: "green",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-Level Sicherheit mit SSL, automatischen Backups und kontinuierlichem Security-Monitoring.",
      color: "purple",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "99.9% Uptime",
      description: "Hochverfügbare Infrastruktur mit automatischem Failover und 24/7 System-Monitoring.",
      color: "cyan",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Persönlicher Ansprechpartner",
      description: "Keine Ticket-Systeme, keine Warteschlangen. Ein fester Ansprechpartner für Ihr Projekt.",
      color: "blue",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Skalierbare Architektur",
      description: "Von 100 auf 100.000 Nutzer? Kein Problem. Unsere Infrastruktur wächst mit Ihrem Erfolg mit.",
      color: "green",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Transparente Dokumentation",
      description: "Vollständige Projektdokumentation, Code-Kommentare und Übergabe-Briefings für Ihre Unabhängigkeit.",
      color: "purple",
    },
  ];

  return (
    <section id="expertise" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-gray-300">Warum MB-Solutions?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Technologie, die überzeugt
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Enterprise-Level Qualität für den Mittelstand. Keine Kompromisse bei Performance,
            Sicherheit und Service.
          </motion.p>
        </div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <USPCard key={index} {...usp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function USPCard({
  icon,
  title,
  description,
  color,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}) {
  const colors: Record<string, string> = {
    cyan: "group-hover:text-cyan-400 group-hover:border-cyan-500/30",
    blue: "group-hover:text-blue-400 group-hover:border-blue-500/30",
    green: "group-hover:text-green-400 group-hover:border-green-500/30",
    purple: "group-hover:text-purple-400 group-hover:border-purple-500/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
    >
      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${colors[color]}`}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 -z-10" />
    </motion.div>
  );
}

// ============================================
// LEISTUNGSÜBERSICHT
// ============================================
export function ServicesSection() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Webentwicklung",
      description:
        "Next.js, React und TypeScript für performante, skalierbare Webanwendungen. Von Landing Pages bis zu komplexen SaaS-Plattformen.",
      features: ["Next.js 14+ mit App Router", "SEO-optimiert", "Mobile-First Design", "API-Integration"],
      color: "cyan",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "IT-Services",
      description:
        "Technische Infrastruktur, die funktioniert. Server-Setup, Cloud-Migration, Monitoring und kontinuierlicher Support für Ihren Geschäftsbetrieb.",
      features: ["Cloud-Infrastruktur", "24/7 Monitoring", "Backup-Strategien", "Security Audits"],
      color: "blue",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Digitalisierung",
      description:
        "Prozess-Automatisierung, API-Integrationen und digitale Workflows. Wir bringen Ihre analogen Prozesse ins digitale Zeitalter.",
      features: ["Workflow-Automation", "Datenbank-Design", "API-Entwicklung", "Tool-Integrationen"],
      color: "purple",
    },
  ];

  return (
    <section id="leistungen" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/[0.03] border border-white/10"
          >
            <Target className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-gray-300">Unsere Leistungen</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Full-Service Technologie
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Von der ersten Zeile Code bis zum laufenden Betrieb. Wir decken die komplette
            technische Wertschöpfungskette ab.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  features,
  color,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  index: number;
}) {
  const colors: Record<string, string> = {
    cyan: "from-cyan-500/20 to-cyan-500/5 group-hover:from-cyan-500/30 group-hover:to-cyan-500/10",
    blue: "from-blue-500/20 to-blue-500/5 group-hover:from-blue-500/30 group-hover:to-blue-500/10",
    purple: "from-purple-500/20 to-purple-500/5 group-hover:from-purple-500/30 group-hover:to-purple-500/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500"
    >
      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${colors[color]} text-white`}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-black text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Link */}
      <Link
        href="#kontakt"
        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
      >
        <span>Mehr erfahren</span>
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>

      {/* Hover Glow */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
    </motion.div>
  );
}

// ============================================
// SOCIAL PROOF - OHNE REFERENZEN
// ============================================
export function SocialProofSection() {
  const proofItems = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Zertifizierte Expertise",
      description: "Next.js, TypeScript, React – moderne Web-Technologien auf höchstem Niveau",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Qualitätsgarantie",
      description: "Code Reviews, Testing-Frameworks und kontinuierliche Quality Assurance",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Dokumentierte Methodik",
      description: "Strukturierter Prozess von Analyse über Development bis Deployment",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Enterprise Infrastructure",
      description: "Deutsche Cloud-Provider, ISO-zertifizierte Rechenzentren, 99.9% Uptime SLA",
    },
  ];

  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
    "GitHub",
    "Vercel",
    "AWS",
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Technologie, der Sie vertrauen können
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Standards, Prozesse und Infrastruktur auf Enterprise-Level
          </motion.p>
        </div>

        {/* Proof Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {proofItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-cyan-500/10 text-cyan-400">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/[0.03] border border-white/10">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-gray-300">Unser Tech-Stack</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.05] transition-all duration-300"
              >
                <span className="text-sm font-semibold text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// PROZESS-SEKTION (4 Schritte)
// ============================================
export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Technische Analyse",
      description:
        "Wir analysieren Ihre Anforderungen, bestehende Systeme und technische Ziele. Kostenloses Erstgespräch inklusive.",
      duration: "1-2 Tage",
      icon: <Target />,
    },
    {
      number: "02",
      title: "Konzept & Planung",
      description:
        "Detaillierte Architektur-Planung, Tech-Stack-Definition und Roadmap. Transparente Projektplanung mit Meilensteinen.",
      duration: "3-5 Tage",
      icon: <FileCheck />,
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Agile Entwicklung mit regelmäßigen Updates. Code Reviews, Testing und iterative Optimierung bis zur Perfektion.",
      duration: "2-8 Wochen",
      icon: <Code2 />,
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "Deployment, Performance-Monitoring und kontinuierlicher Support. Dokumentation und persönlicher Ansprechpartner inklusive.",
      duration: "Ongoing",
      icon: <Rocket />,
    },
  ];

  return (
    <section id="prozess" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.02]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/[0.03] border border-white/10"
          >
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-gray-300">Unser Prozess</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Von der Idee zum Launch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Strukturiert, transparent und effizient. So bringen wir Ihr Projekt zum Erfolg.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  number,
  title,
  description,
  duration,
  icon,
  index,
}: {
  number: string;
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Connecting Line (Desktop only) */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
      )}

      {/* Card */}
      <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 group-hover:border-cyan-500/30 transition-all duration-500">
        {/* Number Badge */}
        <div className="absolute -top-4 -left-4 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-black text-xl shadow-2xl shadow-cyan-500/50">
          {number}
        </div>

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-white/5 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>

        {/* Duration Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-semibold text-cyan-400">{duration}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// FINALER CTA
// ============================================
export function FinalCTASection() {
  return (
    <section id="kontakt" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-gray-300">Verfügbar für neue Projekte</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8"
          style={{ letterSpacing: '-0.03em' }}
        >
          Bereit für den nächsten{" "}
          <span
            style={{
              background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            technologischen Schritt?
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Lassen Sie uns über Ihr Projekt sprechen. Kostenlose Erstberatung, keine Verpflichtungen,
          nur ehrliche technische Expertise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-black text-lg text-white shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <Calendar className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Tech-Call buchen</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="mailto:info@mb-solutions.biz"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300"
          >
            <MessageSquare className="w-6 h-6" />
            <span>E-Mail schreiben</span>
          </Link>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>Antwort in {"<2h"}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>Kostenlose Erstberatung</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>Keine Verpflichtung</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
