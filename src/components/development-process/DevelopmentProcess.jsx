'use client'
import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Search,
  PenTool,
  Code,
  Rocket,
  Lightbulb,
  FileText,
  Monitor,
  Headphones,
  Target,
  Users,
  Zap,
  CheckCircle,
} from 'lucide-react'
import styles from './DevelopmentProcess.module.css'

const DevelopmentProcess = () => {
  const [activeStep, setActiveStep] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const processSteps = [
    {
      id: 1,
      number: '1',
      title: 'Discovery',
      description:
        'We start by understanding your business goals, target audience, and project requirements.',
      icon: Search,
      details: [
        'Business analysis & requirements gathering',
        'Market research & competitor analysis',
        'User persona development',
        'Project scope definition',
      ],
      color: 'blue',
      duration: '1-2 weeks',
    },
    {
      id: 2,
      number: '2',
      title: 'Planning',
      description:
        'We create detailed specifications, wireframes, and project timelines to guide development.',
      icon: PenTool,
      details: [
        'Technical architecture design',
        'UI/UX wireframes & prototypes',
        'Project timeline & milestones',
        'Resource allocation planning',
      ],
      color: 'purple',
      duration: '2-3 weeks',
    },
    {
      id: 3,
      number: '3',
      title: 'Development',
      description:
        'Our team builds your solution using agile methodologies with regular updates and feedback.',
      icon: Code,
      details: [
        'Agile development sprints',
        'Regular code reviews & testing',
        'Continuous integration & deployment',
        'Weekly progress updates',
      ],
      color: 'green',
      duration: '4-12 weeks',
    },
    {
      id: 4,
      number: '4',
      title: 'Launch & Support',
      description:
        'We ensure a smooth deployment and provide ongoing maintenance and support services.',
      icon: Rocket,
      details: [
        'Production deployment & testing',
        'Performance optimization',
        'User training & documentation',
        '24/7 ongoing support & maintenance',
      ],
      color: 'orange',
      duration: 'Ongoing',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        delay: 0.5,
      },
    },
  }

  // Auto-advance active step for demo
  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length)
      }, 3000)

      return () => clearInterval(timer)
    }
  }, [isInView, processSteps.length])

  return (
    <section ref={ref} className={styles.developmentProcess}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Our Development Process</h2>
          <p className={styles.subtitle}>
            We follow a structured approach to ensure every project is delivered
            on time and exceeds expectations.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className={styles.processContainer}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Connection Lines */}
          <div className={styles.connectionLines}>
            {processSteps.slice(0, -1).map((_, index) => (
              <motion.div
                key={index}
                className={styles.connectionLine}
                variants={lineVariants}
                style={{
                  left: `${(index * 100) / (processSteps.length - 1) + 12.5}%`,
                  width: `${75 / (processSteps.length - 1)}%`,
                }}
              />
            ))}
          </div>

          {/* Process Steps Grid */}
          <div className={styles.stepsGrid}>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`${styles.stepCard} ${styles[step.color]} ${
                  activeStep === index ? styles.active : ''
                }`}
                variants={stepVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setActiveStep(index)}
              >
                {/* Step Number Circle */}
                <motion.div
                  className={styles.stepNumber}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span>{step.number}</span>
                </motion.div>

                {/* Step Icon */}
                <motion.div
                  className={styles.stepIcon}
                  whileHover={{ scale: 1.2, rotateY: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <step.icon size={32} />
                </motion.div>

                {/* Step Content */}
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>

                  {/* Duration Badge */}
                  <div className={styles.durationBadge}>
                    <span>{step.duration}</span>
                  </div>

                  {/* Step Details - Shown on Hover */}
                  <motion.div
                    className={styles.stepDetails}
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul>
                      {step.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ delay: detailIndex * 0.1 }}
                        >
                          <CheckCircle size={14} />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Progress Indicator */}
                <div className={styles.progressIndicator}>
                  <motion.div
                    className={styles.progressBar}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: activeStep >= index ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Floating Elements */}
                <div className={styles.floatingElements}>
                  <motion.div
                    className={styles.floatingDot}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className={styles.floatingDot2}
                    animate={{
                      y: [0, 10, 0],
                      x: [0, 5, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Active Step Details */}
        <motion.div
          className={styles.activeStepDetails}
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.activeStepContent}>
            <div className={styles.activeStepHeader}>
              <div
                className={`${styles.activeStepIcon} ${
                  styles[processSteps[activeStep].color]
                }`}
              >
                {React.createElement(processSteps[activeStep].icon, {
                  size: 24,
                })}
              </div>
              <div>
                <h4>
                  Step {processSteps[activeStep].number}:{' '}
                  {processSteps[activeStep].title}
                </h4>
                <p>{processSteps[activeStep].description}</p>
              </div>
            </div>

            <div className={styles.activeStepList}>
              {processSteps[activeStep].details.map((detail, index) => (
                <motion.div
                  key={index}
                  className={styles.activeDetailItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle size={16} />
                  <span>{detail}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className={styles.ctaContent}>
            <h3>Ready to Start Your Project?</h3>
            <p>
              Let's discuss your requirements and create something amazing
              together
            </p>
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today</span>
              <Rocket size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DevelopmentProcess
