import React from "react";
import image1 from "../Images/Proactive.webp";
import image2 from "../Images/Network.webp";
import image3 from "../Images/coding_pt4.jpg";
import image4 from "../Images/Databackup.webp";
import image5 from "../Images/Security_Services.webp";

const ManagedServicesPortfolio = () => {
  return (
    <section className="bg-[#141416] text-white py-16 px-6">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Our Managed Services Portfolio</h2>
        <p className="text-lg text-gray-400 mt-4">
          At Techsol Solutions, our managed services are tailored to provide
          reliable, scalable, and efficient IT solutions that enhance your
          business operations:
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Service 1 */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
          <img
            src={image1}
            alt="Proactive Monitoring"
            className="w-full h-52 object-cover"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 w-full">
            <h3 className="font-bold">Proactive Monitoring and Support</h3>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
          <img
            src={image2}
            alt="Network Management"
            className="w-full h-52 object-cover"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 w-full">
            <h3 className="font-bold">Network Management</h3>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
          <img
            src={image3}
            alt="Cloud Services Management"
            className="w-full h-52 object-cover"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 w-full">
            <h3 className="font-bold">Cloud Services Management</h3>
          </div>
        </div>

        {/* Service 4 */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
          <img
            src={image4}
            alt="Data Backup"
            className="w-full h-52 object-cover"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 w-full">
            <h3 className="font-bold">Data Backup and Disaster Recovery</h3>
          </div>
        </div>

        {/* Service 5 */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
          <img
            src={image5}
            alt="Security Services"
            className="w-full h-52 object-cover"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 w-full">
            <h3 className="font-bold">Security Services</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedServicesPortfolio;
