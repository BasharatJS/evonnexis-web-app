'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Zap,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
} from 'lucide-react'
import styles from './ServiceCTA.module.css'

const ServiceCTA = () => {
  const floatingElements = [
    { icon: Sparkles, delay: 0, duration: 3 },
    { icon: Zap, delay: 1, duration: 4 },
    { icon: MessageCircle, delay: 2, duration: 3.5 },
    { icon: Calendar, delay: 0.5, duration: 4.5 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
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
        ease: 'easeOut',
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  }

  return (
    <section className={styles.serviceCTA}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`${styles.floatingElement} ${
              styles[`element${index + 1}`]
            }`}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: element.delay,
            }}
          >
            <element.icon size={24} />
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={styles.gradientOrb2}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className={styles.gradientOrb3}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Content */}
          <motion.div className={styles.mainContent} variants={itemVariants}>
            <motion.h2 className={styles.title} variants={itemVariants}>
              Ready to Start Your Project?
            </motion.h2>

            <motion.p className={styles.description} variants={itemVariants}>
              Contact us today to discuss how we can help bring your ideas to
              life with our expert development and design services.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className={styles.ctaButtons} variants={itemVariants}>
              <motion.button
                className={styles.primaryButton}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => (window.location.href = '/contact')}
              >
                <span>Get in Touch</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                className={styles.secondaryButton}
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = '/portfolio')}
              >
                <span>View Portfolio</span>
              </motion.button>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              className={styles.contactOptions}
              variants={itemVariants}
            >
              <motion.div
                className={styles.contactItem}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={20} />
                <span>Call Us</span>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={20} />
                <span>Email Us</span>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Calendar size={20} />
                <span>Schedule Call</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Side Illustration */}
          <motion.div className={styles.illustration} variants={itemVariants}>
            <motion.div
              className={styles.illustrationContent}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className={styles.illustrationCard}>
                <motion.div
                  className={styles.cardIcon}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Sparkles size={32} />
                </motion.div>
                <div className={styles.cardContent}>
                  <h3>Expert Solutions</h3>
                  <p>Tailored to your needs</p>
                </div>
              </div>

              <motion.div
                className={styles.illustrationCard}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <motion.div
                  className={styles.cardIcon}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Zap size={32} />
                </motion.div>
                <div className={styles.cardContent}>
                  <h3>Fast Delivery</h3>
                  <p>Quality at speed</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Wave Effect */}
        <motion.div
          className={styles.waveEffect}
          animate={{
            x: [-100, 100, -100],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 1200 120" className={styles.waveSvg}>
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceCTA
