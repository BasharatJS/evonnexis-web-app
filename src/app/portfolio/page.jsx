// app/portfolio/page.js
'use client'

import DevelopmentProcess from '@/components/development-process/DevelopmentProcess'
import PortfolioDetail from '@/components/portfolio-detail/PortfolioDetail'
import PortfolioHero from '@/components/portfolio-hero/PortfolioHero'

export default function PortfolioPage() {
  return (
    <div>
      <PortfolioHero />
      <PortfolioDetail />
      <DevelopmentProcess />
    </div>
  )
}
