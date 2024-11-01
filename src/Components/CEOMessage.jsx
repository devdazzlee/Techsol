import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../Images/About_CEO.webp";

const CEOMessage = () => {
  const messages = [
    {
      title: "CEO Message",
      message:
        "Dear Esteemed Readers, We are excited to present Techsol Solutions, where our team of experts continuously pushes the boundaries of innovation and establishes new standards in Test & Measurement, Industrial Automation, and IT Solutions & Services. Our steadfast commitment to upholding the highest standards of excellence and integrity has resulted in remarkable accomplishments. Discover our profile and witness our impact in these vibrant sectors. I appreciate your support.",
      signature: "Warm Regards, Dr. Shahzad Arshad, Chairman",
    },
    {
      title: "Our Vision",
      message:
        "At Techsol Solutions, we believe in fostering technological innovations that help drive businesses forward. Our vision is to become a global leader in IT solutions, providing  services to meet the ever evolving demands of the industry.",
      signature: "Techsol Team",
    },
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex + 1) % messages.length
      );
    }, 7000); // Automatically change message every 7 seconds
    return () => clearInterval(interval);
  }, [messages.length]);

  const currentMessage = messages[currentMessageIndex];

  const handleNext = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  const handlePrev = () => {
    setCurrentMessageIndex(
      (prevIndex) => (prevIndex - 1 + messages.length) % messages.length
    );
  };

  return (
    <section
      className="relative h-[500px] lg:h-[600px] bg-cover bg-center shadow-2xl"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content Slider */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-white text-center flex flex-col justify-center h-full">
        <div className="space-y-6">
          {/* Title */}
          <h2 className="text-5xl font-bold text-white mb-6 animate-slide-in-down">
            {currentMessage.title}
          </h2>

          {/* Message Text */}
          <p className="text-lg leading-relaxed mb-6 animate-fade-in">
            {currentMessage.message}
          </p>

          {/* Signature */}
          <p className="text-lg leading-relaxed mb-6 font-semibold">
            {currentMessage.signature}
          </p>
        </div>

        {/* Slider controls */}
        <div className="flex justify-center space-x-4 mt-8">
          {messages.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentMessageIndex === index
                  ? "bg-red-600"
                  : "bg-gray-400 hover:bg-red-400"
              }`}
              onClick={() => setCurrentMessageIndex(index)}
            ></button>
          ))}
        </div>

        {/* Arrow Controls */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button
            className="text-white bg-red-600 p-3 rounded-full hover:bg-red-500 transition"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button
            className="text-white bg-red-600 p-3 rounded-full hover:bg-red-500 transition"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
