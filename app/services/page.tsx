"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { StatementHeader } from "@/components/layout/StatementHeader";
import {
  Globe,
  Code2,
  Zap,
  Lightbulb,
  Shield,
  Palette,
  Check,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  Database,
  Settings,
} from "lucide-react";
import { spacing, typography, animations, easing, colors, presets } from "@/lib/design-system";

/**
 * MB-Solutions Services Page V6 - DESIGN SYSTEM
 *
 * ✨ FULLY INTEGRATED WITH DESIGN SYSTEM:
 * ✓ Unified spacing (8px grid)
 * ✓ Typography scale
 * ✓ Animation variants
 * ✓ Component presets
 * ✓ Color system
 * ✓ Consistent with Stripe/Vercel/Linear
 */

// ============================================
// 📝 SERVICES DATA
// ============================================

const services = [
  {
    icon: Globe,
    title: "Web-Entwicklung",
    description:
      "Moderne Websites und Web-Apps, die Ihre Nutzer begeistern. Von Landingpages bis zu komplexen E-Commerce-Plattformen.",
    features: [
      "Next.js, React & moderne Frameworks",
      "Responsive Design für alle Geräte",
      "Performance-Optimierung (Core Web Vitals)",
      "SEO-freundliche Architektur",
      "Headless CMS Integration",
    ],
    pricing: "ab 2.500€",
    iconColor: "from-blue-400 to-cyan-400",
    glowColor: colors.glow.primary,
  },
  {
    icon: Database,
    title: "API & Backend Development",
    description:
      "Skalierbare Backend-Systeme und APIs, die Ihre Geschäftsprozesse digitalisieren und automatisieren.",
    features: [
      "REST & GraphQL APIs",
      "Datenbank-Design & Optimierung",
      "Third-Party Integrationen",
      "Echtzeit-Datenverarbeitung",
      "Sichere Authentifizierung",
    ],
    pricing: "ab 3.500€",
    iconColor: "from-cyan-400 to-blue-400",
    glowColor: colors.glow.accent,
  },
  {
    icon: Zap,
    title: "Prozess-Automatisierung",
    description:
      "Sparen Sie Zeit und Kosten durch intelligente Automatisierung wiederkehrender Aufgaben und Workflows.",
    features: [
      "n8n, Zapier & Custom Scripts",
      "PDF-Parsing & OCR",
      "CRM & ERP Integration",
      "Email-Automatisierung",
      "Daten-Synchronisation",
    ],
    pricing: "ab 1.500€",
    iconColor: "from-amber-400 to-orange-400",
    glowColor: "rgba(251, 191, 36, 0.25)",
  },
  {
    icon: Lightbulb,
    title: "IT-Beratung & Strategie",
    description:
      "Strategische Beratung für Ihre Digitalisierung. Wir helfen bei Technologie-Auswahl, Architektur und Roadmap.",
    features: [
      "Technologie-Stack Beratung",
      "System-Architektur Design",
      "Code Reviews & Audits",
      "Digitalisierungs-Roadmaps",
      "Proof of Concepts",
    ],
    pricing: "ab 150€/h",
    iconColor: "from-purple-400 to-pink-400",
    glowColor: colors.glow.purple,
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description:
      "Zuverlässiger technischer Support und Wartung für Ihre digitale Infrastruktur. Wir halten Ihre Systeme am Laufen.",
    features: [
      "24/7 Monitoring & Alerts",
      "Regelmäßige Updates & Patches",
      "Performance-Monitoring",
      "Bug-Fixing & Troubleshooting",
      "SLA-basierte Service Levels",
    ],
    pricing: "ab 500€/Monat",
    iconColor: "from-green-400 to-emerald-400",
    glowColor: "rgba(34, 197, 94, 0.25)",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive Benutzeroberflächen, die Conversion und Zufriedenheit steigern. Von Wireframes bis zum finalen Design.",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Design Systems & Styleguides",
      "Responsive Interface Design",
      "Accessibility (WCAG 2.1)",
    ],
    pricing: "ab 2.000€",
    iconColor: "from-pink-400 to-rose-400",
    glowColor: "rgba(236, 72, 153, 0.25)",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Analyse",
    description:
      "Wir verstehen Ihre Anforderungen, Ziele und Zielgruppe. Workshop, Requirements Engineering, Wettbewerbsanalyse.",
    icon: Target,
  },
  {
    number: "02",
    title: "Konzeption & Planung",
    description:
      "Technologie-Stack Auswahl, Architektur-Design, Projektplan mit Milestones und Budget-Kalkulation.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Entwicklung & Testing",
    description:
      "Agile Entwicklung in Sprints, regelmäßige Reviews, automatisierte Tests, Code Reviews und QA.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Deployment",
    description:
      "Staging-Umgebung, Final Testing, Deployment auf Production, DNS & SSL Setup, Go-Live Support.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Support & Optimierung",
    description:
      "Monitoring, Bug-Fixing, Performance-Optimierung, Feature-Updates basierend auf User-Feedback.",
    icon: TrendingUp,
  },
];

