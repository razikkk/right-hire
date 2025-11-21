import React from 'react'
import Navbar from '../components/Navbar'

import AboutSection from '../sections/AboutSection/AboutSection'
import FeaturedCategories from '../sections/FeaturedCategories/FeaturedCategories'
import WhyChooseUsSection from '../sections/WhyChooseUs/WhyChooseUsSection'
import CtaSection from '../sections/CTA/CtaSection'
import Footer from '../sections/FooterSection/Footer'
import HeroSectionHome from '../sections/heroSection/HeroSectionHome'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSectionHome/>
        <AboutSection/>
        <FeaturedCategories/>
        <WhyChooseUsSection/>
        <CtaSection/>
        <Footer/>
    </div>
  )
}

export default Home