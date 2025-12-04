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
