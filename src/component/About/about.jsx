import React from 'react'
import HeroSection from './heroSection'
import Choose from '../Page.jsx/Choose'
import Gallery from '../Page.jsx/Gallery'
import Experience from './Experience'
import Vision from './Vision'
import Marquee from './marque'

function AboutSection() {
  return (
    <div className='bg-[#081228] text-white'>
      <div>
        <HeroSection></HeroSection>
        
        <Experience></Experience>
        <Vision></Vision>
        <Marquee></Marquee>
        <Gallery></Gallery>
      </div>
    </div>
  )
}

export default AboutSection
