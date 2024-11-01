import React, { useRef } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import databaseImage3 from "../../Images/printing-imaging.webp";
import databaseImage5 from "../../Images/crop-woman-putting-ink-in-printer-2023-11-27-05-25-03-utc.jpg";
import databaseImage6 from "../../Images/close-up-modern-printer-screen-in-office-2023-11-27-04-54-36-utc.jpg";
import Printer_Banner from "../../Components/Printer_Banner";
import ReusableSection from "../../Components/DatabaseOperatingSystems";

const Printing_Solutions = () => {
  const solutionsRef = useRef(null);

  const scrollToSolutions = () => {
    solutionsRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log(">>>>");
  };

  return (
    <>
      <Navbar />
      <Printer_Banner onExploreClick={scrollToSolutions} />
      <ReusableSection
        ref={solutionsRef} // Pass ref to this instance of ReusableSection
        heading="Visual and Document Output Solutions"
        description="In today’s fast-paced business environment, finding an efficient office printing and Document Management solution is crucial for maintaining productivity and reducing operational costs. An effective office printing solution not only streamlines document workflow but also enhances collaboration among team members. Companies often face challenges such as high printing costs, excessive paper usage, and inefficient printer management. By implementing a comprehensive printing strategy that includes multi-functional printers, cloud connectivity, and document management software, businesses can significantly improve their printing efficiency."
        image={databaseImage3}
        altText="Database Management"
      />
      <ReusableSection
        isBlack={true}
        heading="Managed Printing Solution"
        description="Managed Print Solutions (MPS) have emerged as a critical component for businesses seeking to optimize their printing processes, reduce costs, and enhance productivity. By outsourcing the management of printing tasks to specialized providers, organizations can simplify their operations and alleviate the burden on internal IT resources. MPS encompasses a range of services, including centralized print management, automated supply replenishment, and comprehensive printing analytics, which help organizations gain better visibility into their print usage and identify opportunities for improvement."
        image={databaseImage5}
        altText="Database Management"
        reverse={true}
      />
      <ReusableSection
        heading="Document Management and Scanning Solutions"
        description="A Document Management Solution (DMS) is an integral part of modern organizational infrastructure, designed to streamline the process of handling electronic documents and crucial information. By digitizing and organizing documents, a DMS facilitates easier retrieval, sharing, and collaboration among team members, thereby enhancing productivity and efficiency. In today's fast-paced business environment, where data access and security are paramount, a robust DMS not only reduces the risk of information loss but also ensures that sensitive documents are protected through user authentication and encryption protocols."
        image={databaseImage6}
        altText="Database Management"
      />
      <Footer />
    </>
  );
};

export default Printing_Solutions;


