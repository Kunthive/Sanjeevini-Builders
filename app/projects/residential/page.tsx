"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Home, ArrowLeft, Sparkles, Building2 } from "lucide-react"

export default function ResidentialProjects() {
  const residentialProjects = [
    {
      id: 1,
      name: "Skyline Penthouse",
      type: "Luxury Residential",
      image: "/luxury-penthouse-interior.png",
      description: "A stunning luxury penthouse with panoramic city views and premium finishes.",
      link: "/projects/skyline-penthouse",
      status: "completed",
      highlights: ["Panoramic Views", "Smart Home", "Luxury Finishes"],
      area: "8,500 sq ft",
      location: "Indiranagar, Bangalore",
    },
    {
      id: 2,
      name: "Urban Vista Apartments",
      type: "Multi-Family Residential",
      image: "/modern-apartment-complex-exterior.jpg",
      description: "Contemporary apartment complex featuring modern architecture and sustainable design.",
      link: "/projects/urban-vista",
      status: "completed",
      highlights: ["150 Units", "LEED Certified", "Sustainable Design"],
      area: "45,000 sq ft",
      location: "Whitefield, Bangalore",
    },
    {
      id: 3,
      name: "Riverside Villas",
      type: "Luxury Villas",
      image: "/luxury-villa-riverside-architecture.jpg",
      description: "Exclusive villa community with riverside views and premium amenities.",
      link: "/projects/riverside-villas",
      status: "completed",
      highlights: ["25 Villas", "River Views", "Gated Community"],
      area: "112,500 sq ft",
      location: "Hebbal, Bangalore",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mb-6 text-foreground/70 hover:text-primary transition-colors text-sm md:text-base"
          >
            <ArrowLeft size={18} />
            Back to All Projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Home className="text-primary" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">Residential Projects</h1>
              <p className="text-foreground/70 mt-2">Luxury homes designed for modern living</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Our residential projects represent the pinnacle of modern living, combining architectural excellence with
              thoughtful design. From luxury penthouses to sustainable apartment complexes, we create homes that reflect
              our clients' aspirations and lifestyle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="text-accent" size={24} />
                  <h3 className="font-bold text-lg">Design Excellence</h3>
                </div>
                <p className="text-foreground/70 text-sm">
                  Every home is designed with meticulous attention to detail, ensuring both aesthetic appeal and functional
                  living spaces.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="text-accent" size={24} />
                  <h3 className="font-bold text-lg">Premium Materials</h3>
                </div>
                <p className="text-foreground/70 text-sm">
                  We use only the finest materials and finishes, sourced from trusted suppliers to ensure lasting
                  quality.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="text-accent" size={24} />
                  <h3 className="font-bold text-lg">Smart Living</h3>
                </div>
                <p className="text-foreground/70 text-sm">
                  Integration of smart home technology and sustainable features for comfortable, efficient, and
                  eco-friendly living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-primary">Our Residential Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {residentialProjects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-green-500/90 text-white rounded-full text-xs font-semibold backdrop-blur-sm">
                      Completed
                    </span>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-2">
                      {project.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{project.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted text-foreground/70 rounded-md text-xs"
                      >
                        <Sparkles size={12} className="text-accent" />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="pt-4 border-t border-border space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Area:</span>
                      <span className="font-semibold">{project.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Location:</span>
                      <span className="font-semibold text-right max-w-[60%]">{project.location}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-accent font-semibold group-hover:gap-3 transition-all">
                    View Project Details
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 md:py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary">
            Why Choose Our Residential Projects?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Quality Construction",
                description: "Rigorous quality control and use of premium materials ensure your home stands the test of time.",
                icon: Building2,
              },
              {
                title: "Modern Design",
                description: "Contemporary architecture that blends style with functionality for modern living.",
                icon: Sparkles,
              },
              {
                title: "Sustainable Living",
                description: "Eco-friendly features and energy-efficient systems for a greener lifestyle.",
                icon: Home,
              },
              {
                title: "Smart Technology",
                description: "Integrated smart home systems for convenience, security, and energy management.",
                icon: Building2,
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Home?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss your vision and create a residential space that perfectly matches your lifestyle and
            aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold min-h-[44px]"
            >
              Get In Touch <ArrowRight size={20} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-semibold border border-white/30 min-h-[44px]"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

