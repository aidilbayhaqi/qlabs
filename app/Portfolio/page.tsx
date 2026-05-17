import React from 'react'
import PortfolioPage from '../components/landing/portfolio/portfolio'
import { TopPortfolioSlider } from '../components/landing/portfolio/portoSlider'
import HeroPortfolio from '../components/landing/portfolio/hero'
import CTA from '../components/CTA'

const page = () => {
  return (
    <div>
        <HeroPortfolio/>
        <TopPortfolioSlider/>
        <PortfolioPage/>
        <CTA/>
    </div>
  )
}

export default page