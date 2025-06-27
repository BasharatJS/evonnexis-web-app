// app/about/page.js
'use client'

import AboutCTA from '@/components/about-cta/AboutCTA'
import AboutDetail from '@/components/about-detail/AboutDetail'
import AboutHero from '@/components/about-hero/AboutHero'
import MeetTeam from '@/components/team-member/MeetTeam'

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutDetail />
      <MeetTeam />
      <AboutCTA />
    </div>
  )
}
