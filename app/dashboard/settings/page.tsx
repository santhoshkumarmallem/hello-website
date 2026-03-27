"use client";

import { useState } from "react";
import { User, Bell, Shield, Palette, Globe, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/auth-context";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "language", label: "Language", icon: Globe },
  { id: "billing", label: "Billing", icon: CreditCard },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-up">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tabs Navigation */}
        <div className="lg:w-64 glass-card rounded-xl p-2 h-fit animate-fade-up animation-delay-100">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-accent/15 text-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 glass-card rounded-xl p-6 animate-fade-up animation-delay-200">
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Profile</h2>
                <p className="text-sm text-muted-foreground">
                  Update your personal information
                </p>
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-2xl">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </span>
                </div>
                <div>
                  <Button variant="outline" size="sm" className="bg-secondary/30 border-border/50">
                    Change avatar
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    JPG, GIF or PNG. 1MB max.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <Input
                    defaultValue={user?.name || ""}
                    className="bg-secondary/30 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input
                    type="email"
                    defaultValue={user?.email || ""}
                    className="bg-secondary/30 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Username</label>
                  <Input
                    defaultValue={user?.name?.toLowerCase().replace(" ", "") || ""}
                    className="bg-secondary/30 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Role</label>
                  <Input
                    defaultValue="Product Designer"
                    className="bg-secondary/30 border-border/50"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-foreground">Bio</label>
                  <textarea
                    rows={3}
                    defaultValue="Product designer with 5+ years of experience in creating user-centered digital experiences."
                    className="w-full px-3 py-2 rounded-lg bg-secondary/30 border border-border/50 text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Save Changes
                </Button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Notifications</h2>
                <p className="text-sm text-muted-foreground">
                  Manage how you receive notifications
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Email Notifications", desc: "Receive email updates about your projects" },
                  { title: "Push Notifications", desc: "Get push notifications on your devices" },
                  { title: "Task Reminders", desc: "Receive reminders for upcoming tasks" },
                  { title: "Team Updates", desc: "Get notified when team members make changes" },
                  { title: "Marketing Emails", desc: "Receive tips and product updates" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/30"
                  >
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <button
                      className={`w-12 h-6 rounded-full transition-colors ${
                        index < 3 ? "bg-accent" : "bg-secondary"
                      } relative`}
                    >
                      <span
                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                          index < 3 ? "right-1" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Security</h2>
                <p className="text-sm text-muted-foreground">
                  Manage your security settings
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Current Password</label>
                  <Input type="password" className="bg-secondary/30 border-border/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">New Password</label>
                  <Input type="password" className="bg-secondary/30 border-border/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Confirm New Password</label>
                  <Input type="password" className="bg-secondary/30 border-border/50" />
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <h3 className="font-medium text-foreground mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                  <div>
                    <p className="font-medium text-foreground">Authenticator App</p>
                    <p className="text-sm text-muted-foreground">
                      Use an authenticator app for 2FA
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="bg-secondary/30 border-border/50">
                    Enable
                  </Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Update Password
                </Button>
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Appearance</h2>
                <p className="text-sm text-muted-foreground">
                  Customize the look and feel
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-3">Theme</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {["Light", "Dark", "System"].map((theme) => (
                      <button
                        key={theme}
                        className={`p-4 rounded-lg border transition-all ${
                          theme === "Dark"
                            ? "border-accent bg-accent/10"
                            : "border-border/50 bg-secondary/30 hover:border-border"
                        }`}
                      >
                        <p className="font-medium text-foreground">{theme}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-3">Accent Color</h3>
                  <div className="flex gap-3">
                    {["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-pink-500", "bg-orange-500"].map(
                      (color) => (
                        <button
                          key={color}
                          className={`w-10 h-10 rounded-full ${color} ${
                            color === "bg-blue-500" ? "ring-2 ring-offset-2 ring-offset-background ring-accent" : ""
                          }`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {(activeTab === "language" || activeTab === "billing") && (
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground">Coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
