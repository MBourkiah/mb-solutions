/**
 * Marketing-Agentur Köln - SEO-optimierte Hub-Seite
 *
 * SEO-Strategie:
 * - Keyword: "marketing köln", "seo köln", "online marketing köln"
 * - Wortzahl: 1.800+
 * - Schema.org Service-Markup
 */

import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, TrendingUp, Target, Search, BarChart3, Megaphone, CheckCircle, Award } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Marketing-Agentur Köln | SEO, Ads & Content | MB-Solutions",
  description: "Marketing-Agentur Köln: SEO, Google Ads & Content-Marketing für messbare Ergebnisse. Spezialisiert auf lokales Marketing in Köln. Jetzt starten!",
  keywords: ["marketing köln", "seo köln", "online marketing köln", "marketing agentur köln", "seo agentur köln"],
  openGraph: {
    title: "Marketing-Agentur Köln | Sichtbarkeit, die verkauft",
    description: "SEO, Google Ads, Content-Marketing: 280% mehr organische Anfragen nach 6 Monaten. Über 40 erfolgreiche SEO-Projekte in Köln.",
    url: "https://mb-solutions.biz/marketing-agentur-koeln",
    siteName: "MB-Solutions",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://mb-solutions.biz/marketing-agentur-koeln",
  },
};

