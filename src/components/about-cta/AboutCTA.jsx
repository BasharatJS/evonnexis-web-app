'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Star,
  Heart,
  Zap,
  MessageCircle,
  Send,
  Phone,
  Mail,
} from 'lucide-react'
import styles from './AboutCTA.module.css'

const AboutCTA = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  }

  const floatingVariants = {
    animate: (index) => ({
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6 + index * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  }

  return (
    <section className={styles.aboutCTA} ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        {/* Floating Icons */}
        <motion.div
          className={`${styles.floatingIcon} ${styles.icon1}`}
          variants={floatingVariants}
          animate="animate"
          custom={0}
        >
          <Sparkles size={24} />
        </motion.div>
        <motion.div
          className={`${styles.floatingIcon} ${styles.icon2}`}
          variants={floatingVariants}
          animate="animate"
          custom={1}
        >
          <Star size={20} />
        </motion.div>
        <motion.div
          className={`${styles.floatingIcon} ${styles.icon3}`}
          variants={floatingVariants}
          animate="animate"
          custom={2}
        >
          <Heart size={22} />
        </motion.div>
        <motion.div
          className={`${styles.floatingIcon} ${styles.icon4}`}
          variants={floatingVariants}
          animate="animate"
          custom={3}
        >
          <Zap size={26} />
        </motion.div>

        {/* Animated Gradient Orbs */}
        <div className={styles.gradientOrbs}>
          <motion.div
            className={`${styles.orb} ${styles.orb1}`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [-30, 30, -30],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className={`${styles.orb} ${styles.orb2}`}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [20, -20, 20],
              y: [30, -30, 30],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
          <motion.div
            className={`${styles.orb} ${styles.orb3}`}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.25, 0.7, 0.25],
              x: [-25, 25, -25],
              y: [-15, 15, -15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 4,
            }}
          />
        </div>

        {/* Geometric Shapes */}
        <div className={styles.geometricShapes}>
          <motion.div
            className={`${styles.shape} ${styles.triangle}`}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className={`${styles.shape} ${styles.square}`}
            animate={{
              rotate: [0, -360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className={`${styles.shape} ${styles.circle}`}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div className={styles.header} variants={itemVariants}>
            <motion.div
              className={styles.iconContainer}
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <MessageCircle size={40} />
            </motion.div>

            <h2 className={styles.title}>Ready to Work With Us?</h2>
            <p className={styles.subtitle}>
              Let's discuss how our team can help bring your ideas to life with
              our expert development and design services.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div className={styles.ctaContainer} variants={itemVariants}>
            <motion.button
              className={styles.ctaButton}
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = '/contact')}
            >
              <span className={styles.buttonText}>Get In Touch</span>
              <motion.div
                className={styles.buttonIcon}
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>

            {/* Contact Options */}
            <motion.div
              className={styles.contactOptions}
              variants={itemVariants}
            >
              <motion.a
                href="tel:+1234567890"
                className={styles.contactOption}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone size={18} />
                <span>Call Us</span>
              </motion.a>
              <motion.a
                href="mailto:info@evonnexis.com"
                className={styles.contactOption}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={18} />
                <span>Email Us</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Bottom Decorative Element */}
          <motion.div
            className={styles.bottomDecoration}
            variants={itemVariants}
          >
            <motion.div
              className={styles.decorativeLine}
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
            <motion.div
              className={styles.decorativeDot}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Particle System */}
      <div className={styles.particles}>
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            animate={{
              y: [-100, -120, -100],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
            style={{
              left: `${20 + i * 12}%`,
              bottom: '10%',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default AboutCTA
