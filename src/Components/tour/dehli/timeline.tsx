

const Timeline = () => {
  const timelineData = [
  {
    id: 1,
    time: "Day 1 — Morning",
    title: "Discover Delhi (Old & New)",
    description:
      "Begin your journey with a pickup in Delhi. Visit iconic landmarks including Jama Masjid, Red Fort (outside view), Chandni Chowk, Spice Market, Qutub Minar, and India Gate.",
    image:
      "https://images.unsplash.com/photo-1598977054780-2dc700fdc9d3?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Day 1 — Afternoon",
    title: "Explore Humayun’s Tomb & Lotus Temple",
    description:
      "Continue sightseeing through Delhi with stops at Humayun’s Tomb, the Lotus Temple, and Parliament House. Immerse yourself in the capital’s vibrant heritage and architecture.",
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Day 1 — Evening",
    title: "Drive to Agra & Hotel Check-in",
    description:
      "Enjoy a scenic evening drive from Delhi to Agra. Upon arrival, check into your hotel and unwind after an exciting day of exploration.",
    image:
      "https://images.unsplash.com/photo-1582801396492-705377f39876?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "Day 2 — Early Morning",
    title: "Taj Mahal Sunrise Visit",
    description:
      "Experience the breathtaking beauty of the Taj Mahal at sunrise. Beat the crowds for serene views and the perfect photo opportunity.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Day 2 — After Breakfast",
    title: "Explore Agra Fort",
    description:
      "Visit the grand Agra Fort, a UNESCO World Heritage site, to uncover Mughal history and enjoy sweeping views of the Yamuna River.",
    image:
      "https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 6,
    time: "Day 2 — Afternoon & Evening",
    title: "Shopping & Return to Delhi",
    description:
      "Enjoy free time for shopping or a final glimpse of Agra before returning comfortably to Delhi. You’ll be dropped off at your preferred location by evening.",
    image:
      "https://plus.unsplash.com/premium_photo-1697729555861-e406b4989ee1?w=800&h=400&fit=crop",
    direction: "left",
  },
];


  return (
    <div className="py-20 px-4">                                                                                                                                                                                                                                                                                                                                                                                            
      <div className="mx-auto bg-white rounded-2xl p-10 md:p-16">
        {/* Header */}
        <div className="text-center mb-16">
          <button className="px-4 py-1.5 border border-gray-300 rounded-full text-gray-600 text-sm mb-6 hover:bg-gray-100 transition">
            Day Itinerary
          </button>

          <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-snug mb-4">
            Your two-Day Dehli Experience
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From sunrise to sunset, explore Dehli most iconic treasures in
            comfort and style — with seamless transfers, curated experiences,
            and local expertise at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 transform -translate-x-1/2"></div>

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
                className={`w-full md:w-1/2 px-4 md:px-10 ${
                  item.direction === "left" ? "md:text-left" : "md:text-right"
                }`}
              >
                <p className="text-sm text-gray-500 mb-2">{item.time}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-gray-900 text-white rounded-full border-4 border-white shadow-md z-10">
                {item.id}
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 px-4 md:px-10 mt-8 md:mt-0">
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
