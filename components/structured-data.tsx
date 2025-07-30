interface StructuredDataProps {
  type: "WebApplication" | "Article" | "FAQPage" | "Organization"
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

// FAQ结构化数据
export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie kann ich online eine Unterschrift erstellen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mit unserem Unterschrift Generator können Sie ganz einfach online Unterschrift erstellen. Wählen Sie zwischen Tippen (24+ Schriftarten), Zeichnen (Handschrift Generator) oder E-Mail-Signatur erstellen.",
        },
      },
      {
        "@type": "Question",
        name: "Ist der Unterschrift Generator wirklich kostenlos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, unser unterschrift generator kostenlos ist vollständig gratis. Sie können unbegrenzt Unterschriften erstellen und alle Signaturen als PNG herunterladen - ohne versteckte Kosten.",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
}
