'use client'
import React, { useState, useEffect } from 'react'
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
} from 'lucide-react'
import styles from './ServiceDetails.module.css'

const ServiceDetails = () => {
  const [visibleItems, setVisibleItems] = useState([])

  const servicesData = [
    {
      id: 'web-dev',
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
      id: 'mobile-dev',
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
      id: 'ui-ux',
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
      id: 'cloud',
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
      id: 'marketing',
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
      id: 'support',
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
      id: 'consulting',
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

  // Completely different approach - timeout based
  useEffect(() => {
    const timeouts = []

    servicesData.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleItems((prev) => [...prev, index])
      }, index * 300)

      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout))
    }
  }, [])

  const ServiceItem = ({ service, index }) => {
    const isLeft = index % 2 === 0
    const isVisible = visibleItems.includes(index)

    return (
      <div
        className={`${styles.serviceItem} ${
          isLeft ? styles.leftAlign : styles.rightAlign
        }`}
      >
        <div
          className={`${styles.serviceBox} ${isVisible ? styles.visible : ''}`}
        >
          {/* Content Side */}
          <div className={styles.contentSide}>
            <div
              className={styles.iconBox}
              style={{ backgroundColor: service.color }}
            >
              <service.icon size={28} color="white" />
            </div>

            <div className={styles.textBox}>
              <h3 className={styles.serviceHeading}>{service.title}</h3>
              <p className={styles.serviceTagline}>{service.subtitle}</p>
              <p className={styles.serviceText}>{service.description}</p>

              <ul className={styles.featuresList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <CheckCircle size={14} color={service.color} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.techSection}>
                <h4>Technologies</h4>
                <div className={styles.techList}>
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={styles.techItem}
                      style={{ borderColor: service.color }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className={styles.actionBtn}
                style={{ backgroundColor: service.color }}
              >
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className={styles.imageSide}>
            <div className={styles.imageBox}>
              <img src={service.image} alt={service.title} />

              {/* Moving overlay effect - SOLID COLOR */}
              <div
                className={styles.movingOverlay}
                style={{
                  backgroundColor: `${service.color}D0`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className={styles.servicesSection}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>Our Services</h2>
          <p className={styles.mainSubtitle}>
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services List */}
        <div className={styles.servicesList}>
          {servicesData.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails
