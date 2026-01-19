import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Stethoscope, Calendar, Shield, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Webdesign für Ärzte Köln | Praxis-Websites mit Termin-Buchung",
  description: "Webdesign für Ärzte & Arztpraxen in Köln: DSGVO-konforme Websites mit Online-Terminbuchung. Jameda-Integration, Sprechzeiten, Kontaktformular.",
  alternates: { canonical: "https://mb-solutions.biz/webdesign-koeln/webdesign-aerzte-koeln" },
};

export default function WebdesignAerzteKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <StatementHeader />
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/webdesign-koeln">Webdesign Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Webdesign für Ärzte</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Webdesign für Ärzte & Arztpraxen in Köln
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          <span className="text-cyan-400 font-semibold">84% der Patienten suchen online nach Ärzten</span>.
          Wir entwickeln DSGVO-konforme Praxis-Websites mit Online-Terminbuchung, Jameda-Integration und mobilem Design.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>DSGVO-konform</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Online-Terminbuchung</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold">
          Praxis-Website anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Speziell für Arztpraxen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Calendar className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Online-Terminbuchung</h3>
            <p className="text-gray-300">Doctolib, Jameda Kalender oder Custom-Lösung. 24/7 buchbar, automatische Bestätigung.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Stethoscope className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Leistungen & Sprechzeiten</h3>
            <p className="text-gray-300">Übersichtliche Darstellung aller Leistungen, Öffnungszeiten, Praxisteam, Anfahrt.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Shield className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">DSGVO & Datenschutz</h3>
            <p className="text-gray-300">SSL-Verschlüsselung, sichere Kontaktformulare, Datenschutzerklärung für Arztpraxen.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Beispiel-Features</h2>
        <div className="max-w-3xl space-y-4">
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Jameda-Profil Integration & Bewertungs-Widget</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Praxisteam-Vorstellung mit Fotos & Qualifikationen</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Behandlungs-Spektrum (Vorsorge, Diagnostik, Therapien)</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Google Maps Integration & Anfahrt</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Notfall-Kontakte & Vertretungsplan</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Für welche Fachrichtungen?</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Allgemeinmedizin & Hausärzte
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Zahnärzte & Kieferorthopäden
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Orthopädie & Physiotherapie
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Hautärzte & Dermatologie
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Gynäkologie & Frauenärzte
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Kinderärzte & Pädiatrie
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet eine Praxis-Website?</h3>
            <p className="text-gray-300">Einfache Praxis-Website: ab 2.500€. Mit Online-Terminbuchung: ab 3.500€. Plus monatliche Kosten (Hosting, Wartung): ab 49€/Monat.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Ist die Website DSGVO-konform?</h3>
            <p className="text-gray-300">Ja! SSL-Verschlüsselung, Cookie-Banner, Datenschutzerklärung speziell für Arztpraxen, sichere Kontaktformulare.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Kann ich die Website selbst pflegen?</h3>
            <p className="text-gray-300">Ja! Nach 1h Schulung können Sie Sprechzeiten, Urlaub, News eigenständig ändern. Für größere Anpassungen sind wir da.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Ihre Praxis-Website?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose Erstberatung speziell für Arztpraxen in Köln.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold">
            Beratung anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere Branchen-Lösungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/webdesign-koeln/webdesign-anwaelte-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Webdesign für Anwälte</h3>
            <p className="text-sm text-gray-400">Kanzlei-Websites</p>
          </Link>
          <Link href="/webdesign-koeln/webdesign-restaurants-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Webdesign für Restaurants</h3>
            <p className="text-sm text-gray-400">Speisekarte & Reservierung</p>
          </Link>
          <Link href="/it-services-koeln/it-services-arztpraxen-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT für Arztpraxen</h3>
            <p className="text-sm text-gray-400">Praxissoftware & Security</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
