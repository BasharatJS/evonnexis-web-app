'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  Briefcase,
  FolderOpen,
  Users,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from 'lucide-react'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Portfolio', href: '/portfolio', icon: FolderOpen },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Applications', href: '/services/mobile-apps' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'IT Consulting', href: '/services/it-consulting' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <footer className={styles.footer}>
      {/* Scroll to Top Button */}
      <motion.button
        className={styles.scrollToTop}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className={styles.container}>
        <motion.div
          className={styles.footerContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info Section */}
          <motion.div className={styles.companySection} variants={itemVariants}>
            <motion.div
              className={styles.logo}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.logoIcon}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className={styles.infinitySymbol}
                >
                  ∞
                </motion.div>
              </div>
              <div className={styles.logoText}>
                <h3>Evonnexis</h3>
                <p className={styles.logoSubtext}>Towards Infinity</p>
              </div>
            </motion.div>

            <motion.p
              className={styles.companyDescription}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Building innovative mobile and web applications that transform
              businesses.
            </motion.p>

            {/* Social Links */}
            <motion.div className={styles.socialLinks} variants={itemVariants}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div className={styles.linksSection} variants={itemVariants}>
            <motion.h4
              className={styles.sectionTitle}
              whileHover={{ color: 'var(--primary)' }}
              transition={{ duration: 0.3 }}
            >
              Quick Links
            </motion.h4>
            <div className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={styles.footerLink}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10, color: 'var(--primary)' }}
                >
                  <link.icon size={16} />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            className={styles.servicesSection}
            variants={itemVariants}
          >
            <motion.h4
              className={styles.sectionTitle}
              whileHover={{ color: 'var(--primary)' }}
              transition={{ duration: 0.3 }}
            >
              Services
            </motion.h4>
            <div className={styles.linksList}>
              {services.map((service, index) => (
                <motion.a
                  key={service.name}
                  href={service.href}
                  className={styles.footerLink}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10, color: 'var(--primary)' }}
                >
                  <span>{service.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div className={styles.contactSection} variants={itemVariants}>
            <motion.h4
              className={styles.sectionTitle}
              whileHover={{ color: 'var(--primary)' }}
              transition={{ duration: 0.3 }}
            >
              Contact Us
            </motion.h4>
            <div className={styles.contactInfo}>
              <motion.div
                className={styles.contactItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <Mail size={16} />
                <span>info@evonnexis.com</span>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <MapPin size={16} />
                <span>123 Tech Street, San Francisco, CA 94107</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div
            className={styles.divider}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1 }}
          />

          <motion.p
            className={styles.copyright}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            © {currentYear} Evonnexis. All rights reserved.
          </motion.p>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.backgroundOrb1}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className={styles.backgroundOrb2}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </footer>
  )
}

export default Footer
