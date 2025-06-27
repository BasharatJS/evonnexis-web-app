'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  Target,
  Lightbulb,
  Heart,
  Star,
  Award,
  Rocket,
  Zap,
} from 'lucide-react'
import styles from './AboutHero.module.css'

const AboutHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Our Team',
      description: 'Passionate professionals working together',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Innovation',
      description: 'Creating cutting-edge solutions',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Collaboration',
      description: 'Building the future together',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Excellence',
      description: 'Delivering exceptional results',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Strategy',
      description: 'Planning for your success',
    },
  ]

  const aboutIcons = [
    { icon: Users, label: 'Team' },
    { icon: Target, label: 'Mission' },
    { icon: Lightbulb, label: 'Innovation' },
    { icon: Heart, label: 'Passion' },
    { icon: Star, label: 'Quality' },
    { icon: Award, label: 'Excellence' },
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '8+', label: 'Years Experience' },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <section className={styles.aboutHero}>
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

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* About Icons Row */}
          <motion.div
            className={styles.aboutIcons}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {aboutIcons.map((item, index) => (
              <motion.div
                key={index}
                className={styles.aboutIcon}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotateY: 180 }}
              >
                <item.icon size={24} />
                <span>{item.label}</span>
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
              About Evonnexis
            </motion.h1>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              We're a team of passionate developers, designers, and strategists
              dedicated to building innovative digital solutions.
            </motion.p>

            {/* Stats Section */}
            {/* <motion.div
              className={styles.statsSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={styles.statItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div> */}

            {/* CTA Buttons */}
            <motion.div
              className={styles.ctaButtons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.button
                className={styles.primaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = '/contact')}
              >
                <span>Get to Know Us</span>
                <Users size={20} />
              </motion.button>

              <motion.button
                className={styles.secondaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = '/portfolio')}
              >
                <span>Our Work</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Current Slide Info */}
          <motion.div
            className={styles.currentSlideInfo}
            key={currentSlide}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.slideInfo}>
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
          transition={{ duration: 0.8, delay: 1.7 }}
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
        >
          <Rocket size={24} />
        </motion.div>
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
        >
          <Zap size={20} />
        </motion.div>
      </div>

      {/* Animated Progress Bar (Bottom) */}
      <motion.div
        className={styles.bottomProgressBar}
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

export default AboutHero
