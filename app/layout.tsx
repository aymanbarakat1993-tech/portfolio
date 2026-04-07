import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YB | Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web applications with React, Next.js, Node.js, and MongoDB. Building elegant, performant digital experiences.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Web Developer'],
  authors: [{ name: 'YB' }],
  openGraph: {
    title: 'YB | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YB | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web applications.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-obsidian antialiased">
        {children}
      </body>
    </html>
  )
}
