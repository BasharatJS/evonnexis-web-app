'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/context/ThemeContext'
import EvonnexisLogo from '../custom-logo/EvonnexisLogo'
import styles from './Header.module.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo Section */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoContainer}>
            <EvonnexisLogo width={240} height={60} className={styles.logoSvg} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.active : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle Button */}
        <div className={styles.themeToggleContainer}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } theme`}
          >
            <div className={styles.toggleTrack}>
              <div
                className={`${styles.toggleThumb} ${
                  theme === 'dark' ? styles.thumbDark : styles.thumbLight
                }`}
              >
                <div className={styles.iconContainer}>
                  {/* Sun Icon */}
                  <svg
                    className={`${styles.sunIcon} ${
                      theme === 'light' ? styles.iconActive : ''
                    }`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42" />
                  </svg>

                  {/* Moon Icon */}
                  <svg
                    className={`${styles.moonIcon} ${
                      theme === 'dark' ? styles.iconActive : ''
                    }`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Theme Labels */}
            <div className={styles.themeLabels}>
              <span
                className={`${styles.themeLabel} ${
                  theme === 'light' ? styles.labelActive : ''
                }`}
              >
                Light
              </span>
              <span
                className={`${styles.themeLabel} ${
                  theme === 'dark' ? styles.labelActive : ''
                }`}
              >
                Dark
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={isMobileMenuOpen ? styles.line1Open : ''}></span>
          <span className={isMobileMenuOpen ? styles.line2Open : ''}></span>
          <span className={isMobileMenuOpen ? styles.line3Open : ''}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <div className={styles.mobileMenuContent}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${styles.mobileNavLink} ${
                pathname === link.href ? styles.active : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Theme Toggle */}
          <div className={styles.mobileThemeToggle}>
            <span className={styles.mobileThemeLabel}>Theme</span>
            <button className={styles.mobileToggleButton} onClick={toggleTheme}>
              <div className={styles.mobileToggleTrack}>
                <div
                  className={`${styles.mobileToggleThumb} ${
                    theme === 'dark' ? styles.mobileThumbDark : ''
                  }`}
                >
                  {theme === 'light' ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </div>
              </div>
              <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
