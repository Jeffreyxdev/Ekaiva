

const Timeline = () => {
  const timelineData = [
  {
    id: 1,
    time: "Day 1",
    title: "Arrival in Dubai | Dhow Dinner Cruise",
    description:
      "Arrive in Dubai and check in to your hotel. In the evening, enjoy a Dhow Cruise along Dubai Marina with an international buffet, Tanoura dance, and stunning skyline views. Overnight stay in Dubai.",
    image:
      "https://images.unsplash.com/photo-1590140568849-f27028e1f822?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Day 2",
    title: "Half-Day Dubai City Tour | Desert Safari with BBQ",
    description:
      "Begin with a guided city tour covering Dubai Creek, Gold & Spice Souks, Jumeirah Mosque, Atlantis Palm, and more. In the afternoon, head for Desert Safari with dune bashing, camel rides, henna art, and a BBQ dinner with belly dance and fire show under the stars.",
    image:
      "https://images.unsplash.com/photo-1504278599468-225fceec5793?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Day 3",
    title: "Burj Khalifa Visit | Transfer to Abu Dhabi",
    description:
      "After breakfast, visit the iconic Burj Khalifa and enjoy breathtaking panoramic views from the 124th floor. Later, drive to Abu Dhabi and check in at your hotel. Spend the evening exploring cafés or relaxing at leisure.",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d8?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "Day 4",
    title: "Half-Day Abu Dhabi City Tour",
    description:
      "Visit the magnificent Sheikh Zayed Grand Mosque, admire Emirates Palace from outside, explore Corniche Beach and Heritage Village, and shop for dates and souvenirs at the Date Market before returning to your hotel.",
    image:
      "https://images.unsplash.com/photo-1589802829985-817a888ea438?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Day 5",
    title: "Ferrari World & Warner Bros Studio",
    description:
      "Experience thrill and excitement at Ferrari World, home to the world’s fastest roller coaster, Formula Rossa. Then explore Warner Bros Studio, themed worlds like Gotham City and Cartoon Junction. Overnight stay in Abu Dhabi.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 6,
    time: "Day 6",
    title: "Departure",
    description:
      "After breakfast, check out and transfer to Abu Dhabi International Airport. Depart with unforgettable memories of luxury, culture, and adventure.",
    image:
      "https://images.unsplash.com/photo-1536323760109-ca8c07450053?w=800&h=500&fit=crop",
    direction: "left",
  },
];


  return (
    <div className="py-20 px-4">
      <div className="mmx-auto bg-white rounded-2xl p-10 sm:p-8 md:p-16">
        {/* Header */}
        <div className="text-center mb-12  md:mb-16">
          <button className="px-4 py-1.5 border border-gray-300 rounded-full text-gray-600 text-sm mb-6 hover:bg-gray-100 transition">
            Day Itinerary
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-snug mb-4">
            Your same-day Taj Mahal Experience 
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From sunrise to sunset, explore Agra’s most iconic treasures in
            comfort and style — with seamless transfers, curated experiences,
            and local expertise at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 md:mt-20">
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
              <div className="w-full md:w-1/2 px-9 md:px-10 mt-8 md:mt-0 sm:ml-10 lg:ml-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full h-48 object-cover  shadow-sm"
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
