"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8 animate-fade-up">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Synapse</span>
          </Link>
          {!isSubmitted ? (
            <>
              <h1 className="text-2xl font-bold text-foreground">Forgot password?</h1>
              <p className="text-muted-foreground mt-2">
                No worries, we&apos;ll send you reset instructions
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-foreground">Check your email</h1>
              <p className="text-muted-foreground mt-2">
                We sent a password reset link to
              </p>
            </>
          )}
        </div>

        {/* Glass Card */}
        <div className="glass-card rounded-2xl p-8 animate-fade-up animation-delay-100">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent/20 h-11"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <span className="flex items-center gap-2">
                    Reset password
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              {/* Success Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
              </div>

              {/* Email Display */}
              <p className="text-foreground font-medium">{email}</p>

              {/* Resend Link */}
              <p className="text-sm text-muted-foreground">
                Didn&apos;t receive the email?{" "}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Click to resend
                </button>
              </p>

              {/* Open Email App */}
              <Button
                className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                onClick={() => window.open("mailto:", "_blank")}
              >
                Open email app
              </Button>
            </div>
          )}
        </div>

        {/* Back to Login Link */}
        <Link
          href="/"
          className="flex items-center justify-center gap-2 mt-6 text-muted-foreground hover:text-foreground transition-colors animate-fade-up animation-delay-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </div>
    </div>
  );
}
