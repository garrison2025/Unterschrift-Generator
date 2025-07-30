import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { MobileOptimizations } from "@/components/mobile-optimizations"
import { BackToTop } from "@/components/back-to-top"
import { ToastContainer } from "@/components/toast-notification"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Unterschrift Generator - Kostenlos & Sicher",
  description:
    "Online Ihre Unterschrift erstellen. Einfach zeichnen oder tippen und als PNG herunterladen. ✓ Anonym ✓ Schnell ✓ Ohne Anmeldung.",
  keywords:
    "Unterschrift Generator, unterschrift erstellen, online unterschrift erstellen, unterschriften, unterschrift erstellen online, unterschrift online erstellen, unterschriften generator, handschriftliche unterschrift erstellen, unterschrift erstellen kostenlos, unterschrift ideen generator, unterschrift ideen, unterschrift ersteller, schöne unterschrift, unterschrift designen lassen, schöne unterschrift erstellen, unterschrift schön, signatur erstellen online, unterschrift generator kostenlos, unterschriften erstellen, unterschrift generieren, unterschrift erstellen ideen, signatur online erstellen, handschrift generator, unterschrift erstellen lassen, unterschrift beispiele, unterschriften ideen, online unterschrift erstellen kostenlos, professionelle unterschrift generator, unterschriften ideen generator",
  authors: [{ name: "Unterschrift Generator Team" }],
  creator: "Unterschrift Generator",
  publisher: "Unterschrift Generator",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://unterschriftgenerator.pro",
    title: "Unterschrift Generator - Kostenlos & Sicher",
    description:
      "Online Ihre Unterschrift erstellen. Einfach zeichnen oder tippen und als PNG herunterladen. ✓ Anonym ✓ Schnell ✓ Ohne Anmeldung.",
    siteName: "Unterschrift Generator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unterschrift Generator - Kostenlos & Sicher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unterschrift Generator - Kostenlos & Sicher",
    description:
      "Online Ihre Unterschrift erstellen. Einfach zeichnen oder tippen und als PNG herunterladen. ✓ Anonym ✓ Schnell ✓ Ohne Anmeldung.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://unterschriftgenerator.pro",
  },
  other: {
    "google-site-verification": "your-google-verification-code",
  },
    generator: 'v0.dev'
}

// Add structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Unterschrift Generator",
  description: "Kostenloser Online-Generator für professionelle Unterschriften",
  url: "https://unterschriftgenerator.pro",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "24+ professionelle Schriftarten",
    "Handzeichnung mit Maus/Touch",
    "E-Mail-Signatur Generator",
    "100% Datenschutz",
    "Keine Registrierung erforderlich",
    "DSGVO-konform",
  ],
  provider: {
    "@type": "Organization",
    name: "Unterschrift Generator",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Allura&family=Satisfy&family=Pacifico&family=Kaushan+Script&family=Alex+Brush&family=Amatic+SC:wght@400;700&family=Caveat:wght@400;700&family=Courgette&family=Damion&family=Homemade+Apple&family=Indie+Flower&family=Josefin+Slab:wght@400;700&family=Leckerli+One&family=Marck+Script&family=Nothing+You+Could+Do&family=Patrick+Hand&family=Pinyon+Script&family=Qwigley&family=Rouge+Script&family=Sacramento&family=Tangerine:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme and Mobile Optimization */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Unterschrift Generator" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <MobileOptimizations />
          {children}
          <Footer />
          <BackToTop />
          <ToastContainer />
          <PWAInstallPrompt />
        </ErrorBoundary>
      </body>
    </html>
  )
}
