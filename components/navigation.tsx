"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Icons } from "./icons"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Solid header; highlight based on current route

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Global fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">S</span>
            </div>
            <span className="font-bold text-lg text-primary">Sanjeevini</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/")
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary ring-1 ring-primary/20"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  <span className={`${isActive ? "bg-primary" : "bg-foreground/30"} h-1.5 w-1.5 rounded-full`} />
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden md:inline-flex px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-3 rounded-xl bg-muted text-foreground transition-all duration-300 aria-[expanded=true]:shadow-md ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Removed old floating desktop brand and nav in favor of solid header */}

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
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(link.href + "/")
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-4 rounded-xl transition-colors font-medium text-base ${
                      isActive ? "bg-primary/10 text-primary" : "text-foreground/90 hover:bg-muted"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`${isActive ? "bg-primary" : "bg-foreground/30"} h-1.5 w-1.5 rounded-full`} />
                      {link.label}
                    </span>
                    <span className="text-foreground/40">›</span>
                  </Link>
                )
              })}
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
