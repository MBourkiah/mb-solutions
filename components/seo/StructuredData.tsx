/**
 * Structured Data (Schema.org JSON-LD)
 *
 * SEO-kritische strukturierte Daten für:
 * - LocalBusiness (für lokale Suche)
 * - Organization (für Brand Recognition)
 * - WebSite (für Site-Links Search Box)
 * - BreadcrumbList (für Breadcrumbs in SERPs)
 *
 * Hilft Google, deine Business-Informationen besser zu verstehen
 * und erhöht Chancen auf Rich Snippets in Suchergebnissen.
 */

export function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MB-Solutions",
    "legalName": "MB-Solutions",
    "url": "https://mb-solutions.biz",
    "logo": "https://mb-solutions.biz/logo.png",
    "foundingDate": "2019",
    "description": "Professionelle Next.js Webentwicklung, IT-Services und Digitalisierung für mittelständische Unternehmen. Performance-optimiert, DSGVO-konform, Full-Service.",
    "email": "kontakt@mb-solutions.biz",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE",
      "addressLocality": "Deutschland"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "kontakt@mb-solutions.biz",
      "availableLanguage": ["de", "en"]
    },
    "sameAs": [
      // Füge hier deine Social Media Profile hinzu wenn vorhanden:
      // "https://www.linkedin.com/company/mb-solutions",
      // "https://github.com/mb-solutions",
      // "https://twitter.com/mbsolutions"
    ]
  };

  // LocalBusiness Schema (wenn du lokale Services anbietest)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MB-Solutions",
    "image": "https://mb-solutions.biz/logo.png",
    "description": "Professionelle Next.js Webentwicklung, IT-Services und Digitalisierung für mittelständische Unternehmen.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      // Füge deine Koordinaten hinzu wenn relevant
    },
    "url": "https://mb-solutions.biz",
    "telephone": "+49-XXX-XXXXXXX", // Ersetze mit echter Nummer
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  // WebSite Schema (für Site-Links Search Box)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MB-Solutions",
    "url": "https://mb-solutions.biz",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mb-solutions.biz/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Webentwicklung & IT-Services",
    "provider": {
      "@type": "Organization",
      "name": "MB-Solutions"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Unsere Leistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js Webentwicklung",
            "description": "Moderne, performante Webanwendungen mit Next.js 14+"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT-Beratung & Support",
            "description": "Professionelle IT-Beratung und technischer Support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud-Migration & DevOps",
            "description": "Migration bestehender Systeme in die Cloud"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
