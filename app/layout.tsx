import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cognition AI - Applied AI Lab',
  description: 'Cognition is an applied AI lab creating innovative AI solutions for developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#1a1a2e] text-white">
        {children}
      </body>
    </html>
  )
}
