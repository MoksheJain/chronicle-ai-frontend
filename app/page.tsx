'use client'

import { useState } from 'react'
import Hero from '@/components/hero'
import EmailCapture from '@/components/email-capture'
import Features from '@/components/features'
import Footer from '@/components/footer'

export default function Page() {
  const [success, setSuccess] = useState(false)

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Hero />
      <EmailCapture onSuccess={() => setSuccess(true)} success={success} />
      <Features />
      <Footer />
    </main>
  )
}
