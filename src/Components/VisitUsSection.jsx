import React from 'react';

const VisitUsSection = () => {
  return (
    <section className="bg-[#1C1C1E] text-white py-20 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0">
        
        {/* Opening Hours */}
        <div className="w-full md:w-2/3 space-y-10 mr-12">
          <h2 className="text-5xl font-extrabold text-white mb-8">
            <span className="bg-gradient-to-r from-[#FF5733] via-[#AF4448] to-[#C70039] bg-clip-text text-transparent">
              Visit Us
            </span>
          </h2>
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-gray-600 pb-4">
              <p className="text-xl font-semibold text-gray-300">Mon - Fri</p>
              <p className="text-xl text-[#F1F1F1]">9:00 am – 6:00 pm</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full md:w-2/3 rounded-lg shadow-lg overflow-hidden relative group transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="h-96 relative overflow-hidden rounded-lg transition-transform duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7239.560063799827!2d67.07539501507449!3d24.871361311319884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eb449b8f3e3%3A0xb73220b339141d93!2sTechsol%20Solutions!5e0!3m2!1sen!2s!4v1729509618583!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="absolute inset-0 rounded-lg"
            ></iframe>
          </div>

          {/* Floating Info Box */}
          <div className="absolute bottom-5 left-5 bg-black bg-opacity-70 text-white p-4 rounded-lg shadow-md backdrop-blur-md">
            <h3 className="text-lg font-bold">Head Office</h3>
            <p className="text-sm">36-E/1 Block-6, PECHS, Karachi</p>
            <a
              href="https://maps.google.com"
              className="text-[#FF5733] hover:text-[#AF4448] underline transition-colors duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
