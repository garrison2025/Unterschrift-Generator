export function AdvancedFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Erweiterte Funktionen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie alle Möglichkeiten unseres professionellen Unterschrift-Generators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Farbanpassung</h3>
            <p className="text-gray-600 text-sm">
              Wählen Sie aus unbegrenzten Farben für Ihre Unterschrift. Perfekt für Corporate Design oder persönliche
              Vorlieben.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📏</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Größenanpassung</h3>
            <p className="text-gray-600 text-sm">
              Skalieren Sie Ihre Unterschrift von 24px bis 72px. Ideal für verschiedene Dokumentengrößen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Mobile Optimiert</h3>
            <p className="text-gray-600 text-sm">
              Funktioniert perfekt auf Smartphones und Tablets. Touch-Unterstützung für natürliches Zeichnen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Sofort-Download</h3>
            <p className="text-gray-600 text-sm">
              Laden Sie Ihre Unterschrift sofort als transparente PNG-Datei herunter. Keine Wartezeit, keine Limits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Lokale Verarbeitung</h3>
            <p className="text-gray-600 text-sm">
              Alle Daten bleiben auf Ihrem Gerät. Keine Server-Uploads, keine Datenspeicherung, 100% privat.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Geschäftstauglich</h3>
            <p className="text-gray-600 text-sm">
              Professionelle Qualität für Verträge, Rechnungen und offizielle Dokumente. Rechtlich verwendbar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
