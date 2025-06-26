// app/page.js

import CtaSection from '@/components/cta-section/CtaSection'
import HomeHero from '@/components/home-hero/HomeHero'
import HomeServices from '@/components/home-services/HomeServices'
import Testimonials from '@/components/testimonials/Testimonials'
import WhyChoose from '@/components/WhyChooseUs/WhyChoose'

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <HomeServices />
      <WhyChoose />
      <CtaSection />
      <Testimonials />
    </div>
  )
}
