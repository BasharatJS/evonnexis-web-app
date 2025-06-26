import React from 'react'
import styles from './LoadingPage.module.css'

const LoadingPage = () => {
  return (
    <div className={styles.loadingScreen}>
      {/* Animated Background */}
      <div className={styles.animatedBackground}>
        <div className={styles.wave1}></div>
        <div className={styles.wave2}></div>
        <div className={styles.wave3}></div>
      </div>

      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}>
            <span className={styles.infinity}>∞</span>
            <div className={styles.logoGlow}></div>
          </div>
          <h1 className={styles.logoText}>Evonnexis</h1>
        </div>

        {/* Spacer for proper gap */}
        <div className={styles.spacer}></div>

        {/* Loading Dots Animation */}
        <div className={styles.loadingDots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>

        {/* Loading Text with typewriter effect */}
        <div className={styles.loadingTextContainer}>
          <p className={styles.loadingText}>
            <span>T</span>
            <span>r</span>
            <span>a</span>
            <span>n</span>
            <span>s</span>
            <span>f</span>
            <span>o</span>
            <span>r</span>
            <span>m</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span className={styles.space}></span>
            <span>I</span>
            <span>d</span>
            <span>e</span>
            <span>a</span>
            <span>s</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        </div>

        {/* Progress Bar with glow effect */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
            <div className={styles.progressGlow}></div>
          </div>
          <div className={styles.progressText}>Loading...</div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className={styles.particles}>
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className={`${styles.particle} ${styles[`particle${i + 1}`]}`}
          ></div>
        ))}
      </div>

      {/* Geometric shapes */}
      <div className={styles.geometricShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
        <div className={styles.shape4}></div>
      </div>
    </div>
  )
}

export default LoadingPage
