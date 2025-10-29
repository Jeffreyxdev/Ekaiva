

const Timeline = () => {
const timelineData = [
  {
    id: 1,
    time: "Day 1 — Arrival",
    title: "Welcome to Dubai",
    description:
      "Arrive at Dubai International Airport and enjoy a smooth transfer to your hotel. Spend the evening at leisure exploring nearby malls or relaxing after your flight.",
    image:
      "https://images.unsplash.com/photo-1510665724063-f77a01074aa2?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Day 2 — Morning to Evening",
    title: "Iconic Dubai City Tour",
    description:
      "Begin your city exploration with visits to the Burj Khalifa, Dubai Frame, and Jumeirah Mosque. Capture scenic views along Jumeirah Beach, Palm Jumeirah, and Atlantis The Phttps://images.unsplash.com/photo-1603262110263-fb0112e7cc33?alm before ending at the Dubai Mall fountain show.",
    image:
      "https://plus.unsplash.com/premium_photo-1697729749013-d5263b662999?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Day 3 — Morning",
    title: "Old Dubai Heritage & Shopping",
    description:
      "Step back in time at Al Fahidi Historical District and the Gold and Spice Souks. Ride an abra (water taxi) across Dubai Creek, and spend the afternoon shopping or relaxing at your hotel pool.",
    image:
      "https://images.unsplash.com/photo-1588408687414-434a389defac?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "Day 4 — Afternoon & Evening",
    title: "Desert Safari Adventure",
    description:
      "Head into the Arabian Desert for dune bashing, camel rides, and sandboarding. Enjoy a traditional BBQ dinner under the stars with live belly dance and tanoura performances before returning to the city.",
    image:
      "https://images.unsplash.com/photo-1615747476328-41153cf6da54?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Day 5 — Full Day",
    title: "Abu Dhabi Excursion",
    description:
      "Travel to the UAE’s capital to visit Sheikh Zayed Grand Mosque, the Louvre Abu Dhabi, and Yas Island. Enjoy panoramic views of the Corniche and return to Dubai in the evening.",
    image:
      "https://images.unsplash.com/photo-1664906939378-22d8b1c240b1?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 6,
    time: "Day 6 — Evening",
    title: "Leisure & Dhow Cruise Dinner",
    description:
      "Relax at leisure or opt for optional tours like skydiving over the Palm or a beach day at JBR. In the evening, enjoy a romantic dhow cruise dinner along Dubai Marina with stunning city lights.",
    image:
      "https://plus.unsplash.com/premium_photo-1734581719459-9f208733ebdd?w=800&h=400&fit=crop",
    direction: "left",
  },
  {
    id: 7,
    time: "Day 7 — Morning",
    title: "Departure from Dubai",
    description:
      "After breakfast, spend your final hours shopping for souvenirs or relaxing before your private airport transfer. Depart with unforgettable memories of the Emirates.",
    image:
      "https://images.unsplash.com/photo-1580562419526-6ee56d2e617f?w=800&h=500&fit=crop",
    direction: "right",
  },
];



  return (
    <div className="py-20 px-4">                                                                                                                                                                                                                                                                                                                                                                                            
      <div className="mx-auto bg-white rounded-2xl p-10 md:p-16 sm:p-8">
        {/* Header */}
        <div className="text-center md:mb-16 mb-16">
          <button className="px-4 py-1.5 border border-gray-300 rounded-full text-gray-600 text-sm mb-6 hover:bg-gray-100 transition">
            Day Itinerary
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-snug mb-4">
            Your two-Day Dehli Experience
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From sunrise to sunset, explore Dehli most iconic treasures in
            comfort and style — with seamless transfers, curated experiences,
            and local expertise at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 md:mt-20">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 transform -translate-x-1/2"></div>
          <div className="block md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gray-300"></div>
          {timelineData.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center mb-20 relative ${
                item.direction === "left"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              }`}
            >
              {/* Text Content */}
              <div
                className={`w-full md:w-1/2 px-8 md:px-10 ${
                  item.direction === "left" ? "md:text-left" : "md:text-right"
                }`}
              >
                <p className="text-sm text-gray-500 mb-3 sm:ml-3">{item.time}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:ml-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 sm:leading-96 md:leading-relaxed sm:ml-3">
                  {item.description}
                </p>
              </div>

              {/* Marker */}
              <div className={`
              absolute 
              flex items-center justify-center 
              w-7 h-7 md:w-10 md:h-10 
              bg-gray-900 text-white rounded-full 
              border-4 border-white shadow-md z-10
              ${item.direction === "left" ? "md:left-1/2 md:-translate-x-1/2" : "md:left-1/2 md:-translate-x-1/2"}
              left-0.5 md:left-1/2 md:-translate-x-1/2
            `}>
                {item.id}
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 px-8 md:px-10 mt-8 md:mt-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full h-48 object-cover shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
