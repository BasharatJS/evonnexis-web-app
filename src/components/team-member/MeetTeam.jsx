'use client'
import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Github, Linkedin } from 'lucide-react'
import styles from './MeetTeam.module.css'

const MeetTeam = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(null)
  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })

  const teamMembers = [
    {
      id: 1,
      name: 'Afroz Ahmed',
      position: 'CEO & Founder',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'With over 8 years of experience in software development and business leadership, Afroz founded Evonnexis with a vision to create digital solutions that transform businesses.',
      skills: [
        'Leadership',
        'Strategy',
        'Full-Stack Development',
        'Business Development',
      ],
      github: 'https://github.com/afrozahmed',
      linkedin: 'https://linkedin.com/in/afrozahmed',
      gradient: ['#667eea', '#764ba2'],
    },
    {
      id: 2,
      name: 'Muhammad Firoz',
      position: 'Co-Founder & Business Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'Muhammad leads our business strategy and ensures we stay ahead of the curve in the market. He has a deep understanding of business dynamics and can help you navigate the complexities of the digital landscape.',
      skills: [
        'Business Analysis',
        'Market Research',
        'Strategy Planning',
        'Data Analytics',
      ],
      github: 'https://github.com/muhammadfiroz',
      linkedin: 'https://linkedin.com/in/muhammadfiroz',
      gradient: ['#06b6d4', '#22d3ee'],
    },
    {
      id: 3,
      name: 'Md Basharat Taquee',
      position: 'Lead Frontend Developer',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Md Basharat Taquee is a skilled frontend developer with a passion for creating intuitive user interfaces. With 3+ years of experience in web development, he has a strong foundation in modern JavaScript frameworks.',
      skills: [
        'React Native',
        'Expo',
        'Next Js',
        'React Js',
        'JavaScript',
        'TypeScript',
      ],
      github: 'https://github.com/sarahwilson',
      linkedin: 'https://linkedin.com/in/sarahwilson',
      gradient: ['#ef4444', '#f97316'],
    },
    {
      id: 4,
      name: 'Kaleem Mohideen',
      position: 'Lead Backend Developer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Mr leads the technical development of our mobile and web applications. He has a deep understanding of the latest technologies and can help you build the perfect solution for your business.',
      skills: [
        'Node Js',
        'Express Js',
        'Mongodb',
        'JavaScript',
        'TypeScript',
        'Firebase',
      ],
      github: 'https://github.com/kaleemmohideen',
      linkedin: 'https://linkedin.com/in/kaleemmohideen',
      gradient: ['#8b5cf6', '#a855f7'],
    },
    {
      id: 5,
      name: 'Khaleel Rahman',
      position: 'Client Solution Specialist',
      image:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face',
      bio: 'Khaleel leads our client-focused approach to digital solutions. He has a deep understanding of client needs and can help you design a solution that meets their specific requirements.',
      skills: [
        'Client Relations',
        'Solution Architecture',
        'Project Management',
        'Communication',
      ],
      github: 'https://github.com/khaleelrahman',
      linkedin: 'https://linkedin.com/in/khaleelrahman',
      gradient: ['#f59e0b', '#d97706'],
    },
  ]

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 380 // Increased for wider cards
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const doorVariants = {
    closed: {
      rotateY: 0,
      transformOrigin: 'left center',
    },
    open: {
      rotateY: -120,
      transformOrigin: 'left center',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
    },
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.3,
        type: 'spring',
        stiffness: 200,
      },
    },
  }

  return (
    <section className={styles.teamSection} ref={sectionRef}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>Meet Our Team</h2>
            <p className={styles.subtitle}>
              The talented people behind Evonnexis who make digital innovation
              possible
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div className={styles.controls} variants={itemVariants}>
            <button
              className={styles.scrollButton}
              onClick={() => scroll('left')}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={styles.scrollButton}
              onClick={() => scroll('right')}
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>

          {/* Team Cards Container */}
          <motion.div
            className={styles.scrollContainer}
            variants={itemVariants}
          >
            <div className={styles.cardsWrapper} ref={scrollContainerRef}>
              <div className={styles.cardsGrid}>
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className={styles.teamCard}
                    onMouseEnter={() => setActiveTeamMember(member.id)}
                    onMouseLeave={() => setActiveTeamMember(null)}
                  >
                    {/* Card Door (Default Content) */}
                    <motion.div
                      className={styles.cardDoor}
                      variants={doorVariants}
                      animate={
                        activeTeamMember === member.id ? 'open' : 'closed'
                      }
                    >
                      <div
                        className={styles.doorGradient}
                        style={{
                          background: `linear-gradient(135deg, ${member.gradient[0]}, ${member.gradient[1]})`,
                        }}
                      />

                      <div className={styles.doorContent}>
                        {/* Member Image */}
                        <div className={styles.memberImage}>
                          <img src={member.image} alt={member.name} />
                        </div>

                        {/* Member Info */}
                        <h3 className={styles.memberName}>{member.name}</h3>
                        <p className={styles.memberPosition}>
                          {member.position}
                        </p>
                        <p className={styles.memberBio}>{member.bio}</p>
                      </div>
                    </motion.div>

                    {/* Card Content (Hover Content) */}
                    <motion.div
                      className={styles.cardContent}
                      variants={contentVariants}
                      animate={
                        activeTeamMember === member.id ? 'visible' : 'hidden'
                      }
                    >
                      {/* Member Image (Same) */}
                      <div className={styles.memberImage}>
                        <img src={member.image} alt={member.name} />
                      </div>

                      {/* Member Info */}
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberPosition}>{member.position}</p>

                      {/* Skills Section */}
                      <div className={styles.skillsSection}>
                        <h4 className={styles.skillsTitle}>Skills</h4>
                        <div className={styles.skillsList}>
                          {member.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className={styles.skillTag}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social Buttons */}
                      <div className={styles.socialButtons}>
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialButton}
                        >
                          <Github size={20} />
                          <span>GitHub</span>
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialButton}
                        >
                          <Linkedin size={20} />
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MeetTeam
