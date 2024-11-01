import React, { useRef } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ReusableSection from "../../Components/DatabaseOperatingSystems";
import databaseImage from "../../Images/database-icon-hd-png-download.png";
import scotGram from "../../Images/Designing-Solution.jpg";
import ReusableSectionWithVideo from "../../Components/OracleServicesSection";
import SoftwareLicenseBanner from "../../Components/Software_License_Ban";
import video3 from "../../Images/Video3.mp4";

const Software_Licenses = () => {
  const databaseSectionRef = useRef(null);

  const scrollToDatabaseSection = () => {
    databaseSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const oracleSectionData = {
    videoSrc: video3,
    title: "Why Choose Techsol Solutions for Oracle Services?",
    sections: [
      {
        subheading: "Expertise:",
        content:
          "With extensive experience in Oracle technologies, our team is equipped to deliver solutions that meet the highest standards of performance and reliability.",
      },
      {
        subheading: "Comprehensive Solutions:",
        content:
          "From cloud infrastructure and enterprise applications to database management and consulting services, we offer a full spectrum of Oracle solutions tailored to your business needs.",
      },
      {
        subheading: "Customer-Centric Approach:",
        content:
          "We prioritize your business objectives and work closely with you to deliver solutions that drive operational efficiency and innovation.",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <SoftwareLicenseBanner onLearnMoreClick={scrollToDatabaseSection} />

      <ReusableSection
        ref={databaseSectionRef}
        heading="Database & Operating Systems"
        description="Techsol Solutions is your go-to place for all your database and operating system needs. We offer licensing and implementation for industry-leading solutions like Oracle, ensuring optimal data management. Additionally, we provide Microsoft Windows operating system, Microsoft Office Suite, and Server products, equipping your workforce with the essential tools for productivity."
        image={databaseImage}
        altText="Database Management"
      />
      <ReusableSection
        heading="Designing Solution"
        description="Techsol Solutions proudly partners with ZWSoft to provide cutting-edge CAD/CAM software to fulfill industry needs. The newest ZWSoft versions, ZW3D 2025 and ZWCAD 2025 improve design efficiency and accuracy with powerful AI and 3D modules. These software advancements enable complicated modeling, data integration, and project management. Techsol Solutions optimizes design and production processes using ZWSoft’s innovative technology, increasing efficiency and creativity."
        image={scotGram}
        altText="Designing Solution"
        reverse={true}
      />
      <ReusableSectionWithVideo {...oracleSectionData} />
      <Footer />
    </>
  );
};

export default Software_Licenses;
