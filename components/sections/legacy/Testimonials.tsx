"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

/**
 * Testimonials Carousel - NEU
 *
 * Customer testimonials mit echten Fotos
 * Baut Social Proof & Trust auf
 */

const testimonials = [
  {
    id: 1,
    quote:
      "MB-Solutions hat unsere E-Commerce-Plattform komplett überarbeitet. Die Performance ist jetzt 3x besser und unsere Conversion-Rate ist um 40% gestiegen. Absolut professionelle Arbeit!",
    name: "Max Mustermann",
    role: "CEO",
    company: "TechRetail GmbH",
    photo: "/testimonials/customer-1.webp",
    logo: "/logos/clients/techretail.svg",
  },
  {
    id: 2,
    quote:
      "Endlich ein Entwickler, der nicht nur Code schreibt, sondern auch unternehmerisch denkt. Die Beratung war Top und die Umsetzung perfekt. Volle Empfehlung!",
    name: "Sarah Schmidt",
    role: "CTO",
    company: "DigitalStart AG",
    photo: "/testimonials/customer-2.webp",
    logo: "/logos/clients/digitalstart.svg",
  },
  {
    id: 3,
    quote:
      "Die Migration unserer Legacy-App zu Next.js war ein voller Erfolg. Uptime: 99.95%, Ladezeit halbiert. Technisch auf höchstem Niveau.",
    name: "Thomas Weber",
    role: "IT-Leiter",
    company: "IndustrieService GmbH",
    photo: "/testimonials/customer-3.webp",
    logo: "/logos/clients/industrie.svg",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.2) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl"
          >
            <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
            <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">
              Was Kunden sagen
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            Vertrauen durch Ergebnisse
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
          >
            Das sagen unsere Kunden über die Zusammenarbeit mit MB-Solutions.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  company,
  index,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[400px]"
    >
      {/* Hover Glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Quote Icon */}
      <div className="relative mb-6">
        <Quote className="w-10 h-10 text-cyan-400/20" />
      </div>

      {/* Quote Text */}
      <div className="relative flex-1 mb-6">
        <p className="text-lg text-gray-300 leading-relaxed italic">
          {quote}
        </p>
      </div>

      {/* Footer - Author Info */}
      <div className="relative flex items-center gap-4 pt-6 border-t border-white/10">
        {/* Photo */}
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-500/30 flex-shrink-0 bg-gradient-to-br from-white/10 to-white/5">
          {/* Placeholder until real photos */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-sm font-bold text-gray-500">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          {/* Uncomment when photos available:
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
          />
          */}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="font-bold text-white text-base leading-tight truncate">
            {name}
          </div>
          <div className="text-sm text-gray-400 leading-tight">
            {role}, {company}
          </div>
        </div>

        {/* Company Logo (optional) */}
        {/* Uncomment when logos available:
        <div className="relative w-20 h-10 opacity-50 group-hover:opacity-100 transition-opacity">
          <Image
            src={logo}
            alt={company}
            fill
            className="object-contain"
          />
        </div>
        */}
      </div>

      {/* 5-Star Rating */}
      <div className="relative flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
          />
        ))}
      </div>
    </motion.div>
  );
}
