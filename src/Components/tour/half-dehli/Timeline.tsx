

const Timeline = () => {
const timelineData = [
  {
    id: 1,
    time: "Old Delhi Tour — 4 Hours",
    title: "Explore Historic Old Delhi",
    description: `
Pick-Up & Start: Hotel or Airport pick-up, meet your guide and get a quick trip briefing.
Jama Masjid Visit: Step into India’s largest mosque and take in centuries of faith and architecture.
Rickshaw Ride through Chandni Chowk: Glide through the heart of the bazaar, spices, and vibrant crowds all around.
Spice Market & Cultural Sights: Smell and see the colorful spice markets; snap photos and engage with local vendors.
Red Fort (Outside) and Drop-Off: Marvel at its massive red sandstone walls before a comfortable drop-off.
    `,
    image:
      "https://images.unsplash.com/photo-1598977054780-2dc700fdc9d3?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "New Delhi Tour — 6 Hours",
    title: "Discover New Delhi Landmarks",
    description: `
Pick-Up & Orientation: Start from your hotel or airport, meet your guide, plan your stops.
Humayun’s Tomb: Discover Mughal grandeur and stroll lush gardens.
India Gate & Parliament House: Pause for photos and stories near national monuments.
Qutub Minar: Explore Delhi’s tallest ancient tower and UNESCO site.
Lotus Temple & Drop-Off: End with a serene visit before your private transfer back.
    `,
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800&h=500&fit=crop",
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