const benefits = [
  {
    icon: Code2,
    title: "Technische Exzellenz",
    description:
      "Moderne Tech-Stacks, sauberer Code, Best Practices. Performance und Skalierbarkeit von Anfang an.",
  },
  {
    icon: TrendingUp,
    title: "Business-Fokus & ROI",
    description:
      "Wir denken in Business-Zielen, nicht nur in Features. Messbare Ergebnisse und echter Mehrwert.",
  },
  {
    icon: Users,
    title: "Persönlicher Service",
    description:
      "Direkter Ansprechpartner, schnelle Reaktionszeiten, transparente Kommunikation ohne Konzern-Overhead.",
  },
  {
    icon: Shield,
    title: "Sicherheit & DSGVO",
    description:
      "DSGVO-konforme Entwicklung, Sicherheit als Priorität, regelmäßige Security Audits und Updates.",
  },
];

// ============================================
// 🎨 COMPONENTS
// ============================================

function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-start justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12">
      <div className={`relative z-10 ${spacing.container.maxWidth} ${spacing.container.padding} text-center`}>
        {/* Badge */}
        <motion.div
          variants={animations.fadeUp}
          initial="initial"
          animate="animate"
          className="mb-6"
        >
          <div className={presets.badge.default}>
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className={typography.label.sm}>Unsere Leistungen</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={animations.fadeUp}
          initial="initial"
          animate="animate"
          className={typography.display.lg}
        >
          <span className="block text-balance text-foreground">Digitale Lösungen</span>
          <span className={`block text-balance bg-gradient-to-r ${colors.gradient.accentToPrimary} bg-clip-text text-transparent`}>
            für Ihr Unternehmen
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={animations.fadeUp}
          initial="initial"
          animate="animate"
          className={`${typography.body.lg} text-muted-foreground text-balance max-w-3xl mx-auto mt-6 mb-10`}
        >
          Von Web-Entwicklung über APIs bis zur Automatisierung – wir bieten
          das komplette Spektrum moderner IT-Services für kleine und mittlere
          Unternehmen.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={animations.fadeUp}
          initial="initial"
          animate="animate"
        >
          <Link href="/contact" className="group relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-xl blur-md opacity-40 group-hover:opacity-60 transition duration-500" />
            <div className={presets.button.primary}>
              <span className="relative flex items-center justify-center gap-2">
                Kostenlose Beratung buchen
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className={`relative ${spacing.section.mobile} ${spacing.section.tablet} ${spacing.section.desktop} overflow-hidden`}>
      <div className={`${spacing.container.maxWidth} ${spacing.container.padding}`}>
        {/* Header */}
        <motion.div
          variants={animations.staggerContainer.variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 sm:mb-14"
        >
          <motion.h2 variants={animations.fadeUp} className={typography.heading.h1}>
            <span className="text-foreground">Unsere </span>
            <span className={`bg-gradient-to-r ${colors.gradient.accentToPrimary} bg-clip-text text-transparent`}>
              Hauptleistungen
            </span>
          </motion.h2>
          <motion.p
            variants={animations.fadeUp}
            className={`${typography.body.lg} text-muted-foreground max-w-3xl mx-auto mt-4`}
          >
            Vom ersten Konzept bis zum laufenden Betrieb – wir begleiten Sie in
            allen Phasen Ihrer digitalen Transformation.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={animations.staggerContainer.variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${spacing.gap.md} mb-12`}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: typeof services[0];
}) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={animations.staggerChild}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: easing.snappy } }}
      className="group relative h-full"
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ background: `radial-gradient(circle at center, ${service.glowColor}, transparent 70%)` }}
      />

      {/* Card */}
      <div className={`${presets.card.default} h-full`}>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Icon */}
          <div className="relative inline-block">
            <motion.div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.iconColor} flex items-center justify-center shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 400, damping: 10 } }}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className={`${typography.heading.h3} group-hover:text-primary transition-colors`}>
            {service.title}
          </h3>

          {/* Description */}
          <p className={`${typography.body.sm} text-muted-foreground`}>
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2.5">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Pricing */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">Preis</p>
            <p className={`text-2xl font-bold bg-gradient-to-r ${colors.gradient.accentToPrimary} bg-clip-text text-transparent`}>
              {service.pricing}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ServicesProcess() {
  return (
    <section className={`relative ${spacing.section.mobile} ${spacing.section.tablet} ${spacing.section.desktop} overflow-hidden`}>
      <div className={`${spacing.container.maxWidth} ${spacing.container.padding}`}>
        {/* Header */}
        <motion.div
          variants={animations.staggerContainer.variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 sm:mb-14"
        >
          <motion.h2 variants={animations.fadeUp} className={typography.heading.h1}>
            <span className="text-foreground">Wie wir </span>
            <span className={`bg-gradient-to-r ${colors.gradient.accentToPrimary} bg-clip-text text-transparent`}>
              zusammenarbeiten
            </span>
          </motion.h2>
          <motion.p
            variants={animations.fadeUp}
            className={`${typography.body.lg} text-muted-foreground max-w-3xl mx-auto mt-4`}
          >
            Unser bewährter 5-Phasen Prozess sorgt für transparente
            Zusammenarbeit und erfolgreiche Projektergebnisse.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20" />

          <motion.div
            variants={animations.staggerContainer.variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative"
          >
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step }: { step: typeof processSteps[0] }) {
  const Icon = step.icon;

  return (
    <motion.div variants={animations.staggerChild} className="relative text-center">
      {/* Number */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 mb-4 relative z-10 bg-background">
        <span className={`text-2xl font-bold bg-gradient-to-r ${colors.gradient.accentToPrimary} bg-clip-text text-transparent`}>
          {step.number}
        </span>
      </div>

      {/* Icon */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold mb-3">{step.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

function ServicesBenefits() {
  return (
    <section className={`relative ${spacing.section.mobile} ${spacing.section.tablet} ${spacing.section.desktop} overflow-hidden`}>
      <div className={`${spacing.container.maxWidth} ${spacing.container.padding}`}>
        {/* Header */}
        <motion.div
          variants={animations.staggerContainer.variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 sm:mb-14"
        >
          <motion.h2 variants={animations.fadeUp} className={typography.heading.h1}>
            <span className="text-foreground">Warum </span>
            <span className={`bg-gradient-to-r ${colors.gradient.accentToPrimary} bg-clip-text text-transparent`}>
              MB-Solutions?
            </span>
          </motion.h2>
          <motion.p
            variants={animations.fadeUp}
            className={`${typography.body.lg} text-muted-foreground max-w-3xl mx-auto mt-4`}
          >
            Was uns von anderen Agenturen und Freelancern unterscheidet.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={animations.staggerContainer.variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit }: { benefit: typeof benefits[0] }) {
  const Icon = benefit.icon;

  return (
    <motion.div
      variants={animations.staggerChild}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="relative group"
    >
      <div className={presets.card.default}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className={`text-xl font-bold mb-3 group-hover:text-primary transition-colors`}>
              {benefit.title}
            </h3>
            <p className={`${typography.body.sm} text-muted-foreground`}>
              {benefit.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ServicesCTA() {
  return (
    <section className={`relative ${spacing.section.mobile} ${spacing.section.tablet} ${spacing.section.desktop} overflow-hidden`}>
      <div className={`${spacing.container.maxWidth} ${spacing.container.padding} text-center`}>
        <motion.div
          variants={animations.staggerContainer.variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 variants={animations.fadeUp} className={typography.heading.h1}>
            <span className="block mb-2 text-foreground">Bereit für Ihr</span>
            <span className={`block bg-gradient-to-r ${colors.gradient.accentToPrimary} bg-clip-text text-transparent`}>
              nächstes Projekt?
            </span>
          </motion.h2>

          <motion.p
            variants={animations.fadeUp}
            className={`${typography.body.lg} text-muted-foreground max-w-3xl mx-auto mt-6 mb-10`}
          >
            Lassen Sie uns in einem kostenlosen Erstgespräch über Ihre
            Anforderungen sprechen. Wir zeigen Ihnen, wie wir Ihr Projekt
            erfolgreich umsetzen können.
          </motion.p>

          <motion.div
            variants={animations.fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-xl blur-md opacity-40 group-hover:opacity-60 transition duration-500" />
              <div className={presets.button.primary}>
                <span className="relative flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  Kostenlose Beratung buchen
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </div>
            </Link>

            <Link href="/projects" className={presets.button.secondary}>
              <span className="flex items-center justify-center gap-2">
                Portfolio ansehen
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </Link>
          </motion.div>

          <motion.p
            variants={animations.fadeUp}
            className={`${typography.body.sm} text-muted-foreground mt-8`}
          >
            🔒 Unverbindlich & DSGVO-konform
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// 🌟 MAIN PAGE
// ============================================

export default function ServicesPageV6() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <StatementHeader />
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Process Section */}
      <ServicesProcess />

      {/* Benefits Section */}
      <ServicesBenefits />

      {/* CTA Section */}
      <ServicesCTA />
    </main>
  );
}
