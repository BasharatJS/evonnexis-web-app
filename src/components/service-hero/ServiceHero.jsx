'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  Cloud,
  Zap,
  Shield,
} from 'lucide-react'
import styles from './ServiceHero.module.css'

const ServiceHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Web Development',
      description: 'Modern web solutions',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile development',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'UI/UX Design',
      description: 'Beautiful user experiences',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Cloud Solutions',
      description: 'Scalable infrastructure',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Digital Innovation',
      description: 'Cutting-edge technology',
    },
  ]

  const serviceIcons = [
    { icon: Code, label: 'Development' },
    { icon: Smartphone, label: 'Mobile' },
    { icon: Palette, label: 'Design' },
    { icon: Cloud, label: 'Cloud' },
    { icon: Zap, label: 'Performance' },
    { icon: Shield, label: 'Security' },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <section className={styles.serviceHero}>
      {/* Background Image Slider */}
      <div className={styles.imageContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={styles.backgroundImage}
            style={{
              backgroundImage: `url(${heroImages[currentSlide].url})`,
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Service Icons Row */}
          <motion.div
            className={styles.serviceIcons}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {serviceIcons.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceIcon}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotateY: 180 }}
              >
                <service.icon size={24} />
                <span>{service.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <motion.div
            className={styles.mainContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Our Services
            </motion.h1>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              We provide end-to-end solutions for businesses looking to
              establish or enhance their digital presence.
            </motion.p>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              From web development to mobile applications, UI/UX design to cloud
              solutions, we deliver innovative technology that drives business
              growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className={styles.ctaButtons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <motion.button
                className={styles.primaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = '/contact')}
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                className={styles.secondaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = '/portfolio')}
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Current Service Info */}
          <motion.div
            className={styles.currentService}
            key={currentSlide}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.serviceInfo}>
              <h3>{heroImages[currentSlide].title}</h3>
              <p>{heroImages[currentSlide].description}</p>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <motion.div
          className={styles.indicators}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.active : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <motion.div
          className={styles.floatingElement1}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={styles.floatingElement2}
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className={styles.progressBar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 0,
        }}
      />
    </section>
  )
}

export default ServiceHero
