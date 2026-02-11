'use client'

import React from "react"

import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'

interface EmailCaptureProps {
  onSuccess: () => void
  success: boolean
}

export default function   EmailCapture({ onSuccess, success }: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [localSuccess, setLocalSuccess] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    // Validate email
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Failed to subscribe')
      }

      setLocalSuccess(true)
      setEmail('')
      onSuccess()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setLocalSuccess(false)
      }, 5000)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setError(message)
      console.error('Subscription error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative px-4 py-16 sm:py-20 flex items-center justify-center bg-card/30">
      <div className="w-full max-w-md">
        {localSuccess ? (
          <div className="text-center">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
              <Check className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Welcome to ChronicleAI!</h3>
            <p className="text-foreground/70">
              Check your inbox for our first curated news digest. It's on its way!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError(null)
                  }}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Email address"
                />
              </div>
              {error && (
                <p className="text-sm text-red-400">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
