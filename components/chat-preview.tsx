"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Paperclip, Smile } from "lucide-react"

const messages = [
  {
    id: 1,
    user: { name: "Emma Wilson", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
    message: "Hey everyone! Has anyone started on the literature review section?",
    time: "10:32 AM",
    isOwn: false,
  },
  {
    id: 2,
    user: { name: "Alex Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    message: "I found some great papers on neural networks in healthcare diagnostics. Will share them in the resources folder.",
    time: "10:35 AM",
    isOwn: false,
  },
  {
    id: 3,
    user: { name: "You", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    message: "Perfect! I can take the methodology section. Should we meet tomorrow to discuss the outline?",
    time: "10:38 AM",
    isOwn: true,
  },
  {
    id: 4,
    user: { name: "Emma Wilson", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
    message: "Works for me! 3 PM in the library study room?",
    time: "10:40 AM",
    isOwn: false,
  },
]

export function ChatPreview() {
  const [newMessage, setNewMessage] = useState("")

  return (
    <section id="chat" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-accent mb-3">Communication</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Real-time collaboration made easy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stay connected with your study groups through instant messaging and file sharing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-chart-2 ring-2 ring-card" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">ML Research Team</h3>
                  <p className="text-xs text-muted-foreground">4 members online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.isOwn ? "flex-row-reverse" : ""}`}
                >
                  {!msg.isOwn && (
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarImage src={msg.user.avatar} alt={msg.user.name} />
                      <AvatarFallback>{msg.user.name[0]}</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`flex flex-col ${msg.isOwn ? "items-end" : ""} max-w-xs sm:max-w-md`}>
                    {!msg.isOwn && (
                      <span className="text-xs text-muted-foreground mb-1">{msg.user.name}</span>
                    )}
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm ${
                        msg.isOwn
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-muted text-foreground rounded-bl-md"
                      }`}
                    >
                      {msg.message}
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-foreground">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 bg-muted border-0 focus-visible:ring-1 focus-visible:ring-accent"
                />
                <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-foreground">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button size="icon" className="shrink-0 bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
