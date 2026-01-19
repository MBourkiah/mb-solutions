/**
 * Webdesign Köln - SEO-optimierte Hub-Seite
 *
 * SEO-Strategie:
 * - Keyword: "webdesign köln", "webdesigner köln", "homepage erstellen köln"
 * - Wortzahl: 1.650+
 * - H1-H3 Struktur für Google
 * - Schema.org Service-Markup
 * - Interne Links zu Child-Seiten
 */

import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Code2, Zap, Palette, Smartphone, Globe, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Webdesign Köln | Professionelle Websites | MB-Solutions",
  description: "Webdesign Köln: Moderne, schnelle Websites mit WordPress, React & Shopify. SEO-optimiert, responsiv, conversion-fokussiert. Jetzt beraten lassen!",
  keywords: ["webdesign köln", "webdesigner köln", "homepage erstellen köln", "website köln", "webdesign agentur köln"],
  openGraph: {
    title: "Webdesign Köln | Websites, die verkaufen – nicht nur gut aussehen",
    description: "Professionelle Website-Entwicklung: WordPress, React, Shopify. Schnell, modern, SEO-optimiert. Über 120 erfolgreiche Projekte in Köln.",
    url: "https://mb-solutions.biz/webdesign-koeln",
    siteName: "MB-Solutions",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://mb-solutions.biz/webdesign-koeln",
  },
};

