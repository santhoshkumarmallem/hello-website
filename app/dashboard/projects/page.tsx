"use client";

import { Plus, MoreHorizontal, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Complete overhaul of the company website with modern design",
    status: "In Progress",
    progress: 75,
    members: [
      { name: "John", color: "bg-blue-500" },
      { name: "Sarah", color: "bg-pink-500" },
      { name: "Mike", color: "bg-green-500" },
      { name: "Lisa", color: "bg-yellow-500" },
    ],
    dueDate: "Apr 15, 2026",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Native iOS and Android application for customers",
    status: "In Progress",
    progress: 45,
    members: [
      { name: "Alex", color: "bg-purple-500" },
      { name: "Emma", color: "bg-indigo-500" },
    ],
    dueDate: "May 20, 2026",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    description: "Q2 digital marketing and social media campaign",
    status: "Completed",
    progress: 100,
    members: [
      { name: "Chris", color: "bg-red-500" },
      { name: "Dana", color: "bg-teal-500" },
      { name: "Pat", color: "bg-orange-500" },
    ],
    dueDate: "Mar 10, 2026",
  },
  {
    id: 4,
    name: "API Integration",
    description: "Third-party API integrations for payment and analytics",
    status: "At Risk",
    progress: 30,
    members: [
      { name: "Sam", color: "bg-cyan-500" },
      { name: "Jordan", color: "bg-lime-500" },
    ],
    dueDate: "Apr 5, 2026",
  },
  {
    id: 5,
    name: "Database Migration",
    description: "Migrate from PostgreSQL to distributed database",
    status: "Not Started",
    progress: 0,
    members: [{ name: "Taylor", color: "bg-amber-500" }],
    dueDate: "Jun 1, 2026",
  },
  {
    id: 6,
    name: "Security Audit",
    description: "Comprehensive security review and penetration testing",
    status: "In Progress",
    progress: 60,
    members: [
      { name: "Morgan", color: "bg-rose-500" },
      { name: "Casey", color: "bg-sky-500" },
    ],
    dueDate: "Apr 25, 2026",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-up">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track all your projects
          </p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
          <Plus className="w-4 h-4" />
          New Project
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="glass-card rounded-xl p-5 hover:border-accent/30 transition-all cursor-pointer animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
              <Button variant="ghost" size="icon" className="text-muted-foreground -mr-2">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {/* Status Badge */}
            <div className="mb-4">
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  project.status === "Completed"
                    ? "bg-green-400/10 text-green-400"
                    : project.status === "At Risk"
                    ? "bg-destructive/10 text-destructive"
                    : project.status === "Not Started"
                    ? "bg-muted text-muted-foreground"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {project.status}
              </span>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progress</span>
                <span className="text-foreground font-medium">{project.progress}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    project.progress === 100
                      ? "bg-green-400"
                      : project.status === "At Risk"
                      ? "bg-destructive"
                      : "bg-accent"
                  }`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              {/* Members */}
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {project.members.slice(0, 3).map((member, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-medium ring-2 ring-background`}
                    >
                      {member.name.charAt(0)}
                    </div>
                  ))}
                  {project.members.length > 3 && (
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-muted-foreground ring-2 ring-background">
                      +{project.members.length - 3}
                    </div>
                  )}
                </div>
              </div>

              {/* Due Date */}
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {project.dueDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
