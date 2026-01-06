"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

/**
 * FAQ Section mit Schema.org FAQPage Markup
 *
 * SEO Benefits:
 * - Erscheint in Google Featured Snippets
 * - Beantwortet häufige Kundenanfragen
 * - Verbessert E-A-T (Expertise, Authority, Trust)
 * - Reduziert Support-Anfragen
 *
 * Inspiration: Mitbewerber-Analyse (webdesign.koeln)
 */

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Was kostet eine professionelle Webseite?",
    answer: "Die Kosten variieren je nach Umfang und Komplexität. Eine einfache Business-Website startet ab 2.500€, während komplexe Web-Anwendungen ab 8.000€ beginnen. Wir bieten transparente Festpreise und flexible Zahlungsmodelle. Jedes Projekt erhält eine kostenlose Tech-Analyse vorab."
  },
  {
    question: "Wie lange dauert die Entwicklung einer Website?",
    answer: "Ein Standard-Projekt dauert 4-8 Wochen von Konzept bis Launch. Komplexere Anwendungen 8-16 Wochen. Wir arbeiten agil und liefern regelmäßige Updates. Ihr Projekt hat oberste Priorität mit garantierten Meilensteinen."
  },
  {
    question: "Ist meine Website DSGVO-konform?",
    answer: "Ja, DSGVO-Konformität ist bei uns Standard. Alle Websites werden mit Cookie-Consent, Datenschutz-konformen Analytics (Plausible/Matomo) und SSL-Verschlüsselung ausgeliefert. Inklusive aller rechtlich notwendigen Seiten (Datenschutz, Impressum)."
  },
  {
    question: "Welches CMS oder Framework verwenden Sie?",
    answer: "Wir spezialisieren uns auf Next.js 14+ mit React - das modernste Framework für Performance und SEO. Alternativ: WordPress für Content-fokussierte Sites oder Headless CMS (Strapi, Sanity) für maximale Flexibilität. Die Wahl richtet sich nach Ihren Anforderungen."
  },
  {
    question: "Bieten Sie auch Wartung und Support an?",
    answer: "Ja, wir bieten Full-Service Support mit Antwortzeit <2h. Wartungspakete ab 99€/Monat inkl. Updates, Backups, Security-Monitoring und technischem Support. Oder flexibel nach Aufwand. Sie sind nie allein."
  },
  {
    question: "Wird meine Website in Google gefunden?",
    answer: "Ja, alle Websites werden SEO-optimiert ausgeliefert: optimierte Meta-Tags, Schema.org Markup, perfekte Performance (98+ Lighthouse Score), mobile-first Design. Optional: Laufendes SEO-Coaching und Content-Marketing für Top-Rankings."
  },
  {
    question: "Kann ich die Website selbst bearbeiten?",
    answer: "Ja, Sie erhalten ein intuitives CMS (WordPress oder Headless) zur Content-Pflege. Inklusive Schulung und Dokumentation. Bei Next.js: Git-basierter Workflow mit Review-System. Wir passen uns Ihrem technischen Level an."
  },
  {
    question: "Was unterscheidet MB-Solutions von anderen Agenturen?",
    answer: "Performance-First (98+ Lighthouse), moderne Tech-Stack (Next.js/React), persönlicher Service (Antwort <2h), transparente Preise, DSGVO-Expertise, und Full-Stack-Kompetenz. Sie arbeiten direkt mit Senior-Entwicklern, nicht mit Junior-Teams."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Schema.org FAQPage JSON-LD
  const faqSchema = {
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
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-[#0F1629] to-[#0A0E27]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Antworten auf die wichtigsten Fragen zu unseren Services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 backdrop-blur-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg md:text-xl font-bold text-white pr-8">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <Plus className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>
                  </div>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 16 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Ihre Frage wurde nicht beantwortet?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-white hover:scale-105 transition-transform duration-300"
          >
            Jetzt persönlich beraten lassen
          </a>
        </motion.div>

      </div>
    </section>
  );
}
