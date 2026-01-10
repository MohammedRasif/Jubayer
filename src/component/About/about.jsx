import React from 'react'
import HeroSection from './heroSection'
import Choose from '../Page.jsx/Choose'
import Gallery from '../Page.jsx/Gallery'
import Experience from './Experience'

function AboutSection() {
  return (
    <div className='bg-[#081228] text-white'>
      <div>
        <HeroSection></HeroSection>
        <Choose></Choose>
        <Experience></Experience>
        <Gallery></Gallery>
      </div>
    </div>
  )
}

export default AboutSection
