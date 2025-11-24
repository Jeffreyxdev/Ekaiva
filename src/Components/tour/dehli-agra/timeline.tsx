

const Timeline = () => {
  const timelineData = [
  {
    id: 1,
    time: "Day 1 — Arrival in Delhi",
    title: "Welcome to the Capital",
    description:
      "Arrive in Delhi, where your driver assists with a smooth hotel transfer. Relax, unwind, and prepare for the journey ahead.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Day 2 — Full Day Sightseeing",
    title: "Old & New Delhi Tour",
    description:
      "Explore the city’s contrasts with visits to Jama Masjid, Raj Ghat, Qutub Minar, Humayun’s Tomb, India Gate, and the Presidential Palace. Ride a rickshaw through Chandni Chowk’s bustling and colorful bazaars for an unforgettable Delhi experience.",
    image:
      "https://plus.unsplash.com/premium_photo-1718146019714-a7a0ab9e8e8d?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Day 3 — Delhi to Agra",
    title: "Taj Mahal & Agra Fort",
    description:
      "Drive to Agra and witness the Taj Mahal glowing in the afternoon light. Explore Agra Fort, the regal residence of Mughal emperors, and enjoy a stroll through the marble markets before sunset.",
    image:
      "https://plus.unsplash.com/premium_photo-1680030235748-70ac34678387?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "Day 4 — Agra to Jaipur",
    title: "Journey to the Pink City",
    description:
      "After breakfast, travel toward Jaipur with a stop at Fatehpur Sikri—a beautifully preserved ghost city of Mughal architecture. Arrive in Jaipur and relax in your heritage hotel.",
    image:
      "https://images.unsplash.com/photo-1534001121480-d33a844d3f0c?w=800&h=400&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Day 5 — Jaipur Sightseeing",
    title: "Explore the Royal Capital",
    description:
      "Begin with an elephant ride to Amber Fort, then visit City Palace, Jantar Mantar Observatory, and Hawa Mahal. Capture Jaipur’s beauty across bustling bazaars and traditional handicraft workshops.",
    image:
      "https://images.unsplash.com/photo-1687227722559-156d93f23e6c?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 6,
    time: "Day 6 — Jaipur to Varanasi",
    title: "Flight to the Holy City",
    description:
      "Fly to Varanasi, India’s spiritual heart. Rest along the banks of the Ganges and absorb the ancient city’s timeless atmosphere.",
    image:
      "https://images.unsplash.com/photo-1706186998985-a3e709a9ba9a?w=800&h=400&fit=crop",
    direction: "left",
  },
  {
    id: 7,
    time: "Day 7 — Varanasi Sunrise",
    title: "Boat Ride on the Ganges",
    description:
      "Rise early for a magical sunrise boat ride on the Ganges. Watch the riverbanks come alive with prayers, rituals, and devotional chants as the city awakens.",
    image:
      "https://images.unsplash.com/photo-1554175775-07a1734ca8da?w=800&h=500&fit=crop",
    direction: "right",
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
            Your 8 Days premuim experience
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
     
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
