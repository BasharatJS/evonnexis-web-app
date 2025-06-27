'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Code,
  Zap,
  Star,
  Users,
  Rocket,
  Heart,
  Award,
} from 'lucide-react'
import styles from './ContactCTA.module.css'

const ContactCTA = () => {
  const benefits = [
    {
      icon: Rocket,
      title: 'Fast Development',
      description: 'Quick turnaround times',
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Experienced professionals',
    },
    {
      icon: Heart,
      title: '24/7 Support',
      description: 'Always here to help',
    },
  ]

  const contactMethods = [
    {
      icon: Phone,
      label: 'Call Us',
      action: () => window.open('tel:+919876543210', '_self'),
    },
    {
      icon: Mail,
      label: 'Email Us',
      action: () => window.open('mailto:info@evonnexis.com', '_self'),
    },
    {
      icon: Calendar,
      label: 'Schedule Call',
      action: () => {
        // Scroll to contact form
        const contactForm = document.getElementById('contact-details')
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth' })
        }
      },
    },
  ]

  const floatingElements = [
    { icon: Code, delay: 0, position: { top: '15%', left: '10%' } },
    { icon: Zap, delay: 0.5, position: { top: '25%', right: '15%' } },
    { icon: Star, delay: 1, position: { bottom: '30%', left: '8%' } },
    { icon: Users, delay: 1.5, position: { bottom: '20%', right: '12%' } },
  ]

  return (
    <section className={styles.contactCTA}>
      <div className={styles.container}>
        {/* Floating Background Elements - REMOVED */}
        {/* <div className={styles.floatingElements}>
          {floatingElements.map((element, index) => (
            <motion.div
              key={index}
              className={styles.floatingElement}
              style={element.position}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: element.delay }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              }}
            >
              <element.icon size={24} />
            </motion.div>
          ))}
        </div> */}

        <div className={styles.content}>
          {/* Left Side - Main Content */}
          <motion.div
            className={styles.mainContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Icon Badge */}
            <motion.div
              className={styles.iconBadge}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              //   transition={{
              //     scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              //   }}
            >
              <MessageCircle size={32} />
            </motion.div>

            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Ideas?
            </motion.h2>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Let's discuss how our expert development team can bring your
              vision to life with cutting-edge technology and innovative
              solutions.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              className={styles.benefitsGrid}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={styles.benefitItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.benefitIcon}>
                    <benefit.icon size={20} />
                  </div>
                  <div className={styles.benefitContent}>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Main CTA Button */}
            <motion.button
              className={styles.primaryCTA}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactForm = document.getElementById('contact-details')
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <span>Start Your Project Today</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Right Side - Contact Methods */}
          <motion.div
            className={styles.contactMethods}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className={styles.contactTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h3>

            <div className={styles.methodsGrid}>
              {contactMethods.map((method, index) => (
                <motion.button
                  key={index}
                  className={styles.contactMethod}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={method.action}
                >
                  <div className={styles.methodIcon}>
                    <method.icon size={24} />
                  </div>
                  <span>{method.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className={styles.stats}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={styles.statItem}>
                <span className={styles.statNumber}>150+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        <div className={styles.patternDot}></div>
        <div className={styles.patternDot}></div>
        <div className={styles.patternDot}></div>
        <div className={styles.patternDot}></div>
      </div>
    </section>
  )
}

export default ContactCTA
