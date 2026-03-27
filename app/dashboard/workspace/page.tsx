"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  File,
  Folder,
  FolderOpen,
  Search,
  Plus,
  MoreHorizontal,
  X,
  MessageSquare,
  Activity,
  Send,
  GitBranch,
  GitCommit,
  Clock,
  User,
  FileCode,
  FileJson,
  FileText,
  Image,
  Css3,
  Settings,
  Play,
  Copy,
  Download,
  Maximize2,
  Minimize2,
  PanelRightClose,
  PanelRight,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// File tree structure
const fileTree = [
  {
    id: "1",
    name: "src",
    type: "folder" as const,
    children: [
      {
        id: "1-1",
        name: "components",
        type: "folder" as const,
        children: [
          { id: "1-1-1", name: "Button.tsx", type: "file" as const, language: "typescript" },
          { id: "1-1-2", name: "Card.tsx", type: "file" as const, language: "typescript" },
          { id: "1-1-3", name: "Modal.tsx", type: "file" as const, language: "typescript" },
          { id: "1-1-4", name: "index.ts", type: "file" as const, language: "typescript" },
        ],
      },
      {
        id: "1-2",
        name: "hooks",
        type: "folder" as const,
        children: [
          { id: "1-2-1", name: "useAuth.ts", type: "file" as const, language: "typescript" },
          { id: "1-2-2", name: "useTheme.ts", type: "file" as const, language: "typescript" },
        ],
      },
      {
        id: "1-3",
        name: "pages",
        type: "folder" as const,
        children: [
          { id: "1-3-1", name: "index.tsx", type: "file" as const, language: "typescript" },
          { id: "1-3-2", name: "dashboard.tsx", type: "file" as const, language: "typescript" },
          { id: "1-3-3", name: "settings.tsx", type: "file" as const, language: "typescript" },
        ],
      },
      { id: "1-4", name: "App.tsx", type: "file" as const, language: "typescript" },
      { id: "1-5", name: "main.tsx", type: "file" as const, language: "typescript" },
      { id: "1-6", name: "styles.css", type: "file" as const, language: "css" },
    ],
  },
  {
    id: "2",
    name: "public",
    type: "folder" as const,
    children: [
      { id: "2-1", name: "favicon.ico", type: "file" as const, language: "image" },
      { id: "2-2", name: "logo.svg", type: "file" as const, language: "image" },
    ],
  },
  { id: "3", name: "package.json", type: "file" as const, language: "json" },
  { id: "4", name: "tsconfig.json", type: "file" as const, language: "json" },
  { id: "5", name: "README.md", type: "file" as const, language: "markdown" },
  { id: "6", name: ".gitignore", type: "file" as const, language: "text" },
];

// Sample code content
const fileContents: Record<string, { content: string; language: string }> = {
  "Button.tsx": {
    language: "typescript",
    content: `import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium",
          "transition-colors focus-visible:outline-none focus-visible:ring-2",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90":
              variant === "default",
            "border border-input hover:bg-accent": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4": size === "md",
            "h-12 px-6 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";`,
  },
  "App.tsx": {
    language: "typescript",
    content: `import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import { AuthProvider } from "./hooks/useAuth";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}`,
  },
  "package.json": {
    language: "json",
    content: `{
  "name": "my-project",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "typescript": "^4.9.5",
    "vite": "^4.1.0"
  }
}`,
  },
};

// Open tabs type
interface Tab {
  id: string;
  name: string;
  language: string;
}

// Activity items
const activityItems = [
  {
    id: 1,
    user: "Sarah Chen",
    action: "pushed 3 commits to",
    target: "feature/auth",
    time: "2 min ago",
    type: "commit",
  },
  {
    id: 2,
    user: "John Doe",
    action: "commented on",
    target: "Button.tsx",
    time: "15 min ago",
    type: "comment",
  },
  {
    id: 3,
    user: "Alex Kim",
    action: "created branch",
    target: "fix/modal-bug",
    time: "1 hour ago",
    type: "branch",
  },
  {
    id: 4,
    user: "Emma Wilson",
    action: "merged PR #42 into",
    target: "main",
    time: "2 hours ago",
    type: "merge",
  },
  {
    id: 5,
    user: "Mike Johnson",
    action: "requested review on",
    target: "PR #45",
    time: "3 hours ago",
    type: "review",
  },
];

