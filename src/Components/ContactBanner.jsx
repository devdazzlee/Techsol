import React from "react";
import bgImage from '../Images/Contact_Banner.webp';

const ContactBanner = ({ onGetInTouchClick }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-500 ease-in-out"></div>

      {/* Floating Particles for a professional touch */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-32 h-32 bg-white opacity-5 rounded-full absolute bottom-1/3 right-1/4 transform animate-ping"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-wide leading-tight drop-shadow-lg">
          Contact Techsol Solutions: Your Partner in Innovation
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 drop-shadow-md max-w-2xl mx-auto">
          Ready to transform your business with technology? We’re here to help.
          Reach out to Techsol Solutions, your trusted partner for IT solutions across Pakistan.
        </p>
        <button
          onClick={onGetInTouchClick}
          className="inline-block bg-gradient-to-r from-[#8A181A] to-[#E85A4F] text-white px-6 py-3 rounded-full text-lg lg:text-xl font-semibold shadow-lg hover:from-[#E85A4F] hover:to-[#8A181A] transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default ContactBanner;
