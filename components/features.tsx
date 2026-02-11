import { Zap, BookOpen, Clock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Smart Summaries',
    description: 'AI-powered distillation of complex stories into essential insights',
  },
  {
    icon: BookOpen,
    title: 'Multi-Category Coverage',
    description: 'Technology, business, science, and global affairs in one digest',
  },
  {
    icon: Clock,
    title: 'Delivered Daily at 9 AM',
    description: 'Fresh, curated news arrives every morning in your inbox',
  },
]

export default function Features() {
  return (
    <section className="px-4 py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Why Choose ChronicleAI
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Stay informed without the information overload
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="relative p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