// Chat messages
const chatMessages = [
  {
    id: 1,
    user: "Sarah Chen",
    avatar: "SC",
    message: "Hey team, I just pushed the auth changes. Can someone review?",
    time: "10:30 AM",
    isOwn: false,
  },
  {
    id: 2,
    user: "You",
    avatar: "YO",
    message: "Sure, I'll take a look at it now.",
    time: "10:32 AM",
    isOwn: true,
  },
  {
    id: 3,
    user: "John Doe",
    avatar: "JD",
    message: "The Button component looks great! Just a small suggestion on the hover states.",
    time: "10:35 AM",
    isOwn: false,
  },
  {
    id: 4,
    user: "Sarah Chen",
    avatar: "SC",
    message: "Thanks! I'll update that in the next commit.",
    time: "10:38 AM",
    isOwn: false,
  },
];

// File icon component
function FileIcon({ language }: { language: string }) {
  switch (language) {
    case "typescript":
      return <FileCode className="w-4 h-4 text-blue-400" />;
    case "json":
      return <FileJson className="w-4 h-4 text-yellow-400" />;
    case "css":
      return <Css3 className="w-4 h-4 text-blue-500" />;
    case "markdown":
      return <FileText className="w-4 h-4 text-muted-foreground" />;
    case "image":
      return <Image className="w-4 h-4 text-green-400" />;
    default:
      return <File className="w-4 h-4 text-muted-foreground" />;
  }
}

// Tree item component
interface TreeNode {
  id: string;
  name: string;
  type: "file" | "folder";
  language?: string;
  children?: TreeNode[];
}

