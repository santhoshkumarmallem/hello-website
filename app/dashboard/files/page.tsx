"use client";

import { useState } from "react";
import {
  Upload,
  Grid,
  List,
  Folder,
  FileText,
  Image,
  Film,
  Music,
  Archive,
  MoreHorizontal,
  Download,
  Trash2,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const folders = [
  { id: 1, name: "Project Assets", items: 24, color: "bg-blue-500" },
  { id: 2, name: "Documents", items: 18, color: "bg-green-500" },
  { id: 3, name: "Media", items: 45, color: "bg-purple-500" },
  { id: 4, name: "Archives", items: 12, color: "bg-orange-500" },
];

const files = [
  {
    id: 1,
    name: "Homepage_Design_v3.fig",
    type: "design",
    size: "4.2 MB",
    modified: "Mar 27, 2026",
    icon: FileText,
    color: "text-pink-400",
  },
  {
    id: 2,
    name: "Brand_Guidelines.pdf",
    type: "document",
    size: "2.8 MB",
    modified: "Mar 25, 2026",
    icon: FileText,
    color: "text-red-400",
  },
  {
    id: 3,
    name: "Hero_Image.png",
    type: "image",
    size: "1.5 MB",
    modified: "Mar 24, 2026",
    icon: Image,
    color: "text-green-400",
  },
  {
    id: 4,
    name: "Product_Demo.mp4",
    type: "video",
    size: "128 MB",
    modified: "Mar 23, 2026",
    icon: Film,
    color: "text-purple-400",
  },
  {
    id: 5,
    name: "Presentation.pptx",
    type: "document",
    size: "8.4 MB",
    modified: "Mar 22, 2026",
    icon: FileText,
    color: "text-orange-400",
  },
  {
    id: 6,
    name: "Background_Music.mp3",
    type: "audio",
    size: "6.2 MB",
    modified: "Mar 20, 2026",
    icon: Music,
    color: "text-cyan-400",
  },
  {
    id: 7,
    name: "Source_Code.zip",
    type: "archive",
    size: "45 MB",
    modified: "Mar 18, 2026",
    icon: Archive,
    color: "text-yellow-400",
  },
  {
    id: 8,
    name: "User_Research.docx",
    type: "document",
    size: "1.2 MB",
    modified: "Mar 15, 2026",
    icon: FileText,
    color: "text-blue-400",
  },
];

export default function FilesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-up">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Files</h1>
          <p className="text-muted-foreground mt-1">
            Manage your project files and documents
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-secondary/30 rounded-lg p-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${viewMode === "grid" ? "bg-secondary" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${viewMode === "list" ? "bg-secondary" : ""}`}
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
            <Upload className="w-4 h-4" />
            Upload
          </Button>
        </div>
      </div>

      {/* Folders */}
      <div className="animate-fade-up animation-delay-100">
        <h2 className="text-lg font-semibold text-foreground mb-4">Folders</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className="glass-card rounded-xl p-4 hover:border-accent/30 transition-all cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-xl ${folder.color}/20 flex items-center justify-center mb-3`}
              >
                <Folder className={`w-6 h-6 ${folder.color.replace("bg-", "text-")}`} />
              </div>
              <p className="font-medium text-foreground truncate">{folder.name}</p>
              <p className="text-sm text-muted-foreground">{folder.items} items</p>
            </div>
          ))}
        </div>
      </div>

      {/* Files */}
      <div className="animate-fade-up animation-delay-200">
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Files</h2>
        
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {files.map((file) => (
              <div
                key={file.id}
                className="glass-card rounded-xl p-4 hover:border-accent/30 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                    <file.icon className={`w-6 h-6 ${file.color}`} />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="font-medium text-foreground text-sm truncate">
                  {file.name}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{file.size}</span>
                  <span className="text-xs text-muted-foreground">{file.modified}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">
                    Name
                  </th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4 hidden sm:table-cell">
                    Size
                  </th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4 hidden md:table-cell">
                    Modified
                  </th>
                  <th className="text-right text-sm font-medium text-muted-foreground p-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {files.map((file) => (
                  <tr
                    key={file.id}
                    className="border-b border-border/30 last:border-0 hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <file.icon className={`w-5 h-5 ${file.color}`} />
                        <span className="font-medium text-foreground truncate max-w-xs">
                          {file.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground hidden sm:table-cell">
                      {file.size}
                    </td>
                    <td className="p-4 text-sm text-muted-foreground hidden md:table-cell">
                      {file.modified}
                    </td>
                    <td className="p-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Storage Info */}
      <div className="glass-card rounded-xl p-6 animate-fade-up animation-delay-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Storage</h3>
          <span className="text-sm text-muted-foreground">45.2 GB of 100 GB used</span>
        </div>
        <div className="h-3 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-[45%] bg-accent rounded-full" />
        </div>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm text-muted-foreground">Used</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-sm text-muted-foreground">Free</span>
          </div>
        </div>
      </div>
    </div>
  );
}
