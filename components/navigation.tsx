"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Icons } from "./icons"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Mobile header bar */}
      <div className="fixed top-4 left-0 right-0 z-40 flex items-center justify-between px-4 md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-lg text-primary">Sanjeevini</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-110"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
        </button>
      </div>

      {/* Desktop brand */}
      <Link href="/" className="fixed top-6 left-6 z-40 items-center gap-2 group hidden md:flex">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
          <span className="text-primary-foreground font-bold text-lg">S</span>
        </div>
        <span className="font-bold text-lg text-primary">Sanjeevini</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex fixed top-6 right-6 z-40 gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium relative group"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
        <Link
          href="/contact"
          className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium hover:shadow-lg hover:-translate-y-0.5"
        >
          Get In Touch
        </Link>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-20 left-4 right-4 bg-white rounded-lg shadow-2xl p-6 space-y-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
