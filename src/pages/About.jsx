import React from 'react'
import AboutHeroSection from '../sections/AboutHeroSection/AboutHeroSection'
import Navbar from '../components/Navbar'
import FaqSection from '../sections/FAQ/FaqSection'
import CoreValuesSection from '../sections/CoreValuesSection/CoreValuesSection'
import Footer from '../sections/FooterSection/Footer'
import CtaSection from '../sections/CTA/CtaSection'

const About = () => {
  return (
    <>
    <Navbar/>
    <AboutHeroSection/>
    <CoreValuesSection/>
    <FaqSection/>
    <CtaSection/>
    <Footer/>
    </>
  )
}

export default About