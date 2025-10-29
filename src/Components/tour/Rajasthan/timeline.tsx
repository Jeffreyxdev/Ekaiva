

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      time: "Days 1–2",
      title: "Explore Delhi’s Rich Landmarks & Vibrant Heritage",
      description:
        "Begin your journey in India’s capital. Visit the Red Fort, Jama Masjid, India Gate, Humayun’s Tomb, and Qutub Minar while soaking up Delhi’s blend of old-world charm and modern culture.",
      image:
        "https://images.unsplash.com/photo-1586612438666-ffd0ae97ad36?w=800&h=500&fit=crop",
      direction: "right",
    },
    {
      id: 2,
      time: "Days 3–4",
      title: "Journey to Agra — Home of the Taj Mahal",
      description:
        "Travel to Agra and witness the timeless beauty of the Taj Mahal at sunrise. Explore the historic Agra Fort and the city’s local craftsmanship that has inspired generations.",
      image:
        "https://images.unsplash.com/photo-1598190896090-9dc5c70361d8?w=800&h=500&fit=crop",
      direction: "left",
    },
    {
      id: 3,
      time: "Days 5–6",
      title: "Discover Jaipur’s Royal Palaces & Bustling Markets",
      description:
        "Head to Jaipur, the Pink City. Tour Amber Fort, City Palace, and Hawa Mahal, then stroll through vibrant bazaars filled with textiles, jewelry, and traditional crafts.",
      image:
        "https://images.unsplash.com/photo-1753881225249-16f5f33b72a5?w=800&h=500&fit=crop",
      direction: "right",
    },
    {
      id: 4,
      time: "Days 7–9",
      title: "Uncover Bikaner & Jaisalmer’s Desert Beauty",
      description:
        "Explore the majestic Junagarh Fort in Bikaner and journey through the Thar Desert to Jaisalmer. Witness golden sands, camel rides, and stunning desert sunsets.",
      image:
        "https://plus.unsplash.com/premium_photo-1661962388409-eb7a041606fb?w=800&h=500&fit=crop",
      direction: "left",
    },
    {
      id: 5,
      time: "Days 10–11",
      title: "Experience Jodhpur’s Majestic Forts & Palaces",
      description:
        "In the Blue City of Jodhpur, visit the mighty Mehrangarh Fort and elegant Umaid Bhawan Palace. Enjoy panoramic views and a deep sense of Rajasthan’s royal history.",
      image:
        "https://images.unsplash.com/photo-1504194947363-2f14d9e0e445?w=800&h=400&fit=crop",
      direction: "right",
    },
    {
      id: 6,
      time: "Days 12–13",
      title: "Romantic Udaipur & Return to Delhi",
      description:
        "Spend your final days in the City of Lakes — Udaipur. Cruise on Lake Pichola, explore City Palace, and enjoy the tranquil charm before flying back to Delhi.",
      image:
        "https://plus.unsplash.com/premium_photo-1697729555861-e406b4989ee1?w=800&h=400&fit=crop",
      direction: "left",
    },
  ]

  return (
   <div className="py-20 px-4">
  <div className="mx-auto bg-white rounded-2xl p-10 sm:p-8 md:p-16">
    {/* Header */}
    <div className="text-center mb-12 md:mb-16">
      <button className="px-4 py-1.5 border border-gray-300 rounded-full text-gray-600 text-sm mb-6 hover:bg-gray-100 transition">
        Day Itinerary
      </button>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-snug mb-4">
        13-Day Golden Triangle & Rajasthan Adventure
      </h1>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
        From Delhi’s historic heart to the royal cities of Jaipur, Jodhpur,
        and Udaipur — experience India’s culture, architecture, and timeless
        beauty across 13 unforgettable days.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative mt-12 md:mt-20">
      {/* Central Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 transform -translate-x-1/2"></div>
      {/* Mobile Line */}
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
                <p className="text-sm text-gray-600 leading-96 sm:ml-3">
                  {item.description}
                </p>
              </div>


          {/* Marker */}
          <div
            className={`
              absolute 
              flex items-center justify-center 
              w-7 h-7 md:w-10 md:h-10 
              bg-gray-900 text-white rounded-full 
              border-4 border-white shadow-md z-10
              ${item.direction === "left" ? "md:left-1/2 md:-translate-x-1/2" : "md:left-1/2 md:-translate-x-1/2"}
              left-0.5 md:left-1/2 md:-translate-x-1/2
            `}
          >
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
