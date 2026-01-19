import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Scale, FileText, Shield, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Webdesign für Anwälte Köln | Kanzlei-Websites DSGVO-konform",
  description: "Webdesign für Anwälte & Kanzleien in Köln: Professionelle Websites mit Rechtsgebieten, Mandanten-Portal, DSGVO-konform. Seriös & modern.",
  alternates: { canonical: "https://mb-solutions.biz/webdesign-koeln/webdesign-anwaelte-koeln" },
};

export default function WebdesignAnwaelteKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <StatementHeader />
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/webdesign-koeln">Webdesign Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Webdesign für Anwälte</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Webdesign für Anwälte & Kanzleien in Köln
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          <span className="text-cyan-400 font-semibold">91% der Mandanten recherchieren online</span>, bevor sie eine Kanzlei kontaktieren.
          Wir entwickeln seriöse, DSGVO-konforme Kanzlei-Websites, die Vertrauen schaffen und Mandanten gewinnen.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>DSGVO-konform</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Rechtsanwalts-Design</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold">
          Kanzlei-Website anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Speziell für Kanzleien</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Scale className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Rechtsgebiete & Expertise</h3>
            <p className="text-gray-300">Übersichtliche Darstellung Ihrer Fachgebiete: Familienrecht, Arbeitsrecht, Strafrecht, etc.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <FileText className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Kanzlei-Team & Werdegang</h3>
            <p className="text-gray-300">Anwälte vorstellen: Qualifikationen, Zulassungen, Fachanwalt-Titel.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Shield className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Mandanten-Portal</h3>
            <p className="text-gray-300">Sichere Mandanten-Kommunikation, Dokumenten-Upload, Terminsynchronisation.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Typische Features für Kanzleien</h2>
        <div className="max-w-3xl space-y-4">
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Rechtsgebiete mit Detailseiten (SEO-optimiert)</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Anwalts-Profile mit Fachanwalt-Titeln</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Blog für Rechts-News & Fachartikel (SEO-Boost)</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Mandanten-Bewertungen & Testimonials</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Online-Terminbuchung & Erstberatung-Anfrage</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Für welche Rechtsgebiete?</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Familienrecht & Scheidung
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Arbeitsrecht & Kündigungsschutz
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Strafrecht & Verkehrsrecht
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Mietrecht & Immobilienrecht
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Erbrecht & Testamente
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
            Wirtschaftsrecht & Gesellschaftsrecht
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet eine Kanzlei-Website?</h3>
            <p className="text-gray-300">Einfache Kanzlei-Website: ab 3.500€. Mit Rechtsgebiets-Seiten & Blog: ab 5.500€. Mandanten-Portal: ab 8.500€.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Ist die Website DSGVO-konform?</h3>
            <p className="text-gray-300">Ja! SSL-Verschlüsselung, Datenschutzerklärung für Anwälte, sichere Kontaktformulare, Cookie-Consent. Anwalts-spezifischer Datenschutz.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Können wir Fachartikel selbst veröffentlichen?</h3>
            <p className="text-gray-300">Ja! WordPress-Backend mit Blog-Funktion. Nach Schulung können Sie News & Fachartikel eigenständig veröffentlichen.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Ihre Kanzlei-Website?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose Erstberatung speziell für Anwaltskanzleien in Köln.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold">
            Beratung anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere Branchen-Lösungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/webdesign-koeln/webdesign-aerzte-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Webdesign für Ärzte</h3>
            <p className="text-sm text-gray-400">Praxis-Websites</p>
          </Link>
          <Link href="/it-services-koeln/it-services-steuerberater-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT für Steuerberater</h3>
            <p className="text-sm text-gray-400">DATEV & Sicherheit</p>
          </Link>
          <Link href="/marketing-agentur-koeln/seo-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">SEO für Anwälte</h3>
            <p className="text-sm text-gray-400">Rechtsgebiete-Rankings</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
