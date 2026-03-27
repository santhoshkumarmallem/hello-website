"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Layers, 
  Sparkles 
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed. Deploy in seconds and scale instantly with our global edge network.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance. Your data is protected with SOC 2 Type II certification.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and custom dashboards. Make data-driven decisions with confidence.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly. Real-time editing, comments, and version history included.",
  },
  {
    icon: Layers,
    title: "Flexible Integrations",
    description: "Connect with 200+ tools you already use. REST API and webhooks available.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Smart automation and suggestions. Let AI handle the repetitive tasks for you.",
  },
]

export function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent">Features</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Powerful features designed to help your team ship faster and collaborate better.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-index={index}
              className={`group relative rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-border/80 hover:bg-secondary/30 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
