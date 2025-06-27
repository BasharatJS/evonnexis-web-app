'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  ArrowRight,
  Eye,
  ExternalLink,
  Briefcase,
  Award,
  TrendingUp,
  Star,
  Layers,
} from 'lucide-react'
import styles from './PortfolioHero.module.css'

const PortfolioHero = () => {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Navigation handlers
  const handleViewProjectsClick = () => {
    // Scroll to projects section or navigate to projects
    const projectsSection = document.getElementById('projects-section')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContactClick = () => {
    router.push('/contact')
  }

  const portfolioImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Web Applications',
      description: 'Innovative web solutions',
      category: 'Web Development',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Mobile Apps',
      description: 'Cross-platform excellence',
      category: 'Mobile Development',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'UI/UX Design',
      description: 'Beautiful user experiences',
      category: 'Design & UX',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'E-commerce Solutions',
      description: 'Complete online stores',
      category: 'E-commerce',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Enterprise Solutions',
      description: 'Scalable business platforms',
      category: 'Enterprise',
    },
  ]

  const portfolioIcons = [
    { icon: Briefcase, label: 'Projects' },
    { icon: Award, label: 'Quality' },
    { icon: TrendingUp, label: 'Growth' },
    { icon: Star, label: 'Excellence' },
    { icon: Layers, label: 'Innovation' },
    { icon: Eye, label: 'Vision' },
  ]

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Happy Clients' },
    { number: '8+', label: 'Years Experience' },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % portfolioImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [portfolioImages.length])

  const handleSlideChange = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className={styles.portfolioHero}>
      {/* Background Image Slider */}
      <div className={styles.imageContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={styles.backgroundImage}
            style={{
              backgroundImage: `url(${portfolioImages[currentSlide].url})`,
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
          {/* Portfolio Icons Row */}
          <motion.div
            className={styles.portfolioIcons}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {portfolioIcons.map((item, index) => (
              <motion.div
                key={index}
                className={styles.portfolioIcon}
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
              Our Portfolio
            </motion.h1>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Showcasing our finest work and innovative solutions that have
              transformed businesses across various industries.
            </motion.p>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              From startups to enterprise solutions, explore our diverse
              portfolio of successful projects that demonstrate our expertise
              and commitment to excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className={styles.ctaButtons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <motion.button
                className={styles.primaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewProjectsClick}
              >
                <span>View Projects</span>
                <Eye size={20} />
              </motion.button>

              <motion.button
                className={styles.secondaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Current Project Info */}
          <motion.div
            className={styles.currentProject}
            key={currentSlide}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.projectInfo}>
              <div className={styles.projectCategory}>
                {portfolioImages[currentSlide].category}
              </div>
              <h3>{portfolioImages[currentSlide].title}</h3>
              <p>{portfolioImages[currentSlide].description}</p>
              <motion.button
                className={styles.projectButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                <span>View Project</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Progress Bar - Right Bottom Side */}
        <div className={styles.progressBar}>
          {portfolioImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.progressDot} ${
                index === currentSlide ? styles.activeDot : ''
              } ${index < currentSlide ? styles.completedDot : ''}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
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
        <motion.div
          className={styles.floatingElement3}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Animated Progress Line (Bottom) */}
      <motion.div
        className={styles.bottomProgressLine}
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

export default PortfolioHero
