import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Wie kann ich online eine Unterschrift erstellen?",
      answer:
        "Mit unserem Unterschrift Generator können Sie ganz einfach online Unterschrift erstellen. Wählen Sie zwischen Tippen (24+ Schriftarten), Zeichnen (Handschrift Generator) oder E-Mail-Signatur erstellen. Alle Funktionen sind kostenlos und ohne Anmeldung verfügbar.",
    },
    {
      question: "Ist der Unterschrift Generator wirklich kostenlos?",
      answer:
        "Ja, unser unterschrift generator kostenlos ist vollständig gratis. Sie können unbegrenzt Unterschriften erstellen, verschiedene Unterschrift Ideen ausprobieren und alle Signaturen als PNG herunterladen - ohne versteckte Kosten.",
    },
    {
      question: "Kann ich handschriftliche Unterschriften erstellen?",
      answer:
        "Absolut! Unser Handschrift Generator ermöglicht es Ihnen, handschriftliche Unterschriften erstellen zu können. Zeichnen Sie einfach mit Maus oder Touchscreen Ihre persönliche Signatur und laden Sie sie sofort herunter.",
    },
    {
      question: "Welche Unterschrift Ideen bietet der Generator?",
      answer:
        "Unser Unterschrift Ideen Generator bietet über 24 verschiedene Schriftarten von elegant bis geschäftlich. Sie finden Unterschrift Beispiele für jeden Anlass - von schöne Unterschrift Designs bis hin zu professionellen Business-Signaturen.",
    },
    {
      question: "Wie erstelle ich eine professionelle E-Mail-Signatur?",
      answer:
        "Mit unserem Tool können Sie ganz einfach signatur erstellen online. Geben Sie Ihre Kontaktdaten ein, wählen Sie ein Design und erhalten Sie eine professionelle HTML-E-Mail-Signatur zum direkten Einfügen in Ihr E-Mail-Programm.",
    },
    {
      question: "Sind meine Daten beim Unterschrift erstellen sicher?",
      answer:
        "Ja, absolute Sicherheit! Wenn Sie bei uns unterschrift online erstellen, werden alle Daten nur lokal in Ihrem Browser verarbeitet. Wir speichern keine Informationen - Ihre Privatsphäre ist garantiert.",
    },
    {
      question: "Kann ich verschiedene Unterschrift-Stile ausprobieren?",
      answer:
        "Selbstverständlich! Unser professionelle unterschrift generator bietet verschiedene Kategorien: elegant, klassisch, modern, geschäftlich und mehr. Probieren Sie verschiedene Unterschriften Ideen aus und finden Sie Ihren perfekten Stil.",
    },
    {
      question: "Wie lade ich meine erstellte Unterschrift herunter?",
      answer:
        "Nach dem unterschrift generieren können Sie Ihre Signatur mit einem Klick als transparente PNG-Datei herunterladen. Jede Schriftart hat einen eigenen Download-Button für maximale Flexibilität beim unterschrift erstellen lassen.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Antworten auf die wichtigsten Fragen zu unserem Unterschriften-Generator
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
