import React from 'react'
import Hero from '../components/landing/home/hero'
import CaseStudyHero from '../components/landing/studycase/hero'
import CaseStudyChat from '../components/landing/studycase/studyCaseChat'
import CaseStudiesTesti from '../components/landing/studycase/studyCaseTesti'

const page = () => {
  return (
    <div>
        <CaseStudyHero/>
        <CaseStudyChat/>
        <CaseStudiesTesti/>
    </div>
  )
}

export default page