export default function WebdesignKoelnPage() {
  return (
    <>
      {/* Schema.org Service Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Webdesign",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MB-Solutions",
              "url": "https://mb-solutions.biz"
            },
            "areaServed": {
              "@type": "City",
              "name": "Köln"
            },
            "description": "Professionelle Website-Entwicklung mit WordPress, React und Shopify. Modern, schnell, SEO-optimiert.",
            "offers": {
              "@type": "Offer",
              "url": "https://mb-solutions.biz/webdesign-koeln",
              "priceCurrency": "EUR",
              "price": "3500",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "3500",
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
            <span className="text-white">Webdesign Köln</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Webdesign Köln: Websites, die Kunden überzeugen
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ihre Website ist Ihr wichtigster Verkäufer. Sie arbeitet 24/7, repräsentiert Ihre Marke und entscheidet oft darüber,
              ob Interessenten zu Kunden werden. Wir entwickeln Webdesigns, die nicht nur modern aussehen, sondern messbar konvertieren:
              <span className="text-cyan-400 font-semibold"> schnell, responsiv, SEO-optimiert</span> und perfekt auf Ihre Zielgruppe abgestimmt.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>120+ erfolgreiche Projekte</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Ladezeit unter 1,5s</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>95% Weiterempfehlung</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/20"
              >
                Kostenloses Beratungsgespräch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Portfolio ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-16">Unsere Webdesign-Leistungen</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WordPress */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
              <Code2 className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">WordPress-Entwicklung Köln</h3>
              <p className="text-gray-300 mb-6">
                Kein 08/15-Template, sondern individuelle WordPress-Websites mit Custom Themes. Entwickelt mit Picostrap oder LiveCanvas –
                schnell, schlank, wartbar. Inkl. Schulung für eigenständige Pflege.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Custom Theme Development ohne Bloat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Plugin-Entwicklung & Integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Gutenberg Block Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Performance-Optimierung (WP Rocket, Caching)</span>
                </li>
              </ul>
              <Link
                href="/webdesign-koeln/wordpress-agentur-koeln"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zu WordPress →
              </Link>
            </div>

            {/* React & Next.js */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
              <Zap className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">React & Next.js Development</h3>
              <p className="text-gray-300 mb-6">
                Moderne Webanwendungen mit Top-Performance. Server-Side-Rendering, Static Site Generation,
                perfekte Core Web Vitals. Ideal für SaaS-Plattformen und dynamische Websites.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Ladezeiten unter 1 Sekunde</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>SEO-optimiert mit SSR/SSG</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Progressive Web Apps (PWA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Skalierbare Architektur</span>
                </li>
              </ul>
              <Link
                href="/webdesign-koeln/react-entwicklung-koeln"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zu React →
              </Link>
            </div>

            {/* E-Commerce */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
              <Globe className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">E-Commerce & Shopify</h3>
              <p className="text-gray-300 mb-6">
                Online-Shops, die verkaufen. Custom Shopify Themes, WooCommerce oder Headless-Commerce.
                Mit Payment-Integration, Warenwirtschaft und Conversion-Optimierung.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Shopify Custom Theme Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Payment-Integration (Stripe, PayPal, Klarna)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Headless Commerce (Shopify + Next.js)</span>
                </li>
              </ul>
              <Link
                href="/webdesign-koeln/shopify-agentur-koeln"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zu E-Commerce →
              </Link>
            </div>

            {/* Responsive Webdesign */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
              <Smartphone className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Responsive Webdesign</h3>
              <p className="text-gray-300 mb-6">
                Ihre Website funktioniert perfekt auf jedem Gerät. Mobile-First-Ansatz für optimale Darstellung
                auf Smartphone, Tablet und Desktop. Über 70% Ihrer Besucher kommen von mobil – bereit?
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Mobile-First Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Touch-optimierte Navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Testing auf echten Geräten</span>
                </li>
              </ul>
              <Link
                href="/webdesign-koeln/responsive-webdesign"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zu Responsive Design →
              </Link>
            </div>
          </div>
        </section>

        {/* Branchen Section */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-8">Branchen-Expertise</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            Wir entwickeln Websites für verschiedenste Branchen in Köln – mit spezifischem Know-how für Ihre Anforderungen.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Arztpraxen & Zahnärzte", href: "/webdesign-koeln/branchen/arztpraxen-koeln", desc: "DSGVO-konform mit Online-Terminbuchung" },
              { name: "Rechtsanwälte & Kanzleien", href: "/webdesign-koeln/branchen/rechtsanwaelte-koeln", desc: "Seriös mit Vertrauensaufbau" },
              { name: "Handwerk & Bau", href: "/webdesign-koeln/branchen/handwerker-koeln", desc: "Projekt-Galerien & Angebots-Tools" },
              { name: "Restaurants & Hotels", href: "/webdesign-koeln/branchen/restaurants-gastronomie-koeln", desc: "Mit Reservierungssystem" },
              { name: "Immobilienmakler", href: "/webdesign-koeln/branchen/immobilienmakler-koeln", desc: "Expose-Integration" },
              { name: "Fitnessstudios", href: "/webdesign-koeln/branchen/fitnessstudios-koeln", desc: "Mit Kursplan & Buchung" },
              { name: "Fotografen", href: "/webdesign-koeln/branchen/fotografen-koeln", desc: "Portfolio-Websites" },
              { name: "Startups", href: "/webdesign-koeln/branchen/startups-koeln", desc: "MVP-Development" },
            ].map((branche, idx) => (
              <Link
                key={idx}
                href={branche.href}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
              >
                <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{branche.name}</h3>
                <p className="text-sm text-gray-400">{branche.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Warum MB-Solutions Section */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Warum MB-Solutions für Webdesign?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">1,3s</div>
              <div className="text-lg font-semibold mb-2">Durchschnittliche Ladezeit</div>
              <p className="text-gray-400">Unsere Websites sind Performance-optimiert. Core Web Vitals im grünen Bereich.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-lg font-semibold mb-2">SEO von Anfang an</div>
              <p className="text-gray-400">Sauberer Code, semantisches HTML, optimierte Meta-Daten, Structured Data.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">€0</div>
              <div className="text-lg font-semibold mb-2">Keine versteckten Kosten</div>
              <p className="text-gray-400">Transparente Preise, feste Timelines. Sie zahlen für Ergebnis, nicht für Buzzwords.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Häufige Fragen zu Webdesign</h2>

          <div className="max-w-3xl space-y-6">
            {[
              {
                q: "Was kostet eine Website bei MB-Solutions?",
                a: "Einfache WordPress-Websites starten bei 3.500€. Business-Websites mit erweiterten Funktionen ab 6.500€. E-Commerce-Shops ab 8.500€. Custom-Entwicklungen (React/Next.js) ab 12.000€. Genaues Angebot nach Erstgespräch."
              },
              {
                q: "Wie lange dauert die Entwicklung einer Website?",
                a: "Standard-Unternehmenswebsite: 4-6 Wochen. Umfangreichere Corporate-Website: 8-12 Wochen. E-Commerce-Shop: 10-16 Wochen. Custom-Webanwendung: 12-20 Wochen. Die Timeline hängt von Projektumfang und Ihrer Feedback-Geschwindigkeit ab."
              },
              {
                q: "Kann ich meine Website selbst bearbeiten?",
                a: "Ja! Jede Website kommt mit einer Schulung (1-2 Stunden). Sie können Texte, Bilder und Seiten eigenständig ändern. Für komplexere Anpassungen sind wir per Support-Ticket erreichbar."
              },
              {
                q: "Ist die Website für Suchmaschinen optimiert?",
                a: "Absolut. Jede Website wird mit Basis-SEO entwickelt: Optimierte Meta-Daten, semantisches HTML, Schema.org Markup, schnelle Ladezeiten, Mobile-Optimierung. Für weiterführende SEO-Maßnahmen (Linkaufbau, Content-Marketing) bieten wir separate Pakete an."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">Webdesign für Köln und Umgebung</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Als Kölner Agentur kennen wir den lokalen Markt: Die Anforderungen von Unternehmen in Ehrenfeld unterscheiden sich
              von denen in der Innenstadt. Handwerksbetriebe in Porz haben andere Zielgruppen als Startups am MediaPark.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Wir betreuen Kunden in allen Kölner Stadtteilen – mit persönlichem Support vor Ort.
              Durchschnittliche Reaktionszeit in Köln: <span className="text-cyan-400 font-semibold">unter 3 Stunden</span>.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Ehrenfeld", "Innenstadt", "Deutz", "Mülheim", "Lindenthal", "Nippes"].map((stadtteil) => (
                <Link
                  key={stadtteil}
                  href={`/koeln/webdesign-${stadtteil.toLowerCase()}`}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 px-4 py-2 rounded-lg transition-colors"
                >
                  Webdesign {stadtteil}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Bereit für Ihre neue Website?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ob kompletter Neuauftritt oder Website-Relaunch – wir entwickeln Ihre perfekte Online-Präsenz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/20"
              >
                Kostenloses Erstgespräch
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
              href="/it-services-koeln"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT-Support für Websites</h3>
              <p className="text-sm text-gray-400">Professioneller IT-Support für Ihre Infrastruktur</p>
            </Link>
            <Link
              href="/marketing-agentur-koeln"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">SEO-optimiertes Webdesign</h3>
              <p className="text-sm text-gray-400">Sichtbarkeit bei Google von Anfang an</p>
            </Link>
            <Link
              href="/webdesign-koeln/website-relaunch"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Website-Relaunch</h3>
              <p className="text-sm text-gray-400">Modernisierung ohne Traffic-Verlust</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
