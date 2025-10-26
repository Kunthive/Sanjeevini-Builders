"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Icons } from "@/components/icons"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems([0, 1, 2, 3])
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      id: 1,
      name: "Skyline Penthouse",
      type: "Luxury Residential",
      image: "/luxury-penthouse-interior.png",
      link: "/projects/skyline-penthouse",
    },
    {
      id: 2,
      name: "Urban Vista Apartments",
      type: "Multi-Family Residential",
      image: "/modern-apartment-exterior.png",
      link: "/projects/urban-vista",
    },
    {
      id: 3,
      name: "Metro Commercial Hub",
      type: "Commercial Warehouse",
      image: "/industrial-warehouse.png",
      link: "/projects/metro-hub",
    },
  ]

  const features = [
    { icon: Icons.Award, label: "10+ Years Experience", value: "Proven Track Record" },
    { icon: Icons.Users, label: "50+ Completed Projects", value: "Portfolio Excellence" },
    { icon: Icons.Zap, label: "Expert Team", value: "Architects & Engineers" },
    { icon: Icons.CheckCircle, label: "Quality Assured", value: "Timely Delivery" },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/hero-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Building Dreams, Crafting Spaces</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">Premium Construction & Interior Design in Bangalore</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2 group"
              >
                Explore Projects{" "}
                <Icons.ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-semibold border border-white/30"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-pulse-subtle">
          <Icons.ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">About Sanjeevini Builders</h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Since 2015, Sanjeevini Builders has been transforming visions into reality across Bangalore with precision
            craftsmanship and innovative design. We believe that every structure tells a story, and we're committed to
            making yours extraordinary.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold group"
          >
            Learn More <Icons.ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Signature Projects</h2>
            <p className="text-foreground/70">Explore our portfolio of residential and commercial excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={project.link}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    View Details{" "}
                    <Icons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={28} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.label}</h3>
                  <p className="text-foreground/70 text-sm">{feature.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/placeholder.svg?height=600&width=1920&query=construction site modern building)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Dream Project?</h2>
          <p className="text-lg mb-8 opacity-90">Let's bring your vision to life with our expertise and dedication</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold group"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <a
        href="https://wa.me/919876543210?text=Hi%20Sanjeevini%20Builders%2C%20I%20would%20like%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center animate-pulse-subtle"
        title="Chat with us on WhatsApp"
      >
        <Icons.MessageCircle size={28} />
      </a>
    </main>
  )
}
