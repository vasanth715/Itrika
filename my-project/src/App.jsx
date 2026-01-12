import { useState } from 'react'

import Services from "../src/services/Services";
import Header from "../src/header/Header";
import HeroSection from "../src/heroSection/HeroSection"
import  './index.css'
import JobApplicationForm from './JobApplication/jobapplication';
import ContactUs from './contactus/contactUs';
import Footer from './footer/footer'
function App() {
  

  return (
    <>
    <Header/>
    <HeroSection/>
     <Services />
     <JobApplicationForm/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App