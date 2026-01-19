import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, TrendingUp, Search, FileText, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "SEO-Agentur Köln | Organische Rankings bei Google",
  description: "SEO-Agentur Köln: Mehr organische Rankings, mehr Traffic, mehr Anfragen. Technical SEO, Content, Linkbuilding. Nachhaltig & transparent.",
  alternates: { canonical: "https://mb-solutions.biz/marketing-agentur-koeln/seo-agentur-koeln" },
};

export default function SEOAgenturKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <StatementHeader />
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/marketing-agentur-koeln">Marketing-Agentur Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">SEO-Agentur Köln</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          SEO-Agentur Köln: Organische Rankings, die konvertieren
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          <span className="text-cyan-400 font-semibold">75% der Nutzer klicken nie auf Seite 2</span>.
          Wir bringen Sie auf Seite 1 – mit Technical SEO, Content-Optimierung und strategischem Linkbuilding.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Google Core Updates-sicher</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Monatliche Reports</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-cyan-500 px-8 py-4 rounded-lg font-semibold">
          SEO-Audit anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere SEO-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Search className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Technical SEO</h3>
            <p className="text-gray-300">Core Web Vitals, Mobile-First, Schema-Markup, Crawling-Optimierung. Die Basis für Rankings.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <FileText className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Content-Optimierung</h3>
            <p className="text-gray-300">Keyword-Recherche, On-Page-Optimierung, Content-Lücken schließen.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Linkbuilding</h3>
            <p className="text-gray-300">Hochwertige Backlinks von deutschen Websites. Kein Spam, nur White-Hat.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unser SEO-Prozess</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">Monat 1-2: Analyse & Quick Wins</div>
            <p className="text-gray-300">Technical SEO-Audit, Keyword-Mapping, Content-Gap-Analyse. Erste Optimierungen.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">Monat 3-6: Content & Links</div>
            <p className="text-gray-300">Content-Erstellung, On-Page-Optimierung, erste Backlinks. Rankings steigen.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">Monat 7-12: Skalierung</div>
            <p className="text-gray-300">Mehr Keywords, mehr Content, mehr Links. Top 3-Rankings für Hauptkeywords.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">Ab Monat 12: Wartung</div>
            <p className="text-gray-300">Monitoring, Content-Updates, neue Chancen nutzen. Rankings halten & ausbauen.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Wie lange dauert SEO?</h3>
            <p className="text-gray-300">Erste Rankings: 3-4 Monate. Top 10: 6-9 Monate. Top 3: 9-12 Monate. Abhängig von Wettbewerb und Ausgangslage.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet SEO?</h3>
            <p className="text-gray-300">Local SEO (Köln): ab 490€/Monat. National: ab 990€/Monat. Enterprise: ab 2.500€/Monat. Einmalige Setup-Gebühr: 890€.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Garantiert ihr Rankings?</h3>
            <p className="text-gray-300">Nein – niemand kann Rankings garantieren (Google ändert ständig Algorithmen). Aber: Wir garantieren messbare Verbesserungen in Traffic & Sichtbarkeit.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für mehr organischen Traffic?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenloser SEO-Audit: Wir zeigen Ihnen Ihr Potenzial.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-cyan-500 px-8 py-4 rounded-lg font-semibold">
            SEO-Audit anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere Marketing-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/marketing-agentur-koeln/local-seo-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Local SEO</h3>
            <p className="text-sm text-gray-400">Google My Business</p>
          </Link>
          <Link href="/marketing-agentur-koeln/google-ads-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Google Ads</h3>
            <p className="text-sm text-gray-400">Bezahlte Anzeigen</p>
          </Link>
          <Link href="/marketing-agentur-koeln/content-marketing-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Content-Marketing</h3>
            <p className="text-sm text-gray-400">Blog & SEO-Content</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
