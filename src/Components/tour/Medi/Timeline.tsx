

const Timeline = () => {
const timelineData = [
  {
    id: 1,
    time: "Days 1–3",
    title: "London & Windsor",
    description:
      "Arrive in London and begin your adventure with a panoramic city tour. Enjoy iconic experiences like the London Eye and Thames River Cruise, visit the world-famous Madame Tussauds, and explore the royal grandeur of Windsor Castle.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Days 4–6",
    title: "Dublin & Belfast",
    description:
      "Cross over to Ireland and uncover Dublin’s charm through its historic landmarks and a visit to the Guinness Storehouse. Continue to Belfast for a fascinating Titanic Experience and explore the city’s Victorian architecture and lively streets.",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Days 7–8",
    title: "Glasgow & Edinburgh",
    description:
      "Journey to Scotland’s cultural heartlands. Enjoy panoramic tours of Glasgow and Edinburgh, exploring Edinburgh Castle, the Royal Mile, and the city’s magnificent cathedrals. Immerse yourself in Scottish history and vibrant city life.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "Days 9–10",
    title: "Loch Lomond & Ben Nevis",
    description:
      "Cruise the serene waters of Loch Lomond surrounded by stunning scenery. Take a gondola ride on Ben Nevis, the UK’s highest peak, and visit the Glenfinnan Viaduct — the iconic bridge from the Harry Potter films.",
    image:
      "https://images.unsplash.com/photo-1606214174585-9e4e7b57b3a3?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Day 11",
    title: "Glasgow & Departure",
    description:
      "Wrap up your journey with a visit to a local whiskey distillery in Glasgow to learn about Scotland’s beloved spirit. Transfer to the airport for your onward flight, taking home unforgettable memories of the UK and Ireland.",
    image:
      "https://images.unsplash.com/photo-1599158150601-8c3f0648b7a7?w=800&h=500&fit=crop",
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
            Your 11-Day Ireland Experience
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From sunrise to sunset, explore Delhi’s most iconic treasures in comfort and style — with seamless transfers, handpicked experiences, and the insight of local experts at every step.
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
