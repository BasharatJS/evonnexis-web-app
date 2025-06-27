'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import styles from './HomeServices.module.css'

const Services = () => {
  const router = useRouter()

  // Navigation handler for service navigation
  const handleServiceNavigation = () => {
    router.push('/services')
  }

  const servicesData = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description:
        'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: [
        'React/Next.js',
        'Node.js',
        'Database Design',
        'API Integration',
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Applications',
      description:
        'Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android devices.',
      features: [
        'React Native',
        'iOS Development',
        'Android Development',
        'Cross-Platform',
      ],
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
    },
    {
      id: 3,
      icon: '🎨',
      title: 'UI/UX Design',
      description:
        'User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
      ],
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
    },
    {
      id: 4,
      icon: '☁️',
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and deployment solutions to ensure your applications run smoothly and efficiently.',
      features: ['AWS/Azure', 'DevOps', 'CI/CD', 'Monitoring'],
      gradient: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    },
    {
      id: 5,
      icon: '🚀',
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing strategies to boost your online presence and drive business growth.',
      features: ['SEO', 'Social Media', 'Content Strategy', 'Analytics'],
      gradient: 'linear-gradient(135deg, #a855f7 0%, #8b5cf6 100%)',
    },
    {
      id: 6,
      icon: '🔧',
      title: 'Maintenance & Support',
      description:
        'Ongoing maintenance and technical support to keep your applications running at peak performance.',
      features: ['24/7 Support', 'Updates', 'Bug Fixes', 'Performance'],
      gradient: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
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
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Rotating Services Icon */}
          <motion.div
            className={styles.serviceIcon}
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
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6" />
              <path d="m21 12-6-3-6 3-6-3" />
              <path d="M12 1L9 5l3 7 3-7-3-4z" />
              <path d="M5.636 5.636l1.414 1.414" />
              <path d="M18.364 18.364l-1.414-1.414" />
              <path d="M5.636 18.364l1.414-1.414" />
              <path d="M18.364 5.636l-1.414 1.414" />
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

          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            We offer end-to-end solutions for businesses looking to establish or
            enhance their digital presence.
          </p>
        </motion.div>

        <motion.div
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              variants={cardVariants}
              onClick={handleServiceNavigation}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.cardContainer}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>{service.icon}</span>
                  <div
                    className={styles.iconBg}
                    style={{ background: service.gradient }}
                  ></div>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                {/* Learn More Button - Visible by default, hides on hover */}
                <motion.button
                  className={styles.learnMoreButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation() // Prevent card click
                    handleServiceNavigation()
                  }}
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>

                {/* Features List - Shows only on hover */}
                <div className={styles.featuresContainer}>
                  <h4 className={styles.featuresTitle}>Key Features:</h4>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={styles.feature}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Left to Right Hover Effect */}
                <div className={styles.hoverOverlay}></div>

                {/* Card Glow */}
                <div className={styles.cardGlow}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.viewAllContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className={styles.viewAllButton}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleServiceNavigation}
          >
            <span>View All Services</span>
            <div className={styles.buttonGlow}></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>
    </section>
  )
}

export default Services
