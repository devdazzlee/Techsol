import React from "react";
import HeroSection from "../../Components/Banner_Home";
import ServicesSection from "../../Components/ServicesSection";
import ProductSpectrum from "../../Components/ProductSpectrum";
import WhyTechsolSection from "../../Components/WhyTechsolSection";
import PartnersSlider from "../../Components/PartnersSlider";
import StatsSection from "../../Components/StatsSection";
import ContactUsSection from "../../Components/ContactUsSection";
import ClientSlider from "../../Components/ClientsSlider";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ReusableAboutSection from "../../Components/AboutSection";
import Image1 from "../../Images/Home_About_Image.webp";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ReusableAboutSection
        imageSrc={Image1}
        title="About Techsol Solutions"
        description="Established in 2016, Techsol Solutions stands at the forefront of technology integration and engineering excellence. We are dedicated to delivering sophisticated, high-performance solutions that drive technological advancements and operational efficiency for businesses."
        buttonText="Learn More"
      />
      <ServicesSection />
      <ProductSpectrum />
      <WhyTechsolSection />
      <PartnersSlider />
      <StatsSection />
      <ClientSlider />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default Home;
