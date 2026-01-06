import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Home, TrendingUp, MapPin, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing für Immobilienmakler Köln | SEO & Google Ads",
  description: "Marketing für Immobilienmakler in Köln: Local SEO, Google Ads, Immobilien-Websites. Mehr Anfragen, mehr Verkäufe. Spezialisiert auf Makler.",
  alternates: { canonical: "https://mb-solutions.biz/marketing-agentur-koeln/marketing-immobilienmakler-koeln" },
};

export default function MarketingImmobilienmaklerKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/marketing-agentur-koeln">Marketing-Agentur Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Marketing für Immobilienmakler</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Marketing für Immobilienmakler in Köln
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          <span className="text-cyan-400 font-semibold">92% der Immobilien-Suchenden starten online</span>.
          Wir entwickeln Marketing-Strategien für Makler: Local SEO, Google Ads, Immobilien-Websites, Portal-Optimierung.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Local SEO für Stadtteile</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Google Ads für Immobilien</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 rounded-lg font-semibold">
          Marketing-Beratung anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Speziell für Immobilienmakler</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <MapPin className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Local SEO für Stadtteile</h3>
            <p className="text-gray-300">"Immobilienmakler Köln Ehrenfeld", "Wohnung kaufen Deutz" – wir optimieren für stadtteil-spezifische Keywords.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Home className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Immobilien-Websites</h3>
            <p className="text-gray-300">Moderne Makler-Websites mit Objekt-Präsentation, Bewertungsrechner, Portal-Integration (ImmoScout24).</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <TrendingUp className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Google Ads für Immobilien</h3>
            <p className="text-gray-300">Kampagnen für "Wohnung kaufen", "Haus mieten", "Immobilienbewertung". Regionale Targeting.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere Leistungen</h2>
        <div className="max-w-3xl space-y-4">
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Local SEO: Rankings für "Immobilienmakler [Stadtteil]"</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Google Ads für Kaufinteressenten & Verkäufer</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Makler-Website mit Objekt-Datenbank & Suchfunktion</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Portal-Optimierung (ImmoScout24, Immowelt)</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Content-Marketing: Stadtteil-Guides, Marktberichte</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Warum spezialisiertes Marketing für Makler?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-yellow-400 mb-2">Lokale Keywords</div>
            <p className="text-gray-300">"Immobilienmakler Köln" hat 5.400 Suchanfragen/Monat. Wir optimieren für Stadtteil-Keywords mit weniger Konkurrenz.</p>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-orange-400 mb-2">Portal-Integration</div>
            <p className="text-gray-300">Automatischer Import von ImmoScout24, Immowelt. Objekte erscheinen automatisch auf Website.</p>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-red-400 mb-2">Lead-Generierung</div>
            <p className="text-gray-300">Bewertungsrechner, Finanzierungsrechner – Lead-Magneten speziell für Immobilien.</p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-purple-400 mb-2">Stadtteil-Expertise</div>
            <p className="text-gray-300">Stadtteil-Guides positionieren Sie als Experten für Ehrenfeld, Deutz, Südstadt.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet Marketing für Immobilienmakler?</h3>
            <p className="text-gray-300">Local SEO: ab 690€/Monat. Google Ads: ab 990€/Monat (inkl. 500€ Werbebudget). Makler-Website: ab 4.500€ einmalig.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Wie lange dauert SEO für Makler?</h3>
            <p className="text-gray-300">Erste Rankings (Stadtteil-Keywords): 2-3 Monate. Top 3 "Immobilienmakler Köln": 6-12 Monate. Google My Business-Optimierung: sofort.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Reicht ImmoScout24 nicht aus?</h3>
            <p className="text-gray-300">Portale bringen Konkurrenz-Objekte. Ihre eigene Website positioniert Sie als Experten, bringt organischen Traffic, keine Provisions-Gebühren.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für mehr Anfragen?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose Marketing-Analyse speziell für Immobilienmakler in Köln.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 rounded-lg font-semibold">
            Analyse anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere Marketing-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/marketing-agentur-koeln/local-seo-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Local SEO</h3>
            <p className="text-sm text-gray-400">Google My Business</p>
          </Link>
          <Link href="/marketing-agentur-koeln/google-ads-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Google Ads</h3>
            <p className="text-sm text-gray-400">Performance Marketing</p>
          </Link>
          <Link href="/webdesign-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Makler-Website</h3>
            <p className="text-sm text-gray-400">Immobilien-Portal</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
