import { ArrowLeft, MapPin, Calendar, Users, CheckCircle, Building2, Ruler, Hammer, Shield, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import projectsData from "@/data/projects.json"
import { Gallery } from "@/components/ui/Gallery"

type Project = typeof projectsData.projects[number]

function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData.projects || []).find((p) => p.slug === slug)
}

export async function generateStaticParams() {
  return (projectsData.projects || []).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  const title = `${project.title} | Projects`
  const description = project.seo?.description || project.summary || project.description || "Project details"
  const images = project.images?.[0]?.src ? [{ url: project.images[0].src }] : []
  return {
    title,
    description,
    openGraph: { title, description, images },
    twitter: { card: "summary_large_image", title, description, images },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

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
      <section className="relative h-80 md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={project.images?.[0]?.src || "/placeholder.svg"}
            alt={project.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-12 text-white">
          <Link 
            href="/projects" 
            className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity w-fit text-sm md:text-base"
          >
            <ArrowLeft size={18} className="md:w-5 md:h-5" />
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-base md:text-lg opacity-90">{project.type}</p>
            <span className="hidden md:inline opacity-50">•</span>
            <span className="text-sm md:text-base opacity-75">{project.location}</span>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-start gap-3">
              <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-xs md:text-sm text-foreground/70 mb-1">Location</p>
                <p className="font-semibold text-sm md:text-base">{project.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="text-accent flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-xs md:text-sm text-foreground/70 mb-1">Year</p>
                <p className="font-semibold text-sm md:text-base">{project.year}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-accent flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-xs md:text-sm text-foreground/70 mb-1">Team</p>
                <p className="font-semibold text-sm md:text-base">{project.team}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-xs md:text-sm text-foreground/70 mb-1">Status</p>
                <p className="font-semibold text-sm md:text-base capitalize">
                  {project.constructionStatus === "completed" ? "Completed" : project.constructionStatus === "in-progress" ? "In Progress" : "Planned"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-page section nav (sticky on mobile) */}
      <nav className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex gap-4 overflow-x-auto no-scrollbar py-3 text-sm">
            <li><a href="#overview" className="px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80">Overview</a></li>
            <li><a href="#features" className="px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80">Features</a></li>
            <li><a href="#specs" className="px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80">Specs</a></li>
            <li><a href="#gallery" className="px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80">Gallery</a></li>
          </ul>
        </div>
      </nav>

      {/* Overview & Project Details */}
      <section id="overview" className="scroll-mt-24 py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Project Overview</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">{project.overview}</p>
          
          {/* Project Scope */}
          <div className="mt-10 p-6 md:p-8 bg-card rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Ruler className="text-accent" size={24} />
              <h3 className="text-xl md:text-2xl font-bold text-primary">Project Scope</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">{project.projectScope}</p>
          </div>

          {/* Architectural Style & Status */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="text-accent" size={24} />
                <h3 className="text-lg font-bold text-primary">Architectural Style</h3>
              </div>
              <p className="text-foreground/80">{project.architecturalStyle}</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-accent" size={24} />
                <h3 className="text-lg font-bold text-primary">Construction Status</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                  project.constructionStatus === "completed" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : project.constructionStatus === "in-progress"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                }`}>
                  {project.constructionStatus === "completed" ? "Completed" : project.constructionStatus === "in-progress" ? "In Progress" : "Planned"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 py-16 md:py-24 bg-muted">
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
      <section id="specs" className="scroll-mt-24 py-16 md:py-24 bg-background">
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

      {/* Materials & Methods */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Key Materials */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="text-accent" size={28} />
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Key Materials</h2>
              </div>
              <div className="space-y-3">
                {project.materials.map((material, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border">
                    <Sparkles className="text-accent flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-foreground/80 text-sm md:text-base">{material}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Construction Methods */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="text-accent" size={28} />
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Construction Methods</h2>
              </div>
              <div className="space-y-3">
                {project.constructionMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border">
                    <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-foreground/80 text-sm md:text-base">{method}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="scroll-mt-24 py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Project Gallery</h2>
          <Gallery images={(project.images || []).map((i) => ({ src: i.src, alt: i.alt }))} />
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
