import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Smartphone, Tablet, Monitor, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Responsive Webdesign Köln | Mobile-First Development",
  description: "Responsive Webdesign aus Köln: Perfekte Darstellung auf allen Geräten. Mobile-First, Touch-optimiert, schnell. Über 70% mobile Nutzer – bereit?",
  alternates: { canonical: "https://mb-solutions.biz/webdesign-koeln/responsive-webdesign" },
};

export default function ResponsiveWebdesignPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/webdesign-koeln">Webdesign Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Responsive Webdesign</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Responsive Webdesign: Perfekt auf jedem Gerät
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Über <span className="text-cyan-400 font-semibold">70% Ihrer Besucher</span> kommen von Mobilgeräten.
          Wir entwickeln Mobile-First: Ihre Website funktioniert perfekt auf Smartphone, Tablet und Desktop.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Mobile-First Development</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Touch-optimiert</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold">
          Projekt anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Was ist Responsive Webdesign?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Smartphone className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Mobile (Smartphone)</h3>
            <p className="text-gray-300">Optimiert für Touch-Bedienung, große Buttons, optimierte Navigation.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Tablet className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Tablet (iPad)</h3>
            <p className="text-gray-300">Angepasstes Layout für mittlere Bildschirmgrößen, Querformat-Support.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Monitor className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Desktop (PC)</h3>
            <p className="text-gray-300">Volle Content-Darstellung, optimale Nutzung großer Bildschirme.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Warum ist Responsive Webdesign wichtig?</h3>
            <p className="text-gray-300">Über 70% der Nutzer browsen auf Mobilgeräten. Google rankt mobile-optimierte Websites besser. Schlechte Mobile-Experience = hohe Absprungrate.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Kostet Responsive Design extra?</h3>
            <p className="text-gray-300">Nein. Bei MB-Solutions ist Responsive Design Standard. Jede Website wird Mobile-First entwickelt – ohne Aufpreis.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Mobile-Optimierung?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold">
            Jetzt anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
