'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Code,
  Smartphone,
  Monitor,
  Palette,
  Globe,
  Shield,
  Clock,
} from 'lucide-react'
import styles from './FAQ.module.css'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqData = [
    {
      id: 1,
      icon: Globe,
      question: 'What types of web applications do you develop?',
      answer:
        'We develop a wide range of web applications including e-commerce platforms, business management systems, content management systems (CMS), customer portals, progressive web apps (PWAs), and custom web solutions. Our expertise covers modern technologies like React, Next.js, Node.js, and various databases to ensure scalable and robust applications.',
    },
    {
      id: 2,
      icon: Smartphone,
      question: 'Do you create mobile apps for both iOS and Android?',
      answer:
        'Yes, we develop mobile applications for both iOS and Android platforms. We offer native app development for optimal performance and user experience, as well as cross-platform solutions using React Native and Flutter. Our mobile apps are designed to be user-friendly, fast, and integrate seamlessly with your business processes.',
    },
    {
      id: 3,
      icon: Palette,
      question: 'What does your UI/UX design process include?',
      answer:
        'Our UI/UX design process includes user research, wireframing, prototyping, visual design, and usability testing. We focus on creating intuitive interfaces that provide excellent user experiences. Our design team works closely with you to understand your brand, target audience, and business goals to deliver designs that are both beautiful and functional.',
    },
    {
      id: 4,
      icon: Code,
      question:
        'How long does it typically take to develop a custom software solution?',
      answer:
        'Development timelines vary based on project complexity and requirements. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. Mobile apps typically require 2-5 months depending on features. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.',
    },
    {
      id: 5,
      icon: Shield,
      question:
        'Do you provide ongoing support and maintenance after project completion?',
      answer:
        'Absolutely! We offer comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and technical support. We provide different maintenance packages to suit your needs, ensuring your software remains secure, up-to-date, and performs optimally as your business grows.',
    },
    {
      id: 6,
      icon: Monitor,
      question: 'What technologies and frameworks do you work with?',
      answer:
        'We work with cutting-edge technologies including React, Next.js, Vue.js, Angular for frontend; Node.js, Python, PHP for backend; MongoDB, PostgreSQL, MySQL for databases; React Native, Flutter for mobile; and cloud services like AWS, Google Cloud, and Azure. We choose the best technology stack based on your specific project requirements.',
    },
    {
      id: 7,
      icon: Clock,
      question:
        'How do you handle project management and communication during development?',
      answer:
        "We follow agile development methodologies with regular sprint reviews and updates. You'll have access to project management tools where you can track progress, view milestones, and communicate with our team. We provide weekly progress reports, maintain transparent communication, and ensure you're involved in key decisions throughout the development process.",
    },
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div
            className={styles.headerIcon}
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <HelpCircle size={40} />
          </motion.div>

          <motion.span
            className={styles.sectionTag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            FAQ
          </motion.span>

          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Find answers to common questions about our software development
            services, processes, and how we can help bring your digital vision
            to life.
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          className={styles.faqList}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              className={`${styles.faqItem} ${
                openFAQ === faq.id ? styles.active : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <motion.div
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(faq.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className={styles.questionContent}>
                  <div className={styles.questionIcon}>
                    <faq.icon size={24} />
                  </div>
                  <h3>{faq.question}</h3>
                </div>
                <motion.div
                  className={styles.chevronIcon}
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div className={styles.answerContent}>
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.faqCTA}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <h3>Still have questions?</h3>
          <p>
            Can't find the answer you're looking for? Our team is here to help
            you with any questions about our services.
          </p>
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Scroll to contact form
              const contactForm = document.getElementById('contact-details')
              if (contactForm) {
                contactForm.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Get in Touch
            <HelpCircle size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
