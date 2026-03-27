import { Users, Video, FileText, Calendar, MessageCircle, Brain } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Study Groups",
    description: "Create or join study groups based on your courses. Collaborate with classmates and share knowledge effectively.",
  },
  {
    icon: Video,
    title: "Live Sessions",
    description: "Host or join live video study sessions. Screen sharing, whiteboard, and real-time collaboration tools included.",
  },
  {
    icon: FileText,
    title: "Shared Resources",
    description: "Upload and organize study materials. Access shared notes, documents, and files from your groups.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Coordinate meeting times that work for everyone. Integrated calendar with deadline tracking.",
  },
  {
    icon: MessageCircle,
    title: "Real-time Chat",
    description: "Stay connected with group messaging. Direct messages, group chats, and discussion threads.",
  },
  {
    icon: Brain,
    title: "AI Study Assistant",
    description: "Get help with concepts, generate practice questions, and receive personalized study recommendations.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Everything you need to succeed together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Powerful tools designed specifically for student collaboration and academic success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 lg:p-8 group hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
