import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Palette, Zap, Globe, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Webflow-Agentur Köln | No-Code Website-Entwicklung",
  description: "Webflow-Agentur Köln: Professionelle Websites ohne Code. CMS, Animations, Responsive. Perfekt für Design-fokussierte Projekte.",
  alternates: { canonical: "https://mb-solutions.biz/webdesign-koeln/webflow-agentur-koeln" },
};

export default function WebflowAgenturKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <StatementHeader />
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/webdesign-koeln">Webdesign Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Webflow-Agentur</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Webflow-Agentur Köln: Design trifft No-Code
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Webflow ist die <span className="text-cyan-400 font-semibold">Design-to-Code-Plattform für anspruchsvolle Websites</span>.
          Wir entwickeln damit Design-fokussierte Websites mit Animationen, CMS und perfekter Performance – ohne eine Zeile Code.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Pixel-perfect Design</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>CMS integriert</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg font-semibold">
          Webflow-Projekt anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere Webflow-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Palette className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Custom Design</h3>
            <p className="text-gray-300">Individuelle Websites nach Ihrem CI/CD. Keine Templates, 100% unique.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Globe className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Webflow CMS</h3>
            <p className="text-gray-300">Eigene Inhalte pflegen: Blog, Portfolio, Team. Ohne Entwickler-Hilfe.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Zap className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Animations & Interactions</h3>
            <p className="text-gray-300">Scroll-Animationen, Hover-Effekte, Micro-Interactions – alles ohne Code.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Warum Webflow?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-purple-400 mb-2">Design-Freiheit</div>
            <p className="text-gray-300">Keine Theme-Grenzen wie bei WordPress. Jedes Design ist umsetzbar.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-purple-400 mb-2">Schnelle Ladezeiten</div>
            <p className="text-gray-300">Webflow generiert sauberen Code. Ladezeiten unter 1s, Core Web Vitals grün.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-purple-400 mb-2">Hosting inklusive</div>
            <p className="text-gray-300">CDN, SSL, Backups – alles dabei. Keine separaten Hosting-Kosten.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-purple-400 mb-2">SEO-Ready</div>
            <p className="text-gray-300">Meta-Tags, Alt-Texte, Schema-Markup – alles editierbar. Google-freundlich.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet eine Webflow-Website?</h3>
            <p className="text-gray-300">Einfache Websites ab 3.500€. Business-Websites mit CMS ab 5.500€. Plus Webflow-Hosting: 12-36€/Monat (je nach Plan).</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Webflow vs. WordPress - was ist besser?</h3>
            <p className="text-gray-300">Webflow für: Design-Fokus, kleinere Websites (bis 100 Seiten), keine Plugins nötig. WordPress für: Große Content-Mengen, E-Commerce (WooCommerce), Mehrsprachigkeit.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Kann ich meine Webflow-Website selbst bearbeiten?</h3>
            <p className="text-gray-300">Ja! Webflow Editor ist intuitiv. Nach 1-2h Schulung können Sie Texte, Bilder, Blog-Posts eigenständig ändern.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Design ohne Grenzen?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose Webflow-Beratung: Wir zeigen Ihnen, was möglich ist.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg font-semibold">
            Beratung anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere Webdesign-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/webdesign-koeln/wordpress-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">WordPress-Agentur</h3>
            <p className="text-sm text-gray-400">Custom Themes & Plugins</p>
          </Link>
          <Link href="/webdesign-koeln/react-entwicklung-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">React & Next.js</h3>
            <p className="text-sm text-gray-400">Web-Apps & Dashboards</p>
          </Link>
          <Link href="/marketing-agentur-koeln/seo-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Webflow SEO</h3>
            <p className="text-sm text-gray-400">Technical SEO Optimierung</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
