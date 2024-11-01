import React, { useRef } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Information_TechnologyBanner from "../../Components/Information_technologyBanner";
import ReusableSection from "../../Components/DatabaseOperatingSystems";
import image1 from "../../Images/DALL·E 2024-10-28 16.10.15 - A high-tech, professional image showcasing advanced Test & Measurement equipment in a modern laboratory or industrial setting. The scene includes devi.webp";
import ReusableSectionWithVideo from "../../Components/OracleServicesSection";
import databaseImage2 from "../../Images/Process_monitiring.jpg";
import databaseImage3 from "../../Images/young-people-working-with-digital-tablet-at-renewa-2023-11-27-05-35-51-utc.jpg";
import ReusableAboutSection from "../../Components/AboutSection";
import video2 from "../../Images/Video2.mp4";
import teamImage from "../../Images/TeamImage.webp";
const Engineering_Products = () => {
  const testMeasurementRef = useRef(null);

  const scrollToTestMeasurement = () => {
    testMeasurementRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  const oracleSectionData = {
    videoSrc: video2,
    title: "Why Choose Techsol Solutions for Custom Integration?",
    sections: [
      {
        subheading: "Unmatched Expertise:",
        content:
          "With extensive experience in IT and T&M, our team possesses the technical know-how to handle complex integration projects, delivering solutions that meet the highest standards of performance and reliability.",
      },
      {
        subheading: "Tailored Solutions:",
        content:
          "We understand that each business is unique. Our custom integration services are designed to address your specific challenges and requirements, providing solutions that drive efficiency and innovation.",
      },
      {
        subheading: "Comprehensive Approach:",
        content:
          "From initial consultation and design to implementation and ongoing support, we offer a complete range of services to ensure your integration project is successful and sustainable.",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Information_TechnologyBanner  onExploreClick={scrollToTestMeasurement}  />

      <ReusableSection
        ref={testMeasurementRef}
        heading="Test & Measurement"
        description="We represent world-leading Test & Measurement equipment brands like Fluke, Amprobe, Hioki, and Megger. Bringing thousands of products to meet the requirements of a diverse range of industries, we give our customers unique access to the largest range of carefully selected test & measurement equipment to meet their technical and budgetary requirements. Being OEM-authorized distributors and resellers, we also extend fully backed life cycle support for warranty, calibration as well as maintenance services. Our division aims to bring the next-generation products that enhance productivity and reduce downtime while minimizing defects."
        image={image1}
        altText="Test & Measurement"
      />

      
      <ReusableSectionWithVideo {...oracleSectionData} />

      <ReusableSection
        isBlack={true}
        heading="Process Monitoring, Management
& Automation"
        description="At Techsol Solutions, we understand the complexities of modern industrial processes. That's why we offer a comprehensive suite of industrial Process Monitoring, Management, and Automation Solutions. Our advanced systems provide real-time data insights, allowing for proactive maintenance, optimized production efficiency, and minimized downtime. We empower you to make data-driven decisions, ensuring seamless process control and a significant boost to your bottom line."
        image={databaseImage2}
        altText="Process Monitoring, Management
& Automation"
      />
      <ReusableSection
        heading="Alternate Energy & Power Backup Solutions"
        description="Techsol Solutions is an accredited supplier, and installer of Industrial UPS, Power Backups, and Solar energy-centric systems. We are the first choice for many commercial and domestic clients for a variety of renewable systems such as Solar Panels, Wind Turbines, Industrial UPS, Inverters, Dry Batteries & Battery Panels. At Techsol Solutions we apply a rigorous engineering approach, starting with energy profiling and leading methodically through design, verification, construction, and procedures that are uncompromising."
        image={databaseImage3}
        altText="Database Management"
        reverse={true}
      />

      <ReusableAboutSection
        imageSrc={teamImage}
        title="Contact Us"
        description="Experience the benefits of a fully integrated technology ecosystem with Techsol Solutions. Partner with us to leverage our expertise and comprehensive services, and elevate your business to new heights. Contact us today to learn more about how our custom integration solutions can support your business growth and operational efficiency."
        buttonText="Contact Us"
        onButtonClick={() => console.log("Button clicked")}
      />
      <Footer />
    </>
  );
};

export default Engineering_Products;
