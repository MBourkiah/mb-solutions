import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// BOLD ANTI-AGENCY HEADER (Active)
import { HeaderBold } from "@/components/layout/HeaderBold";
// Alternative Headers:
// import { HeaderConversion } from "@/components/layout/HeaderConversion";
// import { HeaderUltimate } from "@/components/layout/HeaderUltimate";
import { FooterPremium } from "@/components/layout/FooterPremium";
import { CookieConsentPremium } from "@/components/layout/CookieConsentPremium";
import { StructuredData } from "@/components/seo/StructuredData";
// import { PlausibleAnalytics } from "@/components/analytics/PlausibleAnalytics"; // Uncomment when ready to use

// Modern Premium Font - Inter (Variable)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Metadata - SEO Optimized V8
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mb-solutions.biz"),
  title: {
    default: "Webentwicklung & IT-Services | Next.js Experten | MB-Solutions",
    template: "%s | MB-Solutions",
  },
  description:
    "Maßgeschneiderte Next.js Webentwicklung und IT-Services für KMU. ✓ 98+ Performance Score ✓ DSGVO-konform ✓ Antwort in <2h. Professionelle Digitalisierung für Ihren Erfolg. Jetzt kostenlose Tech-Analyse sichern!",
  keywords: [
    // Primäre Keywords
    "Webentwicklung",
    "IT-Services",
    "Next.js Entwicklung",
    "Webdesign",
    "Digitalisierung KMU",
    // Service Keywords
    "React Entwickler",
    "Full-Stack Developer",
    "IT-Beratung",
    "Cloud-Migration",
    "DevOps",
    // Feature Keywords
    "DSGVO-konforme Websites",
    "Performance-Optimierung",
    "SEO-Optimierung",
    "Responsive Webdesign",
    // Technologie Keywords
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    // Location (wenn relevant)
    "Webentwicklung Deutschland",
    // Brand
    "MB-Solutions",
  ],
  authors: [{ name: "MB-Solutions" }],
  creator: "MB-Solutions",
  publisher: "MB-Solutions",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mb-solutions.biz",
    siteName: "MB-Solutions",
    title: "Maßgeschneiderte Webentwicklung & IT-Services für KMU",
    description: "Next.js Experten für Performance-optimierte Webanwendungen. ✓ 98+ Lighthouse Score ✓ DSGVO-konform ✓ Full-Service. Jetzt kostenlose Tech-Analyse anfragen!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MB-Solutions - Next.js Webentwicklung & IT-Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webentwicklung & IT-Services | MB-Solutions",
    description: "Maßgeschneiderte Next.js Lösungen für KMU. Performance-optimiert, DSGVO-konform, Full-Service.",
    images: ["/og-image.jpg"],
    creator: "@mbsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Hhwn2UuSSFk-EeWALUKCNKfI-VpeLx3c8raR1srs7EI",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://mb-solutions.biz",
  },
  // Icons werden automatisch von Next.js aus app/icon.svg und app/apple-icon.svg geladen
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data (Schema.org JSON-LD) for SEO */}
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0A0E27] text-white`}>
        {/* Navigation - Bold Anti-Agency Header */}
        <HeaderBold />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <FooterPremium />

        {/* GDPR Cookie Consent Banner */}
        <CookieConsentPremium />

        {/* Privacy-First Analytics (Optional) */}
        {/* Uncomment and configure when you have Plausible set up */}
        {/* <PlausibleAnalytics domain="your-domain.com" enabled={true} /> */}
      </body>
    </html>
  );
}
