import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, FileText, PenTool, TrendingUp, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Content-Marketing Köln | Blog, SEO-Texte & Whitepaper",
  description: "Content-Marketing Köln: SEO-optimierte Blog-Artikel, Landing Pages, Whitepaper. Mehr Traffic, mehr Leads, mehr Autorität. Professionell & messbar.",
  alternates: { canonical: "https://mb-solutions.biz/marketing-agentur-koeln/content-marketing-koeln" },
};

export default function ContentMarketingKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/marketing-agentur-koeln">Marketing-Agentur Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Content-Marketing</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Content-Marketing Köln: Content, der konvertiert
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          <span className="text-cyan-400 font-semibold">70% der B2B-Buyer recherchieren vor dem Kauf</span>.
          Wir erstellen Content, der Ihre Zielgruppe findet, überzeugt und zu Kunden macht. SEO-optimiert, conversion-fokussiert.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>SEO-optimiert</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Conversion-fokussiert</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-lg font-semibold">
          Content-Strategie anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere Content-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <FileText className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Blog-Artikel (SEO)</h3>
            <p className="text-gray-300">1.500-2.500 Wörter, keyword-optimiert, mit Grafiken. Für Rankings & Traffic.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <PenTool className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Landing Pages</h3>
            <p className="text-gray-300">Conversion-optimierte Texte für Google Ads, Produkt-Launches, Lead-Magneten.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <TrendingUp className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Whitepaper & E-Books</h3>
            <p className="text-gray-300">Lead-Magneten für B2B. 15-30 Seiten, professionelles Design.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unser Content-Prozess</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-pink-400 mb-2">1. Content-Strategie</div>
            <p className="text-gray-300">Zielgruppen-Analyse, Keyword-Recherche, Content-Kalender für 3-6 Monate.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-pink-400 mb-2">2. Content-Erstellung</div>
            <p className="text-gray-300">Recherche, Schreiben, SEO-Optimierung, Grafiken, Lektorat. Ready to publish.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-pink-400 mb-2">3. Publishing & Promotion</div>
            <p className="text-gray-300">Veröffentlichung auf Ihrer Website, Social Media-Sharing, Newsletter-Integration.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-pink-400 mb-2">4. Performance-Tracking</div>
            <p className="text-gray-300">Traffic, Rankings, Conversions messen. Top-Performer identifizieren & skalieren.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Content-Formate</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-xl font-bold mb-2">Blog-Artikel</div>
            <p className="text-gray-300 mb-2">1.500-2.500 Wörter, SEO-optimiert</p>
            <p className="text-sm text-cyan-400">Ab 490€/Artikel</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-xl font-bold mb-2">Landing Page</div>
            <p className="text-gray-300 mb-2">500-1.000 Wörter, conversion-fokussiert</p>
            <p className="text-sm text-cyan-400">Ab 350€</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-xl font-bold mb-2">Whitepaper</div>
            <p className="text-gray-300 mb-2">15-30 Seiten, inkl. Design</p>
            <p className="text-sm text-cyan-400">Ab 2.500€</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-xl font-bold mb-2">Pillar Page</div>
            <p className="text-gray-300 mb-2">3.000-5.000 Wörter, umfassend</p>
            <p className="text-sm text-cyan-400">Ab 890€</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Wie oft sollte ich Content veröffentlichen?</h3>
            <p className="text-gray-300">Minimum: 2 Artikel/Monat. Optimal: 4-8 Artikel/Monat. Google liebt frischen Content – aber Qualität geht vor Quantität.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Schreibt ein Mensch oder KI?</h3>
            <p className="text-gray-300">Mensch! Wir nutzen KI für Recherche, aber alle Texte werden von erfahrenen Redakteuren geschrieben, geprüft und optimiert.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Wie lange dauert es, bis Content rankt?</h3>
            <p className="text-gray-300">Erste Rankings: 4-8 Wochen. Top 10: 3-6 Monate. Top 3: 6-12 Monate. Abhängig von Keyword-Schwierigkeit und Domain Authority.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Content, der konvertiert?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose Content-Strategie-Session: Wir zeigen Ihnen, welcher Content Ihre Zielgruppe erreicht.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-lg font-semibold">
            Strategie-Session anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere Marketing-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/marketing-agentur-koeln/seo-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">SEO-Agentur</h3>
            <p className="text-sm text-gray-400">Content-SEO & Rankings</p>
          </Link>
          <Link href="/marketing-agentur-koeln/google-ads-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Google Ads</h3>
            <p className="text-sm text-gray-400">Landing Page-Content</p>
          </Link>
          <Link href="/marketing-agentur-koeln/local-seo-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Local SEO</h3>
            <p className="text-sm text-gray-400">Lokaler Content</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
