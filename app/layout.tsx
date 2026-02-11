import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChronicleAI - AI-Curated Daily News',
  description: 'Get the most important stories summarized by AI. Technology, business, science, and global affairs delivered in 3 minutes.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
