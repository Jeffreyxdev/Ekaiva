

const Timeline = () => {
const timelineData = [
  {
    id: 1,
    time: "Days 1-2 — Arrival",
    title: "Arrived in Amsterdam",
    description:
      "Arrival in Amsterdam, Canal Cruise, Madurodam, and The Hague.",
    image:
      "https://images.unsplash.com/photo-1602552990492-194601ef29ab?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Days 3-4 — Morning to Evening",
    title: "Cologne city tour",
    description:
      "Cologne city tour, Rhine River cruise, and transfer to Mannheim",
    image:
      "https://plus.unsplash.com/premium_photo-1697729749013-d5263b662999?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Days 5-6",
    title: " Heritage & Shopping",
    description:
      "Black Forest visit, Rhine Falls boat ride, Swarovski Crystal World, and Innsbruck sightseeing with cable car ride.",
    image:
      "https://images.unsplash.com/photo-1588408687414-434a389defac?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "Days 7-10",
    title: "tour",
    description:
      "Venice’s waterways, Rome’s historic landmarks, Vatican Museum, Florence’s art treasures, Pisa Leaning Tower visit.",
    image:
      "https://images.unsplash.com/photo-1698085101069-f31612b046a4?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Days 11-13",
    title: "Excursion",
    description:
      "Lucerne city tour, Mt. Titlis with Ice Flyer, Lake Lucerne dinner cruise, Mt. Pilatus, Interlaken shopping.",
    image:
      "https://images.unsplash.com/photo-1624132343613-5791bbc2061e?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 6,
    time: "Days 14-16",
    title: "Leisure & Disneyland Cruise",
    description:
      "Traverse to Paris, visit iconic sites including Eiffel Tower and River Seine cruise, optional Disneyland day.",
    image:
      "https://images.unsplash.com/photo-1602271886918-bafecc837c7a?w=800&h=400&fit=crop",
    direction: "left",
  },
  {
    id: 7,
    time: "Day 17",
    title: "Departure from paris airport",
    description:
      "After breakfast, spend your final hours shopping for souvenirs or relaxing before your private airport transfer. Depart with unforgettable memories of the Emirates.",
    image:
      "https://images.unsplash.com/photo-1674444589678-373b56a61a6f?w=800&h=500&fit=crop",
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
