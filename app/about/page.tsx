"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { StatementHeader } from "@/components/layout/StatementHeader";
import {
  Code2,
  MessageSquare,
  Shield,
  Clock,
  Check,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
  Award,
  Server,
  Rocket,
  Zap,
  Heart,
  Star,
} from "lucide-react";

/**
 * MB-Solutions About Page - PREMIUM REDESIGN
 *
 * Professional Designer Quality
 * ✨ Stunning visuals & animations
 * ✨ Image placeholders throughout
 * ✨ Modern split layouts
 * ✨ Floating elements
 * ✨ Glassmorphism & depth
 */

// ========================================
// 📝 CONTENT DATA
// ========================================

const coreValues = [
  {
    icon: Code2,
    title: "Technische Exzellenz",
    description:
      "Ich arbeite mit modernen Tech-Stacks und Best Practices. Performance, Sicherheit und Wartbarkeit sind von Anfang an Teil der Lösung – nicht nachträglich.",
    iconColor: "from-blue-400 to-cyan-400",
    stat: "98+",
    statLabel: "Lighthouse Score"
  },
  {
    icon: Target,
    title: "Pragmatismus vor Perfektion",
    description:
      "Keine aufgeblähten Systeme, kein Over-Engineering. Stattdessen: Lösungen, die zu Ihrem tatsächlichen Bedarf passen und sich später erweitern lassen.",
    iconColor: "from-cyan-400 to-blue-400",
    stat: "100%",
    statLabel: "Maßgeschneidert"
  },
  {
    icon: MessageSquare,
    title: "Transparente Kommunikation",
    description:
      "Sie erhalten klare Angebote, verständliche Erklärungen und ehrliche Einschätzungen. Kein Fachchinesisch, keine versteckten Kosten, keine falschen Versprechungen.",
    iconColor: "from-purple-400 to-pink-400",
    stat: "< 24h",
    statLabel: "Reaktionszeit"
  },
  {
    icon: Shield,
    title: "Sicherheit & Datenschutz",
    description:
      "DSGVO-konforme Entwicklung, sichere Hosting-Lösungen und regelmäßige Updates sind Standard. Ihre Daten und die Ihrer Kunden sind bei mir in guten Händen.",
    iconColor: "from-green-400 to-emerald-400",
    stat: "100%",
    statLabel: "DSGVO-konform"
  },
];

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind", category: "CSS" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
];

const milestones = [
  {
    year: "2019",
    title: "IT-Administration",
    description: "Start in der IT-Infrastruktur & Support",
    icon: Server,
  },
  {
    year: "2021",
    title: "Webentwicklung",
    description: "Fokus auf moderne Web-Technologien",
    icon: Code2,
  },
  {
    year: "2023",
    title: "MB-Solutions",
    description: "Gründung & Full-Service Angebot",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "Expansion",
    description: "Wachsende Kundenbasis & Projekte",
    icon: TrendingUp,
  },
];

// ========================================
// 🎨 COMPONENTS
// ========================================

function AboutHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 -left-96 w-[1000px] h-[1000px] bg-accent/20 rounded-full blur-[200px] opacity-20" />
          <div className="absolute bottom-1/4 -right-96 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[200px] opacity-20" />
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 163, 201, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 163, 201, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-[2000px] mx-auto">
          {/* Left: Text */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold uppercase tracking-wider backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5" />
              Über MB-Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.05]"
            >
              <span className="block mb-4">IT-Expertise,</span>
              <span
                className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 100%' }}
              >
                die begeistert
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground leading-relaxed font-light"
            >
              Von der IT-Administration zur modernen Webentwicklung –
              Ihr Partner für digitale Lösungen, die wirklich funktionieren.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] text-white rounded-2xl font-semibold text-xl shadow-[0_8px_48px_rgba(6,182,212,0.35)] hover:shadow-[0_12px_64px_rgba(6,182,212,0.45)] transition-all duration-500 hover:brightness-110 hover:scale-105"
              >
                <span className="relative flex items-center gap-3">
                  Jetzt kennenlernen
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </span>
              </Link>

              <div className="flex items-center gap-6 px-8 py-5 bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-background flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" fill="white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-background flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" fill="white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-background flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" fill="white" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Vertrauen von</div>
                  <div className="text-xl font-bold">50+ Kunden</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Image Placeholder mit Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative h-[600px] lg:h-[800px]"
          >
            {/* Main Image Placeholder */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/20 to-purple-500/20 backdrop-blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white/80">Profilbild</div>
                  <div className="text-base text-white/60">MB-Solutions Gründer</div>
                </div>
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Stat Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-10 w-64 p-6 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-10 w-64 p-6 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Projekte</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-16 w-48 p-5 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98+</div>
                <div className="text-sm text-muted-foreground">Lighthouse Score</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function AboutValues() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px] opacity-30" />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Star className="w-5 h-5" fill="currentColor" />
            Warum MB-Solutions
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Ihre{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Vorteile
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Was Sie von der Zusammenarbeit erwarten können
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1600px] mx-auto">
          {coreValues.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  value,
  index,
}: {
  value: typeof coreValues[0];
  index: number;
}) {
  const Icon = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full p-12 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-8">
            <motion.div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.iconColor} flex items-center justify-center shadow-xl`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>

            <div className="text-right">
              <div className="text-4xl font-bold text-primary">{value.stat}</div>
              <div className="text-sm text-muted-foreground">{value.statLabel}</div>
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">
            {value.title}
          </h3>

          <p className="text-xl text-muted-foreground leading-relaxed flex-grow">
            {value.description}
          </p>

          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 text-accent font-semibold">
              <Check className="w-5 h-5" />
              <span>Garantiert</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AboutTimeline() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
            <TrendingUp className="w-5 h-5" />
            Mein Werdegang
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Von der{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              IT zur Webentwicklung
            </span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-primary to-accent opacity-30" />

          <div className="space-y-20">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  milestone,
  index,
}: {
  milestone: typeof milestones[0];
  index: number;
}) {
  const Icon = milestone.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className={`relative grid lg:grid-cols-2 gap-12 items-center ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={`${isEven ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
          <Icon className="w-5 h-5" />
          {milestone.year}
        </div>
        <h3 className="text-4xl font-bold mb-4">{milestone.title}</h3>
        <p className="text-xl text-muted-foreground">{milestone.description}</p>
      </div>

      {/* Icon Circle - Center */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary items-center justify-center shadow-xl border-4 border-background z-10">
        <Icon className="w-12 h-12 text-white" />
      </div>

      {/* Image Placeholder */}
      <div className={`${isEven ? 'lg:col-start-2' : ''}`}>
        <div className="relative group">
          <div className="absolute -inset-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 via-primary/20 to-purple-500/20 backdrop-blur-xl border border-border/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-3">
                <Icon className="w-16 h-16 mx-auto text-accent opacity-40" />
                <div className="text-lg font-semibold text-white/60">
                  {milestone.year} Milestone
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AboutTechStack() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5" />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Code2 className="w-5 h-5" />
            Technologie-Stack
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Moderne{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Technologien
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Die Tools, mit denen ich Ihre Projekte realisiere
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8 bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <Code2 className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="relative py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-primary/10 to-background" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-[200px] opacity-40" />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-16 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

            <div className="relative z-10 text-center space-y-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold uppercase tracking-wider">
                <Sparkles className="w-5 h-5" />
                Bereit zu starten?
              </div>

              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block mb-4">Lassen Sie uns</span>
                <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  sprechen
                </span>
              </h2>

              <p className="text-2xl sm:text-3xl text-muted-foreground font-light max-w-3xl mx-auto">
                Gemeinsam entwickeln wir die perfekte Lösung für Ihr Projekt
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Link
                  href="/contact"
                  className="group relative px-12 py-6 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] text-white rounded-2xl font-semibold text-xl shadow-[0_8px_48px_rgba(6,182,212,0.35)] hover:shadow-[0_12px_64px_rgba(6,182,212,0.45)] transition-all duration-500 hover:brightness-110 hover:scale-105 w-full sm:w-auto"
                >
                  <span className="relative flex items-center justify-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    Kostenlose Beratung
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </span>
                </Link>

                <a
                  href="mailto:info@mb-solutions.biz"
                  className="group px-12 py-6 bg-background/50 hover:bg-background/80 backdrop-blur-sm border-2 border-border hover:border-accent/50 text-foreground rounded-2xl font-semibold text-xl transition-all duration-300 w-full sm:w-auto hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-3">
                    <Mail className="w-6 h-6" />
                    E-Mail schreiben
                  </span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-12 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  DSGVO-konform
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  &lt; 24h Antwort
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent" fill="currentColor" />
                  100% Zufriedenheit
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Missing User icon component
function User({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

// Missing Mail icon component
function Mail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

// ========================================
// 🌟 MAIN PAGE
// ========================================

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <StatementHeader />
      <AboutHero />
      <AboutValues />
      <AboutTimeline />
      <AboutTechStack />
      <AboutCTA />
    </main>
  );
}
