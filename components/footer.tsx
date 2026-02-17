'use client'

import { Mail, Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white/30 dark:bg-black/30 backdrop-blur-xl border-t border-white/40 dark:border-white/10 py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl dark:opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">Chronicle</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Daily news briefs powered by AI. Stay informed, not overwhelmed.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-white/20 dark:hover:bg-white/10 rounded-lg">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-white/20 dark:hover:bg-white/10 rounded-lg">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-white/20 dark:hover:bg-white/10 rounded-lg">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/30 dark:border-white/10 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Chronicle AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
