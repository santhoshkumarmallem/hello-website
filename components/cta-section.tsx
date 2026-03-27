import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Free for students
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to transform how you study?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Join thousands of students already collaborating on StudyHub. Create your free account and start connecting with your classmates today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-border text-foreground hover:bg-secondary/50">
                Schedule a Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              No credit card required. Sign up with your .edu email.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
