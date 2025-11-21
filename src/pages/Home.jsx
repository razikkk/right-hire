import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../sections/heroSection/HeroSection'
import AboutSection from '../sections/AboutSection/AboutSection'
import FeaturedCategories from '../sections/FeaturedCategories/FeaturedCategories'
import WhyChooseUsSection from '../sections/WhyChooseUs/WhyChooseUsSection'
import CtaSection from '../sections/CTA/CtaSection'
import Footer from '../sections/FooterSection/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <FeaturedCategories/>
        <WhyChooseUsSection/>
        <CtaSection/>
        <Footer/>
    </div>
  )
}

export default Home