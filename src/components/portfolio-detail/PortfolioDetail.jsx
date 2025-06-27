'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Monitor,
  Smartphone,
  ExternalLink,
  Github,
  Users,
  ShoppingCart,
  Activity,
  MapPin,
  GraduationCap,
  Utensils,
  BarChart3,
  TrendingUp,
  Heart,
  Zap,
} from 'lucide-react'
import styles from './PortfolioDetail.module.css'

const PortfolioDetail = () => {
  const [activeTab, setActiveTab] = useState('web')

  const webProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'A comprehensive e-commerce solution with inventory management, payment processing, and customer analytics',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'Web Development',
      client: 'RetailTech Inc.',
      demoUrl: '#',
      codeUrl: '#',
      icon: ShoppingCart,
      gradientClass: 'gradient1',
    },
    {
      id: 2,
      title: 'Healthcare Dashboard',
      description:
        'A feature-rich healthcare analytics platform with patient management and real-time monitoring',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Chart.js'],
      category: 'Web Development',
      client: 'MedTech Solutions',
      demoUrl: '#',
      codeUrl: '#',
      icon: Activity,
      gradientClass: 'gradient2',
    },
    {
      id: 3,
      title: 'Real Estate Portal',
      description:
        'A property listing and management platform with virtual tours and lead generation tools',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [
        'Next.js',
        'Tailwind CSS',
        'PostgreSQL',
        'Google Maps API',
      ],
      category: 'Web Development',
      client: 'PropertyPro Realty',
      demoUrl: '#',
      codeUrl: '#',
      icon: MapPin,
      gradientClass: 'gradient3',
    },
    {
      id: 4,
      title: 'Learning Management System',
      description:
        'A comprehensive platform for online education with course creation and progress tracking',
      image:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Django', 'AWS', 'WebRTC'],
      category: 'Web Development',
      client: 'EduTech Solutions',
      demoUrl: '#',
      codeUrl: '#',
      icon: GraduationCap,
      gradientClass: 'gradient4',
    },
    {
      id: 5,
      title: 'Restaurant Management',
      description:
        'An integrated ordering system with mobile app for customers and web dashboard for restaurant management',
      image:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Express.js', 'MySQL', 'Stripe'],
      category: 'Web Development',
      client: 'Culinary Innovations',
      demoUrl: '#',
      codeUrl: '#',
      icon: Utensils,
      gradientClass: 'gradient5',
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description:
        'A real-time business intelligence platform with advanced reporting and data visualization',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'D3.js', 'Python', 'MongoDB'],
      category: 'Web Development',
      client: 'DataTech Corp',
      demoUrl: '#',
      codeUrl: '#',
      icon: BarChart3,
      gradientClass: 'gradient6',
    },
  ]

  const mobileProjects = [
    {
      id: 7,
      title: 'Fitness Tracking App',
      description:
        'A comprehensive fitness app with workout planning, nutrition tracking, and social features',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'HealthKit API'],
      category: 'Mobile Application',
      client: 'FitLife Solutions',
      demoUrl: '#',
      codeUrl: '#',
      icon: Activity,
      gradientClass: 'gradient2',
    },
    {
      id: 8,
      title: 'E-wallet Application',
      description:
        'A secure digital wallet with contactless payments, bill management, and financial insights',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Razorpay'],
      category: 'Mobile Application',
      client: 'FinTech Innovations',
      demoUrl: '#',
      codeUrl: '#',
      icon: TrendingUp,
      gradientClass: 'gradient1',
    },
    {
      id: 9,
      title: 'Social Dating App',
      description:
        'A modern dating platform with AI-powered matching and video chat features',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Express.js', 'Socket.io', 'AWS'],
      category: 'Mobile Application',
      client: 'LoveConnect Inc.',
      demoUrl: '#',
      codeUrl: '#',
      icon: Heart,
      gradientClass: 'gradient7',
    },
    {
      id: 10,
      title: 'Food Delivery App',
      description:
        'A full-featured food delivery platform with real-time tracking and multiple payment options',
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Firebase', 'Google Maps', 'Stripe'],
      category: 'Mobile Application',
      client: 'FoodieExpress',
      demoUrl: '#',
      codeUrl: '#',
      icon: Utensils,
      gradientClass: 'gradient5',
    },
    {
      id: 11,
      title: 'Travel Planning App',
      description:
        'An intelligent travel companion with itinerary planning, booking, and local recommendations',
      image:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Maps API'],
      category: 'Mobile Application',
      client: 'Wanderlust Tech',
      demoUrl: '#',
      codeUrl: '#',
      icon: MapPin,
      gradientClass: 'gradient3',
    },
    {
      id: 12,
      title: 'Meditation & Wellness',
      description:
        'A mindfulness app with guided meditations, sleep stories, and wellness tracking',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Firebase', 'Audio API', 'ML Kit'],
      category: 'Mobile Application',
      client: 'Zen Wellness Co.',
      demoUrl: '#',
      codeUrl: '#',
      icon: Zap,
      gradientClass: 'gradient4',
    },
  ]

  const currentProjects = activeTab === 'web' ? webProjects : mobileProjects

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
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className={styles.portfolioDetail}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Our Portfolio</h2>
          <p className={styles.subtitle}>
            Discover our latest projects and innovative solutions across web and
            mobile platforms
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          className={styles.tabSwitcher}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.tabContainer}>
            <motion.button
              className={`${styles.tabButton} ${
                activeTab === 'web' ? styles.active : ''
              }`}
              onClick={() => setActiveTab('web')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Monitor size={24} />
              <span>Web Development</span>
            </motion.button>

            <motion.button
              className={`${styles.tabButton} ${
                activeTab === 'mobile' ? styles.active : ''
              }`}
              onClick={() => setActiveTab('mobile')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Smartphone size={24} />
              <span>Mobile Applications</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.projectsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Image Container */}
                <div className={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div
                    className={`${styles.imageOverlay} ${
                      styles[project.gradientClass]
                    }`}
                  />

                  {/* Icon Badge */}
                  <div className={styles.iconBadge}>
                    <div
                      className={`${styles.iconContainer} ${
                        styles[project.gradientClass]
                      }`}
                    >
                      <project.icon className={styles.icon} />
                    </div>
                  </div>

                  {/* Hover Actions */}
                  <div className={styles.hoverActions}>
                    <motion.a
                      href={project.demoUrl}
                      className={styles.actionButton}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.codeUrl}
                      className={styles.actionButtonDark}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <div className={styles.categoryContainer}>
                    <span
                      className={`${styles.category} ${
                        styles[project.gradientClass]
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Client */}
                  <div className={styles.clientInfo}>
                    <Users size={16} />
                    <span>Client: {project.client}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.ctaContainer}>
            <h3 className={styles.ctaTitle}>Ready to Start Your Project?</h3>
            <p className={styles.ctaSubtitle}>
              Let's bring your ideas to life with our expertise
            </p>
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioDetail
