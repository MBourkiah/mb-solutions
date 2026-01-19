import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ShoppingCart, Zap, CreditCard, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Shopify-Agentur Köln | E-Commerce Shop-Entwicklung",
  description: "Shopify-Agentur Köln: Professionelle Online-Shops mit Shopify. Theme-Anpassung, Payment-Integration, Apps. Von Setup bis Launch.",
  alternates: { canonical: "https://mb-solutions.biz/webdesign-koeln/shopify-agentur-koeln" },
};

export default function ShopifyAgenturKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <StatementHeader />
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/webdesign-koeln">Webdesign Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Shopify-Agentur</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          Shopify-Agentur Köln: Ihr Online-Shop in 4 Wochen
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Shopify ist die <span className="text-cyan-400 font-semibold">führende E-Commerce-Plattform weltweit</span>.
          Wir entwickeln damit professionelle Online-Shops – von Setup über Design bis Payment-Integration. Ohne technisches Fachwissen selbst verwaltbar.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Launch in 3-4 Wochen</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>50+ Zahlungsarten</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-cyan-500 px-8 py-4 rounded-lg font-semibold">
          Shopify-Projekt anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere Shopify-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <ShoppingCart className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Shop-Setup & Theme</h3>
            <p className="text-gray-300">Komplettes Setup: Domain, Hosting, Theme-Anpassung, Logo-Integration, Farbschema.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <CreditCard className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Payment & Versand</h3>
            <p className="text-gray-300">Shopify Payments, PayPal, Klarna. DHL/UPS-Integration, automatische Versandlabels.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Zap className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Apps & Integrationen</h3>
            <p className="text-gray-300">Product Reviews, E-Mail-Marketing (Klaviyo), Analytics, Upsell-Apps.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Warum Shopify?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">Schneller Launch</div>
            <p className="text-gray-300">3-4 Wochen von Null zum fertigen Shop. WooCommerce braucht oft 8-12 Wochen.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">Keine Updates nötig</div>
            <p className="text-gray-300">Shopify hostet & wartet alles. Keine WordPress-Plugin-Updates, keine Sicherheitslücken.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">Skalierbar</div>
            <p className="text-gray-300">Von 10 bis 10.000 Bestellungen/Monat. Shopify wächst mit.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">Mobile-optimiert</div>
            <p className="text-gray-300">70% der Käufer shoppen mobil. Shopify-Themes sind Mobile-First.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet ein Shopify-Shop?</h3>
            <p className="text-gray-300">Setup & Theme-Anpassung: ab 4.500€. Plus Shopify-Abo: 27-289€/Monat (je nach Plan). Transaktionsgebühren: 1,5-2% + Zahlungsgebühren.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Shopify vs. WooCommerce - was ist besser?</h3>
            <p className="text-gray-300">Shopify für: Schnellen Launch, keine Tech-Kenntnisse, sorglos hosten. WooCommerce für: Volle Kontrolle, Custom-Features, einmalige Kosten.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Kann ich meinen Shop selbst verwalten?</h3>
            <p className="text-gray-300">Ja! Shopify ist super benutzerfreundlich. Nach 1-2h Schulung können Sie Produkte, Bestellungen, Rabatte selbst verwalten.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Ihren Online-Shop?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose E-Commerce-Beratung: Shopify, WooCommerce oder Custom?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-cyan-500 px-8 py-4 rounded-lg font-semibold">
            Beratung anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere E-Commerce-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/webdesign-koeln/wordpress-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">WooCommerce</h3>
            <p className="text-sm text-gray-400">WordPress E-Commerce</p>
          </Link>
          <Link href="/marketing-agentur-koeln/google-ads-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Google Shopping Ads</h3>
            <p className="text-sm text-gray-400">Performance Marketing</p>
          </Link>
          <Link href="/marketing-agentur-koeln/seo-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Shopify SEO</h3>
            <p className="text-sm text-gray-400">Shop-Optimierung</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
