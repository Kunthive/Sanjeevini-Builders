"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Icons } from "./icons"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Detect scroll to control mobile logo visibility
  useEffect(() => {
    if (typeof window === "undefined") return
    const onScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Mobile header bar */}
      <div className="fixed top-4 left-4 right-4 z-40 md:hidden rounded-xl bg-background/60 supports-[backdrop-filter]:bg-background/40 backdrop-blur border border-border/50 shadow-sm px-3 py-2 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-2 transition-opacity duration-200 ${hasScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-lg text-primary">Sanjeevini</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-3 rounded-xl bg-background/70 supports-[backdrop-filter]:bg-background/50 backdrop-blur shadow-sm text-foreground transition-all duration-300 aria-[expanded=true]:shadow-md aria-[expanded=true]:bg-background ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
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
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Bottom Sheet */}
          <div className="absolute inset-x-0 bottom-0 rounded-t-2xl bg-white shadow-2xl p-6 pt-3 safe-bottom animate-slide-up">
            <div className="mx-auto h-1 w-12 rounded-full bg-muted mb-4" />

            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-4 text-foreground/90 hover:bg-muted rounded-xl transition-colors font-medium text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                href="/projects"
                className="px-4 py-3 rounded-xl bg-accent text-accent-foreground text-center font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Explore Projects
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 rounded-xl bg-primary text-primary-foreground text-center font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Get In Touch
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-muted-foreground">
              <span className="text-xs">Quick contact:</span>
              <a href="tel:+919876543210" className="px-3 py-2 rounded-lg border hover:bg-muted transition-colors text-sm">Call</a>
              <a
                href="https://wa.me/918867301822?text=Hi%20Sanjeevini%20Builders%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg border hover:bg-muted transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
