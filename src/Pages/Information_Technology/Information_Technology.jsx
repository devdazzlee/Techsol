import React, { useRef } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ReusableSection from "../../Components/DatabaseOperatingSystems";
import databaseImage from "../../Images/IT-1.webp";
import databaseImage2 from "../../Images/Enginnering_pt2.jpg";
import databaseImage3 from "../../Images/surveillance_1.jpg";
import databaseImage4 from "../../Images/IT-5.webp";
import databaseImage5 from "../../Images/printer-9.jpg";
import databaseImage6 from "../../Images/Interactive and Digital.jpg";
import databaseImage7 from "../../Images/SLA.jpg";
import ReusableSectionWithVideo from "../../Components/OracleServicesSection";
import ReusableAboutSection from "../../Components/AboutSection";
import information_technology from "../../Images/Information_Technology_Image.webp";
import video3 from "../../Images/Video3.mp4";
import Enginering_ProductSolutionBanner from "../../Components/Enginering_ProductSolutionBanner";
import ManagedServicesPortfolio from "../../Components/ManagedServicesPortfolio";

const Information_Technology = () => {
  const itInfrastructureRef = useRef(null);

  const scrollToITInfrastructure = () => {
    itInfrastructureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const oracleSectionData = {
    videoSrc: video3,
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
      <Enginering_ProductSolutionBanner
        onDiscoverMoreClick={scrollToITInfrastructure}
      />

      <ReusableSection
        ref={itInfrastructureRef} // Attach the ref here
        heading="IT Infrastructure Solutions / System Integration"
        description="Being a partner of Dell EMC, VMWare, Sangfor, H3C, HP, Veeam and Lenovo, gives us an edge in providing the capability and the best combination to provide optimal converged & hyper converged Infrastructure Solutions. With servers/storage solutions, Backup solutions & Racks & Micro data centers, we cover all your IT infrastructure needs like, Server/Storage & Solutions, Backup Solutions, Rack & Micro Data Center Solutions"
        image={databaseImage}
        altText="Database Management"
      />
<ManagedServicesPortfolio/>
      {/* Other sections */}
      <ReusableSection
        isBlack={true}
        heading="Backup Solutions"
        description="Techsol Solutions safeguards your business data with a comprehensive suite of backup solutions. We offer industry-leading technologies from brands like Dell and Veeam, ensuring robust protection for your operating systems, compute power, and storage needs. Our team of experts can design and implement a customized solution, guaranteeing peace of mind and data security in today's ever-evolving digital landscape."
        image={databaseImage2}
        altText="Database Management"
        reverse={true}
      />
      <ReusableSection
        heading="​Surveillance & Video Analytics Solutions "
        description="We offer advanced surveillance solutions, including cutting-edge video analytics, to provide you with real-time insights and improve security. Our comprehensive services encompass system design, installation, and ongoing maintenance, ensuring your surveillance system functions optimally. We cater to a wide range of needs, from basic monitoring to advanced video analytics that can identify anomalies and potential threats."
        image={databaseImage3}
        altText="Database Management"
      />

      <ReusableSection
        isGray={true}
        heading="IP/Networking & Cyber Security"
        description="Techsol Solutions can help you plan, design, set up, implement, and support both passive (structured cabling and related components) and active (switches, routers, access points, etc.) parts of the network for IP/Network & Solutions, Network Security, and Surveillance Solutions as partners of leading brands. Techsol Solutions secures networks using Firewalls (NGF & WAF), IDS & IPS, WIDPS, UTMs, NACs, IAMs, Load Balancers, Spam Filters, Antiviruses, and End Point Security"
        image={databaseImage4}
        altText="Database Management"
        reverse={true} // Image on the left side
      />
      <ReusableSection
        isBlack={true}
        heading="Client Computing and Printing"
        description="​Techsol Solutions is dedicated to offering a diverse range of client and end-user computing products that are specifically designed to boost productivity and efficiency. We provide a wide range of products, including desktops, laptops, printers, top notch devices, chrome books, chrome box, and thin/zero clients to meet the various requirements of businesses. We provide dependable and state-of-the-art technology solutions to ensure the smooth functioning of your business. With a strong emphasis on delivering exceptional quality and outstanding performance, Techsol Solutions guarantees that your team will have access to top-notch devices to drive their success."
        image={databaseImage5}
        altText="Database Management"
      />

      <ReusableSection
        heading="Interactive and Digital Display Solutions"
        description="Techsol Solutions excels in providing a wide range of Interactive and Digital Display Solutions to meet the diverse needs of modern businesses. Our offerings include state-of-the-art interactive displays, interactive boards, projectors, SMD screens, and smart mirrors. We also provide HD panels, digital signage, LCD video walls, smart TVs, LCD monitors, and floor-standing kiosks. With a focus on innovation and quality, Techsol Solutions delivers cutting-edge technology to enhance communication, engagement, and efficiency in any corporate environment."
        image={databaseImage6}
        altText="Database Management"
        reverse={true}
      />

      <ReusableSection
        isGray={true}
        heading="SLA's & Managed Services"
        description="A customer-centric policy framework is key to Techsol Solutions' service-oriented culture. When it comes to IT infrastructure service level agreements (SLAs), managed services, and process outsourcing, we are the perfect partner for you. We are experts in data centers, networking, printing, archiving, and end-user computing. With Techsol Solutions' specialized SLA services for servers, network devices, and other IT services, your organization can be certain that your IT operations will be dependable and efficient."
        image={databaseImage7}
        altText="Database Management"
        // Image on the left side
      />

      <ReusableSectionWithVideo {...oracleSectionData} />
      <ReusableAboutSection
        imageSrc={information_technology}
        title="Contact Us"
        description="Experience the benefits of a fully integrated technology ecosystem with Techsol Solutions. Partner with us to leverage our expertise and comprehensive services, and elevate your business to new heights. Contact us today to learn more about how our custom integration solutions can support your business growth and operational efficiency."
        buttonText="Contact Us"
      />
      {/* Additional sections */}
      <Footer />
    </>
  );
};

export default Information_Technology;
