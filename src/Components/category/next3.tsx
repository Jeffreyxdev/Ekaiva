

const Timeline = () => {
  const timelineData = [
  {
    id: 1,
    time: "Morning",
    title: "Pick-up in Delhi and Sightseeing",
    description:
      "Pick-up in Delhi, start Old & New Delhi sightseeing—visit Jama Masjid, Red Fort (outside), Chandni Chowk, Spice Market, Qutub Minar, and India Gate.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Afternoon",
    title: "Delhi Monuments & Drive to Agra",
    description:
      "Stop at Humayun’s Tomb, Lotus Temple, and Parliament House. In the evening, enjoy a relaxing drive to Agra and check in to your hotel for an overnight stay.",
    image: "https://plus.unsplash.com/premium_photo-1718146019714-a7a0ab9e8e8d?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Early Morning",
    title: "Taj Mahal Sunrise Visit",
    description:
      "See the Taj Mahal at sunrise—beat the crowds for the perfect view and capture unforgettable photos.",
    image: "https://plus.unsplash.com/premium_photo-1680030235748-70ac34678387?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "After Breakfast",
    title: "Visit Agra Fort",
    description:
      "Visit the impressive Agra Fort and explore its Mughal architecture and history.",
    image: "https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?w=800&h=400&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Afternoon",
    title: "Free Time / Shopping",
    description:
      "Enjoy free time for last views of the Taj Mahal, shopping, or relaxing before your return journey to Delhi.",
    image: "https://images.unsplash.com/photo-1687227722559-156d93f23e6c?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 6,
    time: "Evening",
    title: "Return to Delhi",
    description:
      "Drive back to Delhi and get dropped at your preferred location by evening. Relax after a memorable 2-day trip.",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=400&fit=crop",
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
            Your One-Day Taj Mahal Experience from Bengaluru
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
