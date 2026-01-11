import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Tools, Career Growth & Student Productivity | Smart Student Hub',
  description: 'Discover the best AI tools for students, career guidance for tech professionals, and productivity tips to excel in college. Your ultimate resource for smarter learning and career growth.',
  keywords: 'AI tools for students, career guidance, student productivity, ChatGPT for studying, tech careers, college productivity',
  authors: [{ name: 'Smart Student Hub' }],
  openGraph: {
    title: 'AI Tools, Career Growth & Student Productivity',
    description: 'Your ultimate resource for smarter learning and career growth',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
