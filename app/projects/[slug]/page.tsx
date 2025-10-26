import { ArrowLeft, MapPin, Calendar, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

// Project data - in a real app, this would come from a database
const projectsData: Record<
  string,
  {
    name: string
    type: string
    location: string
    year: string
    team: string
    description: string
    overview: string
    features: string[]
    specifications: {
      label: string
      value: string
    }[]
    gallery: string[]
    nextProject?: { slug: string; name: string }
  }
> = {
  "skyline-penthouse": {
    name: "Skyline Penthouse",
    type: "Luxury Residential",
    location: "Indiranagar, Bangalore",
    year: "2023",
    team: "12 Professionals",
    description: "A stunning luxury penthouse with panoramic city views and premium finishes.",
    overview:
      "The Skyline Penthouse represents the pinnacle of luxury living in Bangalore. Perched on the 45th floor, this exclusive residence offers breathtaking panoramic views of the city skyline. Every detail has been meticulously crafted to provide an unparalleled living experience, from the imported Italian marble flooring to the state-of-the-art smart home automation system.",
    features: [
      "Panoramic city views from all rooms",
      "Smart home automation system",
      "Italian marble flooring throughout",
      "Premium Italian fixtures and fittings",
      "Private infinity pool with city views",
      "Home theater and entertainment zone",
      "Wine cellar and tasting room",
      "Dedicated spa and wellness area",
    ],
    specifications: [
      { label: "Total Area", value: "8,500 sq ft" },
      { label: "Bedrooms", value: "4 Master Suites" },
      { label: "Bathrooms", value: "5 Luxury Baths" },
      { label: "Construction Period", value: "18 Months" },
      { label: "Completion Date", value: "March 2023" },
      { label: "Investment", value: "₹15 Crores" },
    ],
    gallery: [
      "/luxury-penthouse-interior.png",
      "/luxury-penthouse-living-room.png",
      "/luxury-penthouse-bedroom.png",
      "/luxury-penthouse-kitchen.png",
    ],
    nextProject: { slug: "urban-vista", name: "Urban Vista Apartments" },
  },
  "urban-vista": {
    name: "Urban Vista Apartments",
    type: "Multi-Family Residential",
    location: "Whitefield, Bangalore",
    year: "2022",
    team: "25 Professionals",
    description: "Contemporary apartment complex featuring modern architecture and sustainable design.",
    overview:
      "Urban Vista is a contemporary residential complex designed for modern urban living. With 150 units spread across 8 towers, this project combines architectural excellence with sustainable practices. The complex features lush green spaces, recreational facilities, and a vibrant community atmosphere.",
    features: [
      "150 residential units across 8 towers",
      "LEED certified sustainable design",
      "Central community garden and park",
      "Olympic-size swimming pool",
      "State-of-the-art gymnasium",
      "Children's play areas and schools",
      "24/7 security and surveillance",
      "EV charging stations",
    ],
    specifications: [
      { label: "Total Area", value: "45,000 sq ft" },
      { label: "Units", value: "150 Apartments" },
      { label: "Unit Sizes", value: "1BHK to 4BHK" },
      { label: "Construction Period", value: "36 Months" },
      { label: "Completion Date", value: "August 2022" },
      { label: "Investment", value: "₹120 Crores" },
    ],
    gallery: [
      "/modern-apartment-complex-exterior.jpg",
      "/apartment-complex-courtyard.jpg",
      "/apartment-complex-pool.jpg",
      "/apartment-complex-gym.jpg",
    ],
    nextProject: { slug: "metro-hub", name: "Metro Commercial Hub" },
  },
  "metro-hub": {
    name: "Metro Commercial Hub",
    type: "Commercial Warehouse",
    location: "Peenya, Bangalore",
    year: "2021",
    team: "30 Professionals",
    description: "State-of-the-art commercial warehouse with efficient logistics infrastructure.",
    overview:
      "Metro Commercial Hub is a modern logistics and warehousing facility designed to meet the demands of contemporary supply chain management. With advanced automation systems and efficient layout design, this facility serves as a hub for multiple industries.",
    features: [
      "Advanced warehouse automation",
      "Climate-controlled storage areas",
      "Efficient loading and unloading zones",
      "Modern office spaces",
      "Advanced security systems",
      "Ample parking for vehicles",
      "Rail connectivity",
      "Eco-friendly waste management",
    ],
    specifications: [
      { label: "Total Area", value: "120,000 sq ft" },
      { label: "Storage Capacity", value: "50,000 pallets" },
      { label: "Ceiling Height", value: "35 feet" },
      { label: "Construction Period", value: "24 Months" },
      { label: "Completion Date", value: "June 2021" },
      { label: "Investment", value: "₹80 Crores" },
    ],
    gallery: [
      "/industrial-warehouse-modern-design.jpg",
      "/warehouse-interior.png",
      "/warehouse-loading-dock.png",
      "/warehouse-office.jpg",
    ],
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug]

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-accent hover:text-accent/80">
            Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img src={project.gallery[0] || "/placeholder.svg"} alt={project.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white">
          <Link href="/projects" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity w-fit">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.name}</h1>
          <p className="text-lg opacity-90">{project.type}</p>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="text-accent flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-foreground/70">Location</p>
                <p className="font-semibold">{project.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-accent flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-foreground/70">Year</p>
                <p className="font-semibold">{project.year}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-accent flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-foreground/70">Team</p>
                <p className="font-semibold">{project.team}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-accent flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-foreground/70">Type</p>
                <p className="font-semibold">{project.type}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Project Overview</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">{project.overview}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <p className="text-foreground/80">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.specifications.map((spec, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border">
                <p className="text-sm text-foreground/70 mb-2">{spec.label}</p>
                <p className="text-2xl font-bold text-primary">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in a Similar Project?</h2>
          <p className="text-lg mb-8 opacity-90">Let's discuss your vision and create something extraordinary.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Next Project */}
      {project.nextProject && (
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Next Project</h2>
            <Link
              href={`/projects/${project.nextProject.slug}`}
              className="group block p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <p className="text-sm text-foreground/70 mb-2">Continue Exploring</p>
              <h3 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                {project.nextProject.name}
              </h3>
            </Link>
          </div>
        </section>
      )}
    </main>
  )
}
