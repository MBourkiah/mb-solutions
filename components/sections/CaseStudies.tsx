"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * MB-Solutions Case Studies Section
 *
 * Asymmetrisches Bento-Grid Layout:
 * - 3 Case Studies mit unterschiedlichen Größen
 * - Featured Image pro Case
 * - Results/Metrics Display
 * - Tech Stack Badges
 * - Hover-Effects
 *
 * NO standard uniform grid!
 */

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  description: string;
  image: string;
  results: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  gradient: string;
  featured?: boolean;
}

const cases: CaseStudy[] = [
  {
    id: "bauunternehmen",
    title: "Digitales Projektportal",
    industry: "Bauunternehmen",
    description: "Entwicklung eines maßgeschneiderten Projektportals zur Verwaltung von Bauprojekten, Dokumenten und Kommunikation zwischen Stakeholdern.",
    image: "/images/cases/case-bau-portal.svg",
    results: [
      { label: "Zeitersparnis", value: "40%" },
      { label: "Fehlerreduktion", value: "65%" },
      { label: "User Satisfaction", value: "4.8/5" },
    ],
    techStack: ["Next.js", "PostgreSQL", "AWS S3", "Prisma"],
    gradient: "from-cyan-500 to-blue-500",
    featured: true,
  },
  {
    id: "it-dienstleister",
    title: "Corporate Website",
    industry: "IT-Dienstleister",
    description: "Moderne, SEO-optimierte Website mit Headless CMS für einen führenden IT-Dienstleister in der DACH-Region.",
    image: "/images/cases/case-it-corporate.svg",
    results: [
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Organic Traffic", value: "+180%" },
      { label: "Page Speed", value: "0.8s" },
    ],
    techStack: ["Next.js", "Sanity CMS", "Vercel", "TypeScript"],
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    industry: "Fashion Retail",
    description: "Skalierbare E-Commerce-Lösung mit personalisierten Produktempfehlungen und nahtloser Checkout-Experience.",
    image: "/images/cases/case-ecommerce.svg",
    results: [
      { label: "Conversion Rate", value: "+45%" },
      { label: "Mobile Sales", value: "+120%" },
      { label: "Cart Abandonment", value: "-35%" },
    ],
    techStack: ["Next.js", "Shopify", "Stripe", "Algolia"],
    gradient: "from-purple-500 to-pink-500",
  },
];

export function CaseStudies() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-[#0F1629] to-[#0A0E27]" />

      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full blur-5xl" />

      <div className="relative z-10 w-full max-w-10xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">

        {/* Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl"
          >
            <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">
              Erfolgsgeschichten
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mb-4 leading-tight tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em'
            }}
          >
            Projekte, die Ergebnisse liefern
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed font-light"
          >
            Von der ersten Idee bis zum erfolgreichen Launch – entdecken Sie, wie wir unsere Kunden digital transformiert haben.
          </motion.p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                group relative rounded-3xl overflow-hidden
                ${caseStudy.featured ? 'lg:col-span-2' : 'lg:col-span-1'}
              `}
            >
              {/* Card Container */}
              <div className="relative h-full p-6 md:p-8 bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 backdrop-blur-xl transition-all duration-500">

                {/* Layout: Image + Content Side-by-Side on Featured, Stacked on Others */}
                <div className={`
                  flex flex-col gap-6
                  ${caseStudy.featured ? 'lg:flex-row lg:gap-8' : ''}
                `}>

                  {/* Image Container */}
                  <div className={`
                    relative overflow-hidden rounded-2xl
                    ${caseStudy.featured ? 'lg:w-1/2' : 'w-full'}
                  `}>
                    {/* Aspect Ratio Wrapper */}
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes={caseStudy.featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} opacity-10 mix-blend-overlay`} />
                    </div>

                    {/* Glow Behind Image */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${caseStudy.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />
                  </div>

                  {/* Content */}
                  <div className={`
                    flex flex-col justify-between
                    ${caseStudy.featured ? 'lg:w-1/2' : 'w-full'}
                  `}>
                    {/* Top Section */}
                    <div>
                      {/* Industry Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-lg bg-white/[0.05] border border-white/10 backdrop-blur-xl">
                        <span className="text-xs font-medium text-gray-400">{caseStudy.industry}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
                        {caseStudy.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
                        {caseStudy.description}
                      </p>

                      {/* Results Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {caseStudy.results.map((result) => (
                          <div key={result.label} className="text-center">
                            <div className={`text-xl md:text-2xl font-black bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent mb-1`}>
                              {result.value}
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {caseStudy.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-medium text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Link */}
                    <Link
                      href={`#kontakt`}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r ${caseStudy.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 self-start`}
                    >
                      <span>Projekt besprechen</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${caseStudy.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 -z-10`} />

              </div>

              {/* Success Indicator Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/20 border border-green-500/30 backdrop-blur-xl">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span className="text-xs font-medium text-green-400">Success</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-400 mb-6">
            Möchten Sie auch solche Erfolge erzielen?
          </p>
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Ihr Projekt starten</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
