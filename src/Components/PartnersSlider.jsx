import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Import local images
import img1 from '../Images/Our Partners/Dell - 1-01.png';
import img2 from '../Images/Our Partners/hioki.png';
import img3 from '../Images/Our Partners/ibm.png';
import img4 from '../Images/Our Partners/p10.png';
import img5 from '../Images/Our Partners/HP-01.png';
import img6 from '../Images/Our Partners/p16.png';
import img7 from '../Images/Our Partners/p5.png';
import img8 from '../Images/Our Partners/p9.png';
import img9 from '../Images/Our Partners/Sangfor-01.png';
import img10 from '../Images/Our Partners/Microsoft-01.png';
import img11 from '../Images/Our Partners/Oracle_Logo.png';
import img12 from '../Images/Our Partners/ZW Soft-01.png';
import img13 from '../Images/Our Partners/Barracuda-01-01.png';
import img14 from '../Images/Our Partners/Barracoda logo-01.png';
import img15 from '../Images/Our Partners/BnR.....-01.png';
import img16 from '../Images/Our Partners/Constructor-01.png';
import img17 from '../Images/Our Partners/Solarwinds-01.png';


const PartnersSlider = () => {
  const swiperRef = useRef(null);

  const partners = [
    { name: "Sangfor", logo: img9 },
    { name: "Dell", logo: img1 },
    { name: "Hioki", logo: img2 },
    { name: "IBM", logo: img3 },
    { name: "Partner 4", logo: img4 },
    { name: "Partner 5", logo: img5 },
    { name: "Partner 6", logo: img6 },
    { name: "Partner 7", logo: img7 },
    { name: "Partner 8", logo: img8 },
    { name: "Microsoft", logo: img10 },
    { name: "Oracle_Logo", logo: img11 },
    { name: "ZWsoft", logo: img12 },
    { name: "Barracuda", logo: img13 },
    { name: "SolarWinds", logo: img17 },
    { name: "BNR", logo: img15 },
    { name: "Constructer", logo: img16 },

    
  ];

  // Custom Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext(); // Manually trigger the next slide
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="bg-white py-10 flex justify-center">
      <div className="w-[80%] mx-auto">
        <h2 className="text-center text-5xl font-extrabold text-[#8A181A] mb-8">
          Our Partners
        </h2>

        {/* Swiper Component */}
        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={4} // Adjust the number of slides per view for desktop
            loop={true} // Loop enabled
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // Assign swiper instance to ref
            }}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-[120px] h-[130px] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-transparent text-black p-2 rounded-full hover:bg-[#8A181A] hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-transparent text-black p-2 rounded-full hover:bg-[#8A181A] hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnersSlider;
