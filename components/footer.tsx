import { Shield, Heart } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo size="md" className="mb-4" />
            <p className="text-gray-400 mb-4">
              Der sicherste und einfachste Weg zu Ihrer perfekten digitalen Unterschrift.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>100% Datenschutz garantiert</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/ueber-uns" className="hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/datenschutzrichtlinie" className="hover:text-white transition-colors">
                  Datenschutzrichtlinie
                </a>
              </li>
              <li>
                <a href="/nutzungsbedingungen" className="hover:text-white transition-colors">
                  Nutzungsbedingungen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Unser Versprechen</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ Kostenlos für immer</li>
              <li>✓ Keine Registrierung</li>
              <li>✓ Keine Datenspeicherung</li>
              <li>✓ DSGVO-konform</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> in Germany
          </p>
          <p className="mt-2 text-sm">© 2025 Unterschrift Generator. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
