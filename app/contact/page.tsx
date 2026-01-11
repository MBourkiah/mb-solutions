"use client";

import { motion } from "framer-motion";
import { StatementHeader } from "@/components/layout/StatementHeader";
import { ContactBentoGrid } from "@/components/sections/ContactBentoGrid";
import {
  ArrowRight,
  Sparkles,
  Search,
  Calendar,
  FileText,
  Phone,
} from "lucide-react";

/**
 * MB-Solutions Premium Contact Page
 *
 * Premium Kontaktseite im neuen Dark Design:
 * ✨ Dark Theme (#0A0E27) mit Cyan-Akzenten
 * ✨ Glassmorphism effects
 * ✨ Premium spacing & animations
 * ✨ Vollständiges Kontaktformular mit Validierung
 * ✨ Timeline & FAQ Sections
 */

// ========================================
// 📝 CONTENT DATA
// ========================================

const nextSteps = [
  {
    number: "01",
    title: "Anfrage prüfen",
    description: "Wir analysieren Ihre Anforderungen und prüfen die Machbarkeit innerhalb von 24 Stunden.",
    icon: Search,
    color: "cyan",
  },
  {
    number: "02",
    title: "Kostenloses Erstgespräch",
    description: "In einem Video-Call oder Telefonat besprechen wir Details, Ziele und Timeline.",
    icon: Calendar,
    color: "blue",
  },
  {
    number: "03",
    title: "Angebot & Projektstart",
    description: "Sie erhalten ein transparentes Festpreis-Angebot. Bei Beauftragung starten wir sofort.",
    icon: FileText,
    color: "purple",
  },
];

const faqs = [
  {
    question: "Wie schnell erhalten wir eine Antwort?",
    answer: "In der Regel antworten wir innerhalb von 24 Stunden (Werktage). Bei dringenden Anfragen kontaktieren Sie uns direkt per Telefon.",
  },
  {
    question: "Was kostet die Erstberatung?",
    answer: "Die Erstberatung ist komplett kostenlos und unverbindlich. Wir besprechen Ihre Anforderungen und erstellen ein maßgeschneidertes Angebot.",
  },
  {
    question: "Welche Informationen sollten wir bereitstellen?",
    answer: "Je detaillierter, desto besser: Projektbeschreibung, Ziele, Budget-Vorstellungen, Timeline, Referenzen. Das hilft uns, Sie optimal zu beraten.",
  },
  {
    question: "Sind unsere Daten sicher?",
    answer: "Ja, absolut. Alle Daten werden verschlüsselt übertragen (SSL), DSGVO-konform gespeichert und ausschließlich für Ihre Anfrage verwendet.",
  },
];

// ========================================
// 🎨 COMPONENTS
// ========================================

// ContactHero, ContactMethods and ContactFormSection removed - replaced by ContactBentoGrid

function NextStepsSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            Was passiert{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              als Nächstes?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Von der ersten Anfrage bis zum erfolgreichen Projektstart
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />

          {nextSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative text-center"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/40 mb-4 relative z-10 backdrop-blur-sm">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050812]" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            Häufige{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Fragen
            </span>
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
            <span className="block mb-3 text-white">Bereit für Ihr</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              nächstes Projekt?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Starten Sie noch heute mit einer kostenlosen Beratung
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-lg text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Formular ausfüllen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+491234567890"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-500/30 rounded-xl font-semibold text-lg text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Direkt anrufen
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm text-gray-500 mt-8"
          >
            🔒 Kostenlos, unverbindlich & DSGVO-konform
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ========================================
// 🌟 MAIN PAGE
// ========================================

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0E27] text-white overflow-hidden">
      {/* Header */}
      <StatementHeader />

      {/* Bento Grid - Unique Asymmetric Layout */}
      <ContactBentoGrid />

      {/* Next Steps */}
      <NextStepsSection />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <ContactCTA />
    </main>
  );
}