function TreeItem({
  node,
  level = 0,
  onFileSelect,
  selectedFile,
  expandedFolders,
  toggleFolder,
}: {
  node: TreeNode;
  level?: number;
  onFileSelect: (name: string, language: string) => void;
  selectedFile: string | null;
  expandedFolders: Set<string>;
  toggleFolder: (id: string) => void;
}) {
  const isExpanded = expandedFolders.has(node.id);
  const isSelected = selectedFile === node.name;

  if (node.type === "folder") {
    return (
      <div>
        <button
          onClick={() => toggleFolder(node.id)}
          className={`w-full flex items-center gap-1 px-2 py-1 text-sm hover:bg-secondary/50 rounded transition-colors`}
          style={{ paddingLeft: `${level * 12 + 8}px` }}
        >
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          )}
          {isExpanded ? (
            <FolderOpen className="w-4 h-4 text-amber-400 flex-shrink-0" />
          ) : (
            <Folder className="w-4 h-4 text-amber-400 flex-shrink-0" />
          )}
          <span className="text-foreground truncate">{node.name}</span>
        </button>
        {isExpanded && node.children && (
          <div>
            {node.children.map((child) => (
              <TreeItem
                key={child.id}
                node={child}
                level={level + 1}
                onFileSelect={onFileSelect}
                selectedFile={selectedFile}
                expandedFolders={expandedFolders}
                toggleFolder={toggleFolder}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => onFileSelect(node.name, node.language || "text")}
      className={`w-full flex items-center gap-2 px-2 py-1 text-sm rounded transition-colors ${
        isSelected
          ? "bg-accent/20 text-accent"
          : "hover:bg-secondary/50 text-muted-foreground"
      }`}
      style={{ paddingLeft: `${level * 12 + 28}px` }}
    >
      <FileIcon language={node.language || "text"} />
      <span className="truncate">{node.name}</span>
    </button>
  );
}

// Code editor with syntax highlighting (simplified)
function CodeEditor({ content, language }: { content: string; language: string }) {
  const lines = content.split("\n");

  return (
    <div className="font-mono text-sm">
      {lines.map((line, index) => (
        <div key={index} className="flex hover:bg-secondary/30">
          <span className="w-12 px-3 text-right text-muted-foreground/50 select-none border-r border-border/50">
            {index + 1}
          </span>
          <pre className="flex-1 px-4 whitespace-pre overflow-x-auto">
            <code className={`language-${language}`}>{line || " "}</code>
          </pre>
        </div>
      ))}
    </div>
  );
}

export default function WorkspacePage() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["1", "1-1"])
  );
  const [openTabs, setOpenTabs] = useState<Tab[]>([
    { id: "1", name: "Button.tsx", language: "typescript" },
    { id: "2", name: "App.tsx", language: "typescript" },
  ]);
  const [activeTab, setActiveTab] = useState("Button.tsx");
  const [rightPanelTab, setRightPanelTab] = useState<"chat" | "activity">("chat");
  const [showRightPanel, setShowRightPanel] = useState(true);
  const [chatInput, setChatInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFolder = (id: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const openFile = (name: string, language: string) => {
    if (!openTabs.find((tab) => tab.name === name)) {
      setOpenTabs([...openTabs, { id: Date.now().toString(), name, language }]);
    }
    setActiveTab(name);
  };

  const closeTab = (name: string) => {
    const newTabs = openTabs.filter((tab) => tab.name !== name);
    setOpenTabs(newTabs);
    if (activeTab === name && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1].name);
    }
  };

  const activeContent = fileContents[activeTab] || {
    content: "// File content not available",
    language: "text",
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col -m-6 animate-fade-in">
      {/* Workspace Header */}
      <div className="h-12 border-b border-border bg-card/50 flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">main</span>
          </div>
          <span className="text-muted-foreground/30">|</span>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GitCommit className="w-4 h-4" />
            <span>Last commit: 2h ago</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <Play className="w-4 h-4" />
            Run
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <RefreshCw className="w-4 h-4" />
            Sync
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
            onClick={() => setShowRightPanel(!showRightPanel)}
          >
            {showRightPanel ? (
              <PanelRightClose className="w-4 h-4" />
            ) : (
              <PanelRight className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* File Explorer Sidebar */}
        <div className="w-64 border-r border-border bg-card/30 flex flex-col flex-shrink-0">
          {/* Explorer Header */}
          <div className="h-10 border-b border-border/50 flex items-center justify-between px-3">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Explorer
            </span>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
                <Plus className="w-3.5 h-3.5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
                <RefreshCw className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="p-2 border-b border-border/50">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <Input
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-7 pl-8 text-sm bg-secondary/50 border-0"
              />
            </div>
          </div>

          {/* File Tree */}
          <div className="flex-1 overflow-y-auto py-2">
            {fileTree.map((node) => (
              <TreeItem
                key={node.id}
                node={node}
                onFileSelect={openFile}
                selectedFile={activeTab}
                expandedFolders={expandedFolders}
                toggleFolder={toggleFolder}
              />
            ))}
          </div>

          {/* Explorer Footer */}
          <div className="border-t border-border/50 p-3">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>6 files, 3 folders</span>
              <span>12.4 KB</span>
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-background">
          {/* Tabs */}
          <div className="h-10 border-b border-border bg-card/30 flex items-center overflow-x-auto">
            {openTabs.map((tab) => (
              <div
                key={tab.id}
                className={`h-full flex items-center gap-2 px-4 border-r border-border/50 cursor-pointer transition-colors group ${
                  activeTab === tab.name
                    ? "bg-background text-foreground"
                    : "text-muted-foreground hover:bg-secondary/30"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                <FileIcon language={tab.language} />
                <span className="text-sm whitespace-nowrap">{tab.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab(tab.name);
                  }}
                  className="opacity-0 group-hover:opacity-100 hover:bg-secondary rounded p-0.5 transition-opacity"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Breadcrumb */}
          <div className="h-8 border-b border-border/50 flex items-center px-4 text-sm text-muted-foreground bg-card/20">
            <span>src</span>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span>components</span>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-foreground">{activeTab}</span>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
                <Copy className="w-3.5 h-3.5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
                <Download className="w-3.5 h-3.5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
                <Maximize2 className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-auto bg-background">
            {openTabs.length > 0 ? (
              <CodeEditor
                content={activeContent.content}
                language={activeContent.language}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <FileCode className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p className="text-lg font-medium">No file open</p>
                  <p className="text-sm mt-1">Select a file from the explorer</p>
                </div>
              </div>
            )}
          </div>

          {/* Status Bar */}
          <div className="h-6 border-t border-border bg-card/50 flex items-center justify-between px-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Ln 1, Col 1</span>
              <span>Spaces: 2</span>
              <span>UTF-8</span>
            </div>
            <div className="flex items-center gap-4">
              <span>{activeContent.language.toUpperCase()}</span>
              <span>Prettier</span>
            </div>
          </div>
        </div>

        {/* Right Panel - Chat/Activity */}
        {showRightPanel && (
          <div className="w-80 border-l border-border bg-card/30 flex flex-col flex-shrink-0">
            {/* Panel Tabs */}
            <div className="h-10 border-b border-border/50 flex items-center px-2 gap-1">
              <button
                onClick={() => setRightPanelTab("chat")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm transition-colors ${
                  rightPanelTab === "chat"
                    ? "bg-accent/20 text-accent"
                    : "text-muted-foreground hover:bg-secondary/50"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                Chat
              </button>
              <button
                onClick={() => setRightPanelTab("activity")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm transition-colors ${
                  rightPanelTab === "activity"
                    ? "bg-accent/20 text-accent"
                    : "text-muted-foreground hover:bg-secondary/50"
                }`}
              >
                <Activity className="w-4 h-4" />
                Activity
              </button>
            </div>

            {/* Panel Content */}
            <div className="flex-1 overflow-hidden flex flex-col">
              {rightPanelTab === "chat" ? (
                <>
                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex gap-3 ${msg.isOwn ? "flex-row-reverse" : ""}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${
                            msg.isOwn
                              ? "bg-accent text-accent-foreground"
                              : "bg-secondary text-foreground"
                          }`}
                        >
                          {msg.avatar}
                        </div>
                        <div
                          className={`max-w-[80%] ${msg.isOwn ? "text-right" : ""}`}
                        >
                          <div
                            className={`flex items-center gap-2 mb-1 ${
                              msg.isOwn ? "flex-row-reverse" : ""
                            }`}
                          >
                            <span className="text-sm font-medium text-foreground">
                              {msg.user}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {msg.time}
                            </span>
                          </div>
                          <div
                            className={`px-3 py-2 rounded-lg text-sm ${
                              msg.isOwn
                                ? "bg-accent text-accent-foreground"
                                : "bg-secondary text-foreground"
                            }`}
                          >
                            {msg.message}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="border-t border-border/50 p-3">
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Type a message..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        className="flex-1 bg-secondary/50 border-0"
                      />
                      <Button size="icon" className="bg-accent hover:bg-accent/90">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                /* Activity Feed */
                <div className="flex-1 overflow-y-auto">
                  {activityItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 px-4 py-3 border-b border-border/50 hover:bg-secondary/30 transition-colors"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          item.type === "commit"
                            ? "bg-green-400/10 text-green-400"
                            : item.type === "comment"
                            ? "bg-blue-400/10 text-blue-400"
                            : item.type === "branch"
                            ? "bg-purple-400/10 text-purple-400"
                            : item.type === "merge"
                            ? "bg-amber-400/10 text-amber-400"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {item.type === "commit" ? (
                          <GitCommit className="w-4 h-4" />
                        ) : item.type === "comment" ? (
                          <MessageSquare className="w-4 h-4" />
                        ) : item.type === "branch" ? (
                          <GitBranch className="w-4 h-4" />
                        ) : item.type === "merge" ? (
                          <GitBranch className="w-4 h-4" />
                        ) : (
                          <User className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-medium text-foreground">
                            {item.user}
                          </span>{" "}
                          <span className="text-muted-foreground">{item.action}</span>{" "}
                          <span className="font-medium text-accent">{item.target}</span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
