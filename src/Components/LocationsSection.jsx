import React from 'react';
import image1 from '../Images/khi.png';
import image2 from '../Images/lhr.png';
import image3 from '../Images/isb.png';

const LocationSection = () => {
  const locations = [
    {
      city: "Karachi",
      address: "Head Office: 36-E/1, Block 6, PECHS, Shahrah e Faisal, Karachi, Pakistan.",
      phone: "+92 21 34370164-7",
      fax: "+92 21 34370167",
      email: "info@techsolsol.com",
      imageUrl: image1
    },
    {
      city: "Lahore",
      address: "Office no. 243, 2nd Floor, Landmark Plaza, 5/6 Jail Road, Gulberg V Lahore, Pakistan.",
      fax: "+92 306 8291396",
      phone: "+92 42 37874441",
      email: "info@techsolsol.com",
      imageUrl: image2
    },
    {
      city: "Islamabad",
      address: "Office no. 16, Second Floor, Zaki Center, I-8 Markaz, Islamabad, Pakistan.",
      fax: "+92 321 5455374",
      phone: "+92 51 2719054",
      email: "info@techsolsol.com",
      imageUrl: image3
    },
  ];

  return (
    <section className="bg-[#141416] text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-red-600">Our Locations</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-[#1B1C1E] rounded-lg shadow-lg p-8 w-full lg:w-1/3 text-left">
              <img
                src={location.imageUrl}
                alt={`${location.city} Location`}
                className="w-full h-64 object-cover rounded-md mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-semibold mb-4">{location.city}</h3>
              <p className="text-lg text-gray-400 mb-2">{location.address}</p>
              <p className="text-lg text-gray-400 mb-2">
                <strong>Phone:</strong> {location.phone}
              </p>
              {location.fax && (
                <p className="text-lg text-gray-400 mb-2">
                  <strong>{index === 0 ? 'Fax' : 'Mobile'}:</strong> {location.fax}
                </p>
              )}
              <p className="text-lg text-gray-400">
                <strong>Email:</strong> <a href={`mailto:${location.email}`} className="text-red-600">{location.email}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
