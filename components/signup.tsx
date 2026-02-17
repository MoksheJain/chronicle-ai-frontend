"use client";

import { useState } from "react";
import { Mail, ArrowRight, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  // { code: "fr", name: "Français" },
  // { code: "de", name: "Deutsch" },
  // { code: "pt", name: "Português" },
  // { code: "ja", name: "日本語" },
  // { code: "zh", name: "中文" },
  // { code: "ru", name: "Русский" },
];

export function Signup() {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          language,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setEmail("");
      alert("Successfully subscribed 🎉");
    } catch (error: any) {
      console.error("Subscription error:", error);
      alert(error.message || "Failed to subscribe");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section className="py-24 px-4 bg-linear-to-b from-background via-cyan-50/30 dark:via-blue-950/20 to-blue-100/40 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-accent/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 dark:opacity-30"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="bg-white/50 dark:bg-white/8 backdrop-blur-2xl rounded-3xl border border-white/60 dark:border-white/15 p-12 shadow-2xl dark:shadow-2xl hover:bg-white/60 dark:hover:bg-white/12 transition-all">
          <div className="text-center mb-10">
            <div className="inline-flex p-3 bg-accent/25 dark:bg-accent/30 rounded-2xl mb-4 backdrop-blur-md">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Your Chronicle Awaits
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of professionals getting smarter every morning
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 rounded-full px-6 border-2 border-white/40 dark:border-white/20 bg-white/40 dark:bg-white/10 backdrop-blur-md focus:border-accent/60 focus:bg-white/60 dark:focus:bg-white/15 text-foreground placeholder:text-muted-foreground transition-all"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-12 font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transition-all"
              >
                {isLoading ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Globe className="h-5 w-5 text-accent shrink-0" />
              <label className="text-sm font-medium text-muted-foreground">
                Preferred Language:
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="flex-1 h-10 px-4 rounded-full border-2 border-white/40 dark:border-white/20 bg-white/40 dark:bg-white/10 backdrop-blur-md focus:border-accent/60 focus:bg-white/60 dark:focus:bg-white/15 text-foreground text-sm font-medium transition-all cursor-pointer hover:bg-white/50 dark:hover:bg-white/15"
              >
                {LANGUAGES.map((lang) => (
                  <option
                    key={lang.code}
                    value={lang.code}
                    className="bg-background text-foreground"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Your first brief tomorrow morning.
            </p>
          </form>

          <div className="mt-10 grid grid-cols-3 gap-4 pt-10 border-t border-white/30 dark:border-white/10">
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">5 min</p>
              <p className="text-sm text-muted-foreground">Read time</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">∞</p>
              <p className="text-sm text-muted-foreground">Topics</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">Free</p>
              <p className="text-sm text-muted-foreground">Forever</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
