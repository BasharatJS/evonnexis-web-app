// app/services/page.js
'use client'

import ServiceDetails from '@/components/service-detail/ServiceDetails'
import ServiceHero from '@/components/service-hero/ServiceHero'
import ServiceCTA from '@/components/services-cta/ServiceCTA'

export default function ServicesPage() {
  return (
    <div>
      <ServiceHero />
      <ServiceDetails />
      <ServiceCTA />
    </div>
  )
}
