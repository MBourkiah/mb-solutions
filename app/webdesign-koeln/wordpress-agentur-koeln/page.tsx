/**
 * WordPress-Agentur Köln - Child-Seite
 * SEO: wordpress agentur köln, wordpress entwicklung köln
 */

import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Code2, Zap, Shield, Wrench, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "WordPress-Agentur Köln | Custom Theme Development | MB-Solutions",
  description: "WordPress-Agentur Köln: Custom Themes, Plugin-Entwicklung & Performance-Optimierung. Keine Templates – individuelle Lösungen. Jetzt anfragen!",
  keywords: ["wordpress agentur köln", "wordpress entwicklung köln", "wordpress programmierer köln"],
  openGraph: {
    title: "WordPress-Agentur Köln | Professionelle WordPress-Entwicklung",
    description: "Custom WordPress-Entwicklung: Themes, Plugins, Performance. Über 80 WordPress-Projekte in Köln. Schnell, schlank, wartbar.",
    url: "https://mb-solutions.biz/webdesign-koeln/wordpress-agentur-koeln",
  },
  alternates: {
    canonical: "https://mb-solutions.biz/webdesign-koeln/wordpress-agentur-koeln",
  },
};

export default function WordPressAgenturKoelnPage() {
  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "WordPress-Entwicklung",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MB-Solutions"
            },
            "areaServed": {
              "@type": "City",
              "name": "Köln"
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
            <Link href="/webdesign-koeln" className="hover:text-cyan-400 transition-colors">Webdesign Köln</Link>
            <span className="mx-2">/</span>
            <span className="text-white">WordPress-Agentur Köln</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-6 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              WordPress-Agentur Köln: Custom Theme Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              WordPress ist nicht gleich WordPress. Während viele Agenturen Standard-Templates anpassen, entwickeln wir
              <span className="text-cyan-400 font-semibold"> individuelle WordPress-Websites mit Custom Themes</span>,
              die genau zu Ihrer Marke passen. Schnell, schlank, wartbar – ohne Bloat.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>80+ WordPress-Projekte</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Ladezeit unter 1,5s</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Picostrap & LiveCanvas</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/20"
              >
                WordPress-Projekt anfragen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Unsere WordPress-Leistungen</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Code2 className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Custom Theme Development</h3>
              <p className="text-gray-300 mb-6">
                Kein 08/15-Template, sondern ein Theme, das 100% auf Ihr Design abgestimmt ist. Entwickelt mit
                Picostrap (Bootstrap 5) oder LiveCanvas – schnell, schlank, wartbar.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Individuelles Design ohne Bloat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Bootstrap 5 oder Tailwind CSS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Gutenberg-kompatibel</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Wrench className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Plugin-Entwicklung & Integration</h3>
              <p className="text-gray-300 mb-6">
                Benötigen Sie spezielle Funktionen? Wir entwickeln Custom Plugins oder integrieren bestehende Lösungen
                professionell: WooCommerce, WPML, ACF, Yoast SEO.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Custom Plugin Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>WooCommerce-Setup & Anpassung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>API-Integrationen</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Performance-Optimierung</h3>
              <p className="text-gray-300 mb-6">
                WordPress kann schnell sein – wenn es richtig entwickelt wurde. Wir optimieren Datenbankabfragen,
                implementieren Caching und minimieren HTTP-Requests.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>WP Rocket & Caching-Setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Bild-Optimierung (WebP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Core Web Vitals im grünen Bereich</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Gutenberg Block Development</h3>
              <p className="text-gray-300 mb-6">
                Individuelle Content-Blöcke für den WordPress-Editor. Sie können Ihre Inhalte selbst pflegen,
                ohne das Design zu zerstören.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Custom Blocks mit React</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>ACF Block Integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Full-Site-Editing Support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Warum WordPress mit MB-Solutions?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">Kein Bloat</div>
              <p className="text-gray-300">
                Wir entwickeln schlanke Themes ohne unnötige Features. Nur das, was Sie wirklich brauchen.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">SEO-Ready</div>
              <p className="text-gray-300">
                Sauberer Code, semantisches HTML, Yoast SEO vorinstalliert und konfiguriert.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">Schulung inkl.</div>
              <p className="text-gray-300">
                1-2h Schulung für eigenständige Content-Pflege. Sie bleiben unabhängig.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Häufige Fragen zu WordPress</h2>

          <div className="max-w-3xl space-y-6">
            {[
              {
                q: "Was kostet eine WordPress-Website?",
                a: "Einfache WordPress-Websites starten bei 3.500€. Business-Websites mit Custom Theme ab 5.500€. E-Commerce mit WooCommerce ab 7.500€. Genaues Angebot nach Erstgespräch."
              },
              {
                q: "Kann ich meine WordPress-Website selbst bearbeiten?",
                a: "Ja! Nach Launch gibt es eine 1-2h Schulung. Sie können Texte, Bilder, Seiten eigenständig ändern. Für komplexere Anpassungen sind wir per Support-Ticket da."
              },
              {
                q: "Ist WordPress sicher?",
                a: "Ja, wenn es richtig konfiguriert ist. Wir installieren Security-Plugins, konfigurieren Firewalls und führen regelmäßige Updates durch. Optional: Wartungsvertrag ab 149€/Monat."
              },
              {
                q: "WordPress vs. Webflow - was ist besser?",
                a: "WordPress ist besser für: Blogs, E-Commerce (WooCommerce), Mehrsprachigkeit, große Content-Mengen. Webflow für: Design-fokussierte Projekte, kleinere Websites. Wir beraten Sie gerne!"
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Bereit für Ihr WordPress-Projekt?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns über Ihre WordPress-Website sprechen. Kostenlose Beratung & unverbindliches Angebot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/20"
              >
                Projekt anfragen
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
            <Link href="/webdesign-koeln/react-entwicklung-koeln" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">React & Next.js Development</h3>
              <p className="text-sm text-gray-400">Moderne Webanwendungen</p>
            </Link>
            <Link href="/webdesign-koeln/shopify-agentur-koeln" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Shopify-Agentur</h3>
              <p className="text-sm text-gray-400">E-Commerce-Shops</p>
            </Link>
            <Link href="/marketing-agentur-koeln/seo-agentur-koeln" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">WordPress-SEO</h3>
              <p className="text-sm text-gray-400">Optimierung für Google</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
