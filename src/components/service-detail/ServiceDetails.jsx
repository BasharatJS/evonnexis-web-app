'use client'
import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Megaphone,
  Settings,
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Layers,
} from 'lucide-react'
import styles from './ServiceDetails.module.css'

const ServiceDetails = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 1,
      icon: Code2,
      title: 'Web Development',
      subtitle: 'Modern, scalable web solutions',
      description:
        'We build responsive, high-performance websites and web applications that deliver exceptional user experiences across all devices.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development & Integration',
      ],
      technologies: [
        'React',
        'Next.js',
        'Vue.js',
        'Node.js',
        'Express',
        'MongoDB',
      ],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#667eea',
    },
    {
      id: 2,
      icon: Smartphone,
      title: 'Mobile Applications',
      subtitle: 'Native & cross-platform mobile apps',
      description:
        'We develop intuitive, feature-rich mobile applications that engage users and drive business growth across iOS and Android platforms.',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Development',
        'App Maintenance & Updates',
        'Mobile UI/UX Optimization',
      ],
      technologies: [
        'React Native',
        'Flutter',
        'Swift',
        'Kotlin',
        'Firebase',
        'AWS Amplify',
      ],
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#764ba2',
    },
    {
      id: 3,
      icon: Palette,
      title: 'UI/UX Design',
      subtitle: 'User-centered design experiences',
      description:
        'We create intuitive, visually appealing interfaces that enhance user satisfaction and drive engagement through thoughtful design.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design System Creation',
      ],
      technologies: [
        'Figma',
        'Adobe XD',
        'Sketch',
        'InVision',
        'Zeplin',
        'Principle',
      ],
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#8b5cf6',
    },
    {
      id: 4,
      icon: Cloud,
      title: 'Cloud Solutions',
      subtitle: 'Scalable infrastructure & deployment',
      description:
        'Scalable cloud infrastructure and deployment solutions to ensure your applications run smoothly and efficiently at any scale.',
      features: [
        'Cloud Architecture Design',
        'DevOps & CI/CD Pipeline',
        'Container Orchestration',
        'Cloud Migration Services',
      ],
      technologies: [
        'AWS',
        'Azure',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'Terraform',
      ],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#06b6d4',
    },
    {
      id: 5,
      icon: Megaphone,
      title: 'Digital Marketing',
      subtitle: 'Comprehensive online growth strategies',
      description:
        'Comprehensive digital marketing strategies to boost your online presence and drive business growth through data-driven campaigns.',
      features: [
        'SEO & Content Strategy',
        'Social Media Marketing',
        'PPC & Ad Campaigns',
        'Analytics & Reporting',
      ],
      technologies: [
        'Google Analytics',
        'Google Ads',
        'Facebook Ads',
        'HubSpot',
        'Mailchimp',
        'SEMrush',
      ],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#f59e0b',
    },
    {
      id: 6,
      icon: Settings,
      title: 'Maintenance & Support',
      subtitle: 'Ongoing technical excellence',
      description:
        'Ongoing maintenance and technical support to keep your applications running at peak performance with 24/7 monitoring.',
      features: [
        '24/7 System Monitoring',
        'Regular Updates & Patches',
        'Performance Optimization',
        'Technical Support',
      ],
      technologies: [
        'Monitoring Tools',
        'Security Scanning',
        'Backup Solutions',
        'Performance Testing',
      ],
      image:
        'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#10b981',
    },
    {
      id: 7,
      icon: Users,
      title: 'IT Consulting',
      subtitle: 'Strategic technology guidance',
      description:
        "We provide strategic guidance to help businesses leverage technology for growth and competitive advantage in today's digital landscape.",
      features: [
        'Digital Transformation',
        'Technology Assessment',
        'Strategic Planning',
        'Process Optimization',
      ],
      technologies: [
        'Business Analysis',
        'Technology Stack Planning',
        'Risk Assessment',
        'ROI Analysis',
      ],
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#8b5cf6',
    },
  ]

  const ServiceCard = ({ service, index, isInView }) => {
    const isEven = index % 2 === 0

    return (
      <motion.div
        className={`${styles.serviceCard} ${
          isEven ? styles.serviceCardLeft : styles.serviceCardRight
        }`}
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isEven ? -100 : 100 }
        }
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        <div className={styles.cardContent}>
          <div className={styles.contentSection}>
            <motion.div
              className={styles.iconContainer}
              style={{ backgroundColor: service.color }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <service.icon size={32} color="white" />
            </motion.div>

            <div className={styles.textContent}>
              <motion.h3
                className={styles.serviceTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className={styles.serviceSubtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                {service.subtitle}
              </motion.p>

              <motion.p
                className={styles.serviceDescription}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {service.description}
              </motion.p>

              <motion.div
                className={styles.featuresList}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.2 + 0.6 }}
              >
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: index * 0.2 + 0.7 + idx * 0.1 }}
                  >
                    <CheckCircle size={16} color={service.color} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className={styles.techStack}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.2 + 0.8 }}
              >
                <h4>Technologies We Use</h4>
                <div className={styles.techTags}>
                  {service.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className={styles.techTag}
                      style={{ borderColor: service.color }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: service.color,
                        color: 'white',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.button
                className={styles.learnMoreBtn}
                style={{ backgroundColor: service.color }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.2 + 0.9 }}
              >
                Learn More
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>

          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
          >
            <div className={styles.imageContainer}>
              <img src={service.image} alt={service.title} />
              <div
                className={styles.imageOverlay}
                style={{
                  background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                }}
              >
                <div className={styles.overlayIcons}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Zap size={24} color="white" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Shield size={20} color="white" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Layers size={18} color="white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <section className={styles.serviceDetails}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services in Detail
          </motion.h2>
          <motion.p
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <div className={styles.servicesContainer}>
          {services.map((service, index) => {
            const ref = useRef(null)
            const isInView = useInView(ref, { once: true, amount: 0.3 })

            return (
              <div key={service.id} ref={ref}>
                <ServiceCard
                  service={service}
                  index={index}
                  isInView={isInView}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails
