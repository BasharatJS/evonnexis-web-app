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
  const [showLoading, setShowLoading] = useState(true)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    // Check if user has already seen the loading screen in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading')

    if (hasSeenLoading) {
      // User has already seen loading, don't show it again
      setShowLoading(false)
      setIsInitialLoad(false)
    } else {
      // First time visit - show loading screen
      const timer = setTimeout(() => {
        setShowLoading(false)
        setIsInitialLoad(false)
        // Mark that user has seen the loading screen
        sessionStorage.setItem('hasSeenLoading', 'true')
      }, 2000) // 2 seconds loading

      return () => clearTimeout(timer)
    }
  }, [])

  // Show loading screen only on initial visit
  if (showLoading && isInitialLoad) {
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

  // Normal layout after loading is complete
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
