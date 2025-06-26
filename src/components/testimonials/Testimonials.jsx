'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, Users } from 'lucide-react'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const testimonialsData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image:
        'https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5,
      text: "Evonnexis transformed our business with their innovative mobile app solution. The team's expertise and dedication exceeded our expectations. Our user engagement increased by 300% after launch!",
      project: 'E-commerce Mobile App',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO, InnovateHub',
      company: 'InnovateHub',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Working with Evonnexis was a game-changer for our startup. They delivered a cutting-edge web platform that perfectly aligned with our vision. The quality of code and attention to detail is outstanding.',
      project: 'SaaS Web Platform',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder, HealthTech Solutions',
      company: 'HealthTech Solutions',
      image:
        'https://images.unsplash.com/photo-1656338997878-279d71d48f6e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5,
      text: 'The team at Evonnexis created an amazing healthcare app that revolutionized how we serve our patients. Their understanding of both technology and user experience is remarkable.',
      project: 'Healthcare Mobile App',
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Product Manager, FinanceFlow',
      company: 'FinanceFlow',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Evonnexis delivered our financial dashboard ahead of schedule with exceptional quality. Their agile approach and constant communication made the development process smooth and transparent.',
      project: 'Financial Dashboard',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Marketing Director, EduLearn',
      company: 'EduLearn',
      image:
        'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5,
      text: 'The educational platform developed by Evonnexis has transformed online learning for our students. The intuitive design and robust features have received overwhelmingly positive feedback.',
      project: 'Educational Platform',
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [testimonialsData.length])

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        {/* Header with Icon and Line */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            className={styles.headerIcon}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <Users size={60} />
          </motion.div>

          {/* Animated Line */}
          <motion.div
            className={styles.animatedLine}
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          ></motion.div>

          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className={styles.sliderContainer}>
          {/* Navigation Arrows */}
          <motion.button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={goToPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Slider Content */}
          <div className={styles.slider}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className={styles.testimonialCard}
              >
                {/* Quote Icon */}
                <div className={styles.quoteIcon}>
                  <Quote size={48} />
                </div>

                {/* Rating Stars */}
                <div className={styles.rating}>
                  {[...Array(testimonialsData[currentIndex].rating)].map(
                    (_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star size={20} fill="currentColor" />
                      </motion.div>
                    )
                  )}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  className={styles.testimonialText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonialsData[currentIndex].text}"
                </motion.p>

                {/* Client Info */}
                <motion.div
                  className={styles.clientInfo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className={styles.clientImage}>
                    <img
                      src={testimonialsData[currentIndex].image}
                      alt={testimonialsData[currentIndex].name}
                    />
                  </div>
                  <div className={styles.clientDetails}>
                    <h4 className={styles.clientName}>
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className={styles.clientPosition}>
                      {testimonialsData[currentIndex].position}
                    </p>
                    <p className={styles.clientCompany}>
                      {testimonialsData[currentIndex].company}
                    </p>
                  </div>
                </motion.div>

                {/* Project Badge */}
                <motion.div
                  className={styles.projectBadge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {testimonialsData[currentIndex].project}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`${styles.paginationDot} ${
                  index === currentIndex ? styles.active : ''
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <motion.div
            className={styles.progressBar}
            initial={{ width: 0 }}
            animate={{
              width: `${((currentIndex + 1) / testimonialsData.length) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundShape1}></div>
        <div className={styles.backgroundShape2}></div>
        <div className={styles.backgroundShape3}></div>
      </div>
    </section>
  )
}

export default Testimonials
