"use client"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Generator
            </Link>
            <Link href="/ueber-uns" className="text-gray-700 hover:text-blue-600 transition-colors">
              Über uns
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-blue-600 transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/#signature-generator">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Unterschrift erstellen
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu öffnen">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Generator
              </Link>
              <Link
                href="/ueber-uns"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link href="/#signature-generator" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full">
                  Unterschrift erstellen
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
