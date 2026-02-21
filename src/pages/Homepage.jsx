import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import DedicatedDevelopers from "../components/DedicatedDevelopers";
import ProjectSlider from "../components/ProjectSlider";
import Industries from "../components/Industries";
import SoftwareInnovation from "../components/SoftwareInnovation";
import GlobalStatsSection from "../components/GlobalStatsSection";
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";
import Affiliations from "../components/Affiliations";
import BlogsSection from "../components/BlogSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <Hero />
      <Services />
      <DedicatedDevelopers />
      <ProjectSlider />
      <Industries />
      <SoftwareInnovation />
      <GlobalStatsSection />
      <ContactForm />
      <Testimonials />
      <Affiliations />
      <BlogsSection />
      <NewsletterSection />
    </div>
  );
}

export default Homepage;
