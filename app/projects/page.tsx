import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Projekte | MB-Solutions - Moderne Websites & IT-Lösungen",
  description: "Entdecken Sie unsere realisierten Projekte und Konzepte. Von modernen Unternehmenswebsites über Dashboards bis zu maßgeschneiderten IT-Lösungen für KMU.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <StatementHeader />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Projekte & Referenzen
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Diese Seite wird gerade überarbeitet. Bald finden Sie hier unsere Projektübersicht.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white shadow-xl hover:scale-105 transition-all"
          >
            <span>Jetzt Kontakt aufnehmen</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
