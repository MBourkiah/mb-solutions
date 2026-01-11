"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

/**
 * FAQ SECTION
 *
 * Design Philosophy: "The Knowledge Base"
 * - Clean accordion design (matches aesthetic)
 * - SEO-optimized with Schema.org markup
 * - Glassmorphism cards on expand
 * - Product-focused language (not agency-speak)
 * - Reduces pre-sales friction
 *
 * Layout: Centered single column
 * - Maximum readability
 * - Generous spacing
 * - Clear interaction states
 */

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Was kostet eine Next.js Web-Anwendung?",
    answer: "Transparente Festpreise: Business-Site ab 3.500€, E-Commerce ab 8.000€, Custom Web-App ab 12.000€. Alle Preise inkl. Performance-Optimierung, SEO-Setup, DSGVO-Compliance und 30 Tage Support. Keine versteckten Kosten."
  },
  {
    question: "Wie lange dauert die Entwicklung?",
    answer: "15 Werktage von Konzept bis Production. Agile Sprints mit täglichen Updates. Sie haben GitHub-Zugriff und sehen jeden Commit. Garantierte Meilensteine, keine 'dauert noch'-Emails."
  },
  {
    question: "Was unterscheidet euch von Agenturen?",
    answer: "Wir sind keine Agentur. Wir bauen Performance-optimierte Systeme, keine WordPress-Templates. Direkter Zugang zum Tech-Lead, 47min Response Time, messbare Ergebnisse (98+ Lighthouse Score). Null Pitch-Decks, null Bullshit."
  },
  {
    question: "Ist DSGVO-Konformität enthalten?",
    answer: "Ja, als Standard. SSL-Verschlüsselung, Cookie-Consent (DSGVO-konform), datenschutz-konforme Analytics (Plausible/Matomo), vollständige Dokumentation. Inklusive Impressum & Datenschutz-Seiten."
  },
  {
    question: "Welche Technologien nutzt ihr?",
    answer: "Next.js 15, React 19, TypeScript, Tailwind CSS. Hosting auf Vercel Edge Network. Kein WordPress, keine Legacy-Frameworks. Enterprise-Grade Stack mit Active Maintenance und Production Support."
  },
  {
    question: "Bietet ihr Wartung und Support?",
    answer: "Ja. 30 Tage Hotline nach Launch (inklusive). Danach: Support-Pakete ab 149€/Monat (Updates, Backups, Monitoring, 2h Response Time) oder stundenweise nach Aufwand. Sie sind nie allein."
  },
  {
    question: "Wird meine Site in Google gefunden?",
    answer: "Garantiert. Alle Sites werden SEO-ready ausgeliefert: Meta-Tags, Schema.org Markup, 98+ Lighthouse Score, Mobile-First. Optional: Laufendes SEO-Coaching (Content, Backlinks, Technical SEO)."
  },
  {
    question: "Kann ich die Website selbst bearbeiten?",
    answer: "Ja. Entweder via Headless CMS (Sanity/Contentful) oder direkter GitHub-Zugriff. Wir schulen euer Team (30min Video-Call) und liefern vollständige Dokumentation. Volle Kontrolle, kein Vendor Lock-in."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0E27] to-transparent pointer-events-none z-10" />

      {/* Technical Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #06B6D4 1px, transparent 1px),
            linear-gradient(to bottom, #06B6D4 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[900px] mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="mb-16 sm:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">FAQ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
          >
            Noch Fragen?<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Hier sind die Antworten.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Die 8 häufigsten Fragen. Direkt, ehrlich, ohne Marketing-Sprech.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-sm overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 lg:px-8 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <h3 className="text-base lg:text-lg font-bold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Plus className="w-4 h-4 text-cyan-400" />
                  )}
                </div>
              </button>

              {/* Answer Panel */}
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 lg:px-8 pb-6 border-t border-white/10"
                >
                  <p className="text-sm lg:text-base text-gray-400 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 mb-6">
            Weitere Fragen? Wir antworten innerhalb von 47 Minuten.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-base hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            <span>Jetzt Anfragen</span>
          </a>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none z-10" />

      {/* Schema.org FAQPage Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

    </section>
  );
}
