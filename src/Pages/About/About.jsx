import React, { useRef } from "react";
import About_banner from "../../Components/About_Banner";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import AboutUs_Detail from "../../Components/AboutUs_Detail";
import CEOMessage from "../../Components/CEOMessage";
import CompanyOverview from "../../Components/CompanyOverview";

const About = () => {
  const aboutUsRef = useRef(null);

  const scrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <About_banner onLearnMoreClick={scrollToAboutUs} />
      <AboutUs_Detail ref={aboutUsRef} />
      <CompanyOverview />
      <CEOMessage />
      <Footer />
    </>
  );
};

export default About;
