"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Search,
  Menu,
  X,
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  MessageSquare,
  FileText,
  Settings,
  LogOut,
  ChevronDown,
  AlertTriangle,
  CheckCircle2,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/auth-context";

const mobileNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FolderKanban, label: "Projects", href: "/dashboard/projects" },
  { icon: CheckSquare, label: "Tasks", href: "/dashboard/tasks" },
  { icon: MessageSquare, label: "Chat", href: "/dashboard/chat" },
  { icon: FileText, label: "Files", href: "/dashboard/files" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

const notifications = [
  {
    id: 1,
    title: "New comment on your task",
    description: "John mentioned you in Website Redesign",
    time: "5 min ago",
    unread: true,
    type: "comment",
  },
  {
    id: 2,
    title: "Project deadline approaching",
    description: "Mobile App Dev is due in 2 days",
    time: "1 hour ago",
    unread: true,
    type: "warning",
  },
  {
    id: 3,
    title: "Task completed",
    description: "API Integration task marked done",
    time: "3 hours ago",
    unread: false,
    type: "success",
  },
  {
    id: 4,
    title: "New team member joined",
    description: "Sarah Chen joined Website Redesign",
    time: "5 hours ago",
    unread: false,
    type: "info",
  },
  {
    id: 5,
    title: "File uploaded",
    description: "Design_v3.fig was uploaded to Brand Guidelines",
    time: "Yesterday",
    unread: false,
    type: "info",
  },
];

interface TopNavbarProps {
  sidebarCollapsed: boolean;
}

export function TopNavbar({ sidebarCollapsed }: TopNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      <header
        className={`fixed top-0 right-0 h-16 bg-background/80 backdrop-blur-xl border-b border-border/50 flex items-center justify-between px-4 md:px-6 z-30 transition-all duration-300 ${
          sidebarCollapsed ? "left-0 md:left-[72px]" : "left-0 md:left-64"
        }`}
      >
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-muted-foreground"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </Button>

        {/* Mobile Logo */}
        <Link href="/dashboard" className="flex items-center gap-2 md:hidden">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">S</span>
          </div>
        </Link>

        {/* Search */}
        <div className="relative hidden md:block w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search projects, tasks, files..."
            className="pl-10 bg-secondary/30 border-border/50 h-10 focus:bg-secondary/50"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Search */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground"
          >
            <Search className="w-5 h-5" />
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-0">
              <div className="px-4 py-3 border-b border-border">
                <h3 className="font-semibold text-foreground">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => {
                  const IconComponent = notification.type === "warning" 
                    ? AlertTriangle 
                    : notification.type === "success" 
                    ? CheckCircle2 
                    : notification.type === "comment"
                    ? MessageSquare
                    : Info;
                  const iconColor = notification.type === "warning"
                    ? "text-amber-400 bg-amber-400/10"
                    : notification.type === "success"
                    ? "text-emerald-400 bg-emerald-400/10"
                    : notification.type === "comment"
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-muted-foreground bg-secondary";
                  
                  return (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-secondary/50 cursor-pointer transition-colors border-b border-border/50 last:border-0 ${
                        notification.unread ? "bg-accent/5" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full ${iconColor} flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-medium text-foreground">
                              {notification.title}
                            </p>
                            {notification.unread && (
                              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-1.5" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {notification.description}
                          </p>
                          <p className="text-xs text-muted-foreground/70 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="px-4 py-2 border-t border-border">
                <Button variant="ghost" className="w-full text-accent text-sm">
                  View all notifications
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2 hover:bg-secondary/50"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-medium text-sm">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </span>
                </div>
                <span className="hidden lg:block text-sm font-medium text-foreground max-w-24 truncate">
                  {user?.name || "User"}
                </span>
                <ChevronDown className="w-4 h-4 text-muted-foreground hidden lg:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-foreground">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings" className="cursor-pointer">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={logout}
                className="text-destructive focus:text-destructive cursor-pointer"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-sidebar border-r border-sidebar-border z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          <Link href="/dashboard" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold text-sidebar-foreground">Synapse</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
            className="text-muted-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Nav */}
        <nav className="px-3 py-4 space-y-1">
          {mobileNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile User Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-accent font-medium">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                {user?.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            onClick={() => {
              setMobileMenuOpen(false);
              logout();
            }}
          >
            <LogOut className="w-5 h-5" />
            Sign out
          </Button>
        </div>
      </div>
    </>
  );
}
