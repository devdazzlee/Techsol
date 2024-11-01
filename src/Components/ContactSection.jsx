import React from "react";
import ContactImge from '../Images/Contact_Form.webp';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-[#141416] text-white py-20 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <img
            src={ContactImge}
            alt="Professional Meeting"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 md:pl-16">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Get in Touch
          </h2>
          <p className="text-lg font-light mb-6 leading-relaxed">
            Have a question, project idea, or need for expert consultation? We're here to help. Reach out to Techsol Solutions, your trusted partner for IT solutions across Pakistan.
          </p>

          {/* Contact Information */}
          <div className="mb-8">
            <p className="font-semibold text-xl">Techsol Solutions HQ</p>
            <p className="text-gray-400">
              <a href="mailto:info@techsolsol.com" className="hover:text-white transition duration-200">
                info@techsolsol.com
              </a>{" "}
              | +92 21 343701647
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-4 text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A181A] shadow-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-4 text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A181A] shadow-lg"
              />
            </div>
            <input
              type="email"
              placeholder="Email *"
              className="w-full p-4 text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A181A] shadow-lg"
            />
            <textarea
              placeholder="Message"
              className="w-full p-4 text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A181A] shadow-lg h-32"
            ></textarea>
            <button className="px-8 py-4 bg-gradient-to-r from-[#8A181A] to-red-600 text-white rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-[#8A181A] focus:ring-opacity-50 transition duration-300 shadow-lg">
              Submit
            </button>
          </form>

          {/* Social Media Links */}
          <div className="mt-8 flex space-x-6 text-lg">
            <a href="https://www.linkedin.com/company/techsol-solutions/?viewAsMember=true" className="hover:text-gray-300 transition duration-200">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/techsols0lutions" className="hover:text-gray-300 transition duration-200">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/techsol08/?igsh=OWprdzlpazlsd3A5" className="hover:text-gray-300 transition duration-200">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
