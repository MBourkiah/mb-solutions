import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Utensils, Calendar, MapPin, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Webdesign für Restaurants Köln | Speisekarte & Online-Reservierung",
  description: "Webdesign für Restaurants & Gastronomie in Köln: Websites mit Online-Speisekarte, Tisch-Reservierung, Events. Mobiloptimiert & appetitlich.",
  alternates: { canonical: "https://mb-solutions.biz/webdesign-koeln/webdesign-restaurants-koeln" },
};

export default function WebdesignRestaurantsKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/webdesign-koeln">Webdesign Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Webdesign für Restaurants</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Webdesign für Restaurants & Gastronomie in Köln
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          <span className="text-cyan-400 font-semibold">78% der Gäste checken die Speisekarte online</span>, bevor sie reservieren.
          Wir entwickeln appetitliche Restaurant-Websites mit Online-Speisekarte, Tisch-Reservierung und Event-Kalender.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Online-Speisekarte</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Tisch-Reservierung</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-lg font-semibold">
          Restaurant-Website anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Speziell für Gastronomie</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Utensils className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Online-Speisekarte</h3>
            <p className="text-gray-300">Digitale Menükarte mit Fotos, Preisen, Allergenen. Einfach aktualisierbar, mobil-optimiert.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Calendar className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Online-Reservierung</h3>
            <p className="text-gray-300">Tisch-Buchung 24/7: OpenTable, TheFork oder Custom-System. Automatische Bestätigung.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <MapPin className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Google Maps & Bewertungen</h3>
            <p className="text-gray-300">Google My Business Integration, Bewertungs-Widget, Öffnungszeiten, Anfahrt.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Beispiel-Features</h2>
        <div className="max-w-3xl space-y-4">
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Food-Fotografie-Integration (professionelle Gerichte-Fotos)</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Allergene & Zusatzstoffe (gesetzlich vorgeschrieben)</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Event-Kalender (Weinproben, Live-Musik, Themen-Abende)</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Instagram-Feed-Integration (Social Proof)</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Gutschein-Shop für Geschenkgutscheine</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Für welche Gastronomie?</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Restaurants & Bistros
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Cafés & Bäckereien
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Pizzerien & Italiener
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Burger-Restaurants & Street Food
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Sushi & Asia-Restaurants
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Bars & Cocktail-Lounges
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet eine Restaurant-Website?</h3>
            <p className="text-gray-300">Einfache Restaurant-Website mit Speisekarte: ab 2.500€. Mit Online-Reservierung: ab 3.500€. Mit Online-Shop (Gutscheine): ab 4.500€.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Kann ich die Speisekarte selbst ändern?</h3>
            <p className="text-gray-300">Ja! Nach kurzer Schulung können Sie Gerichte hinzufügen/entfernen, Preise ändern, Tages-Specials einpflegen. Ohne Programmierkenntnisse.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Brauchen wir professionelle Food-Fotos?</h3>
            <p className="text-gray-300">Empfohlen! Food-Fotografie erhöht Reservierungen um 30-40%. Wir können einen Food-Fotografen vermitteln (ab 490€ für 10-15 Gerichte).</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Ihre Restaurant-Website?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose Erstberatung speziell für Gastronomie in Köln.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-lg font-semibold">
            Beratung anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere Branchen-Lösungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/webdesign-koeln/shopify-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Online-Shop für Lebensmittel</h3>
            <p className="text-sm text-gray-400">Shopify E-Commerce</p>
          </Link>
          <Link href="/marketing-agentur-koeln/local-seo-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Local SEO für Restaurants</h3>
            <p className="text-sm text-gray-400">Google My Business</p>
          </Link>
          <Link href="/marketing-agentur-koeln/google-ads-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Google Ads für Restaurants</h3>
            <p className="text-sm text-gray-400">Lokale Anzeigen</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
