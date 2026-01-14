// import { useState } from 'react'

// import Services from "../src/services/Services";
// import Header from "../src/header/Header";
// import HeroSection from "../src/heroSection/HeroSection"
// import  './index.css'
// import JobApplicationForm from './JobApplication/jobapplication';
// import ContactUs from './contactus/contactUs';
// import Footer from './footer/footer';
// import About from './About/about';
// import SocialSidebar from './SocialMedia/SocialSidebar';
// import contactusPage from './contactus/contactusPage';
// function App() {
  

//   return (
//     <>
//     <SocialSidebar/>
//     <Header/>
//     <HeroSection/>
//     <About/>
//      <Services />
//      <JobApplicationForm/>
//     <ContactUs/>
//     <Footer/>
//     </>
//   )
// }

// export default App
import { Routes, Route } from "react-router-dom";

import Header from "./header/Header";
import SocialSidebar from "./SocialMedia/SocialSidebar";

import Home from "./pages/Home";
import ContactPage from "./contactus/ContactPage";
import Footer from "./footer/footer";
import CareersPage from "./Careers/CareersPage";
import JobDetailsPage from "./Careers/JobDetailsPage";
import WhyChooseUs from "./Whywechoose/WhyChoose";
import "./index.css";


function App() {
  return (
    <>
      <SocialSidebar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:id" element={<JobDetailsPage/>}/>
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/whychoose" element={<WhyChooseUs/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
