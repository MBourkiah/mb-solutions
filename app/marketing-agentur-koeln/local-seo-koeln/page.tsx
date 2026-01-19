import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, MapPin, Star, Target, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Local SEO Köln | Google My Business Optimierung",
  description: "Local SEO Köln: Dominiere die lokale Suche. Google My Business, Local Pack, Citations. Für lokale Unternehmen in Köln. Jetzt Local-Audit!",
  alternates: { canonical: "https://mb-solutions.biz/marketing-agentur-koeln/local-seo-koeln" },
};

export default function LocalSEOKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <StatementHeader />
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/marketing-agentur-koeln">Marketing-Agentur Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Local SEO Köln</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Local SEO Köln: Dominiere die lokale Suche
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          "Webdesign Köln", "IT-Support Köln", "Steuerberater Köln" – <span className="text-cyan-400 font-semibold">lokale Suchanfragen haben die höchste Kaufabsicht</span>.
          Wir optimieren Sie für das Local Pack (die 3 Google Maps-Einträge).
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <MapPin className="w-5 h-5 text-green-400" />
            <span>Google Maps Optimierung</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>Bewertungsmanagement</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-lg font-semibold">
          Local SEO-Audit anfordern <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Local SEO-Leistungen</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <MapPin className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Google My Business Optimierung</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Vollständiges Profil mit allen Infos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Regelmäßige Posts (Angebote, News)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Beantwortung von Fragen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Foto/Video-Uploads</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Star className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Bewertungsmanagement</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Strategie zum Sammeln von 5-Sterne-Bewertungen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Professionelle Antworten auf Reviews</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Bewertungs-Widgets für Website</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Target className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Lokale Landing Pages</h3>
            <p className="text-gray-300 mb-4">
              Stadtteil-spezifische Seiten (z.B. "Webdesign Köln Ehrenfeld") mit lokalen Keywords und Google Maps.
            </p>
            <p className="text-sm text-gray-400">Beispiele: Ehrenfeld, Innenstadt, Deutz, Mülheim</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">NAP-Optimierung</h3>
            <p className="text-gray-300 mb-4">
              Einheitliche Nennung von Name, Adresse, Telefon in allen Verzeichnissen (GoLocal, Yelp, Gelbe Seiten).
            </p>
            <p className="text-sm text-gray-400">Wichtig für Local SEO Rankings</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Was ist das Local Pack?</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl">
          <p className="text-gray-300 mb-4">
            Das <span className="text-cyan-400 font-semibold">Local Pack</span> sind die 3 Google Maps-Einträge,
            die bei lokalen Suchanfragen oben in den Suchergebnissen erscheinen.
          </p>
          <p className="text-gray-300 mb-4">
            Beispiel: Suche nach "Webdesign Köln" zeigt 3 Agenturen mit Bewertungen, Adresse, Öffnungszeiten.
          </p>
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
            <div className="text-lg font-semibold text-cyan-400 mb-2">Vorteil Local Pack:</div>
            <ul className="space-y-2 text-gray-300">
              <li>✅ Erscheint über den organischen Ergebnissen</li>
              <li>✅ Hohe Klickrate (25-30%)</li>
              <li>✅ Vertrauenssignal durch Bewertungen</li>
              <li>✅ Direkt Anrufen/Route möglich</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Wie lange dauert Local SEO?</h3>
            <p className="text-gray-300">Erste Local Pack-Platzierungen: 4-8 Wochen. Top 3 Positionen: 3-6 Monate. Abhängig von Wettbewerb und Ausgangslage.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet Local SEO?</h3>
            <p className="text-gray-300">Local SEO-Optimierung ab 490€/Monat. Inkl. Google My Business, Citations, Bewertungsmanagement. Einmalige Setup-Gebühr: 890€.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Brauche ich eine Website für Local SEO?</h3>
            <p className="text-gray-300">Nicht zwingend, aber empfohlen. Google My Business funktioniert allein, aber eine optimierte Website verstärkt die Rankings deutlich.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Local Rankings?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose Local SEO-Analyse für Ihr Unternehmen in Köln.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-lg font-semibold">
            Jetzt Analyse anfordern <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere Marketing-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/marketing-agentur-koeln/seo-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">SEO-Agentur Köln</h3>
            <p className="text-sm text-gray-400">Organische Rankings</p>
          </Link>
          <Link href="/marketing-agentur-koeln/google-ads-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Google Ads Köln</h3>
            <p className="text-sm text-gray-400">Bezahlte Anzeigen</p>
          </Link>
          <Link href="/marketing-agentur-koeln/content-marketing-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Content-Marketing</h3>
            <p className="text-sm text-gray-400">Blog & SEO-Content</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
