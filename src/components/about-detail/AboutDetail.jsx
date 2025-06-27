'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Users,
  Target,
  Lightbulb,
  Heart,
  Star,
  Award,
  Rocket,
  Zap,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Code,
  Monitor,
  Layers,
} from 'lucide-react'
import styles from './AboutDetail.module.css'

const AboutDetail = () => {
  const [isVisible, setIsVisible] = useState(false)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const isStoryInView = useInView(storyRef, { once: true, margin: '-50px' })
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-50px' })

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We embrace new technologies and approaches to solve complex problems and create cutting-edge solutions.',
      color: '#3b82f6',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We work closely with our clients, treating their challenges as our own and fostering partnerships built on trust and communication.',
      color: '#8b5cf6',
    },
    {
      icon: Award,
      title: 'Quality',
      description:
        "We're committed to excellence in everything we do, from the code we write to the experiences we design and the service we provide.",
      color: '#06b6d4',
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description:
        "We value our clients' time and resources, focusing on solutions that are not only effective but also efficient and sustainable.",
      color: '#f59e0b',
    },
    {
      icon: Target,
      title: 'Adaptability',
      description:
        'We embrace change and continuously evolve our skills and methodologies to meet the ever-changing demands of the digital landscape.',
      color: '#ef4444',
    },
    {
      icon: TrendingUp,
      title: 'Client Success',
      description:
        'Our ultimate goal is client success. We measure our achievements by the positive impact our solutions have on their businesses.',
      color: '#10b981',
    },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <div className={styles.aboutDetail}>
      {/* Our Story Section */}
      <section className={styles.storySection} ref={storyRef}>
        <div className={styles.container}>
          <motion.div
            className={styles.storyContent}
            variants={containerVariants}
            initial="hidden"
            animate={isStoryInView ? 'visible' : 'hidden'}
          >
            <div className={styles.storyFullWidth}>
              <motion.h2
                className={styles.sectionTitle}
                variants={itemVariants}
              >
                Our Story
              </motion.h2>

              <motion.div
                className={styles.storyContentGrid}
                variants={containerVariants}
              >
                <motion.div
                  className={styles.storyText}
                  variants={itemVariants}
                >
                  <motion.div
                    className={styles.storyParagraphs}
                    variants={itemVariants}
                  >
                    <p>
                      Founded in 2018, Evonnexis began with a simple mission: to
                      help businesses leverage technology to grow and succeed in
                      the digital age.
                    </p>

                    <p>
                      What started as a small team of three has grown into a
                      diverse group of talented professionals united by a
                      passion for creating exceptional digital experiences.
                    </p>

                    <p>
                      Today, we work with clients across various industries,
                      from startups to established enterprises, delivering
                      custom mobile and web applications that drive real
                      business results.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={styles.storyVisual}
                  variants={itemVariants}
                >
                  <div className={styles.visualContainer}>
                    <motion.div
                      className={styles.storyImage}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Team collaboration and innovation"
                        className={styles.heroImage}
                      />
                      <div className={styles.imageOverlay}></div>
                      <motion.div
                        className={styles.floatingBadge}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 2, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Sparkles size={20} />
                        <span>Innovation</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div className={styles.storyStats} variants={itemVariants}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>2018</span>
                  <span className={styles.statLabel}>Founded</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100+</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>7+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Values Section */}
      <section className={styles.valuesSection} ref={valuesRef}>
        <div className={styles.container}>
          <motion.div
            className={styles.valuesContent}
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? 'visible' : 'hidden'}
          >
            <motion.div className={styles.valuesHeader} variants={itemVariants}>
              <h2 className={styles.sectionTitle}>Our Mission & Values</h2>
              <p className={styles.sectionSubtitle}>
                We're guided by a set of core principles that inform everything
                we do
              </p>
            </motion.div>

            <motion.div
              className={styles.valuesGrid}
              variants={containerVariants}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className={styles.valueCard}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className={styles.valueIcon}
                    style={{ '--icon-color': value.color }}
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <value.icon size={24} />
                  </motion.div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>

                  <motion.div
                    className={styles.cardGlow}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ '--glow-color': value.color }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutDetail
