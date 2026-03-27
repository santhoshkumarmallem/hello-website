"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, ArrowRight, Clock, MessageSquare } from "lucide-react"

const groups = [
  {
    id: 1,
    name: "Advanced Calculus Study",
    course: "MATH 301",
    members: 12,
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    ],
    lastActive: "2 min ago",
    newMessages: 5,
    tags: ["Mathematics", "Midterm Prep"],
  },
  {
    id: 2,
    name: "CS Algorithms Group",
    course: "CS 201",
    members: 8,
    avatars: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    ],
    lastActive: "15 min ago",
    newMessages: 0,
    tags: ["Computer Science", "Assignments"],
  },
  {
    id: 3,
    name: "Organic Chemistry Lab",
    course: "CHEM 250",
    members: 6,
    avatars: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    ],
    lastActive: "1 hour ago",
    newMessages: 12,
    tags: ["Chemistry", "Lab Reports"],
  },
]

export function GroupsSection() {
  return (
    <section id="groups" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-medium text-accent mb-3">Your Groups</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Active Study Groups
            </h2>
          </div>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground group self-start sm:self-auto">
            View all groups
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="glass-card rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="text-xs bg-secondary/80 text-secondary-foreground">
                  {group.course}
                </Badge>
                {group.newMessages > 0 && (
                  <div className="flex items-center gap-1 text-xs text-accent">
                    <MessageSquare className="h-3 w-3" />
                    <span>{group.newMessages} new</span>
                  </div>
                )}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {group.name}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {group.avatars.map((avatar, idx) => (
                      <Avatar key={idx} className="h-7 w-7 border-2 border-card">
                        <AvatarImage src={avatar} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    ))}
                    {group.members > group.avatars.length && (
                      <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground border-2 border-card">
                        +{group.members - group.avatars.length}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {group.members}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {group.lastActive}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
