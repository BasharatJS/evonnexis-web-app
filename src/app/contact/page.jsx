// app/contact/page.js
'use client'

import ContactCTA from '@/components/contact-cta/ContactCTA'
import ContactDetails from '@/components/contact-detail/ContactDetails'
import ContactHero from '@/components/contact-hero/ContactHero'
import FAQ from '@/components/faq/FAQ'

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactDetails />
      <FAQ />
      <ContactCTA />
    </div>
  )
}
