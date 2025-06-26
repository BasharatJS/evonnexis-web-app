'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './WhyChoose.module.css'

const WhyChoose = () => {
  const whyChooseData = [
    {
      id: 1,
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      title: 'Innovative Solutions',
      description:
        'We stay at the forefront of technology to deliver cutting-edge solutions.',
      details: [
        'Latest Technologies',
        'Creative Approach',
        'Future-Ready Solutions',
      ],
    },
    {
      id: 2,
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Expert Team',
      description:
        'Our team of skilled developers and designers bring years of industry experience.',
      details: [
        'Experienced Developers',
        'Creative Designers',
        'Industry Experts',
      ],
    },
    {
      id: 3,
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
        </svg>
      ),
      title: 'Fast Delivery',
      description:
        'We follow agile methodologies to ensure timely delivery without compromising quality.',
      details: ['Agile Methodology', 'Quick Turnaround', 'On-Time Delivery'],
    },
    {
      id: 4,
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: 'Quality Assurance',
      description:
        'Rigorous testing and quality control processes ensure reliable, bug-free applications.',
      details: ['Thorough Testing', 'Quality Control', 'Bug-Free Code'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        {/* Header with rotating icon and animated line */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Rotating Icon */}
          <motion.div
            className={styles.rotatingIcon}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="8" r="2" />
            </svg>
          </motion.div>

          {/* Animated Line */}
          <motion.div
            className={styles.animatedLine}
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          ></motion.div>

          <h2 className={styles.title}>Why Choose Evonnexis</h2>
          <p className={styles.subtitle}>
            We combine technical expertise with business acumen to deliver
            solutions that drive real results.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className={styles.cardsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyChooseData.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.card}
              variants={cardVariants}
            >
              {/* Main Card Content */}
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconCircle}>{item.icon}</div>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>

              {/* Hover Overlay with Details */}
              <div className={styles.hoverOverlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.overlayIcon}>{item.icon}</div>
                  <h4 className={styles.overlayTitle}>{item.title}</h4>
                  <div className={styles.detailsList}>
                    {item.details.map((detail, idx) => (
                      <div key={idx} className={styles.detailItem}>
                        <div className={styles.bulletPoint}></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Background Gradient */}
              <div className={styles.cardGradient}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
      </div>
    </section>
  )
}

export default WhyChoose
