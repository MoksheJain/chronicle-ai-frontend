'use client'

import { Button } from './ui/button'
import { BookOpen } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-black/20 backdrop-blur-xl border-b border-white/40 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-linear-to-br from-accent/30 to-accent/10 rounded-2xl backdrop-blur-md">
            <BookOpen className="h-5 w-5 text-accent" />
          </div>
          <span className="font-bold text-xl text-foreground">Chronicle</span>
        </div>
        
        <nav className=" md:flex items-center gap-10">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Features</a>
          <a href="#signup" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Subscribe</a>
        </nav>

        {/* <Button 
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Sign In
        </Button> */}
      </div>
    </header>
  )
}
