"use client"

import Image from "next/image"
import { Icons } from "@/components/icons"

export default function TeamPage() {
  const directors = [
    {
      name: "Vijay Kummar M",
      role: "Director",
      image: "/professionals/Vijay_Kumar.jpg",
      bio:
        "With over 12 years of experience, Vijay leads operations and project delivery with a focus on quality and client satisfaction.",
    },
    {
      name: "Diwkara V",
      role: "Director",
      image: "/professional-engineer.png",
      bio:
        "Divakar oversees engineering and execution, ensuring structural integrity and timely completion across all projects.",
    },
  ]

  const team = [
    {
      name: "Appu",
      role: "Lead Architect",
      image: "/professional-architect.png",
      bio: "Designs modern, human-centric spaces blending form and function.",
    },
    {
      name: "Edwin Pinto",
      role: "Senior Interior Designer",
      image: "/professionals/Interior-Designer.jpg",
      bio: "Creates refined interiors with durable materials and timeless style.",
    },
    {
      name: "Vijay Kumar P",
      role: "Project Manager",
      image: "/professionals/vijay_kumar_p.jpg",
      bio: "Coordinates schedules, budgets, and teams to deliver on time.",
    },
    {
      name: "Murthy",
      role: "Site Engineer",
      image: "/professional-engineer.png",
      bio: "Leads on-site execution with a safety-first approach.",
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Team</h1>
          <p className="text-foreground/80 text-lg">
            Meet the people who build, design, and deliver exceptional spaces.
          </p>
        </div>
      </section>

      {/* Directors */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {directors.map((person, idx) => (
              <article key={idx} className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="relative h-72 md:h-80">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold">{person.name}</h3>
                  <p className="text-foreground/70 mb-3">{person.role}</p>
                  <p className="text-foreground/80 text-sm leading-relaxed">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary text-center">Our People</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((person, idx) => (
              <article key={idx} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{person.name}</h3>
                  <p className="text-foreground/70 text-sm mb-2">{person.role}</p>
                  <p className="text-foreground/80 text-sm leading-relaxed line-clamp-3">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
