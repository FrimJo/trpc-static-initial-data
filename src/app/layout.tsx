import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import QueryProvider from './_trpc/query-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tRPC Test page',
  description: 'A page for testing tRPC with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
