import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Target, DollarSign, BarChart3, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Ads Köln | Agentur für Performance Marketing",
  description: "Google Ads Köln: Professionelle Kampagnen-Betreuung. Search, Shopping, Display. ROI-fokussiert, transparent, messbar. Jetzt starten!",
  alternates: { canonical: "https://mb-solutions.biz/marketing-agentur-koeln/google-ads-koeln" },
};

export default function GoogleAdsKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/marketing-agentur-koeln">Marketing-Agentur Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Google Ads Köln</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Google Ads Köln: Sofort sichtbar, messbar erfolgreich
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          SEO dauert Monate – <span className="text-cyan-400 font-semibold">Google Ads bringt Traffic ab Tag 1</span>.
          Wir erstellen, optimieren und betreuen Ihre Kampagnen. ROI-fokussiert, transparent, messbar.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Google Ads zertifiziert</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Monatliche Reports</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 rounded-lg font-semibold">
          Kostenlose Erstberatung <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere Google Ads-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Target className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Google Search Ads</h3>
            <p className="text-gray-300">Textanzeigen bei Google-Suche. Perfekt für Dienstleistungen & B2B.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <DollarSign className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Google Shopping Ads</h3>
            <p className="text-gray-300">Produktanzeigen mit Bild & Preis. Ideal für E-Commerce & Shops.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <BarChart3 className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Display & Remarketing</h3>
            <p className="text-gray-300">Banner-Werbung, Retargeting von Website-Besuchern.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Wie wir arbeiten</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-yellow-400 mb-2">1. Strategie & Setup</div>
            <p className="text-gray-300">Keyword-Recherche, Kampagnen-Struktur, Conversion-Tracking, Landing-Page-Check.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-yellow-400 mb-2">2. Kampagnen-Launch</div>
            <p className="text-gray-300">Anzeigentexte erstellen, Gebote setzen, Budget verteilen. Live-Schaltung.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-yellow-400 mb-2">3. Laufende Optimierung</div>
            <p className="text-gray-300">A/B-Tests, Gebotsanpassungen, Keyword-Erweiterung. Wöchentliche Checks.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-yellow-400 mb-2">4. Reporting & Scaling</div>
            <p className="text-gray-300">Monatliche Reports mit ROI-Analyse. Erfolgreiche Kampagnen hochskalieren.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet Google Ads?</h3>
            <p className="text-gray-300">Agentur-Gebühr: ab 490€/Monat. Google Ads-Budget: ab 500€/Monat (geht direkt an Google). Einmalige Setup-Gebühr: 690€.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Google Ads vs. SEO - was ist besser?</h3>
            <p className="text-gray-300">Google Ads für: Sofort Traffic, kurzfristige Kampagnen, Produkt-Launches. SEO für: Langfristig, kostenlos (nach 6-12 Monaten), Vertrauen. Ideal: Beides kombinieren!</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Wie schnell sehe ich Ergebnisse?</h3>
            <p className="text-gray-300">Traffic: ab Tag 1. Optimierte Kampagnen: nach 2-4 Wochen. Voller ROI: nach 2-3 Monaten (A/B-Tests, Optimierung).</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für messbare Ergebnisse?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose Google Ads-Erstberatung: Wir analysieren Ihr Potenzial.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 rounded-lg font-semibold">
            Erstberatung anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere Marketing-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/marketing-agentur-koeln/seo-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">SEO-Agentur</h3>
            <p className="text-sm text-gray-400">Organische Rankings</p>
          </Link>
          <Link href="/marketing-agentur-koeln/local-seo-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Local SEO</h3>
            <p className="text-sm text-gray-400">Google My Business</p>
          </Link>
          <Link href="/marketing-agentur-koeln/content-marketing-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Content-Marketing</h3>
            <p className="text-sm text-gray-400">Landing Pages & Blog</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