export default function MarketingAgenturKoelnPage() {
  return (
    <>
      {/* Schema.org Service Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Online Marketing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MB-Solutions",
              "url": "https://mb-solutions.biz"
            },
            "areaServed": {
              "@type": "City",
              "name": "Köln"
            },
            "description": "SEO, Google Ads und Content-Marketing für messbare Sichtbarkeit bei Google.",
            "offers": {
              "@type": "Offer",
              "url": "https://mb-solutions.biz/marketing-agentur-koeln",
              "priceCurrency": "EUR",
              "price": "890",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "890",
                "priceCurrency": "EUR",
                "valueAddedTaxIncluded": "true"
              }
            }
          })
        }}
      />

      <main className="relative bg-[#0A0E27] text-white min-h-screen">
        {/* Header */}
        <StatementHeader />

        {/* Breadcrumb */}
        <div className="container mx-auto px-6 pt-32 pb-8">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Marketing-Agentur Köln</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Marketing-Agentur Köln: Sichtbarkeit, die verkauft
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Die beste Website bringt nichts, wenn sie niemand findet. Bei MB-Solutions sorgen wir dafür, dass Ihre Zielgruppe Sie bei Google entdeckt,
              über Anzeigen auf Sie aufmerksam wird und durch überzeugende Inhalte zu Kunden konvertiert.
              <span className="text-cyan-400 font-semibold"> Kein Buzzword-Marketing, sondern messbare Ergebnisse</span>:
              mehr Traffic, mehr Anfragen, mehr Umsatz.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>280% mehr Anfragen (Ø 6 Monate)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Award className="w-5 h-5 text-green-400" />
                <span>ROAS 4:1+ bei Google Ads</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>40+ SEO-Projekte in Köln</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-pink-500/20"
              >
                Kostenlose Marketing-Analyse
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                SEO-Audit anfordern
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-16">Unsere Marketing-Leistungen</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SEO */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 transition-all">
              <Search className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">SEO – Suchmaschinenoptimierung Köln</h3>
              <p className="text-gray-300 mb-6">
                Organische Rankings auf Seite 1 bei Google. Technisches SEO, Content-Optimierung und Linkaufbau mit messbaren Ergebnissen.
                Spezialisiert auf lokale Suche in Köln.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Technisches SEO (Core Web Vitals, Crawlability)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>On-Page-SEO (Keywords, Meta-Daten, Content)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Linkaufbau (White-Hat-Strategien)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Monatliches Reporting & Transparenz</span>
                </li>
              </ul>
              <Link
                href="/marketing-agentur-koeln/seo-agentur-koeln"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zu SEO Köln →
              </Link>
            </div>

            {/* Local SEO */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 transition-all">
              <Target className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Local SEO für Köln</h3>
              <p className="text-gray-300 mb-6">
                Dominiere die lokale Suche. Google-My-Business-Setup, lokale Citations und Bewertungsmanagement.
                Erscheinen Sie im Local Pack (die 3 Google Maps-Einträge).
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Google My Business Optimierung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Bewertungsmanagement (5-Sterne-Strategie)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Lokale Landing Pages (Stadtteile)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>NAP-Optimierung (Verzeichnisse)</span>
                </li>
              </ul>
              <Link
                href="/marketing-agentur-koeln/local-seo-koeln"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zu Local SEO →
              </Link>
            </div>

            {/* Google Ads */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 transition-all">
              <BarChart3 className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Google Ads (SEA)</h3>
              <p className="text-gray-300 mb-6">
                Bezahlte Anzeigen, die konvertieren. Keyword-Recherche, Anzeigengestaltung und kontinuierliche Optimierung
                für maximalen ROAS (Return on Ad Spend).
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Suchanzeigen, Display-Ads, Shopping-Ads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Landing Page-Optimierung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>A/B-Testing von Anzeigen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>ROAS-Ziel: mind. 3:1</span>
                </li>
              </ul>
              <Link
                href="/marketing-agentur-koeln/google-ads-koeln"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zu Google Ads →
              </Link>
            </div>

            {/* Content Marketing */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 transition-all">
              <Megaphone className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Content-Marketing</h3>
              <p className="text-gray-300 mb-6">
                Inhalte, die Ihre Expertise zeigen. SEO-optimierte Artikel, Case Studies und Whitepapers.
                Content-Strategien, die organischen Traffic generieren.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Blog-Artikel (1.500-2.500 Wörter)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Case Studies & Social Proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Whitepapers als Lead-Magnete</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Content-Distribution (Social Media)</span>
                </li>
              </ul>
              <Link
                href="/marketing-agentur-koeln/content-marketing-koeln"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zu Content-Marketing →
              </Link>
            </div>
          </div>
        </section>

        {/* Weitere Marketing-Services */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-12">Weitere Marketing-Leistungen</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Social Media Marketing", desc: "Instagram, LinkedIn, Facebook", href: "/marketing-agentur-koeln/social-media-marketing-koeln" },
              { name: "Corporate Design & Branding", desc: "Logo, Brand Guidelines, Geschäftsausstattung", href: "/marketing-agentur-koeln/corporate-design-koeln" },
              { name: "Conversion-Optimierung", desc: "A/B-Testing, Heatmaps, CRO", href: "/marketing-agentur-koeln/conversion-optimierung-koeln" },
              { name: "Marketing-Automation", desc: "E-Mail-Sequenzen, CRM, Retargeting", href: "/marketing-agentur-koeln/marketing-automation-koeln" },
              { name: "E-Mail-Marketing", desc: "Newsletter, Drip-Kampagnen", href: "/marketing-agentur-koeln/email-marketing-koeln" },
              { name: "Grafikdesign", desc: "Printdesign, Infografiken", href: "/marketing-agentur-koeln/grafikdesign-koeln" },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-pink-500/50 transition-all group"
              >
                <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{service.name}</h3>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Erfolgsbeispiele */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Erfolgsbeispiele</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rechtsanwälte Müller & Partner",
                metric: "320%",
                desc: "Mehr organische Anfragen in 6 Monaten",
                detail: "Ranking Platz 1 für 'Rechtsanwalt Köln Arbeitsrecht'"
              },
              {
                title: "Café Rheinblick",
                metric: "186",
                desc: "Reservierungen über Ads/Monat",
                detail: "ROAS 5,2:1 bei 800€ Budget"
              },
              {
                title: "Handwerk Bauer",
                metric: "210%",
                desc: "Mehr Lead-Formulare",
                detail: "Bounce-Rate von 68% auf 32%"
              }
            ].map((case_study, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-5xl font-bold text-cyan-400 mb-4">{case_study.metric}</div>
                <div className="text-xl font-semibold mb-3">{case_study.desc}</div>
                <div className="text-gray-400 mb-4">{case_study.title}</div>
                <p className="text-sm text-gray-500">{case_study.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Warum MB-Solutions */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Warum MB-Solutions für Marketing?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Messbare Ergebnisse</h3>
              <p className="text-gray-300">
                Wir arbeiten mit klaren KPIs: Rankings, Traffic, Conversion-Rate, ROI. Monatliche Reports zeigen, was wir erreicht haben.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Technisches Know-how</h3>
              <p className="text-gray-300">
                Unser Team aus SEO-Experten, Developern und Marketing-Strategen versteht die Technik hinter Marketing.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Lokale Expertise Köln</h3>
              <p className="text-gray-300">
                Wir kennen den Kölner Markt, lokale Wettbewerber und die besten Strategien für Local SEO.
              </p>
            </div>
          </div>
        </section>

        {/* Marketing-Pakete */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Marketing-Pakete & Preise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "SEO Starter",
                price: "890€",
                period: "/Monat",
                features: [
                  "Technisches SEO-Audit",
                  "Keyword-Recherche (20 Keywords)",
                  "On-Page-Optimierung (10 Seiten)",
                  "Monatliches Reporting",
                  "Laufzeit: mind. 6 Monate"
                ]
              },
              {
                name: "SEO Professional",
                price: "1.690€",
                period: "/Monat",
                popular: true,
                features: [
                  "Alles aus Starter",
                  "Content-Erstellung (2 Artikel/Monat)",
                  "Linkaufbau (4-6 Backlinks/Monat)",
                  "Local SEO Optimierung",
                  "Laufzeit: mind. 6 Monate"
                ]
              },
              {
                name: "Google Ads",
                price: "490€",
                period: "/Monat + Ad Budget",
                features: [
                  "Kampagnen-Setup",
                  "Keyword-Recherche",
                  "Anzeigentexte & Testing",
                  "Landing Page-Optimierung",
                  "Keine Provision auf Ad Spend"
                ]
              }
            ].map((paket, idx) => (
              <div
                key={idx}
                className={`bg-white/5 backdrop-blur-sm border ${paket.popular ? 'border-pink-500' : 'border-white/10'} rounded-2xl p-8 ${paket.popular ? 'relative' : ''}`}
              >
                {paket.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Beliebt
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{paket.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{paket.price}</span>
                  <span className="text-gray-400">{paket.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {paket.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center ${paket.popular ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400' : 'bg-white/5 hover:bg-white/10'} px-6 py-3 rounded-lg font-semibold transition-all`}
                >
                  Anfragen
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Häufige Fragen zu Marketing</h2>

          <div className="max-w-3xl space-y-6">
            {[
              {
                q: "Wie lange dauert es, bis SEO Ergebnisse zeigt?",
                a: "Erste Rankings-Verbesserungen: 2-3 Monate. Signifikante Traffic-Steigerung: 4-6 Monate. Top-Rankings für umkämpfte Keywords: 9-12 Monate. SEO ist langfristig – aber nachhaltig und kosteneffizient."
              },
              {
                q: "Was ist der Unterschied zwischen SEO und SEA?",
                a: "SEO (Suchmaschinenoptimierung): Organische Rankings. Langfristig, nachhaltig, kosteneffizienter. SEA (Suchmaschinenwerbung): Bezahlte Google Ads. Sofort Traffic, aber laufende Kosten. Unsere Empfehlung: Beides kombinieren."
              },
              {
                q: "Garantiert ihr Rankings auf Seite 1?",
                a: "Seriöse SEO-Agenturen garantieren keine Rankings – das wäre unseriös. Wir garantieren aber: Professionelle Arbeit nach Best Practices, messbare Traffic-Steigerungen, transparentes Reporting."
              },
              {
                q: "Was kostet SEO in Köln?",
                a: "SEO Starter: ab 890€/Monat. SEO Professional: ab 1.690€/Monat. Google Ads Management: ab 490€/Monat + Ad Budget. Content-Marketing: ab 1.290€/Monat. Genaues Angebot nach Erstgespräch."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local SEO */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">Marketing für Köln und Umgebung</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Als Kölner Marketing-Agentur kennen wir die lokale Wirtschaft: Wettbewerbs-Situation in Köln, lokale Suchvolumina,
              Kölner Branchenverzeichnisse und lokale Backlink-Quellen.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Wir optimieren für Keywords wie "Webdesign Köln", "IT-Support Köln" und helfen Ihnen,
              im <span className="text-cyan-400 font-semibold">Local Pack (Google Maps)</span> zu erscheinen.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-pink-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Bereit für mehr Sichtbarkeit?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns über Ihre Marketing-Strategie sprechen. Kostenlose SEO-Analyse inklusive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-pink-500/20"
              >
                Kostenlose SEO-Analyse
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+4922112345678"
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                0221 / 123 456 78
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-8">Weitere Leistungen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/webdesign-koeln"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">SEO-optimiertes Webdesign</h3>
              <p className="text-sm text-gray-400">Websites, die von Anfang an ranken</p>
            </Link>
            <Link
              href="/it-services-koeln"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT-Infrastruktur für Marketing</h3>
              <p className="text-sm text-gray-400">Server-Performance & Core Web Vitals</p>
            </Link>
            <Link
              href="/marketing-agentur-koeln/seo-agentur-koeln"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">SEO-Agentur Köln</h3>
              <p className="text-sm text-gray-400">Organische Rankings auf Seite 1</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
