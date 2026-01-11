"use client";

import { motion } from "framer-motion";
import { Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * FAQ SECTION
 *
 * Visual Design: "Split Documentation Layout"
 * - Medium background (#0D1224) - lighter than TrustExpertise
 * - Two-column layout: Sticky intro left, accordion right
 * - Gradient accent divider
 * - Card-based accordion (not full-width bars)
 * - Top-right glow for visual interest
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
    answer: "Wir sind keine Agentur. Wir bauen performance-optimierte Systeme, keine WordPress-Templates. Direkter Zugang zum Tech-Lead, 47min Response Time, messbare Ergebnisse (98+ Lighthouse Score). Null Pitch-Decks, null Bullshit."
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

      {/* Medium Background - Lighter than TrustExpertise */}
      <div className="absolute inset-0 bg-[#0D1224]" />

      {/* Top-Right Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-600/15 via-cyan-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Vertical Gradient Lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* LEFT: Sticky Intro - 4 columns */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm mb-6"
              >
                <MessageCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-mono text-blue-300 uppercase tracking-wider">FAQ</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-black text-white mb-6"
              >
                Noch Fragen?<br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Hier sind die Antworten.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base text-gray-300 mb-8 leading-relaxed"
              >
                Die 8 häufigsten Fragen. Direkt, ehrlich, ohne Marketing-Sprech.
              </motion.p>

              {/* Quick Contact Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 backdrop-blur-sm"
              >
                <h3 className="text-sm font-bold text-white mb-2">Nicht dabei?</h3>
                <p className="text-xs text-gray-400 mb-4">
                  Wir antworten innerhalb von 47 Minuten.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Jetzt anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

            </div>
          </div>

          {/* RIGHT: FAQ Accordion - 8 columns */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group"
                >
                  <div className="rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-blue-400/30 backdrop-blur-sm overflow-hidden transition-all duration-300">

                    {/* Question Button */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 lg:px-8 py-6 flex items-start justify-between text-left group-hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        {/* Number Badge */}
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                          <span className="text-sm font-mono font-bold text-blue-400">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Question */}
                        <h3 className="text-base lg:text-lg font-bold text-white pr-4 leading-tight">
                          {faq.question}
                        </h3>
                      </div>

                      {/* Toggle Icon */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center transition-transform">
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
                        className="border-t border-white/10 bg-black/20"
                      >
                        <div className="px-6 lg:px-8 py-6 pl-20">
                          <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

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
