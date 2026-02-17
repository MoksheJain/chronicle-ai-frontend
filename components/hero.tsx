'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Glassmorphic background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-50 animate-pulse delay-2000"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-2 bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-full border border-white/60 dark:border-white/20">
          <p className="text-sm font-medium text-foreground">
            ✨ AI-Powered Intelligence
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Your Daily <span className="text-accent">Chronicle</span> Awaits
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Stay informed without the overwhelm. Get curated news briefs delivered
          daily to your inbox with AI-powered intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="#signup">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/80 text-accent-foreground rounded-full px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          {/* <Button 
            variant="outline" 
            size="lg"
            className="rounded-full px-8 h-12 text-base font-semibold border-2 border-white/40 dark:border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/20 text-foreground transition-all"
          >
            Watch Demo
          </Button> */}
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-sm">
          {/* <div className="p-4 bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-white/60 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/15 transition-all">
            <p className="font-semibold text-foreground">50K+</p>
            <p className="text-muted-foreground text-xs">Active Readers</p>
          </div> */}
          <div className="p-4 bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-white/60 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/15 transition-all">
            <p className="font-semibold text-foreground">Daily</p>
            <p className="text-muted-foreground text-xs">Fresh Briefs</p>
          </div>
          <div className="p-4 bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-white/60 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/15 transition-all">
            <p className="font-semibold text-foreground">100%</p>
            <p className="text-muted-foreground text-xs">Curated</p>
          </div>
        </div>
      </div>
    </section>
  );
}
