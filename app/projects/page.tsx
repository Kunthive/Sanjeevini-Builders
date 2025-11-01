"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter, Home, Building2, RefreshCw } from "lucide-react"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      id: 1,
      name: "Skyline Penthouse",
      category: "residential",
      type: "Luxury Residential",
      image: "/luxury-penthouse-interior.png",
      description: "A stunning luxury penthouse with panoramic city views and premium finishes.",
      link: "/projects/skyline-penthouse",
      status: "completed",
    },
    {
      id: 2,
      name: "Urban Vista Apartments",
      category: "residential",
      type: "Multi-Family Residential",
      image: "/modern-apartment-complex-exterior.jpg",
      description: "Contemporary apartment complex featuring modern architecture and sustainable design.",
      link: "/projects/urban-vista",
      status: "completed",
    },
    {
      id: 3,
      name: "Riverside Villas",
      category: "residential",
      type: "Luxury Villas",
      image: "/luxury-villa-riverside-architecture.jpg",
      description: "Exclusive villa community with riverside views and premium amenities.",
      link: "/projects/riverside-villas",
      status: "completed",
    },
    {
      id: 4,
      name: "Metro Commercial Hub",
      category: "commercial",
      type: "Commercial Warehouse",
      image: "/industrial-warehouse-modern-design.jpg",
      description: "State-of-the-art commercial warehouse with efficient logistics infrastructure.",
      link: "/projects/metro-hub",
      status: "completed",
    },
    {
      id: 5,
      name: "Tech Park Office",
      category: "commercial",
      type: "Office Complex",
      image: "/modern-office-building-glass-architecture.jpg",
      description: "Modern office complex designed for tech companies with collaborative spaces.",
      link: "/projects/tech-park",
      status: "in-progress",
    },
    {
      id: 6,
      name: "Heritage Restoration",
      category: "restoration",
      type: "Heritage Building",
      image: "/heritage-building-restoration-architecture.jpg",
      description: "Careful restoration of a heritage building preserving its historical charm.",
      link: "/projects/heritage-restoration",
      status: "completed",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", icon: Filter },
    { id: "residential", label: "Residential", icon: Home },
    { id: "commercial", label: "Commercial", icon: Building2 },
    { id: "restoration", label: "Restoration", icon: RefreshCw },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Projects</h1>
          <p className="text-lg text-foreground/80">
            Explore our portfolio of exceptional residential, commercial, and restoration projects across Bangalore.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 md:py-12 bg-background border-b border-border sticky top-16 z-40 backdrop-blur-sm bg-background/95">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 md:mb-6">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-primary" />
              <span className="font-semibold text-foreground text-sm md:text-base">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3 w-full sm:w-auto">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-medium transition-all text-sm md:text-base min-h-[44px] ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    <Icon size={18} />
                    {category.label}
                  </button>
                )
              })}
            </div>
          </div>
          {selectedCategory === "residential" && (
            <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-sm text-foreground/80">
                <Link href="/projects/residential" className="font-semibold text-accent hover:text-accent/80 underline">
                  View all Residential Projects
                </Link>{" "}
                in our dedicated section.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                  <p className="text-sm opacity-90 mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    View Details <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{projects.length}+</div>
              <p className="text-foreground/70 font-medium">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50K+</div>
              <p className="text-foreground/70 font-medium">Square Feet Delivered</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
              <p className="text-foreground/70 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Start Your Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
