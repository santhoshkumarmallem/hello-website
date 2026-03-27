"use client";

import {
  Users,
  FolderKanban,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Calendar,
  BarChart3,
  Activity,
  FileText,
  MessageSquare,
  UserPlus,
  GitBranch,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";

export default function DashboardPage() {
  const { user } = useAuth();

  const analyticsCards = [
    {
      label: "Total Projects",
      value: "24",
      change: "+12%",
      changeValue: "+3",
      period: "vs last month",
      icon: FolderKanban,
      trend: "up",
      color: "bg-blue-500/10 text-blue-400",
      chartData: [30, 45, 35, 50, 40, 60, 55],
    },
    {
      label: "Active Tasks",
      value: "156",
      change: "+8%",
      changeValue: "+12",
      period: "vs last week",
      icon: CheckCircle2,
      trend: "up",
      color: "bg-emerald-500/10 text-emerald-400",
      chartData: [20, 35, 45, 30, 55, 40, 60],
    },
    {
      label: "Team Members",
      value: "48",
      change: "+4%",
      changeValue: "+2",
      period: "vs last month",
      icon: Users,
      trend: "up",
      color: "bg-violet-500/10 text-violet-400",
      chartData: [40, 42, 44, 43, 45, 46, 48],
    },
    {
      label: "Hours Logged",
      value: "1,284",
      change: "-3%",
      changeValue: "-42",
      period: "vs last week",
      icon: Clock,
      trend: "down",
      color: "bg-amber-500/10 text-amber-400",
      chartData: [65, 55, 60, 50, 55, 45, 50],
    },
  ];

  const activityFeed = [
    {
      id: 1,
      user: "Sarah Chen",
      avatar: "SC",
      action: "completed task",
      target: "Update user dashboard",
      project: "Website Redesign",
      time: "2 min ago",
      icon: CheckCircle2,
      iconColor: "text-emerald-400 bg-emerald-400/10",
    },
    {
      id: 2,
      user: "Mike Johnson",
      avatar: "MJ",
      action: "commented on",
      target: "API Integration",
      project: "Mobile App",
      time: "15 min ago",
      icon: MessageSquare,
      iconColor: "text-blue-400 bg-blue-400/10",
    },
    {
      id: 3,
      user: "Emily Davis",
      avatar: "ED",
      action: "uploaded file",
      target: "Design_v2.fig",
      project: "Brand Guidelines",
      time: "32 min ago",
      icon: FileText,
      iconColor: "text-violet-400 bg-violet-400/10",
    },
    {
      id: 4,
      user: "Alex Turner",
      avatar: "AT",
      action: "joined project",
      target: "Marketing Campaign",
      project: null,
      time: "1 hour ago",
      icon: UserPlus,
      iconColor: "text-amber-400 bg-amber-400/10",
    },
    {
      id: 5,
      user: "Jessica Lee",
      avatar: "JL",
      action: "merged branch",
      target: "feature/auth-flow",
      project: "Core Platform",
      time: "2 hours ago",
      icon: GitBranch,
      iconColor: "text-cyan-400 bg-cyan-400/10",
    },
    {
      id: 6,
      user: "David Park",
      avatar: "DP",
      action: "created milestone",
      target: "Q2 Launch",
      project: "Product Roadmap",
      time: "3 hours ago",
      icon: Target,
      iconColor: "text-rose-400 bg-rose-400/10",
    },
  ];

  const recentProjects = [
    {
      name: "Website Redesign",
      status: "In Progress",
      progress: 75,
      members: 4,
      dueDate: "Apr 15",
    },
    {
      name: "Mobile App Development",
      status: "In Progress",
      progress: 45,
      members: 6,
      dueDate: "May 20",
    },
    {
      name: "Marketing Campaign",
      status: "Completed",
      progress: 100,
      members: 3,
      dueDate: "Mar 10",
    },
    {
      name: "API Integration",
      status: "At Risk",
      progress: 30,
      members: 2,
      dueDate: "Apr 5",
    },
  ];

  const upcomingTasks = [
    { title: "Design review meeting", time: "Today, 3:00 PM", priority: "high" },
    { title: "Submit project proposal", time: "Tomorrow, 10:00 AM", priority: "medium" },
    { title: "Client presentation", time: "Mar 30, 2:00 PM", priority: "high" },
    { title: "Code review", time: "Mar 31, 11:00 AM", priority: "low" },
  ];

  // Mini sparkline chart component
  const Sparkline = ({ data, color }: { data: number[]; color: string }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    
    return (
      <div className="flex items-end gap-0.5 h-8">
        {data.map((value, i) => (
          <div
            key={i}
            className={`w-1 rounded-full ${color}`}
            style={{ height: `${((value - min) / range) * 100}%`, minHeight: "4px" }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-up">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-muted-foreground mt-1">
            Here&apos;s what&apos;s happening with your projects today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Mar 27, 2026</span>
          </Button>
          <Button size="sm" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Zap className="w-4 h-4" />
            Quick Action
          </Button>
        </div>
      </div>

      {/* Analytics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {analyticsCards.map((card, index) => (
          <div
            key={card.label}
            className="glass-card rounded-xl p-5 animate-fade-up group hover:border-accent/30 transition-colors"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-11 h-11 rounded-xl ${card.color} flex items-center justify-center`}>
                <card.icon className="w-5 h-5" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                card.trend === "up" ? "text-emerald-400" : "text-rose-400"
              }`}>
                {card.trend === "up" ? (
                  <TrendingUp className="w-3.5 h-3.5" />
                ) : (
                  <TrendingDown className="w-3.5 h-3.5" />
                )}
                {card.change}
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-foreground">{card.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{card.label}</p>
                <p className="text-xs text-muted-foreground/70 mt-0.5">
                  {card.changeValue} {card.period}
                </p>
              </div>
              <Sparkline 
                data={card.chartData} 
                color={card.trend === "up" ? "bg-emerald-400/60" : "bg-rose-400/60"} 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Projects - Takes 2 columns */}
        <div className="xl:col-span-2 glass-card rounded-xl p-6 animate-fade-up animation-delay-500">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-semibold text-foreground">
                Recent Projects
              </h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-accent hover:text-accent/80 gap-1"
            >
              View all
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {recentProjects.map((project) => (
              <div
                key={project.name}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-medium text-foreground truncate group-hover:text-accent transition-colors">
                      {project.name}
                    </p>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full flex-shrink-0 font-medium ${
                        project.status === "Completed"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : project.status === "At Risk"
                          ? "bg-rose-400/10 text-rose-400"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          project.status === "Completed"
                            ? "bg-emerald-400"
                            : project.status === "At Risk"
                            ? "bg-rose-400"
                            : "bg-accent"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-10 font-medium">
                      {project.progress}%
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs">{project.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex -space-x-2">
                      {[...Array(Math.min(project.members, 3))].map((_, i) => (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground"
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    {project.members > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.members - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="glass-card rounded-xl p-6 animate-fade-up animation-delay-600">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-semibold text-foreground">
                Activity Feed
              </h2>
            </div>
            <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 gap-1">
              View all
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {activityFeed.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className={`w-9 h-9 rounded-full ${activity.iconColor} flex items-center justify-center flex-shrink-0`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">
                    <span className="font-medium hover:text-accent transition-colors">
                      {activity.user}
                    </span>{" "}
                    <span className="text-muted-foreground">{activity.action}</span>{" "}
                    <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {activity.target}
                    </span>
                  </p>
                  {activity.project && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      in {activity.project}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <div className="glass-card rounded-xl p-6 animate-fade-up animation-delay-600">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-semibold text-foreground">
                Upcoming Tasks
              </h2>
            </div>
            <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 gap-1">
              View all
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {upcomingTasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer group"
              >
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    task.priority === "high"
                      ? "bg-rose-400"
                      : task.priority === "medium"
                      ? "bg-amber-400"
                      : "bg-emerald-400"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate group-hover:text-accent transition-colors">
                    {task.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {task.time}
                  </p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${
                  task.priority === "high"
                    ? "bg-rose-400/10 text-rose-400"
                    : task.priority === "medium"
                    ? "bg-amber-400/10 text-amber-400"
                    : "bg-emerald-400/10 text-emerald-400"
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats Summary */}
        <div className="glass-card rounded-xl p-6 animate-fade-up animation-delay-600">
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold text-foreground">
              Weekly Progress
            </h2>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Tasks Completed</span>
                <span className="text-sm font-medium text-foreground">23/30</span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: "77%" }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Project Milestones</span>
                <span className="text-sm font-medium text-foreground">8/12</span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: "67%" }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Team Productivity</span>
                <span className="text-sm font-medium text-foreground">92%</span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-violet-400 rounded-full" style={{ width: "92%" }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Budget Utilization</span>
                <span className="text-sm font-medium text-foreground">68%</span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: "68%" }} />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall Score</p>
                <p className="text-2xl font-bold text-foreground mt-1">87%</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+5%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">vs last week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
