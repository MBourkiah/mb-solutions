import { MetadataRoute } from 'next'

/**
 * Dynamische Sitemap Generation für MB-Solutions
 *
 * Next.js 14+ generiert automatisch eine sitemap.xml aus dieser Datei.
 * Wird verfügbar unter: https://mb-solutions.biz/sitemap.xml
 *
 * SEO Benefits:
 * - Hilft Google, alle Seiten zu finden
 * - Zeigt Priorität und Update-Frequenz
 * - Verbessert Crawling-Effizienz
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mb-solutions.biz'
  const currentDate = new Date()

  return [
    // Homepage - Höchste Priorität
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // SEO-Hub-Seiten - Hohe Priorität (lokale Keywords Köln)
    {
      url: `${baseUrl}/webdesign-koeln`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/it-services-koeln`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/marketing-agentur-koeln`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // SEO Child-Seiten - Priorität 1 (Quick Wins)
    {
      url: `${baseUrl}/webdesign-koeln/wordpress-agentur-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/webdesign-koeln/responsive-webdesign`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/it-services-koeln/it-support-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketing-agentur-koeln/local-seo-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // SEO Child-Seiten - Priorität 2 (Expansion)
    {
      url: `${baseUrl}/webdesign-koeln/react-entwicklung-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/webdesign-koeln/shopify-agentur-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/webdesign-koeln/webflow-agentur-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/it-services-koeln/cloud-services-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/it-services-koeln/it-sicherheit-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/it-services-koeln/microsoft-365-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/marketing-agentur-koeln/seo-agentur-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/marketing-agentur-koeln/google-ads-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/marketing-agentur-koeln/content-marketing-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Branch Pages (Branchen-spezifisch)
    {
      url: `${baseUrl}/webdesign-koeln/webdesign-aerzte-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/webdesign-koeln/webdesign-anwaelte-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/webdesign-koeln/webdesign-restaurants-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/it-services-koeln/it-services-steuerberater-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/it-services-koeln/it-services-arztpraxen-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/marketing-agentur-koeln/marketing-immobilienmakler-koeln`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Hauptseiten - Hohe Priorität
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Legal Pages - Niedrigere Priorität
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/imprint`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
