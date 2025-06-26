'use client'
import { useState, useEffect } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import Header from '@/components/header/Header'
import LoadingPage from '@/components/loader/LoadingPage'
import Footer from '@/components/footer/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setMounted(true)
    }, 2000) // 2 seconds loading

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return (
      <html lang="en">
        <head>
          <title>Evonnexis Pvt Ltd</title>
          <meta
            name="description"
            content="Evolving Towards Infinity - Transforming Ideas Into Digital Reality"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <LoadingPage />
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <head>
        <title>Evonnexis Pvt Ltd</title>
        <meta
          name="description"
          content="Evolving Towards Infinity - Transforming Ideas Into Digital Reality"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main
            className="main-content"
            style={{
              minHeight: '100vh',
              background: 'var(--background)',
              color: 'var(--text)',
              transition: 'all 0.3s ease',
              position: 'relative',
              zIndex: 1,
              paddingTop: '80px', // Account for fixed header
            }}
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
