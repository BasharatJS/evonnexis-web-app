'use client'
import React, { useState, useEffect } from 'react'
import styles from './HomeHero.module.css'

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [typedText, setTypedText] = useState('')
  const [isZooming, setIsZooming] = useState(false)

  const heroSlides = [
    {
      id: 1,
      title: 'Transforming Ideas Into Digital Reality',
      subtitle:
        'We build innovative mobile and web applications that help businesses grow, scale, and succeed in the digital world.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80',
    },
    {
      id: 2,
      title: 'Cutting-Edge Development Solutions',
      subtitle:
        'From concept to deployment, we create powerful applications using the latest technologies and best practices.',
      image:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80',
    },
    {
      id: 3,
      title: 'Your Digital Transformation Partner',
      subtitle:
        'Empowering businesses with custom software solutions that drive growth and innovation in the modern world.',
      image:
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80',
    },
    {
      id: 4,
      title: 'Innovation Meets Excellence',
      subtitle:
        'Delivering world-class mobile and web applications with stunning design and seamless user experience.',
      image:
        'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80',
    },
    {
      id: 5,
      title: "Building Tomorrow's Technology Today",
      subtitle:
        'Leading the digital revolution with innovative solutions that transform businesses and enhance user experiences.',
      image:
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80',
    },
  ]

  // Typing animation effect with slower speed
  useEffect(() => {
    const currentTitle = heroSlides[currentSlide].title
    let index = 0

    // Reset states
    setTypedText('')
    setIsTyping(true)
    setIsZooming(true)

    const typingInterval = setInterval(() => {
      if (index < currentTitle.length) {
        setTypedText(currentTitle.slice(0, index + 1))
        index++
      } else {
        // Typing completed
        clearInterval(typingInterval)
        setIsTyping(false)
        setIsZooming(false)

        // After typing is complete, wait 4 seconds then change slide
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 4000)
      }
    }, 200) // Slightly faster typing speed

    return () => clearInterval(typingInterval)
  }, [currentSlide])

  const handleSlideChange = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className={styles.hero}>
      {/* Background Images - Only in Hero Section */}
      <div className={styles.backgroundContainer}>
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.backgroundSlide} ${
              index === currentSlide ? styles.active : ''
            } ${isZooming && index === currentSlide ? styles.zooming : ''}`}
          >
            <div
              className={styles.backgroundImage}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className={styles.overlay}></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className={styles.content}>
        <div className={styles.textContent}>
          {/* Company Name - Always Visible with Larger Font */}
          <div className={styles.companyName}>
            <span className={styles.companyText}>Evonnexis</span>
            <div className={styles.companySubtext}>
              Evolving Towards Infinity
            </div>
          </div>

          {/* Typing Title - Single Line */}
          <h1 className={styles.title}>
            <span className={styles.typedText}>{typedText}</span>
            {isTyping && <span className={styles.cursor}>|</span>}
          </h1>

          {/* Subtitle - Always Visible */}
          <p className={styles.subtitle}>{heroSlides[currentSlide].subtitle}</p>

          {/* Buttons - Always Visible */}
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              <span className={styles.buttonText}>Our Services</span>
              <div className={styles.buttonGlow}></div>
            </button>
            <button className={styles.secondaryButton}>
              <span className={styles.buttonText}>Contact Us</span>
              <div className={styles.buttonGlow}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className={styles.indicators}>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ''
            }`}
            onClick={() => handleSlideChange(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Elements with Theme Colors */}
      <div className={styles.floatingElements}>
        <div className={`${styles.floatingElement} ${styles.element1}`}></div>
        <div className={`${styles.floatingElement} ${styles.element2}`}></div>
        <div className={`${styles.floatingElement} ${styles.element3}`}></div>
        <div className={`${styles.floatingElement} ${styles.element4}`}></div>
        <div className={`${styles.floatingElement} ${styles.element5}`}></div>
      </div>

      {/* Particle Effects */}
      <div className={styles.particleContainer}>
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className={`${styles.particle} ${styles[`particle${i + 1}`]}`}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default HomeHero
