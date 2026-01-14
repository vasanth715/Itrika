import HeroSection from "../heroSection/HeroSection";
import About from "../About/about";
import Services from "../services/Services";
import JobApplicationForm from "../JobApplication/jobapplication";
import Footer from "../footer/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <JobApplicationForm />
      
    </>
  );
}
