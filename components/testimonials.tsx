'use client'

import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  title: string
  company: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    title: "Product Manager",
    company: "TechStartup Inc",
    content: "Chronicle saves me 30 minutes every morning. I get the news that matters in a digestible format. Highly recommended.",
    rating: 5
  },
  {
    name: "James Mitchell",
    title: "Financial Analyst",
    company: "Capital Ventures",
    content: "The AI curation is incredibly accurate. I've discovered insights I would have missed with traditional news sources.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    title: "Entrepreneur",
    company: "Creative Labs",
    content: "Love the personalization. My brief is perfectly tailored to my interests. It's like having a personal news editor.",
    rating: 5
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-linear-to-br from-background via-blue-50/40 dark:via-blue-950/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by Readers
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands who are already staying informed smarter
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 bg-white/40 dark:bg-white/8 backdrop-blur-xl rounded-3xl border border-white/60 dark:border-white/15 hover:bg-white/50 dark:hover:bg-white/12 hover:border-accent/30 transition-all duration-300 shadow-xl dark:shadow-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="pt-6 border-t border-white/30 dark:border-white/10">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
