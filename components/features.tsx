'use client'

import { Zap, Brain, Clock, Filter, TrendingUp, Share2 } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Curated Stories",
    description: "Our advanced algorithms analyze thousands of sources to find the most relevant news for you.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Perfect Timing",
    description: "Receive your daily brief at your preferred time, every single day without fail.",
  },
  {
    icon: <Filter className="h-6 w-6" />,
    title: "Personalized Topics",
    description: "Choose your interests: tech, business, science, sports, and more. We adapt to you.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Read curated summaries in 5 minutes or less. Get the facts, skip the fluff.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Trending Insights",
    description: "Discover what's truly trending with our AI-powered trend analysis and predictions.",
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Easy Sharing",
    description: "Share stories with your team or network with one click. Stay connected.",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-blue-50/50 dark:via-blue-950/30 to-cyan-50/30 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay informed and make better decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-white/40 dark:bg-white/8 backdrop-blur-xl rounded-3xl border border-white/60 dark:border-white/15 hover:bg-white/50 dark:hover:bg-white/12 hover:border-accent/30 transition-all duration-300 group shadow-xl dark:shadow-2xl"
            >
              <div className="inline-flex p-3 bg-accent/20 dark:bg-accent/30 rounded-2xl mb-4 group-hover:bg-accent/30 dark:group-hover:bg-accent/40 transition-colors">
                <div className="text-accent">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
