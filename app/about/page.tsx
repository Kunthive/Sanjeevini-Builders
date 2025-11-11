import { ArrowRight, Award, Zap, CheckCircle, Building2, Briefcase } from "lucide-react"
import Link from "next/link"

export default function About() {
  const stats = [
    { label: "Established", value: "2025" },
    { label: "Service Areas", value: "6+" },
    { label: "Team Members", value: "25+" },
    { label: "Client Satisfaction", value: "100%" },
  ]

  const services = [
    {
      icon: Building2,
      title: "Residential Apartments",
      description: "Premium apartments designed for modern urban living with quality finishes and amenities.",
    },
    {
      icon: Building2,
      title: "Villa / Row House Development",
      description: "Luxury villas and row houses that combine elegance with functional design.",
    },
    {
      icon: Briefcase,
      title: "Layout Formation & Land Development",
      description: "Comprehensive land development and layout planning services for optimal land utilization.",
    },
    {
      icon: Briefcase,
      title: "Warehouse Development",
      description: "Modern, efficient warehouse facilities designed for logistics and industrial needs.",
    },
    {
      icon: Zap,
      title: "Property Maintenance & Facility Management",
      description: "End-to-end property maintenance and facility management services.",
    },
    {
      icon: Award,
      title: "Commercial / Mixed-use Projects",
      description: "Innovative commercial and mixed-use developments that drive business growth.",
    },
  ]

  const team = [
    { name: "Rajesh Kumar", role: "Founder & Lead Architect", image: "/professional-architect.png" },
    { name: "Priya Sharma", role: "Design Director", image: "/professional-designer.png" },
    { name: "Amit Patel", role: "Project Manager", image: "/professional-manager.png" },
    { name: "Neha Singh", role: "Senior Engineer", image: "/professional-engineer.png" },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Sanjeevini Services Pvt Ltd</h1>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Established in 2025, we are a new-age real estate developer from Bengaluru, shaping the city's skyline through trust, design, and enduring quality. From premium villas to modern warehouses, our projects blend thoughtful design, durability, and sustainability to deliver lasting value.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                To build sustainable spaces that enrich lives and create long-term value for our customers and stakeholders. We are committed to delivering quality, transparency, and timely execution in every project we undertake.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed">
                To be one of Bengaluru's most trusted and innovative real estate brands, delivering value through quality, transparency, and design excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-foreground/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
                      <p className="text-foreground/70">{service.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-foreground/70 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Why Choose Sanjeevini Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="text-accent flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Quality Construction</h3>
                <p className="text-foreground/70">
                  Premium materials and rigorous quality control ensure lasting durability.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="text-accent flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Transparency</h3>
                <p className="text-foreground/70">
                  Complete transparency in pricing, timelines, and project execution.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="text-accent flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Design Excellence</h3>
                <p className="text-foreground/70">Innovative designs that blend aesthetics with functionality.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="text-accent flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Timely Delivery</h3>
                <p className="text-foreground/70">
                  Committed to on-time project completion with professional execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 opacity-90">Let's discuss your project and bring your vision to life.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Get In Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
