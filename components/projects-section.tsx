"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, CheckCircle2, Circle, AlertCircle } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Research Paper: Machine Learning in Healthcare",
    course: "CS 450",
    deadline: "Mar 15, 2026",
    progress: 75,
    status: "in-progress",
    tasks: { completed: 9, total: 12 },
    team: [
      { name: "Sarah", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
      { name: "Mike", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { name: "Emma", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
    ],
  },
  {
    id: 2,
    title: "Group Presentation: Renewable Energy",
    course: "ENV 201",
    deadline: "Mar 8, 2026",
    progress: 45,
    status: "at-risk",
    tasks: { completed: 4, total: 10 },
    team: [
      { name: "Alex", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
      { name: "Lisa", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
    ],
  },
  {
    id: 3,
    title: "Lab Report: Protein Synthesis",
    course: "BIO 301",
    deadline: "Mar 20, 2026",
    progress: 100,
    status: "completed",
    tasks: { completed: 8, total: 8 },
    team: [
      { name: "Jordan", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
      { name: "Casey", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
      { name: "Riley", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
    ],
  },
]

const statusConfig = {
  "in-progress": { label: "In Progress", icon: Circle, color: "text-accent bg-accent/10" },
  "at-risk": { label: "At Risk", icon: AlertCircle, color: "text-destructive bg-destructive/10" },
  "completed": { label: "Completed", icon: CheckCircle2, color: "text-chart-2 bg-chart-2/10" },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-accent mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Track your team projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stay on top of deadlines, assign tasks, and monitor progress in real-time.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => {
            const status = statusConfig[project.status as keyof typeof statusConfig]
            const StatusIcon = status.icon
            
            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                  {/* Project Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="text-xs bg-secondary/80 text-secondary-foreground shrink-0">
                        {project.course}
                      </Badge>
                      <Badge className={`text-xs ${status.color} border-0 shrink-0`}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {status.label}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground truncate">{project.title}</h3>
                  </div>

                  {/* Progress */}
                  <div className="lg:w-48">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      {project.tasks.completed}/{project.tasks.total} tasks completed
                    </p>
                  </div>

                  {/* Team */}
                  <div className="flex items-center gap-4 lg:pl-4 lg:border-l lg:border-border">
                    <div className="flex -space-x-2">
                      {project.team.map((member, idx) => (
                        <Avatar key={idx} className="h-8 w-8 border-2 border-card">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.deadline}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
