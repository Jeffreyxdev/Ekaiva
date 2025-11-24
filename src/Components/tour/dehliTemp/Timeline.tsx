

const Timeline = () => {
 const timelineData = [
  {
    id: 1,
    time: "Start — Pick-Up & Welcome",
    title: "Pickup from Hotel / Airport",
    description:
      "Your expert guide greets you at your hotel, airport, or any preferred location in Delhi, Gurgaon, or Noida. Begin the day with a short trip briefing before the tour begins.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Stop 1 — Old Delhi’s Spiritual Core",
    title: "Jama Masjid & Chandni Chowk",
    description:
      "Visit Jama Masjid, India’s largest mosque, then enjoy a scenic rickshaw ride through Chandni Chowk. Pass landmarks like Gurudwara Sis Ganj and a hidden Jain Temple nestled within the bustling market.",
    image:
      "https://images.unsplash.com/photo-1705923620684-683a7473b504?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Stop 2 — Modern Monuments",
    title: "Akshardham Temple & Lotus Temple",
    description:
      "Experience the beauty and engineering marvel of Akshardham Temple, then visit the peaceful Bahai Lotus Temple—open to all, regardless of faith.",
    image:
      "https://plus.unsplash.com/premium_photo-1691030925341-71b0a6994815?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "Stop 3 — Sikh & Hindu Traditions",
    title: "Gurudwara Bangla Sahib & Birla Mandir",
    description:
      "Visit Gurudwara Bangla Sahib, soak in soul-stirring devotional music, and even taste langar. Then continue to Birla Mandir, known for its vibrant shrines and cultural heritage.",
    image:
      "https://images.unsplash.com/photo-1649072814953-2ba8a7a8a0d4?w=800&h=400&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Final Stop — Reflection & Return",
    title: "Sacred Heart Cathedral",
    description:
      "Step into Sacred Heart Cathedral and witness Delhi’s Christian heritage. After a moment of reflection, your driver returns you comfortably to your chosen destination.",
    image:
      "https://images.unsplash.com/photo-1687227722559-156d93f23e6c?w=800&h=400&fit=crop",
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
           Your temple adventure
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Step beyond city chaos and discover Delhi’s sacred heart on this spiritual journey. 
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
