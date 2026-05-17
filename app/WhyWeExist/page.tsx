import React from 'react'
import HeroWhy from '../components/landing/why-we-exist/hero'
import FoundationSection from '../components/landing/why-we-exist/purpose'
import FounderSection from '../components/landing/why-we-exist/founder'
import ManifestoSection from '../components/landing/why-we-exist/manifesto'
import CTA from '../components/CTA'
import FAQSection from '../components/landing/why-we-exist/FAQ'

const page = () => {
  return (
    <div>
      <HeroWhy/>
      <FoundationSection/>
      <FounderSection/>
      <ManifestoSection/>
      <FAQSection/>
      <CTA/>
    </div>
  )
}

export default page