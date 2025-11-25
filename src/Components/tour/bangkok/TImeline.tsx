

const Timeline = () => {
const timelineData = [
  {
    id: 1,
    time: "Day 1",
    title: "Arrival in Bangkok | City of Angels Awaits",
    description:
      "Arrive at Bangkok International Airport and complete your arrival formalities. Transfer to your SHA+ certified hotel and relax. Spend the evening at leisure exploring nearby markets, streets, and cafes. Overnight stay in Bangkok.",
    image:
      "https://images.unsplash.com/photo-1589932896376-5244c8898269?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Day 2",
    title: "Bangkok City Tour | Temples, Markets & Nightlife",
    description:
      "After breakfast, begin a guided tour of Bangkok’s famous landmarks — The Grand Palace, Wat Phra Kaew (Emerald Buddha), and Wat Benchamabopit (Marble Temple). Continue to Chinatown, local shrines, and floating markets before ending the day soaking in Bangkok’s vibrant nightlife. Overnight in Bangkok.",
    image:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Day 3",
    title: "Transfer to Pattaya | The City That Never Sleeps",
    description:
      "After breakfast, drive 2.5 hours to Pattaya through scenic countryside. Check in and unwind. Later, explore the lively Walking Street, beach cafes, and night markets. Overnight stay in Pattaya.",
    image:
      "https://images.unsplash.com/photo-1652346637723-83799b99ea87?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "Day 4",
    title: "Coral Island Tour | Water Adventures & Serenity",
    description:
      "Board a speedboat for a memorable Coral Island excursion. Relax on pristine white beaches or enjoy optional activities like snorkeling, parasailing, and jet skiing. A delicious Indian lunch will be served before returning to the hotel. Overnight stay in Pattaya.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Day 5",
    title: "Departure from Bangkok | Farewell Thailand",
    description:
      "After breakfast, check out and transfer to Bangkok Airport for your flight home — carrying with you unforgettable memories of Thailand’s culture, beaches, flavors, and charm.",
    image:
      "https://images.unsplash.com/photo-1646747025339-65759e192eb6?w=800&h=500&fit=crop",
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
            Tour Itinerary (Day-wise Experience)
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Discover Thailand’s vibrant heart — from golden temples and floating markets to Coral Island’s turquoise calm. A journey that balances peace, flavor, and fun.
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
              <div className="w-full md:w-1/2  px-9  md:px-10 mt-8 md:mt-0">
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
