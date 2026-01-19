import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Code2, Zap, Layers, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "React & Next.js Entwicklung Köln | Web-Apps | MB-Solutions",
  description: "React & Next.js Entwicklung Köln: Moderne Web-Apps, Progressive Web Apps (PWA), Server-Side Rendering. Schnell, skalierbar, SEO-optimiert.",
  alternates: { canonical: "https://mb-solutions.biz/webdesign-koeln/react-entwicklung-koeln" },
};

export default function ReactEntwicklungKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <StatementHeader />

      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/webdesign-koeln">Webdesign Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">React & Next.js Entwicklung</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          React & Next.js Entwicklung: Moderne Web-Apps aus Köln
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          React ist die <span className="text-cyan-400 font-semibold">meistgenutzte JavaScript-Library weltweit</span>.
          Wir entwickeln damit skalierbare Web-Apps, Dashboards und Progressive Web Apps (PWA) – schnell, wartbar, zukunftssicher.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Next.js 14+ (App Router)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>TypeScript & Tailwind CSS</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold">
          React-Projekt anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere React-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Code2 className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Web-Apps & Dashboards</h3>
            <p className="text-gray-300">Komplexe Anwendungen: CRM, ERP, Admin-Dashboards, SaaS-Plattformen.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Zap className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Progressive Web Apps (PWA)</h3>
            <p className="text-gray-300">Native-ähnliche Web-Apps: Offline-Nutzung, Push-Notifications, Install-Prompt.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Next.js SEO-Websites</h3>
            <p className="text-gray-300">Server-Side Rendering (SSR) für beste SEO-Performance. Diese Website läuft auf Next.js!</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Warum React/Next.js?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-cyan-400 mb-2">Schnell</div>
            <p className="text-gray-300">Virtual DOM = blitzschnelle Updates. Ladezeiten unter 1s durch Code-Splitting.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-cyan-400 mb-2">SEO-Ready</div>
            <p className="text-gray-300">Next.js Server-Side Rendering: Google crawlt perfekt. Core Web Vitals im grünen Bereich.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-cyan-400 mb-2">Skalierbar</div>
            <p className="text-gray-300">Component-basierte Architektur. Von MVP bis Enterprise-App.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-cyan-400 mb-2">Zukunftssicher</div>
            <p className="text-gray-300">React wird von Facebook/Meta entwickelt. Riesige Community, ständige Updates.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet eine React-Web-App?</h3>
            <p className="text-gray-300">MVP ab 8.500€. Business-Dashboards ab 12.000€. Komplexe SaaS-Plattformen ab 25.000€. Genaues Angebot nach Scoping-Workshop.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">React vs. WordPress - was ist besser?</h3>
            <p className="text-gray-300">WordPress für: Content-Websites, Blogs, einfache E-Commerce. React für: Web-Apps, Dashboards, komplexe Logik, hohe Interaktivität.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Ist React gut für SEO?</h3>
            <p className="text-gray-300">Ja, mit Next.js! Server-Side Rendering (SSR) sorgt für perfekte Google-Indexierung. Diese Website ist der Beweis.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Ihre Web-App?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenloser Tech-Stack-Workshop: Wir analysieren, ob React die richtige Wahl ist.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold">
            Workshop anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere Webdesign-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/webdesign-koeln/wordpress-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">WordPress-Agentur</h3>
            <p className="text-sm text-gray-400">Custom Themes & Plugins</p>
          </Link>
          <Link href="/webdesign-koeln/shopify-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Shopify-Agentur</h3>
            <p className="text-sm text-gray-400">E-Commerce-Shops</p>
          </Link>
          <Link href="/marketing-agentur-koeln/seo-agentur-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">SEO für React/Next.js</h3>
            <p className="text-sm text-gray-400">Technical SEO Optimierung</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
