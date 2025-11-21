import React from 'react'
import ContactInfo from '../sections/ContactInfo/ContactInfo'
import Navbar from '../components/Navbar'
import ContactForm from '../sections/ContactForm/ContactForm'
import FAQPage from '../sections/FAQ/FaqSection'
import Footer from '../sections/FooterSection/Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <ContactInfo/>
    <ContactForm/>
    <FAQPage/>
    <Footer/>
    </>
  )
}

export default Contact