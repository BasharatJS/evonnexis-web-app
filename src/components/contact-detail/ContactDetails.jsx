'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  Code,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
} from 'lucide-react'
import styles from './ContactDetails.module.css'

// Dynamic import for map to avoid SSR issues
const ContactMap = ({ center, address }) => {
  const [isClient, setIsClient] = useState(false)
  const [mapComponents, setMapComponents] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Import CSS first
      import('leaflet/dist/leaflet.css')

      // Then import React Leaflet and Leaflet
      Promise.all([import('react-leaflet'), import('leaflet')])
        .then(([reactLeaflet, leaflet]) => {
          const L = leaflet.default

          // Fix for default markers
          delete L.Icon.Default.prototype._getIconUrl
          L.Icon.Default.mergeOptions({
            iconRetinaUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
          })

          // Create custom purple marker icon
          const customIcon = new L.Icon({
            iconUrl:
              'data:image/svg+xml;base64,' +
              btoa(`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="60">
                  <path fill="#8b5cf6" stroke="white" stroke-width="1" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="3" fill="white"/>
                </svg>
              `),
            iconSize: [45, 60],
            iconAnchor: [22.5, 60],
            popupAnchor: [0, -60],
            shadowUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [60, 60],
            shadowAnchor: [18, 60],
          })

          setMapComponents({
            MapContainer: reactLeaflet.MapContainer,
            TileLayer: reactLeaflet.TileLayer,
            Marker: reactLeaflet.Marker,
            Popup: reactLeaflet.Popup,
            customIcon: customIcon,
          })
          setIsClient(true)
        })
        .catch((error) => {
          console.error('Error loading map:', error)
        })
    }
  }, [])

  if (!isClient || !mapComponents) {
    return <div className={styles.mapLoading}>🗺️ Loading Map...</div>
  }

  const { MapContainer, TileLayer, Marker, Popup, customIcon } = mapComponents
  const mapCenter = center || [18.5204, 73.8567] // Pune coordinates

  return (
    <MapContainer
      center={mapCenter}
      zoom={13}
      className={styles.leafletMap}
      scrollWheelZoom={true}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mapCenter} icon={customIcon}>
        <Popup>
          <div className={styles.popupContent}>
            <h3>Evonnexis Solutions</h3>
            <div className={styles.popupInfo}>
              <p>📍 {address}</p>
            </div>
            <div className={styles.popupContact}>
              <p>📞 +91 98765 43210</p>
              <p>📞 +91 87654 32109</p>
              <p>✉️ info@evonnexis.com</p>
            </div>
            <div className={styles.popupHours}>
              🕒 Mon-Sat: 9AM-7PM | Sun: By Appointment
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: false, threshold: 0.1 })

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-commerce Solutions',
    'Custom Software',
    'Digital Marketing',
    'Consulting',
    'Other',
  ]

  const budgetRanges = [
    'Under ₹1 Lakh',
    '₹1 - ₹3 Lakhs',
    '₹3 - ₹5 Lakhs',
    '₹5 - ₹10 Lakhs',
    '₹10 Lakhs+',
    'To be discussed',
  ]

  const contactInfo = {
    address: 'Handewadi, Hadapsar, Pune, 411028',
    phone: ['+91 98765 43210', '+91 87654 32109'],
    email: 'info@evonnexis.com',
    coordinates: [18.5204, 73.8567], // Pune coordinates
    hours: {
      weekdays: 'Mon - Sat: 9:00 AM - 7:00 PM',
      weekend: 'Sunday: By Appointment',
    },
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setShowSuccess(true)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })

      setTimeout(() => setShowSuccess(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-details" className={styles.contactSection}>
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
              rotateY: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Phone size={40} />
          </motion.div>

          <motion.span
            className={styles.sectionTag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Contact Us
          </motion.span>

          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Let's Bring Your Vision to Life
          </motion.h2>

          <motion.p
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Ready to transform your ideas into reality? Get in touch with our
            expert development team for a free consultation.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Visit Our Office Section */}
          <motion.div
            className={styles.officeSection}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className={styles.officeCard}>
              <h3>Visit Our Office</h3>

              <div className={styles.officeDetails}>
                <div className={styles.officeItem}>
                  <div className={styles.officeIcon}>
                    <MapPin size={20} />
                  </div>
                  <div className={styles.officeInfo}>
                    <h4>Address</h4>
                    <p>{contactInfo.address}</p>
                  </div>
                </div>

                <div className={styles.officeItem}>
                  <div className={styles.officeIcon}>
                    <Phone size={20} />
                  </div>
                  <div className={styles.officeInfo}>
                    <h4>Phone Numbers</h4>
                    <div className={styles.phoneLinks}>
                      {contactInfo.phone.map((phone, index) => (
                        <a
                          key={index}
                          href={`tel:${phone}`}
                          className={styles.contactLink}
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.officeItem}>
                  <div className={styles.officeIcon}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.officeInfo}>
                    <h4>Email Address</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className={styles.contactLink}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className={styles.officeItem}>
                  <div className={styles.officeIcon}>
                    <Clock size={20} />
                  </div>
                  <div className={styles.officeInfo}>
                    <h4>Business Hours</h4>
                    <p>
                      {contactInfo.hours.weekdays}
                      <br />
                      {contactInfo.hours.weekend}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className={styles.socialSection}>
                <h4>Follow Us</h4>
                <div className={styles.socialLinks}>
                  <motion.a
                    href="#"
                    className={`${styles.socialLink} ${styles.facebook}`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Facebook size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className={`${styles.socialLink} ${styles.twitter}`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Twitter size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className={`${styles.socialLink} ${styles.instagram}`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Instagram size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className={`${styles.socialLink} ${styles.linkedin}`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            ref={formRef}
            className={styles.formSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            {/* Success Message */}
            <motion.div
              className={`${styles.successMessage} ${
                showSuccess ? styles.show : ''
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: showSuccess ? 1 : 0,
                scale: showSuccess ? 1 : 0.8,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.successContent}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3>Thank You!</h3>
                <p>
                  Your message has been sent successfully. We'll get back to you
                  within 24 hours.
                </p>
              </div>
            </motion.div>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              {/* Form Title */}
              <div className={styles.formTitle}>
                <h3>Send Us a Message</h3>
              </div>

              <div className={styles.formGrid}>
                {/* Full Name */}
                <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={errors.fullName ? styles.error : ''}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <span className={styles.errorMessage}>
                      {errors.fullName}
                    </span>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? styles.error : ''}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email}</span>
                  )}
                </motion.div>

                {/* Phone */}
                <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? styles.error : ''}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <span className={styles.errorMessage}>{errors.phone}</span>
                  )}
                </motion.div>

                {/* Service */}
                <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="service">Service Required *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={errors.service ? styles.error : ''}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <span className={styles.errorMessage}>
                      {errors.service}
                    </span>
                  )}
                </motion.div>

                {/* Budget */}
                {/* <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((budget, index) => (
                      <option key={index} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </motion.div> */}

                {/* Message */}
                <motion.div
                  className={`${styles.formGroup} ${styles.formGroupFull}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? styles.error : ''}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    rows="6"
                  />
                  {errors.message && (
                    <span className={styles.errorMessage}>
                      {errors.message}
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.loadingSpinner}></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className={styles.mapSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
        >
          <div className={styles.mapContainer}>
            <ContactMap
              center={contactInfo.coordinates}
              address={contactInfo.address}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactDetails
