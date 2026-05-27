import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zhilang (Lang) Gui | FDE at Galatiq',
  description: 'Forward Deployed Engineer at Galatiq building AI solutions for Fortune 500 teams, multi-agent systems, production RAG pipelines, and AI-powered products from 0→1. BU Computer Engineering \'25.',
  keywords: ['Forward Deployed Engineer', 'Galatiq', 'AI Engineer', 'Fortune 500 AI', 'Machine Learning', 'LangGraph', 'Multi-Agent Systems', 'RAG', 'Full-Stack', 'Boston University', 'Computer Engineering'],
  authors: [{ name: 'Zhilang (Lang) Gui' }],
  openGraph: {
    title: 'Lang Gui | FDE at Galatiq',
    description: 'Forward Deployed Engineer at Galatiq building AI solutions for Fortune 500 teams.',
    url: 'https://www.buildwithlang.com',
    siteName: 'Build with Lang',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lang Gui | FDE at Galatiq',
    description: 'Forward Deployed Engineer at Galatiq building AI solutions for Fortune 500 teams.',
    creator: '@lgui30',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
