import React, { useRef } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ContactBanner from "../../Components/ContactBanner";
import ContactSection from "../../Components/ContactSection";
import VisitUsSection from "../../Components/VisitUsSection";
import LocationsSection from "../../Components/LocationsSection";

const Contact = () => {
  const contactRef = useRef(null);

  const scrollToContactSection = () => {
    console.log("scrollToContactSection"); // This will log when button is clicked
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <ContactBanner onGetInTouchClick={scrollToContactSection} />
      <ContactSection ref={contactRef} />
      <LocationsSection />
      <VisitUsSection />
      <Footer />
    </>
  );
};

export default Contact;
