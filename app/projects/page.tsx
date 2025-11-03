"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter, Home, Building2, RefreshCw } from "lucide-react"
import projectsData from "@/data/projects.json"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Projects", icon: Filter },
    { id: "residential", label: "Residential", icon: Home },
    { id: "commercial", label: "Commercial", icon: Building2 },
    { id: "restoration", label: "Restoration", icon: RefreshCw },
  ]

  const projects = useMemo(
    () =>
      (projectsData.projects || []).map((p) => ({
        slug: p.slug,
        title: p.title,
        category: p.category,
        type: p.type,
        image: p.images?.[0]?.src || "/placeholder.svg",
        status: p.status || p.constructionStatus || "planned",
        location: p.location,
      })),
    []
  )

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
      <section className="py-12 md:py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-foreground/70 mb-4">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                View All Projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                    {project.status && (
                      <div className="absolute top-4 right-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                            project.status === "completed"
                              ? "bg-green-500/90 text-white"
                              : project.status === "in-progress"
                              ? "bg-blue-500/90 text-white"
                              : "bg-yellow-500/90 text-white"
                          }`}
                        >
                          {project.status === "completed" ? "Completed" : project.status === "in-progress" ? "In Progress" : "Planned"}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white">
                    <div className="mb-1">
                      <span className="inline-block px-2.5 py-1 bg-accent/90 text-accent-foreground text-[10px] md:text-xs font-semibold rounded-full">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h3>
                    <div className="flex items-center gap-2 text-xs md:text-sm opacity-90">
                      View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
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
