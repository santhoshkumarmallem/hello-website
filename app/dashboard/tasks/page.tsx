"use client";

import { useState } from "react";
import { Plus, Filter, CheckCircle2, Circle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const tasks = [
  {
    id: 1,
    title: "Design homepage mockup",
    project: "Website Redesign",
    priority: "high",
    status: "in-progress",
    dueDate: "Today",
    assignee: { name: "John", color: "bg-blue-500" },
  },
  {
    id: 2,
    title: "Review pull request #234",
    project: "API Integration",
    priority: "medium",
    status: "todo",
    dueDate: "Tomorrow",
    assignee: { name: "Sarah", color: "bg-pink-500" },
  },
  {
    id: 3,
    title: "Write API documentation",
    project: "API Integration",
    priority: "low",
    status: "completed",
    dueDate: "Mar 25",
    assignee: { name: "Mike", color: "bg-green-500" },
  },
  {
    id: 4,
    title: "Fix mobile navigation bug",
    project: "Mobile App Development",
    priority: "high",
    status: "in-progress",
    dueDate: "Today",
    assignee: { name: "Alex", color: "bg-purple-500" },
  },
  {
    id: 5,
    title: "Set up CI/CD pipeline",
    project: "Database Migration",
    priority: "medium",
    status: "todo",
    dueDate: "Mar 30",
    assignee: { name: "Emma", color: "bg-indigo-500" },
  },
  {
    id: 6,
    title: "Create user onboarding flow",
    project: "Website Redesign",
    priority: "high",
    status: "todo",
    dueDate: "Mar 28",
    assignee: { name: "Chris", color: "bg-red-500" },
  },
  {
    id: 7,
    title: "Implement authentication",
    project: "Mobile App Development",
    priority: "high",
    status: "completed",
    dueDate: "Mar 20",
    assignee: { name: "Dana", color: "bg-teal-500" },
  },
  {
    id: 8,
    title: "Performance optimization",
    project: "Website Redesign",
    priority: "medium",
    status: "in-progress",
    dueDate: "Apr 1",
    assignee: { name: "Pat", color: "bg-orange-500" },
  },
];

const filters = ["All", "To Do", "In Progress", "Completed"];

export default function TasksPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "To Do") return task.status === "todo";
    if (activeFilter === "In Progress") return task.status === "in-progress";
    if (activeFilter === "Completed") return task.status === "completed";
    return true;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-accent" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <span className="flex items-center gap-1 text-xs text-destructive">
            <AlertCircle className="w-3 h-3" />
            High
          </span>
        );
      case "medium":
        return <span className="text-xs text-yellow-400">Medium</span>;
      default:
        return <span className="text-xs text-muted-foreground">Low</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-up">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Tasks</h1>
          <p className="text-muted-foreground mt-1">
            Track and manage your tasks
          </p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
          <Plus className="w-4 h-4" />
          Add Task
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 animate-fade-up animation-delay-100">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter)}
            className={
              activeFilter === filter
                ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                : "bg-secondary/30 border-border/50 hover:bg-secondary/50"
            }
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="glass-card rounded-xl overflow-hidden animate-fade-up animation-delay-200">
        <div className="divide-y divide-border/50">
          {filteredTasks.map((task, index) => (
            <div
              key={task.id}
              className="flex items-center gap-4 p-4 hover:bg-secondary/30 transition-colors cursor-pointer"
            >
              {/* Status Icon */}
              <button className="flex-shrink-0 hover:scale-110 transition-transform">
                {getStatusIcon(task.status)}
              </button>

              {/* Task Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <p
                    className={`font-medium ${
                      task.status === "completed"
                        ? "text-muted-foreground line-through"
                        : "text-foreground"
                    }`}
                  >
                    {task.title}
                  </p>
                  {getPriorityBadge(task.priority)}
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {task.project}
                </p>
              </div>

              {/* Due Date */}
              <div className="hidden sm:block text-sm text-muted-foreground">
                {task.dueDate}
              </div>

              {/* Assignee */}
              <div
                className={`w-8 h-8 rounded-full ${task.assignee.color} flex items-center justify-center text-white text-xs font-medium flex-shrink-0`}
                title={task.assignee.name}
              >
                {task.assignee.name.charAt(0)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up animation-delay-300">
        <div className="glass-card rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-foreground">{tasks.length}</p>
          <p className="text-sm text-muted-foreground">Total Tasks</p>
        </div>
        <div className="glass-card rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-foreground">
            {tasks.filter((t) => t.status === "todo").length}
          </p>
          <p className="text-sm text-muted-foreground">To Do</p>
        </div>
        <div className="glass-card rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-accent">
            {tasks.filter((t) => t.status === "in-progress").length}
          </p>
          <p className="text-sm text-muted-foreground">In Progress</p>
        </div>
        <div className="glass-card rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-green-400">
            {tasks.filter((t) => t.status === "completed").length}
          </p>
          <p className="text-sm text-muted-foreground">Completed</p>
        </div>
      </div>
    </div>
  );
}
