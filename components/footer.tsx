export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/20 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <div>
            © 2026 ChronicleAI. All rights reserved.
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <span className="text-foreground/30">|</span>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Unsubscribe
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
