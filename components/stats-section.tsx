import { Users, BookOpen, MessageSquare, FolderKanban } from "lucide-react"

const stats = [
  { 
    label: "Active Students", 
    value: "12.5k+", 
    icon: Users,
    description: "collaborating daily"
  },
  { 
    label: "Study Groups", 
    value: "850+", 
    icon: BookOpen,
    description: "across all subjects"
  },
  { 
    label: "Messages Sent", 
    value: "2.1M+", 
    icon: MessageSquare,
    description: "this semester"
  },
  { 
    label: "Projects Completed", 
    value: "4.2k+", 
    icon: FolderKanban,
    description: "and counting"
  },
]

export function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 lg:p-8 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <stat.icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm font-medium text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
