export function SignatureExamples() {
  const examples = [
    {
      category: "Elegante Unterschriften",
      description: "Schöne Unterschrift erstellen mit klassischen Schriftarten",
      keywords: "schöne unterschrift, unterschrift schön, elegante unterschrift",
    },
    {
      category: "Geschäftliche Signaturen",
      description: "Professionelle Unterschrift Generator für Business-Dokumente",
      keywords: "professionelle unterschrift generator, geschäftliche unterschrift",
    },
    {
      category: "Handschriftliche Unterschriften",
      description: "Handschriftliche Unterschrift erstellen mit unserem Zeichentool",
      keywords: "handschriftliche unterschrift erstellen, handschrift generator",
    },
    {
      category: "Kreative Unterschrift Ideen",
      description: "Unterschrift Ideen Generator für einzigartige Signaturen",
      keywords: "unterschrift ideen, unterschrift ideen generator, unterschriften ideen",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Unterschrift Beispiele - Inspiration für Ihre perfekte Signatur
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie <strong>Unterschrift Beispiele</strong> und lassen Sie sich von unseren{" "}
            <strong>Unterschriften Ideen</strong> inspirieren. Unser <strong>Unterschriften Ideen Generator</strong>{" "}
            hilft Ihnen dabei, die perfekte Signatur zu finden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {examples.map((example, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">{example.category}</h3>
              <p className="text-gray-600 text-sm mb-4">{example.description}</p>
              <div className="text-xs text-gray-500 italic">{example.keywords}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Möchten Sie eine <strong>unterschrift designen lassen</strong> oder selbst{" "}
            <strong>unterschrift erstellen</strong>? Unser <strong>Unterschrift Generator</strong> macht es möglich!
          </p>
          <div className="bg-blue-100 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Unterschrift erstellen - Drei einfache Wege</h3>
            <ul className="text-left space-y-2">
              <li>
                <strong>1. Tippen:</strong> <em>Unterschrift online erstellen</em> mit professionellen Schriftarten
              </li>
              <li>
                <strong>2. Zeichnen:</strong> <em>Handschriftliche Unterschrift erstellen</em> per Maus oder Touch
              </li>
              <li>
                <strong>3. E-Mail:</strong> <em>Signatur erstellen online</em> für professionelle Kommunikation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
