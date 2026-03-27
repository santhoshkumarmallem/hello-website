"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

const logos = [
  "Google",
  "Microsoft",
  "Stripe",
  "Notion",
  "Linear",
  "Vercel",
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Announcement Badge */}
        <div
          className={`mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-muted-foreground">New:</span>
          <span className="text-foreground">AI-powered workflows</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
        </div>

        {/* Main Heading */}
        <h1
          className={`text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Build better products
          <br />
          <span className="text-muted-foreground">faster together</span>
        </h1>

        {/* Subheading */}
        <p
          className={`mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          The modern platform for teams who want to ship high-quality products.
          Streamline your workflow with powerful collaboration tools.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button size="lg" className="group w-full rounded-full px-8 sm:w-auto">
            Start for free
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-full px-8 sm:w-auto"
          >
            <Play className="mr-2 h-4 w-4" />
            Watch demo
          </Button>
        </div>

        {/* Social Proof */}
        <div
          className={`mt-16 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="mb-6 text-sm text-muted-foreground">
            Trusted by teams at leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-muted-foreground"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
