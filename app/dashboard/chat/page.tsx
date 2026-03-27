"use client";

import { useState } from "react";
import { Send, Paperclip, Smile, Search, Phone, Video, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const conversations = [
  {
    id: 1,
    name: "Website Team",
    type: "group",
    lastMessage: "Great progress on the homepage!",
    time: "2m ago",
    unread: 3,
    members: [
      { name: "John", color: "bg-blue-500" },
      { name: "Sarah", color: "bg-pink-500" },
      { name: "Mike", color: "bg-green-500" },
    ],
    online: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    type: "direct",
    lastMessage: "Can you review my PR?",
    time: "15m ago",
    unread: 1,
    avatar: { name: "Sarah", color: "bg-pink-500" },
    online: true,
  },
  {
    id: 3,
    name: "Mobile Dev Team",
    type: "group",
    lastMessage: "Build completed successfully",
    time: "1h ago",
    unread: 0,
    members: [
      { name: "Alex", color: "bg-purple-500" },
      { name: "Emma", color: "bg-indigo-500" },
    ],
    online: false,
  },
  {
    id: 4,
    name: "Mike Chen",
    type: "direct",
    lastMessage: "Thanks for the help!",
    time: "3h ago",
    unread: 0,
    avatar: { name: "Mike", color: "bg-green-500" },
    online: false,
  },
  {
    id: 5,
    name: "API Integration",
    type: "group",
    lastMessage: "Meeting scheduled for tomorrow",
    time: "5h ago",
    unread: 0,
    members: [
      { name: "Chris", color: "bg-red-500" },
      { name: "Dana", color: "bg-teal-500" },
    ],
    online: true,
  },
];

const messages = [
  {
    id: 1,
    sender: "John",
    color: "bg-blue-500",
    message: "Hey team! I just pushed the new header component. Can you all take a look?",
    time: "10:30 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "Sarah",
    color: "bg-pink-500",
    message: "Looking at it now. The animations are smooth!",
    time: "10:32 AM",
    isMe: false,
  },
  {
    id: 3,
    sender: "Me",
    color: "bg-accent",
    message: "Nice work John! I have a few suggestions for the mobile breakpoints.",
    time: "10:35 AM",
    isMe: true,
  },
  {
    id: 4,
    sender: "Mike",
    color: "bg-green-500",
    message: "The hover states could use a bit more contrast. Otherwise, it looks great!",
    time: "10:38 AM",
    isMe: false,
  },
  {
    id: 5,
    sender: "John",
    color: "bg-blue-500",
    message: "Good feedback! I will update the contrast and add better responsive styles. Should have it done by EOD.",
    time: "10:40 AM",
    isMe: false,
  },
  {
    id: 6,
    sender: "Me",
    color: "bg-accent",
    message: "Great! Let me know if you need any help with the media queries.",
    time: "10:42 AM",
    isMe: true,
  },
];

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [messageText, setMessageText] = useState("");

  return (
    <div className="flex h-[calc(100vh-7rem)] gap-4 animate-fade-up">
      {/* Conversations List */}
      <div className="w-80 glass-card rounded-xl flex flex-col hidden lg:flex">
        {/* Search */}
        <div className="p-4 border-b border-border/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              className="pl-10 bg-secondary/30 border-border/50"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelectedChat(conv)}
              className={`w-full flex items-center gap-3 p-4 text-left hover:bg-secondary/30 transition-colors border-b border-border/30 ${
                selectedChat.id === conv.id ? "bg-secondary/50" : ""
              }`}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                {conv.type === "group" ? (
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-medium">
                      {conv.name.charAt(0)}
                    </span>
                  </div>
                ) : (
                  <div
                    className={`w-12 h-12 rounded-full ${conv.avatar?.color} flex items-center justify-center text-white font-medium`}
                  >
                    {conv.avatar?.name.charAt(0)}
                  </div>
                )}
                {conv.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-background" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground truncate">
                    {conv.name}
                  </p>
                  <span className="text-xs text-muted-foreground">{conv.time}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {conv.lastMessage}
                </p>
              </div>

              {/* Unread Badge */}
              {conv.unread > 0 && (
                <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-xs text-accent-foreground font-medium">
                  {conv.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 glass-card rounded-xl flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-accent font-medium">
                {selectedChat.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium text-foreground">{selectedChat.name}</p>
              <p className="text-xs text-muted-foreground">
                {selectedChat.online ? "Online" : "Offline"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Phone className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Video className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${msg.isMe ? "flex-row-reverse" : ""}`}
            >
              {!msg.isMe && (
                <div
                  className={`w-8 h-8 rounded-full ${msg.color} flex items-center justify-center text-white text-xs font-medium flex-shrink-0`}
                >
                  {msg.sender.charAt(0)}
                </div>
              )}
              <div
                className={`max-w-md px-4 py-2.5 rounded-2xl ${
                  msg.isMe
                    ? "bg-accent text-accent-foreground rounded-br-md"
                    : "bg-secondary/50 text-foreground rounded-bl-md"
                }`}
              >
                {!msg.isMe && (
                  <p className="text-xs font-medium text-accent mb-1">{msg.sender}</p>
                )}
                <p className="text-sm">{msg.message}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.isMe ? "text-accent-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground flex-shrink-0">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Input
              placeholder="Type a message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="flex-1 bg-secondary/30 border-border/50"
            />
            <Button variant="ghost" size="icon" className="text-muted-foreground flex-shrink-0">
              <Smile className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              className="bg-accent hover:bg-accent/90 text-accent-foreground flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
