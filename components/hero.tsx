export default function Hero() {
  return (
    <section className="relative px-4 py-20 sm:py-32 md:py-40 flex items-center justify-center min-h-screen">
      {/* Subtle gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-8 inline-block">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            AI-Powered News Digest
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-pretty">
          ChronicleAI
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl font-medium text-foreground/90 mb-6 text-pretty">
          AI-curated daily news. Delivered in 3 minutes.
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-12">
          Get the most important stories across technology, business, science, and global
          affairs — summarized by AI and sent straight to your inbox.
        </p>

        {/* CTA hint */}
        <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
          <div className="h-px w-6 bg-foreground/20" />
          <span>Subscribe below to get started</span>
          <div className="h-px w-6 bg-foreground/20" />
        </div>
      </div>
    </section>
  )
}
