

const Timeline = () => {
  const timelineData = [
  {
    id: 1,
    time: "Day 1 — Arrival",
    title: "Arrival in Delhi",
    description:
      "Arrive in Delhi, meet your local representative, and transfer to your hotel. Spend the rest of the day relaxing and preparing for your adventure ahead.",
    image:
      "https://images.unsplash.com/photo-1598977054780-2dc700fdc9d3?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Day 2 — Sightseeing",
    title: "Old & New Delhi City Tour",
    description:
      "Explore the vibrant contrasts of Delhi — visit Jama Masjid, India Gate, Red Fort (outside), Qutub Minar, Chandni Chowk, and more to capture the essence of India's capital.",
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Day 3 — Morning to Evening",
    title: "Delhi to Agra Journey",
    description:
      "Travel from Delhi to Agra. Upon arrival, visit Itmad-ud-Daulah (Baby Taj) and Mehtab Bagh for stunning sunset views of the Taj Mahal. Overnight stay in Agra.",
    image:
      "https://images.unsplash.com/photo-1582801396492-705377f39876?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "Day 4 — Sunrise & Travel",
    title: "Taj Mahal Sunrise & Drive to Jaipur",
    description:
      "Witness the Taj Mahal at sunrise, then explore Agra Fort before driving to Jaipur with a stop at the historic Fatehpur Sikri. Arrive in Jaipur for an overnight stay.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Day 5 — Full Day",
    title: "Jaipur City Tour & Elephant Ride",
    description:
      "Enjoy Jaipur’s highlights — Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal. Experience a traditional elephant ride, then travel to Pushkar for overnight stay.",
    image:
      "https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 6,
    time: "Day 6 — Exploration & Travel",
    title: "Pushkar & Journey to Jodhpur",
    description:
      "Discover Pushkar’s sacred lake, colorful markets, and temples. Take a short camel safari before driving to Jodhpur for an overnight stay.",
    image:
      "https://plus.unsplash.com/premium_photo-1697729555861-e406b4989ee1?w=800&h=400&fit=crop",
    direction: "left",
  },
  {
    id: 7,
    time: "Day 7 — Full Day",
    title: "Jodhpur Sightseeing",
    description:
      "Visit the magnificent Mehrangarh Fort, Jaswant Thada, and explore Jodhpur’s old city filled with blue houses and lively bazaars.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962404003-e0ca40da40ef?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 8,
    time: "Day 8 — En Route",
    title: "Jodhpur to Udaipur via Ranakpur",
    description:
      "Travel through scenic Rajasthan to Udaipur, stopping at the stunning marble Jain Temple in Ranakpur. Check into your Udaipur hotel for an evening at leisure.",
    image:
      "https://images.unsplash.com/photo-1654004753042-498b4d02e7ea?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 9,
    time: "Day 9 — Full Day",
    title: "Udaipur City Tour",
    description:
      "Explore Udaipur’s beauty — visit the City Palace, Jagdish Temple, and enjoy a serene boat ride on Lake Pichola as the sun sets over the water.",
    image:
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 10,
    time: "Day 10 — Departure",
    title: "Farewell from Udaipur",
    description:
      "After breakfast, bid farewell to Rajasthan as you take your flight or overland transfer from Udaipur — marking the end of your unforgettable journey.",
    image:
      "https://plus.unsplash.com/premium_photo-1661964079694-ccfaf7dc8028?w=800&h=500&fit=crop",
    direction: "left",
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
                <p className="text-sm text-gray-500 mb-2 sm:ml-2">{item.time}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
