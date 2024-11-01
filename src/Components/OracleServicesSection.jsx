import React from "react";

const ReusableSectionWithVideo = ({ videoSrc, title, sections }) => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Section - Video */}
        <div className="lg:w-1/2 w-full">
          <video
            className="w-full h-[500px] object-cover rounded-xl shadow-md"
            autoPlay
            muted
            loop
            src={videoSrc}
          ></video>
        </div>

        {/* Right Section - Text */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-5xl font-bold mb-8 text-red-800">{title}</h2>
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-2xl text-red-800 mb-4">{section.subheading}</h3>
                <p className="text-lg leading-relaxed text-white">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableSectionWithVideo;
